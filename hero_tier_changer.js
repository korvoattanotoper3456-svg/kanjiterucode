let HeroTierChanger = {};

(function () {
    const PATH = ["Utility", "Hero Tier Changer"];
    const TIER_VALUES = ["Off", "S", "A", "B", "C"];

    const HERO_TIERS = {
        npc_dota_hero_invoker: "S",
        npc_dota_hero_storm_spirit: "A",
        npc_dota_hero_puck: "A",
        npc_dota_hero_shadow_fiend: "B",
        npc_dota_hero_axe: "C"
    };

    const HERO_MODEL_OVERRIDES = {
        npc_dota_hero_invoker: null,
        npc_dota_hero_storm_spirit: null,
        npc_dota_hero_puck: null,
        npc_dota_hero_shadow_fiend: null,
        npc_dota_hero_axe: null
    };

    const TIER_PRESETS = {
        S: {
            color: new Color(255, 120, 40, 255),
            glow: [255, 120, 40, 220],
            scale: 1.12
        },
        A: {
            color: new Color(255, 215, 80, 255),
            glow: [255, 215, 80, 200],
            scale: 1.08
        },
        B: {
            color: new Color(80, 190, 255, 255),
            glow: [80, 190, 255, 180],
            scale: 1.04
        },
        C: {
            color: new Color(170, 170, 170, 255),
            glow: [170, 170, 170, 140],
            scale: 1.0
        }
    };

    const enableOpt = Menu.AddToggle(PATH, "Enable", true).SetGeneral(true);
    const teamOpt = Menu.AddComboBox(PATH, "Apply to", ["Enemy", "Friendly", "Both"], 0);
    const fallbackTierOpt = Menu.AddComboBox(PATH, "Fallback tier", TIER_VALUES, 0);

    const enable = enableOpt.GetBindedValue();

    const originalState = new Map();

    function shouldApplyTo(hero, me, teamMode) {
        if (!me || !hero || !hero.IsExist()) {
            return false;
        }

        if (hero.IsIllusion && hero.IsIllusion()) {
            return false;
        }

        if (teamMode === 0) {
            return !hero.IsSameTeam(me);
        }

        if (teamMode === 1) {
            return hero.IsSameTeam(me);
        }

        return true;
    }

    function getHeroKey(hero) {
        return hero.GetIndex();
    }

    function getHeroTier(unitName) {
        const explicitTier = HERO_TIERS[unitName];
        if (explicitTier) {
            return explicitTier;
        }

        const fallbackIndex = fallbackTierOpt.GetValue();
        return TIER_VALUES[fallbackIndex];
    }

    function ensureOriginalState(hero) {
        const heroKey = getHeroKey(hero);
        if (originalState.has(heroKey)) {
            return originalState.get(heroKey);
        }

        const state = {
            model: hero.GetModelName(),
            scale: 1.0
        };

        originalState.set(heroKey, state);
        return state;
    }

    function resetHero(hero) {
        if (!hero || !hero.IsExist()) {
            return;
        }

        const state = ensureOriginalState(hero);
        hero.SetModel(state.model);
        hero.SetScale(state.scale);
        hero.SetModelColor(new Color(255, 255, 255, 255));
        hero.SetGlow(false);
    }

    function applyTier(hero, tier) {
        if (!hero || !hero.IsExist()) {
            return;
        }

        if (tier === "Off") {
            resetHero(hero);
            return;
        }

        const preset = TIER_PRESETS[tier];
        if (!preset) {
            resetHero(hero);
            return;
        }

        ensureOriginalState(hero);

        const unitName = hero.GetUnitName();
        const overrideModel = HERO_MODEL_OVERRIDES[unitName];
        if (overrideModel) {
            hero.SetModel(overrideModel);
        }

        hero.SetScale(preset.scale);
        hero.SetModelColor(preset.color);
        hero.SetGlow(true, preset.glow[0], preset.glow[1], preset.glow[2], preset.glow[3]);
    }

    function updateHeroes() {
        if (!enable.value) {
            for (const hero of EntitySystem.GetHeroesList()) {
                if (!hero || !hero.IsExist()) {
                    continue;
                }
                resetHero(hero);
            }
            return;
        }

        const me = EntitySystem.GetLocalHero();
        if (!me || !me.IsAlive()) {
            return;
        }

        const teamMode = teamOpt.GetValue();
        for (const hero of EntitySystem.GetHeroesList()) {
            if (!hero || !hero.IsExist()) {
                continue;
            }

            if (!shouldApplyTo(hero, me, teamMode)) {
                resetHero(hero);
                continue;
            }

            applyTier(hero, getHeroTier(hero.GetUnitName()));
        }
    }

    HeroTierChanger.OnScriptLoad = () => {
        updateHeroes();
    };

    HeroTierChanger.OnScriptUnload = () => {
        for (const hero of EntitySystem.GetHeroesList()) {
            if (!hero || !hero.IsExist()) {
                continue;
            }
            resetHero(hero);
        }
        originalState.clear();
    };

    HeroTierChanger.OnUpdate = () => {
        if (!Engine.OnceAtByKey(0.2, "HeroTierChanger.Update", true)) {
            return;
        }

        updateHeroes();
    };

    RegisterScript(HeroTierChanger, "Hero Tier Changer");
})();
