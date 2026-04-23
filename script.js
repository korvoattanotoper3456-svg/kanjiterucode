const body = document.body;
const themeToggle = document.querySelector(".theme-toggle");
const audioToggle = document.querySelector(".audio-toggle");
const audio = document.querySelector(".ambient-audio");
const video = document.querySelector(".background-video");
const preloader = document.querySelector(".preloader");
const scrollTopButton = document.querySelector(".scroll-top");
const equalizerBars = [...document.querySelectorAll(".equalizer span")];
const revealNodes = [...document.querySelectorAll("[data-reveal]")];

const storedTheme = window.localStorage.getItem("bebra-theme");
if (storedTheme) {
  if (storedTheme !== "dark") {
    body.dataset.theme = storedTheme;
  }
}

themeToggle?.addEventListener("click", () => {
  const nextTheme = body.dataset.theme === "light" ? "dark" : "light";

  if (nextTheme === "dark") {
    delete body.dataset.theme;
    window.localStorage.setItem("bebra-theme", "dark");
    return;
  }

  body.dataset.theme = nextTheme;
  window.localStorage.setItem("bebra-theme", nextTheme);
});

audioToggle?.addEventListener("click", async () => {
  if (!audio) {
    return;
  }

  if (!audio.paused) {
    audio.pause();
    audioToggle.classList.remove("is-active");
    audioToggle.textContent = "включить музыку";
    equalizerBars.forEach((bar) => {
      bar.style.opacity = "0.35";
    });
    return;
  }

  audio.volume = 0.72;

  try {
    await audio.play();
    audioToggle.classList.add("is-active");
    audioToggle.textContent = "выключить музыку";
    equalizerBars.forEach((bar) => {
      bar.style.opacity = "1";
    });
  } catch (error) {
    audioToggle.textContent = "музыка заблокирована";
  }
});

video?.play().catch(() => {});

audio?.addEventListener("pause", () => {
  equalizerBars.forEach((bar) => {
    bar.style.opacity = "0.35";
  });
});

const hidePreloader = () => {
  preloader?.classList.add("is-hidden");
};

window.addEventListener("load", () => {
  window.setTimeout(hidePreloader, 700);
});

window.setTimeout(hidePreloader, 2200);

scrollTopButton?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.18 }
);

revealNodes.forEach((node, index) => {
  node.style.transitionDelay = `${index * 60}ms`;
  observer.observe(node);
});
