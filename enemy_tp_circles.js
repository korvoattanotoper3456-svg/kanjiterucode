let EnemyTPCircles = {};

(function () {
    const PATH = ["Utility", "Enemy TP Circles"];
    const TELEPORT_MODIFIER = "modifier_teleporting";
    const CHAT_COOLDOWN = 6.0;
    const TEAM_DRAW_INTERVAL = 0.7;
    const MIN_TARGET_DISTANCE = 350;
    const MID_LANE_THRESHOLD = 2200;

    const SOURCE_CIRCLE_COLOR = new Color(255, 196, 64, 255);
    const TARGET_CIRCLE_COLOR = new Color(255, 84, 84, 255);
    const LINE_COLOR = new Color(255, 120, 120, 255);
    const MANUAL_SOURCE_COLOR = new Color(80, 220, 255, 255);
    const MANUAL_TARGET_COLOR = new Color(110, 255, 140, 255);

    const enableOpt = Menu.AddToggle(PATH, "Enable", true).SetGeneral(true);
    const showTimerOpt = Menu.AddToggle(PATH, "Show timer", true);
    const autoChatOpt = Menu.AddToggle(PATH, "Auto team chat", true);
    const autoPingOpt = Menu.AddToggle(PATH, "Auto ping target", true);
    const rainbowTextOpt = Menu.AddToggle(PATH, "Rainbow text", false);
    const manualDrawOpt = Menu.AddToggle(PATH, "Manual minimap draw", true);
    const manualDrawKeyOpt = Menu.AddKeyBind(PATH, "Manual draw key", Enum.ButtonCode.KEY_LCONTROL);

    const enable = enableOpt.GetBindedValue();
    const showTimer = showTimerOpt.GetBindedValue();
    const autoChat = autoChatOpt.GetBindedValue();
    const autoPing = autoPingOpt.GetBindedValue();
    const rainbowText = rainbowTextOpt.GetBindedValue();
    const manualDraw = manualDrawOpt.GetBindedValue();

    let font = null;
    let me = null;
    let teamChatChannel = "team";

    const teleportsByModifier = new Map();
    const teleportsByEntity = new Map();
    const particleToTeleport = new Map();
    const recentChatByPlayer = new Map();
    const manualTrace = { start: null, end: null };

    function refreshLocalHero() {
        me = EntitySystem.GetLocalHero();
    }

    function refreshChatChannel() {
        const channels = Chat.GetChannels();
        if (!channels || channels.length === 0) {
            return;
        }

        const teamChannel = channels.find((name) => name && name.toLowerCase().includes("team"));
        if (teamChannel) {
            teamChatChannel = teamChannel;
        }
    }

    function clearMap(map) {
        for (const key of map.keys()) {
            map.delete(key);
        }
    }

    function resetState() {
        clearMap(teleportsByModifier);
        clearMap(teleportsByEntity);
        clearMap(particleToTeleport);
        clearMap(recentChatByPlayer);
        manualTrace.start = null;
        manualTrace.end = null;
    }

    function isEnemyHeroTeleport(entity, modifier) {
        if (!me || !entity || !modifier) {
            return false;
        }

        if (!entity.IsExist() || !modifier.IsExist()) {
            return false;
        }

        if (!entity.IsHero || !entity.IsHero()) {
            return false;
        }

        if (entity.IsSameTeam(me) || entity.IsIllusion()) {
            return false;
        }

        return modifier.GetName() === TELEPORT_MODIFIER;
    }

    function prettifyHeroName(unitName) {
        if (!unitName) {
            return "Enemy hero";
        }

        return unitName
            .replace("npc_dota_hero_", "")
            .split("_")
            .filter(Boolean)
            .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
            .join(" ");
    }

    function inferLaneName(position) {
        if (!position) {
            return "lane";
        }

        if (Math.abs(position.x - position.y) <= MID_LANE_THRESHOLD) {
            return "mid";
        }

        return position.y > position.x ? "top" : "bottom";
    }

    function isSameLaneAsMe(position) {
        if (!me || !position || !me.IsExist || !me.IsExist()) {
            return false;
        }

        return inferLaneName(me.GetAbsOrigin()) === inferLaneName(position);
    }

    function sendTeamMessage(message) {
        if (!message) {
            return;
        }

        try {
            Chat.Say(teamChatChannel, message);
            return;
        } catch (e) {
        }

        try {
            if (!Engine.IsExecuteCommandEnabled()) {
                Engine.EnableExecuteCommand(true);
            }
            Engine.ExecuteCommand('say_team "' + message.replace(/"/g, "") + '"');
        } catch (e) {
        }
    }

    function maybeAnnounceTeleport(entry) {
        if (!autoChat.value || !entry || entry.announced) {
            return;
        }

        if (!isSameLaneAsMe(entry.sourcePosition)) {
            entry.announced = true;
            return;
        }

        const now = GameRules.GetGameTime();
        const lastAnnouncement = recentChatByPlayer.get(entry.playerId) || -1000;
        if (now - lastAnnouncement < CHAT_COOLDOWN) {
            entry.announced = true;
            return;
        }

        sendTeamMessage(entry.heroName + " ушел с линии");
        recentChatByPlayer.set(entry.playerId, now);
        entry.announced = true;
    }

    function maybePingTarget(entry) {
        if (!autoPing.value || !entry || !entry.targetPosition || entry.localPinged) {
            return;
        }

        try {
            MiniMap.Ping(entry.targetPosition, Enum.PingType.DANGER, true);
        } catch (e) {
        }

        entry.localPinged = true;
    }

    function maybeBroadcastTeamTeleport(entry, now) {
        if (!entry || !entry.targetPosition) {
            return;
        }

        if (now - entry.lastTeamDrawTime < TEAM_DRAW_INTERVAL) {
            return;
        }

        try {
            MiniMap.DrawLine(entry.sourcePosition, entry.targetPosition, false);
        } catch (e) {
        }

        if (!entry.teamPinged) {
            try {
                MiniMap.Ping(entry.targetPosition, Enum.PingType.DANGER, false);
            } catch (e) {
            }
            entry.teamPinged = true;
        }

        entry.lastTeamDrawTime = now;
    }

    function getParticleKey(obj) {
        if (!obj) {
            return null;
        }

        return obj.particleIndex ?? obj.particleSystemHandle ?? obj.handle ?? null;
    }

    function isTeleportParticleName(name) {
        if (!name) {
            return false;
        }

        const lower = name.toLowerCase();
        return lower.includes("teleport") || lower.includes("town_portal") || lower.includes("furion_teleport");
    }

    function getEntryByParticleOwner(obj) {
        if (!obj) {
            return null;
        }

        const directIndex = obj.entityIndex ?? null;
        if (directIndex !== null && teleportsByEntity.has(directIndex)) {
            return teleportsByEntity.get(directIndex);
        }

        const directEntity = obj.entity ?? null;
        if (directEntity && directEntity.IsExist && directEntity.IsExist()) {
            const entityIndex = directEntity.GetIndex();
            if (teleportsByEntity.has(entityIndex)) {
                return teleportsByEntity.get(entityIndex);
            }
        }

        const modifierEntity = obj.entityForModifiers ?? null;
        if (modifierEntity && modifierEntity.IsExist && modifierEntity.IsExist()) {
            const entityIndex = modifierEntity.GetIndex();
            if (teleportsByEntity.has(entityIndex)) {
                return teleportsByEntity.get(entityIndex);
            }
        }

        return null;
    }

    function updateTargetFromParticle(entry, x, y, z) {
        if (!entry) {
            return;
        }

        const nextTarget = new Vector(x, y, z);
        if (entry.sourcePosition.Distance2D(nextTarget) < MIN_TARGET_DISTANCE) {
            return;
        }

        entry.targetPosition = nextTarget;
    }

    function updateTargetFromParticlePayload(entry, obj) {
        if (!entry || !obj) {
            return;
        }

        if (typeof obj.x !== "number" || typeof obj.y !== "number" || typeof obj.z !== "number") {
            return;
        }

        if (typeof obj.controlPoint === "number" && obj.controlPoint > 3) {
            return;
        }

        updateTargetFromParticle(entry, obj.x, obj.y, obj.z);
    }

    function createTeleportEntry(entity, modifier) {
        const modifierIndex = modifier.GetIndex();
        const entityIndex = entity.GetIndex();
        const remaining = Math.max(0, modifier.GetRemainingTime());

        const entry = {
            modifierIndex: modifierIndex,
            entityIndex: entityIndex,
            entity: entity,
            modifier: modifier,
            playerId: entity.GetPlayerID ? entity.GetPlayerID() : entityIndex,
            heroName: prettifyHeroName(entity.GetUnitName ? entity.GetUnitName() : ""),
            sourcePosition: entity.GetAbsOrigin().Clone(),
            targetPosition: null,
            expireTime: GameRules.GetGameTime() + remaining,
            announced: false,
            localPinged: false,
            teamPinged: false,
            lastTeamDrawTime: -1000
        };

        teleportsByModifier.set(modifierIndex, entry);
        teleportsByEntity.set(entityIndex, entry);
        maybeAnnounceTeleport(entry);
    }

    function removeTeleportEntry(modifier) {
        if (!modifier) {
            return;
        }

        const modifierIndex = modifier.GetIndex();
        const entry = teleportsByModifier.get(modifierIndex);
        if (!entry) {
            return;
        }

        teleportsByModifier.delete(modifierIndex);
        teleportsByEntity.delete(entry.entityIndex);

        for (const [particleKey, linkedModifierIndex] of particleToTeleport) {
            if (linkedModifierIndex === modifierIndex) {
                particleToTeleport.delete(particleKey);
            }
        }
    }

    function worldToMiniMap(position) {
        const point = Renderer.WorldToMap(position.x, position.y);
        return { x: point[0], y: point[1] };
    }

    function getRainbowColor(timeShift) {
        const t = GameRules.GetGameTime() * 2.4 + timeShift;
        const r = Math.floor(127 + 128 * Math.sin(t));
        const g = Math.floor(127 + 128 * Math.sin(t + 2.094));
        const b = Math.floor(127 + 128 * Math.sin(t + 4.188));
        return new Color(r, g, b, 255);
    }

    function getTextColor(index) {
        if (!rainbowText.value) {
            return TARGET_CIRCLE_COLOR;
        }

        return getRainbowColor(index * 0.65);
    }

    function drawCircleOnMiniMap(position, radius, color) {
        const mapPoint = worldToMiniMap(position);
        Renderer.SetDrawColor(color);
        Renderer.DrawOutlineCircle(mapPoint.x, mapPoint.y, radius, 2, 28);
    }

    function drawArrowOnMiniMap(start, end, color) {
        const startPoint = worldToMiniMap(start);
        const endPoint = worldToMiniMap(end);
        const dx = endPoint.x - startPoint.x;
        const dy = endPoint.y - startPoint.y;
        const length = Math.sqrt(dx * dx + dy * dy);
        if (length < 8) {
            return;
        }

        const nx = dx / length;
        const ny = dy / length;
        const arrowLength = 8;
        const arrowWidth = 4;
        const baseX = endPoint.x - nx * arrowLength;
        const baseY = endPoint.y - ny * arrowLength;
        const leftX = baseX - ny * arrowWidth;
        const leftY = baseY + nx * arrowWidth;
        const rightX = baseX + ny * arrowWidth;
        const rightY = baseY - nx * arrowWidth;

        Renderer.SetDrawColor(color);
        Renderer.DrawLine(startPoint.x, startPoint.y, endPoint.x, endPoint.y, 2);
        Renderer.DrawLine(endPoint.x, endPoint.y, leftX, leftY, 2);
        Renderer.DrawLine(endPoint.x, endPoint.y, rightX, rightY, 2);
    }

    function captureManualTracePoint() {
        if (!manualDraw.value) {
            return;
        }

        if (!manualDrawKeyOpt.IsKeyDown(false)) {
            return;
        }

        if (!Input.IsCursorOnMinimap()) {
            return;
        }

        const [cursorX, cursorY] = Input.GetCursorPos();
        const world = Renderer.MapToWorld(cursorX, cursorY);
        const position = new Vector(world[0], world[1], 0);

        if (Input.IsKeyDownOnce(Enum.ButtonCode.MOUSE_LEFT, false)) {
            if (!manualTrace.start || manualTrace.end) {
                manualTrace.start = position;
                manualTrace.end = null;
            } else {
                manualTrace.end = position;
            }
        }

        if (Input.IsKeyDownOnce(Enum.ButtonCode.MOUSE_RIGHT, false)) {
            manualTrace.start = null;
            manualTrace.end = null;
        }
    }

    function formatTime(value) {
        return value.toFixed(1) + "s";
    }

    EnemyTPCircles.OnLocalHeroCreate = () => refreshLocalHero();
    EnemyTPCircles.OnLocalHeroDestroy = () => {
        me = null;
        resetState();
    };

    EnemyTPCircles.OnScriptLoad = () => {
        font = Renderer.LoadFont("Radiance", 14, Enum.FontWeight.BOLD, Enum.FontFlags.OUTLINE);
        refreshLocalHero();
        refreshChatChannel();
        resetState();
    };

    EnemyTPCircles.OnScriptUnload = () => {
        resetState();
        font = null;
        me = null;
    };

    EnemyTPCircles.OnModifierCreate = (entity, modifier) => {
        if (!enable.value) {
            return;
        }

        if (!isEnemyHeroTeleport(entity, modifier)) {
            return;
        }

        createTeleportEntry(entity, modifier);
    };

    EnemyTPCircles.OnModifierDestroy = (entity, modifier) => {
        removeTeleportEntry(modifier);
    };

    EnemyTPCircles.OnParticleCreate = (particle) => {
        if (!enable.value) {
            return;
        }

        const particleName = Particle.GetParticleName(particle.particleNameIndex);
        if (!isTeleportParticleName(particleName)) {
            return;
        }

        const entry = getEntryByParticleOwner(particle);
        if (!entry) {
            return;
        }

        const particleKey = getParticleKey(particle);
        if (particleKey === null) {
            return;
        }

        particleToTeleport.set(particleKey, entry.modifierIndex);
    };

    EnemyTPCircles.OnParticleUpdateForward = (obj) => {
        const particleKey = getParticleKey(obj);
        if (particleKey === null || !particleToTeleport.has(particleKey)) {
            return;
        }

        const entry = teleportsByModifier.get(particleToTeleport.get(particleKey));
        updateTargetFromParticlePayload(entry, obj);
    };

    EnemyTPCircles.OnParticleUpdateFallback = (obj) => {
        const particleKey = getParticleKey(obj);
        if (particleKey === null || !particleToTeleport.has(particleKey)) {
            return;
        }

        const entry = teleportsByModifier.get(particleToTeleport.get(particleKey));
        updateTargetFromParticlePayload(entry, obj);
    };

    EnemyTPCircles.OnParticleDestroy = (particle) => {
        const particleKey = getParticleKey(particle);
        if (particleKey !== null) {
            particleToTeleport.delete(particleKey);
        }
    };

    EnemyTPCircles.OnUpdate = () => {
        if (!enable.value) {
            if (teleportsByModifier.size > 0) {
                resetState();
            }
            return;
        }

        if (!me || !me.IsAlive()) {
            return;
        }

        if (!Engine.OnceAtByKey(0.05, "EnemyTPCircles.Tick", true)) {
            return;
        }

        captureManualTracePoint();

        const now = GameRules.GetGameTime();
        for (const [modifierIndex, entry] of teleportsByModifier) {
            if (!entry.modifier || !entry.modifier.IsExist()) {
                removeTeleportEntry({ GetIndex: () => modifierIndex });
                continue;
            }

            if (entry.modifier.GetRemainingTime() <= 0 || now >= entry.expireTime + 0.1) {
                removeTeleportEntry(entry.modifier);
                continue;
            }

            maybeAnnounceTeleport(entry);

            if (entry.targetPosition) {
                maybePingTarget(entry);
                maybeBroadcastTeamTeleport(entry, now);
            }
        }
    };

    EnemyTPCircles.OnDraw = () => {
        if (!enable.value && !manualTrace.start) {
            return;
        }

        if (manualTrace.start) {
            drawCircleOnMiniMap(manualTrace.start, 8, MANUAL_SOURCE_COLOR);
            if (manualTrace.end) {
                drawCircleOnMiniMap(manualTrace.end, 8, MANUAL_TARGET_COLOR);
                drawArrowOnMiniMap(manualTrace.start, manualTrace.end, MANUAL_TARGET_COLOR);
            }
        }

        if (!enable.value) {
            return;
        }

        let drawIndex = 0;
        for (const entry of teleportsByModifier.values()) {
            if (!entry.sourcePosition) {
                continue;
            }

            drawCircleOnMiniMap(entry.sourcePosition, 7, SOURCE_CIRCLE_COLOR);

            if (entry.targetPosition) {
                drawCircleOnMiniMap(entry.targetPosition, 9, TARGET_CIRCLE_COLOR);
                drawArrowOnMiniMap(entry.sourcePosition, entry.targetPosition, LINE_COLOR);
            }

            if (!showTimer.value || !font) {
                continue;
            }

            const anchor = entry.targetPosition || entry.sourcePosition;
            const mapPoint = worldToMiniMap(anchor);
            const remaining = Math.max(0, entry.modifier.GetRemainingTime());
            Renderer.SetDrawColor(getTextColor(drawIndex));
            Renderer.DrawText(font, mapPoint.x + 10, mapPoint.y - 8, entry.heroName + " " + formatTime(remaining));
            drawIndex += 1;
        }
    };

    RegisterScript(EnemyTPCircles, "Enemy TP Circles");
})();
