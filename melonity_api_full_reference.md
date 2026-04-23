# Melonity API ? Full Extracted Reference

- Source: https://docs.melonity.gg/en/guide/description
- Generated (UTC): 2026-04-19 16:15:48 UTC
- Scope: all API pages from sidebar (`/en/guide/classes/*`, `/en/guide/enum/*`)
- Pages parsed: 138
- Pages failed: 0

## Index

### Classes
- [Angle](#angle) ? `/en/guide/classes/angle/index`
- [FireEventObject](#fireeventobject) ? `/en/guide/classes/callbacks/FireEventObject`
- [Callbacks](#callbacks) ? `/en/guide/classes/callbacks/index`
- [LinearProjectile](#linearprojectile) ? `/en/guide/classes/callbacks/LinearProjectile`
- [OnStartSoundObject](#onstartsoundobject) ? `/en/guide/classes/callbacks/OnStartSoundObject`
- [ProtobufLiteObject](#protobufliteobject) ? `/en/guide/classes/callbacks/ProtobufLiteObject`
- [ScriptDescription](#scriptdescription) ? `/en/guide/classes/callbacks/ScriptDescription`
- [Camera](#camera) ? `/en/guide/classes/camera/index`
- [Chat](#chat) ? `/en/guide/classes/chat/index`
- [Color](#color) ? `/en/guide/classes/color/index`
- [Config](#config) ? `/en/guide/classes/config/index`
- [ConVar](#convar) ? `/en/guide/classes/convar/index`
- [Engine](#engine) ? `/en/guide/classes/engine/cheat`
- [Engine](#engine) ? `/en/guide/classes/engine/dota`
- [Engine](#engine) ? `/en/guide/classes/engine/engine`
- [Ability](#ability) ? `/en/guide/classes/entitylist/Ability`
- [Courier](#courier) ? `/en/guide/classes/entitylist/Courier`
- [Entity](#entity) ? `/en/guide/classes/entitylist/Entity`
- [GameManagerProxy](#gamemanagerproxy) ? `/en/guide/classes/entitylist/GameManagerProxy`
- [GameRulesProxy](#gamerulesproxy) ? `/en/guide/classes/entitylist/GameRulesProxy`
- [Hero](#hero) ? `/en/guide/classes/entitylist/Hero`
- [Item](#item) ? `/en/guide/classes/entitylist/Item`
- [LightInfo](#lightinfo) ? `/en/guide/classes/entitylist/LightInfo`
- [LinearProjectileObject](#linearprojectileobject) ? `/en/guide/classes/entitylist/LinearProjectileObject`
- [MemoryAccessor](#memoryaccessor) ? `/en/guide/classes/entitylist/MemoryAccessor`
- [ModelEntity](#modelentity) ? `/en/guide/classes/entitylist/ModelEntity`
- [Modifier](#modifier) ? `/en/guide/classes/entitylist/Modifier`
- [NPC](#npc) ? `/en/guide/classes/entitylist/NPC`
- [PhysicalItem](#physicalitem) ? `/en/guide/classes/entitylist/PhysicalItem`
- [Player](#player) ? `/en/guide/classes/entitylist/Player`
- [PowerTreads](#powertreads) ? `/en/guide/classes/entitylist/PowerTreads`
- [Rune](#rune) ? `/en/guide/classes/entitylist/Rune`
- [TargetProjectileObject](#targetprojectileobject) ? `/en/guide/classes/entitylist/TargetProjectileObject`
- [TempTree](#temptree) ? `/en/guide/classes/entitylist/TempTree`
- [Tower](#tower) ? `/en/guide/classes/entitylist/Tower`
- [Tree](#tree) ? `/en/guide/classes/entitylist/Tree`
- [EntitySystem](#entitysystem) ? `/en/guide/classes/entitysystem/entitysystem`
- [GetBinaryObjectCount](#getbinaryobjectcount) ? `/en/guide/classes/entitysystem/GetBinaryObjectCount`
- [GetByHandle](#getbyhandle) ? `/en/guide/classes/entitysystem/GetByHandle`
- [GetByIndex](#getbyindex) ? `/en/guide/classes/entitysystem/GetByIndex`
- [GetCouriersList](#getcourierslist) ? `/en/guide/classes/entitysystem/GetCouriersList`
- [GetEntitiesList](#getentitieslist) ? `/en/guide/classes/entitysystem/GetEntitiesList`
- [GetHeroesList](#getheroeslist) ? `/en/guide/classes/entitysystem/GetHeroesList`
- [GetLinearProjectileList](#getlinearprojectilelist) ? `/en/guide/classes/entitysystem/GetLinearProjectileList`
- [GetListByClassName](#getlistbyclassname) ? `/en/guide/classes/entitysystem/GetListByClassName`
- [GetLocalHero](#getlocalhero) ? `/en/guide/classes/entitysystem/GetLocalHero`
- [GetLocalHeroIndex](#getlocalheroindex) ? `/en/guide/classes/entitysystem/GetLocalHeroIndex`
- [GetLocalPlayer](#getlocalplayer) ? `/en/guide/classes/entitysystem/GetLocalPlayer`
- [GetLocalPlayerIndex](#getlocalplayerindex) ? `/en/guide/classes/entitysystem/GetLocalPlayerIndex`
- [GetNPCsList](#getnpcslist) ? `/en/guide/classes/entitysystem/GetNPCsList`
- [GetPhysicalItemsList](#getphysicalitemslist) ? `/en/guide/classes/entitysystem/GetPhysicalItemsList`
- [GetPlayersList](#getplayerslist) ? `/en/guide/classes/entitysystem/GetPlayersList`
- [GetRunesList](#getruneslist) ? `/en/guide/classes/entitysystem/GetRunesList`
- [GetSingleton](#getsingleton) ? `/en/guide/classes/entitysystem/GetSingleton`
- [GetTargetProjectileList](#gettargetprojectilelist) ? `/en/guide/classes/entitysystem/GetTargetProjectileList`
- [GameManager](#gamemanager) ? `/en/guide/classes/gamemanager/index`
- [GameRules](#gamerules) ? `/en/guide/classes/gamerules/index`
- [GCRequest](#gcrequest) ? `/en/guide/classes/gc/GCRequest`
- [GC](#gc) ? `/en/guide/classes/gc/index`
- [GridNav](#gridnav) ? `/en/guide/classes/gridnav/index`
- [HTTPConnection](#httpconnection) ? `/en/guide/classes/http/HTTPConnection`
- [HTTP](#http) ? `/en/guide/classes/http/index`
- [Humanizer](#humanizer) ? `/en/guide/classes/humanizer/index`
- [Input](#input) ? `/en/guide/classes/input/index`
- [KeyValue](#keyvalue) ? `/en/guide/classes/keyvalue/index`
- [Log](#log) ? `/en/guide/classes/log/index`
- [Matchmaking](#matchmaking) ? `/en/guide/classes/matchmaking/index`
- [Menu](#menu) ? `/en/guide/classes/menu/index`
- [MenuOption](#menuoption) ? `/en/guide/classes/menu/MenuOption`
- [MiniMap](#minimap) ? `/en/guide/classes/minimap/index`
- [NetChannel](#netchannel) ? `/en/guide/classes/netchannel/index`
- [NetMessages](#netmessages) ? `/en/guide/classes/netmessages/index`
- [Panorama](#panorama) ? `/en/guide/classes/panorama/index`
- [PanoramaPanel](#panoramapanel) ? `/en/guide/classes/panorama/PanoramaPanel`
- [Particle](#particle) ? `/en/guide/classes/particle/index`
- [BlendState](#blendstate) ? `/en/guide/classes/renderer/BlendState`
- [Font](#font) ? `/en/guide/classes/renderer/Font`
- [Image](#image) ? `/en/guide/classes/renderer/Image`
- [Renderer](#renderer) ? `/en/guide/classes/renderer/index`
- [Shader](#shader) ? `/en/guide/classes/renderer/Shader`
- [Texture](#texture) ? `/en/guide/classes/renderer/Texture`
- [Vertexes](#vertexes) ? `/en/guide/classes/renderer/Vertexes`
- [Schema](#schema) ? `/en/guide/classes/schema/index`
- [Timer](#timer) ? `/en/guide/classes/timer/timer`
- [TimerObject](#timerobject) ? `/en/guide/classes/timer/timerobject`
- [Tracy](#tracy) ? `/en/guide/classes/tracy/index`
- [Vector](#vector) ? `/en/guide/classes/vector/vector`
- [Vector2](#vector2) ? `/en/guide/classes/vector/vector2`

### Enums
- [AbilityBehavior Enum](#abilitybehavior-enum) ? `/en/guide/enum/AbilityBehavior`
- [AbilityTypes Enum](#abilitytypes-enum) ? `/en/guide/enum/AbilityTypes`
- [ArmorType Enum](#armortype-enum) ? `/en/guide/enum/ArmorType`
- [AttackType Enum](#attacktype-enum) ? `/en/guide/enum/AttackType`
- [Attributes Enum](#attributes-enum) ? `/en/guide/enum/Attributes`
- [BlendStateBlend Enum](#blendstateblend-enum) ? `/en/guide/enum/BlendStateBlend`
- [BlendStateBlendOp Enum](#blendstateblendop-enum) ? `/en/guide/enum/BlendStateBlendOp`
- [ButtonCode Enum](#buttoncode-enum) ? `/en/guide/enum/ButtonCode`
- [CirclePathType Enum](#circlepathtype-enum) ? `/en/guide/enum/CirclePathType`
- [ContentAlign Enum](#contentalign-enum) ? `/en/guide/enum/ContentAlign`
- [CourierState Enum](#courierstate-enum) ? `/en/guide/enum/CourierState`
- [DamageTypes Enum](#damagetypes-enum) ? `/en/guide/enum/DamageTypes`
- [DispellableTypes Enum](#dispellabletypes-enum) ? `/en/guide/enum/DispellableTypes`
- [DOTA_CHAT_MESSAGE Enum](#dota-chat-message-enum) ? `/en/guide/enum/DOTA_CHAT_MESSAGE`
- [DOTA_MODIFIER_ENTRY_TYPE Enum](#dota-modifier-entry-type-enum) ? `/en/guide/enum/DOTA_MODIFIER_ENTRY_TYPE`
- [Flow Enum](#flow-enum) ? `/en/guide/enum/Flow`
- [FontFlags Enum](#fontflags-enum) ? `/en/guide/enum/FontFlags`
- [FontWeight Enum](#fontweight-enum) ? `/en/guide/enum/FontWeight`
- [ForcedType Enum](#forcedtype-enum) ? `/en/guide/enum/ForcedType`
- [GameActivity Enum](#gameactivity-enum) ? `/en/guide/enum/GameActivity`
- [GameState Enum](#gamestate-enum) ? `/en/guide/enum/GameState`
- [GCResponseStatus Enum](#gcresponsestatus-enum) ? `/en/guide/enum/GCResponseStatus`
- [GridNavCellFlags Enum](#gridnavcellflags-enum) ? `/en/guide/enum/GridNavCellFlags`
- [ImmunityTypes Enum](#immunitytypes-enum) ? `/en/guide/enum/ImmunityTypes`
- [KeyEvent Enum](#keyevent-enum) ? `/en/guide/enum/KeyEvent`
- [LaneSelectionFlags Enum](#laneselectionflags-enum) ? `/en/guide/enum/LaneSelectionFlags`
- [MatchGroup Enum](#matchgroup-enum) ? `/en/guide/enum/MatchGroup`
- [MatchType Enum](#matchtype-enum) ? `/en/guide/enum/MatchType`
- [MenuOptionType Enum](#menuoptiontype-enum) ? `/en/guide/enum/MenuOptionType`
- [ModifierState Enum](#modifierstate-enum) ? `/en/guide/enum/ModifierState`
- [OrderQueueBehavior Enum](#orderqueuebehavior-enum) ? `/en/guide/enum/OrderQueueBehavior`
- [OutlineType Enum](#outlinetype-enum) ? `/en/guide/enum/OutlineType`
- [OverheadAlert Enum](#overheadalert-enum) ? `/en/guide/enum/OverheadAlert`
- [ParticleAttachment Enum](#particleattachment-enum) ? `/en/guide/enum/ParticleAttachment`
- [PingType Enum](#pingtype-enum) ? `/en/guide/enum/PingType`
- [PlayerOrderIssuer Enum](#playerorderissuer-enum) ? `/en/guide/enum/PlayerOrderIssuer`
- [PowerTreadsAttributes Enum](#powertreadsattributes-enum) ? `/en/guide/enum/PowerTreadsAttributes`
- [ProtobufBehavior Enum](#protobufbehavior-enum) ? `/en/guide/enum/ProtobufBehavior`
- [QueuePriority Enum](#queuepriority-enum) ? `/en/guide/enum/QueuePriority`
- [RoundCorners Enum](#roundcorners-enum) ? `/en/guide/enum/RoundCorners`
- [RuneType Enum](#runetype-enum) ? `/en/guide/enum/RuneType`
- [ShopType Enum](#shoptype-enum) ? `/en/guide/enum/ShopType`
- [Talents Enum](#talents-enum) ? `/en/guide/enum/Talents`
- [TargetFlags Enum](#targetflags-enum) ? `/en/guide/enum/TargetFlags`
- [TargetTeam Enum](#targetteam-enum) ? `/en/guide/enum/TargetTeam`
- [TargetType Enum](#targettype-enum) ? `/en/guide/enum/TargetType`
- [TeamType Enum](#teamtype-enum) ? `/en/guide/enum/TeamType`
- [UnitOrder Enum](#unitorder-enum) ? `/en/guide/enum/UnitOrder`
- [UnitType Enum](#unittype-enum) ? `/en/guide/enum/UnitType`
- [WheelStopReason Enum](#wheelstopreason-enum) ? `/en/guide/enum/WheelStopReason`

## Angle

- Kind: `class`
- Path: `/en/guide/classes/angle/index`
- URL: https://docs.melonity.gg/en/guide/classes/angle/index

### Sections (H2)

- Properties
- Accessors
- Methods

### Members / Signatures (H3/H4)

- `pitch number`
- `yaw number`
- `roll number`
- `x number`
- `y number`
- `z number`
- `constructor(pitch?: number, yaw?: number, roll?: number)`
- `GetForward() Vector`
- `add(other: Angle) Angle`
- `sub(other: Angle) Angle`
- `toString() string`

### Paragraphs

- The Angle class represents a 3D angle.
- The pitch component of the angle.
- The yaw component of the angle.
- The roll component of the angle.
- Gets the pitch component of the angle.
- Gets the yaw component of the angle.
- Gets the roll component of the angle.
- Creates a new Angle instance.
- Returns a forward-facing vector from this angle.
- Returned:
- Adds another angle to this angle.
- Subtracts another angle from this angle.
- Returns a string representation of the angle.

### List Items

- Getter - Gets the pitch component of the angle.
- Setter - Sets the pitch component of the angle.
- Getter - Gets the yaw component of the angle.
- Setter - Sets the yaw component of the angle.
- Getter - Gets the roll component of the angle.
- Setter - Sets the roll component of the angle.
- pitch number (optional) - The pitch component of the angle. Defaults to 0.
- yaw number (optional) - The yaw component of the angle. Defaults to 0.
- roll number (optional) - The roll component of the angle. Defaults to 0.
- Vector - A forward-facing vector from this angle.
- other Angle - The angle to add.
- Angle - A new angle that is the result of the addition.
- other Angle - The angle to subtract.
- Angle - A new angle that is the result of the subtraction.
- string - A string representation of the angle.

### Inline Code Tokens

- `Angle`
- `pitch`
- `yaw`
- `roll`
- `x`
- `y`
- `z`
- `constructor(pitch?: number, yaw?: number, roll?: number)`
- `GetForward()`
- `add(other: Angle)`
- `other`
- `sub(other: Angle)`
- `toString()`

## FireEventObject

- Kind: `class`
- Path: `/en/guide/classes/callbacks/FireEventObject`
- URL: https://docs.melonity.gg/en/guide/classes/callbacks/FireEventObject

### Sections (H2)

- Properties
- Methods

### Members / Signatures (H3/H4)

- `name string`
- `id number`
- `keyValue { [key: string]: any; }`
- `GetBool(key: string) boolean`
- `GetInt(key: string) number`
- `GetFloat(key: string) number`
- `GetString(key: string) string`

### Paragraphs

- The FireEventObject class provides helpers for reading event values passed to fire-event callbacks.
- The name.
- The id.
- The key value.
- Retrieves a boolean event value by key.
- Returned:
- Retrieves an integer event value by key.
- Retrieves a floating-point event value by key.
- Retrieves a string event value by key.

### List Items

- key string - The key value.
- boolean - True if the condition is met, false otherwise.
- number - The requested int.
- number - The requested float.
- string - The requested string.

### Inline Code Tokens

- `FireEventObject`
- `name`
- `id`
- `keyValue`
- `GetBool(key: string)`
- `key`
- `GetInt(key: string)`
- `GetFloat(key: string)`
- `GetString(key: string)`

## Callbacks

- Kind: `class`
- Path: `/en/guide/classes/callbacks/index`
- URL: https://docs.melonity.gg/en/guide/classes/callbacks/index

### Sections (H2)

- Functions
- Interfaces

### Members / Signatures (H3/H4)

- `RegisterScript(scriptDeclaration: ScriptDescription, scriptName: string) void`
- `UnregisterScript(scriptDeclaration: ScriptDescription) void`
- `RegisterFunction(callbackName: string, fn: Function, scriptName?: string) void`
- `UnregisterFunction(callbackName: string, fn: Function) void`
- `KeyEventObject`
- `CreateClickEffectObject`
- `PreparedOrder`
- `UnitAnimationCallbackObject`
- `UnitAnimationEndCallbackObject`
- `Projectile`
- `OnChatEventObject`
- `OnSayMsgObject`
- `OnChatWriteObject`
- `OnChatMessageObject`
- `UpdatedParticleForward`
- `OnOverheadEventFallback`
- `UpdatedParticleFallback`
- `UnitAddGestureObject`
- `OnProjectileLocObject`
- `CreatedParticle`
- `UpdatedParticle`
- `ParticleUpdateEntity`
- `DestroyedParticle`
- `CMsgVector`
- `CDOTAModifierBuffTableEntry`

### Paragraphs

- The Callbacks module provides script registration functions and callback payload types exposed by the declarations.
- Registers a script with a given set of callbacks.
- Unregisters a script with a given set of callbacks.
- Registers a function with a given callback name and an optional script name.
- Unregisters a function with a given callback name.
- The KeyEventObject interface describes the corresponding callback payload shape.
- The CreateClickEffectObject interface describes the corresponding callback payload shape.
- The PreparedOrder interface describes the corresponding callback payload shape.
- The UnitAnimationCallbackObject interface describes the corresponding callback payload shape.
- The UnitAnimationEndCallbackObject interface describes the corresponding callback payload shape.
- The Projectile interface describes the corresponding callback payload shape.
- The OnChatEventObject interface describes the corresponding callback payload shape.
- The OnSayMsgObject interface describes the corresponding callback payload shape.
- The OnChatWriteObject interface describes the corresponding callback payload shape.
- The OnChatMessageObject interface describes the corresponding callback payload shape.
- The UpdatedParticleForward interface describes the corresponding callback payload shape.
- The OnOverheadEventFallback interface describes the corresponding callback payload shape.
- The UpdatedParticleFallback interface describes the corresponding callback payload shape.
- The UnitAddGestureObject interface describes the corresponding callback payload shape.
- The OnProjectileLocObject interface describes the corresponding callback payload shape.
- The CreatedParticle interface describes the corresponding callback payload shape.
- The UpdatedParticle interface describes the corresponding callback payload shape.
- The ParticleUpdateEntity interface describes the corresponding callback payload shape.
- The DestroyedParticle interface describes the corresponding callback payload shape.
- The CMsgVector interface describes the corresponding callback payload shape.
- The CDOTAModifierBuffTableEntry interface describes the corresponding callback payload shape.

### List Items

- scriptDeclaration ScriptDescription - An object where each key is the name of a callback and the value is the function to be called.
- scriptName string - An optional name for the script. If provided, it will be used to group the callbacks.
- callbackName string - The name of the callback.
- fn Function - The function to be called.
- scriptName string (optional) - An optional name for the script. If provided, it will be used to group the callbacks.
- fn Function - The function to be unregistered.
- event Enum.KeyEvent - The event.
- key Enum.ButtonCode - The key.
- keyStr string - The key str.
- position Vector - The position.
- color Color - The color.
- order Enum.UnitOrder - The order.
- queue boolean - The queue.
- player Player - The player.
- target NPC | null - The target.
- targetIndex Number | null - The target index.
- position Vector | null - The position.
- ability Ability | null - The ability.
- abilityIndex Number | null - The ability index.
- orderIssuer Enum.PlayerOrderIssuer - The order issuer.
- npc NPC | null - The npc.
- npcIndex Number | null - The npc index.
- showEffects boolean - The show effects.
- unit NPC | null - The unit.
- sequenceVariant number - Attack animation index 2
- playbackRate number - Animation speed scales
- castpoint number - Time from start to the poke
- type number - The type.
- activity number - Dota 2 action variant
- sequence number - Attack animation index
- sequenceName string - Attack animation name
- snap any - I don't fucking know
- source NPC | null - The source.
- sourceIndex number - The source index.
- targetIndex number - The target index.
- abilityIndex number - The ability index.
- moveSpeed number - The move speed.
- sourceAttachment Enum.ParticleAttachment - The source attachment.
- particleSystemHandle bigint - The particle system handle.
- dodgeable boolean - The dodgeable.
- isAttack boolean - The is attack.
- isEvaded boolean - The is evaded.
- expireTime number - The expire time.
- maxImpactTime number - The max impact time.
- colorGemColor number - The color gem color.
- fullName string - The full name.
- name string - The name.
- handle number - The handle.
- index number - The index.
- type Enum.DOTA_CHAT_MESSAGE - The type.
- values number[] - The values.
- playerIDs number[] - The player ids.
- entity Entity - The entity.
- chat boolean - The chat.
- messageName string - The message name.
- param1 string - The param1.
- param2 string - The param2.
- param3 string - The param3.
- param4 string - The param4.
- channelType number - The channel type.
- messageText string - The message text.
- sourcePlayerID number - The source player id.
- controlPoint number - The control point.
- type Enum.OverheadAlert - The type.
- value number - The value.
- sourcePlayerIndex number - The source player index.
- targetPlayerIndex number - The target player index.
- unitIndex number - The unit index.
- sequenceVariant number - The sequence variant.
- playbackRate number - The playback rate.
- fadeIn number - The fade in.
- fadeOut number - The fade out.
- slot number - The slot.
- activity number - The activity.
- sequence number - The sequence.
- sequenceName string - The sequence name.
- sourceLoc Vector - The source loc.
- targetLoc Vector - The target loc.
- launchTick number - The launch tick.
- entity Entity | null - The entity.
- entityIndex number - The entity index.
- particleNameIndex bigint - The particle name index.
- attachType number - The attach type.
- entityForModifiers Entity | null - The entity for modifiers.
- entityForModifiersIndex number - The entity for modifiers index.
- entity NPC | Entity | Hero | null - The entity.
- attachment Enum.ParticleAttachment - The attachment.
- includeWearables boolean - The include wearables.
- destroyImmediately boolean - The destroy immediately.
- x number - The x.
- y number - The y.
- z number - The z.
- w number - The w.
- entry_type DOTA_MODIFIER_ENTRY_TYPE - The entry type.
- parent number - The parent.
- serial_num number - The serial num.
- modifier_class number - The modifier class.
- ability_level number - The ability level.
- stack_count number - The stack count.
- creation_time number - The creation time.
- duration number - The duration.
- caster number - The caster.
- ability number - The ability.
- armor number - The armor.
- fade_time number - The fade time.
- subtle boolean - The subtle.
- channel_time number - The channel time.
- v_start CMsgVector | undefined - The v start.
- v_end CMsgVector | undefined - The v end.
- portal_loop_appear string - The portal loop appear.
- portal_loop_disappear string - The portal loop disappear.
- hero_loop_appear string - The hero loop appear.
- hero_loop_disappear string - The hero loop disappear.
- movement_speed number - The movement speed.
- aura boolean - The aura.
- damage number - The damage.
- range number - The range.
- dd_modifier_index number - The dd modifier index.
- dd_ability_id number - The dd ability id.
- illusion_label string - The illusion label.
- active boolean - The active.
- player_ids string - The player ids.
- lua_name string - The lua name.
- attack_speed number - The attack speed.
- aura_owner number - The aura owner.
- bonus_all_stats number - The bonus all stats.
- bonus_health number - The bonus health.
- bonus_mana number - The bonus mana.
- custom_entity number - The custom entity.

### Inline Code Tokens

- `Callbacks`
- `RegisterScript(scriptDeclaration: ScriptDescription, scriptName: string)`
- `scriptDeclaration`
- `scriptName`
- `UnregisterScript(scriptDeclaration: ScriptDescription)`
- `RegisterFunction(callbackName: string, fn: Function, scriptName?: string)`
- `callbackName`
- `fn`
- `UnregisterFunction(callbackName: string, fn: Function)`
- `KeyEventObject`
- `event`
- `key`
- `keyStr`
- `CreateClickEffectObject`
- `position`
- `color`
- `order`
- `queue`
- `PreparedOrder`
- `player`
- `target`
- `targetIndex`
- `ability`
- `abilityIndex`
- `orderIssuer`
- `npc`
- `npcIndex`
- `showEffects`
- `UnitAnimationCallbackObject`
- `unit`
- `sequenceVariant`
- `playbackRate`
- `castpoint`
- `type`
- `activity`
- `sequence`
- `sequenceName`
- `UnitAnimationEndCallbackObject`
- `snap`
- `Projectile`
- `source`
- `sourceIndex`
- `moveSpeed`
- `sourceAttachment`
- `particleSystemHandle`
- `dodgeable`
- `isAttack`
- `isEvaded`
- `expireTime`
- `maxImpactTime`
- `colorGemColor`
- `fullName`
- `name`
- `handle`
- `index`
- `OnChatEventObject`
- `values`
- `playerIDs`
- `OnSayMsgObject`
- `entity`
- `chat`
- `messageName`
- `param1`
- `param2`
- `param3`
- `param4`
- `OnChatWriteObject`
- `channelType`
- `messageText`
- `OnChatMessageObject`
- `sourcePlayerID`
- `UpdatedParticleForward`
- `controlPoint`
- `OnOverheadEventFallback`
- `value`
- `sourcePlayerIndex`
- `targetPlayerIndex`
- `UpdatedParticleFallback`
- `UnitAddGestureObject`
- `unitIndex`
- `fadeIn`
- `fadeOut`
- `slot`
- `OnProjectileLocObject`
- `sourceLoc`
- `targetLoc`
- `launchTick`
- `CreatedParticle`
- `entityIndex`
- `particleNameIndex`
- `attachType`
- `entityForModifiers`
- `entityForModifiersIndex`
- `UpdatedParticle`
- `ParticleUpdateEntity`
- `attachment`
- `includeWearables`
- `DestroyedParticle`
- `destroyImmediately`
- `CMsgVector`
- `x`
- `y`
- `z`
- `w`
- `CDOTAModifierBuffTableEntry`
- `entry_type`
- `parent`
- `serial_num`
- `modifier_class`
- `ability_level`
- `stack_count`
- `creation_time`
- `duration`
- `caster`
- `armor`
- `fade_time`
- `subtle`
- `channel_time`
- `v_start`
- `v_end`
- `portal_loop_appear`
- `portal_loop_disappear`
- `hero_loop_appear`
- `hero_loop_disappear`
- `movement_speed`
- `aura`
- `damage`
- `range`
- `dd_modifier_index`
- `dd_ability_id`
- `illusion_label`
- `active`
- `player_ids`
- `lua_name`
- `attack_speed`
- `aura_owner`
- `bonus_all_stats`
- `bonus_health`
- `bonus_mana`
- `custom_entity`

## LinearProjectile

- Kind: `class`
- Path: `/en/guide/classes/callbacks/LinearProjectile`
- URL: https://docs.melonity.gg/en/guide/classes/callbacks/LinearProjectile

### Sections (H2)

- Properties

### Members / Signatures (H3/H4)

- `maxDist number`
- `fowRadius number`
- `source NPC | Entity | Hero | null`
- `origin Vector`
- `velocity Vector`
- `particleIndex bigint`
- `handle number`
- `acceleration Vector`
- `latency number`
- `maxSpeed number`
- `fullName string`
- `name string`

### Paragraphs

- The LinearProjectile class provides data about linear projectiles passed to related callbacks.
- The max dist.
- The fow radius.
- The source.
- The origin.
- The velocity.
- The particle index.
- The handle.
- The acceleration.
- The latency.
- The max speed.
- The full name.
- The name.

### Inline Code Tokens

- `LinearProjectile`
- `maxDist`
- `fowRadius`
- `source`
- `origin`
- `velocity`
- `particleIndex`
- `handle`
- `acceleration`
- `latency`
- `maxSpeed`
- `fullName`
- `name`

## OnStartSoundObject

- Kind: `class`
- Path: `/en/guide/classes/callbacks/OnStartSoundObject`
- URL: https://docs.melonity.gg/en/guide/classes/callbacks/OnStartSoundObject

### Sections (H2)

- Properties

### Members / Signatures (H3/H4)

- `source Entity | null`
- `sourceIndex number`
- `name string`
- `hash number`
- `guid number`
- `seed number`
- `position Vector`

### Paragraphs

- The OnStartSoundObject class provides sound event data passed to start-sound callbacks.
- The source.
- The source index.
- The name.
- The hash.
- The guid.
- The seed.
- The position.

### Inline Code Tokens

- `OnStartSoundObject`
- `source`
- `sourceIndex`
- `name`
- `hash`
- `guid`
- `seed`
- `position`

## ProtobufLiteObject

- Kind: `class`
- Path: `/en/guide/classes/callbacks/ProtobufLiteObject`
- URL: https://docs.melonity.gg/en/guide/classes/callbacks/ProtobufLiteObject

### Sections (H2)

- Properties
- Methods

### Members / Signatures (H3/H4)

- `name string`
- `GetFull() any`
- `GetFullBinded() any`

### Paragraphs

- The ProtobufLiteObject class provides access to protobuf payloads passed through message-related callbacks.
- The name.
- Retrieves the full decoded protobuf object.
- Returned:
- Retrieves the full decoded protobuf object bound to the current callback state.

### List Items

- any - The requested full.
- any - The requested full binded.

### Inline Code Tokens

- `ProtobufLiteObject`
- `name`
- `GetFull()`
- `GetFullBinded()`

## ScriptDescription

- Kind: `class`
- Path: `/en/guide/classes/callbacks/ScriptDescription`
- URL: https://docs.melonity.gg/en/guide/classes/callbacks/ScriptDescription

### Sections (H2)

- Properties

### Members / Signatures (H3/H4)

- `OnLocalPlayerCreate () => void`
- `OnLocalPlayerDestroy () => void`
- `OnLocalHeroCreate () => void`
- `OnLocalHeroDestroy () => void`
- `OnGameStart () => void`
- `OnGameEnd () => void`
- `OnScriptLoad () => void`
- `OnScriptUnload () => void`
- `OnDraw () => void`
- `OnDrawOverUI () => void`
- `OnUpdate () => void`
- `OnKeyEvent (event: KeyEventObject ) => void`
- `OnEntityCreate (entity: Entity , index: number) => void`
- `OnEntityCreateUpdated (entity: Entity , index: number) => void`
- `OnEntityDestroy (entity: Entity , index: number) => void`
- `OnModifierCreate (entity: NPC , modifier: Modifier ) => void`
- `OnModifierDestroy (entity: NPC , modifier: Modifier ) => void`
- `OnScreenSizeChange (width: number, height: number) => void`
- `OnFireEvent (event: FireEventObject ) => void`
- `OnCreateClickEffect (obj: CreateClickEffectObject ) => boolean | Vector | void`
- `OnPrepareUnitOrders (order: PreparedOrder ) => boolean | void`
- `OnScriptPrepareUnitOrders (order: PreparedOrder , caller: string) => boolean | void`
- `OnUnitAnimation (animation: UnitAnimationCallbackObject ) => void`
- `OnUnitAnimationEnd (animation: UnitAnimationEndCallbackObject ) => void`
- `OnSendNetMessage (obj: ProtobufLiteObject ) => Enum.ProtobufBehavior | object | void`
- `OnRecvNetMessage (obj: ProtobufLiteObject ) => Enum.ProtobufBehavior | object | void`
- `OnFrameStageNotify (stage: number) => void`
- `OnSendGCMessage (obj: ProtobufLiteObject , type: number) => Enum.ProtobufBehavior | object | void`
- `OnRecvGCMessage (obj: ProtobufLiteObject , type: number) => Enum.ProtobufBehavior | object | void`
- `OnDrawCreepCampIcon (position: Vector ) => boolean | void`
- `OnChatEvent (event: OnChatEventObject ) => void`
- `OnVisibilityUpdate (ent: NPC , reason: string, visible: boolean) => void`
- `OnTeamVisablityChange (npc: NPC , oldValue: number, newValue: number) => void`
- `OnSayMsg (obj: OnSayMsgObject ) => boolean | void`
- `OnChatWrite (obj: OnChatWriteObject ) => boolean | void`
- `OnChatMessage (obj: OnChatMessageObject ) => void`
- `OnGCSOCreated (obj: ProtobufLiteObject ) => void`
- `OnGCSOUpdated (obj: ProtobufLiteObject ) => void`
- `OnGCSOChanged (obj: ProtobufLiteObject , reason: number) => void`
- `OnOverheadEvent (obj: OnOverheadEventFallback ) => void`
- `OnUnitAddGesture (anim: UnitAddGestureObject ) => void`
- `OnProjectile (projectile: Projectile ) => void`
- `OnProjectileLoc (projectile: OnProjectileLocObject ) => void`
- `OnLinearProjectileCreate (projectile: LinearProjectile ) => void`
- `OnLinearProjectileDestroy (handle: number) => void`
- `OnTargetProjectileObjectCreate (targetProjectile: TargetProjectileObject ) => void`
- `OnTargetProjectileObjectDestroy (targetProjectile: TargetProjectileObject ) => void`
- `OnLinearProjectileObjectCreate (linearProjectile: LinearProjectileObject ) => void`
- `OnLinearProjectileObjectDestroy (linearProjectile: LinearProjectileObject ) => void`
- `OnParticleCreate (particle: CreatedParticle ) => void`
- `OnParticleUpdate (particle: UpdatedParticle ) => void`
- `OnParticleUpdateEntity (particle: ParticleUpdateEntity ) => void`
- `OnParticleUpdateForward (obj: UpdatedParticleForward ) => void`
- `OnParticleUpdateFallback (obj: UpdatedParticleFallback ) => void`
- `OnParticleDestroy (particle: DestroyedParticle ) => void`
- `OnStartSound (sound: OnStartSoundObject ) => void`
- `OnActiveModifiersUpdate (obj: CDOTAModifierBuffTableEntry ) => void`

### Paragraphs

- The ScriptDescription interface defines the public callback hooks that can be registered by a script.
- The on local player create.
- The on local player destroy.
- The on local hero create.
- The on local hero destroy.
- The on game start.
- IMPORTANT
- Same as OnLocalHeroCreate
- The on game end.
- Same as OnLocalHeroDestroy
- The on script load.
- The on script unload.
- The on draw.
- The on draw over ui.
- The on update.
- The on key event.
- The on entity create.
- The on entity create updated.
- The on entity destroy.
- The on modifier create.
- The on modifier destroy.
- The on screen size change.
- The on fire event.
- The on create click effect.
- The on prepare unit orders.
- The on script prepare unit orders.
- The on unit animation.
- The on unit animation end.
- The on send net message.
- WARNING
- Deprecated. use NetMessages.RegisterSend instead
- The on recv net message.
- Deprecated. use NetMessages.RegisterRecv instead
- The on frame stage notify.
- Deprecated. disabled
- Return Enum.ProtobufBehavior.Ignore to ignore the message or object to modify the message
- The on draw creep camp icon.
- The on chat event.
- The on visibility update.
- The on team visablity change.
- The on say msg.
- The on chat write.
- The on chat message.
- The on gcsocreated.
- The on gcsoupdated.
- The on gcsochanged.
- The on overhead event.
- The on unit add gesture.
- The on projectile.
- The on projectile loc.
- The on linear projectile create.
- The on linear projectile destroy.
- The on target projectile object create.
- The on target projectile object destroy.
- The on linear projectile object create.
- The on linear projectile object destroy.
- The on particle create.
- The on particle update.
- The on particle update entity.
- The on particle update forward.
- The on particle update fallback.
- The on particle destroy.
- The on start sound.
- The on active modifiers update.

### Inline Code Tokens

- `ScriptDescription`
- `OnLocalPlayerCreate`
- `OnLocalPlayerDestroy`
- `OnLocalHeroCreate`
- `OnLocalHeroDestroy`
- `OnGameStart`
- `OnGameEnd`
- `OnScriptLoad`
- `OnScriptUnload`
- `OnDraw`
- `OnDrawOverUI`
- `OnUpdate`
- `OnKeyEvent`
- `OnEntityCreate`
- `OnEntityCreateUpdated`
- `OnEntityDestroy`
- `OnModifierCreate`
- `OnModifierDestroy`
- `OnScreenSizeChange`
- `OnFireEvent`
- `OnCreateClickEffect`
- `OnPrepareUnitOrders`
- `OnScriptPrepareUnitOrders`
- `OnUnitAnimation`
- `OnUnitAnimationEnd`
- `OnSendNetMessage`
- `OnRecvNetMessage`
- `OnFrameStageNotify`
- `OnSendGCMessage`
- `OnRecvGCMessage`
- `OnDrawCreepCampIcon`
- `OnChatEvent`
- `OnVisibilityUpdate`
- `OnTeamVisablityChange`
- `OnSayMsg`
- `OnChatWrite`
- `OnChatMessage`
- `OnGCSOCreated`
- `OnGCSOUpdated`
- `OnGCSOChanged`
- `OnOverheadEvent`
- `OnUnitAddGesture`
- `OnProjectile`
- `OnProjectileLoc`
- `OnLinearProjectileCreate`
- `OnLinearProjectileDestroy`
- `OnTargetProjectileObjectCreate`
- `OnTargetProjectileObjectDestroy`
- `OnLinearProjectileObjectCreate`
- `OnLinearProjectileObjectDestroy`
- `OnParticleCreate`
- `OnParticleUpdate`
- `OnParticleUpdateEntity`
- `OnParticleUpdateForward`
- `OnParticleUpdateFallback`
- `OnParticleDestroy`
- `OnStartSound`
- `OnActiveModifiersUpdate`

## Camera

- Kind: `class`
- Path: `/en/guide/classes/camera/index`
- URL: https://docs.melonity.gg/en/guide/classes/camera/index

### Sections (H2)

- Functions

### Members / Signatures (H3/H4)

- `SetDistance(val: number) void`
- `GetDistance() number`
- `ToggleFollowLocalHero(val: boolean) void`

### Paragraphs

- The Camera namespace provides helpers for reading and updating local camera behavior.
- Sets the distance.
- Retrieves the distance.
- Returned:
- Enables or disables camera follow mode for the local hero.

### List Items

- val number - default 1200
- number - The requested distance.
- val boolean - The value to use.

### Inline Code Tokens

- `Camera`
- `SetDistance(val: number)`
- `val`
- `GetDistance()`
- `ToggleFollowLocalHero(val: boolean)`

## Chat

- Kind: `class`
- Path: `/en/guide/classes/chat/index`
- URL: https://docs.melonity.gg/en/guide/classes/chat/index

### Sections (H2)

- Functions

### Members / Signatures (H3/H4)

- `Roll(min: number, max: number, ally: boolean) void`
- `GetChannels() string[]`
- `Say(channel: string, msg: string) void`
- `Print(channel: string, msg: string) void`

### Paragraphs

- The Chat namespace provides helpers for sending, printing, and querying chat channel messages.
- Sends a roll message to a team or global chat.
- Returns an array of chat channel names.
- Returned:
- Sends a message to a specified chat channel. The message will be visible to all players in the channel.
- IMPORTANT
- Can be used to send chat commands like "-lvlmax", "-refresh", etc.
- Prints a message from the specified chat channel, visible only to the local player.

### List Items

- min number - The minimum number that can be rolled.
- max number - The maximum number that can be rolled.
- ally boolean - Whether the roll should be sent to the team chat or global chat.
- string[] - An array of strings representing the names of the chat channels.
- channel string - The name of the chat channel.
- msg string - The message to be sent.
- msg string - The message to be printed.

### Inline Code Tokens

- `Chat`
- `Roll(min: number, max: number, ally: boolean)`
- `min`
- `max`
- `ally`
- `GetChannels()`
- `Say(channel: string, msg: string)`
- `channel`
- `msg`
- `Print(channel: string, msg: string)`

## Color

- Kind: `class`
- Path: `/en/guide/classes/color/index`
- URL: https://docs.melonity.gg/en/guide/classes/color/index

### Sections (H2)

- Properties
- Methods

### Members / Signatures (H3/H4)

- `r number`
- `g number`
- `b number`
- `a number`
- `static readonly BLACK Color`
- `static readonly RED Color`
- `static readonly GREEN Color`
- `static readonly BLUE Color`
- `static readonly YELLOW Color`
- `static readonly CYAN Color`
- `static readonly MAGENTA Color`
- `static readonly WHITE Color`
- `static readonly TRANSPARENT Color`
- `constructor(r?: number, g?: number, b?: number, a?: number)`
- `static FromNumber(value: number) Color`
- `ToNumber() number`
- `SetRandom() this`
- `SetR(value: number) this`
- `SetG(value: number) this`
- `SetB(value: number) this`
- `SetA(value: number) this`
- `Clone() Color`
- `ToVector() Vector`

### Paragraphs

- The Color class represents a color value and related color helpers.
- IMPORTANT
- Static predefined colors such as Color.WHITE are shared instances. Clone them before mutating them. For example, use Color.WHITE.Clone().SetA(0) instead of changing Color.WHITE directly.
- The red component of the color.
- The green component of the color.
- The blue component of the color.
- The alpha component of the color.
- Represents the predefined BLACK color value (0, 0, 0, 255).
- Represents the predefined RED color value (255, 0, 0, 255).
- Represents the predefined GREEN color value (0, 255, 0, 255).
- Represents the predefined BLUE color value (0, 0, 255, 255).
- Represents the predefined YELLOW color value (255, 255, 0, 255).
- Represents the predefined CYAN color value (0, 255, 255, 255).
- Represents the predefined MAGENTA color value (255, 0, 255, 255).
- Represents the predefined WHITE color value (255, 255, 255, 255).
- Represents the predefined TRANSPARENT color value (0, 0, 0, 0).
- Creates a new Color instance.
- Creates a new color from a number.
- Returned:
- Converts the color to a number.
- Sets the color to a random color.
- Sets the red component of the color.
- Sets the green component of the color.
- Sets the blue component of the color.
- Sets the alpha component of the color.
- Clones the color.
- Converts the current value to a vector.

### List Items

- r number (optional) - The red component of the color. Defaults to 255.
- g number (optional) - The green component of the color. Defaults to 255.
- b number (optional) - The blue component of the color. Defaults to 255.
- a number (optional) - The alpha component of the color. Defaults to 255.
- value number - The number to create the color from.
- Color - This object.
- number - The number representing the color.
- this - This object.
- value number - The value to use.
- this - The current instance for chaining.
- Color - The cloned color.
- Vector - The result of the call.

### Inline Code Tokens

- `Color`
- `Color.WHITE`
- `Color.WHITE.Clone().SetA(0)`
- `r`
- `g`
- `b`
- `a`
- `static readonly BLACK`
- `BLACK`
- `static readonly RED`
- `RED`
- `static readonly GREEN`
- `GREEN`
- `static readonly BLUE`
- `BLUE`
- `static readonly YELLOW`
- `YELLOW`
- `static readonly CYAN`
- `CYAN`
- `static readonly MAGENTA`
- `MAGENTA`
- `static readonly WHITE`
- `WHITE`
- `static readonly TRANSPARENT`
- `TRANSPARENT`
- `constructor(r?: number, g?: number, b?: number, a?: number)`
- `static FromNumber(value: number)`
- `value`
- `ToNumber()`
- `SetRandom()`
- `SetR(value: number)`
- `SetG(value: number)`
- `SetB(value: number)`
- `SetA(value: number)`
- `Clone()`
- `ToVector()`

## Config

- Kind: `class`
- Path: `/en/guide/classes/config/index`
- URL: https://docs.melonity.gg/en/guide/classes/config/index

### Sections (H2)

- Functions

### Members / Signatures (H3/H4)

- `GetConfig(configName: string) { [key: string]: any; }`
- `SaveConfig(configName: string) void`
- `Read(configName: string, key: string, defaultValue: any) any`
- `ReadRaw(configName: string, key: string, defaultValue: any) any`
- `ReadInt(configName: string, key: string, defaultValue: number) number`
- `ReadFloat(configName: string, key: string, defaultValue: number) number`
- `ReadString(configName: string, key: string, defaultValue: string) string`
- `Write(configName: string, key: string, value: any) void`
- `WriteRaw(configName: string, key: string, value: any) void`
- `WriteInt(configName: string, key: string, value: number) void`
- `WriteFloat(configName: string, key: string, value: number) void`
- `WriteString(configName: string, key: string, value: string) void`

### Paragraphs

- The Config namespace provides helpers for reading, writing, and saving script configuration data.
- Retrieves a config object by its name.
- IMPORTANT
- After changing the config object, you must call SaveConfig to save the changes.
- Returned:
- Saves a configuration object by its name.
- Reads a value from a configuration object. If the value does not exist, it returns a default value.
- If the value is a string, it will be parsed as JSON.
- Reads a raw value from a configuration object. If the value does not exist, it returns a default value.
- If the value is a string, it will not be parsed as JSON.
- Reads an integer value from a configuration object. If the value does not exist, it returns a default value.
- Reads a floating point value from a configuration object. If the value does not exist, it returns a default value.
- Reads a string value from a configuration object. If the value does not exist, it returns a default value.
- Writes a value to a configuration object and saves it.
- Writes a raw value to a configuration object and saves it.
- Directly writes the value to the configuration object.
- Writes an integer value to a configuration object and saves it.
- Writes a floating point value to a configuration object and saves it.
- Writes a string value to a configuration object and saves it.

### List Items

- configName string - The name of the configuration object.
- { [key: string]: any; } - The configuration object.
- key string - The key of the value to read.
- defaultValue any - The default value to return if the key does not exist.
- any - The value from the configuration object or the default value.
- any - The raw value from the configuration object or the default value.
- defaultValue number - The default value to return if the key does not exist.
- number - The integer value from the configuration object or the default value.
- number - The floating point value from the configuration object or the default value.
- defaultValue string - The default value to return if the key does not exist.
- string - The string value from the configuration object or the default value.
- key string - The key of the value to write.
- value any - The value to write.
- value number - The integer value to write.
- value number - The floating point value to write.
- value string - The string value to write.

### Inline Code Tokens

- `Config`
- `GetConfig(configName: string)`
- `configName`
- `SaveConfig`
- `SaveConfig(configName: string)`
- `Read(configName: string, key: string, defaultValue: any)`
- `key`
- `defaultValue`
- `ReadRaw(configName: string, key: string, defaultValue: any)`
- `ReadInt(configName: string, key: string, defaultValue: number)`
- `ReadFloat(configName: string, key: string, defaultValue: number)`
- `ReadString(configName: string, key: string, defaultValue: string)`
- `Write(configName: string, key: string, value: any)`
- `value`
- `WriteRaw(configName: string, key: string, value: any)`
- `WriteInt(configName: string, key: string, value: number)`
- `WriteFloat(configName: string, key: string, value: number)`
- `WriteString(configName: string, key: string, value: string)`

## ConVar

- Kind: `class`
- Path: `/en/guide/classes/convar/index`
- URL: https://docs.melonity.gg/en/guide/classes/convar/index

### Sections (H2)

- Functions

### Members / Signatures (H3/H4)

- `SetValue(name: string, value: number | string) void`
- `GetValue(name: string) number | string`

### Paragraphs

- The ConVar namespace provides helpers for reading and writing console variable values.
- Sets the value.
- Retrieves the value as a number or string.
- Returned:

### List Items

- name string - The name value.
- value number | string - The value to use.
- number | string - The requested value.

### Inline Code Tokens

- `ConVar`
- `SetValue(name: string, value: number | string)`
- `name`
- `value`
- `GetValue(name: string)`

## Engine

- Kind: `class`
- Path: `/en/guide/classes/engine/cheat`
- URL: https://docs.melonity.gg/en/guide/classes/engine/cheat

### Sections (H2)

- Interfaces
- Cheat Functions

### Members / Signatures (H3/H4)

- `OriginInfo`
- `IsSafeMode() boolean`
- `IsInitialized() boolean`
- `IsLocalScript() boolean`
- `IsDevMode() boolean`
- `IsVeboseLogs() boolean`
- `GetVDF(path: string) any`
- `GetUserName() string`
- `GetUserID() number`
- `GetUserSubEnd() string`
- `GetSourceMap(fileName: string) string`
- `MapToSource(fileName: string, row: number, column: number) OriginInfo`
- `OnceAtByKey(timeInS: number, key: string, realTime?: boolean) boolean`
- `OnceAt(timeInS: number, realTime?: boolean) boolean`
- `OpenURL(fullURL: string) void`
- `SetUseParticleFow(enabled: boolean) void`
- `SetFogEnable(enabled: boolean) void`
- `SetRFarz(value: number) void`
- `Crash() void`
- `ShowWindow() void`

### Paragraphs

- The Engine namespace provides cheat-side runtime helpers, diagnostics, and timer utilities.
- The OriginInfo interface describes the original source location returned by Engine.MapToSource .
- Retrieves state of Safe Mode toggle.
- IMPORTANT
- If Safe Mode is enabled, all potentially dangerous functions should be not used, like RegisterFireEvent, uncommon requests to GC, etc.
- Returned:
- Returns false while script is initializing (before any callbacks called), true otherwise.
- Returns true if script is local (is not server script) and false otherwise.
- Retrieves state of developer mode toggle.
- Retrieves state of verbose logs toggle.
- Retrieves a VDF (Valve Data Format) file and parses it into a JSON object.
- Retrieves the current user's name.
- Retrieves the current user's ID.
- Retrieves the end date of the current user's subscription.
- Retrieves the source map for a given file.
- Maps a position in a file to its original source.
- Checks if a timer has expired and resets it if it has.
- Version of OnceAt without usage stacktrace (faster), but need usage unique key If key first time used, timer will be reseted and function will return true. Key should be unique for all scripts.
- If key first time used, timer will be reseted and function will return true. Uses OnceAtByKey with file position as key.
- Opens a URL in the default web browser.
- Enables or disables visibility of particles in fog.
- Enables or disables white fog (not fog of war).
- Sets the far clipping plane distance for the rendering engine.
- For bigger camera distance use bigger value. 5000 is good for common cases.
- Causes the game to crash. This is useful for debugging.
- Shows the game window.

### List Items

- fileName string - The file name.
- row number - The row.
- column number - The column.
- boolean - True if Safe Mode is enabled, false otherwise.
- boolean - True if script is initialized, false otherwise.
- boolean - True if script is local, false otherwise.
- boolean - True if developer mode is enabled, false otherwise.
- boolean - True if verbose logs are enabled, false otherwise.
- path string - The path to the VDF file.
- any - The parsed JSON object.
- string - The user's name.
- number - The user's ID.
- string - The end date of the user's subscription.
- fileName string - The name of the file.
- string - The source map for the file.
- row number - The row in the file.
- column number - The column in the file.
- OriginInfo - The original source information.
- timeInS number - The time in seconds for the timer.
- key string - The key of the timer.
- realTime boolean (optional) - A boolean indicating whether the timer is based on real time.
- boolean - A boolean indicating whether the timer has expired.
- fullURL string - The URL to open.
- enabled boolean - Whether the feature should be enabled.
- value number - The distance to the far clipping plane.

### Inline Code Tokens

- `Engine`
- `OriginInfo`
- `Engine.MapToSource`
- `fileName`
- `row`
- `column`
- `IsSafeMode()`
- `IsInitialized()`
- `IsLocalScript()`
- `IsDevMode()`
- `IsVeboseLogs()`
- `GetVDF(path: string)`
- `path`
- `GetUserName()`
- `GetUserID()`
- `GetUserSubEnd()`
- `GetSourceMap(fileName: string)`
- `MapToSource(fileName: string, row: number, column: number)`
- `OnceAtByKey(timeInS: number, key: string, realTime?: boolean)`
- `timeInS`
- `key`
- `realTime`
- `OnceAt(timeInS: number, realTime?: boolean)`
- `OnceAtByKey`
- `OpenURL(fullURL: string)`
- `fullURL`
- `SetUseParticleFow(enabled: boolean)`
- `enabled`
- `SetFogEnable(enabled: boolean)`
- `SetRFarz(value: number)`
- `value`
- `Crash()`
- `ShowWindow()`

## Engine

- Kind: `class`
- Path: `/en/guide/classes/engine/dota`
- URL: https://docs.melonity.gg/en/guide/classes/engine/dota

### Sections (H2)

- Dota Functions

### Members / Signatures (H3/H4)

- `CanAcceptMatch() boolean`
- `AcceptMatch(state?: number) void`
- `IsShopOpen() boolean`
- `IsScoreboardOpen() boolean`
- `IsMenuOpen() boolean`
- `IsInGame() boolean`
- `IsSearchMatch() boolean`
- `IsPointVisible(position: Vector) boolean`
- `GetMapName() string`
- `GetGroundZ(position: Vector) number`
- `GetCompetitiveMMR() number`
- `GetSteamID() string`
- `RegisterFireEvent(eventName: string) void`
- `ExecuteCommand(command: string) void`
- `RequestProfile(steamID32: number, callback: (obj: any) => void) void`
- `RequestProfileCard(steamID32: number, callback: (obj: any) => void) void`
- `GetDotaVersion() number`
- `DrawWorldLine(start: Vector, end: Vector) void`
- `BeginWorldLine(start: Vector) void`
- `ContinueWorldLine(end: Vector) void`
- `EndWorldLine() void`
- `SetClipboardText(text: string) void`
- `GetClipboardText() string`
- `EnableExecuteCommand(enable: boolean) void`
- `IsExecuteCommandEnabled() boolean`
- `EnablePrepareUnitOrders(enable: boolean) void`
- `IsPrepareUnitOrdersEnabled() boolean`
- `EnableParticles(enable: boolean) void`
- `IsParticlesEnabled() boolean`
- `ReloadScripts() void`

### Paragraphs

- The Engine namespace provides Dota-side match, world, profile-request, clipboard, and runtime control helpers.
- Checks if the match can be accepted.
- Returned:
- Accepts the match.
- Checks if the shop is open.
- Checks if the scoreboard is open.
- Checks if the menu is open.
- Checks if the user is in game.
- Checks if the user is searching for a match.
- Checks if a point is visible (not in fog of war).
- Retrieves the name of the current map.
- Retrieves the ground Z coordinate at a given position.
- Retrieves the competitive MMR of the player.
- Retrieves the Steam ID of the player.
- Registers a fire event.
- WARNING
- Used to add some events to OnFireEvent callback (like entity_hurt, etc). Do not use if Safe Mode is enabled. (See IsSafeMode )
- This function executes a command like in the console.
- This function requests a profile.
- IMPORTANT
- Sends to GC CMsgProfileRequest message.
- This function requests a profile card.
- Sends to GC CMsgClientToGCGetProfileCard message.
- Returns current Dota version. Example: 6123
- Draws a world-space line between two positions.
- Begins a world-space line at the specified position.
- Continues the current world-space line to the specified position.
- Ends the current world-space line.
- Copies a given text to the clipboard.
- Retrieves the text from the clipboard.
- Enables or disables Engine.ExecuteCommand .
- Checks whether Engine.ExecuteCommand is enabled.
- Enables or disables prepare-unit-orders support.
- Checks whether prepare-unit-orders support is enabled.
- Enables or disables particles.
- Checks whether particles are enabled.
- Reloads scripts.

### List Items

- boolean - A boolean indicating whether the match can be accepted.
- state number (optional) - The state of the match. Default - 1 See DOTALobbyReadyState.
- boolean - A boolean indicating whether the shop is open.
- boolean - A boolean indicating whether the scoreboard is open.
- boolean - A boolean indicating whether the menu is open.
- boolean - A boolean indicating whether the user is in game.
- boolean - A boolean indicating whether the user is searching for a match.
- position Vector - The position vector of the point.
- boolean - A boolean indicating whether the point is visible.
- string - The name of the current map.
- position Vector - The position vector.
- number - The ground Z coordinate.
- number - The competitive MMR of the player.
- string - The Steam ID of the player.
- eventName string - The name of the event.
- command string - The command to execute.
- steamID32 number - The Steam ID of the profile.
- callback (obj: any) => void - The callback function to execute when the profile is retrieved.
- steamID32 number - The Steam ID of the profile card.
- callback (obj: any) => void - The callback function to execute when the profile card is retrieved.
- number - The requested dota version.
- start Vector - The starting position.
- end Vector - The ending position.
- text string - The text to be copied to the clipboard.
- string - The text from the clipboard.
- enable boolean - Whether the feature should be enabled.
- boolean - True if the condition is met, false otherwise.

### Inline Code Tokens

- `Engine`
- `CanAcceptMatch()`
- `AcceptMatch(state?: number)`
- `state`
- `IsShopOpen()`
- `IsScoreboardOpen()`
- `IsMenuOpen()`
- `IsInGame()`
- `IsSearchMatch()`
- `IsPointVisible(position: Vector)`
- `position`
- `GetMapName()`
- `GetGroundZ(position: Vector)`
- `GetCompetitiveMMR()`
- `GetSteamID()`
- `RegisterFireEvent(eventName: string)`
- `eventName`
- `IsSafeMode`
- `ExecuteCommand(command: string)`
- `command`
- `RequestProfile(steamID32: number, callback: (obj: any) => void)`
- `steamID32`
- `callback`
- `RequestProfileCard(steamID32: number, callback: (obj: any) => void)`
- `GetDotaVersion()`
- `DrawWorldLine(start: Vector, end: Vector)`
- `start`
- `end`
- `BeginWorldLine(start: Vector)`
- `ContinueWorldLine(end: Vector)`
- `EndWorldLine()`
- `SetClipboardText(text: string)`
- `text`
- `GetClipboardText()`
- `EnableExecuteCommand(enable: boolean)`
- `Engine.ExecuteCommand`
- `enable`
- `IsExecuteCommandEnabled()`
- `EnablePrepareUnitOrders(enable: boolean)`
- `IsPrepareUnitOrdersEnabled()`
- `EnableParticles(enable: boolean)`
- `IsParticlesEnabled()`
- `ReloadScripts()`

## Engine

- Kind: `class`
- Path: `/en/guide/classes/engine/engine`
- URL: https://docs.melonity.gg/en/guide/classes/engine/engine

### Sections (H2)

- Pages

### Paragraphs

- The Engine namespace exposes runtime helpers, cheat controls, and Dota-specific script utilities.

### List Items

- Cheat - Runtime, timer, and cheat-side helpers.
- Dota - Match, world, profile-request, clipboard, and runtime control helpers.

### Inline Code Tokens

- `Engine`
- `Cheat`
- `Dota`

## Ability

- Kind: `class`
- Path: `/en/guide/classes/entitylist/Ability`
- URL: https://docs.melonity.gg/en/guide/classes/entitylist/Ability

### Sections (H2)

- Methods

### Members / Signatures (H3/H4)

- `GetAbilityDefinition() DataView | null`
- `GetAbilityDefinitionProperty(propertyName: string) string | number | boolean | null`
- `GetName() string`
- `GetAbilityChargeRestoreTimeRemaining() number`
- `GetAbilityChargeRestoreTime() number`
- `GetAbilityCurrentCharges() number`
- `GetCandyCount() number`
- `GetAbilityIndex() number`
- `IsHidden() boolean`
- `IsDisplayed() boolean`
- `GetAOERadius() number`
- `GetMaxLevel() number`
- `GetImagePath() string`
- `IsStealable() boolean`
- `GetKeyBind() string`
- `GetChannelStartTime() number`
- `GetKeyValues() KeyValue | null`
- `FindKey(key: string) KeyValue | null`
- `IsTalent() boolean`
- `GetImage() Image`
- `GetCooldown() number`
- `GetCooldownLength() number`
- `GetManaCost() number`
- `GetLevel() number`
- `GetType() Enum.AbilityTypes`
- `GetBehavior() Enum.AbilityBehavior`
- `GetTargetTeam() Enum.TargetTeam`
- `GetTargetType() Enum.TargetType`
- `GetTargetFlags() Enum.TargetFlags`
- `GetDamageType() Enum.DamageTypes`
- `GetImmunityType() Enum.ImmunityTypes`
- `GetDispellableType() Enum.DispellableTypes`
- `IsPassive() boolean`
- `IsBasic() boolean`
- `IsUltimate() boolean`
- `IsAttributes() boolean`
- `GetLevelSpecialValueFor(key: string) number`
- `GetLevelSpecialValueForFloat(key: string) number`
- `SecondsSinceLastUse() number`
- `GetDamage() number`
- `GetCastPoint() number`
- `GetCastRange() number`
- `IsCastable(mana: number, passiveOk?: boolean) boolean`
- `IsChannelling() boolean`
- `IsActivated() boolean`
- `GetDirtyButtons() number`
- `GetToggleState() boolean`
- `GetCastStartTime() number`
- `IsInAbilityPhase() boolean`
- `GetAutoCastState() boolean`
- `IsInIndefinateCooldown() boolean`
- `GetOverrideCastPoint() number`
- `IsStolen() boolean`
- `CastTarget(target: Entity, queue?: boolean) void`
- `CastNoTarget(queue?: boolean) void`
- `CastPosition(position: Vector, queue?: boolean) void`
- `Toggle(queue?: boolean) void`
- `ToggleMod(queue?: boolean) void`

### Paragraphs

- The Ability class extends Entity with ability state, metadata, and casting APIs.
- NOTE
- This page documents members declared directly on Ability . Inherited members are available from Entity .
- Retrieves the ability definition.
- Returned:
- Retrieves the ability definition property.
- Retrieves the name.
- Retrieves the ability charge restore time remaining.
- Retrieves the ability charge restore time.
- Retrieves the ability current charges.
- Retrieves the candy count.
- Retrieves the ability index.
- Checks whether it is hidden.
- Checks whether it is displayed.
- Retrieves the aoeradius.
- Retrieves the maximum level.
- Retrieves the image path.
- Checks whether it is stealable.
- Retrieves the key bind.
- Retrieves the channel start time.
- Retrieves the key values.
- Finds the key.
- Checks whether it is talent.
- Retrieves the image.
- Retrieves the cooldown.
- Retrieves the cooldown length.
- Retrieves the mana cost.
- Retrieves the level.
- Retrieves the type.
- Retrieves the behavior.
- Retrieves the target team.
- Retrieves the target type.
- Retrieves the target flags.
- Retrieves the damage type.
- Retrieves the immunity type.
- Retrieves the dispellable type.
- Checks whether it is passive.
- Checks whether it is basic.
- Checks whether it is ultimate.
- Checks whether it is attributes.
- Retrieves the level special value for.
- Retrieves the level special value for float.
- Retrieves the elapsed time since the last use.
- Retrieves the damage.
- Retrieves the cast point.
- Retrieves the cast range.
- Checks whether the ability is castable for the provided mana value.
- Checks whether it is channelling.
- Checks whether it is activated.
- Retrieves the dirty buttons.
- Retrieves the toggle state.
- Retrieves the cast start time.
- Checks whether it is in ability phase.
- Retrieves the auto cast state.
- Checks whether it is in indefinate cooldown.
- Retrieves the override cast point.
- Checks whether it is stolen.
- Casts the ability using the target.
- Casts the ability using the no target.
- Casts the ability using the position.
- Toggles the current item or ability state.
- Toggles the alternate item or ability state.

### List Items

- DataView | null - The matching object, or null if it is not available.
- propertyName string - The property name.
- string | number | boolean | null - The matching object, or null if it is not available.
- string - The requested name.
- number - The requested ability charge restore time remaining.
- number - The requested ability charge restore time.
- number - The requested ability current charges.
- number - The requested candy count.
- number - The requested ability index.
- boolean - True if the condition is met, false otherwise.
- number - The requested aoeradius.
- number - The requested maximum level.
- string - The requested image path.
- string - The requested key bind.
- number - The requested channel start time.
- KeyValue | null - The matching object, or null if it is not available.
- key string - The key.
- Image - The result of the call.
- number - The requested cooldown.
- number - The requested cooldown length.
- number - The requested mana cost.
- number - The requested level.
- Enum.AbilityTypes - The result of the call.
- Enum.AbilityBehavior - The result of the call.
- Enum.TargetTeam - The result of the call.
- Enum.TargetType - The result of the call.
- Enum.TargetFlags - The result of the call.
- Enum.DamageTypes - The result of the call.
- Enum.ImmunityTypes - The result of the call.
- Enum.DispellableTypes - The result of the call.
- number - The requested level special value for.
- number - The requested level special value for float.
- number - The requested seconds since last use.
- number - The requested damage.
- number - The requested cast point.
- number - The requested cast range.
- mana number - The mana.
- passiveOk boolean (optional) - The passive ok.
- number - The requested dirty buttons.
- number - The requested cast start time.
- number - The requested override cast point.
- target Entity - The target entity.
- queue boolean (optional) - Whether to queue the action.
- position Vector - The position to use.

### Inline Code Tokens

- `Ability`
- `Entity`
- `GetAbilityDefinition()`
- `null`
- `GetAbilityDefinitionProperty(propertyName: string)`
- `propertyName`
- `GetName()`
- `GetAbilityChargeRestoreTimeRemaining()`
- `GetAbilityChargeRestoreTime()`
- `GetAbilityCurrentCharges()`
- `GetCandyCount()`
- `GetAbilityIndex()`
- `IsHidden()`
- `IsDisplayed()`
- `GetAOERadius()`
- `GetMaxLevel()`
- `GetImagePath()`
- `IsStealable()`
- `GetKeyBind()`
- `GetChannelStartTime()`
- `GetKeyValues()`
- `FindKey(key: string)`
- `key`
- `IsTalent()`
- `GetImage()`
- `GetCooldown()`
- `GetCooldownLength()`
- `GetManaCost()`
- `GetLevel()`
- `GetType()`
- `GetBehavior()`
- `GetTargetTeam()`
- `GetTargetType()`
- `GetTargetFlags()`
- `GetDamageType()`
- `GetImmunityType()`
- `GetDispellableType()`
- `IsPassive()`
- `IsBasic()`
- `IsUltimate()`
- `IsAttributes()`
- `GetLevelSpecialValueFor(key: string)`
- `GetLevelSpecialValueForFloat(key: string)`
- `SecondsSinceLastUse()`
- `GetDamage()`
- `GetCastPoint()`
- `GetCastRange()`
- `IsCastable(mana: number, passiveOk?: boolean)`
- `mana`
- `passiveOk`
- `IsChannelling()`
- `IsActivated()`
- `GetDirtyButtons()`
- `GetToggleState()`
- `GetCastStartTime()`
- `IsInAbilityPhase()`
- `GetAutoCastState()`
- `IsInIndefinateCooldown()`
- `GetOverrideCastPoint()`
- `IsStolen()`
- `CastTarget(target: Entity, queue?: boolean)`
- `target`
- `queue`
- `CastNoTarget(queue?: boolean)`
- `CastPosition(position: Vector, queue?: boolean)`
- `position`
- `Toggle(queue?: boolean)`
- `ToggleMod(queue?: boolean)`

## Courier

- Kind: `class`
- Path: `/en/guide/classes/entitylist/Courier`
- URL: https://docs.melonity.gg/en/guide/classes/entitylist/Courier

### Sections (H2)

- Methods

### Members / Signatures (H3/H4)

- `IsFlyingCourier() boolean`
- `GetRespawnTime() number`
- `GetCourierState() Enum.CourierState`
- `GetCourierStateEntityIndex() number`
- `GetCourierStateEntity() Hero | null`

### Paragraphs

- The Courier class extends NPC with courier-specific state APIs.
- NOTE
- This page documents members declared directly on Courier . Inherited members are available from NPC .
- Checks whether it is flying courier.
- Returned:
- Retrieves the respawn time.
- Retrieves the courier state.
- Retrieves the courier state entity index.
- Retrieves the courier state entity.

### List Items

- boolean - True if the condition is met, false otherwise.
- number - The requested respawn time.
- Enum.CourierState - The result of the call.
- number - The requested courier state entity index.
- Hero | null - The matching object, or null if it is not available.

### Inline Code Tokens

- `Courier`
- `NPC`
- `IsFlyingCourier()`
- `GetRespawnTime()`
- `GetCourierState()`
- `GetCourierStateEntityIndex()`
- `GetCourierStateEntity()`
- `null`

## Entity

- Kind: `class`
- Path: `/en/guide/classes/entitylist/Entity`
- URL: https://docs.melonity.gg/en/guide/classes/entitylist/Entity

### Sections (H2)

- Static Methods
- Methods

### Members / Signatures (H3/H4)

- `static GetClassNameStatic() string`
- `GetIndex() number`
- `GetHandle() number`
- `GetGameSceneNode() DataView | null`
- `GetInheritance() string[]`
- `GetClassName() string`
- `InheritFrom(className: string) boolean`
- `GetHealth() number`
- `GetMaxHealth() number`
- `IsAlive() boolean`
- `GetAbsOrigin() Vector`
- `GetOrigin() Vector`
- `GetRotation() Angle`
- `GetAbsRotation() Angle`
- `GetScale() number`
- `SetScale(scale: number) void`
- `GetDistance(point: Vector) number`
- `GetDistance2D(point: Vector) number`
- `GetDistanceToEntity(ent: Entity) number`
- `GetDistance2DToEntity(ent: Entity) number`
- `IsOnScreen() boolean`
- `WorldToScreen(onScreenCheck?: boolean) [number, number, boolean]`
- `GetTeamNum() number`
- `IsSameTeam(other: Entity) boolean`
- `IsDormant() boolean`
- `IsEntity() boolean`
- `IsNPC() this is NPC`
- `IsHero() this is Hero`
- `IsPlayer() this is Player`
- `IsAbility() this is Ability`
- `IsItem() this is Item`
- `IsPhysicalItem() this is PhysicalItem`
- `IsTree() this is Tree`
- `IsTempTree() this is TempTree`
- `IsRune() this is Rune`
- `IsPositionInRange(position: Vector, range: number, hull?: number) boolean`
- `IsEntityInRange(entity: Entity, range: number) boolean`
- `HasModel() this is ModelEntity`
- `GetOwner<T = NPC>() T | null`
- `GetOwnerRecursive() Entity | null`
- `IsRecursiveOwnedByIndex(index: number) boolean`
- `IsRecursiveOwnedByHandle(handle: number) boolean`
- `IsOwnedByIndex(index: number) boolean`
- `IsOwnedByHandle(handle: number) boolean`
- `IsOwnedBy(entity: Entity) boolean`
- `GetEntityName() string`
- `GetDesignerName() string`
- `GetCreationTick() number`
- `IsUpdated() boolean`
- `GetModelName() string`
- `IsTeamSuitable(ent: Entity, teamType: Enum.TeamType) boolean`
- `GetEntitiesInRadiusByClass<T extends Entity = Entity>(radius: number, teamType: Enum.TeamType, className: string) Array<T>`
- `GetEntitiesInRadius(radius: number, teamType: Enum.TeamType) Entity []`
- `GetHeroesInRadius(radius: number, teamType: Enum.TeamType) Hero []`
- `GetUnitsInRadius(radius: number, teamType: Enum.TeamType) NPC []`
- `GetTreesInRadius(radius: number, isActive?: boolean) Tree []`
- `GetTempTreeInRadius(radius: number) TempTree []`
- `GetTreeOrTempTreeInRadius(radius: number) ( Tree | TempTree )[]`
- `DrawDebugRadius(radius: number, color: Color, segments?: number) void`

### Paragraphs

- The Entity class is the base type for world entities tracked by the game.
- NOTE
- This page documents members declared directly on Entity . Inherited members are available from MemoryAccessor .
- Retrieves the class name static.
- Returned:
- Retrieves the index.
- Retrieves the handle.
- Retrieves the game scene node.
- Retrieves the inheritance.
- Retrieves the class name.
- Checks whether the entity inherits from the specified class name.
- Retrieves the health.
- Retrieves the maximum health.
- Checks whether it is alive.
- Retrieves the abs origin.
- Retrieves the origin.
- Retrieves the rotation.
- Retrieves the abs rotation.
- Retrieves the scale.
- Sets the scale.
- Retrieves the distance.
- Retrieves the distance2 d.
- Retrieves the distance to entity.
- Retrieves the distance2 dto entity.
- Checks whether it is on screen.
- Transforms the entity position from world space to screen space.
- Retrieves the team num.
- Checks whether the entity is on the same team as another entity.
- Checks whether it is dormant.
- Checks whether it is entity.
- Checks whether it is npc.
- Checks whether it is hero.
- Checks whether it is player.
- Checks whether it is ability.
- Checks whether it is item.
- Checks whether it is physical item.
- Checks whether it is tree.
- Checks whether it is temp tree.
- Checks whether it is rune.
- Checks whether a position is within range of the entity.
- Checks whether another entity is within range.
- Checks whether it has model.
- Retrieves the owner.
- Retrieves the owner recursive.
- Checks whether the entity is recursively owned by the specified index.
- Checks whether the entity is recursively owned by the specified handle.
- Checks whether the entity is owned by the specified index.
- Checks whether the entity is owned by the specified handle.
- Checks whether the entity is owned by the specified entity.
- Retrieves the entity name.
- Retrieves the designer name.
- Retrieves the creation tick.
- equivalent to ent.GetCreationTick() != GameRules.GetTickCount()
- Retrieves the model name.
- Checks whether it is team suitable.
- Retrieves the entities in radius by class.
- Retrieves the entities in radius.
- Retrieves the heroes in radius.
- Retrieves the units in radius.
- Retrieves the trees in radius.
- Retrieves the temp tree in radius.
- Retrieves the tree or temp tree in radius.
- Draws a debug radius around the entity.

### List Items

- string - The requested class name static.
- number - The requested index.
- number - The requested handle.
- DataView | null - The matching object, or null if it is not available.
- string[] - An array with the matching values.
- string - The requested class name.
- className string - The class name to check or query.
- boolean - True if the condition is met, false otherwise.
- number - The requested health.
- number - The requested maximum health.
- Vector - The result of the call.
- Angle - The result of the call.
- number - The requested scale.
- scale number - The scale value.
- point Vector - The point to use.
- number - The requested distance.
- number - The requested distance2 d.
- ent Entity - The entity to use.
- number - The requested distance to entity.
- number - The requested distance2 dto entity.
- onScreenCheck boolean (optional) - The on screen check.
- [number, number, boolean] - The result of the call.
- number - The requested team num.
- other Entity - The other.
- this is NPC - The result of the call.
- this is Hero - The result of the call.
- this is Player - The result of the call.
- this is Ability - The result of the call.
- this is Item - The result of the call.
- this is PhysicalItem - The result of the call.
- this is Tree - The result of the call.
- this is TempTree - The result of the call.
- this is Rune - The result of the call.
- position Vector - The position to use.
- range number - The range value.
- hull number (optional) - The hull radius value.
- entity Entity - The entity to use.
- this is ModelEntity - The result of the call.
- T | null - The matching object, or null if it is not available.
- Entity | null - The matching object, or null if it is not available.
- index number - The index value.
- handle number - The handle.
- string - The requested entity name.
- string - The requested designer name.
- number - The requested creation tick.
- boolean - returns true if entity was created in not current tick
- string - The requested model name.
- teamType Enum.TeamType - The team selection filter.
- radius number - The radius value.
- Array<T> - An array with the matching values.
- Entity [] - An array with the matching values.
- Hero [] - An array with the matching values.
- NPC [] - An array with the matching values.
- isActive boolean (optional) - The is active.
- Tree [] - An array with the matching values.
- TempTree [] - An array with the matching values.
- ( Tree | TempTree )[] - An array with the matching values.
- color Color - The color value to use.
- segments number (optional) - The segment count.

### Inline Code Tokens

- `Entity`
- `MemoryAccessor`
- `static GetClassNameStatic()`
- `GetIndex()`
- `GetHandle()`
- `GetGameSceneNode()`
- `null`
- `GetInheritance()`
- `GetClassName()`
- `InheritFrom(className: string)`
- `className`
- `GetHealth()`
- `GetMaxHealth()`
- `IsAlive()`
- `GetAbsOrigin()`
- `GetOrigin()`
- `GetRotation()`
- `GetAbsRotation()`
- `GetScale()`
- `SetScale(scale: number)`
- `scale`
- `GetDistance(point: Vector)`
- `point`
- `GetDistance2D(point: Vector)`
- `GetDistanceToEntity(ent: Entity)`
- `ent`
- `GetDistance2DToEntity(ent: Entity)`
- `IsOnScreen()`
- `WorldToScreen(onScreenCheck?: boolean)`
- `onScreenCheck`
- `GetTeamNum()`
- `IsSameTeam(other: Entity)`
- `other`
- `IsDormant()`
- `IsEntity()`
- `IsNPC()`
- `IsHero()`
- `IsPlayer()`
- `IsAbility()`
- `IsItem()`
- `IsPhysicalItem()`
- `IsTree()`
- `IsTempTree()`
- `IsRune()`
- `IsPositionInRange(position: Vector, range: number, hull?: number)`
- `position`
- `range`
- `hull`
- `IsEntityInRange(entity: Entity, range: number)`
- `entity`
- `HasModel()`
- `GetOwner<T = NPC>()`
- `GetOwnerRecursive()`
- `IsRecursiveOwnedByIndex(index: number)`
- `index`
- `IsRecursiveOwnedByHandle(handle: number)`
- `handle`
- `IsOwnedByIndex(index: number)`
- `IsOwnedByHandle(handle: number)`
- `IsOwnedBy(entity: Entity)`
- `GetEntityName()`
- `GetDesignerName()`
- `GetCreationTick()`
- `IsUpdated()`
- `GetModelName()`
- `IsTeamSuitable(ent: Entity, teamType: Enum.TeamType)`
- `teamType`
- `GetEntitiesInRadiusByClass<T extends Entity = Entity>(radius: number, teamType: Enum.TeamType, className: string)`
- `radius`
- `GetEntitiesInRadius(radius: number, teamType: Enum.TeamType)`
- `GetHeroesInRadius(radius: number, teamType: Enum.TeamType)`
- `GetUnitsInRadius(radius: number, teamType: Enum.TeamType)`
- `GetTreesInRadius(radius: number, isActive?: boolean)`
- `isActive`
- `GetTempTreeInRadius(radius: number)`
- `GetTreeOrTempTreeInRadius(radius: number)`
- `DrawDebugRadius(radius: number, color: Color, segments?: number)`
- `color`
- `segments`

## GameManagerProxy

- Kind: `class`
- Path: `/en/guide/classes/entitylist/GameManagerProxy`
- URL: https://docs.melonity.gg/en/guide/classes/entitylist/GameManagerProxy

### Paragraphs

- The GameManagerProxy class extends Entity and represents the game manager proxy entity.
- NOTE
- This page documents members declared directly on GameManagerProxy . Inherited members are available from Entity .
- TIP
- This type does not declare additional public members beyond its base class.

### Inline Code Tokens

- `GameManagerProxy`
- `Entity`

## GameRulesProxy

- Kind: `class`
- Path: `/en/guide/classes/entitylist/GameRulesProxy`
- URL: https://docs.melonity.gg/en/guide/classes/entitylist/GameRulesProxy

### Paragraphs

- The GameRulesProxy class extends Entity and represents the game rules proxy entity.
- NOTE
- This page documents members declared directly on GameRulesProxy . Inherited members are available from Entity .
- TIP
- This type does not declare additional public members beyond its base class.

### Inline Code Tokens

- `GameRulesProxy`
- `Entity`

## Hero

- Kind: `class`
- Path: `/en/guide/classes/entitylist/Hero`
- URL: https://docs.melonity.gg/en/guide/classes/entitylist/Hero

### Sections (H2)

- Methods

### Members / Signatures (H3/H4)

- `GetTalentsMask() number`
- `GetTalents() Array< Ability >`
- `GetPlayerID() number`
- `GetImageIcon() Image`
- `GetCurrentXP() number`
- `GetAbilityPoints() number`
- `GetRespawnTime() number`
- `GetRespawnTimePenalty() number`
- `GetPrimaryAttribute() Enum.Attributes`
- `GetStrength() number`
- `GetAgility() number`
- `GetIntellect() number`
- `GetStrengthTotal() number`
- `GetAgilityTotal() number`
- `GetIntellectTotal() number`
- `GetRecentDamage() number`
- `GetPainFactor() number`
- `GetTargetPainFactor() number`
- `GetLifeState() boolean`
- `GetReplicatingOtherHeroModelIndex() number`
- `GetReplicatingOtherHeroModel() Hero | null`
- `IsReplicatingOtherHeroModel() boolean`
- `GetHeroFacetID() number`

### Paragraphs

- The Hero class extends NPC with hero-specific progression and attribute APIs.
- NOTE
- This page documents members declared directly on Hero . Inherited members are available from NPC .
- Retrieves the talents mask.
- Returned:
- Retrieves the talents.
- Retrieves the player id.
- Retrieves the image icon.
- Retrieves the current xp.
- Retrieves the ability points.
- Retrieves the respawn time.
- Retrieves the respawn time penalty.
- Retrieves the primary attribute.
- Retrieves the strength.
- Retrieves the agility.
- Retrieves the intellect.
- Retrieves the strength total.
- Retrieves the agility total.
- Retrieves the intellect total.
- Retrieves the recent damage.
- Retrieves the pain factor.
- Retrieves the target pain factor.
- Retrieves the life state.
- Retrieves the replicating other hero model index.
- Retrieves the replicating other hero model.
- Checks whether it is replicating other hero model.
- Retrieves the hero facet id.

### List Items

- number - The requested talents mask.
- Array< Ability > - An array with the matching values.
- number - The requested player id.
- Image - The result of the call.
- number - The requested current xp.
- number - The requested ability points.
- number - The requested respawn time.
- number - The requested respawn time penalty.
- Enum.Attributes - The result of the call.
- number - The requested strength.
- number - The requested agility.
- number - The requested intellect.
- number - The requested strength total.
- number - The requested agility total.
- number - The requested intellect total.
- number - The requested recent damage.
- number - The requested pain factor.
- number - The requested target pain factor.
- boolean - True if the condition is met, false otherwise.
- number - The requested replicating other hero model index.
- Hero | null - The matching object, or null if it is not available.
- number - The requested hero facet id.

### Inline Code Tokens

- `Hero`
- `NPC`
- `GetTalentsMask()`
- `GetTalents()`
- `GetPlayerID()`
- `GetImageIcon()`
- `GetCurrentXP()`
- `GetAbilityPoints()`
- `GetRespawnTime()`
- `GetRespawnTimePenalty()`
- `GetPrimaryAttribute()`
- `GetStrength()`
- `GetAgility()`
- `GetIntellect()`
- `GetStrengthTotal()`
- `GetAgilityTotal()`
- `GetIntellectTotal()`
- `GetRecentDamage()`
- `GetPainFactor()`
- `GetTargetPainFactor()`
- `GetLifeState()`
- `GetReplicatingOtherHeroModelIndex()`
- `GetReplicatingOtherHeroModel()`
- `null`
- `IsReplicatingOtherHeroModel()`
- `GetHeroFacetID()`

## Item

- Kind: `class`
- Path: `/en/guide/classes/entitylist/Item`
- URL: https://docs.melonity.gg/en/guide/classes/entitylist/Item

### Sections (H2)

- Methods

### Members / Signatures (H3/H4)

- `GetCost() number`
- `IsPermanent() boolean`
- `IsStackable() boolean`
- `HasRecipe() boolean`
- `GetSharability() number`
- `IsDroppable() boolean`
- `IsPurchasable() boolean`
- `IsSellable() boolean`
- `IsRequireCharges() boolean`
- `IsKillable() boolean`
- `IsDisassemblable() boolean`
- `IsAlertable() boolean`
- `GetInitialCharges() number`
- `CastsOnPickup() boolean`
- `GetCurrentCharges() number`
- `GetSecondaryCharges() number`
- `IsCombineLocked() boolean`
- `GetPurchaseTime() number`
- `GetAssembledTime() number`
- `IsPurchasedWhileWasDead() boolean`
- `CanBeUsedOutOfInventory() boolean`
- `IsItemEnabled() boolean`
- `GetEnableTime() number`
- `GetPlayerOwnerID() number`
- `GetPowerTreadsState() Enum.PowerTreadsAttributes`

### Paragraphs

- The Item class extends Ability with item-specific state and inventory metadata.
- NOTE
- This page documents members declared directly on Item . Inherited members are available from Ability .
- Retrieves the cost.
- Returned:
- Checks whether it is permanent.
- Checks whether it is stackable.
- Checks whether it has recipe.
- Retrieves the sharability.
- Checks whether it is droppable.
- Checks whether it is purchasable.
- Checks whether it is sellable.
- Checks whether it is require charges.
- IMPORTANT
- for wards return false
- Checks whether it is killable.
- Checks whether it is disassemblable.
- Checks whether it is alertable.
- Retrieves the initial charges.
- Casts the ability using the s on pickup.
- Retrieves the current charges.
- Retrieves the secondary charges.
- Checks whether it is combine locked.
- Retrieves the purchase time.
- Retrieves the assembled time.
- Checks whether it is purchased while was dead.
- Checks whether it can be used out of inventory.
- Checks whether it is item enabled.
- Retrieves the enable time.
- Retrieves the player owner id.
- Retrieves the power treads state.

### List Items

- number - The requested cost.
- boolean - True if the condition is met, false otherwise.
- number - The requested sharability.
- number - The requested initial charges.
- number - The requested current charges.
- number - The requested secondary charges.
- number - The requested purchase time.
- number - The requested assembled time.
- number - The requested enable time.
- number - The requested player owner id.
- Enum.PowerTreadsAttributes - The result of the call.

### Inline Code Tokens

- `Item`
- `Ability`
- `GetCost()`
- `IsPermanent()`
- `IsStackable()`
- `HasRecipe()`
- `GetSharability()`
- `IsDroppable()`
- `IsPurchasable()`
- `IsSellable()`
- `IsRequireCharges()`
- `IsKillable()`
- `IsDisassemblable()`
- `IsAlertable()`
- `GetInitialCharges()`
- `CastsOnPickup()`
- `GetCurrentCharges()`
- `GetSecondaryCharges()`
- `IsCombineLocked()`
- `GetPurchaseTime()`
- `GetAssembledTime()`
- `IsPurchasedWhileWasDead()`
- `CanBeUsedOutOfInventory()`
- `IsItemEnabled()`
- `GetEnableTime()`
- `GetPlayerOwnerID()`
- `GetPowerTreadsState()`

## LightInfo

- Kind: `class`
- Path: `/en/guide/classes/entitylist/LightInfo`
- URL: https://docs.melonity.gg/en/guide/classes/entitylist/LightInfo

### Sections (H2)

- Methods

### Members / Signatures (H3/H4)

- `GetColorArray(field: string, index: number) Color`
- `SetColorArray(field: string, index: number, color: Color) void`
- `GetFloatArray(field: string, index: number) number`
- `SetFloatArray(field: string, index: number, value: number) void`
- `GetFloat(field: string) number`
- `SetFloat(field: string, value: number) void`
- `GetColor(field: string) Color`
- `SetColor(field: string, color: Color) void`

### Paragraphs

- The LightInfo class extends Entity with light color and scalar field accessors.
- NOTE
- This page documents members declared directly on LightInfo . Inherited members are available from Entity .
- Retrieves the color array.
- Returned:
- Sets the color array.
- Retrieves the float array.
- Sets the float array.
- Retrieves the float.
- Sets the float.
- Retrieves the color.
- Sets the color.

### List Items

- field string - The field name.
- index number - The index value.
- Color - The result of the call.
- color Color - The color value to use.
- number - The requested float array.
- value number - The value to set or use.
- number - The requested float.

### Inline Code Tokens

- `LightInfo`
- `Entity`
- `GetColorArray(field: string, index: number)`
- `field`
- `index`
- `SetColorArray(field: string, index: number, color: Color)`
- `color`
- `GetFloatArray(field: string, index: number)`
- `SetFloatArray(field: string, index: number, value: number)`
- `value`
- `GetFloat(field: string)`
- `SetFloat(field: string, value: number)`
- `GetColor(field: string)`
- `SetColor(field: string, color: Color)`

## LinearProjectileObject

- Kind: `class`
- Path: `/en/guide/classes/entitylist/LinearProjectileObject`
- URL: https://docs.melonity.gg/en/guide/classes/entitylist/LinearProjectileObject

### Sections (H2)

- Properties

### Members / Signatures (H3/H4)

- `index number`
- `currentPosition Vector`
- `startPosition Vector`
- `velocity Vector`
- `originalVelocity Vector`
- `acceleration Vector`
- `maxSpeed number`
- `maxDist number`
- `fowRadius number`
- `stickyFoWReveal boolean`
- `source NPC | null`
- `sourceIndex number`

### Paragraphs

- The LinearProjectileObject class provides access to linear projectile state and movement data.
- NOTE
- This page documents members declared directly on LinearProjectileObject . Inherited members are available from MemoryAccessor .
- The index.
- The current position.
- The start position.
- The velocity.
- The original velocity.
- The acceleration.
- The maximum speed.
- The maximum dist.
- The fow radius.
- The sticky fo wreveal.
- The source.
- The source index.

### Inline Code Tokens

- `LinearProjectileObject`
- `MemoryAccessor`
- `index`
- `currentPosition`
- `startPosition`
- `velocity`
- `originalVelocity`
- `acceleration`
- `maxSpeed`
- `maxDist`
- `fowRadius`
- `stickyFoWReveal`
- `source`
- `sourceIndex`

## MemoryAccessor

- Kind: `class`
- Path: `/en/guide/classes/entitylist/MemoryAccessor`
- URL: https://docs.melonity.gg/en/guide/classes/entitylist/MemoryAccessor

### Sections (H2)

- Methods

### Members / Signatures (H3/H4)

- `IsExist() boolean`
- `ExistCheck() void`
- `GetPointer() DataView`
- `GetProperty<T>(className: string, fieldPath: string) T`

### Paragraphs

- The MemoryAccessor class provides low-level access to schema-based memory properties.
- Checks whether the underlying object still exists.
- Returned:
- Throws if the underlying object no longer exists.
- Retrieves the underlying memory pointer.
- Retrieves a schema property value from the specified class and field path.

### List Items

- boolean - True if the condition is met, false otherwise.
- DataView - The result of the call.
- className string - The class name to check or query.
- fieldPath string - The schema field path.
- T - The result of the call.

### Inline Code Tokens

- `MemoryAccessor`
- `IsExist()`
- `ExistCheck()`
- `GetPointer()`
- `GetProperty<T>(className: string, fieldPath: string)`
- `className`
- `fieldPath`

## ModelEntity

- Kind: `class`
- Path: `/en/guide/classes/entitylist/ModelEntity`
- URL: https://docs.melonity.gg/en/guide/classes/entitylist/ModelEntity

### Sections (H2)

- Methods

### Members / Signatures (H3/H4)

- `SetModel(modelPath: string) void`
- `SetScale(size: number) void`
- `SetModelColor(color: Color) void`
- `GetMeshGroupMask() bigint`
- `SetMeshGroupMask(mask: bigint) void`
- `SetGlow(enabled: boolean, r?: number, g?: number, b?: number, a?: number) void`

### Paragraphs

- The ModelEntity class extends Entity with model and visual controls.
- NOTE
- This page documents members declared directly on ModelEntity . Inherited members are available from Entity .
- Sets the model.
- Sets the scale.
- Sets the model color.
- Retrieves the mesh group mask.
- Returned:
- Sets the mesh group mask.
- Sets the glow.

### List Items

- modelPath string - The model path to use.
- size number - The size value.
- color Color - The color value to use.
- bigint - The requested mesh group mask.
- mask bigint - The mask value to use.
- enabled boolean - Whether the feature should be enabled.
- r number (optional) - The red component.
- g number (optional) - The green component.
- b number (optional) - The blue component.
- a number (optional) - The alpha component.

### Inline Code Tokens

- `ModelEntity`
- `Entity`
- `SetModel(modelPath: string)`
- `modelPath`
- `SetScale(size: number)`
- `size`
- `SetModelColor(color: Color)`
- `color`
- `GetMeshGroupMask()`
- `SetMeshGroupMask(mask: bigint)`
- `mask`
- `SetGlow(enabled: boolean, r?: number, g?: number, b?: number, a?: number)`
- `enabled`
- `r`
- `g`
- `b`
- `a`

## Modifier

- Kind: `class`
- Path: `/en/guide/classes/entitylist/Modifier`
- URL: https://docs.melonity.gg/en/guide/classes/entitylist/Modifier

### Sections (H2)

- Static Methods
- Methods

### Members / Signatures (H3/H4)

- `static GetClassNameStatic() string`
- `GetName() string`
- `GetInheritance() string[]`
- `GetOwnerIndex() number`
- `GetOwner() NPC | null`
- `GetTeam() number`
- `IsDebuff() boolean`
- `GetCreationTime() number`
- `GetCreationFrame() number`
- `GetDieTime() number`
- `GetElapsedTime() number`
- `GetRemainingTime() number`
- `GetClass() string`
- `GetModifierAuraName() string`
- `GetSerialNumber() number`
- `GetIndex() number`
- `GetLastAppliedTime() number`
- `GetDuration() number`
- `GetStackCount() number`
- `GetAuraSearchTeam() number`
- `GetAuraSearchType() number`
- `GetAuraSearchFlags() number`
- `GetAuraRadius() number`
- `GetAttributes() number`
- `IsAura() boolean`
- `IsAuraActiveOnDeath() boolean`
- `GetMarkedForDeletion() boolean`
- `IsHealingAura() boolean`
- `GetConstantByIndex(index: number) number`
- `GetAbilityIndex() number`
- `GetAbility() Ability | null`
- `GetTexture() string`
- `IsHidden() boolean`

### Paragraphs

- The Modifier class provides access to modifier state, ownership, and timing data.
- NOTE
- This page documents members declared directly on Modifier . Inherited members are available from MemoryAccessor .
- Retrieves the class name static.
- Returned:
- Retrieves the name.
- Retrieves the inheritance.
- Retrieves the owner index.
- Retrieves the owner.
- Retrieves the team.
- Checks whether it is debuff.
- Retrieves the creation time.
- Retrieves the creation frame.
- Retrieves the die time.
- Retrieves the elapsed time.
- Retrieves the remaining time.
- Retrieves the class.
- Retrieves the modifier aura name.
- Retrieves the serial number.
- Retrieves the index.
- Retrieves the last applied time.
- Retrieves the duration.
- Retrieves the stack count.
- Retrieves the aura search team.
- Retrieves the aura search type.
- Retrieves the aura search flags.
- Retrieves the aura radius.
- Retrieves the attributes.
- Checks whether it is aura.
- Checks whether it is aura active on death.
- Retrieves the marked for deletion.
- Checks whether it is healing aura.
- Retrieves the constant by index.
- Retrieves the ability index.
- Retrieves the ability.
- Retrieves the texture.
- Checks whether it is hidden.

### List Items

- string - The requested class name static.
- string - The requested name.
- string[] - An array with the matching values.
- number - The requested owner index.
- NPC | null - The matching object, or null if it is not available.
- number - The requested team.
- boolean - True if the condition is met, false otherwise.
- number - The requested creation time.
- number - The requested creation frame.
- number - The requested die time.
- number - The requested elapsed time.
- number - The requested remaining time.
- string - The requested class.
- string - The requested modifier aura name.
- number - The requested serial number.
- number - The requested index.
- number - The requested last applied time.
- number - The requested duration.
- number - The requested stack count.
- number - The requested aura search team.
- number - The requested aura search type.
- number - The requested aura search flags.
- number - The requested aura radius.
- number - The requested attributes.
- index number - The index value.
- number - The requested constant by index.
- number - The requested ability index.
- Ability | null - The matching object, or null if it is not available.
- string - The requested texture.

### Inline Code Tokens

- `Modifier`
- `MemoryAccessor`
- `static GetClassNameStatic()`
- `GetName()`
- `GetInheritance()`
- `GetOwnerIndex()`
- `GetOwner()`
- `null`
- `GetTeam()`
- `IsDebuff()`
- `GetCreationTime()`
- `GetCreationFrame()`
- `GetDieTime()`
- `GetElapsedTime()`
- `GetRemainingTime()`
- `GetClass()`
- `GetModifierAuraName()`
- `GetSerialNumber()`
- `GetIndex()`
- `GetLastAppliedTime()`
- `GetDuration()`
- `GetStackCount()`
- `GetAuraSearchTeam()`
- `GetAuraSearchType()`
- `GetAuraSearchFlags()`
- `GetAuraRadius()`
- `GetAttributes()`
- `IsAura()`
- `IsAuraActiveOnDeath()`
- `GetMarkedForDeletion()`
- `IsHealingAura()`
- `GetConstantByIndex(index: number)`
- `index`
- `GetAbilityIndex()`
- `GetAbility()`
- `GetTexture()`
- `IsHidden()`

## NPC

- Kind: `class`
- Path: `/en/guide/classes/entitylist/NPC`
- URL: https://docs.melonity.gg/en/guide/classes/entitylist/NPC

### Sections (H2)

- Methods

### Members / Signatures (H3/H4)

- `GetMaxPhysicBarrier() number`
- `GetMaxMagicBarrier() number`
- `GetMaxAllBarrier() number`
- `GetPhysicBarrier() number`
- `GetMagicBarrier() number`
- `GetAllBarrier() number`
- `GetStartSequenceCycle() number`
- `GetKeyValues() KeyValue | null`
- `FindKey(key: string) KeyValue | null`
- `GetProjectileSpeed() number`
- `SetHasColorGem(val: boolean) void`
- `HasColorGem() boolean`
- `SetGemColor(color: Color) void`
- `GetGemColor() Color`
- `GetGoldBountyMin() number`
- `GetGoldBountyMax() number`
- `IsControllableByPlayer(player: Player) boolean`
- `IsInRangeOfShop(shopType: Enum.ShopType) boolean`
- `GetTurnAngleDiff() number`
- `GetUnitState() bigint`
- `SetUnitState(state: bigint | number) void`
- `HasState(state: Enum.ModifierState) boolean`
- `GetAttackRange() number`
- `GetAttackRangeWithBonus() number`
- `GetAttackRangeBonus() number`
- `GetCastRangeBonus() number`
- `GetCombatClassDefend() number`
- `GetCombatClassAttack() number`
- `GetDamageMultiplierVersus(entity: NPC) number`
- `GetPhysicalArmorValue() number`
- `GetPhysicalDamageReduction() number`
- `GetArmorDamageMultiplier() number`
- `GetMagicalArmorValue() number`
- `GetMagicalArmorDamageMultiplier() number`
- `GetIncreasedAttackSpeed() number`
- `GetBaseAttackSpeed() number`
- `GetAttackSpeedBonus() number`
- `GetAttackTime() number`
- `GetAttacksPerSecond() number`
- `GetHullRadius() number`
- `GetProjectileCollisionSize() number`
- `GetTurnRate() number`
- `IsTurning() boolean`
- `IsWaitingToSpawn() boolean`
- `GetTimeToFace(entity: Entity) number`
- `FindRotationAngle(position: Vector, useAngleDiff?: boolean) Angle`
- `GetTimeToFacePosition(position: Vector) number`
- `FindFacingNPC(teamType: Enum.TeamType, minRange?: number, minAngle?: number, useAngleDiff?: boolean) NPC | null`
- `GetMoveSpeed() number`
- `GetBaseSpeed() number`
- `IsMoving() boolean`
- `GetMana() number`
- `GetMaxMana() number`
- `GetManaRegen() number`
- `GetHealthRegen() number`
- `GetBaseHealthRegen() number`
- `GetBaseManaRegen() number`
- `GetCurrentLevel() number`
- `GetDayTimeVisionRange() number`
- `GetNightTimeVisionRange() number`
- `IsIllusion() boolean`
- `GetHealthBarOffset() number`
- `GetUnitName() string`
- `GetImage(needIcon?: boolean) Image`
- `GetFountainPosition() Vector`
- `HasAghanimScepter() boolean`
- `GetAttackDelay() number`
- `GetAttackAnimationPoint() number`
- `GetAnimationSequence() number`
- `GetAnimationCycle() number`
- `SetZDelta(height: number) void`
- `GetUltimate() Ability | null`
- `IsVisible() boolean`
- `HasTrueSight() boolean`
- `GetUnitType() number`
- `SetUnitType(unitType: number) void`
- `SetHealthBar(type: number) void`
- `GetAttackCapabilities() number`
- `IsUnitType(unitType: Enum.UnitType) boolean`
- `IsRanged() boolean`
- `IsCreep() boolean`
- `IsLaneCreep() boolean`
- `IsRoshan() boolean`
- `IsNeutral() boolean`
- `IsStructure() boolean`
- `IsTower() this is Tower`
- `IsAncient() boolean`
- `IsCourier() this is Courier`
- `IsShrine() boolean`
- `IsMeepoClone() boolean`
- `IsVisibleByEnemy() boolean`
- `GetModifiers() Modifier []`
- `GetModifier(modifierName: string) Modifier | null`
- `HasModifier(modifierName: string) boolean`
- `HasInventorySlotFree(inRealInventory?: boolean) boolean`
- `GetItems(inRealInventory?: boolean) Item []`
- `GetItemByIndex(index: number) Item | null`
- `GetItem(itemName: string, realInventory?: boolean) Item | null`
- `HasItem(itemName: string, inRealInventory?: boolean) boolean`
- `GetAbilities() Ability []`
- `GetAbilityByIndex(index: number) Ability | null`
- `GetAbility(abilityName: string) Ability | null`
- `HasAbility(abilityName: string) boolean`
- `IsLinkensProtected() boolean`
- `IsChannellingAbility() boolean`
- `GetActivity() Enum.GameActivity`
- `IsRunning() boolean`
- `IsAttacking() boolean`
- `IsSilenced() boolean`
- `IsStunned() boolean`
- `HasAegis() boolean`
- `IsKillable() boolean`
- `GetMinDamage() number`
- `GetMaxDamage() number`
- `GetBonusDamage() number`
- `GetTrueDamage() number`
- `GetTrueMaximumDamage() number`
- `GetAttachment(attachmentName: string) Vector`
- `GetAttachmentByIndex(attachmentIndex: number) Vector`
- `GetMagicalDamageMultiplier() number`
- `GetLastAttackTime() number`
- `GetStateAfterDamage(state: null | EntityState, damage: number) EntityState`
- `MoveTo(position: Vector, queue?: boolean, showEffects?: boolean) void`
- `GetTaggedAsVisibleByTeam() number`

### Paragraphs

- The NPC class extends ModelEntity with combat, movement, inventory, and unit state APIs.
- NOTE
- This page documents members declared directly on NPC . Inherited members are available from ModelEntity .
- Retrieves the maximum physical barrier.
- Returned:
- Retrieves the maximum magic barrier.
- Retrieves the maximum all barrier.
- Retrieves the physical barrier.
- Retrieves the magic barrier.
- Retrieves the all barrier.
- Retrieves the start sequence cycle.
- Retrieves the key values.
- Finds the key.
- Retrieves the projectile speed.
- Enables or disables the color gem state.
- Checks whether the unit currently has a color gem.
- Sets the gem color.
- Retrieves the gem color.
- Retrieves the minimum gold bounty.
- Retrieves the maximum gold bounty.
- Checks whether the unit is controllable by the specified player.
- Checks whether the unit is within range of the specified shop.
- Retrieves the turn angle difference.
- Retrieves the unit state.
- Sets the unit state.
- Checks whether it has state.
- Retrieves the attack range.
- Retrieves the attack range with bonus.
- Retrieves the attack range bonus.
- Retrieves the cast range bonus.
- Retrieves the combat class defend.
- Retrieves the combat class attack.
- Retrieves the damage multiplier against the specified unit.
- Retrieves the physical armor value.
- Retrieves the physical damage reduction.
- Retrieves the armor damage multiplier.
- Retrieves the magical armor value.
- Retrieves the magical armor damage multiplier.
- Returns base attack speed + attack speed bonus
- Retrieves the base attack speed.
- Retrieves the attack speed bonus.
- Retrieves the attack time.
- Retrieves the attacks per second.
- Retrieves the hull radius.
- Retrieves the projectile collision size.
- Retrieves the turn rate.
- Checks whether it is turning.
- Checks whether it is waiting to spawn.
- Retrieves the time to face.
- Finds the rotation angle.
- Retrieves the time to face position.
- Finds an NPC currently facing the unit.
- Retrieves the move speed.
- Retrieves the base speed.
- Checks whether it is moving.
- Retrieves the mana.
- Retrieves the maximum mana.
- Retrieves the mana regen.
- Retrieves the health regen.
- Retrieves the base health regen.
- Retrieves the base mana regen.
- Retrieves the current level.
- Retrieves the day time vision range.
- Retrieves the night time vision range.
- Checks whether it is illusion.
- Retrieves the health bar offset.
- Retrieves the unit name.
- Retrieves the image.
- Retrieves the fountain position.
- Checks whether it has aghanim scepter.
- Retrieves the attack delay.
- Retrieves the attack animation point.
- Retrieves the animation sequence.
- Retrieves the animation cycle.
- Sets the zdelta.
- Retrieves the ultimate.
- Checks whether it is visible.
- Checks whether it has true sight.
- Retrieves the unit type.
- Sets the unit type.
- Sets the health bar.
- Retrieves the attack capabilities.
- Checks whether it is unit type.
- Checks whether it is ranged.
- Checks whether it is creep.
- Checks whether it is lane creep.
- Checks whether it is roshan.
- Checks whether it is neutral.
- Checks whether it is structure.
- Checks whether it is tower.
- Checks whether it is ancient.
- Checks whether it is courier.
- Checks whether it is shrine.
- Checks whether it is meepo clone.
- Checks whether it is visible by enemy.
- Retrieves the modifiers.
- Retrieves the modifier.
- Checks whether it has modifier.
- Checks whether it has inventory slot free.
- Retrieves the items.
- Retrieves the item by index.
- Retrieves the item.
- Checks whether it has item.
- Retrieves the abilities.
- Retrieves the ability by index.
- Retrieves the ability.
- Checks whether it has ability.
- Checks whether it is linkens protected.
- Checks whether it is channelling ability.
- Retrieves the activity.
- Checks whether it is running.
- Checks whether it is attacking.
- Checks whether it is silenced.
- Checks whether it is stunned.
- Checks whether it has aegis.
- Checks whether it is killable.
- Retrieves the minimum damage.
- Retrieves the maximum damage.
- Retrieves the bonus damage.
- Retrieves the true damage.
- Retrieves the true maximum damage.
- Retrieves the attachment.
- Retrieves the attachment by index.
- Retrieves the magical damage multiplier.
- Retrieves the last attack time.
- Retrieves the predicted state after applying damage.
- WARNING
- Deprecated.
- Orders the unit to move to the specified position.
- Retrieves the tagged as visible by team.

### List Items

- number - The requested maximum physical barrier.
- number - The requested maximum magic barrier.
- number - The requested maximum all barrier.
- number - The requested physical barrier.
- number - The requested magic barrier.
- number - The requested all barrier.
- number - The requested start sequence cycle.
- KeyValue | null - The matching object, or null if it is not available.
- key string - The key.
- number - The requested projectile speed.
- val boolean - The value to apply.
- boolean - True if the condition is met, false otherwise.
- color Color - The color value to use.
- Color - The result of the call.
- number - The requested gold bounty minimum.
- number - The requested gold bounty maximum.
- player Player - The player entity.
- shopType Enum.ShopType - The shop type.
- number - The requested turn angle difference.
- bigint - The requested unit state.
- state bigint | number - The state value.
- state Enum.ModifierState - The state value.
- number - The requested attack range.
- number - The requested attack range with bonus.
- number - The requested attack range bonus.
- number - The requested cast range bonus.
- number - The requested combat class defend.
- number - The requested combat class attack.
- entity NPC - The entity to use.
- number - The requested damage multiplier versus.
- number - The requested physical armor value.
- number - The requested physical damage reduction.
- number - The requested armor damage multiplier.
- number - The requested magical armor value.
- number - The requested magical armor damage multiplier.
- number - The requested increased attack speed.
- number - The requested base attack speed.
- number - The requested attack speed bonus.
- number - The requested attack time.
- number - The requested attacks per second.
- number - The requested hull radius.
- number - The requested projectile collision size.
- number - The requested turn rate.
- entity Entity - The entity to use.
- number - The requested time to face.
- position Vector - The position to use.
- useAngleDiff boolean (optional) - Whether to use angle difference.
- Angle - The result of the call.
- number - The requested time to face position.
- teamType Enum.TeamType - The team selection filter.
- minRange number (optional) - 1
- minAngle number (optional) - 1
- NPC | null - The matching object, or null if it is not available.
- number - The requested move speed.
- number - The requested base speed.
- number - The requested mana.
- number - The requested maximum mana.
- number - The requested mana regen.
- number - The requested health regen.
- number - The requested base health regen.
- number - The requested base mana regen.
- number - The requested current level.
- number - The requested day time vision range.
- number - The requested night time vision range.
- number - The requested health bar offset.
- string - The requested unit name.
- needIcon boolean (optional) - Whether to return the icon variant.
- Image - The result of the call.
- Vector - The result of the call.
- number - The requested attack delay.
- number - The requested attack animation point.
- number - The requested animation sequence.
- number - The requested animation cycle.
- height number - The height.
- Ability | null - The matching object, or null if it is not available.
- number - The requested unit type.
- unitType number - The unit type value.
- type number - 2 - default, -1 - no health bar, 0 - creep, up to 17 - undocumented
- number - The requested attack capabilities.
- unitType Enum.UnitType - The unit type value.
- this is Tower - The result of the call.
- this is Courier - The result of the call.
- Modifier [] - An array with the matching values.
- modifierName string - The modifier name.
- Modifier | null - The matching object, or null if it is not available.
- inRealInventory boolean (optional) - Whether to use only the real inventory.
- Item [] - An array with the matching values.
- index number - The index value.
- Item | null - The matching object, or null if it is not available.
- itemName string - The item name.
- realInventory boolean (optional) - Whether to use only the real inventory.
- Ability [] - An array with the matching values.
- abilityName string - The ability name.
- Enum.GameActivity - The result of the call.
- number - The requested minimum damage.
- number - The requested maximum damage.
- number - The requested bonus damage.
- number - The requested true damage.
- number - The requested true maximum damage.
- attachmentName string - The attachment name.
- attachmentIndex number - The attachment index.
- number - The requested magical damage multiplier.
- number - The requested last attack time.
- state null | EntityState - The state value.
- damage number - The damage.
- EntityState - The result of the call.
- queue boolean (optional) - Whether to queue the action.
- showEffects boolean (optional) - Whether to show default game effects.
- number - The requested tagged as visible by team.

### Inline Code Tokens

- `NPC`
- `ModelEntity`
- `GetMaxPhysicBarrier()`
- `GetMaxMagicBarrier()`
- `GetMaxAllBarrier()`
- `GetPhysicBarrier()`
- `GetMagicBarrier()`
- `GetAllBarrier()`
- `GetStartSequenceCycle()`
- `GetKeyValues()`
- `null`
- `FindKey(key: string)`
- `key`
- `GetProjectileSpeed()`
- `SetHasColorGem(val: boolean)`
- `val`
- `HasColorGem()`
- `SetGemColor(color: Color)`
- `color`
- `GetGemColor()`
- `GetGoldBountyMin()`
- `GetGoldBountyMax()`
- `IsControllableByPlayer(player: Player)`
- `player`
- `IsInRangeOfShop(shopType: Enum.ShopType)`
- `shopType`
- `GetTurnAngleDiff()`
- `GetUnitState()`
- `SetUnitState(state: bigint | number)`
- `state`
- `HasState(state: Enum.ModifierState)`
- `GetAttackRange()`
- `GetAttackRangeWithBonus()`
- `GetAttackRangeBonus()`
- `GetCastRangeBonus()`
- `GetCombatClassDefend()`
- `GetCombatClassAttack()`
- `GetDamageMultiplierVersus(entity: NPC)`
- `entity`
- `GetPhysicalArmorValue()`
- `GetPhysicalDamageReduction()`
- `GetArmorDamageMultiplier()`
- `GetMagicalArmorValue()`
- `GetMagicalArmorDamageMultiplier()`
- `GetIncreasedAttackSpeed()`
- `GetBaseAttackSpeed()`
- `GetAttackSpeedBonus()`
- `GetAttackTime()`
- `GetAttacksPerSecond()`
- `GetHullRadius()`
- `GetProjectileCollisionSize()`
- `GetTurnRate()`
- `IsTurning()`
- `IsWaitingToSpawn()`
- `GetTimeToFace(entity: Entity)`
- `FindRotationAngle(position: Vector, useAngleDiff?: boolean)`
- `position`
- `useAngleDiff`
- `GetTimeToFacePosition(position: Vector)`
- `FindFacingNPC(teamType: Enum.TeamType, minRange?: number, minAngle?: number, useAngleDiff?: boolean)`
- `teamType`
- `minRange`
- `minAngle`
- `GetMoveSpeed()`
- `GetBaseSpeed()`
- `IsMoving()`
- `GetMana()`
- `GetMaxMana()`
- `GetManaRegen()`
- `GetHealthRegen()`
- `GetBaseHealthRegen()`
- `GetBaseManaRegen()`
- `GetCurrentLevel()`
- `GetDayTimeVisionRange()`
- `GetNightTimeVisionRange()`
- `IsIllusion()`
- `GetHealthBarOffset()`
- `GetUnitName()`
- `GetImage(needIcon?: boolean)`
- `needIcon`
- `GetFountainPosition()`
- `HasAghanimScepter()`
- `GetAttackDelay()`
- `GetAttackAnimationPoint()`
- `GetAnimationSequence()`
- `GetAnimationCycle()`
- `SetZDelta(height: number)`
- `height`
- `GetUltimate()`
- `IsVisible()`
- `HasTrueSight()`
- `GetUnitType()`
- `SetUnitType(unitType: number)`
- `unitType`
- `SetHealthBar(type: number)`
- `type`
- `GetAttackCapabilities()`
- `IsUnitType(unitType: Enum.UnitType)`
- `IsRanged()`
- `IsCreep()`
- `IsLaneCreep()`
- `IsRoshan()`
- `IsNeutral()`
- `IsStructure()`
- `IsTower()`
- `IsAncient()`
- `IsCourier()`
- `IsShrine()`
- `IsMeepoClone()`
- `IsVisibleByEnemy()`
- `GetModifiers()`
- `GetModifier(modifierName: string)`
- `modifierName`
- `HasModifier(modifierName: string)`
- `HasInventorySlotFree(inRealInventory?: boolean)`
- `inRealInventory`
- `GetItems(inRealInventory?: boolean)`
- `GetItemByIndex(index: number)`
- `index`
- `GetItem(itemName: string, realInventory?: boolean)`
- `itemName`
- `realInventory`
- `HasItem(itemName: string, inRealInventory?: boolean)`
- `GetAbilities()`
- `GetAbilityByIndex(index: number)`
- `GetAbility(abilityName: string)`
- `abilityName`
- `HasAbility(abilityName: string)`
- `IsLinkensProtected()`
- `IsChannellingAbility()`
- `GetActivity()`
- `IsRunning()`
- `IsAttacking()`
- `IsSilenced()`
- `IsStunned()`
- `HasAegis()`
- `IsKillable()`
- `GetMinDamage()`
- `GetMaxDamage()`
- `GetBonusDamage()`
- `GetTrueDamage()`
- `GetTrueMaximumDamage()`
- `GetAttachment(attachmentName: string)`
- `attachmentName`
- `GetAttachmentByIndex(attachmentIndex: number)`
- `attachmentIndex`
- `GetMagicalDamageMultiplier()`
- `GetLastAttackTime()`
- `GetStateAfterDamage(state: null | EntityState, damage: number)`
- `damage`
- `MoveTo(position: Vector, queue?: boolean, showEffects?: boolean)`
- `queue`
- `showEffects`
- `GetTaggedAsVisibleByTeam()`

## PhysicalItem

- Kind: `class`
- Path: `/en/guide/classes/entitylist/PhysicalItem`
- URL: https://docs.melonity.gg/en/guide/classes/entitylist/PhysicalItem

### Sections (H2)

- Methods

### Members / Signatures (H3/H4)

- `GetItemIndex() number`
- `GetItem() Item | null`

### Paragraphs

- The PhysicalItem class extends ModelEntity with accessors for dropped items.
- NOTE
- This page documents members declared directly on PhysicalItem . Inherited members are available from ModelEntity .
- Retrieves the item index.
- Returned:
- Retrieves the item.

### List Items

- number - The requested item index.
- Item | null - The matching object, or null if it is not available.

### Inline Code Tokens

- `PhysicalItem`
- `ModelEntity`
- `GetItemIndex()`
- `GetItem()`
- `null`

## Player

- Kind: `class`
- Path: `/en/guide/classes/entitylist/Player`
- URL: https://docs.melonity.gg/en/guide/classes/entitylist/Player

### Sections (H2)

- Methods

### Members / Signatures (H3/H4)

- `GetDenyCount() number`
- `GetLastHitCount() number`
- `GetAssignedHeroIndex() number`
- `GetAssignedHero() Hero | null`
- `GetActiveAbilityIndex() number`
- `GetActiveAbility() Ability | null`
- `GetQuickBuyItems() number[]`
- `GetAttachedQuickBuyItem() number`
- `GetQuickBuyIsPurchasable() boolean[]`
- `GetPossibleHeroSelection() number`
- `GetPlayerSelectedHeroName() string`
- `GetSelectedHeroID() number`
- `GetSelectedHeroFacetID() number`
- `GetTeamSlot() number`
- `GetReliableGold() number`
- `GetUnreliableGold() number`
- `GetTotalGold() number`
- `GetNetWorth() number`
- `GetCommandsIssued() number`
- `IsValid() boolean`
- `IsFullyJoined() boolean`
- `IsFakeClient() boolean`
- `GetConnectionState() number`
- `GetRankTier() number`
- `GetSteamID() bigint`
- `GetSteamID32() number`
- `GetPlayerID() number`
- `GetName() string`
- `GetKills() number`
- `GetAssists() number`
- `GetDeaths() number`
- `GetStreak() number`
- `GetRespawnTime() number`
- `GetLaneSelectionFlags() number`
- `IsMuted() boolean`
- `GetLastBuybackTime() number`
- `GetBuybackCooldownTime() number`
- `GetBuybackCostTime() number`
- `GetBuybackGoldLimitTime() number`
- `GetColor() Color`
- `GetSelectedUnits() Array< NPC >`
- `AddSelectedUnit(unit: NPC) void`
- `RemoveSelectedUnit(unit: NPC) void`
- `ClearSelectedUnits() void`
- `CreateClickEffect(position: Vector, color: Color, orderType: Enum.UnitOrder, queue: boolean) void`
- `PrepareUnitOrdersStructed(info: PrepareUnitOrdersInfo) OrderID`
- `PrepareUnitOrdersUnsafe(orderType: Enum.UnitOrder, target: Entity | number | null, position: Vector | null, ability: Ability | number | null, units: NPC[], queue?: boolean, showEffects?: boolean) void`
- `PrepareUnitOrders(orderType: Enum.UnitOrder, target: Entity | number | null, position: Vector | null, ability: Ability | number | null, orderIssuer: Enum.PlayerOrderIssuer, unit: Entity | null, queue?: boolean, showEffects?: boolean) void`
- `HoldPosition(unit: Entity | null, queue?: boolean) void`
- `AttackTarget(unit: Entity | null, target: Entity | null, queue?: boolean) void`

### Paragraphs

- The Player class extends Entity with player state, gold, score, and order APIs.
- NOTE
- This page documents members declared directly on Player . Inherited members are available from Entity .
- Retrieves the deny count.
- Returned:
- Retrieves the last hit count.
- Retrieves the assigned hero index.
- Retrieves the assigned hero.
- Retrieves the active ability index.
- Retrieves the active ability.
- Retrieves the quick buy items.
- Retrieves the attached quick buy item.
- Retrieves the quick buy is purchasable.
- Retrieves the possible hero selection.
- Retrieves the player selected hero name.
- Retrieves the selected hero id.
- Retrieves the selected hero facet id.
- Retrieves the team slot.
- Retrieves the reliable gold.
- Retrieves the unreliable gold.
- Retrieves the total gold.
- Retrieves the net worth.
- Retrieves the commands issued.
- Checks whether it is valid.
- Checks whether it is fully joined.
- Checks whether it is fake client.
- Retrieves the connection state.
- Retrieves the rank tier.
- Retrieves the steam id.
- Retrieves the steam id32.
- Retrieves the player id.
- Retrieves the name.
- Retrieves the kills.
- Retrieves the assists.
- Retrieves the deaths.
- Retrieves the streak.
- Retrieves the respawn time.
- Retrieves the lane selection flags.
- Checks whether it is muted.
- Retrieves the last buyback time.
- Retrieves the buyback cooldown time.
- Retrieves the buyback cost time.
- Retrieves the buyback gold limit time.
- Retrieves the color.
- Retrieves the selected units.
- Adds the selected unit.
- Removes the selected unit.
- Clears the selected units.
- Creates a click effect for the player.
- Prepares a structured unit order payload.
- Prepares unit orders without additional safety checks.
- Prepares unit orders using the standard order context.
- Orders the unit to hold position.
- Orders the unit to attack the specified target.

### List Items

- number - The requested deny count.
- number - The requested last hit count.
- number - The requested assigned hero index.
- Hero | null - The matching object, or null if it is not available.
- number - The requested active ability index.
- Ability | null - The matching object, or null if it is not available.
- number[] - An array with the matching values.
- number - The requested attached quick buy item.
- boolean[] - An array with the matching values.
- number - The requested possible hero selection.
- string - The requested player selected hero name.
- number - The requested selected hero id.
- number - The requested selected hero facet id.
- number - The requested team slot.
- number - The requested reliable gold.
- number - The requested unreliable gold.
- number - The requested total gold.
- number - The requested net worth.
- number - The requested commands issued.
- boolean - True if the condition is met, false otherwise.
- number - The requested connection state.
- number - The requested rank tier.
- bigint - The requested steam id.
- number - The requested steam id32.
- number - The requested player id.
- string - The requested name.
- number - The requested kills.
- number - The requested assists.
- number - The requested deaths.
- number - The requested streak.
- number - The requested respawn time.
- number - The requested lane selection flags.
- number - The requested last buyback time.
- number - The requested buyback cooldown time.
- number - The requested buyback cost time.
- number - The requested buyback gold limit time.
- Color - The result of the call.
- Array< NPC > - An array with the matching values.
- unit NPC - The unit to use.
- position Vector - The position to use.
- color Color - The color value to use.
- orderType Enum.UnitOrder - The order type.
- queue boolean - Whether to queue the action.
- info PrepareUnitOrdersInfo - The info.
- OrderID - The result of the call.
- target Entity | number | null - The target entity.
- position Vector | null - The position to use.
- ability Ability | number | null - The ability.
- units NPC [] - The units to use.
- queue boolean (optional) - Whether to queue the action.
- showEffects boolean (optional) - Whether to show default game effects.
- orderIssuer Enum.PlayerOrderIssuer - The order issuer.
- unit Entity | null - The unit to use.
- target Entity | null - The target entity.

### Inline Code Tokens

- `Player`
- `Entity`
- `GetDenyCount()`
- `GetLastHitCount()`
- `GetAssignedHeroIndex()`
- `GetAssignedHero()`
- `null`
- `GetActiveAbilityIndex()`
- `GetActiveAbility()`
- `GetQuickBuyItems()`
- `GetAttachedQuickBuyItem()`
- `GetQuickBuyIsPurchasable()`
- `GetPossibleHeroSelection()`
- `GetPlayerSelectedHeroName()`
- `GetSelectedHeroID()`
- `GetSelectedHeroFacetID()`
- `GetTeamSlot()`
- `GetReliableGold()`
- `GetUnreliableGold()`
- `GetTotalGold()`
- `GetNetWorth()`
- `GetCommandsIssued()`
- `IsValid()`
- `IsFullyJoined()`
- `IsFakeClient()`
- `GetConnectionState()`
- `GetRankTier()`
- `GetSteamID()`
- `GetSteamID32()`
- `GetPlayerID()`
- `GetName()`
- `GetKills()`
- `GetAssists()`
- `GetDeaths()`
- `GetStreak()`
- `GetRespawnTime()`
- `GetLaneSelectionFlags()`
- `IsMuted()`
- `GetLastBuybackTime()`
- `GetBuybackCooldownTime()`
- `GetBuybackCostTime()`
- `GetBuybackGoldLimitTime()`
- `GetColor()`
- `GetSelectedUnits()`
- `AddSelectedUnit(unit: NPC)`
- `unit`
- `RemoveSelectedUnit(unit: NPC)`
- `ClearSelectedUnits()`
- `CreateClickEffect(position: Vector, color: Color, orderType: Enum.UnitOrder, queue: boolean)`
- `position`
- `color`
- `orderType`
- `queue`
- `PrepareUnitOrdersStructed(info: PrepareUnitOrdersInfo)`
- `info`
- `PrepareUnitOrdersUnsafe(orderType: Enum.UnitOrder, target: Entity | number | null, position: Vector | null, ability: Ability | number | null, units: NPC[], queue?: boolean, showEffects?: boolean)`
- `target`
- `ability`
- `units`
- `showEffects`
- `PrepareUnitOrders(orderType: Enum.UnitOrder, target: Entity | number | null, position: Vector | null, ability: Ability | number | null, orderIssuer: Enum.PlayerOrderIssuer, unit: Entity | null, queue?: boolean, showEffects?: boolean)`
- `orderIssuer`
- `HoldPosition(unit: Entity | null, queue?: boolean)`
- `AttackTarget(unit: Entity | null, target: Entity | null, queue?: boolean)`

## PowerTreads

- Kind: `class`
- Path: `/en/guide/classes/entitylist/PowerTreads`
- URL: https://docs.melonity.gg/en/guide/classes/entitylist/PowerTreads

### Sections (H2)

- Methods

### Members / Signatures (H3/H4)

- `GetPowerTreadsState() Enum.PowerTreadsAttributes`

### Paragraphs

- The PowerTreads class extends Item with Power Treads attribute-state accessors.
- NOTE
- This page documents members declared directly on PowerTreads . Inherited members are available from Item .
- Retrieves the power treads state.
- Returned:

### List Items

- Enum.PowerTreadsAttributes - The result of the call.

### Inline Code Tokens

- `PowerTreads`
- `Item`
- `GetPowerTreadsState()`

## Rune

- Kind: `class`
- Path: `/en/guide/classes/entitylist/Rune`
- URL: https://docs.melonity.gg/en/guide/classes/entitylist/Rune

### Sections (H2)

- Methods

### Members / Signatures (H3/H4)

- `GetRuneType() Enum.RuneType`

### Paragraphs

- The Rune class extends ModelEntity with rune-type accessors.
- NOTE
- This page documents members declared directly on Rune . Inherited members are available from ModelEntity .
- Retrieves the rune type.
- Returned:

### List Items

- Enum.RuneType - The result of the call.

### Inline Code Tokens

- `Rune`
- `ModelEntity`
- `GetRuneType()`

## TargetProjectileObject

- Kind: `class`
- Path: `/en/guide/classes/entitylist/TargetProjectileObject`
- URL: https://docs.melonity.gg/en/guide/classes/entitylist/TargetProjectileObject

### Sections (H2)

- Properties

### Members / Signatures (H3/H4)

- `index number`
- `speed number`
- `originalSpeed number`
- `currentPosition Vector`
- `targetPosition Vector`
- `source NPC | null`
- `sourceIndex number`
- `target NPC | null`
- `targetIndex number`
- `ability Ability | null`
- `abilityIndex number`
- `dodgeable boolean`
- `isattack boolean`
- `isevaded boolean`
- `expireTime number`
- `maxImpactTime number`

### Paragraphs

- The TargetProjectileObject class provides access to target-tracking projectile state.
- NOTE
- This page documents members declared directly on TargetProjectileObject . Inherited members are available from MemoryAccessor .
- The index.
- The speed.
- The original speed.
- The current position.
- The target position.
- The source.
- The source index.
- The target.
- The target index.
- The ability.
- The ability index.
- The dodgeable.
- The isattack.
- The isevaded.
- The expire time.
- The maximum impact time.

### Inline Code Tokens

- `TargetProjectileObject`
- `MemoryAccessor`
- `index`
- `speed`
- `originalSpeed`
- `currentPosition`
- `targetPosition`
- `source`
- `sourceIndex`
- `target`
- `targetIndex`
- `ability`
- `abilityIndex`
- `dodgeable`
- `isattack`
- `isevaded`
- `expireTime`
- `maxImpactTime`

## TempTree

- Kind: `class`
- Path: `/en/guide/classes/entitylist/TempTree`
- URL: https://docs.melonity.gg/en/guide/classes/entitylist/TempTree

### Sections (H2)

- Methods

### Members / Signatures (H3/H4)

- `GetTempTreeIndex() number`

### Paragraphs

- The TempTree class extends ModelEntity with temporary tree accessors.
- NOTE
- This page documents members declared directly on TempTree . Inherited members are available from ModelEntity .
- Retrieves the temp tree index.
- Returned:

### List Items

- number - The requested temp tree index.

### Inline Code Tokens

- `TempTree`
- `ModelEntity`
- `GetTempTreeIndex()`

## Tower

- Kind: `class`
- Path: `/en/guide/classes/entitylist/Tower`
- URL: https://docs.melonity.gg/en/guide/classes/entitylist/Tower

### Sections (H2)

- Methods

### Members / Signatures (H3/H4)

- `GetAttackTargetIndex() number`
- `GetAttackTarget() NPC | null`

### Paragraphs

- The Tower class extends NPC with tower attack-target APIs.
- NOTE
- This page documents members declared directly on Tower . Inherited members are available from NPC .
- Retrieves the attack target index.
- Returned:
- Retrieves the attack target.

### List Items

- number - The requested attack target index.
- NPC | null - The matching object, or null if it is not available.

### Inline Code Tokens

- `Tower`
- `NPC`
- `GetAttackTargetIndex()`
- `GetAttackTarget()`
- `null`

## Tree

- Kind: `class`
- Path: `/en/guide/classes/entitylist/Tree`
- URL: https://docs.melonity.gg/en/guide/classes/entitylist/Tree

### Sections (H2)

- Methods

### Members / Signatures (H3/H4)

- `IsActive() boolean`
- `GetBinaryID() number`

### Paragraphs

- The Tree class extends ModelEntity with tree-state accessors.
- NOTE
- This page documents members declared directly on Tree . Inherited members are available from ModelEntity .
- Checks whether it is active.
- Returned:
- Retrieves the binary id.

### List Items

- boolean - True if the condition is met, false otherwise.
- number - The requested binary id.

### Inline Code Tokens

- `Tree`
- `ModelEntity`
- `IsActive()`
- `GetBinaryID()`

## EntitySystem

- Kind: `class`
- Path: `/en/guide/classes/entitysystem/entitysystem`
- URL: https://docs.melonity.gg/en/guide/classes/entitysystem/entitysystem

### Sections (H2)

- Functions

### Paragraphs

- The EntitySystem namespace provides helpers for retrieving tracked entities, resolving local player objects, and looking up entities by index, handle, or class name.
- TIP
- EntityList is a public alias of EntitySystem .

### List Items

- GetListByClassName - Retrieves a list of entities by their class name.
- GetEntitiesList - Retrieves a list of all entities.
- GetNPCsList - Retrieves a list of all npc entities.
- GetHeroesList - Retrieves a list of all hero entities.
- GetPlayersList - Retrieves a list of all player entities.
- GetCouriersList - Retrieves a list of all courier entities.
- GetRunesList - Retrieves a list of all rune entities.
- GetPhysicalItemsList - Retrieves a list of all physical item entities.
- GetTargetProjectileList - Retrieves a list of all target projectile entities.
- GetLinearProjectileList - Retrieves a list of all linear projectile entities.
- GetByIndex - Retrieves an entity by its index.
- GetByHandle - Retrieves an entity by its handle.
- GetLocalPlayerIndex - Retrieves the index of the local player.
- GetLocalPlayer - Retrieves the local player entity.
- GetLocalHeroIndex - Retrieves the index of the local hero.
- GetLocalHero - Retrieves the local hero entity.
- GetSingleton - Retrieves a singleton entity by its class name.
- GetBinaryObjectCount - Retrieves the number of binary objects in the game.

### Inline Code Tokens

- `EntitySystem`
- `EntityList`
- `GetListByClassName`
- `GetEntitiesList`
- `GetNPCsList`
- `GetHeroesList`
- `GetPlayersList`
- `GetCouriersList`
- `GetRunesList`
- `GetPhysicalItemsList`
- `GetTargetProjectileList`
- `GetLinearProjectileList`
- `GetByIndex`
- `GetByHandle`
- `GetLocalPlayerIndex`
- `GetLocalPlayer`
- `GetLocalHeroIndex`
- `GetLocalHero`
- `GetSingleton`
- `GetBinaryObjectCount`

## GetBinaryObjectCount

- Kind: `class`
- Path: `/en/guide/classes/entitysystem/GetBinaryObjectCount`
- URL: https://docs.melonity.gg/en/guide/classes/entitysystem/GetBinaryObjectCount

### Members / Signatures (H3/H4)

- `GetBinaryObjectCount() number`

### Paragraphs

- Retrieves the number of binary objects in the game.
- Returned:

### List Items

- number - The number of binary objects in the game.

### Inline Code Tokens

- `GetBinaryObjectCount()`

## GetByHandle

- Kind: `class`
- Path: `/en/guide/classes/entitysystem/GetByHandle`
- URL: https://docs.melonity.gg/en/guide/classes/entitysystem/GetByHandle

### Members / Signatures (H3/H4)

- `GetByHandle<T = Entity>(handle: number) T | null`

### Paragraphs

- Retrieves an entity by its handle.
- Returned:

### List Items

- handle number - The handle of the entity to retrieve.
- T | null - The entity that matches the provided handle. If no entity is found, null is returned

### Inline Code Tokens

- `GetByHandle<T = Entity>(handle: number)`
- `handle`

## GetByIndex

- Kind: `class`
- Path: `/en/guide/classes/entitysystem/GetByIndex`
- URL: https://docs.melonity.gg/en/guide/classes/entitysystem/GetByIndex

### Members / Signatures (H3/H4)

- `GetByIndex<T = Entity>(index: number) T | null`

### Paragraphs

- Retrieves an entity by its index.
- Returned:

### List Items

- index number - The index of the entity to retrieve.
- T | null - The entity that matches the provided index. If no entity is found, null is returned.

### Inline Code Tokens

- `GetByIndex<T = Entity>(index: number)`
- `index`

## GetCouriersList

- Kind: `class`
- Path: `/en/guide/classes/entitysystem/GetCouriersList`
- URL: https://docs.melonity.gg/en/guide/classes/entitysystem/GetCouriersList

### Members / Signatures (H3/H4)

- `GetCouriersList() Courier []`

### Paragraphs

- Retrieves a list of all courier entities.
- CAUTION
- Do not modify the returned array. It is a reference to the internal array.
- Returned:

### List Items

- Courier [] - An array of all courier entities.

### Inline Code Tokens

- `GetCouriersList()`

## GetEntitiesList

- Kind: `class`
- Path: `/en/guide/classes/entitysystem/GetEntitiesList`
- URL: https://docs.melonity.gg/en/guide/classes/entitysystem/GetEntitiesList

### Members / Signatures (H3/H4)

- `GetEntitiesList() Entity []`

### Paragraphs

- Retrieves a list of all entities.
- CAUTION
- Do not modify the returned array. It is a reference to the internal array.
- WARNING
- Interaction should not occur too frequently (especially in OnDraw), as it may cause FPS drops.
- IMPORTANT
- This array contains all possible entities on the map.
- Returned:

### List Items

- Entity [] - An array of all entities.

### Inline Code Tokens

- `GetEntitiesList()`

## GetHeroesList

- Kind: `class`
- Path: `/en/guide/classes/entitysystem/GetHeroesList`
- URL: https://docs.melonity.gg/en/guide/classes/entitysystem/GetHeroesList

### Members / Signatures (H3/H4)

- `GetHeroesList() Hero []`

### Paragraphs

- Retrieves a list of all hero entities.
- CAUTION
- Do not modify the returned array. It is a reference to the internal array.
- WARNING
- This array will also contain any copies and illusions of heroes (Monkey King's ult, Naga Siren's illusions, and other entities). If you need only original heroes, don't forget to add checks with IsMeepoClone() and IsIllusion() functions
- IMPORTANT
- If a hero has never been seen once during the game, he will not be in this array.
- Returned:

### List Items

- Hero [] - An array of all hero entities.

### Inline Code Tokens

- `IsMeepoClone()`
- `IsIllusion()`
- `GetHeroesList()`

## GetLinearProjectileList

- Kind: `class`
- Path: `/en/guide/classes/entitysystem/GetLinearProjectileList`
- URL: https://docs.melonity.gg/en/guide/classes/entitysystem/GetLinearProjectileList

### Members / Signatures (H3/H4)

- `GetLinearProjectileList() LinearProjectileObject []`

### Paragraphs

- Retrieves a list of all linear projectile entities.
- CAUTION
- Do not modify the returned array. It is a reference to the internal array.
- Returned:

### List Items

- LinearProjectileObject [] - An array of all linear projectile objects.

### Inline Code Tokens

- `GetLinearProjectileList()`

## GetListByClassName

- Kind: `class`
- Path: `/en/guide/classes/entitysystem/GetListByClassName`
- URL: https://docs.melonity.gg/en/guide/classes/entitysystem/GetListByClassName

### Members / Signatures (H3/H4)

- `GetListByClassName<T extends Entity = Entity>(type: string) T[]`

### Paragraphs

- Retrieves a list of entities by their class name.
- CAUTION
- Do not modify the returned array. It is a reference to the internal array.
- TIP
- Class names can be found in the Entities section in debug menu [F11]
- Returned:

### List Items

- type string - The class name of the entities to retrieve.
- T[] - An array of entities that match the provided class name. If no entities are found, an empty array is returned.

### Inline Code Tokens

- `GetListByClassName<T extends Entity = Entity>(type: string)`
- `type`

## GetLocalHero

- Kind: `class`
- Path: `/en/guide/classes/entitysystem/GetLocalHero`
- URL: https://docs.melonity.gg/en/guide/classes/entitysystem/GetLocalHero

### Members / Signatures (H3/H4)

- `GetLocalHero() Hero | null`

### Paragraphs

- Retrieves the local hero entity.
- Returned:

### List Items

- Hero | null - The local hero entity. If local hero is not exists, null is returned.

### Inline Code Tokens

- `GetLocalHero()`

## GetLocalHeroIndex

- Kind: `class`
- Path: `/en/guide/classes/entitysystem/GetLocalHeroIndex`
- URL: https://docs.melonity.gg/en/guide/classes/entitysystem/GetLocalHeroIndex

### Members / Signatures (H3/H4)

- `GetLocalHeroIndex() number`

### Paragraphs

- Retrieves the index of the local hero.
- Returned:

### List Items

- number - The index of the local hero. If local hero is not exists, -1 is returned.

### Inline Code Tokens

- `GetLocalHeroIndex()`

## GetLocalPlayer

- Kind: `class`
- Path: `/en/guide/classes/entitysystem/GetLocalPlayer`
- URL: https://docs.melonity.gg/en/guide/classes/entitysystem/GetLocalPlayer

### Members / Signatures (H3/H4)

- `GetLocalPlayer() Player | null`

### Paragraphs

- Retrieves the local player entity.
- Returned:

### List Items

- Player | null - The local player entity. If local player is not exists, null is returned.

### Inline Code Tokens

- `GetLocalPlayer()`

## GetLocalPlayerIndex

- Kind: `class`
- Path: `/en/guide/classes/entitysystem/GetLocalPlayerIndex`
- URL: https://docs.melonity.gg/en/guide/classes/entitysystem/GetLocalPlayerIndex

### Members / Signatures (H3/H4)

- `GetLocalPlayerIndex() number`

### Paragraphs

- Retrieves the index of the local player.
- Returned:

### List Items

- number - The index of the local player. If local player is not exists, -1 is returned.

### Inline Code Tokens

- `GetLocalPlayerIndex()`

## GetNPCsList

- Kind: `class`
- Path: `/en/guide/classes/entitysystem/GetNPCsList`
- URL: https://docs.melonity.gg/en/guide/classes/entitysystem/GetNPCsList

### Members / Signatures (H3/H4)

- `GetNPCsList() NPC []`

### Paragraphs

- Retrieves a list of all npc entities.
- CAUTION
- Do not modify the returned array. It is a reference to the internal array.
- WARNING
- This array stores absolutely all NPCs on the map: Techies mines , Templar Assassin traps , heroes , creeps , etc . If you want to get only the array of heroes, we recommend using the GetHeroesList function
- IMPORTANT
- If a npc is never seen once during the game, it probably won't be in this array.
- Returned:

### List Items

- NPC [] - An array of all npc entities.

### Inline Code Tokens

- `GetNPCsList()`

## GetPhysicalItemsList

- Kind: `class`
- Path: `/en/guide/classes/entitysystem/GetPhysicalItemsList`
- URL: https://docs.melonity.gg/en/guide/classes/entitysystem/GetPhysicalItemsList

### Members / Signatures (H3/H4)

- `GetPhysicalItemsList() PhysicalItem []`

### Paragraphs

- Retrieves a list of all physical item entities.
- CAUTION
- Do not modify the returned array. It is a reference to the internal array.
- Returned:

### List Items

- PhysicalItem [] - An array of all physical item entities.

### Inline Code Tokens

- `GetPhysicalItemsList()`

## GetPlayersList

- Kind: `class`
- Path: `/en/guide/classes/entitysystem/GetPlayersList`
- URL: https://docs.melonity.gg/en/guide/classes/entitysystem/GetPlayersList

### Members / Signatures (H3/H4)

- `GetPlayersList() Player []`

### Paragraphs

- Retrieves a list of all player entities.
- CAUTION
- Do not modify the returned array. It is a reference to the internal array.
- Returned:

### List Items

- Player [] - An array of all player entities.

### Inline Code Tokens

- `GetPlayersList()`

## GetRunesList

- Kind: `class`
- Path: `/en/guide/classes/entitysystem/GetRunesList`
- URL: https://docs.melonity.gg/en/guide/classes/entitysystem/GetRunesList

### Members / Signatures (H3/H4)

- `GetRunesList() Rune []`

### Paragraphs

- Retrieves a list of all rune entities.
- CAUTION
- Do not modify the returned array. It is a reference to the internal array.
- TIP
- This array contains all runes that have been seen at least 1 time.
- Returned:

### List Items

- Rune [] - An array of all rune entities.

### Inline Code Tokens

- `GetRunesList()`

## GetSingleton

- Kind: `class`
- Path: `/en/guide/classes/entitysystem/GetSingleton`
- URL: https://docs.melonity.gg/en/guide/classes/entitysystem/GetSingleton

### Members / Signatures (H3/H4)

- `GetSingleton<T = Entity>(type: string) T | null`

### Paragraphs

- Retrieves a singleton entity by its class name.
- TIP
- Class names can be found in the Entities section in the debug menu [F11]
- IMPORTANT
- Used for entities that only have one instance in the game.
- Returned:

### List Items

- type string - The class name of the entity to retrieve.
- T | null - The entity that matches the provided class name. If no entity is found, null is returned.

### Inline Code Tokens

- `GetSingleton<T = Entity>(type: string)`
- `type`

## GetTargetProjectileList

- Kind: `class`
- Path: `/en/guide/classes/entitysystem/GetTargetProjectileList`
- URL: https://docs.melonity.gg/en/guide/classes/entitysystem/GetTargetProjectileList

### Members / Signatures (H3/H4)

- `GetTargetProjectileList() TargetProjectileObject []`

### Paragraphs

- Retrieves a list of all target projectile entities.
- CAUTION
- Do not modify the returned array. It is a reference to the internal array.
- Returned:

### List Items

- TargetProjectileObject [] - An array of all target projectile objects.

### Inline Code Tokens

- `GetTargetProjectileList()`

## GameManager

- Kind: `class`
- Path: `/en/guide/classes/gamemanager/index`
- URL: https://docs.melonity.gg/en/guide/classes/gamemanager/index

### Sections (H2)

- Functions

### Members / Signatures (H3/H4)

- `GetDataManager() DataView | null`
- `GetGameManagerProxy() GameManagerProxy | null`
- `IsCustomGame() boolean`
- `IsEventGame() boolean`
- `GetHeroesKeyValues() KeyValue | null`
- `GetUnitsKeyValues() KeyValue | null`
- `GetAddOnGame() string`
- `GetAddOnMap() string`

### Paragraphs

- The GameManager namespace provides access to game manager state and addon-related key-value data.
- Retrieves the data manager.
- Returned:
- Retrieves the game manager proxy.
- Checks whether it is custom game.
- Checks whether it is event game.
- Retrieves the heroes key values.
- Retrieves the units key values.
- Retrieves the add on game.
- Retrieves the add on map.

### List Items

- DataView | null - The matching object, or null if it is not available.
- GameManagerProxy | null - The matching object, or null if it is not available.
- boolean - True if the condition is met, false otherwise.
- KeyValue | null - The matching object, or null if it is not available.
- string - The requested add on game.
- string - The requested add on map.

### Inline Code Tokens

- `GameManager`
- `GetDataManager()`
- `null`
- `GetGameManagerProxy()`
- `IsCustomGame()`
- `IsEventGame()`
- `GetHeroesKeyValues()`
- `GetUnitsKeyValues()`
- `GetAddOnGame()`
- `GetAddOnMap()`

## GameRules

- Kind: `class`
- Path: `/en/guide/classes/gamerules/index`
- URL: https://docs.melonity.gg/en/guide/classes/gamerules/index

### Sections (H2)

- Functions

### Members / Signatures (H3/H4)

- `GetPointer() DataView | null`
- `GetDayTimeStart() number`
- `GetNightTimeStart() number`
- `IsDayTime() boolean`
- `GetNetTimeOfDay() number`
- `GetTickCount() number`
- `GetItemKeyValue(itemName: string) KeyValue | null`
- `GetItemCost(itemName: string) number`
- `GetItemId(itemName: string) number`
- `GetHeroKeyValue(heroName: string) KeyValue | null`
- `GetHeroKeyValueById(heroId: number) KeyValue | null`
- `GetHeroesKeyValue() KeyValue | null`
- `SelectItemInShop(itemName: string) void`
- `SetItemToQuickBuy(itemName: string) void`
- `AddItemToQuickBuy(itemName: string) void`
- `ClearQuickBuy() void`
- `IsHeroAvailableByName(name: string) boolean`
- `GetStateTransitionTime() number`
- `CanPurchaseItem(name: string) boolean`
- `SetRiverType(type: number) void`
- `GetServerGameState() number`
- `GetGameState() Enum.GameState`
- `GetGameMode() number`
- `GetPreGameStartTime() number`
- `GetGameStartTime() number`
- `GetGameEndTime() number`
- `GetGameLoadTime() number`
- `GetGameTime() number`
- `IsPaused() boolean`
- `IsTemporaryDay() boolean`
- `IsTemporaryNight() boolean`
- `IsNightstalkerNight() boolean`
- `IsActiveGame() boolean`
- `GetMatchID() bigint`

### Paragraphs

- The GameRules namespace provides access to match timing, game state, hero and item key-values, and quick-buy helpers.
- Retrieves the pointer.
- Returned:
- Retrieves the day time start.
- Retrieves the night time start.
- Checks whether it is day time.
- Retrieves the net time of day.
- Retrieves the tick count.
- Retrieves the item key value.
- Retrieves the item cost.
- Retrieves the item id.
- Retrieves the hero key value.
- Retrieves the hero key value by id.
- Retrieves the heroes key value.
- Provides access to select item in shop.
- Sets the item to quick buy.
- Adds the item to quick buy.
- Clears the quick buy.
- Checks whether it is hero available by name.
- Retrieves the state transition time.
- Checks whether it can purchase item.
- Sets the river type.
- Retrieves the server game state.
- Retrieves the game state.
- Retrieves the game mode.
- Retrieves the pre game start time.
- Retrieves the game start time.
- Retrieves the game end time.
- Retrieves the game load time.
- Retrieves the game time.
- Checks whether it is paused.
- Checks whether it is temporary day.
- Checks whether it is temporary night.
- Checks whether it is nightstalker night.
- Checks whether it is active game.
- Retrieves the match id.

### List Items

- DataView | null - The matching object, or null if it is not available.
- number - The requested day time start.
- number - The requested night time start.
- boolean - True if the condition is met, false otherwise.
- number - The requested net time of day.
- number - The requested tick count.
- itemName string - The item name.
- KeyValue | null - The matching object, or null if it is not available.
- number - The requested item cost.
- number - The requested item id.
- heroName string - The hero name.
- heroId number - The hero id.
- name string - The name.
- number - The requested state transition time.
- type number - The type.
- number - The requested server game state.
- Enum.GameState - The requested game state.
- number - The requested game mode.
- number - The requested pre game start time.
- number - The requested game start time.
- number - The requested game end time.
- number - The requested game load time.
- number - The requested game time.
- bigint - The requested match id.

### Inline Code Tokens

- `GameRules`
- `GetPointer()`
- `null`
- `GetDayTimeStart()`
- `GetNightTimeStart()`
- `IsDayTime()`
- `GetNetTimeOfDay()`
- `GetTickCount()`
- `GetItemKeyValue(itemName: string)`
- `itemName`
- `GetItemCost(itemName: string)`
- `GetItemId(itemName: string)`
- `GetHeroKeyValue(heroName: string)`
- `heroName`
- `GetHeroKeyValueById(heroId: number)`
- `heroId`
- `GetHeroesKeyValue()`
- `SelectItemInShop(itemName: string)`
- `SetItemToQuickBuy(itemName: string)`
- `AddItemToQuickBuy(itemName: string)`
- `ClearQuickBuy()`
- `IsHeroAvailableByName(name: string)`
- `name`
- `GetStateTransitionTime()`
- `CanPurchaseItem(name: string)`
- `SetRiverType(type: number)`
- `type`
- `GetServerGameState()`
- `GetGameState()`
- `GetGameMode()`
- `GetPreGameStartTime()`
- `GetGameStartTime()`
- `GetGameEndTime()`
- `GetGameLoadTime()`
- `GetGameTime()`
- `IsPaused()`
- `IsTemporaryDay()`
- `IsTemporaryNight()`
- `IsNightstalkerNight()`
- `IsActiveGame()`
- `GetMatchID()`

## GCRequest

- Kind: `class`
- Path: `/en/guide/classes/gc/GCRequest`
- URL: https://docs.melonity.gg/en/guide/classes/gc/GCRequest

### Sections (H2)

- Methods

### Members / Signatures (H3/H4)

- `IsResolved() boolean`
- `GetResponse() object`
- `GetID() number`

### Paragraphs

- The GCRequest class represents a pending Game Coordinator request and its response state.
- Checks whether the HTTP request has resolved.
- Returned:
- Retrieves the response.
- Retrieves the HTTP request identifier.

### List Items

- boolean - True if the condition is met, false otherwise.
- object - The requested response.
- number - The requested id.

### Inline Code Tokens

- `GCRequest`
- `IsResolved()`
- `GetResponse()`
- `GetID()`

## GC

- Kind: `class`
- Path: `/en/guide/classes/gc/index`
- URL: https://docs.melonity.gg/en/guide/classes/gc/index

### Sections (H2)

- Interfaces
- Functions

### Members / Signatures (H3/H4)

- `GCResponseInfo`
- `Request(obj: object, requestEmsg: number, requestName: string, respInfo?: GCResponseInfo) GCRequest`

### Paragraphs

- The GC namespace provides APIs for sending requests to the Game Coordinator and tracking their responses.
- The GCResponseInfo interface describes the corresponding object shape exposed by the declarations.
- Sends a request.
- Returned:

### List Items

- responseEmsg number - The response emsg.
- responseName string - The response name.
- onResolve (obj: GCRequest ) => void (optional) - The on resolve.
- obj object - The obj.
- requestEmsg number - The request emsg.
- requestName string - The request name.
- respInfo GCResponseInfo (optional) - The resp info.
- GCRequest - The result of the call.

### Inline Code Tokens

- `GC`
- `GCResponseInfo`
- `responseEmsg`
- `responseName`
- `onResolve`
- `Request(obj: object, requestEmsg: number, requestName: string, respInfo?: GCResponseInfo)`
- `obj`
- `requestEmsg`
- `requestName`
- `respInfo`

## GridNav

- Kind: `class`
- Path: `/en/guide/classes/gridnav/index`
- URL: https://docs.melonity.gg/en/guide/classes/gridnav/index

### Sections (H2)

- Interfaces
- Functions

### Members / Signatures (H3/H4)

- `PathInfo`
- `IsTraversable(pos: Vector, noTreeMode?: boolean) boolean`
- `FindPath(start: Vector, end: Vector, noTreeMode?: boolean, allowIncomplete?: boolean) PathInfo`

### Paragraphs

- The GridNav namespace provides helpers for traversability checks and pathfinding queries.
- The PathInfo interface describes the corresponding object shape exposed by the declarations.
- Checks whether it is traversable.
- Returned:
- Finds the path.

### List Items

- hasPath boolean - The has path.
- path Vector [] - The path.
- pos Vector - The world position value.
- noTreeMode boolean (optional) - Whether trees should be ignored during the query.
- boolean - True if the condition is met, false otherwise.
- start Vector - The start position.
- end Vector - The end position.
- allowIncomplete boolean (optional) - Whether incomplete paths are allowed.
- PathInfo - The result of the call.

### Inline Code Tokens

- `GridNav`
- `PathInfo`
- `hasPath`
- `path`
- `IsTraversable(pos: Vector, noTreeMode?: boolean)`
- `pos`
- `noTreeMode`
- `FindPath(start: Vector, end: Vector, noTreeMode?: boolean, allowIncomplete?: boolean)`
- `start`
- `end`
- `allowIncomplete`

## HTTPConnection

- Kind: `class`
- Path: `/en/guide/classes/http/HTTPConnection`
- URL: https://docs.melonity.gg/en/guide/classes/http/HTTPConnection

### Sections (H2)

- Methods

### Members / Signatures (H3/H4)

- `IsResolved() boolean`
- `GetBody() string`
- `GetStatusCode() number`
- `GetHeaders() { [key: string]: string }`
- `GetID() number`

### Paragraphs

- The HTTPConnection class provides access to response state for a pending or completed HTTP request.
- Checks whether it is resolved.
- Returned:
- Retrieves the HTTP response body.
- Retrieves the HTTP response status code.
- Retrieves the HTTP response headers.
- Retrieves the HTTP request identifier.

### List Items

- boolean - True if the condition is met, false otherwise.
- string - The requested body.
- number - The requested status code.
- { [key: string]: string } - The requested headers.
- number - The requested id.

### Inline Code Tokens

- `HTTPConnection`
- `IsResolved()`
- `GetBody()`
- `GetStatusCode()`
- `GetHeaders()`
- `GetID()`

## HTTP

- Kind: `class`
- Path: `/en/guide/classes/http/index`
- URL: https://docs.melonity.gg/en/guide/classes/http/index

### Sections (H2)

- Interfaces
- Functions

### Members / Signatures (H3/H4)

- `HTTPRequestInfo`
- `Request(url: string, path: string, method: string, optInfo?: HTTPRequestInfo) HTTPConnection`

### Paragraphs

- The HTTP namespace provides helpers for creating HTTP requests and handling their response state.
- The HTTPRequestInfo interface describes the corresponding object shape exposed by the declarations.
- Performs an HTTP request using the specified URL, path, and request options.
- Returned:

### List Items

- headers { [key: string]: string; } (optional) - The headers.
- parameters { [key: string]: string; } (optional) - The parameters.
- data string (optional) - Used in POST
- ssl boolean (optional) - Default: false
- port number (optional) - Default: 80 or 443 (if ssl is true)
- readTimeout number (optional) - Default: 30, in seconds
- writeTimeout number (optional) - Default: 30, in seconds
- url string - The base URL of the request.
- path string - The request path.
- method string - The HTTP method to use.
- optInfo HTTPRequestInfo (optional) - The HTTP request options.
- HTTPConnection - The result of the call.

### Inline Code Tokens

- `HTTP`
- `HTTPRequestInfo`
- `headers`
- `parameters`
- `data`
- `ssl`
- `port`
- `readTimeout`
- `writeTimeout`
- `Request(url: string, path: string, method: string, optInfo?: HTTPRequestInfo)`
- `url`
- `path`
- `method`
- `optInfo`

## Humanizer

- Kind: `class`
- Path: `/en/guide/classes/humanizer/index`
- URL: https://docs.melonity.gg/en/guide/classes/humanizer/index

### Sections (H2)

- Interfaces
- Functions

### Members / Signatures (H3/H4)

- `MoveCursorResultObject`
- `CalculateTimeForOrder(pos?: Vector) number`
- `GetRandom() number`
- `SetMaxCursorTime(val: number) void`
- `GetMaxCursorTime() number`
- `SetBaseCursorTime(val: number) void`
- `GetBaseCursorTime() number`
- `SetReturnTime(val: number) void`
- `GetReturnTime() number`
- `SetLingerTime(val: number) void`
- `GetLingerTime() number`
- `SetRandomAddTime(val: number) void`
- `GetRandomAddTime() number`
- `MoveCursorTo(position: Vector, func: (state: MoveCursorResultObject) => void) void`

### Paragraphs

- The Humanizer namespace provides helpers for cursor timing and humanized cursor movement.
- The MoveCursorResultObject interface describes the corresponding object shape exposed by the declarations.
- Calculates the time for order.
- Returned:
- Retrieves the random.
- Sets the max cursor time.
- Retrieves the max cursor time.
- Sets the base cursor time.
- Retrieves the base cursor time.
- Sets the return time.
- Retrieves the return time.
- Sets the linger time.
- Retrieves the linger time.
- Sets the random add time.
- Retrieves the random add time.
- Moves the cursor to the specified position using humanized timing and invokes the callback on completion.

### List Items

- result Boolean - The result.
- pos Vector (optional) - The world position value.
- number - The result of the call.
- number - The requested random.
- val number - The value to use.
- number - The requested max cursor time.
- number - The requested base cursor time.
- number - The requested return time.
- number - The requested linger time.
- number - The requested random add time.
- position Vector - The world position value.
- func (state: MoveCursorResultObject) => void - The callback function to invoke.

### Inline Code Tokens

- `Humanizer`
- `MoveCursorResultObject`
- `result`
- `CalculateTimeForOrder(pos?: Vector)`
- `pos`
- `GetRandom()`
- `SetMaxCursorTime(val: number)`
- `val`
- `GetMaxCursorTime()`
- `SetBaseCursorTime(val: number)`
- `GetBaseCursorTime()`
- `SetReturnTime(val: number)`
- `GetReturnTime()`
- `SetLingerTime(val: number)`
- `GetLingerTime()`
- `SetRandomAddTime(val: number)`
- `GetRandomAddTime()`
- `MoveCursorTo(position: Vector, func: (state: MoveCursorResultObject) => void)`
- `position`
- `func`

## Input

- Kind: `class`
- Path: `/en/guide/classes/input/index`
- URL: https://docs.melonity.gg/en/guide/classes/input/index

### Sections (H2)

- Functions

### Members / Signatures (H3/H4)

- `GetCursorPos() [number, number]`
- `SetCursorPos(x: number, y: number) void`
- `IsCursorInBounds(x0: number, y0: number, x1: number, y1: number) boolean`
- `IsCursorInRect(x: number, y: number, width: number, height: number, align?: Enum.ContentAlign) boolean`
- `IsInputCaptured() boolean`
- `IsKeyDown(key: Enum.ButtonCode, checkInputCapture?: boolean) boolean`
- `IsKeyDownOnce(key: Enum.ButtonCode, checkInputCapture?: boolean) boolean`
- `GetNearestEntityToCursorFromList<T extends Entity>(teamType: Enum.TeamType, unitList: T[]) T | null`
- `GetNearestHeroToCursor(teamType: Enum.TeamType) Hero | null`
- `GetNearestUnitToCursor(teamType: Enum.TeamType) NPC | null`
- `IsCursorOnMinimap() boolean`
- `GetWorldCursorPos() Vector`
- `GetHoveredEntityIndex() number`
- `GetHoveredEntity() Entity | null`

### Paragraphs

- The Input namespace provides helpers for cursor state, key state, and cursor-based entity queries.
- Retrieves the current cursor coordinates.
- Returned:
- Sets the current cursor coordinates.
- Checks whether the cursor is within the specified bounds.
- Checks whether the cursor is within the specified rectangle.
- Checks whether input is currently captured by the UI.
- Checks whether the specified key is currently held down.
- Checks whether the specified key was pressed once.
- Retrieves the closest entity to the cursor from the provided list.
- Retrieves the closest hero to the cursor.
- Retrieves the closest unit to the cursor.
- Checks whether the cursor is currently over the minimap.
- Retrieves the world position under the cursor.
- Retrieves the index of the entity currently hovered by the cursor.
- Retrieves the entity currently hovered by the cursor.

### List Items

- [number, number] - The tuple result of the call.
- x number - The x coordinate.
- y number - The y coordinate.
- x0 number - The minimum x coordinate.
- y0 number - The minimum y coordinate.
- x1 number - The maximum x coordinate.
- y1 number - The maximum y coordinate.
- boolean - True if the condition is met, false otherwise.
- width number - The width value.
- height number - The height value.
- align Enum.ContentAlign (optional) - The content alignment value.
- key Enum.ButtonCode - The key value.
- checkInputCapture boolean (optional) - Whether input capture should be taken into account.
- teamType Enum.TeamType - The team filter to use.
- unitList T[] - The unit list to search from.
- T | null - The matching object, or null if it is not available.
- Hero | null - The matching object, or null if it is not available.
- NPC | null - The matching object, or null if it is not available.
- Vector - The requested world cursor pos.
- number - The requested hovered entity index.
- Entity | null - The matching object, or null if it is not available.

### Inline Code Tokens

- `Input`
- `GetCursorPos()`
- `SetCursorPos(x: number, y: number)`
- `x`
- `y`
- `IsCursorInBounds(x0: number, y0: number, x1: number, y1: number)`
- `x0`
- `y0`
- `x1`
- `y1`
- `IsCursorInRect(x: number, y: number, width: number, height: number, align?: Enum.ContentAlign)`
- `width`
- `height`
- `align`
- `IsInputCaptured()`
- `IsKeyDown(key: Enum.ButtonCode, checkInputCapture?: boolean)`
- `key`
- `checkInputCapture`
- `IsKeyDownOnce(key: Enum.ButtonCode, checkInputCapture?: boolean)`
- `GetNearestEntityToCursorFromList<T extends Entity>(teamType: Enum.TeamType, unitList: T[])`
- `teamType`
- `unitList`
- `null`
- `GetNearestHeroToCursor(teamType: Enum.TeamType)`
- `GetNearestUnitToCursor(teamType: Enum.TeamType)`
- `IsCursorOnMinimap()`
- `GetWorldCursorPos()`
- `GetHoveredEntityIndex()`
- `GetHoveredEntity()`

## KeyValue

- Kind: `class`
- Path: `/en/guide/classes/keyvalue/index`
- URL: https://docs.melonity.gg/en/guide/classes/keyvalue/index

### Sections (H2)

- Properties
- Methods

### Members / Signatures (H3/H4)

- `key string`
- `value any`
- `GetName() string`
- `Count() number`
- `Element(index: number) KeyValue | null`
- `GetRawFloat() number`
- `FindKey(key: string) KeyValue | null`
- `GetString() string`
- `GetRawNumber() number`
- `GetNumber() number`
- `GetValue() number | string`
- `static FromBinary(data: string) KeyValue | null`
- `ToBinary() string`

### Paragraphs

- The KeyValue class provides helpers for reading nested key-value data and converting it to or from binary form.
- The key.
- The value.
- Retrieves the name of the current key-value node.
- Returned:
- Retrieves the number of child elements.
- Retrieves the child element at the specified index.
- Retrieves the raw floating-point value.
- Finds a child key-value node by key.
- Retrieves the value as a string.
- Retrieves the raw numeric value.
- Retrieves the numeric value.
- Retrieves the value as a number or string.
- Creates a key-value node from binary data.
- Converts the key-value node to binary data.

### List Items

- string - The requested name.
- number - The result of the call.
- index number - The index value.
- KeyValue | null - The matching object, or null if it is not available.
- number - The requested raw float.
- key string - The key value.
- string - The requested string.
- number - The requested raw number.
- number - The requested number.
- number | string - The requested value.
- data string - The raw payload data.
- string - The result of the call.

### Inline Code Tokens

- `KeyValue`
- `key`
- `value`
- `GetName()`
- `Count()`
- `Element(index: number)`
- `index`
- `null`
- `GetRawFloat()`
- `FindKey(key: string)`
- `GetString()`
- `GetRawNumber()`
- `GetNumber()`
- `GetValue()`
- `static FromBinary(data: string)`
- `data`
- `ToBinary()`

## Log

- Kind: `class`
- Path: `/en/guide/classes/log/index`
- URL: https://docs.melonity.gg/en/guide/classes/log/index

### Sections (H2)

- Interfaces
- Functions
- Global Functions

### Members / Signatures (H3/H4)

- `LogValue`
- `LogMessage`
- `Write(...args: any[]) void`
- `GetLog(lineNun?: number) LogMessage[]`
- `print(...args: any[]) void`
- `warn(...args: any[]) void`
- `error(...args: any[]) void`

### Paragraphs

- The Log namespace provides helpers for writing script logs and reading collected log messages.
- The LogValue interface describes the corresponding object shape exposed by the declarations.
- The LogMessage interface describes the corresponding object shape exposed by the declarations.
- Writes a log message.
- Retrieves the log.
- WARNING
- Deprecated.
- Returned:
- Writes a standard log message.
- Writes a warning log message.
- Writes an error log message.

### List Items

- str string - The str.
- obj any - The obj.
- index number - The index.
- time number - The time.
- values LogValue[] - The values.
- args any[] - The values to write.
- lineNun number (optional) - The line nun.
- LogMessage[] - An array with the matching values.

### Inline Code Tokens

- `Log`
- `LogValue`
- `str`
- `obj`
- `LogMessage`
- `index`
- `time`
- `values`
- `Write(...args: any[])`
- `args`
- `GetLog(lineNun?: number)`
- `lineNun`
- `print(...args: any[])`
- `warn(...args: any[])`
- `error(...args: any[])`

## Matchmaking

- Kind: `class`
- Path: `/en/guide/classes/matchmaking/index`
- URL: https://docs.melonity.gg/en/guide/classes/matchmaking/index

### Sections (H2)

- Match Settings
- Match Search
- Lobby
- Party
- Data

### Members / Signatures (H3/H4)

- `GetGameModes() number`
- `SetGameModes(val: number) void`
- `GetCompetitiveGameModes() number`
- `SetCompetitiveGameModes(val: number) void`
- `GetMatchType() Enum.MatchType`
- `SetMatchType(val: Enum.MatchType) void`
- `GetMatchLanguages() number`
- `SetMatchLanguages(val: number) void`
- `GetBotDifficultyMask() number`
- `SetBotDifficultyMask(val: number) void`
- `GetRankedRoleQueue() boolean`
- `SetRankedRoleQueue(val: boolean) void`
- `GetBotScriptIndexMask() number`
- `SetBotScriptIndexMask(val: number) void`
- `GetRegionSelectionFlags() Enum.MatchGroup`
- `SetRegionSelectionFlags(val: Enum.MatchGroup) void`
- `GetLaneSelectionFlags() Enum.LaneSelectionFlags`
- `SetLaneSelectionFlags(val: Enum.LaneSelectionFlags) void`
- `GetCustomGameDifficultyMask() number`
- `SetCustomGameDifficultyMask(val: number) void`
- `GetFindMatchData() CMsgStartFindingMatch`
- `FindMatch(skipPingMenu?: boolean) void`
- `StopFindingMatch() void`
- `Reconnect() void`
- `JoinLobby(id: bigint, pass?: string, callback?: (response: object) => void) void`
- `CreateLobby(data: MatchmakingLobbyData) void`
- `LaunchLobby() void`
- `GetLobbyList(callback: (response: CMsgLobbyListResponse) => void, server_region?: number, game_mode?: number) void`
- `GetFriendLobbyList(callback: (response: CMsgFriendPracticeLobbyListResponse) => void, friends: number[]) void`
- `GetMatchmakingStats(callback: (response: CMsgDOTAMatchmakingStatsResponse) => void) void`
- `InviteToParty(steamID: bigint) void`
- `AcceptParty(groupID: bigint) void`
- `RejectParty(groupID: bigint) void`
- `GetAccountData() CSODOTAGameAccountClient | null`
- `GetAccountPlusData() CSODOTAGameAccountPlus | null`
- `GetPartyData() CSODOTAParty | null`
- `GetLobbyData() CSODOTALobby | null`

### Paragraphs

- The Matchmaking namespace provides helpers for match search, lobby management, and lobby data access.
- Returns the currently selected game modes bitmask.
- Sets the game modes bitmask.
- Returns the competitive game modes bitmask.
- Sets the competitive game modes bitmask.
- Returns the selected match type.
- Sets the selected match type.
- Returns the selected match languages bitmask.
- Sets the selected match languages bitmask.
- Returns the selected bot difficulty mask.
- Sets the selected bot difficulty mask.
- Returns whether ranked role queue is enabled.
- Enables or disables ranked role queue.
- Returns the bot script index mask.
- Sets the bot script index mask.
- Returns the selected region flags.
- Sets the selected region flags.
- Returns the selected lane flags.
- Sets the selected lane flags.
- Returns the custom game difficulty mask.
- Sets the custom game difficulty mask.
- Returns the current match search payload.
- Starts matchmaking using the current settings.
- Stops the current matchmaking search.
- Reconnects to the current matchmaking session.
- Joins a lobby by its ID.
- Creates a new lobby from the provided data.
- Launches the current lobby.
- Requests the lobby list.
- Requests the lobby list for the provided friends.
- Requests matchmaking statistics.
- Invites a Steam account to the current party.
- Accepts a party invite.
- Rejects a party invite.
- Returns the current account data.
- Returns the current Dota Plus account data.
- Returns the current party data.
- Returns the current lobby data.

### Inline Code Tokens

- `Matchmaking`
- `GetGameModes()`
- `SetGameModes(val: number)`
- `GetCompetitiveGameModes()`
- `SetCompetitiveGameModes(val: number)`
- `GetMatchType()`
- `SetMatchType(val: Enum.MatchType)`
- `GetMatchLanguages()`
- `SetMatchLanguages(val: number)`
- `GetBotDifficultyMask()`
- `SetBotDifficultyMask(val: number)`
- `GetRankedRoleQueue()`
- `SetRankedRoleQueue(val: boolean)`
- `GetBotScriptIndexMask()`
- `SetBotScriptIndexMask(val: number)`
- `GetRegionSelectionFlags()`
- `SetRegionSelectionFlags(val: Enum.MatchGroup)`
- `GetLaneSelectionFlags()`
- `SetLaneSelectionFlags(val: Enum.LaneSelectionFlags)`
- `GetCustomGameDifficultyMask()`
- `SetCustomGameDifficultyMask(val: number)`
- `GetFindMatchData()`
- `FindMatch(skipPingMenu?: boolean)`
- `StopFindingMatch()`
- `Reconnect()`
- `JoinLobby(id: bigint, pass?: string, callback?: (response: object) => void)`
- `CreateLobby(data: MatchmakingLobbyData)`
- `LaunchLobby()`
- `GetLobbyList(callback: (response: CMsgLobbyListResponse) => void, server_region?: number, game_mode?: number)`
- `GetFriendLobbyList(callback: (response: CMsgFriendPracticeLobbyListResponse) => void, friends: number[])`
- `GetMatchmakingStats(callback: (response: CMsgDOTAMatchmakingStatsResponse) => void)`
- `InviteToParty(steamID: bigint)`
- `AcceptParty(groupID: bigint)`
- `RejectParty(groupID: bigint)`
- `GetAccountData()`
- `GetAccountPlusData()`
- `GetPartyData()`
- `GetLobbyData()`

## Menu

- Kind: `class`
- Path: `/en/guide/classes/menu/index`
- URL: https://docs.melonity.gg/en/guide/classes/menu/index

### Sections (H2)

- Interfaces
- Type Aliases
- Functions

### Members / Signatures (H3/H4)

- `MenuOptionChange<T>`
- `LocaleVariant "en" | "ru" | "cn" | "es"`
- `MenuOptionChangeCallback<T> (state: MenuOptionChange<T>) => void`
- `GetOptionById(id: number) MenuOption <any> | null`
- `IsNewMenu() boolean`
- `GetLocale() LocaleVariant`
- `SetVisible(value: boolean) void`
- `IsVisible() boolean`
- `AddToggle(whereAt: string[], name: string, defaultValue: boolean) MenuOption <boolean>`
- `AddSlider(whereAt: string[], name: string, minValue: number, maxValue: number, defaultValue: number, step?: number) MenuOption <number>`
- `AddInputBox(whereAt: string[], name: string, defaultValue: string) MenuOption <string>`
- `AddComboBox(whereAt: string[], name: string, values: string[], defaultValueIndex: number) MenuOption <number>`
- `AddMultiComboBox(whereAt: string[], name: string, values: string[], defaultState: boolean[] | boolean) MenuOption <boolean[]>`
- `AddMultiSelect(whereAt: string[], name: string, images: string[], defaultState: boolean[] | boolean, reservedSlots?: number) MenuOption <boolean[]>`
- `AddPrioritySelect(whereAt: string[], name: string, images: string[], defaultState: boolean[] | boolean, reservedSlots?: number) MenuOption <number[]>`
- `AddColorPicker(whereAt: string[], name: string, color: Color) MenuOption < Color >`
- `AddColorPickerBlock(whereAt: string[], color: Color) MenuOption < Color >`
- `AddKeyBind(whereAt: string[], name: string, defaultKey: number) MenuOption <number>`
- `AddToggleBlock(whereAt: string[], names: string[], state: boolean[] | boolean, vertical?: boolean) MenuOption <boolean[]>`
- `AddHeroSelect(whereAt: string[], name: string, defaultValue: string[]) MenuOption <string[]>`
- `AddButton(whereAt: string[], name: string, callback: () => void) MenuOption <void>`
- `AddLabel(whereAt: string[], name: string) MenuOption <void>`
- `SetPathLocale(whereAt: string[], locale: LocaleVariant, whereAtNew: string[]) void`
- `OpenFolder(path: string[]) void`
- `HighlightOption(path: string[]) void`
- `GetFolder(whereAt: string[]) MenuOption <void> | null`
- `GetOption<T = any>(whereAt: string[]) MenuOption <T> | null`
- `SetImage(whereAt: string[], imagePath: string) void`
- `OnOptionAdded(func: (option: MenuOption<any>) => void) void`
- `IsKeyDownOnce(handle: MenuKeyBindHandler, checkInputCapture?: boolean) boolean`
- `IsKeyDown(handle: MenuKeyBindHandler, checkInputCapture?: boolean) boolean`
- `GetValue<T>(handle: MenuOption<T>) T`
- `SetTipLocale(handle: MenuOptionHandler, locale: LocaleVariant, tip: string) void`
- `GetFolderOptions(whereAt: string[]) MenuOption <any>[] | null`

### Paragraphs

- The Menu namespace provides APIs for creating, retrieving, and managing script menu options.
- The MenuOptionChange interface describes the corresponding object shape exposed by the declarations.
- The LocaleVariant type alias.
- The MenuOptionChangeCallback type alias.
- Retrieves the option by id.
- Returned:
- Checks whether it is new menu.
- Retrieves the locale.
- Sets the visible.
- Checks whether it is visible.
- Adds the toggle.
- Adds the slider.
- Adds the input box.
- Adds the combo box.
- Adds the multi combo box.
- Adds the multi select.
- Adds the priority select.
- Adds the color picker.
- Adds the color picker block.
- Adds the key bind.
- Adds the toggle block.
- defaultValue is array of string of heroes names like npc_dota_hero_techies, npc_dota_hero_pudge
- Adds the button.
- Adds the label.
- Sets the path locale.
- Opens the folder.
- Provides access to highlight option.
- Retrieves the folder.
- Retrieves the option.
- Sets the image.
- Provides access to on option added.
- Checks whether the specified key was pressed once.
- WARNING
- Deprecated. use option.IsKeyDownOnce instead
- Checks whether the specified key is currently held down.
- Deprecated. use option.IsKeyDown instead
- Retrieves the specified console variable value.
- Deprecated. use option.GetValue instead
- Sets the tip locale.
- Deprecated. use option.SetTipLocale instead
- Retrieves the folder options.
- Deprecated. use option.GetChildrens instead

### List Items

- index MenuOption <T> - The index.
- oldValue T - The old value.
- newValue T - The new value.
- id number - The id.
- MenuOption <any> | null - The matching object, or null if it is not available.
- boolean - True if the condition is met, false otherwise.
- LocaleVariant - The requested locale.
- value boolean - The value to set or use.
- whereAt string[] - The menu path where the option should be added or resolved.
- name string - The name.
- defaultValue boolean - The default value.
- MenuOption <boolean> - The result of the call.
- minValue number - The min value.
- maxValue number - The max value.
- defaultValue number - The default value.
- step number (optional) - The step.
- MenuOption <number> - The result of the call.
- defaultValue string - The default value.
- MenuOption <string> - The result of the call.
- values string[] - The values to use.
- defaultValueIndex number - The default value index.
- defaultState boolean[] | boolean - The default state.
- MenuOption <boolean[]> - The result of the call.
- images string[] - The images.
- reservedSlots number (optional) - The reserved slots.
- MenuOption <number[]> - The result of the call.
- color Color - The color value to use.
- MenuOption < Color > - The result of the call.
- defaultKey number - The default key.
- names string[] - The names.
- state boolean[] | boolean - The state.
- vertical boolean (optional) - The vertical.
- defaultValue string[] - The default value.
- MenuOption <string[]> - The result of the call.
- callback () => void - The callback.
- MenuOption <void> - The result of the call.
- locale LocaleVariant - The locale to use.
- whereAtNew string[] - The where at new.
- path string[] - The path.
- MenuOption <void> | null - The matching object, or null if it is not available.
- MenuOption <T> | null - The matching object, or null if it is not available.
- imagePath string - The image path.
- func (option: MenuOption <any>) => void - The func.
- handle MenuKeyBindHandler - The handle.
- checkInputCapture boolean (optional) - The check input capture.
- handle MenuOption <T> - The handle.
- T - The requested value.
- handle MenuOptionHandler - The handle.
- tip string - The tip.
- MenuOption <any>[] | null - The matching object, or null if it is not available.

### Inline Code Tokens

- `Menu`
- `MenuOptionChange<T>`
- `MenuOptionChange`
- `index`
- `oldValue`
- `newValue`
- `LocaleVariant`
- `MenuOptionChangeCallback<T>`
- `MenuOptionChangeCallback`
- `GetOptionById(id: number)`
- `id`
- `null`
- `IsNewMenu()`
- `GetLocale()`
- `SetVisible(value: boolean)`
- `value`
- `IsVisible()`
- `AddToggle(whereAt: string[], name: string, defaultValue: boolean)`
- `whereAt`
- `name`
- `defaultValue`
- `AddSlider(whereAt: string[], name: string, minValue: number, maxValue: number, defaultValue: number, step?: number)`
- `minValue`
- `maxValue`
- `step`
- `AddInputBox(whereAt: string[], name: string, defaultValue: string)`
- `AddComboBox(whereAt: string[], name: string, values: string[], defaultValueIndex: number)`
- `values`
- `defaultValueIndex`
- `AddMultiComboBox(whereAt: string[], name: string, values: string[], defaultState: boolean[] | boolean)`
- `defaultState`
- `AddMultiSelect(whereAt: string[], name: string, images: string[], defaultState: boolean[] | boolean, reservedSlots?: number)`
- `images`
- `reservedSlots`
- `AddPrioritySelect(whereAt: string[], name: string, images: string[], defaultState: boolean[] | boolean, reservedSlots?: number)`
- `AddColorPicker(whereAt: string[], name: string, color: Color)`
- `color`
- `AddColorPickerBlock(whereAt: string[], color: Color)`
- `AddKeyBind(whereAt: string[], name: string, defaultKey: number)`
- `defaultKey`
- `AddToggleBlock(whereAt: string[], names: string[], state: boolean[] | boolean, vertical?: boolean)`
- `names`
- `state`
- `vertical`
- `AddHeroSelect(whereAt: string[], name: string, defaultValue: string[])`
- `AddButton(whereAt: string[], name: string, callback: () => void)`
- `callback`
- `AddLabel(whereAt: string[], name: string)`
- `SetPathLocale(whereAt: string[], locale: LocaleVariant, whereAtNew: string[])`
- `locale`
- `whereAtNew`
- `OpenFolder(path: string[])`
- `path`
- `HighlightOption(path: string[])`
- `GetFolder(whereAt: string[])`
- `GetOption<T = any>(whereAt: string[])`
- `SetImage(whereAt: string[], imagePath: string)`
- `imagePath`
- `OnOptionAdded(func: (option: MenuOption<any>) => void)`
- `func`
- `IsKeyDownOnce(handle: MenuKeyBindHandler, checkInputCapture?: boolean)`
- `handle`
- `checkInputCapture`
- `IsKeyDown(handle: MenuKeyBindHandler, checkInputCapture?: boolean)`
- `GetValue<T>(handle: MenuOption<T>)`
- `SetTipLocale(handle: MenuOptionHandler, locale: LocaleVariant, tip: string)`
- `tip`
- `GetFolderOptions(whereAt: string[])`

## MenuOption

- Kind: `class`
- Path: `/en/guide/classes/menu/MenuOption`
- URL: https://docs.melonity.gg/en/guide/classes/menu/MenuOption

### Sections (H2)

- Methods

### Members / Signatures (H3/H4)

- `GetOptionID() number`
- `GetType() Enum.MenuOptionType`
- `IsFolder() boolean`
- `OnChange(func: MenuOptionChangeCallback<T>, initCall?: boolean) this`
- `GetValue() T`
- `SetValue(value: T) this`
- `GetSlotValueByIndex(index: number) boolean`
- `SetSlotValueByIndex(index: number, value: boolean) this`
- `GetSlotValueByKey(key: string) boolean`
- `SetSlotValueByKey(key: string, value: boolean) this`
- `GetBindedValue() { value: T }`
- `GetPrioritySelectValue() string[]`
- `SetTip(text: string, locale?: LocaleVariant) this`
- `SetTip2(text: string, locale?: LocaleVariant) this`
- `SetTip2Title(text: string, locale?: LocaleVariant) this`
- `SetTip2Image(imagePath: string) this`
- `SetColumn(value: number) this`
- `GetColumn() number`
- `SetMergeWithNext(value: boolean) this`
- `MergeWithNext() this`
- `IsMergedWithNext() boolean`
- `SetTipLocale(locale: LocaleVariant, text: string) this`
- `SetComboBoxLocale(locale: LocaleVariant, values: string[]) this`
- `SetNameLocale(locale: LocaleVariant, name: string) this`
- `SetGeneral(value: boolean) this`
- `IsGeneral() boolean`
- `SetGeneralForTab(value: boolean) this`
- `IsGeneralForTab() boolean`
- `SetHidden(value: boolean) this`
- `IsHidden() boolean`
- `SetSlotHiddenByIndex(slot: number, value: boolean) this`
- `IsSlotHiddenByIndex(slot: number) boolean`
- `SetSlotHiddenByKey(key: string, value: boolean) this`
- `IsSlotHiddenByKey(key: string) boolean`
- `GetName() string`
- `GetNameTranslated() string`
- `GetChilds() MenuOption <any>[]`
- `IsKeyDownOnce(checkInputCapture?: boolean) boolean`
- `IsKeyDown(checkInputCapture?: boolean) boolean`
- `GetKeyString() string`
- `SetImage(imagePath: string) this`
- `SetDisabled(value: boolean) this`
- `IsDisabled() boolean`
- `SetSlotDisabledByIndex(slot: number, value: boolean) this`
- `IsSlotDisabledByIndex(slot: number) boolean`
- `SetSlotDisabledByKey(key: string, value: boolean) this`
- `IsSlotDisabledByKey(key: string) boolean`
- `SetNoTitle(value: boolean) this`
- `IsNoTitle() boolean`
- `SetToggleBlockTipsTranslated(locale: LocaleVariant, hints: string[]) this`
- `SetNotStrictAlign(value: boolean) this`
- `SetToggleBlockLocale(locale: LocaleVariant, values: string[]) this`
- `SetFolderTitleTranslated(locale: LocaleVariant, title: string) this`
- `SetNotDrawLabelAndHint(value: boolean) this`
- `NotDrawLabelAndHint() this`
- `GetNotDrawLabelAndHint() boolean`
- `SetTabModeForFolder(value: boolean) this`
- `GetTabModeForFolder() boolean`
- `AddAliases(aliases: Array<string>) this`
- `SaveValue() this`
- `LoadValue(processCallbacks?: boolean) this`
- `GetConfigKey() string`
- `GetGeneratedConfigKey() string`
- `SetOverridenConfigKey(key: string) this`
- `SetOrdering(value: number) this`
- `GetOrdering() number`
- `SetKeyDown(value: boolean) this`
- `SetWheelStopReason(stopReason: Enum.WheelStopReason, maxTimePressInS?: number) this`
- `RemoveOption() void`

### Paragraphs

- The MenuOption class represents a menu option instance and provides APIs for reading, updating, and customizing it.
- Retrieves the option id.
- Returned:
- Retrieves the type.
- Checks whether it is folder.
- Register a function to be called when the option value changes.
- IMPORTANT
- useful if your chain registration not end with GetValue
- Retrieves the specified console variable value.
- Sets the specified console variable value.
- Retrieves the slot value by index.
- can only be used with ToggleBlock, MultiSelect or MultiComboBox
- Sets the slot value by index.
- Retrieves the slot value by key.
- Sets the slot value by key.
- Return object with value that will be updated when option value changes, will help to avoid explicit registration of OnChange
- Retrieves the priority select value.
- Set text that will be shown under the option
- Set text that will be shown if you hover over the option
- Set title that will be shown if you hover over the option
- Set image that will be shown if you hover over the option
- Sets the column.
- This will not work if used MergeWithNext
- Retrieves the column.
- Sets the merge with next.
- Merges this option with the next one in one group.
- Checks whether it is merged with next.
- Sets the tip locale.
- do same as SetTip
- Set translated string values for combobox
- Set translated option name
- Set the option as general for their group, if this option is toggled off, all other options in the group will be disabled
- works only with toggle options, this option should be the first one in the group
- Checks whether it is general.
- See SetGeneral
- Sets the general for tab.
- Checks whether it is general for tab.
- Sets the hidden.
- Checks whether it is hidden.
- Sets the slot hidden by index.
- Checks whether it is slot hidden by index.
- Sets the slot hidden by key.
- Checks whether it is slot hidden by key.
- Retrieves the name.
- Retrieves the name translated.
- Retrieves the childs.
- Checks whether the specified key was pressed once.
- Checks whether the specified key is currently held down.
- Retrieves the key string.
- Sets the image.
- Sets the disabled.
- Checks whether it is disabled.
- Sets the slot disabled by index.
- Checks whether it is slot disabled by index.
- Sets the slot disabled by key.
- Checks whether it is slot disabled by key.
- Sets the no title.
- Checks whether it is no title.
- Sets the toggle block tips translated.
- Sets the not strict align.
- Sets the toggle block locale.
- Sets the folder title translated.
- Sets the not draw label and hint.
- Provides access to not draw label and hint.
- Retrieves the not draw label and hint.
- Sets the tab mode for folder.
- Retrieves the tab mode for folder.
- Adds the aliases.
- Provides access to save value.
- Loads the value.
- Retrieves the config key.
- Retrieves the generated config key.
- Sets the overriden config key.
- Sets the ordering.
- Retrieves the ordering.
- Sets the key down.
- Sets the wheel stop reason.
- Removes the option.

### List Items

- number - The requested option id.
- Enum.MenuOptionType - The requested type.
- boolean - True if the condition is met, false otherwise.
- func MenuOptionChangeCallback <T> - function to call when option value changes
- initCall boolean (optional) - if true, function will be called with current value for initialization useful if your chain registration not end with GetValue (default is false)
- this - this instance, allowing method chaining
- T - The requested value.
- value T - The value to set or use.
- this - The current instance for chaining.
- index number - The index.
- value boolean - The value to set or use.
- key string - The key.
- { value: T } - The requested binded value.
- string[] - An array with the matching values.
- text string - text to show
- locale LocaleVariant (optional) - text locale, default is "en"
- imagePath string - path to the image
- value number - 0 - left, 1 - right
- number - The requested column.
- locale LocaleVariant - The locale to use.
- text string - The text value.
- locale LocaleVariant - locale of the values
- values string[] - array of translated values
- locale LocaleVariant - locale of the name
- name string - translated name
- slot number - The slot.
- string - The requested name.
- string - The requested name translated.
- MenuOption <any>[] - An array with the matching values.
- checkInputCapture boolean (optional) - The check input capture.
- string - The requested key string.
- imagePath string - The image path.
- hints string[] - The hints.
- values string[] - The values to use.
- title string - The title.
- aliases Array<string> - The aliases.
- processCallbacks boolean (optional) - The process callbacks.
- string - The requested config key.
- string - The requested generated config key.
- value number - The value to set or use.
- number - The requested ordering.
- stopReason Enum.WheelStopReason - The stop reason.
- maxTimePressInS number (optional) - The max time press in s.

### Inline Code Tokens

- `MenuOption`
- `GetOptionID()`
- `GetType()`
- `IsFolder()`
- `OnChange(func: MenuOptionChangeCallback<T>, initCall?: boolean)`
- `func`
- `initCall`
- `GetValue()`
- `SetValue(value: T)`
- `value`
- `GetSlotValueByIndex(index: number)`
- `index`
- `SetSlotValueByIndex(index: number, value: boolean)`
- `GetSlotValueByKey(key: string)`
- `key`
- `SetSlotValueByKey(key: string, value: boolean)`
- `GetBindedValue()`
- `GetPrioritySelectValue()`
- `SetTip(text: string, locale?: LocaleVariant)`
- `text`
- `locale`
- `SetTip2(text: string, locale?: LocaleVariant)`
- `SetTip2Title(text: string, locale?: LocaleVariant)`
- `SetTip2Image(imagePath: string)`
- `imagePath`
- `SetColumn(value: number)`
- `GetColumn()`
- `SetMergeWithNext(value: boolean)`
- `MergeWithNext()`
- `IsMergedWithNext()`
- `SetTipLocale(locale: LocaleVariant, text: string)`
- `SetComboBoxLocale(locale: LocaleVariant, values: string[])`
- `values`
- `SetNameLocale(locale: LocaleVariant, name: string)`
- `name`
- `SetGeneral(value: boolean)`
- `IsGeneral()`
- `SetGeneralForTab(value: boolean)`
- `IsGeneralForTab()`
- `SetHidden(value: boolean)`
- `IsHidden()`
- `SetSlotHiddenByIndex(slot: number, value: boolean)`
- `slot`
- `IsSlotHiddenByIndex(slot: number)`
- `SetSlotHiddenByKey(key: string, value: boolean)`
- `IsSlotHiddenByKey(key: string)`
- `GetName()`
- `GetNameTranslated()`
- `GetChilds()`
- `IsKeyDownOnce(checkInputCapture?: boolean)`
- `checkInputCapture`
- `IsKeyDown(checkInputCapture?: boolean)`
- `GetKeyString()`
- `SetImage(imagePath: string)`
- `SetDisabled(value: boolean)`
- `IsDisabled()`
- `SetSlotDisabledByIndex(slot: number, value: boolean)`
- `IsSlotDisabledByIndex(slot: number)`
- `SetSlotDisabledByKey(key: string, value: boolean)`
- `IsSlotDisabledByKey(key: string)`
- `SetNoTitle(value: boolean)`
- `IsNoTitle()`
- `SetToggleBlockTipsTranslated(locale: LocaleVariant, hints: string[])`
- `hints`
- `SetNotStrictAlign(value: boolean)`
- `SetToggleBlockLocale(locale: LocaleVariant, values: string[])`
- `SetFolderTitleTranslated(locale: LocaleVariant, title: string)`
- `title`
- `SetNotDrawLabelAndHint(value: boolean)`
- `NotDrawLabelAndHint()`
- `GetNotDrawLabelAndHint()`
- `SetTabModeForFolder(value: boolean)`
- `GetTabModeForFolder()`
- `AddAliases(aliases: Array<string>)`
- `aliases`
- `SaveValue()`
- `LoadValue(processCallbacks?: boolean)`
- `processCallbacks`
- `GetConfigKey()`
- `GetGeneratedConfigKey()`
- `SetOverridenConfigKey(key: string)`
- `SetOrdering(value: number)`
- `GetOrdering()`
- `SetKeyDown(value: boolean)`
- `SetWheelStopReason(stopReason: Enum.WheelStopReason, maxTimePressInS?: number)`
- `stopReason`
- `maxTimePressInS`
- `RemoveOption()`

## MiniMap

- Kind: `class`
- Path: `/en/guide/classes/minimap/index`
- URL: https://docs.melonity.gg/en/guide/classes/minimap/index

### Sections (H2)

- Functions

### Members / Signatures (H3/H4)

- `Ping(position: Vector, type: Enum.PingType, clientSide?: boolean) void`
- `DrawLine(start: Vector, end: Vector, clientSide?: boolean) void`
- `BeginLine(start: Vector, clientSide?: boolean) void`
- `ContinueLine(end: Vector, clientSide?: boolean) void`
- `AddIconByName(handle: MiniMapIconHandle | null, iconName: string, position: Vector, size: number | [number, number], timeInS?: number, color?: Color) MiniMapIconHandle`
- `AddIconByImage(handle: MiniMapIconHandle | null, image: Image, position: Vector, size: number | [number, number], timeInS?: number, color?: Color) MiniMapIconHandle`

### Paragraphs

- The MiniMap namespace provides helpers for pinging, drawing, and showing icons on the in-game minimap.
- Sends a minimap ping at the specified world position.
- Draws a minimap line between the specified world positions.
- Begins drawing a minimap line from the specified world position.
- Continues the current minimap line to the specified world position.
- Creates or updates a minimap icon by texture name.
- Returned:
- Creates or updates a minimap icon by image resource.

### List Items

- position Vector - The world position value.
- type Enum.PingType - The type.
- clientSide boolean (optional) - The client side.
- start Vector - The start position.
- end Vector - The end position.
- handle MiniMapIconHandle | null - The existing minimap icon handle, or null to create a new one.
- iconName string - The icon resource name.
- size number | [number, number] - The size value.
- timeInS number (optional) - The duration in seconds.
- color Color (optional) - The color value.
- MiniMapIconHandle - The result of the call.
- image Image - The image resource to use.

### Inline Code Tokens

- `MiniMap`
- `Ping(position: Vector, type: Enum.PingType, clientSide?: boolean)`
- `position`
- `type`
- `clientSide`
- `DrawLine(start: Vector, end: Vector, clientSide?: boolean)`
- `start`
- `end`
- `BeginLine(start: Vector, clientSide?: boolean)`
- `ContinueLine(end: Vector, clientSide?: boolean)`
- `AddIconByName(handle: MiniMapIconHandle | null, iconName: string, position: Vector, size: number | [number, number], timeInS?: number, color?: Color)`
- `handle`
- `null`
- `iconName`
- `size`
- `timeInS`
- `color`
- `AddIconByImage(handle: MiniMapIconHandle | null, image: Image, position: Vector, size: number | [number, number], timeInS?: number, color?: Color)`
- `image`

## NetChannel

- Kind: `class`
- Path: `/en/guide/classes/netchannel/index`
- URL: https://docs.melonity.gg/en/guide/classes/netchannel/index

### Sections (H2)

- Functions

### Members / Signatures (H3/H4)

- `GetLatency(type: Enum.Flow) number`
- `GetAvgLatency(type: Enum.Flow) number`
- `GetLatencyMs(type: Enum.Flow) number`
- `GetAvgLatencyMs(type: Enum.Flow) number`

### Paragraphs

- The NetChannel namespace provides helpers for reading current and average network latency values.
- Retrieves the latency.
- Returned:
- Retrieves the avg latency.
- Retrieves the latency ms.
- Retrieves the avg latency ms.

### List Items

- type Enum.Flow - The type.
- number - The requested latency.
- number - The requested avg latency.
- number - The requested latency ms.
- number - The requested avg latency ms.

### Inline Code Tokens

- `NetChannel`
- `GetLatency(type: Enum.Flow)`
- `type`
- `GetAvgLatency(type: Enum.Flow)`
- `GetLatencyMs(type: Enum.Flow)`
- `GetAvgLatencyMs(type: Enum.Flow)`

## NetMessages

- Kind: `class`
- Path: `/en/guide/classes/netmessages/index`
- URL: https://docs.melonity.gg/en/guide/classes/netmessages/index

### Sections (H2)

- Type Aliases
- Functions

### Members / Signatures (H3/H4)

- `Callback<T> (obj: T) => boolean | void`
- `CallbackReadOnly<T> (obj: T) => void`
- `Send<T>(obj: T, msgName: string, reliable?: boolean) void`
- `Recv<T>(obj: T, msgName: string, reliable?: boolean) void`
- `RegisterRecv<T>(msgName: string, callback: Callback<T>) void`
- `RegisterRecvReadOnly<T>(msgName: string, callback: CallbackReadOnly<T>) void`
- `UnregisterRecv<T>(callback: Callback<T>) void`
- `UnregisterRecvReadOnly<T>(callback: Callback<T>) void`
- `RegisterSend<T>(msgName: string, callback: Callback<T>) void`
- `RegisterSendReadOnly<T>(msgName: string, callback: CallbackReadOnly<T>) void`
- `UnregisterSend<T>(callback: Callback<T>) void`
- `UnregisterSendReadOnly<T>(callback: Callback<T>) void`
- `ToDataView(data: string) DataView`
- `FromDataView(data: DataView) string`

### Paragraphs

- The NetMessages namespace provides helpers for sending, receiving, and intercepting network messages.
- Defines a mutable callback signature used by NetMessages registration APIs.
- Defines a read-only callback signature used by NetMessages registration APIs.
- Force client to send a passed message.
- Force client to receive a passed message.
- Register a callback to be called when a message is received. Message will be received on the next main loop update.
- Register a callback to be called when a message is received. Message can be already received.
- Unregisters a previously registered receive callback.
- Unregisters a previously registered read-only receive callback.
- Register a callback to be called when a message is sent. Message will be sent on the next main loop update.
- Register a callback to be called when a message is sent. Message can be already sent.
- Unregisters a previously registered send callback.
- Unregisters a previously registered read-only send callback.
- Converts a string payload into a DataView that can be used with NetMessages APIs.
- Returned:
- Converts a DataView payload back into its string representation.

### List Items

- obj T - The object to receive the message.
- msgName string - The name of the message to receive.
- reliable boolean (optional) - Whether the message should be sent reliably. Default is true.
- msgName string - The network message name.
- callback Callback<T> - The callback function to register.
- callback CallbackReadOnly<T> - The callback function to register.
- data string - The raw payload data.
- DataView - The result of the call.
- data DataView - The raw payload data.
- string - The result of the call.

### Inline Code Tokens

- `NetMessages`
- `Callback<T>`
- `CallbackReadOnly<T>`
- `Send<T>(obj: T, msgName: string, reliable?: boolean)`
- `obj`
- `msgName`
- `reliable`
- `Recv<T>(obj: T, msgName: string, reliable?: boolean)`
- `RegisterRecv<T>(msgName: string, callback: Callback<T>)`
- `callback`
- `RegisterRecvReadOnly<T>(msgName: string, callback: CallbackReadOnly<T>)`
- `UnregisterRecv<T>(callback: Callback<T>)`
- `UnregisterRecvReadOnly<T>(callback: Callback<T>)`
- `RegisterSend<T>(msgName: string, callback: Callback<T>)`
- `RegisterSendReadOnly<T>(msgName: string, callback: CallbackReadOnly<T>)`
- `UnregisterSend<T>(callback: Callback<T>)`
- `UnregisterSendReadOnly<T>(callback: Callback<T>)`
- `ToDataView(data: string)`
- `DataView`
- `data`
- `FromDataView(data: DataView)`

## Panorama

- Kind: `class`
- Path: `/en/guide/classes/panorama/index`
- URL: https://docs.melonity.gg/en/guide/classes/panorama/index

### Sections (H2)

- Functions

### Members / Signatures (H3/H4)

- `FindByNameAll(name: string) PanoramaPanel []`
- `FindByName(name: string) PanoramaPanel | null`
- `GetDashboardRoot() PanoramaPanel | null`
- `GetDotaHudRoot() PanoramaPanel | null`
- `CreatePanel(type: string, parent: PanoramaPanel, id: string) PanoramaPanel`

### Paragraphs

- The Panorama namespace provides helpers for finding, creating, and interacting with Panorama panels.
- Finds all Panorama panels with the specified name.
- Returned:
- Finds the first Panorama panel with the specified name.
- Retrieves the root dashboard Panorama panel.
- Retrieves the root Dota HUD Panorama panel.
- Creates a new Panorama panel under the specified parent.

### List Items

- name string - The name.
- PanoramaPanel [] - An array with the matching values.
- PanoramaPanel | null - The matching object, or null if it is not available.
- type string - The type.
- parent PanoramaPanel - The parent panel.
- id string - The id.
- PanoramaPanel - The result of the call.

### Inline Code Tokens

- `Panorama`
- `FindByNameAll(name: string)`
- `name`
- `FindByName(name: string)`
- `null`
- `GetDashboardRoot()`
- `GetDotaHudRoot()`
- `CreatePanel(type: string, parent: PanoramaPanel, id: string)`
- `type`
- `parent`
- `id`

## PanoramaPanel

- Kind: `class`
- Path: `/en/guide/classes/panorama/PanoramaPanel`
- URL: https://docs.melonity.gg/en/guide/classes/panorama/PanoramaPanel

### Sections (H2)

- Properties
- Methods

### Members / Signatures (H3/H4)

- `handle number`
- `is_valid boolean`
- `SetOpacity(val: number) void`
- `GetOpacity() number`
- `GetID() string`
- `GetPosition() [number, number]`
- `GetChilds() PanoramaPanel []`
- `FindChild(name: string) PanoramaPanel | null`
- `FindChildFromPath(path: string[]) PanoramaPanel | null`
- `GetSize() [number, number]`
- `GetOffset() [number, number]`
- `SetForceDraw(val: boolean) void`
- `Invalidate() void`
- `IsValid() boolean`
- `LoadLayout(layoutFile: string, option1: boolean, option2: boolean) void`
- `RunScript(script: string, scriptLocation?: string) void`
- `DeleteAsync(delay?: number) void`

### Paragraphs

- The PanoramaPanel class provides access to Panorama panel state, traversal, and script interactions.
- The handle.
- The is valid.
- Sets the opacity.
- Retrieves the opacity.
- Returned:
- Retrieves the HTTP request identifier.
- Retrieves the position.
- Retrieves the childs.
- Finds the child.
- Finds the child from path.
- Retrieves the size.
- Retrieves the offset.
- Sets the force draw.
- Provides access to invalidate.
- Checks whether it is valid.
- Loads the layout.
- Provides access to run script.
- Provides access to delete async.

### List Items

- val number - The val.
- number - The requested opacity.
- string - The requested id.
- [number, number] - The requested position.
- PanoramaPanel [] - An array with the matching values.
- name string - The name.
- PanoramaPanel | null - The matching object, or null if it is not available.
- path string[] - The path.
- [number, number] - The requested size.
- [number, number] - The requested offset.
- val boolean - The val.
- boolean - True if the condition is met, false otherwise.
- layoutFile string - The layout file.
- option1 boolean - The option1.
- option2 boolean - The option2.
- script string - The script.
- scriptLocation string (optional) - The script location.
- delay number (optional) - The delay.

### Inline Code Tokens

- `PanoramaPanel`
- `handle`
- `is_valid`
- `SetOpacity(val: number)`
- `val`
- `GetOpacity()`
- `GetID()`
- `GetPosition()`
- `GetChilds()`
- `FindChild(name: string)`
- `name`
- `null`
- `FindChildFromPath(path: string[])`
- `path`
- `GetSize()`
- `GetOffset()`
- `SetForceDraw(val: boolean)`
- `Invalidate()`
- `IsValid()`
- `LoadLayout(layoutFile: string, option1: boolean, option2: boolean)`
- `layoutFile`
- `option1`
- `option2`
- `RunScript(script: string, scriptLocation?: string)`
- `script`
- `scriptLocation`
- `DeleteAsync(delay?: number)`
- `delay`

## Particle

- Kind: `class`
- Path: `/en/guide/classes/particle/index`
- URL: https://docs.melonity.gg/en/guide/classes/particle/index

### Sections (H2)

- Methods

### Members / Signatures (H3/H4)

- `static CreateCircle(particle: Particle | null, position: Vector | Entity, radius: number) Particle`
- `static CreateColoredCircle(particle: Particle | null, position: Vector | Entity, radius: number, color: Color, dashAlpha: number) Particle`
- `static Create(particlePath: string, attachmentType: Enum.ParticleAttachment, attachmentEntity?: Entity | null) Particle`
- `static GetParticleName(nameIndex: bigint) string`
- `SetControl(controlIndex: number, vector: Vector) void`
- `Destroy(immediate?: boolean) void`

### Paragraphs

- The Particle class provides helpers for creating and updating particle instances.
- Creates a circle particle (green circle).
- IMPORTANT
- Using "particles/ui_mouseactions/range_display.vpcf" particle. Cant change the radius of the particle after creation.
- Returned:
- Creates a colored circle particle.
- Using "particles/ui_mouseactions/drag_selected_ring.vpcf" particle. Cant change the radius and color of the particle after creation.
- Creates a new particle.
- Retrieves the particle name for the specified name index.
- Sets the control of a particle.
- Destroys a particle.

### List Items

- particle Particle | null - The particle to update position. If null, a new particle will be created.
- position Vector | Entity - The position or entity to create the circle at.
- radius number - The radius of the circle.
- Particle - A Particle object representing the circle.
- particle Particle | null - The particle to create the colored circle from. Can be null.
- position Vector | Entity - The position or entity to create the colored circle at.
- color Color - The color of the circle.
- dashAlpha number - The alpha value for the dash.
- Particle - A Particle object representing the colored circle.
- particlePath string - The path of the particle. like "particles/ui_mouseactions/range_display.vpcf"
- attachmentType Enum.ParticleAttachment - The type of attachment for the particle.
- attachmentEntity Entity | null (optional) - The entity to attach the particle to. Optional.
- Particle - A new Particle object.
- nameIndex bigint - The particle name index.
- string - The requested particle name.
- controlIndex number - The index of the control.
- vector Vector - The vector to set the control to.
- immediate boolean (optional) - Whether to destroy the particle immediately. Defaults to true.

### Inline Code Tokens

- `Particle`
- `static CreateCircle(particle: Particle | null, position: Vector | Entity, radius: number)`
- `particle`
- `position`
- `radius`
- `static CreateColoredCircle(particle: Particle | null, position: Vector | Entity, radius: number, color: Color, dashAlpha: number)`
- `color`
- `dashAlpha`
- `static Create(particlePath: string, attachmentType: Enum.ParticleAttachment, attachmentEntity?: Entity | null)`
- `particlePath`
- `attachmentType`
- `attachmentEntity`
- `static GetParticleName(nameIndex: bigint)`
- `nameIndex`
- `SetControl(controlIndex: number, vector: Vector)`
- `controlIndex`
- `vector`
- `Destroy(immediate?: boolean)`
- `immediate`

## BlendState

- Kind: `class`
- Path: `/en/guide/classes/renderer/BlendState`
- URL: https://docs.melonity.gg/en/guide/classes/renderer/BlendState

### Sections (H2)

- Methods

### Members / Signatures (H3/H4)

- `constructor(value: BlendStateValue) BlendState`
- `GetIndex() number`

### Paragraphs

- The BlendState class represents a renderer blend state configuration.
- Creates a new BlendState instance.
- Returned:
- Retrieves the index.

### List Items

- value BlendStateValue - The value to set or use.
- BlendState - The result of the call.
- number - The requested index.

### Inline Code Tokens

- `BlendState`
- `constructor(value: BlendStateValue)`
- `value`
- `GetIndex()`

## Font

- Kind: `class`
- Path: `/en/guide/classes/renderer/Font`
- URL: https://docs.melonity.gg/en/guide/classes/renderer/Font

### Sections (H2)

- Methods

### Members / Signatures (H3/H4)

- `constructor(name: string, options?: LoadFontOptions) Font`
- `GetTextSize(text: string) [number, number]`
- `GetAlignmentOffset(text: string, alignment?: Enum.ContentAlign) [number, number]`
- `DrawText(x: number, y: number, text: string) void`
- `DrawWorldText(vec: Vector, text: string, xOffset?: number, yOffset?: number) void`

### Paragraphs

- The Font class provides text measurement and drawing helpers for the renderer.
- Creates a new Font instance.
- Returned:
- Retrieves the text size.
- Retrieves the alignment offset.
- Draws the text.
- Draws the world text.

### List Items

- name string - The name.
- options LoadFontOptions (optional) - The options.
- Font - The result of the call.
- text string - The text value.
- [number, number] - The requested text size.
- alignment Enum.ContentAlign (optional) - The alignment.
- [number, number] - The requested alignment offset.
- x number - The x coordinate.
- y number - The y coordinate.
- vec Vector - The world position vector.
- xOffset number (optional) - The x offset.
- yOffset number (optional) - The y offset.

### Inline Code Tokens

- `Font`
- `constructor(name: string, options?: LoadFontOptions)`
- `name`
- `options`
- `GetTextSize(text: string)`
- `text`
- `GetAlignmentOffset(text: string, alignment?: Enum.ContentAlign)`
- `alignment`
- `DrawText(x: number, y: number, text: string)`
- `x`
- `y`
- `DrawWorldText(vec: Vector, text: string, xOffset?: number, yOffset?: number)`
- `vec`
- `xOffset`
- `yOffset`

## Image

- Kind: `class`
- Path: `/en/guide/classes/renderer/Image`
- URL: https://docs.melonity.gg/en/guide/classes/renderer/Image

### Sections (H2)

- Methods

### Members / Signatures (H3/H4)

- `constructor(name: string, options?: LoadImageOptions) Image`
- `GetSize() [number, number]`
- `GetPath() string`
- `GetIndex() number`
- `DrawImage(x: number, y: number, width: number, height: number, rounding?: number, corners?: Enum.RoundCorners, uv1?: [number, number], uv2?: [number, number]) void`
- `DrawImageQuad(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number, uv1?: [number, number], uv2?: [number, number], uv3?: [number, number], uv4?: [number, number]) void`
- `DrawWorldImage(vec: Vector, width: number, height: number, xOffset?: number, yOffset?: number, rounding?: number, corners?: Enum.RoundCorners, uvMin?: [number, number], uvMax?: [number, number]) void`
- `IsLoaded() boolean`
- `Load() void`
- `IsValid() boolean`

### Paragraphs

- The Image class provides helpers for loading and drawing image resources.
- Creates a new Image instance.
- Returned:
- Retrieves the size.
- Retrieves the path.
- Retrieves the index.
- Draws the image.
- Draws the image quad.
- Draws the world image.
- Checks whether it is loaded.
- Loads the load.
- Checks whether it is valid.

### List Items

- name string - The name.
- options LoadImageOptions (optional) - The options.
- Image - The result of the call.
- [number, number] - The requested size.
- string - The requested path.
- number - The requested index.
- x number - The x coordinate.
- y number - The y coordinate.
- width number - The width value.
- height number - The height value.
- rounding number (optional) - The rounding.
- corners Enum.RoundCorners (optional) - The corners.
- uv1 [number, number] (optional) - The uv1.
- uv2 [number, number] (optional) - The uv2.
- x1 number - The x1.
- y1 number - The y1.
- x2 number - The x2.
- y2 number - The y2.
- x3 number - The x3.
- y3 number - The y3.
- x4 number - The x4.
- y4 number - The y4.
- uv3 [number, number] (optional) - The uv3.
- uv4 [number, number] (optional) - The uv4.
- vec Vector - The world position vector.
- xOffset number (optional) - The x offset.
- yOffset number (optional) - The y offset.
- uvMin [number, number] (optional) - The uv min.
- uvMax [number, number] (optional) - The uv max.
- boolean - True if the condition is met, false otherwise.

### Inline Code Tokens

- `Image`
- `constructor(name: string, options?: LoadImageOptions)`
- `name`
- `options`
- `GetSize()`
- `GetPath()`
- `GetIndex()`
- `DrawImage(x: number, y: number, width: number, height: number, rounding?: number, corners?: Enum.RoundCorners, uv1?: [number, number], uv2?: [number, number])`
- `x`
- `y`
- `width`
- `height`
- `rounding`
- `corners`
- `uv1`
- `uv2`
- `DrawImageQuad(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number, uv1?: [number, number], uv2?: [number, number], uv3?: [number, number], uv4?: [number, number])`
- `x1`
- `y1`
- `x2`
- `y2`
- `x3`
- `y3`
- `x4`
- `y4`
- `uv3`
- `uv4`
- `DrawWorldImage(vec: Vector, width: number, height: number, xOffset?: number, yOffset?: number, rounding?: number, corners?: Enum.RoundCorners, uvMin?: [number, number], uvMax?: [number, number])`
- `vec`
- `xOffset`
- `yOffset`
- `uvMin`
- `uvMax`
- `IsLoaded()`
- `Load()`
- `IsValid()`

## Renderer

- Kind: `class`
- Path: `/en/guide/classes/renderer/index`
- URL: https://docs.melonity.gg/en/guide/classes/renderer/index

### Sections (H2)

- Interfaces
- Type Aliases
- Functions

### Members / Signatures (H3/H4)

- `ClipRect`
- `DrawOptions`
- `LoadFontOptions`
- `LoadImageOptions`
- `Vertex`
- `BlendStateValue`
- `LoadedImage Image`
- `DrawOutlineRect(x: number, y: number, width: number, height: number, rounding?: number, corners?: Enum.RoundCorners, thickness?: number, type?: Enum.OutlineType) void`
- `DrawOutlineQuad(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number, thickness: number) void`
- `DrawWorldOutlineRect(vec: Vector, width: number, height: number, xOffset?: number, yOffset?: number, rounding?: number, corners?: Enum.RoundCorners, thickness?: number) void`
- `DrawFilledRect(x: number, y: number, width: number, height: number, rounding?: number, corners?: Enum.RoundCorners) void`
- `DrawFilledQuad(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number) void`
- `DrawWorldFilledRect(vec: Vector, width: number, height: number, xOffset?: number, yOffset?: number, rounding?: number, corners?: Enum.RoundCorners) void`
- `DrawFilledRectMultiColor(x: number, y: number, width: number, height: number, uprLeft: number, uprRight: number, botRight: number, botLeft: number, rounding?: number, corners?: Enum.RoundCorners) void`
- `DrawOutlineCircle(centerX: number, centerY: number, radius: number, thickness?: number, segments?: number, startAngleInDegrees?: number, endAngleInDegrees?: number, pathType?: Enum.CirclePathType) void`
- `DrawFilledCircle(centerX: number, centerY: number, radius: number, segments?: number, startAngleInDegrees?: number, endAngleInDegrees?: number) void`
- `DrawLine(x1: number, y1: number, x2: number, y2: number, thickness?: number) void`
- `DrawWorldLine(vec1: Vector, vec2: Vector, thickness?: number) void`
- `LoadFont(name: string, size: number, weight: Enum.FontWeight, flags?: Enum.FontFlags, options?: LoadFontOptions) Font`
- `GetTextSize(font: Font, text: string) [number, number]`
- `DrawText(font: Font, x: number, y: number, text: string) void`
- `DrawTextInRect(font: Font, x: number, y: number, width: number, height: number, text: string) void`
- `DrawTextCentered(font: Font, x: number, y: number, text: string, time?: number) void`
- `DrawWorldText(font: Font, vec: Vector, text: string, xOffset?: number, yOffset?: number) void`
- `LoadImage(fileName: string, svgWidth?: number, svgHeight?: number) Image`
- `DrawImage(image: Image, x: number, y: number, width: number, height: number, rounding?: number, corners?: Enum.RoundCorners, uvMin?: [number, number], uvMax?: [number, number]) void`
- `DrawImageQuad(image: Image, x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number, uv1?: [number, number], uv2?: [number, number], uv3?: [number, number], uv4?: [number, number]) void`
- `DrawWorldImage(image: Image, vec1: Vector, width: number, height: number, xOffset?: number, yOffset?: number) void`
- `SetDrawColor(r: number, g: number, b: number, a: number) void`
- `SetDrawColor(color: Color) void`
- `PushDrawOptions(options: DrawOptions) void`
- `PopDrawOptions(count?: number) void`
- `PushDrawPriority(val: number) void`
- `PushDrawTime(timeInS: number) void`
- `PushDrawAlign(align: Enum.ContentAlign) void`
- `PushDrawCentered() void`
- `SetTopMost(enable: boolean) void`
- `IsOnScreen(x: number, y: number) boolean`
- `GetScreenSize() [number, number]`
- `GetFullScreenClipRect() ClipRect`
- `GetMiniMapRect() [number, number, number, number]`
- `GetImagePath(image: Image) string`
- `GetAlignment() Enum.ContentAlign`
- `GetPriority() number`
- `WorldToScreen(pos: Vector, onScreenCheck?: boolean) [number, number, boolean]`
- `ScreenToWorld(x: number, y: number) Vector | null`
- `MapToWorld(x: number, y: number) [number, number]`
- `WorldToMap(x: number, y: number) [number, number]`
- `GetAlignmentOffset(width: number, height: number, align?: Enum.ContentAlign) [number, number]`
- `DrawPolygon(vertexes: Vertexes, x?: number, y?: number) void`
- `DrawTexturedPolygon(vertexes: Vertexes, image: Image, x?: number, y?: number) void`
- `PushRenderTarget(texture: Texture) void`
- `SetRenderTarget(texture: Texture) void`
- `PopRenderTarget() void`
- `SetOriginalRenderTarget() void`
- `PushShader(shader: Shader) void`
- `PopShader() void`
- `PushBlendState(blendState: BlendState) void`
- `PopBlendState() void`
- `DrawScreenRegion(screenX: number, screenY: number, screenW: number, screenH: number, drawX: number, drawY: number, drawW: number, drawH: number) void`

### Paragraphs

- The Renderer namespace provides drawing, text, image, and render-state APIs exposed by the declarations.
- The ClipRect interface describes the corresponding object shape exposed by the declarations.
- The DrawOptions interface describes the corresponding object shape exposed by the declarations.
- The LoadFontOptions interface describes the corresponding object shape exposed by the declarations.
- The LoadImageOptions interface describes the corresponding object shape exposed by the declarations.
- The Vertex interface describes the corresponding object shape exposed by the declarations.
- The BlendStateValue interface describes the corresponding object shape exposed by the declarations.
- Alias for Image .
- WARNING
- Deprecated. use Image class instead
- Draws an outlined rectangle to the screen at the specified x and y coordinates, with the specified width and height.
- Draws the outline quad.
- Draws an outlined rectangle to the screen at the specified position in the world. The xOffset and yOffset parameters can be used to adjust the position of the rectangle on the screen after it has been projected into 2D space. x - xOffset = resultX and y - yOffset = resultY
- Draws a filled rectangle to the screen at the specified x and y coordinates, with the specified width and height. The optional rounding parameter can be used to round the corners of the rectangle, and the corners parameter can be used to specify which corners to round. The color of the rectangle can be set by calling the SetDrawColor function before calling this function.
- Draws the filled quad.
- Draws the world filled rect.
- Draws a filled rectangle to the screen at the specified x and y coordinates, with the specified width and height. The colors of the rectangle's corners can be specified using the uprLeft, uprRight, botRight, and botLeft parameters. The optional rounding and corners parameters work the same as in the DrawFilledRect function.
- Draws the outline circle.
- Draws the filled circle.
- Draws a minimap line between two positions.
- Draws the world line.
- Loads the font.
- Returned:
- Retrieves the text size.
- Draws the text.
- Draws the text in rect.
- Draws the text centered.
- Draws the world text.
- Loads the image.
- Draws the image.
- Draws the image quad.
- Draws the world image.
- Sets the current drawing color.
- Pushes the draw options.
- Pops the draw options.
- alias for PushDrawOptions({priority: val})
- alias for PushDrawOptions({time: time})
- alias for PushDrawOptions({align: align})
- alias for PushDrawOptions({align: Enum.ContentAlign.CenterXY})
- Sets the top most.
- Deprecated. use PushDrawPriority
- Checks whether it is on screen.
- Retrieves the screen size.
- Retrieves the full screen clip rect.
- Retrieves the mini map rect.
- Retrieves the image path.
- Retrieves the alignment.
- Retrieves the priority.
- Provides access to world to screen.
- Provides access to screen to world.
- Provides access to map to world.
- Provides access to world to map.
- Retrieves the alignment offset.
- Draws the polygon.
- Draws the textured polygon.
- Pushes the render target.
- Sets the render target.
- Deprecated. use PushRenderTarget instead
- Pops the render target.
- Sets the original render target.
- Deprecated. use PopRenderTarget instead
- Pushes the shader.
- Pops the shader.
- Pushes the blend state.
- Pops the blend state.
- Draws the screen region.

### List Items

- min Vector - The min.
- max Vector - The max.
- intersect boolean (optional) - The intersect.
- align Enum.ContentAlign (optional) - The align.
- time number (optional) - The time.
- priority number (optional) - The priority.
- clipRect ClipRect (optional) - The clip rect.
- isOnDraw boolean (optional) - The is on draw.
- drawOverUI boolean (optional) - The draw over ui.
- Weight number (optional) - The weight.
- Width number (optional) - The width.
- OpticalSize number (optional) - The optical size.
- GRAD number (optional) - The grad.
- Slant number (optional) - The slant.
- XTRA number (optional) - The xtra.
- XOPQ number (optional) - The xopq.
- YOPQ number (optional) - The yopq.
- YTLC number (optional) - The ytlc.
- YTUC number (optional) - The ytuc.
- YTAS number (optional) - The ytas.
- YTDE number (optional) - The ytde.
- YTFI number (optional) - The ytfi.
- spacingEM number (optional) - The spacing em.
- spacingPX number (optional) - The spacing px.
- Flags Enum.FontFlags (optional) - The flags.
- Size number (optional) - The size.
- svgWidth number (optional) - The svg width.
- svgHeight number (optional) - The svg height.
- position Vector - The position.
- texCoord Vector - The tex coord.
- alpha_to_coverage_enabled boolean - The alpha to coverage enabled.
- independent_blend_enable boolean - The independent blend enable.
- blend_enabled boolean - The blend enabled.
- src_blend Enum.BlendStateBlend - The src blend.
- dest_blend Enum.BlendStateBlend - The dest blend.
- blend_op Enum.BlendStateBlendOp - The blend op.
- src_blend_alpha Enum.BlendStateBlend - The src blend alpha.
- dest_blend_alpha Enum.BlendStateBlend - The dest blend alpha.
- blend_op_alpha Enum.BlendStateBlendOp - The blend op alpha.
- render_target_write_mask number - The render target write mask.
- x number - The x coordinate of the top-left corner of the rectangle.
- y number - The y coordinate of the top-left corner of the rectangle.
- width number - The width of the rectangle.
- height number - The height of the rectangle.
- rounding number (optional) - The radius of the rounded corners of the rectangle, in pixels. (optional)
- corners Enum.RoundCorners (optional) - The corners of the rectangle that should be rounded. (optional)
- thickness number (optional) - The thickness of the outline, in pixels. (optional)
- type Enum.OutlineType (optional) - The outline type render
- x1 number - The x1.
- y1 number - The y1.
- x2 number - The x2.
- y2 number - The y2.
- x3 number - The x3.
- y3 number - The y3.
- x4 number - The x4.
- y4 number - The y4.
- thickness number - The thickness.
- vec Vector - The position of the top-left corner of the rectangle in the world.
- xOffset number (optional) - The amount to offset the x coordinate by. (optional)
- yOffset number (optional) - The amount to offset the y coordinate by. (optional)
- vec Vector - The world position vector.
- width number - The width value.
- height number - The height value.
- xOffset number (optional) - The x offset.
- yOffset number (optional) - The y offset.
- rounding number (optional) - The rounding.
- corners Enum.RoundCorners (optional) - The corners.
- uprLeft number - The color of the top-left corner of the rectangle.
- uprRight number - The color of the top-right corner of the rectangle.
- botRight number - The color of the bottom-right corner of the rectangle.
- botLeft number - The color of the bottom-left corner of the rectangle.
- centerX number - The center x.
- centerY number - The center y.
- radius number - The radius.
- thickness number (optional) - The thickness.
- segments number (optional) - The segments.
- startAngleInDegrees number (optional) - The start angle in degrees.
- endAngleInDegrees number (optional) - The end angle in degrees.
- pathType Enum.CirclePathType (optional) - The path type.
- vec1 Vector - The vec1.
- vec2 Vector - The vec2.
- name string - The name.
- size number - The size.
- weight Enum.FontWeight - The weight.
- flags Enum.FontFlags (optional) - The flags.
- options LoadFontOptions (optional) - The options.
- Font - The result of the call.
- font Font - The font instance to use.
- text string - The text value.
- [number, number] - The requested text size.
- x number - The x coordinate.
- y number - The y coordinate.
- fileName string - The file name.
- Image - The result of the call.
- image Image - The image resource to use.
- uvMin [number, number] (optional) - The uv min.
- uvMax [number, number] (optional) - The uv max.
- uv1 [number, number] (optional) - The uv1.
- uv2 [number, number] (optional) - The uv2.
- uv3 [number, number] (optional) - The uv3.
- uv4 [number, number] (optional) - The uv4.
- r number - The r.
- g number - The g.
- b number - The b.
- a number - The a.
- color Color - The color value to use.
- options DrawOptions - The options.
- count number (optional) - The count.
- val number - The val.
- timeInS number - The time in s.
- align Enum.ContentAlign - The align.
- enable boolean - The enable.
- boolean - True if the condition is met, false otherwise.
- [number, number] - The requested screen size.
- ClipRect - The requested full screen clip rect.
- [number, number, number, number] - The requested mini map rect.
- string - The requested image path.
- Enum.ContentAlign - The requested alignment.
- number - The requested priority.
- pos Vector - The pos.
- onScreenCheck boolean (optional) - The on screen check.
- [number, number, boolean] - The result of the call.
- Vector | null - The matching object, or null if it is not available.
- [number, number] - The result of the call.
- [number, number] - The requested alignment offset.
- vertexes Vertexes - The vertexes.
- x number (optional) - if pass x argument function will apply x offset for all vertexes before draw
- y number (optional) - if pass y argument function will apply y offset for all vertexes before draw
- texture Texture - The texture.
- shader Shader - The shader.
- blendState BlendState - The blend state.
- screenX number - The screen x.
- screenY number - The screen y.
- screenW number - The screen w.
- screenH number - The screen h.
- drawX number - The draw x.
- drawY number - The draw y.
- drawW number - The draw w.
- drawH number - The draw h.

### Inline Code Tokens

- `Renderer`
- `ClipRect`
- `min`
- `max`
- `intersect`
- `DrawOptions`
- `align`
- `time`
- `priority`
- `clipRect`
- `isOnDraw`
- `drawOverUI`
- `LoadFontOptions`
- `Weight`
- `Width`
- `OpticalSize`
- `GRAD`
- `Slant`
- `XTRA`
- `XOPQ`
- `YOPQ`
- `YTLC`
- `YTUC`
- `YTAS`
- `YTDE`
- `YTFI`
- `spacingEM`
- `spacingPX`
- `Flags`
- `Size`
- `LoadImageOptions`
- `svgWidth`
- `svgHeight`
- `Vertex`
- `position`
- `texCoord`
- `BlendStateValue`
- `alpha_to_coverage_enabled`
- `independent_blend_enable`
- `blend_enabled`
- `src_blend`
- `dest_blend`
- `blend_op`
- `src_blend_alpha`
- `dest_blend_alpha`
- `blend_op_alpha`
- `render_target_write_mask`
- `LoadedImage`
- `Image`
- `DrawOutlineRect(x: number, y: number, width: number, height: number, rounding?: number, corners?: Enum.RoundCorners, thickness?: number, type?: Enum.OutlineType)`
- `x`
- `y`
- `width`
- `height`
- `rounding`
- `corners`
- `thickness`
- `type`
- `DrawOutlineQuad(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number, thickness: number)`
- `x1`
- `y1`
- `x2`
- `y2`
- `x3`
- `y3`
- `x4`
- `y4`
- `DrawWorldOutlineRect(vec: Vector, width: number, height: number, xOffset?: number, yOffset?: number, rounding?: number, corners?: Enum.RoundCorners, thickness?: number)`
- `vec`
- `xOffset`
- `yOffset`
- `DrawFilledRect(x: number, y: number, width: number, height: number, rounding?: number, corners?: Enum.RoundCorners)`
- `DrawFilledQuad(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number)`
- `DrawWorldFilledRect(vec: Vector, width: number, height: number, xOffset?: number, yOffset?: number, rounding?: number, corners?: Enum.RoundCorners)`
- `DrawFilledRectMultiColor(x: number, y: number, width: number, height: number, uprLeft: number, uprRight: number, botRight: number, botLeft: number, rounding?: number, corners?: Enum.RoundCorners)`
- `uprLeft`
- `uprRight`
- `botRight`
- `botLeft`
- `DrawOutlineCircle(centerX: number, centerY: number, radius: number, thickness?: number, segments?: number, startAngleInDegrees?: number, endAngleInDegrees?: number, pathType?: Enum.CirclePathType)`
- `centerX`
- `centerY`
- `radius`
- `segments`
- `startAngleInDegrees`
- `endAngleInDegrees`
- `pathType`
- `DrawFilledCircle(centerX: number, centerY: number, radius: number, segments?: number, startAngleInDegrees?: number, endAngleInDegrees?: number)`
- `DrawLine(x1: number, y1: number, x2: number, y2: number, thickness?: number)`
- `DrawWorldLine(vec1: Vector, vec2: Vector, thickness?: number)`
- `vec1`
- `vec2`
- `LoadFont(name: string, size: number, weight: Enum.FontWeight, flags?: Enum.FontFlags, options?: LoadFontOptions)`
- `name`
- `size`
- `weight`
- `flags`
- `options`
- `GetTextSize(font: Font, text: string)`
- `font`
- `text`
- `DrawText(font: Font, x: number, y: number, text: string)`
- `DrawTextInRect(font: Font, x: number, y: number, width: number, height: number, text: string)`
- `DrawTextCentered(font: Font, x: number, y: number, text: string, time?: number)`
- `DrawWorldText(font: Font, vec: Vector, text: string, xOffset?: number, yOffset?: number)`
- `LoadImage(fileName: string, svgWidth?: number, svgHeight?: number)`
- `fileName`
- `DrawImage(image: Image, x: number, y: number, width: number, height: number, rounding?: number, corners?: Enum.RoundCorners, uvMin?: [number, number], uvMax?: [number, number])`
- `image`
- `uvMin`
- `uvMax`
- `DrawImageQuad(image: Image, x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number, uv1?: [number, number], uv2?: [number, number], uv3?: [number, number], uv4?: [number, number])`
- `uv1`
- `uv2`
- `uv3`
- `uv4`
- `DrawWorldImage(image: Image, vec1: Vector, width: number, height: number, xOffset?: number, yOffset?: number)`
- `SetDrawColor(r: number, g: number, b: number, a: number)`
- `r`
- `g`
- `b`
- `a`
- `SetDrawColor(color: Color)`
- `color`
- `PushDrawOptions(options: DrawOptions)`
- `PopDrawOptions(count?: number)`
- `count`
- `PushDrawPriority(val: number)`
- `val`
- `PushDrawTime(timeInS: number)`
- `timeInS`
- `PushDrawAlign(align: Enum.ContentAlign)`
- `PushDrawCentered()`
- `SetTopMost(enable: boolean)`
- `enable`
- `IsOnScreen(x: number, y: number)`
- `GetScreenSize()`
- `GetFullScreenClipRect()`
- `GetMiniMapRect()`
- `GetImagePath(image: Image)`
- `GetAlignment()`
- `GetPriority()`
- `WorldToScreen(pos: Vector, onScreenCheck?: boolean)`
- `pos`
- `onScreenCheck`
- `ScreenToWorld(x: number, y: number)`
- `null`
- `MapToWorld(x: number, y: number)`
- `WorldToMap(x: number, y: number)`
- `GetAlignmentOffset(width: number, height: number, align?: Enum.ContentAlign)`
- `DrawPolygon(vertexes: Vertexes, x?: number, y?: number)`
- `vertexes`
- `DrawTexturedPolygon(vertexes: Vertexes, image: Image, x?: number, y?: number)`
- `PushRenderTarget(texture: Texture)`
- `texture`
- `SetRenderTarget(texture: Texture)`
- `PopRenderTarget()`
- `SetOriginalRenderTarget()`
- `PushShader(shader: Shader)`
- `shader`
- `PopShader()`
- `PushBlendState(blendState: BlendState)`
- `blendState`
- `PopBlendState()`
- `DrawScreenRegion(screenX: number, screenY: number, screenW: number, screenH: number, drawX: number, drawY: number, drawW: number, drawH: number)`
- `screenX`
- `screenY`
- `screenW`
- `screenH`
- `drawX`
- `drawY`
- `drawW`
- `drawH`

## Shader

- Kind: `class`
- Path: `/en/guide/classes/renderer/Shader`
- URL: https://docs.melonity.gg/en/guide/classes/renderer/Shader

### Sections (H2)

- Methods

### Members / Signatures (H3/H4)

- `constructor(code: string, isVertexShader: boolean) Shader`
- `GetIndex() number`

### Paragraphs

- The Shader class represents a compiled renderer shader resource.
- Creates a new Shader instance.
- Returned:
- Retrieves the index.

### List Items

- code string - The code.
- isVertexShader boolean - The is vertex shader.
- Shader - The result of the call.
- number - The requested index.

### Inline Code Tokens

- `Shader`
- `constructor(code: string, isVertexShader: boolean)`
- `code`
- `isVertexShader`
- `GetIndex()`

## Texture

- Kind: `class`
- Path: `/en/guide/classes/renderer/Texture`
- URL: https://docs.melonity.gg/en/guide/classes/renderer/Texture

### Sections (H2)

- Methods

### Members / Signatures (H3/H4)

- `constructor(w: number, h: number) Texture`
- `SetSize(w: number, h: number) void`
- `GetSize() [number, number]`
- `Clear(color?: Color) this`
- `GetIndex() number`
- `GetImage() Image`
- `ApplyBlur(blurRadius: number, textureCompressionScale: number) this`

### Paragraphs

- The Texture class represents a render target texture and related image helpers.
- Creates a new Texture instance.
- Returned:
- Sets the size.
- Retrieves the size.
- default color is transparent black, image should be loaded
- Retrieves the index.
- Retrieves the image.
- Provides access to apply blur.

### List Items

- w number - The w.
- h number - The h.
- Texture - The result of the call.
- [number, number] - The requested size.
- color Color (optional) - The color value to use.
- this - The current instance for chaining.
- number - The requested index.
- Image - The requested image.
- blurRadius number - The blur radius.
- textureCompressionScale number - The texture compression scale.

### Inline Code Tokens

- `Texture`
- `constructor(w: number, h: number)`
- `w`
- `h`
- `SetSize(w: number, h: number)`
- `GetSize()`
- `Clear(color?: Color)`
- `color`
- `GetIndex()`
- `GetImage()`
- `ApplyBlur(blurRadius: number, textureCompressionScale: number)`
- `blurRadius`
- `textureCompressionScale`

## Vertexes

- Kind: `class`
- Path: `/en/guide/classes/renderer/Vertexes`
- URL: https://docs.melonity.gg/en/guide/classes/renderer/Vertexes

### Sections (H2)

- Methods

### Members / Signatures (H3/H4)

- `constructor(array?: Vertex[]) Vertexes`
- `Push(vert: Vertex) this`
- `Pop() this`
- `Set(index: number, vert: Vertex) void`
- `Get(index: number) Vertex`
- `Length() number`
- `Reserve(newSize: number) this`
- `PushCircle(centerX: number, centerY: number, radius: number, startAngle?: number, endAngle?: number, segmentCount?: number) this`
- `PushRoundRect(x: number, y: number, w: number, h: number, roundSize: number, segmentCount: number) this`
- `PushRect(x: number, y: number, w: number, h: number) this`
- `ScaleUV(valX: number, valY: number) this`

### Paragraphs

- The Vertexes class stores polygon vertex data used by the renderer.
- Creates a new Vertexes instance.
- Returned:
- Pushes the push.
- Pops the pop.
- Sets the set.
- Retrieves the get.
- Provides access to length.
- Provides access to reserve.
- Pushes the circle.
- Pushes the round rect.
- Pushes the rect.
- Provides access to scale uv.

### List Items

- array Vertex [] (optional) - The array.
- Vertexes - The result of the call.
- vert Vertex - The vert.
- this - The current instance for chaining.
- index number - The index.
- Vertex - The requested value.
- number - The result of the call.
- newSize number - The new size.
- centerX number - The center x.
- centerY number - The center y.
- radius number - The radius.
- startAngle number (optional) - 0
- endAngle number (optional) - 360
- segmentCount number (optional) - 20
- x number - The x coordinate.
- y number - The y coordinate.
- w number - The w.
- h number - The h.
- roundSize number - corner rounding size in pixels, does not change the width and height
- segmentCount number - The segment count.
- valX number - The val x.
- valY number - The val y.

### Inline Code Tokens

- `Vertexes`
- `constructor(array?: Vertex[])`
- `array`
- `Push(vert: Vertex)`
- `vert`
- `Pop()`
- `Set(index: number, vert: Vertex)`
- `index`
- `Get(index: number)`
- `Length()`
- `Reserve(newSize: number)`
- `newSize`
- `PushCircle(centerX: number, centerY: number, radius: number, startAngle?: number, endAngle?: number, segmentCount?: number)`
- `centerX`
- `centerY`
- `radius`
- `startAngle`
- `endAngle`
- `segmentCount`
- `PushRoundRect(x: number, y: number, w: number, h: number, roundSize: number, segmentCount: number)`
- `x`
- `y`
- `w`
- `h`
- `roundSize`
- `PushRect(x: number, y: number, w: number, h: number)`
- `ScaleUV(valX: number, valY: number)`
- `valX`
- `valY`

## Schema

- Kind: `class`
- Path: `/en/guide/classes/schema/index`
- URL: https://docs.melonity.gg/en/guide/classes/schema/index

### Sections (H2)

- Functions

### Members / Signatures (H3/H4)

- `GetFieldOffset(className: string, propertyName: string) number`
- `GetFieldType(className: string, propertyName: string) string`
- `GetTypeSize(className: string) number`

### Paragraphs

- The Schema namespace provides helpers for reading schema field offsets, types, and type sizes.
- Retrieves the memory offset of a field in a class.
- Returned:
- Retrieves the type of a field in a class.
- Retrieves the size of a type in a class.

### List Items

- className string - The name of the class. Can be found in Entity section in debug menu [F11].
- propertyName string - The name of the field.
- number - The memory offset of the field.
- string - The type of the field.
- number - The size of the type.

### Inline Code Tokens

- `Schema`
- `GetFieldOffset(className: string, propertyName: string)`
- `className`
- `propertyName`
- `GetFieldType(className: string, propertyName: string)`
- `GetTypeSize(className: string)`

## Timer

- Kind: `class`
- Path: `/en/guide/classes/timer/timer`
- URL: https://docs.melonity.gg/en/guide/classes/timer/timer

### Sections (H2)

- Functions

### Members / Signatures (H3/H4)

- `IsExpired(key: string) boolean`
- `Set(key: string, timeInS: number, realTime?: boolean) void`
- `Clear(key: string) void`

### Paragraphs

- The Timer namespace provides helpers for checking, setting, and clearing named timers.
- Checks if a timer has expired.
- Returned:
- Sets a timer.
- Clears a timer.

### List Items

- key string - The key of the timer.
- boolean - A boolean indicating whether the timer has expired.
- timeInS number - The time in seconds for the timer.
- realTime boolean (optional) - A boolean indicating whether the timer is based on real time. Defaults to false.

### Inline Code Tokens

- `Timer`
- `IsExpired(key: string)`
- `key`
- `Set(key: string, timeInS: number, realTime?: boolean)`
- `timeInS`
- `realTime`
- `Clear(key: string)`

## TimerObject

- Kind: `class`
- Path: `/en/guide/classes/timer/timerobject`
- URL: https://docs.melonity.gg/en/guide/classes/timer/timerobject

### Sections (H2)

- Methods

### Members / Signatures (H3/H4)

- `IsExpired() boolean`
- `Set(timeInS: number, realTime?: boolean) this`
- `Clear() this`
- `constructor()`

### Paragraphs

- The TimerObject class provides an object-oriented helper for working with timers.
- Checks if a timer has expired.
- Returned:
- Sets a timer.
- Clears a timer.
- Creates a new TimerObject instance.

### List Items

- boolean - A boolean indicating whether the timer has expired.
- timeInS number - The time in seconds for the timer.
- realTime boolean (optional) - A boolean indicating whether the timer is based on real time. Defaults to false.
- this - This timer object.

### Inline Code Tokens

- `TimerObject`
- `IsExpired()`
- `Set(timeInS: number, realTime?: boolean)`
- `timeInS`
- `realTime`
- `Clear()`
- `constructor()`

## Tracy

- Kind: `class`
- Path: `/en/guide/classes/tracy/index`
- URL: https://docs.melonity.gg/en/guide/classes/tracy/index

### Sections (H2)

- Functions

### Members / Signatures (H3/H4)

- `ZoneBegin(name: string) void`
- `ZoneEnd() void`
- `Message(message: string) void`

### Paragraphs

- The Tracy namespace provides simple profiling markers for tracing execution in scripts.
- Begins a new zone for Tracy performance profiling.
- Ends the current zone for Tracy performance profiling.
- Sends a message to the Tracy profiler.

### List Items

- name string - The name of the zone.
- message string - The message to send.

### Inline Code Tokens

- `Tracy`
- `ZoneBegin(name: string)`
- `name`
- `ZoneEnd()`
- `Message(message: string)`
- `message`

## Vector

- Kind: `class`
- Path: `/en/guide/classes/vector/vector`
- URL: https://docs.melonity.gg/en/guide/classes/vector/vector

### Sections (H2)

- Properties
- Methods

### Members / Signatures (H3/H4)

- `x number`
- `y number`
- `z number`
- `constructor(x?: number, y?: number, z?: number)`
- `add(v: Vector) Vector`
- `sub(v: Vector) Vector`
- `mul(v: Vector) Vector`
- `div(v: Vector) Vector`
- `Scale(factor: number) void`
- `Scaled(factor: number) Vector`
- `Length() number`
- `Length2D() number`
- `LengthSqr() number`
- `Length2DSqr() number`
- `Normalize() void`
- `Normalize2D() void`
- `Normalized() Vector`
- `Normalized2D() Vector`
- `Dot(v: Vector) number`
- `Dot2D(v: Vector) number`
- `Rotate(angle: number | Angle) void`
- `Rotated(angle: number | Angle) Vector`
- `Angle(v: Vector) number`
- `Angle2D(v?: Vector) number`
- `Distance(v: Vector) number`
- `Distance2D(v: Vector) number`
- `DistanceSqr(v: Vector) number`
- `Distance2DSqr(v: Vector) number`
- `Clone() Vector`
- `ToVector2() Vector2`
- `toString() string`

### Paragraphs

- The Vector class represents a 3D vector and related vector math helpers.
- The x component of the vector.
- The y component of the vector.
- The z component of the vector.
- Creates a new Vector instance.
- Adds another vector to this vector.
- Returned:
- Subtracts another vector from this vector.
- Multiplies this vector by another vector.
- Divides this vector by another vector.
- Scales this vector by a factor.
- Returns the length of this vector.
- Returns the length of this vector in the x and y plane.
- Returns the squared length of this vector.
- Returns the squared length of this vector in the x and y plane.
- Normalizes this vector.
- IMPORTANT
- This vector is modified.
- Normalizes this vector in the x and y plane.
- This vector is modified. Z is set to 0.
- Returns a normalized copy of this vector.
- Returns a normalized copy of this vector in the x and y plane.
- Returns the dot product of this vector and another vector.
- Returns the dot product of this vector and another vector in the x and y plane.
- Rotates the vector by an angle. Uses the yaw component of the angle.
- Returns the angle between this vector and another vector.
- Returns the angle between this vector and another vector in the x and y plane.
- Returns the distance between this vector and another vector.
- Returns the distance between this vector and another vector in the x and y plane.
- Returns the squared distance between this vector and another vector.
- Returns the squared distance between this vector and another vector in the x and y plane.
- Clone the vector.
- Converts this vector to a 2D vector.
- Returns a string representation of this vector.

### List Items

- x number (optional) - The x component of the vector. Defaults to 0.
- y number (optional) - The y component of the vector. Defaults to 0.
- z number (optional) - The z component of the vector. Defaults to 0.
- v Vector - The vector to add.
- Vector - A new vector that is the result of the addition.
- v Vector - The vector to subtract.
- Vector - A new vector that is the result of the subtraction.
- v Vector - The vector to multiply by.
- Vector - A new vector that is the result of the multiplication.
- v Vector - The vector to divide by.
- Vector - A new vector that is the result of the division.
- factor number - The factor to scale by.
- Vector - A new vector that is the result of the scaling.
- number - The length of this vector.
- number - The length of this vector in the x and y plane.
- number - The squared length of this vector.
- number - The squared length of this vector in the x and y plane.
- Vector - A normalized copy of this vector.
- Vector - A normalized copy of this vector in the x and y plane.
- v Vector - The vector to dot with.
- number - The dot product of this vector and another vector.
- number - The dot product of this vector and another vector in the x and y plane.
- angle number | Angle - The angle object or yaw value in degrees.
- Vector - A new vector that is the result of the rotation.
- v Vector - The vector to get the angle to.
- number - The angle between this vector and another vector.
- v Vector (optional) - The vector to get the angle to.
- number - The angle between this vector and another vector in the x and y plane.
- v Vector - The vector to get the distance to.
- number - The distance between this vector and another vector.
- number - The distance between this vector and another vector in the x and y plane.
- number - The squared distance between this vector and another vector.
- number - The squared distance between this vector and another vector in the x and y plane.
- Vector - The cloned vector.
- Vector2 - A 2D vector.
- string - A string representation of this vector.

### Inline Code Tokens

- `Vector`
- `x`
- `y`
- `z`
- `constructor(x?: number, y?: number, z?: number)`
- `add(v: Vector)`
- `v`
- `sub(v: Vector)`
- `mul(v: Vector)`
- `div(v: Vector)`
- `Scale(factor: number)`
- `factor`
- `Scaled(factor: number)`
- `Length()`
- `Length2D()`
- `LengthSqr()`
- `Length2DSqr()`
- `Normalize()`
- `Normalize2D()`
- `Normalized()`
- `Normalized2D()`
- `Dot(v: Vector)`
- `Dot2D(v: Vector)`
- `Rotate(angle: number | Angle)`
- `angle`
- `Rotated(angle: number | Angle)`
- `Angle(v: Vector)`
- `Angle2D(v?: Vector)`
- `Distance(v: Vector)`
- `Distance2D(v: Vector)`
- `DistanceSqr(v: Vector)`
- `Distance2DSqr(v: Vector)`
- `Clone()`
- `ToVector2()`
- `toString()`

## Vector2

- Kind: `class`
- Path: `/en/guide/classes/vector/vector2`
- URL: https://docs.melonity.gg/en/guide/classes/vector/vector2

### Sections (H2)

- Properties
- Methods

### Members / Signatures (H3/H4)

- `x number`
- `y number`
- `constructor(x?: number, y?: number)`
- `add(v: Vector2) Vector2`
- `sub(v: Vector2) Vector2`
- `mul(v: Vector2) Vector2`
- `div(v: Vector2) Vector2`
- `Scale(factor: number) void`
- `Scaled(factor: number) Vector2`
- `Length() number`
- `LengthSqr() number`
- `Normalize() void`
- `Normalized() Vector2`
- `Dot(v: Vector2) number`
- `Angle(v: Vector2) number`
- `Distance(v: Vector2) number`
- `DistanceSqr(v: Vector2) number`
- `Clone() Vector2`
- `ToVector() Vector`
- `toString() string`

### Paragraphs

- The Vector2 class represents a 2D vector and related vector math helpers.
- The x component of the vector.
- The y component of the vector.
- Creates a new Vector2 instance.
- Adds another vector to this vector.
- Returned:
- Subtracts another vector from this vector.
- Multiplies this vector by another vector.
- Divides this vector by another vector.
- Scales this vector by a factor.
- Returns the length of this vector.
- Returns the squared length of this vector.
- Normalizes this vector.
- IMPORTANT
- This vector is modified.
- Returns a normalized copy of this vector.
- Returns the dot product of this vector and another vector.
- Returns the angle between this vector and another vector.
- Returns the distance between this vector and another vector.
- Returns the squared distance between this vector and another vector.
- Clone the vector.
- Converts this vector to a 3D vector.
- Returns a string representation of this vector.

### List Items

- x number (optional) - The x component of the vector. Defaults to 0.
- y number (optional) - The y component of the vector. Defaults to 0.
- v Vector2 - The vector to add.
- Vector2 - A new vector that is the result of the addition.
- v Vector2 - The vector to subtract.
- Vector2 - A new vector that is the result of the subtraction.
- v Vector2 - The vector to multiply by.
- Vector2 - A new vector that is the result of the multiplication.
- v Vector2 - The vector to divide by.
- Vector2 - A new vector that is the result of the division.
- factor number - The factor to scale by.
- Vector2 - A new vector that is the result of the scaling.
- number - The length of this vector.
- number - The squared length of this vector.
- Vector2 - A normalized copy of this vector.
- v Vector2 - The vector to dot with.
- number - The dot product of this vector and another vector.
- v Vector2 - The vector to get the angle to.
- number - The angle between this vector and another vector.
- v Vector2 - The vector to get the distance to.
- number - The distance between this vector and another vector.
- number - The squared distance between this vector and another vector.
- Vector2 - The cloned vector.
- Vector - A 3D vector.
- string - A string representation of this vector.

### Inline Code Tokens

- `Vector2`
- `x`
- `y`
- `constructor(x?: number, y?: number)`
- `add(v: Vector2)`
- `v`
- `sub(v: Vector2)`
- `mul(v: Vector2)`
- `div(v: Vector2)`
- `Scale(factor: number)`
- `factor`
- `Scaled(factor: number)`
- `Length()`
- `LengthSqr()`
- `Normalize()`
- `Normalized()`
- `Dot(v: Vector2)`
- `Angle(v: Vector2)`
- `Distance(v: Vector2)`
- `DistanceSqr(v: Vector2)`
- `Clone()`
- `ToVector()`
- `toString()`

## AbilityBehavior Enum

- Kind: `enum`
- Path: `/en/guide/enum/AbilityBehavior`
- URL: https://docs.melonity.gg/en/guide/enum/AbilityBehavior

### Members / Signatures (H3/H4)

- `Enum Values`

### Tables

#### Table 1

| Name | Value | Description |
| --- | --- | --- |
| DOTA_ABILITY_BEHAVIOR_NONE | 0n | No behavior assigned. |
| DOTA_ABILITY_BEHAVIOR_HIDDEN | 1n | The ability is hidden from the UI. |
| DOTA_ABILITY_BEHAVIOR_PASSIVE | 2n | The ability is passive and does not require activation. |
| DOTA_ABILITY_BEHAVIOR_NO_TARGET | 4n | The ability does not require a target. |
| DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | 8n | The ability targets a unit. |
| DOTA_ABILITY_BEHAVIOR_POINT | 16n | The ability targets a point on the ground. |
| DOTA_ABILITY_BEHAVIOR_AOE | 32n | The ability affects an area of effect. |
| DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE | 64n | The ability cannot be learned. |
| DOTA_ABILITY_BEHAVIOR_CHANNELLED | 128n | The ability requires channeling to be effective. |
| DOTA_ABILITY_BEHAVIOR_ITEM | 256n | The ability is an item. |
| DOTA_ABILITY_BEHAVIOR_TOGGLE | 512n | The ability can be toggled on or off. |
| DOTA_ABILITY_BEHAVIOR_DIRECTIONAL | 1024n | The ability has a directional component. |
| DOTA_ABILITY_BEHAVIOR_IMMEDIATE | 2048n | The ability is cast immediately without queueing. |
| DOTA_ABILITY_BEHAVIOR_AUTOCAST | 4096n | The ability can be toggled to autocast. |
| DOTA_ABILITY_BEHAVIOR_OPTIONAL_UNIT_TARGET | 8192n | The ability optionally targets a unit. |
| DOTA_ABILITY_BEHAVIOR_OPTIONAL_POINT | 16384n | The ability optionally targets a point. |
| DOTA_ABILITY_BEHAVIOR_OPTIONAL_NO_TARGET | 32768n | The ability optionally requires no target. |
| DOTA_ABILITY_BEHAVIOR_AURA | 65536n | The ability provides an aura effect. |
| DOTA_ABILITY_BEHAVIOR_ATTACK | 131072n | The ability is tied to attacks. |
| DOTA_ABILITY_BEHAVIOR_DONT_RESUME_MOVEMENT | 262144n | The ability does not resume movement after casting. |
| DOTA_ABILITY_BEHAVIOR_ROOT_DISABLES | 524288n | The ability disables root effects. |
| DOTA_ABILITY_BEHAVIOR_UNRESTRICTED | 1048576n | The ability can be cast without restrictions. |
| DOTA_ABILITY_BEHAVIOR_IGNORE_PSEUDO_QUEUE | 2097152n | The ability ignores pseudo-queueing. |
| DOTA_ABILITY_BEHAVIOR_IGNORE_CHANNEL | 4194304n | The ability can be used while channeling another ability. |
| DOTA_ABILITY_BEHAVIOR_DONT_CANCEL_MOVEMENT | 8388608n | The ability does not cancel movement commands. |
| DOTA_ABILITY_BEHAVIOR_DONT_ALERT_TARGET | 16777216n | The ability does not alert the target when cast. |
| DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK | 33554432n | The ability does not resume attacking after casting. |
| DOTA_ABILITY_BEHAVIOR_NORMAL_WHEN_STOLEN | 67108864n | The ability behaves normally when stolen. |
| DOTA_ABILITY_BEHAVIOR_IGNORE_BACKSWING | 134217728n | The ability ignores backswing animation. |
| DOTA_ABILITY_BEHAVIOR_RUNE_TARGET | 268435456n | The ability can target runes. |
| DOTA_ABILITY_BEHAVIOR_DONT_CANCEL_CHANNEL | 536870912n | The ability does not cancel channeling. |
| DOTA_ABILITY_BEHAVIOR_VECTOR_TARGETING | 1073741824n | The ability uses vector targeting. |
| DOTA_ABILITY_BEHAVIOR_LAST_RESORT_POINT | 2147483648n | The ability targets a fallback point when other targets are invalid. |
| DOTA_ABILITY_BEHAVIOR_CAN_SELF_CAST | 4294967296n | The ability can be self-cast. |
| DOTA_ABILITY_BEHAVIOR_SHOW_IN_GUIDES | 8589934592n | The ability is shown in guides. |
| DOTA_ABILITY_BEHAVIOR_SKIP_FOR_KEYBINDS | 4398046511104n | The ability is skipped when assigning keybinds. |

### Paragraphs

- The AbilityBehavior object defines a set of flags representing the behaviors and properties of abilities in Dota 2. These flags are stored as bigint values and can be combined using bitwise operations.

### Inline Code Tokens

- `AbilityBehavior`
- `bigint`
- `DOTA_ABILITY_BEHAVIOR_NONE`
- `0n`
- `DOTA_ABILITY_BEHAVIOR_HIDDEN`
- `1n`
- `DOTA_ABILITY_BEHAVIOR_PASSIVE`
- `2n`
- `DOTA_ABILITY_BEHAVIOR_NO_TARGET`
- `4n`
- `DOTA_ABILITY_BEHAVIOR_UNIT_TARGET`
- `8n`
- `DOTA_ABILITY_BEHAVIOR_POINT`
- `16n`
- `DOTA_ABILITY_BEHAVIOR_AOE`
- `32n`
- `DOTA_ABILITY_BEHAVIOR_NOT_LEARNABLE`
- `64n`
- `DOTA_ABILITY_BEHAVIOR_CHANNELLED`
- `128n`
- `DOTA_ABILITY_BEHAVIOR_ITEM`
- `256n`
- `DOTA_ABILITY_BEHAVIOR_TOGGLE`
- `512n`
- `DOTA_ABILITY_BEHAVIOR_DIRECTIONAL`
- `1024n`
- `DOTA_ABILITY_BEHAVIOR_IMMEDIATE`
- `2048n`
- `DOTA_ABILITY_BEHAVIOR_AUTOCAST`
- `4096n`
- `DOTA_ABILITY_BEHAVIOR_OPTIONAL_UNIT_TARGET`
- `8192n`
- `DOTA_ABILITY_BEHAVIOR_OPTIONAL_POINT`
- `16384n`
- `DOTA_ABILITY_BEHAVIOR_OPTIONAL_NO_TARGET`
- `32768n`
- `DOTA_ABILITY_BEHAVIOR_AURA`
- `65536n`
- `DOTA_ABILITY_BEHAVIOR_ATTACK`
- `131072n`
- `DOTA_ABILITY_BEHAVIOR_DONT_RESUME_MOVEMENT`
- `262144n`
- `DOTA_ABILITY_BEHAVIOR_ROOT_DISABLES`
- `524288n`
- `DOTA_ABILITY_BEHAVIOR_UNRESTRICTED`
- `1048576n`
- `DOTA_ABILITY_BEHAVIOR_IGNORE_PSEUDO_QUEUE`
- `2097152n`
- `DOTA_ABILITY_BEHAVIOR_IGNORE_CHANNEL`
- `4194304n`
- `DOTA_ABILITY_BEHAVIOR_DONT_CANCEL_MOVEMENT`
- `8388608n`
- `DOTA_ABILITY_BEHAVIOR_DONT_ALERT_TARGET`
- `16777216n`
- `DOTA_ABILITY_BEHAVIOR_DONT_RESUME_ATTACK`
- `33554432n`
- `DOTA_ABILITY_BEHAVIOR_NORMAL_WHEN_STOLEN`
- `67108864n`
- `DOTA_ABILITY_BEHAVIOR_IGNORE_BACKSWING`
- `134217728n`
- `DOTA_ABILITY_BEHAVIOR_RUNE_TARGET`
- `268435456n`
- `DOTA_ABILITY_BEHAVIOR_DONT_CANCEL_CHANNEL`
- `536870912n`
- `DOTA_ABILITY_BEHAVIOR_VECTOR_TARGETING`
- `1073741824n`
- `DOTA_ABILITY_BEHAVIOR_LAST_RESORT_POINT`
- `2147483648n`
- `DOTA_ABILITY_BEHAVIOR_CAN_SELF_CAST`
- `4294967296n`
- `DOTA_ABILITY_BEHAVIOR_SHOW_IN_GUIDES`
- `8589934592n`
- `DOTA_ABILITY_BEHAVIOR_SKIP_FOR_KEYBINDS`
- `4398046511104n`

## AbilityTypes Enum

- Kind: `enum`
- Path: `/en/guide/enum/AbilityTypes`
- URL: https://docs.melonity.gg/en/guide/enum/AbilityTypes

### Members / Signatures (H3/H4)

- `Enum Values`

### Tables

#### Table 1

| Name | Value | Description |
| --- | --- | --- |
| ABILITY_TYPE_BASIC | 0 | Represents a basic ability. |
| ABILITY_TYPE_ULTIMATE | 1 | Represents an ultimate ability. |
| ABILITY_TYPE_ATTRIBUTES | 2 | Represents an ability tied to attributes. |
| ABILITY_TYPE_HIDDEN | 3 | Represents a hidden ability not visible to players. |

### Paragraphs

- The AbilityTypes enum defines the classifications of abilities in Dota 2.

### Inline Code Tokens

- `AbilityTypes`
- `ABILITY_TYPE_BASIC`
- `0`
- `ABILITY_TYPE_ULTIMATE`
- `1`
- `ABILITY_TYPE_ATTRIBUTES`
- `2`
- `ABILITY_TYPE_HIDDEN`
- `3`

## ArmorType Enum

- Kind: `enum`
- Path: `/en/guide/enum/ArmorType`
- URL: https://docs.melonity.gg/en/guide/enum/ArmorType

### Members / Signatures (H3/H4)

- `Enum Values`

### Tables

#### Table 1

| Name | Value | Description |
| --- | --- | --- |
| DOTA_COMBAT_CLASS_DEFEND_STRUCTURE | 0 | Represents armor specific to structures. |
| DOTA_COMBAT_CLASS_DEFEND_HERO | 1 | Represents armor specific to heroes. |
| DOTA_COMBAT_CLASS_DEFEND_BASIC | 2 | Represents basic armor for creeps or other units. |

### Paragraphs

- The ArmorType enum defines the armor classifications used in Dota 2, categorizing units based on their defense class.

### Inline Code Tokens

- `ArmorType`
- `DOTA_COMBAT_CLASS_DEFEND_STRUCTURE`
- `0`
- `DOTA_COMBAT_CLASS_DEFEND_HERO`
- `1`
- `DOTA_COMBAT_CLASS_DEFEND_BASIC`
- `2`

## AttackType Enum

- Kind: `enum`
- Path: `/en/guide/enum/AttackType`
- URL: https://docs.melonity.gg/en/guide/enum/AttackType

### Members / Signatures (H3/H4)

- `Enum Values`

### Tables

#### Table 1

| Name | Value | Description |
| --- | --- | --- |
| DOTA_COMBAT_CLASS_ATTACK_HERO | 0 | Represents hero attacks. |
| DOTA_COMBAT_CLASS_ATTACK_BASIC | 1 | Represents basic attacks. |
| DOTA_COMBAT_CLASS_ATTACK_PIERCE | 2 | Represents piercing attacks. |
| DOTA_COMBAT_CLASS_ATTACK_SIEGE | 3 | Represents siege attacks, effective against buildings. |

### Paragraphs

- The AttackType enum defines the types of attacks used in Dota 2, categorizing units based on their attack class.

### Inline Code Tokens

- `AttackType`
- `DOTA_COMBAT_CLASS_ATTACK_HERO`
- `0`
- `DOTA_COMBAT_CLASS_ATTACK_BASIC`
- `1`
- `DOTA_COMBAT_CLASS_ATTACK_PIERCE`
- `2`
- `DOTA_COMBAT_CLASS_ATTACK_SIEGE`
- `3`

## Attributes Enum

- Kind: `enum`
- Path: `/en/guide/enum/Attributes`
- URL: https://docs.melonity.gg/en/guide/enum/Attributes

### Members / Signatures (H3/H4)

- `Enum Values`

### Tables

#### Table 1

| Name | Value | Description |
| --- | --- | --- |
| DOTA_ATTRIBUTE_STRENGTH | 0 | Increases maximum health and health regeneration. |
| DOTA_ATTRIBUTE_AGILITY | 1 | Increases attack speed and armor. |
| DOTA_ATTRIBUTE_INTELLECT | 2 | Increases mana pool and mana regeneration. |

### Paragraphs

- The Attributes enum defines the primary attributes of heroes.

### Inline Code Tokens

- `Attributes`
- `DOTA_ATTRIBUTE_STRENGTH`
- `0`
- `DOTA_ATTRIBUTE_AGILITY`
- `1`
- `DOTA_ATTRIBUTE_INTELLECT`
- `2`

## BlendStateBlend Enum

- Kind: `enum`
- Path: `/en/guide/enum/BlendStateBlend`
- URL: https://docs.melonity.gg/en/guide/enum/BlendStateBlend

### Members / Signatures (H3/H4)

- `Enum Values`

### Tables

#### Table 1

| Name | Value | Description |
| --- | --- | --- |
| ZERO | 1 | Multiplies the blend factor by 0 (no contribution). |
| ONE | 2 | Multiplies the blend factor by 1 (full contribution). |
| SRC_COLOR | 3 | Uses the source color as the blend factor. |
| INV_SRC_COLOR | 4 | Uses the inverse of the source color as the blend factor. |
| SRC_ALPHA | 5 | Uses the source alpha as the blend factor. |
| INV_SRC_ALPHA | 6 | Uses the inverse of the source alpha as the blend factor. |
| DEST_ALPHA | 7 | Uses the destination alpha as the blend factor. |
| INV_DEST_ALPHA | 8 | Uses the inverse of the destination alpha as the blend factor. |
| DEST_COLOR | 9 | Uses the destination color as the blend factor. |
| INV_DEST_COLOR | 10 | Uses the inverse of the destination color as the blend factor. |
| SRC_ALPHA_SAT | 11 | Saturates the source alpha as the blend factor. |
| BLEND_FACTOR | 14 | Uses a constant blend factor specified elsewhere. |
| INV_BLEND_FACTOR | 15 | Uses the inverse of the constant blend factor. |
| SRC1_COLOR | 16 | Uses the color of the first source as the blend factor. |
| INV_SRC1_COLOR | 17 | Uses the inverse of the first source color as the blend factor. |
| SRC1_ALPHA | 18 | Uses the alpha of the first source as the blend factor. |
| INV_SRC1_ALPHA | 19 | Uses the inverse of the first source alpha as the blend factor. |

### Paragraphs

- The BlendStateBlend enum defines blend factors used in rendering operations to determine how pixel colors are combined.

### Inline Code Tokens

- `BlendStateBlend`
- `ZERO`
- `1`
- `ONE`
- `2`
- `SRC_COLOR`
- `3`
- `INV_SRC_COLOR`
- `4`
- `SRC_ALPHA`
- `5`
- `INV_SRC_ALPHA`
- `6`
- `DEST_ALPHA`
- `7`
- `INV_DEST_ALPHA`
- `8`
- `DEST_COLOR`
- `9`
- `INV_DEST_COLOR`
- `10`
- `SRC_ALPHA_SAT`
- `11`
- `BLEND_FACTOR`
- `14`
- `INV_BLEND_FACTOR`
- `15`
- `SRC1_COLOR`
- `16`
- `INV_SRC1_COLOR`
- `17`
- `SRC1_ALPHA`
- `18`
- `INV_SRC1_ALPHA`
- `19`

## BlendStateBlendOp Enum

- Kind: `enum`
- Path: `/en/guide/enum/BlendStateBlendOp`
- URL: https://docs.melonity.gg/en/guide/enum/BlendStateBlendOp

### Members / Signatures (H3/H4)

- `Enum Values`

### Tables

#### Table 1

| Name | Value | Description |
| --- | --- | --- |
| ADD | 1 | Adds the source and destination colors: Result = Src + Dest . |
| SUBTRACT | 2 | Subtracts the destination color from the source color: Result = Src - Dest . |
| REV_SUBTRACT | 3 | Subtracts the source color from the destination color: Result = Dest - Src . |
| MIN | 4 | Chooses the minimum value of the source and destination colors. |
| MAX | 5 | Chooses the maximum value of the source and destination colors. |

### Paragraphs

- The BlendStateBlendOp enum defines blending operations used in rendering to determine how source and destination colors are combined.

### Inline Code Tokens

- `BlendStateBlendOp`
- `ADD`
- `1`
- `Result = Src + Dest`
- `SUBTRACT`
- `2`
- `Result = Src - Dest`
- `REV_SUBTRACT`
- `3`
- `Result = Dest - Src`
- `MIN`
- `4`
- `MAX`
- `5`

## ButtonCode Enum

- Kind: `enum`
- Path: `/en/guide/enum/ButtonCode`
- URL: https://docs.melonity.gg/en/guide/enum/ButtonCode

### Members / Signatures (H3/H4)

- `Enum Values`
- `General Codes`
- `Alphanumeric Keys`
- `Special Keys`
- `Function Keys`
- `Mouse Buttons`
- `Joystick Buttons`

### Tables

#### Table 1

| Name | Description |
| --- | --- |
| BUTTON_CODE_INVALID | Represents an invalid button code. |
| BUTTON_CODE_NONE | Represents no button code. |
| KEY_FIRST | First valid keyboard key code. |
| KEY_NONE | No keyboard key. |

#### Table 2

| Name | Description |
| --- | --- |
| KEY_0 | Number key 0. |
| KEY_1 | Number key 1. |
| KEY_2 | Number key 2. |
| KEY_3 | Number key 3. |
| KEY_4 | Number key 4. |
| KEY_5 | Number key 5. |
| KEY_6 | Number key 6. |
| KEY_7 | Number key 7. |
| KEY_8 | Number key 8. |
| KEY_9 | Number key 9. |
| KEY_A | Letter key A. |
| KEY_B | Letter key B. |
| KEY_C | Letter key C. |
| KEY_D | Letter key D. |
| KEY_E | Letter key E. |
| KEY_F | Letter key F. |
| KEY_G | Letter key G. |
| KEY_H | Letter key H. |
| KEY_I | Letter key I. |
| KEY_J | Letter key J. |
| KEY_K | Letter key K. |
| KEY_L | Letter key L. |
| KEY_M | Letter key M. |
| KEY_N | Letter key N. |
| KEY_O | Letter key O. |
| KEY_P | Letter key P. |
| KEY_Q | Letter key Q. |
| KEY_R | Letter key R. |
| KEY_S | Letter key S. |
| KEY_T | Letter key T. |
| KEY_U | Letter key U. |
| KEY_V | Letter key V. |
| KEY_W | Letter key W. |
| KEY_X | Letter key X. |
| KEY_Y | Letter key Y. |
| KEY_Z | Letter key Z. |

#### Table 3

| Name | Description |
| --- | --- |
| KEY_ENTER | Enter key. |
| KEY_SPACE | Spacebar. |
| KEY_BACKSPACE | Backspace key. |
| KEY_TAB | Tab key. |
| KEY_CAPSLOCK | Caps Lock key. |
| KEY_ESCAPE | Escape key. |
| KEY_INSERT | Insert key. |
| KEY_DELETE | Delete key. |
| KEY_HOME | Home key. |
| KEY_END | End key. |
| KEY_PAGEUP | Page Up key. |
| KEY_PAGEDOWN | Page Down key. |
| KEY_UP | Up arrow key. |
| KEY_DOWN | Down arrow key. |
| KEY_LEFT | Left arrow key. |
| KEY_RIGHT | Right arrow key. |
| KEY_LSHIFT | Left Shift key. |
| KEY_RSHIFT | Right Shift key. |
| KEY_LCONTROL | Left Control key. |
| KEY_RCONTROL | Right Control key. |
| KEY_LALT | Left Alt key. |
| KEY_RALT | Right Alt key. |

#### Table 4

| Name | Description |
| --- | --- |
| KEY_F1 | Function key F1. |
| KEY_F2 | Function key F2. |
| KEY_F3 | Function key F3. |
| KEY_F4 | Function key F4. |
| KEY_F5 | Function key F5. |
| KEY_F6 | Function key F6. |
| KEY_F7 | Function key F7. |
| KEY_F8 | Function key F8. |
| KEY_F9 | Function key F9. |
| KEY_F10 | Function key F10. |
| KEY_F11 | Function key F11. |
| KEY_F12 | Function key F12. |
| KEY_F13 | Function key F13. |
| KEY_F14 | Function key F14. |
| KEY_F15 | Function key F15. |
| KEY_F16 | Function key F16. |
| KEY_F17 | Function key F17. |
| KEY_F18 | Function key F18. |
| KEY_F19 | Function key F19. |
| KEY_F20 | Function key F20. |
| KEY_F21 | Function key F21. |
| KEY_F22 | Function key F22. |
| KEY_F23 | Function key F23. |
| KEY_F24 | Function key F24. |

#### Table 5

| Name | Description |
| --- | --- |
| MOUSE_FIRST | First valid mouse button. |
| MOUSE_LEFT | Left mouse button. |
| MOUSE_RIGHT | Right mouse button. |
| MOUSE_MIDDLE | Middle mouse button. |
| MOUSE_4 | Fourth mouse button. |
| MOUSE_5 | Fifth mouse button. |
| MOUSE_WHEEL_UP | Mouse wheel scrolled up. |
| MOUSE_WHEEL_DOWN | Mouse wheel scrolled down. |
| MOUSE_LAST | Last valid mouse button or action. |
| MOUSE_COUNT | Total number of mouse button codes. |

#### Table 6

| Name | Description |
| --- | --- |
| JOYSTICK_FIRST | First joystick button. |
| JOYSTICK_FIRST_BUTTON | Represents the first button on a joystick. |

### Paragraphs

- The ButtonCode enum defines the various key and button codes that can be used for input handling.

### Inline Code Tokens

- `ButtonCode`
- `BUTTON_CODE_INVALID`
- `BUTTON_CODE_NONE`
- `KEY_FIRST`
- `KEY_NONE`
- `KEY_0`
- `KEY_1`
- `KEY_2`
- `KEY_3`
- `KEY_4`
- `KEY_5`
- `KEY_6`
- `KEY_7`
- `KEY_8`
- `KEY_9`
- `KEY_A`
- `KEY_B`
- `KEY_C`
- `KEY_D`
- `KEY_E`
- `KEY_F`
- `KEY_G`
- `KEY_H`
- `KEY_I`
- `KEY_J`
- `KEY_K`
- `KEY_L`
- `KEY_M`
- `KEY_N`
- `KEY_O`
- `KEY_P`
- `KEY_Q`
- `KEY_R`
- `KEY_S`
- `KEY_T`
- `KEY_U`
- `KEY_V`
- `KEY_W`
- `KEY_X`
- `KEY_Y`
- `KEY_Z`
- `KEY_ENTER`
- `KEY_SPACE`
- `KEY_BACKSPACE`
- `KEY_TAB`
- `KEY_CAPSLOCK`
- `KEY_ESCAPE`
- `KEY_INSERT`
- `KEY_DELETE`
- `KEY_HOME`
- `KEY_END`
- `KEY_PAGEUP`
- `KEY_PAGEDOWN`
- `KEY_UP`
- `KEY_DOWN`
- `KEY_LEFT`
- `KEY_RIGHT`
- `KEY_LSHIFT`
- `KEY_RSHIFT`
- `KEY_LCONTROL`
- `KEY_RCONTROL`
- `KEY_LALT`
- `KEY_RALT`
- `KEY_F1`
- `KEY_F2`
- `KEY_F3`
- `KEY_F4`
- `KEY_F5`
- `KEY_F6`
- `KEY_F7`
- `KEY_F8`
- `KEY_F9`
- `KEY_F10`
- `KEY_F11`
- `KEY_F12`
- `KEY_F13`
- `KEY_F14`
- `KEY_F15`
- `KEY_F16`
- `KEY_F17`
- `KEY_F18`
- `KEY_F19`
- `KEY_F20`
- `KEY_F21`
- `KEY_F22`
- `KEY_F23`
- `KEY_F24`
- `MOUSE_FIRST`
- `MOUSE_LEFT`
- `MOUSE_RIGHT`
- `MOUSE_MIDDLE`
- `MOUSE_4`
- `MOUSE_5`
- `MOUSE_WHEEL_UP`
- `MOUSE_WHEEL_DOWN`
- `MOUSE_LAST`
- `MOUSE_COUNT`
- `JOYSTICK_FIRST`
- `JOYSTICK_FIRST_BUTTON`

## CirclePathType Enum

- Kind: `enum`
- Path: `/en/guide/enum/CirclePathType`
- URL: https://docs.melonity.gg/en/guide/enum/CirclePathType

### Members / Signatures (H3/H4)

- `Enum Values`

### Tables

#### Table 1

| Name | Value | Description |
| --- | --- | --- |
| OpenPath | 0 | Represents the OpenPath value. |
| ClosedPath | 1 | Represents the ClosedPath value. |
| ClosedPathWithCenterPoint | 2 | Represents the ClosedPathWithCenterPoint value. |

### Paragraphs

- The CirclePathType enum defines how circular paths should be closed when drawing outlines.

### Inline Code Tokens

- `CirclePathType`
- `OpenPath`
- `0`
- `ClosedPath`
- `1`
- `ClosedPathWithCenterPoint`
- `2`

## ContentAlign Enum

- Kind: `enum`
- Path: `/en/guide/enum/ContentAlign`
- URL: https://docs.melonity.gg/en/guide/enum/ContentAlign

### Members / Signatures (H3/H4)

- `Enum Values`
- `Horizontal Alignment`
- `Vertical Alignment`
- `Combined Alignments`

### Tables

#### Table 1

| Name | Value | Description |
| --- | --- | --- |
| Left | 1 | Aligns the content to the left. |
| CenterX | 2 | Centers the content horizontally. |
| Right | 4 | Aligns the content to the right. |

#### Table 2

| Name | Value | Description |
| --- | --- | --- |
| Bottom | 8 | Aligns the content to the bottom. |
| CenterY | 16 | Centers the content vertically. |
| Top | 32 | Aligns the content to the top. |

#### Table 3

| Name | Value | Description |
| --- | --- | --- |
| LeftBottom | 9 | Aligns content to the bottom-left corner. |
| CenterXBottom | 10 | Aligns content to the bottom-center horizontally. |
| RightBottom | 12 | Aligns content to the bottom-right corner. |
| LeftCenterY | 17 | Aligns content to the left-center vertically. |
| CenterXY | 18 | Aligns content to the center of the area (both horizontally and vertically). |
| RightCenterY | 20 | Aligns content to the right-center vertically. |
| LeftTop | 33 | Aligns content to the top-left corner. |
| CenterXTop | 34 | Aligns content to the top-center horizontally. |
| RightTop | 36 | Aligns content to the top-right corner. |

### Paragraphs

- The ContentAlign enum defines alignment options for positioning and aligning content in various UI elements. It allows combinations of horizontal and vertical alignments.

### Inline Code Tokens

- `ContentAlign`
- `Left`
- `1`
- `CenterX`
- `2`
- `Right`
- `4`
- `Bottom`
- `8`
- `CenterY`
- `16`
- `Top`
- `32`
- `LeftBottom`
- `9`
- `CenterXBottom`
- `10`
- `RightBottom`
- `12`
- `LeftCenterY`
- `17`
- `CenterXY`
- `18`
- `RightCenterY`
- `20`
- `LeftTop`
- `33`
- `CenterXTop`
- `34`
- `RightTop`
- `36`

## CourierState Enum

- Kind: `enum`
- Path: `/en/guide/enum/CourierState`
- URL: https://docs.melonity.gg/en/guide/enum/CourierState

### Members / Signatures (H3/H4)

- `Enum Values`

### Tables

#### Table 1

| Name | Value | Description |
| --- | --- | --- |
| COURIER_STATE_INIT | -1 | Initial state, used during courier initialization. |
| COURIER_STATE_IDLE | 0 | The courier is idle and not performing any actions. |
| COURIER_STATE_AT_BASE | 1 | The courier is stationary at the fountain (base). |
| COURIER_STATE_MOVING | 2 | The courier is moving but not currently delivering items. |
| COURIER_STATE_DELIVERING_ITEMS | 3 | The courier is delivering items to a player. |
| COURIER_STATE_RETURNING_TO_BASE | 4 | The courier is returning to the fountain (base). |
| COURIER_STATE_DEAD | 5 | The courier has been killed and is unavailable until respawn. |
| COURIER_NUM_STATES | 6 | Represents the total number of states, used for enumeration bounds. |

### Paragraphs

- The CourierState enum defines the different states a courier can be in during.

### Inline Code Tokens

- `CourierState`
- `COURIER_STATE_INIT`
- `-1`
- `COURIER_STATE_IDLE`
- `0`
- `COURIER_STATE_AT_BASE`
- `1`
- `COURIER_STATE_MOVING`
- `2`
- `COURIER_STATE_DELIVERING_ITEMS`
- `3`
- `COURIER_STATE_RETURNING_TO_BASE`
- `4`
- `COURIER_STATE_DEAD`
- `5`
- `COURIER_NUM_STATES`
- `6`

## DamageTypes Enum

- Kind: `enum`
- Path: `/en/guide/enum/DamageTypes`
- URL: https://docs.melonity.gg/en/guide/enum/DamageTypes

### Members / Signatures (H3/H4)

- `Enum Values`

### Tables

#### Table 1

| Name | Value | Description |
| --- | --- | --- |
| DAMAGE_TYPE_NONE | 0 | Represents no damage type. |
| DAMAGE_TYPE_PHYSICAL | 1 | Physical damage, reduced by armor. |
| DAMAGE_TYPE_MAGICAL | 2 | Magical damage, reduced by magic resistance. |
| DAMAGE_TYPE_PURE | 3 | Pure damage, unaffected by armor or magic resistance. |
| DAMAGE_TYPE_ALL | 7 | Combination of physical, magical, and pure damage. |
| DAMAGE_TYPE_HP_REMOVAL | 8 | Removes health directly, without triggering damage effects or abilities. |
| DAMAGE_TYPE_ABILITY_DEFINED | 22 | Custom damage type defined by specific ability mechanics. |

### Paragraphs

- The DamageTypes enum defines the various types of damage that can be dealt in Dota 2, each interacting differently with resistances and abilities.

### Inline Code Tokens

- `DamageTypes`
- `DAMAGE_TYPE_NONE`
- `0`
- `DAMAGE_TYPE_PHYSICAL`
- `1`
- `DAMAGE_TYPE_MAGICAL`
- `2`
- `DAMAGE_TYPE_PURE`
- `3`
- `DAMAGE_TYPE_ALL`
- `7`
- `DAMAGE_TYPE_HP_REMOVAL`
- `8`
- `DAMAGE_TYPE_ABILITY_DEFINED`
- `22`

## DispellableTypes Enum

- Kind: `enum`
- Path: `/en/guide/enum/DispellableTypes`
- URL: https://docs.melonity.gg/en/guide/enum/DispellableTypes

### Members / Signatures (H3/H4)

- `Enum Values`

### Tables

#### Table 1

| Name | Value | Description |
| --- | --- | --- |
| SPELL_DISPELLABLE_NONE | 0 | The effect cannot be dispelled. |
| SPELL_DISPELLABLE_YES_STRONG | 1 | The effect can only be removed by strong dispels. |
| SPELL_DISPELLABLE_YES | 2 | The effect can be removed by both basic and strong dispels. |
| SPELL_DISPELLABLE_NO | 3 | The effect cannot be dispelled by any means. |

### Paragraphs

- The DispellableTypes enum defines the types of dispel interactions for abilities, indicating whether an effect can be removed and by what kind of dispel.

### Inline Code Tokens

- `DispellableTypes`
- `SPELL_DISPELLABLE_NONE`
- `0`
- `SPELL_DISPELLABLE_YES_STRONG`
- `1`
- `SPELL_DISPELLABLE_YES`
- `2`
- `SPELL_DISPELLABLE_NO`
- `3`

## DOTA_CHAT_MESSAGE Enum

- Kind: `enum`
- Path: `/en/guide/enum/DOTA_CHAT_MESSAGE`
- URL: https://docs.melonity.gg/en/guide/enum/DOTA_CHAT_MESSAGE

### Members / Signatures (H3/H4)

- `Enum Values`

### Tables

#### Table 1

| Name | Value | Description |
| --- | --- | --- |
| CHAT_MESSAGE_INVALID | -1 | Represents an invalid chat message. |
| CHAT_MESSAGE_HERO_KILL | 0 | Message for a hero kill. |
| CHAT_MESSAGE_HERO_DENY | 1 | Message for a hero deny. |
| CHAT_MESSAGE_BARRACKS_KILL | 2 | Message for barracks destruction. |
| CHAT_MESSAGE_TOWER_KILL | 3 | Message for tower destruction. |
| CHAT_MESSAGE_TOWER_DENY | 4 | Message for tower deny. |
| CHAT_MESSAGE_FIRSTBLOOD | 5 | Message for first blood. |
| CHAT_MESSAGE_STREAK_KILL | 6 | Message for a kill streak. |
| CHAT_MESSAGE_BUYBACK | 7 | Message for a player buying back into the game. |
| CHAT_MESSAGE_AEGIS | 8 | Message for picking up or using the Aegis. |
| CHAT_MESSAGE_ROSHAN_KILL | 9 | Message for killing Roshan. |
| CHAT_MESSAGE_COURIER_LOST | 10 | Message for a courier being killed. |
| CHAT_MESSAGE_COURIER_RESPAWNED | 11 | Message for a courier respawning. |
| CHAT_MESSAGE_GLYPH_USED | 12 | Message for glyph usage. |
| CHAT_MESSAGE_ITEM_PURCHASE | 13 | Message for item purchase. |
| CHAT_MESSAGE_CONNECT | 14 | Message for a player connecting to the game. |
| CHAT_MESSAGE_DISCONNECT | 15 | Message for a player disconnecting from the game. |
| CHAT_MESSAGE_DISCONNECT_WAIT_FOR_RECONNECT | 16 | Message for a disconnect with time to reconnect. |
| CHAT_MESSAGE_DISCONNECT_TIME_REMAINING | 17 | Message for time remaining before disconnect penalty. |
| CHAT_MESSAGE_DISCONNECT_TIME_REMAINING_PLURAL | 18 | Message for plural disconnect time remaining. |
| CHAT_MESSAGE_RECONNECT | 19 | Message for a player reconnecting to the game. |
| CHAT_MESSAGE_PLAYER_LEFT | 20 | Message for a player leaving the game. |
| CHAT_MESSAGE_SAFE_TO_LEAVE | 21 | Message indicating it is safe to leave the game. |
| CHAT_MESSAGE_RUNE_PICKUP | 22 | Message for picking up a rune. |
| CHAT_MESSAGE_RUNE_BOTTLE | 23 | Message for bottling a rune. |
| CHAT_MESSAGE_RUNE_DENY | 114 | Message for denying a rune. |
| CHAT_MESSAGE_INTHEBAG | 24 | Message for "It's in the bag!" declaration. |
| CHAT_MESSAGE_SECRETSHOP | 25 | Message for using the secret shop. |
| CHAT_MESSAGE_ITEM_AUTOPURCHASED | 26 | Message for items auto-purchased. |
| CHAT_MESSAGE_ITEMS_COMBINED | 27 | Message for combining items. |
| CHAT_MESSAGE_SUPER_CREEPS | 28 | Message for upgrading to super creeps. |
| CHAT_MESSAGE_CANT_USE_ACTION_ITEM | 29 | Message for attempting to use an unavailable item. |
| CHAT_MESSAGE_CANTPAUSE | 31 | Message indicating a pause cannot be initiated. |
| CHAT_MESSAGE_NOPAUSESLEFT | 32 | Message indicating no pauses are remaining. |
| CHAT_MESSAGE_CANTPAUSEYET | 33 | Message indicating a pause cannot be used yet. |
| CHAT_MESSAGE_PAUSED | 34 | Message indicating the game is paused. |
| CHAT_MESSAGE_UNPAUSE_COUNTDOWN | 35 | Message for the unpause countdown. |
| CHAT_MESSAGE_UNPAUSED | 36 | Message indicating the game has been unpaused. |
| CHAT_MESSAGE_AUTO_UNPAUSED | 37 | Message indicating the game was auto-unpaused. |
| CHAT_MESSAGE_YOUPAUSED | 38 | Message indicating that you paused the game. |
| CHAT_MESSAGE_CANTUNPAUSETEAM | 39 | Message indicating the team cannot unpause. |

### Paragraphs

- The DOTA_CHAT_MESSAGE enum defines various types of chat messages that can appear. For example in combat events.

### Inline Code Tokens

- `DOTA_CHAT_MESSAGE`
- `CHAT_MESSAGE_INVALID`
- `-1`
- `CHAT_MESSAGE_HERO_KILL`
- `0`
- `CHAT_MESSAGE_HERO_DENY`
- `1`
- `CHAT_MESSAGE_BARRACKS_KILL`
- `2`
- `CHAT_MESSAGE_TOWER_KILL`
- `3`
- `CHAT_MESSAGE_TOWER_DENY`
- `4`
- `CHAT_MESSAGE_FIRSTBLOOD`
- `5`
- `CHAT_MESSAGE_STREAK_KILL`
- `6`
- `CHAT_MESSAGE_BUYBACK`
- `7`
- `CHAT_MESSAGE_AEGIS`
- `8`
- `CHAT_MESSAGE_ROSHAN_KILL`
- `9`
- `CHAT_MESSAGE_COURIER_LOST`
- `10`
- `CHAT_MESSAGE_COURIER_RESPAWNED`
- `11`
- `CHAT_MESSAGE_GLYPH_USED`
- `12`
- `CHAT_MESSAGE_ITEM_PURCHASE`
- `13`
- `CHAT_MESSAGE_CONNECT`
- `14`
- `CHAT_MESSAGE_DISCONNECT`
- `15`
- `CHAT_MESSAGE_DISCONNECT_WAIT_FOR_RECONNECT`
- `16`
- `CHAT_MESSAGE_DISCONNECT_TIME_REMAINING`
- `17`
- `CHAT_MESSAGE_DISCONNECT_TIME_REMAINING_PLURAL`
- `18`
- `CHAT_MESSAGE_RECONNECT`
- `19`
- `CHAT_MESSAGE_PLAYER_LEFT`
- `20`
- `CHAT_MESSAGE_SAFE_TO_LEAVE`
- `21`
- `CHAT_MESSAGE_RUNE_PICKUP`
- `22`
- `CHAT_MESSAGE_RUNE_BOTTLE`
- `23`
- `CHAT_MESSAGE_RUNE_DENY`
- `114`
- `CHAT_MESSAGE_INTHEBAG`
- `24`
- `CHAT_MESSAGE_SECRETSHOP`
- `25`
- `CHAT_MESSAGE_ITEM_AUTOPURCHASED`
- `26`
- `CHAT_MESSAGE_ITEMS_COMBINED`
- `27`
- `CHAT_MESSAGE_SUPER_CREEPS`
- `28`
- `CHAT_MESSAGE_CANT_USE_ACTION_ITEM`
- `29`
- `CHAT_MESSAGE_CANTPAUSE`
- `31`
- `CHAT_MESSAGE_NOPAUSESLEFT`
- `32`
- `CHAT_MESSAGE_CANTPAUSEYET`
- `33`
- `CHAT_MESSAGE_PAUSED`
- `34`
- `CHAT_MESSAGE_UNPAUSE_COUNTDOWN`
- `35`
- `CHAT_MESSAGE_UNPAUSED`
- `36`
- `CHAT_MESSAGE_AUTO_UNPAUSED`
- `37`
- `CHAT_MESSAGE_YOUPAUSED`
- `38`
- `CHAT_MESSAGE_CANTUNPAUSETEAM`
- `39`

## DOTA_MODIFIER_ENTRY_TYPE Enum

- Kind: `enum`
- Path: `/en/guide/enum/DOTA_MODIFIER_ENTRY_TYPE`
- URL: https://docs.melonity.gg/en/guide/enum/DOTA_MODIFIER_ENTRY_TYPE

### Members / Signatures (H3/H4)

- `Enum Values`

### Tables

#### Table 1

| Name | Value | Description |
| --- | --- | --- |
| DOTA_MODIFIER_ENTRY_TYPE_ACTIVE | 1 | Represents the DOTA_MODIFIER_ENTRY_TYPE_ACTIVE value. |
| DOTA_MODIFIER_ENTRY_TYPE_REMOVED | 2 | Represents the DOTA_MODIFIER_ENTRY_TYPE_REMOVED value. |
| UNRECOGNIZED | -1 | Represents the UNRECOGNIZED value. |

### Paragraphs

- The DOTA_MODIFIER_ENTRY_TYPE enum defines modifier buff entry states used by OnActiveModifiersUpdate .

### Inline Code Tokens

- `DOTA_MODIFIER_ENTRY_TYPE`
- `OnActiveModifiersUpdate`
- `DOTA_MODIFIER_ENTRY_TYPE_ACTIVE`
- `1`
- `DOTA_MODIFIER_ENTRY_TYPE_REMOVED`
- `2`
- `UNRECOGNIZED`
- `-1`

## Flow Enum

- Kind: `enum`
- Path: `/en/guide/enum/Flow`
- URL: https://docs.melonity.gg/en/guide/enum/Flow

### Members / Signatures (H3/H4)

- `Enum Values`

### Tables

#### Table 1

| Name | Value | Description |
| --- | --- | --- |
| FLOW_OUTGOING | 0 | Represents outgoing flow. |
| FLOW_INCOMING | 1 | Represents incoming flow. |
| MAX_FLOWS | 2 | Represents the total number of flows. |

### Paragraphs

- The Flow enum defines the direction of data or action flow in a system.

### Inline Code Tokens

- `Flow`
- `FLOW_OUTGOING`
- `0`
- `FLOW_INCOMING`
- `1`
- `MAX_FLOWS`
- `2`

## FontFlags Enum

- Kind: `enum`
- Path: `/en/guide/enum/FontFlags`
- URL: https://docs.melonity.gg/en/guide/enum/FontFlags

### Members / Signatures (H3/H4)

- `Enum Values`

### Tables

#### Table 1

| Name | Value | Description |
| --- | --- | --- |
| NONE | 0 | Represents the NONE value. |
| OUTLINE | 1 | Represents the OUTLINE value. |
| ITALIC | 2 | Represents the ITALIC value. |
| ANTIALIAS | 3 | @deprecated do nothing |
| GAUSSIANBLUR | 4 | @deprecated do nothing |
| DROPSHADOW | 5 | @deprecated do nothing |

### Paragraphs

- The FontFlags enum defines optional font rendering flags used by the renderer.

### Inline Code Tokens

- `FontFlags`
- `NONE`
- `0`
- `OUTLINE`
- `1`
- `ITALIC`
- `2`
- `ANTIALIAS`
- `3`
- `GAUSSIANBLUR`
- `4`
- `DROPSHADOW`
- `5`

## FontWeight Enum

- Kind: `enum`
- Path: `/en/guide/enum/FontWeight`
- URL: https://docs.melonity.gg/en/guide/enum/FontWeight

### Members / Signatures (H3/H4)

- `Enum Values`

### Tables

#### Table 1

| Name | Value | Description |
| --- | --- | --- |
| ULTRALIGHT | 0 | Represents the ULTRALIGHT value. |
| LIGHT | 1 | Represents the LIGHT value. |
| NORMAL | 2 | Represents the NORMAL value. |
| MEDIUM | 3 | Represents the MEDIUM value. |
| BOLD | 4 | Represents the BOLD value. |
| EXTRABOLD | 5 | Represents the EXTRABOLD value. |

### Paragraphs

- The FontWeight enum defines the supported font weight presets for renderer fonts.

### Inline Code Tokens

- `FontWeight`
- `ULTRALIGHT`
- `0`
- `LIGHT`
- `1`
- `NORMAL`
- `2`
- `MEDIUM`
- `3`
- `BOLD`
- `4`
- `EXTRABOLD`
- `5`

## ForcedType Enum

- Kind: `enum`
- Path: `/en/guide/enum/ForcedType`
- URL: https://docs.melonity.gg/en/guide/enum/ForcedType

### Members / Signatures (H3/H4)

- `Enum Values`

### Tables

#### Table 1

| Name | Value | Description |
| --- | --- | --- |
| None | 0 | No forced type applied. |
| Alt | 1 | Alternate input type. |
| Minimap | 2 | Action forced via minimap. |
| Portrait | 3 | Action forced via portrait. |
| OnCursor | 4 | Action forced on the cursor. |

### Paragraphs

- The ForcedType enum specifies the type of forced order or input applied to the game.

### Inline Code Tokens

- `ForcedType`
- `None`
- `0`
- `Alt`
- `1`
- `Minimap`
- `2`
- `Portrait`
- `3`
- `OnCursor`
- `4`

## GameActivity Enum

- Kind: `enum`
- Path: `/en/guide/enum/GameActivity`
- URL: https://docs.melonity.gg/en/guide/enum/GameActivity

### Members / Signatures (H3/H4)

- `Enum Values`

### Tables

#### Table 1

| Name | Value | Description |
| --- | --- | --- |
| ACT_RESET | 0 | Represents the ACT_RESET activity state. |
| ACT_IDLE | 1 | Represents the ACT_IDLE activity state. |
| ACT_TRANSITION | 2 | Represents the ACT_TRANSITION activity state. |
| ACT_COVER | 3 | Represents the ACT_COVER activity state. |
| ACT_COVER_MED | 4 | Represents the ACT_COVER_MED activity state. |
| ACT_COVER_LOW | 5 | Represents the ACT_COVER_LOW activity state. |
| ACT_WALK | 6 | Represents the ACT_WALK activity state. |
| ACT_WALK_AIM | 7 | Represents the ACT_WALK_AIM activity state. |
| ACT_WALK_CROUCH | 8 | Represents the ACT_WALK_CROUCH activity state. |
| ACT_WALK_CROUCH_AIM | 9 | Represents the ACT_WALK_CROUCH_AIM activity state. |
| ACT_RUN | 10 | Represents the ACT_RUN activity state. |
| ACT_RUN_AIM | 11 | Represents the ACT_RUN_AIM activity state. |
| ACT_RUN_CROUCH | 12 | Represents the ACT_RUN_CROUCH activity state. |
| ACT_RUN_CROUCH_AIM | 13 | Represents the ACT_RUN_CROUCH_AIM activity state. |
| ACT_RUN_PROTECTED | 14 | Represents the ACT_RUN_PROTECTED activity state. |
| ACT_SCRIPT_CUSTOM_MOVE | 15 | Represents the ACT_SCRIPT_CUSTOM_MOVE activity state. |
| ACT_RANGE_ATTACK1 | 16 | Represents the ACT_RANGE_ATTACK1 activity state. |
| ACT_RANGE_ATTACK2 | 17 | Represents the ACT_RANGE_ATTACK2 activity state. |
| ACT_RANGE_ATTACK1_LOW | 18 | Represents the ACT_RANGE_ATTACK1_LOW activity state. |
| ACT_RANGE_ATTACK2_LOW | 19 | Represents the ACT_RANGE_ATTACK2_LOW activity state. |
| ACT_DIESIMPLE | 20 | Represents the ACT_DIESIMPLE activity state. |
| ACT_DIEBACKWARD | 21 | Represents the ACT_DIEBACKWARD activity state. |
| ACT_DIEFORWARD | 22 | Represents the ACT_DIEFORWARD activity state. |
| ACT_DIEVIOLENT | 23 | Represents the ACT_DIEVIOLENT activity state. |
| ACT_DIERAGDOLL | 24 | Represents the ACT_DIERAGDOLL activity state. |
| ACT_FLY | 25 | Represents the ACT_FLY activity state. |
| ACT_HOVER | 26 | Represents the ACT_HOVER activity state. |
| ACT_GLIDE | 27 | Represents the ACT_GLIDE activity state. |
| ACT_SWIM | 28 | Represents the ACT_SWIM activity state. |
| ACT_JUMP | 29 | Represents the ACT_JUMP activity state. |
| ACT_HOP | 30 | Represents the ACT_HOP activity state. |
| ACT_LEAP | 31 | Represents the ACT_LEAP activity state. |
| ACT_LAND | 32 | Represents the ACT_LAND activity state. |
| ACT_CLIMB_UP | 33 | Represents the ACT_CLIMB_UP activity state. |
| ACT_CLIMB_DOWN | 34 | Represents the ACT_CLIMB_DOWN activity state. |
| ACT_CLIMB_DISMOUNT | 35 | Represents the ACT_CLIMB_DISMOUNT activity state. |
| ACT_SHIPLADDER_UP | 36 | Represents the ACT_SHIPLADDER_UP activity state. |
| ACT_SHIPLADDER_DOWN | 37 | Represents the ACT_SHIPLADDER_DOWN activity state. |
| ACT_STRAFE_LEFT | 38 | Represents the ACT_STRAFE_LEFT activity state. |
| ACT_STRAFE_RIGHT | 39 | Represents the ACT_STRAFE_RIGHT activity state. |
| ACT_ROLL_LEFT | 40 | Represents the ACT_ROLL_LEFT activity state. |
| ACT_ROLL_RIGHT | 41 | Represents the ACT_ROLL_RIGHT activity state. |
| ACT_TURN_LEFT | 42 | Represents the ACT_TURN_LEFT activity state. |
| ACT_TURN_RIGHT | 43 | Represents the ACT_TURN_RIGHT activity state. |
| ACT_CROUCH | 44 | Represents the ACT_CROUCH activity state. |
| ACT_CROUCHIDLE | 45 | Represents the ACT_CROUCHIDLE activity state. |
| ACT_STAND | 46 | Represents the ACT_STAND activity state. |
| ACT_USE | 47 | Represents the ACT_USE activity state. |
| ACT_ALIEN_BURROW_IDLE | 48 | Represents the ACT_ALIEN_BURROW_IDLE activity state. |
| ACT_ALIEN_BURROW_OUT | 49 | Represents the ACT_ALIEN_BURROW_OUT activity state. |
| ACT_SIGNAL1 | 50 | Represents the ACT_SIGNAL1 activity state. |
| ACT_SIGNAL2 | 51 | Represents the ACT_SIGNAL2 activity state. |
| ACT_SIGNAL3 | 52 | Represents the ACT_SIGNAL3 activity state. |
| ACT_SIGNAL_ADVANCE | 53 | Represents the ACT_SIGNAL_ADVANCE activity state. |
| ACT_SIGNAL_FORWARD | 54 | Represents the ACT_SIGNAL_FORWARD activity state. |
| ACT_SIGNAL_GROUP | 55 | Represents the ACT_SIGNAL_GROUP activity state. |
| ACT_SIGNAL_HALT | 56 | Represents the ACT_SIGNAL_HALT activity state. |
| ACT_SIGNAL_LEFT | 57 | Represents the ACT_SIGNAL_LEFT activity state. |
| ACT_SIGNAL_RIGHT | 58 | Represents the ACT_SIGNAL_RIGHT activity state. |
| ACT_SIGNAL_TAKECOVER | 59 | Represents the ACT_SIGNAL_TAKECOVER activity state. |
| ACT_LOOKBACK_RIGHT | 60 | Represents the ACT_LOOKBACK_RIGHT activity state. |
| ACT_LOOKBACK_LEFT | 61 | Represents the ACT_LOOKBACK_LEFT activity state. |
| ACT_COWER | 62 | Represents the ACT_COWER activity state. |
| ACT_SMALL_FLINCH | 63 | Represents the ACT_SMALL_FLINCH activity state. |
| ACT_BIG_FLINCH | 64 | Represents the ACT_BIG_FLINCH activity state. |
| ACT_MELEE_ATTACK1 | 65 | Represents the ACT_MELEE_ATTACK1 activity state. |
| ACT_MELEE_ATTACK2 | 66 | Represents the ACT_MELEE_ATTACK2 activity state. |
| ACT_RELOAD | 67 | Represents the ACT_RELOAD activity state. |
| ACT_RELOAD_START | 68 | Represents the ACT_RELOAD_START activity state. |
| ACT_RELOAD_FINISH | 69 | Represents the ACT_RELOAD_FINISH activity state. |
| ACT_RELOAD_LOW | 70 | Represents the ACT_RELOAD_LOW activity state. |
| ACT_ARM | 71 | Represents the ACT_ARM activity state. |
| ACT_DISARM | 72 | Represents the ACT_DISARM activity state. |
| ACT_DROP_WEAPON | 73 | Represents the ACT_DROP_WEAPON activity state. |
| ACT_DROP_WEAPON_SHOTGUN | 74 | Represents the ACT_DROP_WEAPON_SHOTGUN activity state. |
| ACT_PICKUP_GROUND | 75 | Represents the ACT_PICKUP_GROUND activity state. |
| ACT_PICKUP_RACK | 76 | Represents the ACT_PICKUP_RACK activity state. |
| ACT_IDLE_ANGRY | 77 | Represents the ACT_IDLE_ANGRY activity state. |
| ACT_IDLE_RELAXED | 78 | Represents the ACT_IDLE_RELAXED activity state. |
| ACT_IDLE_STIMULATED | 79 | Represents the ACT_IDLE_STIMULATED activity state. |
| ACT_IDLE_AGITATED | 80 | Represents the ACT_IDLE_AGITATED activity state. |
| ACT_IDLE_STEALTH | 81 | Represents the ACT_IDLE_STEALTH activity state. |
| ACT_IDLE_HURT | 82 | Represents the ACT_IDLE_HURT activity state. |
| ACT_WALK_RELAXED | 83 | Represents the ACT_WALK_RELAXED activity state. |
| ACT_WALK_STIMULATED | 84 | Represents the ACT_WALK_STIMULATED activity state. |
| ACT_WALK_AGITATED | 85 | Represents the ACT_WALK_AGITATED activity state. |
| ACT_WALK_STEALTH | 86 | Represents the ACT_WALK_STEALTH activity state. |
| ACT_RUN_RELAXED | 87 | Represents the ACT_RUN_RELAXED activity state. |
| ACT_RUN_STIMULATED | 88 | Represents the ACT_RUN_STIMULATED activity state. |
| ACT_RUN_AGITATED | 89 | Represents the ACT_RUN_AGITATED activity state. |
| ACT_RUN_STEALTH | 90 | Represents the ACT_RUN_STEALTH activity state. |
| ACT_IDLE_AIM_RELAXED | 91 | Represents the ACT_IDLE_AIM_RELAXED activity state. |
| ACT_IDLE_AIM_STIMULATED | 92 | Represents the ACT_IDLE_AIM_STIMULATED activity state. |
| ACT_IDLE_AIM_AGITATED | 93 | Represents the ACT_IDLE_AIM_AGITATED activity state. |
| ACT_IDLE_AIM_STEALTH | 94 | Represents the ACT_IDLE_AIM_STEALTH activity state. |
| ACT_WALK_AIM_RELAXED | 95 | Represents the ACT_WALK_AIM_RELAXED activity state. |
| ACT_WALK_AIM_STIMULATED | 96 | Represents the ACT_WALK_AIM_STIMULATED activity state. |
| ACT_WALK_AIM_AGITATED | 97 | Represents the ACT_WALK_AIM_AGITATED activity state. |
| ACT_WALK_AIM_STEALTH | 98 | Represents the ACT_WALK_AIM_STEALTH activity state. |
| ACT_RUN_AIM_RELAXED | 99 | Represents the ACT_RUN_AIM_RELAXED activity state. |
| ACT_RUN_AIM_STIMULATED | 100 | Represents the ACT_RUN_AIM_STIMULATED activity state. |
| ACT_RUN_AIM_AGITATED | 101 | Represents the ACT_RUN_AIM_AGITATED activity state. |
| ACT_RUN_AIM_STEALTH | 102 | Represents the ACT_RUN_AIM_STEALTH activity state. |
| ACT_CROUCHIDLE_STIMULATED | 103 | Represents the ACT_CROUCHIDLE_STIMULATED activity state. |
| ACT_CROUCHIDLE_AIM_STIMULATED | 104 | Represents the ACT_CROUCHIDLE_AIM_STIMULATED activity state. |
| ACT_CROUCHIDLE_AGITATED | 105 | Represents the ACT_CROUCHIDLE_AGITATED activity state. |
| ACT_WALK_HURT | 106 | Represents the ACT_WALK_HURT activity state. |
| ACT_RUN_HURT | 107 | Represents the ACT_RUN_HURT activity state. |
| ACT_SPECIAL_ATTACK1 | 108 | Represents the ACT_SPECIAL_ATTACK1 activity state. |
| ACT_SPECIAL_ATTACK2 | 109 | Represents the ACT_SPECIAL_ATTACK2 activity state. |
| ACT_COMBAT_IDLE | 110 | Represents the ACT_COMBAT_IDLE activity state. |
| ACT_WALK_SCARED | 111 | Represents the ACT_WALK_SCARED activity state. |
| ACT_RUN_SCARED | 112 | Represents the ACT_RUN_SCARED activity state. |
| ACT_VICTORY_DANCE | 113 | Represents the ACT_VICTORY_DANCE activity state. |
| ACT_DIE_HEADSHOT | 114 | Represents the ACT_DIE_HEADSHOT activity state. |
| ACT_DIE_CHESTSHOT | 115 | Represents the ACT_DIE_CHESTSHOT activity state. |
| ACT_DIE_GUTSHOT | 116 | Represents the ACT_DIE_GUTSHOT activity state. |
| ACT_DIE_BACKSHOT | 117 | Represents the ACT_DIE_BACKSHOT activity state. |
| ACT_FLINCH_HEAD | 118 | Represents the ACT_FLINCH_HEAD activity state. |
| ACT_FLINCH_CHEST | 119 | Represents the ACT_FLINCH_CHEST activity state. |
| ACT_FLINCH_STOMACH | 120 | Represents the ACT_FLINCH_STOMACH activity state. |
| ACT_FLINCH_LEFTARM | 121 | Represents the ACT_FLINCH_LEFTARM activity state. |
| ACT_FLINCH_RIGHTARM | 122 | Represents the ACT_FLINCH_RIGHTARM activity state. |
| ACT_FLINCH_LEFTLEG | 123 | Represents the ACT_FLINCH_LEFTLEG activity state. |
| ACT_FLINCH_RIGHTLEG | 124 | Represents the ACT_FLINCH_RIGHTLEG activity state. |
| ACT_FLINCH_PHYSICS | 125 | Represents the ACT_FLINCH_PHYSICS activity state. |
| ACT_FLINCH_HEAD_BACK | 126 | Represents the ACT_FLINCH_HEAD_BACK activity state. |
| ACT_FLINCH_CHEST_BACK | 127 | Represents the ACT_FLINCH_CHEST_BACK activity state. |
| ACT_FLINCH_STOMACH_BACK | 128 | Represents the ACT_FLINCH_STOMACH_BACK activity state. |
| ACT_FLINCH_CROUCH_FRONT | 129 | Represents the ACT_FLINCH_CROUCH_FRONT activity state. |
| ACT_FLINCH_CROUCH_BACK | 130 | Represents the ACT_FLINCH_CROUCH_BACK activity state. |
| ACT_FLINCH_CROUCH_LEFT | 131 | Represents the ACT_FLINCH_CROUCH_LEFT activity state. |
| ACT_FLINCH_CROUCH_RIGHT | 132 | Represents the ACT_FLINCH_CROUCH_RIGHT activity state. |
| ACT_IDLE_ON_FIRE | 133 | Represents the ACT_IDLE_ON_FIRE activity state. |
| ACT_WALK_ON_FIRE | 134 | Represents the ACT_WALK_ON_FIRE activity state. |
| ACT_RUN_ON_FIRE | 135 | Represents the ACT_RUN_ON_FIRE activity state. |
| ACT_180_LEFT | 137 | Represents the ACT_180_LEFT activity state. |
| ACT_180_RIGHT | 138 | Represents the ACT_180_RIGHT activity state. |
| ACT_90_LEFT | 139 | Represents the ACT_90_LEFT activity state. |
| ACT_90_RIGHT | 140 | Represents the ACT_90_RIGHT activity state. |
| ACT_STEP_LEFT | 141 | Represents the ACT_STEP_LEFT activity state. |
| ACT_STEP_RIGHT | 142 | Represents the ACT_STEP_RIGHT activity state. |
| ACT_STEP_BACK | 143 | Represents the ACT_STEP_BACK activity state. |
| ACT_STEP_FORE | 144 | Represents the ACT_STEP_FORE activity state. |
| ACT_GESTURE_RANGE_ATTACK1 | 145 | Represents the ACT_GESTURE_RANGE_ATTACK1 activity state. |
| ACT_GESTURE_RANGE_ATTACK2 | 146 | Represents the ACT_GESTURE_RANGE_ATTACK2 activity state. |
| ACT_GESTURE_MELEE_ATTACK1 | 147 | Represents the ACT_GESTURE_MELEE_ATTACK1 activity state. |
| ACT_GESTURE_MELEE_ATTACK2 | 148 | Represents the ACT_GESTURE_MELEE_ATTACK2 activity state. |
| ACT_GESTURE_RANGE_ATTACK1_LOW | 149 | Represents the ACT_GESTURE_RANGE_ATTACK1_LOW activity state. |
| ACT_GESTURE_RANGE_ATTACK2_LOW | 150 | Represents the ACT_GESTURE_RANGE_ATTACK2_LOW activity state. |
| ACT_MELEE_ATTACK_SWING_GESTURE | 151 | Represents the ACT_MELEE_ATTACK_SWING_GESTURE activity state. |
| ACT_GESTURE_SMALL_FLINCH | 152 | Represents the ACT_GESTURE_SMALL_FLINCH activity state. |
| ACT_GESTURE_BIG_FLINCH | 153 | Represents the ACT_GESTURE_BIG_FLINCH activity state. |
| ACT_GESTURE_FLINCH_BLAST | 154 | Represents the ACT_GESTURE_FLINCH_BLAST activity state. |
| ACT_GESTURE_FLINCH_BLAST_SHOTGUN | 155 | Represents the ACT_GESTURE_FLINCH_BLAST_SHOTGUN activity state. |
| ACT_GESTURE_FLINCH_BLAST_DAMAGED | 156 | Represents the ACT_GESTURE_FLINCH_BLAST_DAMAGED activity state. |
| ACT_GESTURE_FLINCH_BLAST_DAMAGED_SHOTGUN | 157 | Represents the ACT_GESTURE_FLINCH_BLAST_DAMAGED_SHOTGUN activity state. |
| ACT_GESTURE_FLINCH_HEAD | 158 | Represents the ACT_GESTURE_FLINCH_HEAD activity state. |
| ACT_GESTURE_FLINCH_CHEST | 159 | Represents the ACT_GESTURE_FLINCH_CHEST activity state. |
| ACT_GESTURE_FLINCH_STOMACH | 160 | Represents the ACT_GESTURE_FLINCH_STOMACH activity state. |
| ACT_GESTURE_FLINCH_LEFTARM | 161 | Represents the ACT_GESTURE_FLINCH_LEFTARM activity state. |
| ACT_GESTURE_FLINCH_RIGHTARM | 162 | Represents the ACT_GESTURE_FLINCH_RIGHTARM activity state. |
| ACT_GESTURE_FLINCH_LEFTLEG | 163 | Represents the ACT_GESTURE_FLINCH_LEFTLEG activity state. |
| ACT_GESTURE_FLINCH_RIGHTLEG | 164 | Represents the ACT_GESTURE_FLINCH_RIGHTLEG activity state. |
| ACT_GESTURE_TURN_LEFT | 165 | Represents the ACT_GESTURE_TURN_LEFT activity state. |
| ACT_GESTURE_TURN_RIGHT | 166 | Represents the ACT_GESTURE_TURN_RIGHT activity state. |
| ACT_GESTURE_TURN_LEFT45 | 167 | Represents the ACT_GESTURE_TURN_LEFT45 activity state. |
| ACT_GESTURE_TURN_RIGHT45 | 168 | Represents the ACT_GESTURE_TURN_RIGHT45 activity state. |
| ACT_GESTURE_TURN_LEFT90 | 169 | Represents the ACT_GESTURE_TURN_LEFT90 activity state. |
| ACT_GESTURE_TURN_RIGHT90 | 170 | Represents the ACT_GESTURE_TURN_RIGHT90 activity state. |
| ACT_GESTURE_TURN_LEFT45_FLAT | 171 | Represents the ACT_GESTURE_TURN_LEFT45_FLAT activity state. |
| ACT_GESTURE_TURN_RIGHT45_FLAT | 172 | Represents the ACT_GESTURE_TURN_RIGHT45_FLAT activity state. |
| ACT_GESTURE_TURN_LEFT90_FLAT | 173 | Represents the ACT_GESTURE_TURN_LEFT90_FLAT activity state. |
| ACT_GESTURE_TURN_RIGHT90_FLAT | 174 | Represents the ACT_GESTURE_TURN_RIGHT90_FLAT activity state. |
| ACT_BARNACLE_HIT | 175 | Represents the ACT_BARNACLE_HIT activity state. |
| ACT_BARNACLE_PULL | 176 | Represents the ACT_BARNACLE_PULL activity state. |
| ACT_BARNACLE_CHOMP | 177 | Represents the ACT_BARNACLE_CHOMP activity state. |
| ACT_BARNACLE_CHEW | 178 | Represents the ACT_BARNACLE_CHEW activity state. |
| ACT_DO_NOT_DISTURB | 179 | Represents the ACT_DO_NOT_DISTURB activity state. |
| ACT_SPECIFIC_SEQUENCE | 180 | Represents the ACT_SPECIFIC_SEQUENCE activity state. |
| ACT_VM_DEPLOY | 181 | Represents the ACT_VM_DEPLOY activity state. |
| ACT_VM_RELOAD_EMPTY | 182 | Represents the ACT_VM_RELOAD_EMPTY activity state. |
| ACT_VM_DRAW | 183 | Represents the ACT_VM_DRAW activity state. |
| ACT_VM_HOLSTER | 184 | Represents the ACT_VM_HOLSTER activity state. |
| ACT_VM_IDLE | 185 | Represents the ACT_VM_IDLE activity state. |
| ACT_VM_FIDGET | 186 | Represents the ACT_VM_FIDGET activity state. |
| ACT_VM_PULLBACK | 187 | Represents the ACT_VM_PULLBACK activity state. |
| ACT_VM_PULLBACK_HIGH | 188 | Represents the ACT_VM_PULLBACK_HIGH activity state. |
| ACT_VM_PULLBACK_LOW | 189 | Represents the ACT_VM_PULLBACK_LOW activity state. |
| ACT_VM_THROW | 190 | Represents the ACT_VM_THROW activity state. |
| ACT_VM_DROP | 191 | Represents the ACT_VM_DROP activity state. |
| ACT_VM_PULLPIN | 192 | Represents the ACT_VM_PULLPIN activity state. |
| ACT_VM_PRIMARYATTACK | 193 | Represents the ACT_VM_PRIMARYATTACK activity state. |
| ACT_VM_SECONDARYATTACK | 194 | Represents the ACT_VM_SECONDARYATTACK activity state. |
| ACT_VM_RELOAD | 195 | Represents the ACT_VM_RELOAD activity state. |
| ACT_VM_DRYFIRE | 196 | Represents the ACT_VM_DRYFIRE activity state. |
| ACT_VM_HITLEFT | 197 | Represents the ACT_VM_HITLEFT activity state. |
| ACT_VM_HITLEFT2 | 198 | Represents the ACT_VM_HITLEFT2 activity state. |
| ACT_VM_HITRIGHT | 199 | Represents the ACT_VM_HITRIGHT activity state. |
| ACT_VM_HITRIGHT2 | 200 | Represents the ACT_VM_HITRIGHT2 activity state. |
| ACT_VM_HITCENTER | 201 | Represents the ACT_VM_HITCENTER activity state. |
| ACT_VM_HITCENTER2 | 202 | Represents the ACT_VM_HITCENTER2 activity state. |
| ACT_VM_MISSLEFT | 203 | Represents the ACT_VM_MISSLEFT activity state. |
| ACT_VM_MISSLEFT2 | 204 | Represents the ACT_VM_MISSLEFT2 activity state. |
| ACT_VM_MISSRIGHT | 205 | Represents the ACT_VM_MISSRIGHT activity state. |
| ACT_VM_MISSRIGHT2 | 206 | Represents the ACT_VM_MISSRIGHT2 activity state. |
| ACT_VM_MISSCENTER | 207 | Represents the ACT_VM_MISSCENTER activity state. |
| ACT_VM_MISSCENTER2 | 208 | Represents the ACT_VM_MISSCENTER2 activity state. |
| ACT_VM_HAULBACK | 209 | Represents the ACT_VM_HAULBACK activity state. |
| ACT_VM_SWINGHARD | 210 | Represents the ACT_VM_SWINGHARD activity state. |
| ACT_VM_SWINGMISS | 211 | Represents the ACT_VM_SWINGMISS activity state. |
| ACT_VM_SWINGHIT | 212 | Represents the ACT_VM_SWINGHIT activity state. |
| ACT_VM_IDLE_TO_LOWERED | 213 | Represents the ACT_VM_IDLE_TO_LOWERED activity state. |
| ACT_VM_IDLE_LOWERED | 214 | Represents the ACT_VM_IDLE_LOWERED activity state. |
| ACT_VM_LOWERED_TO_IDLE | 215 | Represents the ACT_VM_LOWERED_TO_IDLE activity state. |
| ACT_VM_RECOIL1 | 216 | Represents the ACT_VM_RECOIL1 activity state. |
| ACT_VM_RECOIL2 | 217 | Represents the ACT_VM_RECOIL2 activity state. |
| ACT_VM_RECOIL3 | 218 | Represents the ACT_VM_RECOIL3 activity state. |
| ACT_VM_PICKUP | 219 | Represents the ACT_VM_PICKUP activity state. |
| ACT_VM_RELEASE | 220 | Represents the ACT_VM_RELEASE activity state. |
| ACT_VM_MAUL_LOOP | 221 | Represents the ACT_VM_MAUL_LOOP activity state. |
| ACT_VM_ATTACH_SILENCER | 222 | Represents the ACT_VM_ATTACH_SILENCER activity state. |
| ACT_VM_DETACH_SILENCER | 223 | Represents the ACT_VM_DETACH_SILENCER activity state. |
| ACT_SLAM_STICKWALL_IDLE | 224 | Represents the ACT_SLAM_STICKWALL_IDLE activity state. |
| ACT_SLAM_STICKWALL_ND_IDLE | 225 | Represents the ACT_SLAM_STICKWALL_ND_IDLE activity state. |
| ACT_SLAM_STICKWALL_ATTACH | 226 | Represents the ACT_SLAM_STICKWALL_ATTACH activity state. |
| ACT_SLAM_STICKWALL_ATTACH2 | 227 | Represents the ACT_SLAM_STICKWALL_ATTACH2 activity state. |
| ACT_SLAM_STICKWALL_ND_ATTACH | 228 | Represents the ACT_SLAM_STICKWALL_ND_ATTACH activity state. |
| ACT_SLAM_STICKWALL_ND_ATTACH2 | 229 | Represents the ACT_SLAM_STICKWALL_ND_ATTACH2 activity state. |
| ACT_SLAM_STICKWALL_DETONATE | 230 | Represents the ACT_SLAM_STICKWALL_DETONATE activity state. |
| ACT_SLAM_STICKWALL_DETONATOR_HOLSTER | 231 | Represents the ACT_SLAM_STICKWALL_DETONATOR_HOLSTER activity state. |
| ACT_SLAM_STICKWALL_DRAW | 232 | Represents the ACT_SLAM_STICKWALL_DRAW activity state. |
| ACT_SLAM_STICKWALL_ND_DRAW | 233 | Represents the ACT_SLAM_STICKWALL_ND_DRAW activity state. |
| ACT_SLAM_STICKWALL_TO_THROW | 234 | Represents the ACT_SLAM_STICKWALL_TO_THROW activity state. |
| ACT_SLAM_STICKWALL_TO_THROW_ND | 235 | Represents the ACT_SLAM_STICKWALL_TO_THROW_ND activity state. |
| ACT_SLAM_STICKWALL_TO_TRIPMINE_ND | 236 | Represents the ACT_SLAM_STICKWALL_TO_TRIPMINE_ND activity state. |
| ACT_SLAM_THROW_IDLE | 237 | Represents the ACT_SLAM_THROW_IDLE activity state. |
| ACT_SLAM_THROW_ND_IDLE | 238 | Represents the ACT_SLAM_THROW_ND_IDLE activity state. |
| ACT_SLAM_THROW_THROW | 239 | Represents the ACT_SLAM_THROW_THROW activity state. |
| ACT_SLAM_THROW_THROW2 | 240 | Represents the ACT_SLAM_THROW_THROW2 activity state. |
| ACT_SLAM_THROW_THROW_ND | 241 | Represents the ACT_SLAM_THROW_THROW_ND activity state. |
| ACT_SLAM_THROW_THROW_ND2 | 242 | Represents the ACT_SLAM_THROW_THROW_ND2 activity state. |
| ACT_SLAM_THROW_DRAW | 243 | Represents the ACT_SLAM_THROW_DRAW activity state. |
| ACT_SLAM_THROW_ND_DRAW | 244 | Represents the ACT_SLAM_THROW_ND_DRAW activity state. |
| ACT_SLAM_THROW_TO_STICKWALL | 245 | Represents the ACT_SLAM_THROW_TO_STICKWALL activity state. |
| ACT_SLAM_THROW_TO_STICKWALL_ND | 246 | Represents the ACT_SLAM_THROW_TO_STICKWALL_ND activity state. |
| ACT_SLAM_THROW_DETONATE | 247 | Represents the ACT_SLAM_THROW_DETONATE activity state. |
| ACT_SLAM_THROW_DETONATOR_HOLSTER | 248 | Represents the ACT_SLAM_THROW_DETONATOR_HOLSTER activity state. |
| ACT_SLAM_THROW_TO_TRIPMINE_ND | 249 | Represents the ACT_SLAM_THROW_TO_TRIPMINE_ND activity state. |
| ACT_SLAM_TRIPMINE_IDLE | 250 | Represents the ACT_SLAM_TRIPMINE_IDLE activity state. |
| ACT_SLAM_TRIPMINE_DRAW | 251 | Represents the ACT_SLAM_TRIPMINE_DRAW activity state. |
| ACT_SLAM_TRIPMINE_ATTACH | 252 | Represents the ACT_SLAM_TRIPMINE_ATTACH activity state. |
| ACT_SLAM_TRIPMINE_ATTACH2 | 253 | Represents the ACT_SLAM_TRIPMINE_ATTACH2 activity state. |
| ACT_SLAM_TRIPMINE_TO_STICKWALL_ND | 254 | Represents the ACT_SLAM_TRIPMINE_TO_STICKWALL_ND activity state. |
| ACT_SLAM_TRIPMINE_TO_THROW_ND | 255 | Represents the ACT_SLAM_TRIPMINE_TO_THROW_ND activity state. |
| ACT_SLAM_DETONATOR_IDLE | 256 | Represents the ACT_SLAM_DETONATOR_IDLE activity state. |
| ACT_SLAM_DETONATOR_DRAW | 257 | Represents the ACT_SLAM_DETONATOR_DRAW activity state. |
| ACT_SLAM_DETONATOR_DETONATE | 258 | Represents the ACT_SLAM_DETONATOR_DETONATE activity state. |
| ACT_SLAM_DETONATOR_HOLSTER | 259 | Represents the ACT_SLAM_DETONATOR_HOLSTER activity state. |
| ACT_SLAM_DETONATOR_STICKWALL_DRAW | 260 | Represents the ACT_SLAM_DETONATOR_STICKWALL_DRAW activity state. |
| ACT_SLAM_DETONATOR_THROW_DRAW | 261 | Represents the ACT_SLAM_DETONATOR_THROW_DRAW activity state. |
| ACT_SHOTGUN_RELOAD_START | 262 | Represents the ACT_SHOTGUN_RELOAD_START activity state. |
| ACT_SHOTGUN_RELOAD_FINISH | 263 | Represents the ACT_SHOTGUN_RELOAD_FINISH activity state. |
| ACT_SHOTGUN_PUMP | 264 | Represents the ACT_SHOTGUN_PUMP activity state. |
| ACT_SMG2_IDLE2 | 265 | Represents the ACT_SMG2_IDLE2 activity state. |
| ACT_SMG2_FIRE2 | 266 | Represents the ACT_SMG2_FIRE2 activity state. |
| ACT_SMG2_DRAW2 | 267 | Represents the ACT_SMG2_DRAW2 activity state. |
| ACT_SMG2_RELOAD2 | 268 | Represents the ACT_SMG2_RELOAD2 activity state. |
| ACT_SMG2_DRYFIRE2 | 269 | Represents the ACT_SMG2_DRYFIRE2 activity state. |
| ACT_SMG2_TOAUTO | 270 | Represents the ACT_SMG2_TOAUTO activity state. |
| ACT_SMG2_TOBURST | 271 | Represents the ACT_SMG2_TOBURST activity state. |
| ACT_PHYSCANNON_UPGRADE | 272 | Represents the ACT_PHYSCANNON_UPGRADE activity state. |
| ACT_RANGE_ATTACK_AR1 | 273 | Represents the ACT_RANGE_ATTACK_AR1 activity state. |
| ACT_RANGE_ATTACK_AR2 | 274 | Represents the ACT_RANGE_ATTACK_AR2 activity state. |
| ACT_RANGE_ATTACK_AR2_LOW | 275 | Represents the ACT_RANGE_ATTACK_AR2_LOW activity state. |
| ACT_RANGE_ATTACK_AR2_GRENADE | 276 | Represents the ACT_RANGE_ATTACK_AR2_GRENADE activity state. |
| ACT_RANGE_ATTACK_HMG1 | 277 | Represents the ACT_RANGE_ATTACK_HMG1 activity state. |
| ACT_RANGE_ATTACK_ML | 278 | Represents the ACT_RANGE_ATTACK_ML activity state. |
| ACT_RANGE_ATTACK_SMG1 | 279 | Represents the ACT_RANGE_ATTACK_SMG1 activity state. |
| ACT_RANGE_ATTACK_SMG1_LOW | 280 | Represents the ACT_RANGE_ATTACK_SMG1_LOW activity state. |
| ACT_RANGE_ATTACK_SMG2 | 281 | Represents the ACT_RANGE_ATTACK_SMG2 activity state. |
| ACT_RANGE_ATTACK_SHOTGUN | 282 | Represents the ACT_RANGE_ATTACK_SHOTGUN activity state. |
| ACT_RANGE_ATTACK_SHOTGUN_LOW | 283 | Represents the ACT_RANGE_ATTACK_SHOTGUN_LOW activity state. |
| ACT_RANGE_ATTACK_PISTOL | 284 | Represents the ACT_RANGE_ATTACK_PISTOL activity state. |
| ACT_RANGE_ATTACK_PISTOL_LOW | 285 | Represents the ACT_RANGE_ATTACK_PISTOL_LOW activity state. |
| ACT_RANGE_ATTACK_SLAM | 286 | Represents the ACT_RANGE_ATTACK_SLAM activity state. |
| ACT_RANGE_ATTACK_TRIPWIRE | 287 | Represents the ACT_RANGE_ATTACK_TRIPWIRE activity state. |
| ACT_RANGE_ATTACK_THROW | 288 | Represents the ACT_RANGE_ATTACK_THROW activity state. |
| ACT_RANGE_ATTACK_SNIPER_RIFLE | 289 | Represents the ACT_RANGE_ATTACK_SNIPER_RIFLE activity state. |
| ACT_RANGE_ATTACK_RPG | 290 | Represents the ACT_RANGE_ATTACK_RPG activity state. |
| ACT_MELEE_ATTACK_SWING | 291 | Represents the ACT_MELEE_ATTACK_SWING activity state. |
| ACT_RANGE_AIM_LOW | 292 | Represents the ACT_RANGE_AIM_LOW activity state. |
| ACT_RANGE_AIM_SMG1_LOW | 293 | Represents the ACT_RANGE_AIM_SMG1_LOW activity state. |
| ACT_RANGE_AIM_PISTOL_LOW | 294 | Represents the ACT_RANGE_AIM_PISTOL_LOW activity state. |
| ACT_RANGE_AIM_AR2_LOW | 295 | Represents the ACT_RANGE_AIM_AR2_LOW activity state. |
| ACT_COVER_PISTOL_LOW | 296 | Represents the ACT_COVER_PISTOL_LOW activity state. |
| ACT_COVER_SMG1_LOW | 297 | Represents the ACT_COVER_SMG1_LOW activity state. |
| ACT_GESTURE_RANGE_ATTACK_AR1 | 298 | Represents the ACT_GESTURE_RANGE_ATTACK_AR1 activity state. |
| ACT_GESTURE_RANGE_ATTACK_AR2 | 299 | Represents the ACT_GESTURE_RANGE_ATTACK_AR2 activity state. |
| ACT_GESTURE_RANGE_ATTACK_AR2_GRENADE | 300 | Represents the ACT_GESTURE_RANGE_ATTACK_AR2_GRENADE activity state. |
| ACT_GESTURE_RANGE_ATTACK_HMG1 | 301 | Represents the ACT_GESTURE_RANGE_ATTACK_HMG1 activity state. |
| ACT_GESTURE_RANGE_ATTACK_ML | 302 | Represents the ACT_GESTURE_RANGE_ATTACK_ML activity state. |
| ACT_GESTURE_RANGE_ATTACK_SMG1 | 303 | Represents the ACT_GESTURE_RANGE_ATTACK_SMG1 activity state. |
| ACT_GESTURE_RANGE_ATTACK_SMG1_LOW | 304 | Represents the ACT_GESTURE_RANGE_ATTACK_SMG1_LOW activity state. |
| ACT_GESTURE_RANGE_ATTACK_SMG2 | 305 | Represents the ACT_GESTURE_RANGE_ATTACK_SMG2 activity state. |
| ACT_GESTURE_RANGE_ATTACK_SHOTGUN | 306 | Represents the ACT_GESTURE_RANGE_ATTACK_SHOTGUN activity state. |
| ACT_GESTURE_RANGE_ATTACK_PISTOL | 307 | Represents the ACT_GESTURE_RANGE_ATTACK_PISTOL activity state. |
| ACT_GESTURE_RANGE_ATTACK_PISTOL_LOW | 308 | Represents the ACT_GESTURE_RANGE_ATTACK_PISTOL_LOW activity state. |
| ACT_GESTURE_RANGE_ATTACK_SLAM | 309 | Represents the ACT_GESTURE_RANGE_ATTACK_SLAM activity state. |
| ACT_GESTURE_RANGE_ATTACK_TRIPWIRE | 310 | Represents the ACT_GESTURE_RANGE_ATTACK_TRIPWIRE activity state. |
| ACT_GESTURE_RANGE_ATTACK_THROW | 311 | Represents the ACT_GESTURE_RANGE_ATTACK_THROW activity state. |
| ACT_GESTURE_RANGE_ATTACK_SNIPER_RIFLE | 312 | Represents the ACT_GESTURE_RANGE_ATTACK_SNIPER_RIFLE activity state. |
| ACT_GESTURE_MELEE_ATTACK_SWING | 313 | Represents the ACT_GESTURE_MELEE_ATTACK_SWING activity state. |
| ACT_IDLE_RIFLE | 314 | Represents the ACT_IDLE_RIFLE activity state. |
| ACT_IDLE_SMG1 | 315 | Represents the ACT_IDLE_SMG1 activity state. |
| ACT_IDLE_ANGRY_SMG1 | 316 | Represents the ACT_IDLE_ANGRY_SMG1 activity state. |
| ACT_IDLE_PISTOL | 317 | Represents the ACT_IDLE_PISTOL activity state. |
| ACT_IDLE_ANGRY_PISTOL | 318 | Represents the ACT_IDLE_ANGRY_PISTOL activity state. |
| ACT_IDLE_ANGRY_SHOTGUN | 319 | Represents the ACT_IDLE_ANGRY_SHOTGUN activity state. |
| ACT_IDLE_STEALTH_PISTOL | 320 | Represents the ACT_IDLE_STEALTH_PISTOL activity state. |
| ACT_IDLE_PACKAGE | 321 | Represents the ACT_IDLE_PACKAGE activity state. |
| ACT_WALK_PACKAGE | 322 | Represents the ACT_WALK_PACKAGE activity state. |
| ACT_IDLE_SUITCASE | 323 | Represents the ACT_IDLE_SUITCASE activity state. |
| ACT_WALK_SUITCASE | 324 | Represents the ACT_WALK_SUITCASE activity state. |
| ACT_IDLE_SMG1_RELAXED | 325 | Represents the ACT_IDLE_SMG1_RELAXED activity state. |
| ACT_IDLE_SMG1_STIMULATED | 326 | Represents the ACT_IDLE_SMG1_STIMULATED activity state. |
| ACT_WALK_RIFLE_RELAXED | 327 | Represents the ACT_WALK_RIFLE_RELAXED activity state. |
| ACT_RUN_RIFLE_RELAXED | 328 | Represents the ACT_RUN_RIFLE_RELAXED activity state. |
| ACT_WALK_RIFLE_STIMULATED | 329 | Represents the ACT_WALK_RIFLE_STIMULATED activity state. |
| ACT_RUN_RIFLE_STIMULATED | 330 | Represents the ACT_RUN_RIFLE_STIMULATED activity state. |
| ACT_IDLE_AIM_RIFLE_STIMULATED | 331 | Represents the ACT_IDLE_AIM_RIFLE_STIMULATED activity state. |
| ACT_WALK_AIM_RIFLE_STIMULATED | 332 | Represents the ACT_WALK_AIM_RIFLE_STIMULATED activity state. |
| ACT_RUN_AIM_RIFLE_STIMULATED | 333 | Represents the ACT_RUN_AIM_RIFLE_STIMULATED activity state. |
| ACT_IDLE_SHOTGUN_RELAXED | 334 | Represents the ACT_IDLE_SHOTGUN_RELAXED activity state. |
| ACT_IDLE_SHOTGUN_STIMULATED | 335 | Represents the ACT_IDLE_SHOTGUN_STIMULATED activity state. |
| ACT_IDLE_SHOTGUN_AGITATED | 336 | Represents the ACT_IDLE_SHOTGUN_AGITATED activity state. |
| ACT_WALK_ANGRY | 337 | Represents the ACT_WALK_ANGRY activity state. |
| ACT_POLICE_HARASS1 | 338 | Represents the ACT_POLICE_HARASS1 activity state. |
| ACT_POLICE_HARASS2 | 339 | Represents the ACT_POLICE_HARASS2 activity state. |
| ACT_IDLE_MANNEDGUN | 340 | Represents the ACT_IDLE_MANNEDGUN activity state. |
| ACT_IDLE_MELEE | 341 | Represents the ACT_IDLE_MELEE activity state. |
| ACT_IDLE_ANGRY_MELEE | 342 | Represents the ACT_IDLE_ANGRY_MELEE activity state. |
| ACT_IDLE_RPG_RELAXED | 343 | Represents the ACT_IDLE_RPG_RELAXED activity state. |
| ACT_IDLE_RPG | 344 | Represents the ACT_IDLE_RPG activity state. |
| ACT_IDLE_ANGRY_RPG | 345 | Represents the ACT_IDLE_ANGRY_RPG activity state. |
| ACT_COVER_LOW_RPG | 346 | Represents the ACT_COVER_LOW_RPG activity state. |
| ACT_WALK_RPG | 347 | Represents the ACT_WALK_RPG activity state. |
| ACT_RUN_RPG | 348 | Represents the ACT_RUN_RPG activity state. |
| ACT_WALK_CROUCH_RPG | 349 | Represents the ACT_WALK_CROUCH_RPG activity state. |
| ACT_RUN_CROUCH_RPG | 350 | Represents the ACT_RUN_CROUCH_RPG activity state. |
| ACT_WALK_RPG_RELAXED | 351 | Represents the ACT_WALK_RPG_RELAXED activity state. |
| ACT_RUN_RPG_RELAXED | 352 | Represents the ACT_RUN_RPG_RELAXED activity state. |
| ACT_WALK_RIFLE | 353 | Represents the ACT_WALK_RIFLE activity state. |
| ACT_WALK_AIM_RIFLE | 354 | Represents the ACT_WALK_AIM_RIFLE activity state. |
| ACT_WALK_CROUCH_RIFLE | 355 | Represents the ACT_WALK_CROUCH_RIFLE activity state. |
| ACT_WALK_CROUCH_AIM_RIFLE | 356 | Represents the ACT_WALK_CROUCH_AIM_RIFLE activity state. |
| ACT_RUN_RIFLE | 357 | Represents the ACT_RUN_RIFLE activity state. |
| ACT_RUN_AIM_RIFLE | 358 | Represents the ACT_RUN_AIM_RIFLE activity state. |
| ACT_RUN_CROUCH_RIFLE | 359 | Represents the ACT_RUN_CROUCH_RIFLE activity state. |
| ACT_RUN_CROUCH_AIM_RIFLE | 360 | Represents the ACT_RUN_CROUCH_AIM_RIFLE activity state. |
| ACT_RUN_STEALTH_PISTOL | 361 | Represents the ACT_RUN_STEALTH_PISTOL activity state. |
| ACT_WALK_AIM_SHOTGUN | 362 | Represents the ACT_WALK_AIM_SHOTGUN activity state. |
| ACT_RUN_AIM_SHOTGUN | 363 | Represents the ACT_RUN_AIM_SHOTGUN activity state. |
| ACT_WALK_PISTOL | 364 | Represents the ACT_WALK_PISTOL activity state. |
| ACT_RUN_PISTOL | 365 | Represents the ACT_RUN_PISTOL activity state. |
| ACT_WALK_AIM_PISTOL | 366 | Represents the ACT_WALK_AIM_PISTOL activity state. |
| ACT_RUN_AIM_PISTOL | 367 | Represents the ACT_RUN_AIM_PISTOL activity state. |
| ACT_WALK_STEALTH_PISTOL | 368 | Represents the ACT_WALK_STEALTH_PISTOL activity state. |
| ACT_WALK_AIM_STEALTH_PISTOL | 369 | Represents the ACT_WALK_AIM_STEALTH_PISTOL activity state. |
| ACT_RUN_AIM_STEALTH_PISTOL | 370 | Represents the ACT_RUN_AIM_STEALTH_PISTOL activity state. |
| ACT_RELOAD_PISTOL | 371 | Represents the ACT_RELOAD_PISTOL activity state. |
| ACT_RELOAD_PISTOL_LOW | 372 | Represents the ACT_RELOAD_PISTOL_LOW activity state. |
| ACT_RELOAD_SMG1 | 373 | Represents the ACT_RELOAD_SMG1 activity state. |
| ACT_RELOAD_SMG1_LOW | 374 | Represents the ACT_RELOAD_SMG1_LOW activity state. |
| ACT_RELOAD_SHOTGUN | 375 | Represents the ACT_RELOAD_SHOTGUN activity state. |
| ACT_RELOAD_SHOTGUN_LOW | 376 | Represents the ACT_RELOAD_SHOTGUN_LOW activity state. |
| ACT_GESTURE_RELOAD | 377 | Represents the ACT_GESTURE_RELOAD activity state. |
| ACT_GESTURE_RELOAD_PISTOL | 378 | Represents the ACT_GESTURE_RELOAD_PISTOL activity state. |
| ACT_GESTURE_RELOAD_SMG1 | 379 | Represents the ACT_GESTURE_RELOAD_SMG1 activity state. |
| ACT_GESTURE_RELOAD_SHOTGUN | 380 | Represents the ACT_GESTURE_RELOAD_SHOTGUN activity state. |
| ACT_BUSY_LEAN_LEFT | 381 | Represents the ACT_BUSY_LEAN_LEFT activity state. |
| ACT_BUSY_LEAN_LEFT_ENTRY | 382 | Represents the ACT_BUSY_LEAN_LEFT_ENTRY activity state. |
| ACT_BUSY_LEAN_LEFT_EXIT | 383 | Represents the ACT_BUSY_LEAN_LEFT_EXIT activity state. |
| ACT_BUSY_LEAN_BACK | 384 | Represents the ACT_BUSY_LEAN_BACK activity state. |
| ACT_BUSY_LEAN_BACK_ENTRY | 385 | Represents the ACT_BUSY_LEAN_BACK_ENTRY activity state. |
| ACT_BUSY_LEAN_BACK_EXIT | 386 | Represents the ACT_BUSY_LEAN_BACK_EXIT activity state. |
| ACT_BUSY_SIT_GROUND | 387 | Represents the ACT_BUSY_SIT_GROUND activity state. |
| ACT_BUSY_SIT_GROUND_ENTRY | 388 | Represents the ACT_BUSY_SIT_GROUND_ENTRY activity state. |
| ACT_BUSY_SIT_GROUND_EXIT | 389 | Represents the ACT_BUSY_SIT_GROUND_EXIT activity state. |
| ACT_BUSY_SIT_CHAIR | 390 | Represents the ACT_BUSY_SIT_CHAIR activity state. |
| ACT_BUSY_SIT_CHAIR_ENTRY | 391 | Represents the ACT_BUSY_SIT_CHAIR_ENTRY activity state. |
| ACT_BUSY_SIT_CHAIR_EXIT | 392 | Represents the ACT_BUSY_SIT_CHAIR_EXIT activity state. |
| ACT_BUSY_STAND | 393 | Represents the ACT_BUSY_STAND activity state. |
| ACT_BUSY_QUEUE | 394 | Represents the ACT_BUSY_QUEUE activity state. |
| ACT_DUCK_DODGE | 395 | Represents the ACT_DUCK_DODGE activity state. |
| ACT_DIE_BARNACLE_SWALLOW | 396 | Represents the ACT_DIE_BARNACLE_SWALLOW activity state. |
| ACT_GESTURE_BARNACLE_STRANGLE | 397 | Represents the ACT_GESTURE_BARNACLE_STRANGLE activity state. |
| ACT_PHYSCANNON_DETACH | 398 | Represents the ACT_PHYSCANNON_DETACH activity state. |
| ACT_PHYSCANNON_ANIMATE | 399 | Represents the ACT_PHYSCANNON_ANIMATE activity state. |
| ACT_PHYSCANNON_ANIMATE_PRE | 400 | Represents the ACT_PHYSCANNON_ANIMATE_PRE activity state. |
| ACT_PHYSCANNON_ANIMATE_POST | 401 | Represents the ACT_PHYSCANNON_ANIMATE_POST activity state. |
| ACT_DIE_FRONTSIDE | 402 | Represents the ACT_DIE_FRONTSIDE activity state. |
| ACT_DIE_RIGHTSIDE | 403 | Represents the ACT_DIE_RIGHTSIDE activity state. |
| ACT_DIE_BACKSIDE | 404 | Represents the ACT_DIE_BACKSIDE activity state. |
| ACT_DIE_LEFTSIDE | 405 | Represents the ACT_DIE_LEFTSIDE activity state. |
| ACT_DIE_CROUCH_FRONTSIDE | 406 | Represents the ACT_DIE_CROUCH_FRONTSIDE activity state. |
| ACT_DIE_CROUCH_RIGHTSIDE | 407 | Represents the ACT_DIE_CROUCH_RIGHTSIDE activity state. |
| ACT_DIE_CROUCH_BACKSIDE | 408 | Represents the ACT_DIE_CROUCH_BACKSIDE activity state. |
| ACT_DIE_CROUCH_LEFTSIDE | 409 | Represents the ACT_DIE_CROUCH_LEFTSIDE activity state. |
| ACT_DIE_INCAP | 410 | Represents the ACT_DIE_INCAP activity state. |
| ACT_DIE_STANDING | 411 | Represents the ACT_DIE_STANDING activity state. |
| ACT_OPEN_DOOR | 412 | Represents the ACT_OPEN_DOOR activity state. |
| ACT_DI_ALYX_ZOMBIE_MELEE | 413 | Represents the ACT_DI_ALYX_ZOMBIE_MELEE activity state. |
| ACT_DI_ALYX_ZOMBIE_TORSO_MELEE | 414 | Represents the ACT_DI_ALYX_ZOMBIE_TORSO_MELEE activity state. |
| ACT_DI_ALYX_HEADCRAB_MELEE | 415 | Represents the ACT_DI_ALYX_HEADCRAB_MELEE activity state. |
| ACT_DI_ALYX_ANTLION | 416 | Represents the ACT_DI_ALYX_ANTLION activity state. |
| ACT_DI_ALYX_ZOMBIE_SHOTGUN64 | 417 | Represents the ACT_DI_ALYX_ZOMBIE_SHOTGUN64 activity state. |
| ACT_DI_ALYX_ZOMBIE_SHOTGUN26 | 418 | Represents the ACT_DI_ALYX_ZOMBIE_SHOTGUN26 activity state. |
| ACT_READINESS_RELAXED_TO_STIMULATED | 419 | Represents the ACT_READINESS_RELAXED_TO_STIMULATED activity state. |
| ACT_READINESS_RELAXED_TO_STIMULATED_WALK | 420 | Represents the ACT_READINESS_RELAXED_TO_STIMULATED_WALK activity state. |
| ACT_READINESS_AGITATED_TO_STIMULATED | 421 | Represents the ACT_READINESS_AGITATED_TO_STIMULATED activity state. |
| ACT_READINESS_STIMULATED_TO_RELAXED | 422 | Represents the ACT_READINESS_STIMULATED_TO_RELAXED activity state. |
| ACT_READINESS_PISTOL_RELAXED_TO_STIMULATED | 423 | Represents the ACT_READINESS_PISTOL_RELAXED_TO_STIMULATED activity state. |
| ACT_READINESS_PISTOL_RELAXED_TO_STIMULATED_WALK | 424 | Represents the ACT_READINESS_PISTOL_RELAXED_TO_STIMULATED_WALK activity state. |
| ACT_READINESS_PISTOL_AGITATED_TO_STIMULATED | 425 | Represents the ACT_READINESS_PISTOL_AGITATED_TO_STIMULATED activity state. |
| ACT_READINESS_PISTOL_STIMULATED_TO_RELAXED | 426 | Represents the ACT_READINESS_PISTOL_STIMULATED_TO_RELAXED activity state. |
| ACT_IDLE_CARRY | 427 | Represents the ACT_IDLE_CARRY activity state. |
| ACT_WALK_CARRY | 428 | Represents the ACT_WALK_CARRY activity state. |
| ACT_STARTDYING | 429 | Represents the ACT_STARTDYING activity state. |
| ACT_DYINGLOOP | 430 | Represents the ACT_DYINGLOOP activity state. |
| ACT_DYINGTODEAD | 431 | Represents the ACT_DYINGTODEAD activity state. |
| ACT_RIDE_MANNED_GUN | 432 | Represents the ACT_RIDE_MANNED_GUN activity state. |
| ACT_VM_SPRINT_ENTER | 433 | Represents the ACT_VM_SPRINT_ENTER activity state. |
| ACT_VM_SPRINT_IDLE | 434 | Represents the ACT_VM_SPRINT_IDLE activity state. |
| ACT_VM_SPRINT_LEAVE | 435 | Represents the ACT_VM_SPRINT_LEAVE activity state. |
| ACT_FIRE_START | 436 | Represents the ACT_FIRE_START activity state. |
| ACT_FIRE_LOOP | 437 | Represents the ACT_FIRE_LOOP activity state. |
| ACT_FIRE_END | 438 | Represents the ACT_FIRE_END activity state. |
| ACT_CROUCHING_GRENADEIDLE | 439 | Represents the ACT_CROUCHING_GRENADEIDLE activity state. |
| ACT_CROUCHING_GRENADEREADY | 440 | Represents the ACT_CROUCHING_GRENADEREADY activity state. |
| ACT_CROUCHING_PRIMARYATTACK | 441 | Represents the ACT_CROUCHING_PRIMARYATTACK activity state. |
| ACT_OVERLAY_GRENADEIDLE | 442 | Represents the ACT_OVERLAY_GRENADEIDLE activity state. |
| ACT_OVERLAY_GRENADEREADY | 443 | Represents the ACT_OVERLAY_GRENADEREADY activity state. |
| ACT_OVERLAY_PRIMARYATTACK | 444 | Represents the ACT_OVERLAY_PRIMARYATTACK activity state. |
| ACT_OVERLAY_SHIELD_UP | 445 | Represents the ACT_OVERLAY_SHIELD_UP activity state. |
| ACT_OVERLAY_SHIELD_DOWN | 446 | Represents the ACT_OVERLAY_SHIELD_DOWN activity state. |
| ACT_OVERLAY_SHIELD_UP_IDLE | 447 | Represents the ACT_OVERLAY_SHIELD_UP_IDLE activity state. |
| ACT_OVERLAY_SHIELD_ATTACK | 448 | Represents the ACT_OVERLAY_SHIELD_ATTACK activity state. |
| ACT_OVERLAY_SHIELD_KNOCKBACK | 449 | Represents the ACT_OVERLAY_SHIELD_KNOCKBACK activity state. |
| ACT_SHIELD_UP | 450 | Represents the ACT_SHIELD_UP activity state. |
| ACT_SHIELD_DOWN | 451 | Represents the ACT_SHIELD_DOWN activity state. |
| ACT_SHIELD_UP_IDLE | 452 | Represents the ACT_SHIELD_UP_IDLE activity state. |
| ACT_SHIELD_ATTACK | 453 | Represents the ACT_SHIELD_ATTACK activity state. |
| ACT_SHIELD_KNOCKBACK | 454 | Represents the ACT_SHIELD_KNOCKBACK activity state. |
| ACT_CROUCHING_SHIELD_UP | 455 | Represents the ACT_CROUCHING_SHIELD_UP activity state. |
| ACT_CROUCHING_SHIELD_DOWN | 456 | Represents the ACT_CROUCHING_SHIELD_DOWN activity state. |
| ACT_CROUCHING_SHIELD_UP_IDLE | 457 | Represents the ACT_CROUCHING_SHIELD_UP_IDLE activity state. |
| ACT_CROUCHING_SHIELD_ATTACK | 458 | Represents the ACT_CROUCHING_SHIELD_ATTACK activity state. |
| ACT_CROUCHING_SHIELD_KNOCKBACK | 459 | Represents the ACT_CROUCHING_SHIELD_KNOCKBACK activity state. |
| ACT_TURNRIGHT45 | 460 | Represents the ACT_TURNRIGHT45 activity state. |
| ACT_TURNLEFT45 | 461 | Represents the ACT_TURNLEFT45 activity state. |
| ACT_TURN | 462 | Represents the ACT_TURN activity state. |
| ACT_OBJ_ASSEMBLING | 463 | Represents the ACT_OBJ_ASSEMBLING activity state. |
| ACT_OBJ_DISMANTLING | 464 | Represents the ACT_OBJ_DISMANTLING activity state. |
| ACT_OBJ_STARTUP | 465 | Represents the ACT_OBJ_STARTUP activity state. |
| ACT_OBJ_RUNNING | 466 | Represents the ACT_OBJ_RUNNING activity state. |
| ACT_OBJ_IDLE | 467 | Represents the ACT_OBJ_IDLE activity state. |
| ACT_OBJ_PLACING | 468 | Represents the ACT_OBJ_PLACING activity state. |
| ACT_OBJ_DETERIORATING | 469 | Represents the ACT_OBJ_DETERIORATING activity state. |
| ACT_OBJ_UPGRADING | 470 | Represents the ACT_OBJ_UPGRADING activity state. |
| ACT_DEPLOY | 471 | Represents the ACT_DEPLOY activity state. |
| ACT_DEPLOY_IDLE | 472 | Represents the ACT_DEPLOY_IDLE activity state. |
| ACT_UNDEPLOY | 473 | Represents the ACT_UNDEPLOY activity state. |
| ACT_CROSSBOW_DRAW_UNLOADED | 474 | Represents the ACT_CROSSBOW_DRAW_UNLOADED activity state. |
| ACT_GAUSS_SPINUP | 475 | Represents the ACT_GAUSS_SPINUP activity state. |
| ACT_GAUSS_SPINCYCLE | 476 | Represents the ACT_GAUSS_SPINCYCLE activity state. |
| ACT_VM_PRIMARYATTACK_SILENCED | 477 | Represents the ACT_VM_PRIMARYATTACK_SILENCED activity state. |
| ACT_VM_RELOAD_SILENCED | 478 | Represents the ACT_VM_RELOAD_SILENCED activity state. |
| ACT_VM_DRYFIRE_SILENCED | 479 | Represents the ACT_VM_DRYFIRE_SILENCED activity state. |
| ACT_VM_IDLE_SILENCED | 480 | Represents the ACT_VM_IDLE_SILENCED activity state. |
| ACT_VM_DRAW_SILENCED | 481 | Represents the ACT_VM_DRAW_SILENCED activity state. |
| ACT_VM_IDLE_EMPTY_LEFT | 482 | Represents the ACT_VM_IDLE_EMPTY_LEFT activity state. |
| ACT_VM_DRYFIRE_LEFT | 483 | Represents the ACT_VM_DRYFIRE_LEFT activity state. |
| ACT_VM_IS_DRAW | 484 | Represents the ACT_VM_IS_DRAW activity state. |
| ACT_VM_IS_HOLSTER | 485 | Represents the ACT_VM_IS_HOLSTER activity state. |
| ACT_VM_IS_IDLE | 486 | Represents the ACT_VM_IS_IDLE activity state. |
| ACT_VM_IS_PRIMARYATTACK | 487 | Represents the ACT_VM_IS_PRIMARYATTACK activity state. |
| ACT_PLAYER_IDLE_FIRE | 488 | Represents the ACT_PLAYER_IDLE_FIRE activity state. |
| ACT_PLAYER_CROUCH_FIRE | 489 | Represents the ACT_PLAYER_CROUCH_FIRE activity state. |
| ACT_PLAYER_CROUCH_WALK_FIRE | 490 | Represents the ACT_PLAYER_CROUCH_WALK_FIRE activity state. |
| ACT_PLAYER_WALK_FIRE | 491 | Represents the ACT_PLAYER_WALK_FIRE activity state. |
| ACT_PLAYER_RUN_FIRE | 492 | Represents the ACT_PLAYER_RUN_FIRE activity state. |
| ACT_IDLETORUN | 493 | Represents the ACT_IDLETORUN activity state. |
| ACT_RUNTOIDLE | 494 | Represents the ACT_RUNTOIDLE activity state. |
| ACT_VM_DRAW_DEPLOYED | 495 | Represents the ACT_VM_DRAW_DEPLOYED activity state. |
| ACT_HL2MP_IDLE_MELEE | 496 | Represents the ACT_HL2MP_IDLE_MELEE activity state. |
| ACT_HL2MP_RUN_MELEE | 497 | Represents the ACT_HL2MP_RUN_MELEE activity state. |
| ACT_HL2MP_IDLE_CROUCH_MELEE | 498 | Represents the ACT_HL2MP_IDLE_CROUCH_MELEE activity state. |
| ACT_HL2MP_WALK_CROUCH_MELEE | 499 | Represents the ACT_HL2MP_WALK_CROUCH_MELEE activity state. |
| ACT_HL2MP_GESTURE_RANGE_ATTACK_MELEE | 500 | Represents the ACT_HL2MP_GESTURE_RANGE_ATTACK_MELEE activity state. |
| ACT_HL2MP_GESTURE_RELOAD_MELEE | 501 | Represents the ACT_HL2MP_GESTURE_RELOAD_MELEE activity state. |
| ACT_HL2MP_JUMP_MELEE | 502 | Represents the ACT_HL2MP_JUMP_MELEE activity state. |
| ACT_MP_STAND_IDLE | 503 | Represents the ACT_MP_STAND_IDLE activity state. |
| ACT_MP_CROUCH_IDLE | 504 | Represents the ACT_MP_CROUCH_IDLE activity state. |
| ACT_MP_CROUCH_DEPLOYED_IDLE | 505 | Represents the ACT_MP_CROUCH_DEPLOYED_IDLE activity state. |
| ACT_MP_CROUCH_DEPLOYED | 506 | Represents the ACT_MP_CROUCH_DEPLOYED activity state. |
| ACT_MP_DEPLOYED_IDLE | 507 | Represents the ACT_MP_DEPLOYED_IDLE activity state. |
| ACT_MP_RUN | 508 | Represents the ACT_MP_RUN activity state. |
| ACT_MP_WALK | 509 | Represents the ACT_MP_WALK activity state. |
| ACT_MP_AIRWALK | 510 | Represents the ACT_MP_AIRWALK activity state. |
| ACT_MP_CROUCHWALK | 511 | Represents the ACT_MP_CROUCHWALK activity state. |
| ACT_MP_SPRINT | 512 | Represents the ACT_MP_SPRINT activity state. |
| ACT_MP_JUMP | 513 | Represents the ACT_MP_JUMP activity state. |
| ACT_MP_JUMP_START | 514 | Represents the ACT_MP_JUMP_START activity state. |
| ACT_MP_JUMP_FLOAT | 515 | Represents the ACT_MP_JUMP_FLOAT activity state. |
| ACT_MP_JUMP_LAND | 516 | Represents the ACT_MP_JUMP_LAND activity state. |
| ACT_MP_DOUBLEJUMP | 517 | Represents the ACT_MP_DOUBLEJUMP activity state. |
| ACT_MP_SWIM | 518 | Represents the ACT_MP_SWIM activity state. |
| ACT_MP_DEPLOYED | 519 | Represents the ACT_MP_DEPLOYED activity state. |
| ACT_MP_SWIM_DEPLOYED | 520 | Represents the ACT_MP_SWIM_DEPLOYED activity state. |
| ACT_MP_VCD | 521 | Represents the ACT_MP_VCD activity state. |
| ACT_MP_ATTACK_STAND_PRIMARYFIRE | 522 | Represents the ACT_MP_ATTACK_STAND_PRIMARYFIRE activity state. |
| ACT_MP_ATTACK_STAND_PRIMARYFIRE_DEPLOYED | 523 | Represents the ACT_MP_ATTACK_STAND_PRIMARYFIRE_DEPLOYED activity state. |
| ACT_MP_ATTACK_STAND_SECONDARYFIRE | 524 | Represents the ACT_MP_ATTACK_STAND_SECONDARYFIRE activity state. |
| ACT_MP_ATTACK_STAND_GRENADE | 525 | Represents the ACT_MP_ATTACK_STAND_GRENADE activity state. |
| ACT_MP_ATTACK_CROUCH_PRIMARYFIRE | 526 | Represents the ACT_MP_ATTACK_CROUCH_PRIMARYFIRE activity state. |
| ACT_MP_ATTACK_CROUCH_PRIMARYFIRE_DEPLOYED | 527 | Represents the ACT_MP_ATTACK_CROUCH_PRIMARYFIRE_DEPLOYED activity state. |
| ACT_MP_ATTACK_CROUCH_SECONDARYFIRE | 528 | Represents the ACT_MP_ATTACK_CROUCH_SECONDARYFIRE activity state. |
| ACT_MP_ATTACK_CROUCH_GRENADE | 529 | Represents the ACT_MP_ATTACK_CROUCH_GRENADE activity state. |
| ACT_MP_ATTACK_SWIM_PRIMARYFIRE | 530 | Represents the ACT_MP_ATTACK_SWIM_PRIMARYFIRE activity state. |
| ACT_MP_ATTACK_SWIM_SECONDARYFIRE | 531 | Represents the ACT_MP_ATTACK_SWIM_SECONDARYFIRE activity state. |
| ACT_MP_ATTACK_SWIM_GRENADE | 532 | Represents the ACT_MP_ATTACK_SWIM_GRENADE activity state. |
| ACT_MP_ATTACK_AIRWALK_PRIMARYFIRE | 533 | Represents the ACT_MP_ATTACK_AIRWALK_PRIMARYFIRE activity state. |
| ACT_MP_ATTACK_AIRWALK_SECONDARYFIRE | 534 | Represents the ACT_MP_ATTACK_AIRWALK_SECONDARYFIRE activity state. |
| ACT_MP_ATTACK_AIRWALK_GRENADE | 535 | Represents the ACT_MP_ATTACK_AIRWALK_GRENADE activity state. |
| ACT_MP_RELOAD_STAND | 536 | Represents the ACT_MP_RELOAD_STAND activity state. |
| ACT_MP_RELOAD_STAND_LOOP | 537 | Represents the ACT_MP_RELOAD_STAND_LOOP activity state. |
| ACT_MP_RELOAD_STAND_END | 538 | Represents the ACT_MP_RELOAD_STAND_END activity state. |
| ACT_MP_RELOAD_CROUCH | 539 | Represents the ACT_MP_RELOAD_CROUCH activity state. |
| ACT_MP_RELOAD_CROUCH_LOOP | 540 | Represents the ACT_MP_RELOAD_CROUCH_LOOP activity state. |
| ACT_MP_RELOAD_CROUCH_END | 541 | Represents the ACT_MP_RELOAD_CROUCH_END activity state. |
| ACT_MP_RELOAD_SWIM | 542 | Represents the ACT_MP_RELOAD_SWIM activity state. |
| ACT_MP_RELOAD_SWIM_LOOP | 543 | Represents the ACT_MP_RELOAD_SWIM_LOOP activity state. |
| ACT_MP_RELOAD_SWIM_END | 544 | Represents the ACT_MP_RELOAD_SWIM_END activity state. |
| ACT_MP_RELOAD_AIRWALK | 545 | Represents the ACT_MP_RELOAD_AIRWALK activity state. |
| ACT_MP_RELOAD_AIRWALK_LOOP | 546 | Represents the ACT_MP_RELOAD_AIRWALK_LOOP activity state. |
| ACT_MP_RELOAD_AIRWALK_END | 547 | Represents the ACT_MP_RELOAD_AIRWALK_END activity state. |
| ACT_MP_ATTACK_STAND_PREFIRE | 548 | Represents the ACT_MP_ATTACK_STAND_PREFIRE activity state. |
| ACT_MP_ATTACK_STAND_POSTFIRE | 549 | Represents the ACT_MP_ATTACK_STAND_POSTFIRE activity state. |
| ACT_MP_ATTACK_STAND_STARTFIRE | 550 | Represents the ACT_MP_ATTACK_STAND_STARTFIRE activity state. |
| ACT_MP_ATTACK_CROUCH_PREFIRE | 551 | Represents the ACT_MP_ATTACK_CROUCH_PREFIRE activity state. |
| ACT_MP_ATTACK_CROUCH_POSTFIRE | 552 | Represents the ACT_MP_ATTACK_CROUCH_POSTFIRE activity state. |
| ACT_MP_ATTACK_SWIM_PREFIRE | 553 | Represents the ACT_MP_ATTACK_SWIM_PREFIRE activity state. |
| ACT_MP_ATTACK_SWIM_POSTFIRE | 554 | Represents the ACT_MP_ATTACK_SWIM_POSTFIRE activity state. |
| ACT_MP_STAND_PRIMARY | 555 | Represents the ACT_MP_STAND_PRIMARY activity state. |
| ACT_MP_CROUCH_PRIMARY | 556 | Represents the ACT_MP_CROUCH_PRIMARY activity state. |
| ACT_MP_RUN_PRIMARY | 557 | Represents the ACT_MP_RUN_PRIMARY activity state. |
| ACT_MP_WALK_PRIMARY | 558 | Represents the ACT_MP_WALK_PRIMARY activity state. |
| ACT_MP_AIRWALK_PRIMARY | 559 | Represents the ACT_MP_AIRWALK_PRIMARY activity state. |
| ACT_MP_CROUCHWALK_PRIMARY | 560 | Represents the ACT_MP_CROUCHWALK_PRIMARY activity state. |
| ACT_MP_JUMP_PRIMARY | 561 | Represents the ACT_MP_JUMP_PRIMARY activity state. |
| ACT_MP_JUMP_START_PRIMARY | 562 | Represents the ACT_MP_JUMP_START_PRIMARY activity state. |
| ACT_MP_JUMP_FLOAT_PRIMARY | 563 | Represents the ACT_MP_JUMP_FLOAT_PRIMARY activity state. |
| ACT_MP_JUMP_LAND_PRIMARY | 564 | Represents the ACT_MP_JUMP_LAND_PRIMARY activity state. |
| ACT_MP_SWIM_PRIMARY | 565 | Represents the ACT_MP_SWIM_PRIMARY activity state. |
| ACT_MP_DEPLOYED_PRIMARY | 566 | Represents the ACT_MP_DEPLOYED_PRIMARY activity state. |
| ACT_MP_SWIM_DEPLOYED_PRIMARY | 567 | Represents the ACT_MP_SWIM_DEPLOYED_PRIMARY activity state. |
| ACT_MP_ATTACK_STAND_PRIMARY | 568 | Represents the ACT_MP_ATTACK_STAND_PRIMARY activity state. |
| ACT_MP_ATTACK_STAND_PRIMARY_DEPLOYED | 569 | Represents the ACT_MP_ATTACK_STAND_PRIMARY_DEPLOYED activity state. |
| ACT_MP_ATTACK_CROUCH_PRIMARY | 570 | Represents the ACT_MP_ATTACK_CROUCH_PRIMARY activity state. |
| ACT_MP_ATTACK_CROUCH_PRIMARY_DEPLOYED | 571 | Represents the ACT_MP_ATTACK_CROUCH_PRIMARY_DEPLOYED activity state. |
| ACT_MP_ATTACK_SWIM_PRIMARY | 572 | Represents the ACT_MP_ATTACK_SWIM_PRIMARY activity state. |
| ACT_MP_ATTACK_AIRWALK_PRIMARY | 573 | Represents the ACT_MP_ATTACK_AIRWALK_PRIMARY activity state. |
| ACT_MP_RELOAD_STAND_PRIMARY | 574 | Represents the ACT_MP_RELOAD_STAND_PRIMARY activity state. |
| ACT_MP_RELOAD_STAND_PRIMARY_LOOP | 575 | Represents the ACT_MP_RELOAD_STAND_PRIMARY_LOOP activity state. |
| ACT_MP_RELOAD_STAND_PRIMARY_END | 576 | Represents the ACT_MP_RELOAD_STAND_PRIMARY_END activity state. |
| ACT_MP_RELOAD_CROUCH_PRIMARY | 577 | Represents the ACT_MP_RELOAD_CROUCH_PRIMARY activity state. |
| ACT_MP_RELOAD_CROUCH_PRIMARY_LOOP | 578 | Represents the ACT_MP_RELOAD_CROUCH_PRIMARY_LOOP activity state. |
| ACT_MP_RELOAD_CROUCH_PRIMARY_END | 579 | Represents the ACT_MP_RELOAD_CROUCH_PRIMARY_END activity state. |
| ACT_MP_RELOAD_SWIM_PRIMARY | 580 | Represents the ACT_MP_RELOAD_SWIM_PRIMARY activity state. |
| ACT_MP_RELOAD_SWIM_PRIMARY_LOOP | 581 | Represents the ACT_MP_RELOAD_SWIM_PRIMARY_LOOP activity state. |
| ACT_MP_RELOAD_SWIM_PRIMARY_END | 582 | Represents the ACT_MP_RELOAD_SWIM_PRIMARY_END activity state. |
| ACT_MP_RELOAD_AIRWALK_PRIMARY | 583 | Represents the ACT_MP_RELOAD_AIRWALK_PRIMARY activity state. |
| ACT_MP_RELOAD_AIRWALK_PRIMARY_LOOP | 584 | Represents the ACT_MP_RELOAD_AIRWALK_PRIMARY_LOOP activity state. |
| ACT_MP_RELOAD_AIRWALK_PRIMARY_END | 585 | Represents the ACT_MP_RELOAD_AIRWALK_PRIMARY_END activity state. |
| ACT_MP_ATTACK_STAND_GRENADE_PRIMARY | 586 | Represents the ACT_MP_ATTACK_STAND_GRENADE_PRIMARY activity state. |
| ACT_MP_ATTACK_CROUCH_GRENADE_PRIMARY | 587 | Represents the ACT_MP_ATTACK_CROUCH_GRENADE_PRIMARY activity state. |
| ACT_MP_ATTACK_SWIM_GRENADE_PRIMARY | 588 | Represents the ACT_MP_ATTACK_SWIM_GRENADE_PRIMARY activity state. |
| ACT_MP_ATTACK_AIRWALK_GRENADE_PRIMARY | 589 | Represents the ACT_MP_ATTACK_AIRWALK_GRENADE_PRIMARY activity state. |
| ACT_MP_STAND_SECONDARY | 590 | Represents the ACT_MP_STAND_SECONDARY activity state. |
| ACT_MP_CROUCH_SECONDARY | 591 | Represents the ACT_MP_CROUCH_SECONDARY activity state. |
| ACT_MP_RUN_SECONDARY | 592 | Represents the ACT_MP_RUN_SECONDARY activity state. |
| ACT_MP_WALK_SECONDARY | 593 | Represents the ACT_MP_WALK_SECONDARY activity state. |
| ACT_MP_AIRWALK_SECONDARY | 594 | Represents the ACT_MP_AIRWALK_SECONDARY activity state. |
| ACT_MP_CROUCHWALK_SECONDARY | 595 | Represents the ACT_MP_CROUCHWALK_SECONDARY activity state. |
| ACT_MP_JUMP_SECONDARY | 596 | Represents the ACT_MP_JUMP_SECONDARY activity state. |
| ACT_MP_JUMP_START_SECONDARY | 597 | Represents the ACT_MP_JUMP_START_SECONDARY activity state. |
| ACT_MP_JUMP_FLOAT_SECONDARY | 598 | Represents the ACT_MP_JUMP_FLOAT_SECONDARY activity state. |
| ACT_MP_JUMP_LAND_SECONDARY | 599 | Represents the ACT_MP_JUMP_LAND_SECONDARY activity state. |
| ACT_MP_SWIM_SECONDARY | 600 | Represents the ACT_MP_SWIM_SECONDARY activity state. |
| ACT_MP_ATTACK_STAND_SECONDARY | 601 | Represents the ACT_MP_ATTACK_STAND_SECONDARY activity state. |
| ACT_MP_ATTACK_CROUCH_SECONDARY | 602 | Represents the ACT_MP_ATTACK_CROUCH_SECONDARY activity state. |
| ACT_MP_ATTACK_SWIM_SECONDARY | 603 | Represents the ACT_MP_ATTACK_SWIM_SECONDARY activity state. |
| ACT_MP_ATTACK_AIRWALK_SECONDARY | 604 | Represents the ACT_MP_ATTACK_AIRWALK_SECONDARY activity state. |
| ACT_MP_RELOAD_STAND_SECONDARY | 605 | Represents the ACT_MP_RELOAD_STAND_SECONDARY activity state. |
| ACT_MP_RELOAD_STAND_SECONDARY_LOOP | 606 | Represents the ACT_MP_RELOAD_STAND_SECONDARY_LOOP activity state. |
| ACT_MP_RELOAD_STAND_SECONDARY_END | 607 | Represents the ACT_MP_RELOAD_STAND_SECONDARY_END activity state. |
| ACT_MP_RELOAD_CROUCH_SECONDARY | 608 | Represents the ACT_MP_RELOAD_CROUCH_SECONDARY activity state. |
| ACT_MP_RELOAD_CROUCH_SECONDARY_LOOP | 609 | Represents the ACT_MP_RELOAD_CROUCH_SECONDARY_LOOP activity state. |
| ACT_MP_RELOAD_CROUCH_SECONDARY_END | 610 | Represents the ACT_MP_RELOAD_CROUCH_SECONDARY_END activity state. |
| ACT_MP_RELOAD_SWIM_SECONDARY | 611 | Represents the ACT_MP_RELOAD_SWIM_SECONDARY activity state. |
| ACT_MP_RELOAD_SWIM_SECONDARY_LOOP | 612 | Represents the ACT_MP_RELOAD_SWIM_SECONDARY_LOOP activity state. |
| ACT_MP_RELOAD_SWIM_SECONDARY_END | 613 | Represents the ACT_MP_RELOAD_SWIM_SECONDARY_END activity state. |
| ACT_MP_RELOAD_AIRWALK_SECONDARY | 614 | Represents the ACT_MP_RELOAD_AIRWALK_SECONDARY activity state. |
| ACT_MP_RELOAD_AIRWALK_SECONDARY_LOOP | 615 | Represents the ACT_MP_RELOAD_AIRWALK_SECONDARY_LOOP activity state. |
| ACT_MP_RELOAD_AIRWALK_SECONDARY_END | 616 | Represents the ACT_MP_RELOAD_AIRWALK_SECONDARY_END activity state. |
| ACT_MP_ATTACK_STAND_GRENADE_SECONDARY | 617 | Represents the ACT_MP_ATTACK_STAND_GRENADE_SECONDARY activity state. |
| ACT_MP_ATTACK_CROUCH_GRENADE_SECONDARY | 618 | Represents the ACT_MP_ATTACK_CROUCH_GRENADE_SECONDARY activity state. |
| ACT_MP_ATTACK_SWIM_GRENADE_SECONDARY | 619 | Represents the ACT_MP_ATTACK_SWIM_GRENADE_SECONDARY activity state. |
| ACT_MP_ATTACK_AIRWALK_GRENADE_SECONDARY | 620 | Represents the ACT_MP_ATTACK_AIRWALK_GRENADE_SECONDARY activity state. |
| ACT_MP_STAND_MELEE | 621 | Represents the ACT_MP_STAND_MELEE activity state. |
| ACT_MP_CROUCH_MELEE | 622 | Represents the ACT_MP_CROUCH_MELEE activity state. |
| ACT_MP_RUN_MELEE | 623 | Represents the ACT_MP_RUN_MELEE activity state. |
| ACT_MP_WALK_MELEE | 624 | Represents the ACT_MP_WALK_MELEE activity state. |
| ACT_MP_AIRWALK_MELEE | 625 | Represents the ACT_MP_AIRWALK_MELEE activity state. |
| ACT_MP_CROUCHWALK_MELEE | 626 | Represents the ACT_MP_CROUCHWALK_MELEE activity state. |
| ACT_MP_JUMP_MELEE | 627 | Represents the ACT_MP_JUMP_MELEE activity state. |
| ACT_MP_JUMP_START_MELEE | 628 | Represents the ACT_MP_JUMP_START_MELEE activity state. |
| ACT_MP_JUMP_FLOAT_MELEE | 629 | Represents the ACT_MP_JUMP_FLOAT_MELEE activity state. |
| ACT_MP_JUMP_LAND_MELEE | 630 | Represents the ACT_MP_JUMP_LAND_MELEE activity state. |
| ACT_MP_SWIM_MELEE | 631 | Represents the ACT_MP_SWIM_MELEE activity state. |
| ACT_MP_ATTACK_STAND_MELEE | 632 | Represents the ACT_MP_ATTACK_STAND_MELEE activity state. |
| ACT_MP_ATTACK_STAND_MELEE_SECONDARY | 633 | Represents the ACT_MP_ATTACK_STAND_MELEE_SECONDARY activity state. |
| ACT_MP_ATTACK_CROUCH_MELEE | 634 | Represents the ACT_MP_ATTACK_CROUCH_MELEE activity state. |
| ACT_MP_ATTACK_CROUCH_MELEE_SECONDARY | 635 | Represents the ACT_MP_ATTACK_CROUCH_MELEE_SECONDARY activity state. |
| ACT_MP_ATTACK_SWIM_MELEE | 636 | Represents the ACT_MP_ATTACK_SWIM_MELEE activity state. |
| ACT_MP_ATTACK_AIRWALK_MELEE | 637 | Represents the ACT_MP_ATTACK_AIRWALK_MELEE activity state. |
| ACT_MP_ATTACK_STAND_GRENADE_MELEE | 638 | Represents the ACT_MP_ATTACK_STAND_GRENADE_MELEE activity state. |
| ACT_MP_ATTACK_CROUCH_GRENADE_MELEE | 639 | Represents the ACT_MP_ATTACK_CROUCH_GRENADE_MELEE activity state. |
| ACT_MP_ATTACK_SWIM_GRENADE_MELEE | 640 | Represents the ACT_MP_ATTACK_SWIM_GRENADE_MELEE activity state. |
| ACT_MP_ATTACK_AIRWALK_GRENADE_MELEE | 641 | Represents the ACT_MP_ATTACK_AIRWALK_GRENADE_MELEE activity state. |
| ACT_MP_STAND_ITEM1 | 642 | Represents the ACT_MP_STAND_ITEM1 activity state. |
| ACT_MP_CROUCH_ITEM1 | 643 | Represents the ACT_MP_CROUCH_ITEM1 activity state. |
| ACT_MP_RUN_ITEM1 | 644 | Represents the ACT_MP_RUN_ITEM1 activity state. |
| ACT_MP_WALK_ITEM1 | 645 | Represents the ACT_MP_WALK_ITEM1 activity state. |
| ACT_MP_AIRWALK_ITEM1 | 646 | Represents the ACT_MP_AIRWALK_ITEM1 activity state. |
| ACT_MP_CROUCHWALK_ITEM1 | 647 | Represents the ACT_MP_CROUCHWALK_ITEM1 activity state. |
| ACT_MP_JUMP_ITEM1 | 648 | Represents the ACT_MP_JUMP_ITEM1 activity state. |
| ACT_MP_JUMP_START_ITEM1 | 649 | Represents the ACT_MP_JUMP_START_ITEM1 activity state. |
| ACT_MP_JUMP_FLOAT_ITEM1 | 650 | Represents the ACT_MP_JUMP_FLOAT_ITEM1 activity state. |
| ACT_MP_JUMP_LAND_ITEM1 | 651 | Represents the ACT_MP_JUMP_LAND_ITEM1 activity state. |
| ACT_MP_SWIM_ITEM1 | 652 | Represents the ACT_MP_SWIM_ITEM1 activity state. |
| ACT_MP_ATTACK_STAND_ITEM1 | 653 | Represents the ACT_MP_ATTACK_STAND_ITEM1 activity state. |
| ACT_MP_ATTACK_STAND_ITEM1_SECONDARY | 654 | Represents the ACT_MP_ATTACK_STAND_ITEM1_SECONDARY activity state. |
| ACT_MP_ATTACK_CROUCH_ITEM1 | 655 | Represents the ACT_MP_ATTACK_CROUCH_ITEM1 activity state. |
| ACT_MP_ATTACK_CROUCH_ITEM1_SECONDARY | 656 | Represents the ACT_MP_ATTACK_CROUCH_ITEM1_SECONDARY activity state. |
| ACT_MP_ATTACK_SWIM_ITEM1 | 657 | Represents the ACT_MP_ATTACK_SWIM_ITEM1 activity state. |
| ACT_MP_ATTACK_AIRWALK_ITEM1 | 658 | Represents the ACT_MP_ATTACK_AIRWALK_ITEM1 activity state. |
| ACT_MP_STAND_ITEM2 | 659 | Represents the ACT_MP_STAND_ITEM2 activity state. |
| ACT_MP_CROUCH_ITEM2 | 660 | Represents the ACT_MP_CROUCH_ITEM2 activity state. |
| ACT_MP_RUN_ITEM2 | 661 | Represents the ACT_MP_RUN_ITEM2 activity state. |
| ACT_MP_WALK_ITEM2 | 662 | Represents the ACT_MP_WALK_ITEM2 activity state. |
| ACT_MP_AIRWALK_ITEM2 | 663 | Represents the ACT_MP_AIRWALK_ITEM2 activity state. |
| ACT_MP_CROUCHWALK_ITEM2 | 664 | Represents the ACT_MP_CROUCHWALK_ITEM2 activity state. |
| ACT_MP_JUMP_ITEM2 | 665 | Represents the ACT_MP_JUMP_ITEM2 activity state. |
| ACT_MP_JUMP_START_ITEM2 | 666 | Represents the ACT_MP_JUMP_START_ITEM2 activity state. |
| ACT_MP_JUMP_FLOAT_ITEM2 | 667 | Represents the ACT_MP_JUMP_FLOAT_ITEM2 activity state. |
| ACT_MP_JUMP_LAND_ITEM2 | 668 | Represents the ACT_MP_JUMP_LAND_ITEM2 activity state. |
| ACT_MP_SWIM_ITEM2 | 669 | Represents the ACT_MP_SWIM_ITEM2 activity state. |
| ACT_MP_ATTACK_STAND_ITEM2 | 670 | Represents the ACT_MP_ATTACK_STAND_ITEM2 activity state. |
| ACT_MP_ATTACK_STAND_ITEM2_SECONDARY | 671 | Represents the ACT_MP_ATTACK_STAND_ITEM2_SECONDARY activity state. |
| ACT_MP_ATTACK_CROUCH_ITEM2 | 672 | Represents the ACT_MP_ATTACK_CROUCH_ITEM2 activity state. |
| ACT_MP_ATTACK_CROUCH_ITEM2_SECONDARY | 673 | Represents the ACT_MP_ATTACK_CROUCH_ITEM2_SECONDARY activity state. |
| ACT_MP_ATTACK_SWIM_ITEM2 | 674 | Represents the ACT_MP_ATTACK_SWIM_ITEM2 activity state. |
| ACT_MP_ATTACK_AIRWALK_ITEM2 | 675 | Represents the ACT_MP_ATTACK_AIRWALK_ITEM2 activity state. |
| ACT_MP_GESTURE_FLINCH | 676 | Represents the ACT_MP_GESTURE_FLINCH activity state. |
| ACT_MP_GESTURE_FLINCH_PRIMARY | 677 | Represents the ACT_MP_GESTURE_FLINCH_PRIMARY activity state. |
| ACT_MP_GESTURE_FLINCH_SECONDARY | 678 | Represents the ACT_MP_GESTURE_FLINCH_SECONDARY activity state. |
| ACT_MP_GESTURE_FLINCH_MELEE | 679 | Represents the ACT_MP_GESTURE_FLINCH_MELEE activity state. |
| ACT_MP_GESTURE_FLINCH_ITEM1 | 680 | Represents the ACT_MP_GESTURE_FLINCH_ITEM1 activity state. |
| ACT_MP_GESTURE_FLINCH_ITEM2 | 681 | Represents the ACT_MP_GESTURE_FLINCH_ITEM2 activity state. |
| ACT_MP_GESTURE_FLINCH_HEAD | 682 | Represents the ACT_MP_GESTURE_FLINCH_HEAD activity state. |
| ACT_MP_GESTURE_FLINCH_CHEST | 683 | Represents the ACT_MP_GESTURE_FLINCH_CHEST activity state. |
| ACT_MP_GESTURE_FLINCH_STOMACH | 684 | Represents the ACT_MP_GESTURE_FLINCH_STOMACH activity state. |
| ACT_MP_GESTURE_FLINCH_LEFTARM | 685 | Represents the ACT_MP_GESTURE_FLINCH_LEFTARM activity state. |
| ACT_MP_GESTURE_FLINCH_RIGHTARM | 686 | Represents the ACT_MP_GESTURE_FLINCH_RIGHTARM activity state. |
| ACT_MP_GESTURE_FLINCH_LEFTLEG | 687 | Represents the ACT_MP_GESTURE_FLINCH_LEFTLEG activity state. |
| ACT_MP_GESTURE_FLINCH_RIGHTLEG | 688 | Represents the ACT_MP_GESTURE_FLINCH_RIGHTLEG activity state. |
| ACT_MP_GRENADE1_DRAW | 689 | Represents the ACT_MP_GRENADE1_DRAW activity state. |
| ACT_MP_GRENADE1_IDLE | 690 | Represents the ACT_MP_GRENADE1_IDLE activity state. |
| ACT_MP_GRENADE1_ATTACK | 691 | Represents the ACT_MP_GRENADE1_ATTACK activity state. |
| ACT_MP_GRENADE2_DRAW | 692 | Represents the ACT_MP_GRENADE2_DRAW activity state. |
| ACT_MP_GRENADE2_IDLE | 693 | Represents the ACT_MP_GRENADE2_IDLE activity state. |
| ACT_MP_GRENADE2_ATTACK | 694 | Represents the ACT_MP_GRENADE2_ATTACK activity state. |
| ACT_MP_PRIMARY_GRENADE1_DRAW | 695 | Represents the ACT_MP_PRIMARY_GRENADE1_DRAW activity state. |
| ACT_MP_PRIMARY_GRENADE1_IDLE | 696 | Represents the ACT_MP_PRIMARY_GRENADE1_IDLE activity state. |
| ACT_MP_PRIMARY_GRENADE1_ATTACK | 697 | Represents the ACT_MP_PRIMARY_GRENADE1_ATTACK activity state. |
| ACT_MP_PRIMARY_GRENADE2_DRAW | 698 | Represents the ACT_MP_PRIMARY_GRENADE2_DRAW activity state. |
| ACT_MP_PRIMARY_GRENADE2_IDLE | 699 | Represents the ACT_MP_PRIMARY_GRENADE2_IDLE activity state. |
| ACT_MP_PRIMARY_GRENADE2_ATTACK | 700 | Represents the ACT_MP_PRIMARY_GRENADE2_ATTACK activity state. |
| ACT_MP_SECONDARY_GRENADE1_DRAW | 701 | Represents the ACT_MP_SECONDARY_GRENADE1_DRAW activity state. |
| ACT_MP_SECONDARY_GRENADE1_IDLE | 702 | Represents the ACT_MP_SECONDARY_GRENADE1_IDLE activity state. |
| ACT_MP_SECONDARY_GRENADE1_ATTACK | 703 | Represents the ACT_MP_SECONDARY_GRENADE1_ATTACK activity state. |
| ACT_MP_SECONDARY_GRENADE2_DRAW | 704 | Represents the ACT_MP_SECONDARY_GRENADE2_DRAW activity state. |
| ACT_MP_SECONDARY_GRENADE2_IDLE | 705 | Represents the ACT_MP_SECONDARY_GRENADE2_IDLE activity state. |
| ACT_MP_SECONDARY_GRENADE2_ATTACK | 706 | Represents the ACT_MP_SECONDARY_GRENADE2_ATTACK activity state. |
| ACT_MP_MELEE_GRENADE1_DRAW | 707 | Represents the ACT_MP_MELEE_GRENADE1_DRAW activity state. |
| ACT_MP_MELEE_GRENADE1_IDLE | 708 | Represents the ACT_MP_MELEE_GRENADE1_IDLE activity state. |
| ACT_MP_MELEE_GRENADE1_ATTACK | 709 | Represents the ACT_MP_MELEE_GRENADE1_ATTACK activity state. |
| ACT_MP_MELEE_GRENADE2_DRAW | 710 | Represents the ACT_MP_MELEE_GRENADE2_DRAW activity state. |
| ACT_MP_MELEE_GRENADE2_IDLE | 711 | Represents the ACT_MP_MELEE_GRENADE2_IDLE activity state. |
| ACT_MP_MELEE_GRENADE2_ATTACK | 712 | Represents the ACT_MP_MELEE_GRENADE2_ATTACK activity state. |
| ACT_MP_ITEM1_GRENADE1_DRAW | 713 | Represents the ACT_MP_ITEM1_GRENADE1_DRAW activity state. |
| ACT_MP_ITEM1_GRENADE1_IDLE | 714 | Represents the ACT_MP_ITEM1_GRENADE1_IDLE activity state. |
| ACT_MP_ITEM1_GRENADE1_ATTACK | 715 | Represents the ACT_MP_ITEM1_GRENADE1_ATTACK activity state. |
| ACT_MP_ITEM1_GRENADE2_DRAW | 716 | Represents the ACT_MP_ITEM1_GRENADE2_DRAW activity state. |
| ACT_MP_ITEM1_GRENADE2_IDLE | 717 | Represents the ACT_MP_ITEM1_GRENADE2_IDLE activity state. |
| ACT_MP_ITEM1_GRENADE2_ATTACK | 718 | Represents the ACT_MP_ITEM1_GRENADE2_ATTACK activity state. |
| ACT_MP_ITEM2_GRENADE1_DRAW | 719 | Represents the ACT_MP_ITEM2_GRENADE1_DRAW activity state. |
| ACT_MP_ITEM2_GRENADE1_IDLE | 720 | Represents the ACT_MP_ITEM2_GRENADE1_IDLE activity state. |
| ACT_MP_ITEM2_GRENADE1_ATTACK | 721 | Represents the ACT_MP_ITEM2_GRENADE1_ATTACK activity state. |
| ACT_MP_ITEM2_GRENADE2_DRAW | 722 | Represents the ACT_MP_ITEM2_GRENADE2_DRAW activity state. |
| ACT_MP_ITEM2_GRENADE2_IDLE | 723 | Represents the ACT_MP_ITEM2_GRENADE2_IDLE activity state. |
| ACT_MP_ITEM2_GRENADE2_ATTACK | 724 | Represents the ACT_MP_ITEM2_GRENADE2_ATTACK activity state. |
| ACT_MP_STAND_BUILDING | 725 | Represents the ACT_MP_STAND_BUILDING activity state. |
| ACT_MP_CROUCH_BUILDING | 726 | Represents the ACT_MP_CROUCH_BUILDING activity state. |
| ACT_MP_RUN_BUILDING | 727 | Represents the ACT_MP_RUN_BUILDING activity state. |
| ACT_MP_WALK_BUILDING | 728 | Represents the ACT_MP_WALK_BUILDING activity state. |
| ACT_MP_AIRWALK_BUILDING | 729 | Represents the ACT_MP_AIRWALK_BUILDING activity state. |
| ACT_MP_CROUCHWALK_BUILDING | 730 | Represents the ACT_MP_CROUCHWALK_BUILDING activity state. |
| ACT_MP_JUMP_BUILDING | 731 | Represents the ACT_MP_JUMP_BUILDING activity state. |
| ACT_MP_JUMP_START_BUILDING | 732 | Represents the ACT_MP_JUMP_START_BUILDING activity state. |
| ACT_MP_JUMP_FLOAT_BUILDING | 733 | Represents the ACT_MP_JUMP_FLOAT_BUILDING activity state. |
| ACT_MP_JUMP_LAND_BUILDING | 734 | Represents the ACT_MP_JUMP_LAND_BUILDING activity state. |
| ACT_MP_SWIM_BUILDING | 735 | Represents the ACT_MP_SWIM_BUILDING activity state. |
| ACT_MP_ATTACK_STAND_BUILDING | 736 | Represents the ACT_MP_ATTACK_STAND_BUILDING activity state. |
| ACT_MP_ATTACK_CROUCH_BUILDING | 737 | Represents the ACT_MP_ATTACK_CROUCH_BUILDING activity state. |
| ACT_MP_ATTACK_SWIM_BUILDING | 738 | Represents the ACT_MP_ATTACK_SWIM_BUILDING activity state. |
| ACT_MP_ATTACK_AIRWALK_BUILDING | 739 | Represents the ACT_MP_ATTACK_AIRWALK_BUILDING activity state. |
| ACT_MP_ATTACK_STAND_GRENADE_BUILDING | 740 | Represents the ACT_MP_ATTACK_STAND_GRENADE_BUILDING activity state. |
| ACT_MP_ATTACK_CROUCH_GRENADE_BUILDING | 741 | Represents the ACT_MP_ATTACK_CROUCH_GRENADE_BUILDING activity state. |
| ACT_MP_ATTACK_SWIM_GRENADE_BUILDING | 742 | Represents the ACT_MP_ATTACK_SWIM_GRENADE_BUILDING activity state. |
| ACT_MP_ATTACK_AIRWALK_GRENADE_BUILDING | 743 | Represents the ACT_MP_ATTACK_AIRWALK_GRENADE_BUILDING activity state. |
| ACT_MP_STAND_PDA | 744 | Represents the ACT_MP_STAND_PDA activity state. |
| ACT_MP_CROUCH_PDA | 745 | Represents the ACT_MP_CROUCH_PDA activity state. |
| ACT_MP_RUN_PDA | 746 | Represents the ACT_MP_RUN_PDA activity state. |
| ACT_MP_WALK_PDA | 747 | Represents the ACT_MP_WALK_PDA activity state. |
| ACT_MP_AIRWALK_PDA | 748 | Represents the ACT_MP_AIRWALK_PDA activity state. |
| ACT_MP_CROUCHWALK_PDA | 749 | Represents the ACT_MP_CROUCHWALK_PDA activity state. |
| ACT_MP_JUMP_PDA | 750 | Represents the ACT_MP_JUMP_PDA activity state. |
| ACT_MP_JUMP_START_PDA | 751 | Represents the ACT_MP_JUMP_START_PDA activity state. |
| ACT_MP_JUMP_FLOAT_PDA | 752 | Represents the ACT_MP_JUMP_FLOAT_PDA activity state. |
| ACT_MP_JUMP_LAND_PDA | 753 | Represents the ACT_MP_JUMP_LAND_PDA activity state. |
| ACT_MP_SWIM_PDA | 754 | Represents the ACT_MP_SWIM_PDA activity state. |
| ACT_MP_ATTACK_STAND_PDA | 755 | Represents the ACT_MP_ATTACK_STAND_PDA activity state. |
| ACT_MP_ATTACK_SWIM_PDA | 756 | Represents the ACT_MP_ATTACK_SWIM_PDA activity state. |
| ACT_MP_GESTURE_VC_HANDMOUTH | 757 | Represents the ACT_MP_GESTURE_VC_HANDMOUTH activity state. |
| ACT_MP_GESTURE_VC_FINGERPOINT | 758 | Represents the ACT_MP_GESTURE_VC_FINGERPOINT activity state. |
| ACT_MP_GESTURE_VC_FISTPUMP | 759 | Represents the ACT_MP_GESTURE_VC_FISTPUMP activity state. |
| ACT_MP_GESTURE_VC_THUMBSUP | 760 | Represents the ACT_MP_GESTURE_VC_THUMBSUP activity state. |
| ACT_MP_GESTURE_VC_NODYES | 761 | Represents the ACT_MP_GESTURE_VC_NODYES activity state. |
| ACT_MP_GESTURE_VC_NODNO | 762 | Represents the ACT_MP_GESTURE_VC_NODNO activity state. |
| ACT_MP_GESTURE_VC_HANDMOUTH_PRIMARY | 763 | Represents the ACT_MP_GESTURE_VC_HANDMOUTH_PRIMARY activity state. |
| ACT_MP_GESTURE_VC_FINGERPOINT_PRIMARY | 764 | Represents the ACT_MP_GESTURE_VC_FINGERPOINT_PRIMARY activity state. |
| ACT_MP_GESTURE_VC_FISTPUMP_PRIMARY | 765 | Represents the ACT_MP_GESTURE_VC_FISTPUMP_PRIMARY activity state. |
| ACT_MP_GESTURE_VC_THUMBSUP_PRIMARY | 766 | Represents the ACT_MP_GESTURE_VC_THUMBSUP_PRIMARY activity state. |
| ACT_MP_GESTURE_VC_NODYES_PRIMARY | 767 | Represents the ACT_MP_GESTURE_VC_NODYES_PRIMARY activity state. |
| ACT_MP_GESTURE_VC_NODNO_PRIMARY | 768 | Represents the ACT_MP_GESTURE_VC_NODNO_PRIMARY activity state. |
| ACT_MP_GESTURE_VC_HANDMOUTH_SECONDARY | 769 | Represents the ACT_MP_GESTURE_VC_HANDMOUTH_SECONDARY activity state. |
| ACT_MP_GESTURE_VC_FINGERPOINT_SECONDARY | 770 | Represents the ACT_MP_GESTURE_VC_FINGERPOINT_SECONDARY activity state. |
| ACT_MP_GESTURE_VC_FISTPUMP_SECONDARY | 771 | Represents the ACT_MP_GESTURE_VC_FISTPUMP_SECONDARY activity state. |
| ACT_MP_GESTURE_VC_THUMBSUP_SECONDARY | 772 | Represents the ACT_MP_GESTURE_VC_THUMBSUP_SECONDARY activity state. |
| ACT_MP_GESTURE_VC_NODYES_SECONDARY | 773 | Represents the ACT_MP_GESTURE_VC_NODYES_SECONDARY activity state. |
| ACT_MP_GESTURE_VC_NODNO_SECONDARY | 774 | Represents the ACT_MP_GESTURE_VC_NODNO_SECONDARY activity state. |
| ACT_MP_GESTURE_VC_HANDMOUTH_MELEE | 775 | Represents the ACT_MP_GESTURE_VC_HANDMOUTH_MELEE activity state. |
| ACT_MP_GESTURE_VC_FINGERPOINT_MELEE | 776 | Represents the ACT_MP_GESTURE_VC_FINGERPOINT_MELEE activity state. |
| ACT_MP_GESTURE_VC_FISTPUMP_MELEE | 777 | Represents the ACT_MP_GESTURE_VC_FISTPUMP_MELEE activity state. |
| ACT_MP_GESTURE_VC_THUMBSUP_MELEE | 778 | Represents the ACT_MP_GESTURE_VC_THUMBSUP_MELEE activity state. |
| ACT_MP_GESTURE_VC_NODYES_MELEE | 779 | Represents the ACT_MP_GESTURE_VC_NODYES_MELEE activity state. |
| ACT_MP_GESTURE_VC_NODNO_MELEE | 780 | Represents the ACT_MP_GESTURE_VC_NODNO_MELEE activity state. |
| ACT_MP_GESTURE_VC_HANDMOUTH_ITEM1 | 781 | Represents the ACT_MP_GESTURE_VC_HANDMOUTH_ITEM1 activity state. |
| ACT_MP_GESTURE_VC_FINGERPOINT_ITEM1 | 782 | Represents the ACT_MP_GESTURE_VC_FINGERPOINT_ITEM1 activity state. |
| ACT_MP_GESTURE_VC_FISTPUMP_ITEM1 | 783 | Represents the ACT_MP_GESTURE_VC_FISTPUMP_ITEM1 activity state. |
| ACT_MP_GESTURE_VC_THUMBSUP_ITEM1 | 784 | Represents the ACT_MP_GESTURE_VC_THUMBSUP_ITEM1 activity state. |
| ACT_MP_GESTURE_VC_NODYES_ITEM1 | 785 | Represents the ACT_MP_GESTURE_VC_NODYES_ITEM1 activity state. |
| ACT_MP_GESTURE_VC_NODNO_ITEM1 | 786 | Represents the ACT_MP_GESTURE_VC_NODNO_ITEM1 activity state. |
| ACT_MP_GESTURE_VC_HANDMOUTH_ITEM2 | 787 | Represents the ACT_MP_GESTURE_VC_HANDMOUTH_ITEM2 activity state. |
| ACT_MP_GESTURE_VC_FINGERPOINT_ITEM2 | 788 | Represents the ACT_MP_GESTURE_VC_FINGERPOINT_ITEM2 activity state. |
| ACT_MP_GESTURE_VC_FISTPUMP_ITEM2 | 789 | Represents the ACT_MP_GESTURE_VC_FISTPUMP_ITEM2 activity state. |
| ACT_MP_GESTURE_VC_THUMBSUP_ITEM2 | 790 | Represents the ACT_MP_GESTURE_VC_THUMBSUP_ITEM2 activity state. |
| ACT_MP_GESTURE_VC_NODYES_ITEM2 | 791 | Represents the ACT_MP_GESTURE_VC_NODYES_ITEM2 activity state. |
| ACT_MP_GESTURE_VC_NODNO_ITEM2 | 792 | Represents the ACT_MP_GESTURE_VC_NODNO_ITEM2 activity state. |
| ACT_MP_GESTURE_VC_HANDMOUTH_BUILDING | 793 | Represents the ACT_MP_GESTURE_VC_HANDMOUTH_BUILDING activity state. |
| ACT_MP_GESTURE_VC_FINGERPOINT_BUILDING | 794 | Represents the ACT_MP_GESTURE_VC_FINGERPOINT_BUILDING activity state. |
| ACT_MP_GESTURE_VC_FISTPUMP_BUILDING | 795 | Represents the ACT_MP_GESTURE_VC_FISTPUMP_BUILDING activity state. |
| ACT_MP_GESTURE_VC_THUMBSUP_BUILDING | 796 | Represents the ACT_MP_GESTURE_VC_THUMBSUP_BUILDING activity state. |
| ACT_MP_GESTURE_VC_NODYES_BUILDING | 797 | Represents the ACT_MP_GESTURE_VC_NODYES_BUILDING activity state. |
| ACT_MP_GESTURE_VC_NODNO_BUILDING | 798 | Represents the ACT_MP_GESTURE_VC_NODNO_BUILDING activity state. |
| ACT_MP_GESTURE_VC_HANDMOUTH_PDA | 799 | Represents the ACT_MP_GESTURE_VC_HANDMOUTH_PDA activity state. |
| ACT_MP_GESTURE_VC_FINGERPOINT_PDA | 800 | Represents the ACT_MP_GESTURE_VC_FINGERPOINT_PDA activity state. |
| ACT_MP_GESTURE_VC_FISTPUMP_PDA | 801 | Represents the ACT_MP_GESTURE_VC_FISTPUMP_PDA activity state. |
| ACT_MP_GESTURE_VC_THUMBSUP_PDA | 802 | Represents the ACT_MP_GESTURE_VC_THUMBSUP_PDA activity state. |
| ACT_MP_GESTURE_VC_NODYES_PDA | 803 | Represents the ACT_MP_GESTURE_VC_NODYES_PDA activity state. |
| ACT_MP_GESTURE_VC_NODNO_PDA | 804 | Represents the ACT_MP_GESTURE_VC_NODNO_PDA activity state. |
| ACT_VM_UNUSABLE | 805 | Represents the ACT_VM_UNUSABLE activity state. |
| ACT_VM_UNUSABLE_TO_USABLE | 806 | Represents the ACT_VM_UNUSABLE_TO_USABLE activity state. |
| ACT_VM_USABLE_TO_UNUSABLE | 807 | Represents the ACT_VM_USABLE_TO_UNUSABLE activity state. |
| ACT_PRIMARY_VM_DRAW | 808 | Represents the ACT_PRIMARY_VM_DRAW activity state. |
| ACT_PRIMARY_VM_HOLSTER | 809 | Represents the ACT_PRIMARY_VM_HOLSTER activity state. |
| ACT_PRIMARY_VM_IDLE | 810 | Represents the ACT_PRIMARY_VM_IDLE activity state. |
| ACT_PRIMARY_VM_PULLBACK | 811 | Represents the ACT_PRIMARY_VM_PULLBACK activity state. |
| ACT_PRIMARY_VM_PRIMARYATTACK | 812 | Represents the ACT_PRIMARY_VM_PRIMARYATTACK activity state. |
| ACT_PRIMARY_VM_SECONDARYATTACK | 813 | Represents the ACT_PRIMARY_VM_SECONDARYATTACK activity state. |
| ACT_PRIMARY_VM_RELOAD | 814 | Represents the ACT_PRIMARY_VM_RELOAD activity state. |
| ACT_PRIMARY_VM_DRYFIRE | 815 | Represents the ACT_PRIMARY_VM_DRYFIRE activity state. |
| ACT_PRIMARY_VM_IDLE_TO_LOWERED | 816 | Represents the ACT_PRIMARY_VM_IDLE_TO_LOWERED activity state. |
| ACT_PRIMARY_VM_IDLE_LOWERED | 817 | Represents the ACT_PRIMARY_VM_IDLE_LOWERED activity state. |
| ACT_PRIMARY_VM_LOWERED_TO_IDLE | 818 | Represents the ACT_PRIMARY_VM_LOWERED_TO_IDLE activity state. |
| ACT_SECONDARY_VM_DRAW | 819 | Represents the ACT_SECONDARY_VM_DRAW activity state. |
| ACT_SECONDARY_VM_HOLSTER | 820 | Represents the ACT_SECONDARY_VM_HOLSTER activity state. |
| ACT_SECONDARY_VM_IDLE | 821 | Represents the ACT_SECONDARY_VM_IDLE activity state. |
| ACT_SECONDARY_VM_PULLBACK | 822 | Represents the ACT_SECONDARY_VM_PULLBACK activity state. |
| ACT_SECONDARY_VM_PRIMARYATTACK | 823 | Represents the ACT_SECONDARY_VM_PRIMARYATTACK activity state. |
| ACT_SECONDARY_VM_SECONDARYATTACK | 824 | Represents the ACT_SECONDARY_VM_SECONDARYATTACK activity state. |
| ACT_SECONDARY_VM_RELOAD | 825 | Represents the ACT_SECONDARY_VM_RELOAD activity state. |
| ACT_SECONDARY_VM_DRYFIRE | 826 | Represents the ACT_SECONDARY_VM_DRYFIRE activity state. |
| ACT_SECONDARY_VM_IDLE_TO_LOWERED | 827 | Represents the ACT_SECONDARY_VM_IDLE_TO_LOWERED activity state. |
| ACT_SECONDARY_VM_IDLE_LOWERED | 828 | Represents the ACT_SECONDARY_VM_IDLE_LOWERED activity state. |
| ACT_SECONDARY_VM_LOWERED_TO_IDLE | 829 | Represents the ACT_SECONDARY_VM_LOWERED_TO_IDLE activity state. |
| ACT_MELEE_VM_DRAW | 830 | Represents the ACT_MELEE_VM_DRAW activity state. |
| ACT_MELEE_VM_HOLSTER | 831 | Represents the ACT_MELEE_VM_HOLSTER activity state. |
| ACT_MELEE_VM_IDLE | 832 | Represents the ACT_MELEE_VM_IDLE activity state. |
| ACT_MELEE_VM_PULLBACK | 833 | Represents the ACT_MELEE_VM_PULLBACK activity state. |
| ACT_MELEE_VM_PRIMARYATTACK | 834 | Represents the ACT_MELEE_VM_PRIMARYATTACK activity state. |
| ACT_MELEE_VM_SECONDARYATTACK | 835 | Represents the ACT_MELEE_VM_SECONDARYATTACK activity state. |
| ACT_MELEE_VM_RELOAD | 836 | Represents the ACT_MELEE_VM_RELOAD activity state. |
| ACT_MELEE_VM_DRYFIRE | 837 | Represents the ACT_MELEE_VM_DRYFIRE activity state. |
| ACT_MELEE_VM_IDLE_TO_LOWERED | 838 | Represents the ACT_MELEE_VM_IDLE_TO_LOWERED activity state. |
| ACT_MELEE_VM_IDLE_LOWERED | 839 | Represents the ACT_MELEE_VM_IDLE_LOWERED activity state. |
| ACT_MELEE_VM_LOWERED_TO_IDLE | 840 | Represents the ACT_MELEE_VM_LOWERED_TO_IDLE activity state. |
| ACT_PDA_VM_DRAW | 841 | Represents the ACT_PDA_VM_DRAW activity state. |
| ACT_PDA_VM_HOLSTER | 842 | Represents the ACT_PDA_VM_HOLSTER activity state. |
| ACT_PDA_VM_IDLE | 843 | Represents the ACT_PDA_VM_IDLE activity state. |
| ACT_PDA_VM_PULLBACK | 844 | Represents the ACT_PDA_VM_PULLBACK activity state. |
| ACT_PDA_VM_PRIMARYATTACK | 845 | Represents the ACT_PDA_VM_PRIMARYATTACK activity state. |
| ACT_PDA_VM_SECONDARYATTACK | 846 | Represents the ACT_PDA_VM_SECONDARYATTACK activity state. |
| ACT_PDA_VM_RELOAD | 847 | Represents the ACT_PDA_VM_RELOAD activity state. |
| ACT_PDA_VM_DRYFIRE | 848 | Represents the ACT_PDA_VM_DRYFIRE activity state. |
| ACT_PDA_VM_IDLE_TO_LOWERED | 849 | Represents the ACT_PDA_VM_IDLE_TO_LOWERED activity state. |
| ACT_PDA_VM_IDLE_LOWERED | 850 | Represents the ACT_PDA_VM_IDLE_LOWERED activity state. |
| ACT_PDA_VM_LOWERED_TO_IDLE | 851 | Represents the ACT_PDA_VM_LOWERED_TO_IDLE activity state. |
| ACT_ITEM1_VM_DRAW | 852 | Represents the ACT_ITEM1_VM_DRAW activity state. |
| ACT_ITEM1_VM_HOLSTER | 853 | Represents the ACT_ITEM1_VM_HOLSTER activity state. |
| ACT_ITEM1_VM_IDLE | 854 | Represents the ACT_ITEM1_VM_IDLE activity state. |
| ACT_ITEM1_VM_PULLBACK | 855 | Represents the ACT_ITEM1_VM_PULLBACK activity state. |
| ACT_ITEM1_VM_PRIMARYATTACK | 856 | Represents the ACT_ITEM1_VM_PRIMARYATTACK activity state. |
| ACT_ITEM1_VM_SECONDARYATTACK | 857 | Represents the ACT_ITEM1_VM_SECONDARYATTACK activity state. |
| ACT_ITEM1_VM_RELOAD | 858 | Represents the ACT_ITEM1_VM_RELOAD activity state. |
| ACT_ITEM1_VM_DRYFIRE | 859 | Represents the ACT_ITEM1_VM_DRYFIRE activity state. |
| ACT_ITEM1_VM_IDLE_TO_LOWERED | 860 | Represents the ACT_ITEM1_VM_IDLE_TO_LOWERED activity state. |
| ACT_ITEM1_VM_IDLE_LOWERED | 861 | Represents the ACT_ITEM1_VM_IDLE_LOWERED activity state. |
| ACT_ITEM1_VM_LOWERED_TO_IDLE | 862 | Represents the ACT_ITEM1_VM_LOWERED_TO_IDLE activity state. |
| ACT_ITEM2_VM_DRAW | 863 | Represents the ACT_ITEM2_VM_DRAW activity state. |
| ACT_ITEM2_VM_HOLSTER | 864 | Represents the ACT_ITEM2_VM_HOLSTER activity state. |
| ACT_ITEM2_VM_IDLE | 865 | Represents the ACT_ITEM2_VM_IDLE activity state. |
| ACT_ITEM2_VM_PULLBACK | 866 | Represents the ACT_ITEM2_VM_PULLBACK activity state. |
| ACT_ITEM2_VM_PRIMARYATTACK | 867 | Represents the ACT_ITEM2_VM_PRIMARYATTACK activity state. |
| ACT_ITEM2_VM_SECONDARYATTACK | 868 | Represents the ACT_ITEM2_VM_SECONDARYATTACK activity state. |
| ACT_ITEM2_VM_RELOAD | 869 | Represents the ACT_ITEM2_VM_RELOAD activity state. |
| ACT_ITEM2_VM_DRYFIRE | 870 | Represents the ACT_ITEM2_VM_DRYFIRE activity state. |
| ACT_ITEM2_VM_IDLE_TO_LOWERED | 871 | Represents the ACT_ITEM2_VM_IDLE_TO_LOWERED activity state. |
| ACT_ITEM2_VM_IDLE_LOWERED | 872 | Represents the ACT_ITEM2_VM_IDLE_LOWERED activity state. |
| ACT_ITEM2_VM_LOWERED_TO_IDLE | 873 | Represents the ACT_ITEM2_VM_LOWERED_TO_IDLE activity state. |
| ACT_RELOAD_SUCCEED | 874 | Represents the ACT_RELOAD_SUCCEED activity state. |
| ACT_RELOAD_FAIL | 875 | Represents the ACT_RELOAD_FAIL activity state. |
| ACT_WALK_AIM_AUTOGUN | 876 | Represents the ACT_WALK_AIM_AUTOGUN activity state. |
| ACT_RUN_AIM_AUTOGUN | 877 | Represents the ACT_RUN_AIM_AUTOGUN activity state. |
| ACT_IDLE_AUTOGUN | 878 | Represents the ACT_IDLE_AUTOGUN activity state. |
| ACT_IDLE_AIM_AUTOGUN | 879 | Represents the ACT_IDLE_AIM_AUTOGUN activity state. |
| ACT_RELOAD_AUTOGUN | 880 | Represents the ACT_RELOAD_AUTOGUN activity state. |
| ACT_CROUCH_IDLE_AUTOGUN | 881 | Represents the ACT_CROUCH_IDLE_AUTOGUN activity state. |
| ACT_RANGE_ATTACK_AUTOGUN | 882 | Represents the ACT_RANGE_ATTACK_AUTOGUN activity state. |
| ACT_JUMP_AUTOGUN | 883 | Represents the ACT_JUMP_AUTOGUN activity state. |
| ACT_IDLE_AIM_PISTOL | 884 | Represents the ACT_IDLE_AIM_PISTOL activity state. |
| ACT_WALK_AIM_DUAL | 885 | Represents the ACT_WALK_AIM_DUAL activity state. |
| ACT_RUN_AIM_DUAL | 886 | Represents the ACT_RUN_AIM_DUAL activity state. |
| ACT_IDLE_DUAL | 887 | Represents the ACT_IDLE_DUAL activity state. |
| ACT_IDLE_AIM_DUAL | 888 | Represents the ACT_IDLE_AIM_DUAL activity state. |
| ACT_RELOAD_DUAL | 889 | Represents the ACT_RELOAD_DUAL activity state. |
| ACT_CROUCH_IDLE_DUAL | 890 | Represents the ACT_CROUCH_IDLE_DUAL activity state. |
| ACT_RANGE_ATTACK_DUAL | 891 | Represents the ACT_RANGE_ATTACK_DUAL activity state. |
| ACT_JUMP_DUAL | 892 | Represents the ACT_JUMP_DUAL activity state. |
| ACT_IDLE_AIM_SHOTGUN | 893 | Represents the ACT_IDLE_AIM_SHOTGUN activity state. |
| ACT_CROUCH_IDLE_SHOTGUN | 894 | Represents the ACT_CROUCH_IDLE_SHOTGUN activity state. |
| ACT_IDLE_AIM_RIFLE | 895 | Represents the ACT_IDLE_AIM_RIFLE activity state. |
| ACT_CROUCH_IDLE_RIFLE | 896 | Represents the ACT_CROUCH_IDLE_RIFLE activity state. |
| ACT_RANGE_ATTACK_RIFLE | 897 | Represents the ACT_RANGE_ATTACK_RIFLE activity state. |
| ACT_SLEEP | 898 | Represents the ACT_SLEEP activity state. |
| ACT_WAKE | 899 | Represents the ACT_WAKE activity state. |
| ACT_FLICK_LEFT | 900 | Represents the ACT_FLICK_LEFT activity state. |
| ACT_FLICK_LEFT_MIDDLE | 901 | Represents the ACT_FLICK_LEFT_MIDDLE activity state. |
| ACT_FLICK_RIGHT_MIDDLE | 902 | Represents the ACT_FLICK_RIGHT_MIDDLE activity state. |
| ACT_FLICK_RIGHT | 903 | Represents the ACT_FLICK_RIGHT activity state. |
| ACT_SPINAROUND | 904 | Represents the ACT_SPINAROUND activity state. |
| ACT_PREP_TO_FIRE | 905 | Represents the ACT_PREP_TO_FIRE activity state. |
| ACT_FIRE | 906 | Represents the ACT_FIRE activity state. |
| ACT_FIRE_RECOVER | 907 | Represents the ACT_FIRE_RECOVER activity state. |
| ACT_SPRAY | 908 | Represents the ACT_SPRAY activity state. |
| ACT_PREP_EXPLODE | 909 | Represents the ACT_PREP_EXPLODE activity state. |
| ACT_EXPLODE | 910 | Represents the ACT_EXPLODE activity state. |
| ACT_SCRIPT_CUSTOM_0 | 911 | Represents the ACT_SCRIPT_CUSTOM_0 activity state. |
| ACT_SCRIPT_CUSTOM_1 | 912 | Represents the ACT_SCRIPT_CUSTOM_1 activity state. |
| ACT_SCRIPT_CUSTOM_2 | 913 | Represents the ACT_SCRIPT_CUSTOM_2 activity state. |
| ACT_SCRIPT_CUSTOM_3 | 914 | Represents the ACT_SCRIPT_CUSTOM_3 activity state. |
| ACT_SCRIPT_CUSTOM_4 | 915 | Represents the ACT_SCRIPT_CUSTOM_4 activity state. |
| ACT_SCRIPT_CUSTOM_5 | 916 | Represents the ACT_SCRIPT_CUSTOM_5 activity state. |
| ACT_SCRIPT_CUSTOM_6 | 917 | Represents the ACT_SCRIPT_CUSTOM_6 activity state. |
| ACT_SCRIPT_CUSTOM_7 | 918 | Represents the ACT_SCRIPT_CUSTOM_7 activity state. |
| ACT_SCRIPT_CUSTOM_8 | 919 | Represents the ACT_SCRIPT_CUSTOM_8 activity state. |
| ACT_SCRIPT_CUSTOM_9 | 920 | Represents the ACT_SCRIPT_CUSTOM_9 activity state. |
| ACT_SCRIPT_CUSTOM_10 | 921 | Represents the ACT_SCRIPT_CUSTOM_10 activity state. |
| ACT_SCRIPT_CUSTOM_11 | 922 | Represents the ACT_SCRIPT_CUSTOM_11 activity state. |
| ACT_SCRIPT_CUSTOM_12 | 923 | Represents the ACT_SCRIPT_CUSTOM_12 activity state. |
| ACT_SCRIPT_CUSTOM_13 | 924 | Represents the ACT_SCRIPT_CUSTOM_13 activity state. |
| ACT_SCRIPT_CUSTOM_14 | 925 | Represents the ACT_SCRIPT_CUSTOM_14 activity state. |
| ACT_SCRIPT_CUSTOM_15 | 926 | Represents the ACT_SCRIPT_CUSTOM_15 activity state. |
| ACT_SCRIPT_CUSTOM_16 | 927 | Represents the ACT_SCRIPT_CUSTOM_16 activity state. |
| ACT_SCRIPT_CUSTOM_17 | 928 | Represents the ACT_SCRIPT_CUSTOM_17 activity state. |
| ACT_SCRIPT_CUSTOM_18 | 929 | Represents the ACT_SCRIPT_CUSTOM_18 activity state. |
| ACT_SCRIPT_CUSTOM_19 | 930 | Represents the ACT_SCRIPT_CUSTOM_19 activity state. |
| ACT_SCRIPT_CUSTOM_20 | 931 | Represents the ACT_SCRIPT_CUSTOM_20 activity state. |
| ACT_SCRIPT_CUSTOM_21 | 932 | Represents the ACT_SCRIPT_CUSTOM_21 activity state. |
| ACT_SCRIPT_CUSTOM_22 | 933 | Represents the ACT_SCRIPT_CUSTOM_22 activity state. |
| ACT_SCRIPT_CUSTOM_23 | 934 | Represents the ACT_SCRIPT_CUSTOM_23 activity state. |
| ACT_SCRIPT_CUSTOM_24 | 935 | Represents the ACT_SCRIPT_CUSTOM_24 activity state. |
| ACT_SCRIPT_CUSTOM_25 | 936 | Represents the ACT_SCRIPT_CUSTOM_25 activity state. |
| ACT_SCRIPT_CUSTOM_26 | 937 | Represents the ACT_SCRIPT_CUSTOM_26 activity state. |
| ACT_SCRIPT_CUSTOM_27 | 938 | Represents the ACT_SCRIPT_CUSTOM_27 activity state. |
| ACT_SCRIPT_CUSTOM_28 | 939 | Represents the ACT_SCRIPT_CUSTOM_28 activity state. |
| ACT_SCRIPT_CUSTOM_29 | 940 | Represents the ACT_SCRIPT_CUSTOM_29 activity state. |
| ACT_SCRIPT_CUSTOM_30 | 941 | Represents the ACT_SCRIPT_CUSTOM_30 activity state. |
| ACT_SCRIPT_CUSTOM_31 | 942 | Represents the ACT_SCRIPT_CUSTOM_31 activity state. |
| ACT_VR_PISTOL_LAST_SHOT | 943 | Represents the ACT_VR_PISTOL_LAST_SHOT activity state. |
| ACT_VR_PISTOL_SLIDE_RELEASE | 944 | Represents the ACT_VR_PISTOL_SLIDE_RELEASE activity state. |
| ACT_VR_PISTOL_CLIP_OUT_CHAMBERED | 945 | Represents the ACT_VR_PISTOL_CLIP_OUT_CHAMBERED activity state. |
| ACT_VR_PISTOL_CLIP_OUT_SLIDE_BACK | 946 | Represents the ACT_VR_PISTOL_CLIP_OUT_SLIDE_BACK activity state. |
| ACT_VR_PISTOL_CLIP_IN_CHAMBERED | 947 | Represents the ACT_VR_PISTOL_CLIP_IN_CHAMBERED activity state. |
| ACT_VR_PISTOL_CLIP_IN_SLIDE_BACK | 948 | Represents the ACT_VR_PISTOL_CLIP_IN_SLIDE_BACK activity state. |
| ACT_VR_PISTOL_IDLE_SLIDE_BACK | 949 | Represents the ACT_VR_PISTOL_IDLE_SLIDE_BACK activity state. |
| ACT_VR_PISTOL_IDLE_SLIDE_BACK_CLIP_READY | 950 | Represents the ACT_VR_PISTOL_IDLE_SLIDE_BACK_CLIP_READY activity state. |
| ACT_RAGDOLL_RECOVERY_FRONT | 951 | Represents the ACT_RAGDOLL_RECOVERY_FRONT activity state. |
| ACT_RAGDOLL_RECOVERY_BACK | 952 | Represents the ACT_RAGDOLL_RECOVERY_BACK activity state. |
| ACT_RAGDOLL_RECOVERY_LEFT | 953 | Represents the ACT_RAGDOLL_RECOVERY_LEFT activity state. |
| ACT_RAGDOLL_RECOVERY_RIGHT | 954 | Represents the ACT_RAGDOLL_RECOVERY_RIGHT activity state. |
| ACT_GRABBITYGLOVES_GRAB | 955 | Represents the ACT_GRABBITYGLOVES_GRAB activity state. |
| ACT_GRABBITYGLOVES_RELEASE | 956 | Represents the ACT_GRABBITYGLOVES_RELEASE activity state. |
| ACT_GRABBITYGLOVES_GRAB_IDLE | 957 | Represents the ACT_GRABBITYGLOVES_GRAB_IDLE activity state. |
| ACT_GRABBITYGLOVES_ACTIVE | 958 | Represents the ACT_GRABBITYGLOVES_ACTIVE activity state. |
| ACT_GRABBITYGLOVES_ACTIVE_IDLE | 959 | Represents the ACT_GRABBITYGLOVES_ACTIVE_IDLE activity state. |
| ACT_GRABBITYGLOVES_DEACTIVATE | 960 | Represents the ACT_GRABBITYGLOVES_DEACTIVATE activity state. |
| ACT_GRABBITYGLOVES_PULL | 961 | Represents the ACT_GRABBITYGLOVES_PULL activity state. |
| ACT_HEADCRAB_SMOKE_BOMB | 962 | Represents the ACT_HEADCRAB_SMOKE_BOMB activity state. |
| ACT_HEADCRAB_SPIT | 963 | Represents the ACT_HEADCRAB_SPIT activity state. |
| ACT_ZOMBIE_TRIP | 964 | Represents the ACT_ZOMBIE_TRIP activity state. |
| ACT_ZOMBIE_LUNGE | 965 | Represents the ACT_ZOMBIE_LUNGE activity state. |
| ACT_NEUTRAL_REF_POSE | 966 | Represents the ACT_NEUTRAL_REF_POSE activity state. |
| ACT_ANTLION_SCUTTLE_FORWARD | 967 | Represents the ACT_ANTLION_SCUTTLE_FORWARD activity state. |
| ACT_ANTLION_SCUTTLE_BACK | 968 | Represents the ACT_ANTLION_SCUTTLE_BACK activity state. |
| ACT_ANTLION_SCUTTLE_LEFT | 969 | Represents the ACT_ANTLION_SCUTTLE_LEFT activity state. |
| ACT_ANTLION_SCUTTLE_RIGHT | 970 | Represents the ACT_ANTLION_SCUTTLE_RIGHT activity state. |
| ACT_VR_PISTOL_EMPTY_CLIP_IN_SLIDE_BACK | 971 | Represents the ACT_VR_PISTOL_EMPTY_CLIP_IN_SLIDE_BACK activity state. |
| ACT_VR_SHOTGUN_IDLE | 972 | Represents the ACT_VR_SHOTGUN_IDLE activity state. |
| ACT_VR_SHOTGUN_OPEN_CHAMBER | 973 | Represents the ACT_VR_SHOTGUN_OPEN_CHAMBER activity state. |
| ACT_VR_SHOTGUN_RELOAD_1 | 974 | Represents the ACT_VR_SHOTGUN_RELOAD_1 activity state. |
| ACT_VR_SHOTGUN_RELOAD_2 | 975 | Represents the ACT_VR_SHOTGUN_RELOAD_2 activity state. |
| ACT_VR_SHOTGUN_RELOAD_3 | 976 | Represents the ACT_VR_SHOTGUN_RELOAD_3 activity state. |
| ACT_VR_SHOTGUN_CLOSE_CHAMBER | 977 | Represents the ACT_VR_SHOTGUN_CLOSE_CHAMBER activity state. |
| ACT_VR_SHOTGUN_TRIGGER_SQUEEZE | 978 | Represents the ACT_VR_SHOTGUN_TRIGGER_SQUEEZE activity state. |
| ACT_VR_SHOTGUN_SHOOT | 979 | Represents the ACT_VR_SHOTGUN_SHOOT activity state. |
| ACT_VR_SHOTGUN_SLIDE_BACK | 980 | Represents the ACT_VR_SHOTGUN_SLIDE_BACK activity state. |
| ACT_VR_SHOTGUN_SLIDE_FORWARD | 981 | Represents the ACT_VR_SHOTGUN_SLIDE_FORWARD activity state. |
| ACT_VR_PISTOL_LONG_CLIP_IN_CHAMBERED | 982 | Represents the ACT_VR_PISTOL_LONG_CLIP_IN_CHAMBERED activity state. |
| ACT_VR_PISTOL_LONG_CLIP_IN_SLIDE_BACK | 983 | Represents the ACT_VR_PISTOL_LONG_CLIP_IN_SLIDE_BACK activity state. |
| ACT_VR_PISTOL_BURST_TOGGLE | 984 | Represents the ACT_VR_PISTOL_BURST_TOGGLE activity state. |
| ACT_VR_PISTOL_LOW_KICK | 985 | Represents the ACT_VR_PISTOL_LOW_KICK activity state. |
| ACT_VR_PISTOL_BURST_ATTACK | 986 | Represents the ACT_VR_PISTOL_BURST_ATTACK activity state. |
| ACT_VR_SHOTGUN_GRENADE_TWIST | 987 | Represents the ACT_VR_SHOTGUN_GRENADE_TWIST activity state. |
| ACT_DIE_STAND | 988 | Represents the ACT_DIE_STAND activity state. |
| ACT_DIE_STAND_HEADSHOT | 989 | Represents the ACT_DIE_STAND_HEADSHOT activity state. |
| ACT_DIE_CROUCH | 990 | Represents the ACT_DIE_CROUCH activity state. |
| ACT_DIE_CROUCH_HEADSHOT | 991 | Represents the ACT_DIE_CROUCH_HEADSHOT activity state. |
| ACT_CSGO_NULL | 992 | Represents the ACT_CSGO_NULL activity state. |
| ACT_CSGO_DEFUSE | 993 | Represents the ACT_CSGO_DEFUSE activity state. |
| ACT_CSGO_DEFUSE_WITH_KIT | 994 | Represents the ACT_CSGO_DEFUSE_WITH_KIT activity state. |
| ACT_CSGO_FLASHBANG_REACTION | 995 | Represents the ACT_CSGO_FLASHBANG_REACTION activity state. |
| ACT_CSGO_FIRE_PRIMARY | 996 | Represents the ACT_CSGO_FIRE_PRIMARY activity state. |
| ACT_CSGO_FIRE_PRIMARY_OPT_1 | 997 | Represents the ACT_CSGO_FIRE_PRIMARY_OPT_1 activity state. |
| ACT_CSGO_FIRE_PRIMARY_OPT_2 | 998 | Represents the ACT_CSGO_FIRE_PRIMARY_OPT_2 activity state. |
| ACT_CSGO_FIRE_SECONDARY | 999 | Represents the ACT_CSGO_FIRE_SECONDARY activity state. |
| ACT_CSGO_FIRE_SECONDARY_OPT_1 | 1000 | Represents the ACT_CSGO_FIRE_SECONDARY_OPT_1 activity state. |
| ACT_CSGO_FIRE_SECONDARY_OPT_2 | 1001 | Represents the ACT_CSGO_FIRE_SECONDARY_OPT_2 activity state. |
| ACT_CSGO_RELOAD | 1002 | Represents the ACT_CSGO_RELOAD activity state. |
| ACT_CSGO_RELOAD_START | 1003 | Represents the ACT_CSGO_RELOAD_START activity state. |
| ACT_CSGO_RELOAD_LOOP | 1004 | Represents the ACT_CSGO_RELOAD_LOOP activity state. |
| ACT_CSGO_RELOAD_END | 1005 | Represents the ACT_CSGO_RELOAD_END activity state. |
| ACT_CSGO_OPERATE | 1006 | Represents the ACT_CSGO_OPERATE activity state. |
| ACT_CSGO_DEPLOY | 1007 | Represents the ACT_CSGO_DEPLOY activity state. |
| ACT_CSGO_CATCH | 1008 | Represents the ACT_CSGO_CATCH activity state. |
| ACT_CSGO_SILENCER_DETACH | 1009 | Represents the ACT_CSGO_SILENCER_DETACH activity state. |
| ACT_CSGO_SILENCER_ATTACH | 1010 | Represents the ACT_CSGO_SILENCER_ATTACH activity state. |
| ACT_CSGO_TWITCH | 1011 | Represents the ACT_CSGO_TWITCH activity state. |
| ACT_CSGO_TWITCH_BUYZONE | 1012 | Represents the ACT_CSGO_TWITCH_BUYZONE activity state. |
| ACT_CSGO_PLANT_BOMB | 1013 | Represents the ACT_CSGO_PLANT_BOMB activity state. |
| ACT_CSGO_IDLE_TURN_BALANCEADJUST | 1014 | Represents the ACT_CSGO_IDLE_TURN_BALANCEADJUST activity state. |
| ACT_CSGO_IDLE_ADJUST_STOPPEDMOVING | 1015 | Represents the ACT_CSGO_IDLE_ADJUST_STOPPEDMOVING activity state. |
| ACT_CSGO_ALIVE_LOOP | 1016 | Represents the ACT_CSGO_ALIVE_LOOP activity state. |
| ACT_CSGO_FLINCH | 1017 | Represents the ACT_CSGO_FLINCH activity state. |
| ACT_CSGO_FLINCH_HEAD | 1018 | Represents the ACT_CSGO_FLINCH_HEAD activity state. |
| ACT_CSGO_FLINCH_MOLOTOV | 1019 | Represents the ACT_CSGO_FLINCH_MOLOTOV activity state. |
| ACT_CSGO_JUMP | 1020 | Represents the ACT_CSGO_JUMP activity state. |
| ACT_CSGO_FALL | 1021 | Represents the ACT_CSGO_FALL activity state. |
| ACT_CSGO_CLIMB_LADDER | 1022 | Represents the ACT_CSGO_CLIMB_LADDER activity state. |
| ACT_CSGO_LAND_LIGHT | 1023 | Represents the ACT_CSGO_LAND_LIGHT activity state. |
| ACT_CSGO_LAND_HEAVY | 1024 | Represents the ACT_CSGO_LAND_HEAVY activity state. |
| ACT_CSGO_EXIT_LADDER_TOP | 1025 | Represents the ACT_CSGO_EXIT_LADDER_TOP activity state. |
| ACT_CSGO_EXIT_LADDER_BOTTOM | 1026 | Represents the ACT_CSGO_EXIT_LADDER_BOTTOM activity state. |
| ACT_CSGO_PARACHUTE | 1027 | Represents the ACT_CSGO_PARACHUTE activity state. |
| ACT_CSGO_TAUNT | 1028 | Represents the ACT_CSGO_TAUNT activity state. |
| ACT_DOTA_IDLE | 1500 | Represents the ACT_DOTA_IDLE activity state. |
| ACT_DOTA_IDLE_RARE | 1501 | Represents the ACT_DOTA_IDLE_RARE activity state. |
| ACT_DOTA_RUN | 1502 | Represents the ACT_DOTA_RUN activity state. |
| ACT_DOTA_ATTACK | 1503 | Represents the ACT_DOTA_ATTACK activity state. |
| ACT_DOTA_ATTACK2 | 1504 | Represents the ACT_DOTA_ATTACK2 activity state. |
| ACT_DOTA_ATTACK_EVENT | 1505 | Represents the ACT_DOTA_ATTACK_EVENT activity state. |
| ACT_DOTA_DIE | 1506 | Represents the ACT_DOTA_DIE activity state. |
| ACT_DOTA_FLINCH | 1507 | Represents the ACT_DOTA_FLINCH activity state. |
| ACT_DOTA_FLAIL | 1508 | Represents the ACT_DOTA_FLAIL activity state. |
| ACT_DOTA_DISABLED | 1509 | Represents the ACT_DOTA_DISABLED activity state. |
| ACT_DOTA_CAST_ABILITY_1 | 1510 | Represents the ACT_DOTA_CAST_ABILITY_1 activity state. |
| ACT_DOTA_CAST_ABILITY_2 | 1511 | Represents the ACT_DOTA_CAST_ABILITY_2 activity state. |
| ACT_DOTA_CAST_ABILITY_3 | 1512 | Represents the ACT_DOTA_CAST_ABILITY_3 activity state. |
| ACT_DOTA_CAST_ABILITY_4 | 1513 | Represents the ACT_DOTA_CAST_ABILITY_4 activity state. |
| ACT_DOTA_CAST_ABILITY_5 | 1514 | Represents the ACT_DOTA_CAST_ABILITY_5 activity state. |
| ACT_DOTA_CAST_ABILITY_6 | 1515 | Represents the ACT_DOTA_CAST_ABILITY_6 activity state. |
| ACT_DOTA_OVERRIDE_ABILITY_1 | 1516 | Represents the ACT_DOTA_OVERRIDE_ABILITY_1 activity state. |
| ACT_DOTA_OVERRIDE_ABILITY_2 | 1517 | Represents the ACT_DOTA_OVERRIDE_ABILITY_2 activity state. |
| ACT_DOTA_OVERRIDE_ABILITY_3 | 1518 | Represents the ACT_DOTA_OVERRIDE_ABILITY_3 activity state. |
| ACT_DOTA_OVERRIDE_ABILITY_4 | 1519 | Represents the ACT_DOTA_OVERRIDE_ABILITY_4 activity state. |
| ACT_DOTA_CHANNEL_ABILITY_1 | 1520 | Represents the ACT_DOTA_CHANNEL_ABILITY_1 activity state. |
| ACT_DOTA_CHANNEL_ABILITY_2 | 1521 | Represents the ACT_DOTA_CHANNEL_ABILITY_2 activity state. |
| ACT_DOTA_CHANNEL_ABILITY_3 | 1522 | Represents the ACT_DOTA_CHANNEL_ABILITY_3 activity state. |
| ACT_DOTA_CHANNEL_ABILITY_4 | 1523 | Represents the ACT_DOTA_CHANNEL_ABILITY_4 activity state. |
| ACT_DOTA_CHANNEL_ABILITY_5 | 1524 | Represents the ACT_DOTA_CHANNEL_ABILITY_5 activity state. |
| ACT_DOTA_CHANNEL_ABILITY_6 | 1525 | Represents the ACT_DOTA_CHANNEL_ABILITY_6 activity state. |
| ACT_DOTA_CHANNEL_END_ABILITY_1 | 1526 | Represents the ACT_DOTA_CHANNEL_END_ABILITY_1 activity state. |
| ACT_DOTA_CHANNEL_END_ABILITY_2 | 1527 | Represents the ACT_DOTA_CHANNEL_END_ABILITY_2 activity state. |
| ACT_DOTA_CHANNEL_END_ABILITY_3 | 1528 | Represents the ACT_DOTA_CHANNEL_END_ABILITY_3 activity state. |
| ACT_DOTA_CHANNEL_END_ABILITY_4 | 1529 | Represents the ACT_DOTA_CHANNEL_END_ABILITY_4 activity state. |
| ACT_DOTA_CHANNEL_END_ABILITY_5 | 1530 | Represents the ACT_DOTA_CHANNEL_END_ABILITY_5 activity state. |
| ACT_DOTA_CHANNEL_END_ABILITY_6 | 1531 | Represents the ACT_DOTA_CHANNEL_END_ABILITY_6 activity state. |
| ACT_DOTA_CONSTANT_LAYER | 1532 | Represents the ACT_DOTA_CONSTANT_LAYER activity state. |
| ACT_DOTA_CAPTURE | 1533 | Represents the ACT_DOTA_CAPTURE activity state. |
| ACT_DOTA_SPAWN | 1534 | Represents the ACT_DOTA_SPAWN activity state. |
| ACT_DOTA_KILLTAUNT | 1535 | Represents the ACT_DOTA_KILLTAUNT activity state. |
| ACT_DOTA_TAUNT | 1536 | Represents the ACT_DOTA_TAUNT activity state. |
| ACT_DOTA_THIRST | 1537 | Represents the ACT_DOTA_THIRST activity state. |
| ACT_DOTA_CAST_DRAGONBREATH | 1538 | Represents the ACT_DOTA_CAST_DRAGONBREATH activity state. |
| ACT_DOTA_ECHO_SLAM | 1539 | Represents the ACT_DOTA_ECHO_SLAM activity state. |
| ACT_DOTA_CAST_ABILITY_1_END | 1540 | Represents the ACT_DOTA_CAST_ABILITY_1_END activity state. |
| ACT_DOTA_CAST_ABILITY_2_END | 1541 | Represents the ACT_DOTA_CAST_ABILITY_2_END activity state. |
| ACT_DOTA_CAST_ABILITY_3_END | 1542 | Represents the ACT_DOTA_CAST_ABILITY_3_END activity state. |
| ACT_DOTA_CAST_ABILITY_4_END | 1543 | Represents the ACT_DOTA_CAST_ABILITY_4_END activity state. |
| ACT_MIRANA_LEAP_END | 1544 | Represents the ACT_MIRANA_LEAP_END activity state. |
| ACT_WAVEFORM_START | 1545 | Represents the ACT_WAVEFORM_START activity state. |
| ACT_WAVEFORM_END | 1546 | Represents the ACT_WAVEFORM_END activity state. |
| ACT_DOTA_CAST_ABILITY_ROT | 1547 | Represents the ACT_DOTA_CAST_ABILITY_ROT activity state. |
| ACT_DOTA_DIE_SPECIAL | 1548 | Represents the ACT_DOTA_DIE_SPECIAL activity state. |
| ACT_DOTA_RATTLETRAP_BATTERYASSAULT | 1549 | Represents the ACT_DOTA_RATTLETRAP_BATTERYASSAULT activity state. |
| ACT_DOTA_RATTLETRAP_POWERCOGS | 1550 | Represents the ACT_DOTA_RATTLETRAP_POWERCOGS activity state. |
| ACT_DOTA_RATTLETRAP_HOOKSHOT_START | 1551 | Represents the ACT_DOTA_RATTLETRAP_HOOKSHOT_START activity state. |
| ACT_DOTA_RATTLETRAP_HOOKSHOT_LOOP | 1552 | Represents the ACT_DOTA_RATTLETRAP_HOOKSHOT_LOOP activity state. |
| ACT_DOTA_RATTLETRAP_HOOKSHOT_END | 1553 | Represents the ACT_DOTA_RATTLETRAP_HOOKSHOT_END activity state. |
| ACT_STORM_SPIRIT_OVERLOAD_RUN_OVERRIDE | 1554 | Represents the ACT_STORM_SPIRIT_OVERLOAD_RUN_OVERRIDE activity state. |
| ACT_DOTA_TINKER_REARM1 | 1555 | Represents the ACT_DOTA_TINKER_REARM1 activity state. |
| ACT_DOTA_TINKER_REARM2 | 1556 | Represents the ACT_DOTA_TINKER_REARM2 activity state. |
| ACT_DOTA_TINKER_REARM3 | 1557 | Represents the ACT_DOTA_TINKER_REARM3 activity state. |
| ACT_TINY_AVALANCHE | 1558 | Represents the ACT_TINY_AVALANCHE activity state. |
| ACT_TINY_TOSS | 1559 | Represents the ACT_TINY_TOSS activity state. |
| ACT_TINY_GROWL | 1560 | Represents the ACT_TINY_GROWL activity state. |
| ACT_DOTA_WEAVERBUG_ATTACH | 1561 | Represents the ACT_DOTA_WEAVERBUG_ATTACH activity state. |
| ACT_DOTA_CAST_WILD_AXES_END | 1562 | Represents the ACT_DOTA_CAST_WILD_AXES_END activity state. |
| ACT_DOTA_CAST_LIFE_BREAK_START | 1563 | Represents the ACT_DOTA_CAST_LIFE_BREAK_START activity state. |
| ACT_DOTA_CAST_LIFE_BREAK_END | 1564 | Represents the ACT_DOTA_CAST_LIFE_BREAK_END activity state. |
| ACT_DOTA_NIGHTSTALKER_TRANSITION | 1565 | Represents the ACT_DOTA_NIGHTSTALKER_TRANSITION activity state. |
| ACT_DOTA_LIFESTEALER_RAGE | 1566 | Represents the ACT_DOTA_LIFESTEALER_RAGE activity state. |
| ACT_DOTA_LIFESTEALER_OPEN_WOUNDS | 1567 | Represents the ACT_DOTA_LIFESTEALER_OPEN_WOUNDS activity state. |
| ACT_DOTA_SAND_KING_BURROW_IN | 1568 | Represents the ACT_DOTA_SAND_KING_BURROW_IN activity state. |
| ACT_DOTA_SAND_KING_BURROW_OUT | 1569 | Represents the ACT_DOTA_SAND_KING_BURROW_OUT activity state. |
| ACT_DOTA_EARTHSHAKER_TOTEM_ATTACK | 1570 | Represents the ACT_DOTA_EARTHSHAKER_TOTEM_ATTACK activity state. |
| ACT_DOTA_WHEEL_LAYER | 1571 | Represents the ACT_DOTA_WHEEL_LAYER activity state. |
| ACT_DOTA_ALCHEMIST_CHEMICAL_RAGE_START | 1572 | Represents the ACT_DOTA_ALCHEMIST_CHEMICAL_RAGE_START activity state. |
| ACT_DOTA_ALCHEMIST_CONCOCTION | 1573 | Represents the ACT_DOTA_ALCHEMIST_CONCOCTION activity state. |
| ACT_DOTA_JAKIRO_LIQUIDFIRE_START | 1574 | Represents the ACT_DOTA_JAKIRO_LIQUIDFIRE_START activity state. |
| ACT_DOTA_JAKIRO_LIQUIDFIRE_LOOP | 1575 | Represents the ACT_DOTA_JAKIRO_LIQUIDFIRE_LOOP activity state. |
| ACT_DOTA_LIFESTEALER_INFEST | 1576 | Represents the ACT_DOTA_LIFESTEALER_INFEST activity state. |
| ACT_DOTA_LIFESTEALER_INFEST_END | 1577 | Represents the ACT_DOTA_LIFESTEALER_INFEST_END activity state. |
| ACT_DOTA_LASSO_LOOP | 1578 | Represents the ACT_DOTA_LASSO_LOOP activity state. |
| ACT_DOTA_ALCHEMIST_CONCOCTION_THROW | 1579 | Represents the ACT_DOTA_ALCHEMIST_CONCOCTION_THROW activity state. |
| ACT_DOTA_ALCHEMIST_CHEMICAL_RAGE_END | 1580 | Represents the ACT_DOTA_ALCHEMIST_CHEMICAL_RAGE_END activity state. |
| ACT_DOTA_CAST_COLD_SNAP | 1581 | Represents the ACT_DOTA_CAST_COLD_SNAP activity state. |
| ACT_DOTA_CAST_GHOST_WALK | 1582 | Represents the ACT_DOTA_CAST_GHOST_WALK activity state. |
| ACT_DOTA_CAST_TORNADO | 1583 | Represents the ACT_DOTA_CAST_TORNADO activity state. |
| ACT_DOTA_CAST_EMP | 1584 | Represents the ACT_DOTA_CAST_EMP activity state. |
| ACT_DOTA_CAST_ALACRITY | 1585 | Represents the ACT_DOTA_CAST_ALACRITY activity state. |
| ACT_DOTA_CAST_CHAOS_METEOR | 1586 | Represents the ACT_DOTA_CAST_CHAOS_METEOR activity state. |
| ACT_DOTA_CAST_SUN_STRIKE | 1587 | Represents the ACT_DOTA_CAST_SUN_STRIKE activity state. |
| ACT_DOTA_CAST_FORGE_SPIRIT | 1588 | Represents the ACT_DOTA_CAST_FORGE_SPIRIT activity state. |
| ACT_DOTA_CAST_ICE_WALL | 1589 | Represents the ACT_DOTA_CAST_ICE_WALL activity state. |
| ACT_DOTA_CAST_DEAFENING_BLAST | 1590 | Represents the ACT_DOTA_CAST_DEAFENING_BLAST activity state. |
| ACT_DOTA_VICTORY | 1591 | Represents the ACT_DOTA_VICTORY activity state. |
| ACT_DOTA_DEFEAT | 1592 | Represents the ACT_DOTA_DEFEAT activity state. |
| ACT_DOTA_SPIRIT_BREAKER_CHARGE_POSE | 1593 | Represents the ACT_DOTA_SPIRIT_BREAKER_CHARGE_POSE activity state. |
| ACT_DOTA_SPIRIT_BREAKER_CHARGE_END | 1594 | Represents the ACT_DOTA_SPIRIT_BREAKER_CHARGE_END activity state. |
| ACT_DOTA_TELEPORT | 1595 | Represents the ACT_DOTA_TELEPORT activity state. |
| ACT_DOTA_TELEPORT_END | 1596 | Represents the ACT_DOTA_TELEPORT_END activity state. |
| ACT_DOTA_CAST_REFRACTION | 1597 | Represents the ACT_DOTA_CAST_REFRACTION activity state. |
| ACT_DOTA_CAST_ABILITY_7 | 1598 | Represents the ACT_DOTA_CAST_ABILITY_7 activity state. |
| ACT_DOTA_CANCEL_SIREN_SONG | 1599 | Represents the ACT_DOTA_CANCEL_SIREN_SONG activity state. |
| ACT_DOTA_CHANNEL_ABILITY_7 | 1600 | Represents the ACT_DOTA_CHANNEL_ABILITY_7 activity state. |
| ACT_DOTA_LOADOUT | 1601 | Represents the ACT_DOTA_LOADOUT activity state. |
| ACT_DOTA_FORCESTAFF_END | 1602 | Represents the ACT_DOTA_FORCESTAFF_END activity state. |
| ACT_DOTA_POOF_END | 1603 | Represents the ACT_DOTA_POOF_END activity state. |
| ACT_DOTA_SLARK_POUNCE | 1604 | Represents the ACT_DOTA_SLARK_POUNCE activity state. |
| ACT_DOTA_MAGNUS_SKEWER_START | 1605 | Represents the ACT_DOTA_MAGNUS_SKEWER_START activity state. |
| ACT_DOTA_MAGNUS_SKEWER_END | 1606 | Represents the ACT_DOTA_MAGNUS_SKEWER_END activity state. |
| ACT_DOTA_MEDUSA_STONE_GAZE | 1607 | Represents the ACT_DOTA_MEDUSA_STONE_GAZE activity state. |
| ACT_DOTA_RELAX_START | 1608 | Represents the ACT_DOTA_RELAX_START activity state. |
| ACT_DOTA_RELAX_LOOP | 1609 | Represents the ACT_DOTA_RELAX_LOOP activity state. |
| ACT_DOTA_RELAX_END | 1610 | Represents the ACT_DOTA_RELAX_END activity state. |
| ACT_DOTA_CENTAUR_STAMPEDE | 1611 | Represents the ACT_DOTA_CENTAUR_STAMPEDE activity state. |
| ACT_DOTA_BELLYACHE_START | 1612 | Represents the ACT_DOTA_BELLYACHE_START activity state. |
| ACT_DOTA_BELLYACHE_LOOP | 1613 | Represents the ACT_DOTA_BELLYACHE_LOOP activity state. |
| ACT_DOTA_BELLYACHE_END | 1614 | Represents the ACT_DOTA_BELLYACHE_END activity state. |
| ACT_DOTA_ROQUELAIRE_LAND | 1615 | Represents the ACT_DOTA_ROQUELAIRE_LAND activity state. |
| ACT_DOTA_ROQUELAIRE_LAND_IDLE | 1616 | Represents the ACT_DOTA_ROQUELAIRE_LAND_IDLE activity state. |
| ACT_DOTA_GREEVIL_CAST | 1617 | Represents the ACT_DOTA_GREEVIL_CAST activity state. |
| ACT_DOTA_GREEVIL_OVERRIDE_ABILITY | 1618 | Represents the ACT_DOTA_GREEVIL_OVERRIDE_ABILITY activity state. |
| ACT_DOTA_GREEVIL_HOOK_START | 1619 | Represents the ACT_DOTA_GREEVIL_HOOK_START activity state. |
| ACT_DOTA_GREEVIL_HOOK_END | 1620 | Represents the ACT_DOTA_GREEVIL_HOOK_END activity state. |
| ACT_DOTA_GREEVIL_BLINK_BONE | 1621 | Represents the ACT_DOTA_GREEVIL_BLINK_BONE activity state. |
| ACT_DOTA_IDLE_SLEEPING | 1622 | Represents the ACT_DOTA_IDLE_SLEEPING activity state. |
| ACT_DOTA_INTRO | 1623 | Represents the ACT_DOTA_INTRO activity state. |
| ACT_DOTA_GESTURE_POINT | 1624 | Represents the ACT_DOTA_GESTURE_POINT activity state. |
| ACT_DOTA_GESTURE_ACCENT | 1625 | Represents the ACT_DOTA_GESTURE_ACCENT activity state. |
| ACT_DOTA_SLEEPING_END | 1626 | Represents the ACT_DOTA_SLEEPING_END activity state. |
| ACT_DOTA_AMBUSH | 1627 | Represents the ACT_DOTA_AMBUSH activity state. |
| ACT_DOTA_ITEM_LOOK | 1628 | Represents the ACT_DOTA_ITEM_LOOK activity state. |
| ACT_DOTA_STARTLE | 1629 | Represents the ACT_DOTA_STARTLE activity state. |
| ACT_DOTA_FRUSTRATION | 1630 | Represents the ACT_DOTA_FRUSTRATION activity state. |
| ACT_DOTA_TELEPORT_REACT | 1631 | Represents the ACT_DOTA_TELEPORT_REACT activity state. |
| ACT_DOTA_TELEPORT_END_REACT | 1632 | Represents the ACT_DOTA_TELEPORT_END_REACT activity state. |
| ACT_DOTA_SHRUG | 1633 | Represents the ACT_DOTA_SHRUG activity state. |
| ACT_DOTA_RELAX_LOOP_END | 1634 | Represents the ACT_DOTA_RELAX_LOOP_END activity state. |
| ACT_DOTA_PRESENT_ITEM | 1635 | Represents the ACT_DOTA_PRESENT_ITEM activity state. |
| ACT_DOTA_IDLE_IMPATIENT | 1636 | Represents the ACT_DOTA_IDLE_IMPATIENT activity state. |
| ACT_DOTA_SHARPEN_WEAPON | 1637 | Represents the ACT_DOTA_SHARPEN_WEAPON activity state. |
| ACT_DOTA_SHARPEN_WEAPON_OUT | 1638 | Represents the ACT_DOTA_SHARPEN_WEAPON_OUT activity state. |
| ACT_DOTA_IDLE_SLEEPING_END | 1639 | Represents the ACT_DOTA_IDLE_SLEEPING_END activity state. |
| ACT_DOTA_BRIDGE_DESTROY | 1640 | Represents the ACT_DOTA_BRIDGE_DESTROY activity state. |
| ACT_DOTA_TAUNT_SNIPER | 1641 | Represents the ACT_DOTA_TAUNT_SNIPER activity state. |
| ACT_DOTA_DEATH_BY_SNIPER | 1642 | Represents the ACT_DOTA_DEATH_BY_SNIPER activity state. |
| ACT_DOTA_LOOK_AROUND | 1643 | Represents the ACT_DOTA_LOOK_AROUND activity state. |
| ACT_DOTA_CAGED_CREEP_RAGE | 1644 | Represents the ACT_DOTA_CAGED_CREEP_RAGE activity state. |
| ACT_DOTA_CAGED_CREEP_RAGE_OUT | 1645 | Represents the ACT_DOTA_CAGED_CREEP_RAGE_OUT activity state. |
| ACT_DOTA_CAGED_CREEP_SMASH | 1646 | Represents the ACT_DOTA_CAGED_CREEP_SMASH activity state. |
| ACT_DOTA_CAGED_CREEP_SMASH_OUT | 1647 | Represents the ACT_DOTA_CAGED_CREEP_SMASH_OUT activity state. |
| ACT_DOTA_IDLE_IMPATIENT_SWORD_TAP | 1648 | Represents the ACT_DOTA_IDLE_IMPATIENT_SWORD_TAP activity state. |
| ACT_DOTA_INTRO_LOOP | 1649 | Represents the ACT_DOTA_INTRO_LOOP activity state. |
| ACT_DOTA_BRIDGE_THREAT | 1650 | Represents the ACT_DOTA_BRIDGE_THREAT activity state. |
| ACT_DOTA_DAGON | 1651 | Represents the ACT_DOTA_DAGON activity state. |
| ACT_DOTA_CAST_ABILITY_2_ES_ROLL_START | 1652 | Represents the ACT_DOTA_CAST_ABILITY_2_ES_ROLL_START activity state. |
| ACT_DOTA_CAST_ABILITY_2_ES_ROLL | 1653 | Represents the ACT_DOTA_CAST_ABILITY_2_ES_ROLL activity state. |
| ACT_DOTA_CAST_ABILITY_2_ES_ROLL_END | 1654 | Represents the ACT_DOTA_CAST_ABILITY_2_ES_ROLL_END activity state. |
| ACT_DOTA_NIAN_PIN_START | 1655 | Represents the ACT_DOTA_NIAN_PIN_START activity state. |
| ACT_DOTA_NIAN_PIN_LOOP | 1656 | Represents the ACT_DOTA_NIAN_PIN_LOOP activity state. |
| ACT_DOTA_NIAN_PIN_END | 1657 | Represents the ACT_DOTA_NIAN_PIN_END activity state. |
| ACT_DOTA_LEAP_STUN | 1658 | Represents the ACT_DOTA_LEAP_STUN activity state. |
| ACT_DOTA_LEAP_SWIPE | 1659 | Represents the ACT_DOTA_LEAP_SWIPE activity state. |
| ACT_DOTA_NIAN_INTRO_LEAP | 1660 | Represents the ACT_DOTA_NIAN_INTRO_LEAP activity state. |
| ACT_DOTA_AREA_DENY | 1661 | Represents the ACT_DOTA_AREA_DENY activity state. |
| ACT_DOTA_NIAN_PIN_TO_STUN | 1662 | Represents the ACT_DOTA_NIAN_PIN_TO_STUN activity state. |
| ACT_DOTA_RAZE_1 | 1663 | Represents the ACT_DOTA_RAZE_1 activity state. |
| ACT_DOTA_RAZE_2 | 1664 | Represents the ACT_DOTA_RAZE_2 activity state. |
| ACT_DOTA_RAZE_3 | 1665 | Represents the ACT_DOTA_RAZE_3 activity state. |
| ACT_DOTA_UNDYING_DECAY | 1666 | Represents the ACT_DOTA_UNDYING_DECAY activity state. |
| ACT_DOTA_UNDYING_SOUL_RIP | 1667 | Represents the ACT_DOTA_UNDYING_SOUL_RIP activity state. |
| ACT_DOTA_UNDYING_TOMBSTONE | 1668 | Represents the ACT_DOTA_UNDYING_TOMBSTONE activity state. |
| ACT_DOTA_WHIRLING_AXES_RANGED | 1669 | Represents the ACT_DOTA_WHIRLING_AXES_RANGED activity state. |
| ACT_DOTA_SHALLOW_GRAVE | 1670 | Represents the ACT_DOTA_SHALLOW_GRAVE activity state. |
| ACT_DOTA_COLD_FEET | 1671 | Represents the ACT_DOTA_COLD_FEET activity state. |
| ACT_DOTA_ICE_VORTEX | 1672 | Represents the ACT_DOTA_ICE_VORTEX activity state. |
| ACT_DOTA_CHILLING_TOUCH | 1673 | Represents the ACT_DOTA_CHILLING_TOUCH activity state. |
| ACT_DOTA_ENFEEBLE | 1674 | Represents the ACT_DOTA_ENFEEBLE activity state. |
| ACT_DOTA_FATAL_BONDS | 1675 | Represents the ACT_DOTA_FATAL_BONDS activity state. |
| ACT_DOTA_MIDNIGHT_PULSE | 1676 | Represents the ACT_DOTA_MIDNIGHT_PULSE activity state. |
| ACT_DOTA_ANCESTRAL_SPIRIT | 1677 | Represents the ACT_DOTA_ANCESTRAL_SPIRIT activity state. |
| ACT_DOTA_THUNDER_STRIKE | 1678 | Represents the ACT_DOTA_THUNDER_STRIKE activity state. |
| ACT_DOTA_KINETIC_FIELD | 1679 | Represents the ACT_DOTA_KINETIC_FIELD activity state. |
| ACT_DOTA_STATIC_STORM | 1680 | Represents the ACT_DOTA_STATIC_STORM activity state. |
| ACT_DOTA_MINI_TAUNT | 1681 | Represents the ACT_DOTA_MINI_TAUNT activity state. |
| ACT_DOTA_ARCTIC_BURN_END | 1682 | Represents the ACT_DOTA_ARCTIC_BURN_END activity state. |
| ACT_DOTA_LOADOUT_RARE | 1683 | Represents the ACT_DOTA_LOADOUT_RARE activity state. |
| ACT_DOTA_SWIM | 1684 | Represents the ACT_DOTA_SWIM activity state. |
| ACT_DOTA_FLEE | 1685 | Represents the ACT_DOTA_FLEE activity state. |
| ACT_DOTA_TROT | 1686 | Represents the ACT_DOTA_TROT activity state. |
| ACT_DOTA_SHAKE | 1687 | Represents the ACT_DOTA_SHAKE activity state. |
| ACT_DOTA_SWIM_IDLE | 1688 | Represents the ACT_DOTA_SWIM_IDLE activity state. |
| ACT_DOTA_WAIT_IDLE | 1689 | Represents the ACT_DOTA_WAIT_IDLE activity state. |
| ACT_DOTA_GREET | 1690 | Represents the ACT_DOTA_GREET activity state. |
| ACT_DOTA_TELEPORT_COOP_START | 1691 | Represents the ACT_DOTA_TELEPORT_COOP_START activity state. |
| ACT_DOTA_TELEPORT_COOP_WAIT | 1692 | Represents the ACT_DOTA_TELEPORT_COOP_WAIT activity state. |
| ACT_DOTA_TELEPORT_COOP_END | 1693 | Represents the ACT_DOTA_TELEPORT_COOP_END activity state. |
| ACT_DOTA_TELEPORT_COOP_EXIT | 1694 | Represents the ACT_DOTA_TELEPORT_COOP_EXIT activity state. |
| ACT_DOTA_SHOPKEEPER_PET_INTERACT | 1695 | Represents the ACT_DOTA_SHOPKEEPER_PET_INTERACT activity state. |
| ACT_DOTA_ITEM_PICKUP | 1696 | Represents the ACT_DOTA_ITEM_PICKUP activity state. |
| ACT_DOTA_ITEM_DROP | 1697 | Represents the ACT_DOTA_ITEM_DROP activity state. |
| ACT_DOTA_CAPTURE_PET | 1698 | Represents the ACT_DOTA_CAPTURE_PET activity state. |
| ACT_DOTA_PET_WARD_OBSERVER | 1699 | Represents the ACT_DOTA_PET_WARD_OBSERVER activity state. |
| ACT_DOTA_PET_WARD_SENTRY | 1700 | Represents the ACT_DOTA_PET_WARD_SENTRY activity state. |
| ACT_DOTA_PET_LEVEL | 1701 | Represents the ACT_DOTA_PET_LEVEL activity state. |
| ACT_DOTA_CAST_BURROW_END | 1702 | Represents the ACT_DOTA_CAST_BURROW_END activity state. |
| ACT_DOTA_LIFESTEALER_ASSIMILATE | 1703 | Represents the ACT_DOTA_LIFESTEALER_ASSIMILATE activity state. |
| ACT_DOTA_LIFESTEALER_EJECT | 1704 | Represents the ACT_DOTA_LIFESTEALER_EJECT activity state. |
| ACT_DOTA_ATTACK_EVENT_BASH | 1705 | Represents the ACT_DOTA_ATTACK_EVENT_BASH activity state. |
| ACT_DOTA_CAPTURE_RARE | 1706 | Represents the ACT_DOTA_CAPTURE_RARE activity state. |
| ACT_DOTA_AW_MAGNETIC_FIELD | 1707 | Represents the ACT_DOTA_AW_MAGNETIC_FIELD activity state. |
| ACT_DOTA_CAST_GHOST_SHIP | 1708 | Represents the ACT_DOTA_CAST_GHOST_SHIP activity state. |
| ACT_DOTA_FXANIM | 1709 | Represents the ACT_DOTA_FXANIM activity state. |
| ACT_DOTA_VICTORY_START | 1710 | Represents the ACT_DOTA_VICTORY_START activity state. |
| ACT_DOTA_DEFEAT_START | 1711 | Represents the ACT_DOTA_DEFEAT_START activity state. |
| ACT_DOTA_DP_SPIRIT_SIPHON | 1712 | Represents the ACT_DOTA_DP_SPIRIT_SIPHON activity state. |
| ACT_DOTA_TRICKS_END | 1713 | Represents the ACT_DOTA_TRICKS_END activity state. |
| ACT_DOTA_ES_STONE_CALLER | 1714 | Represents the ACT_DOTA_ES_STONE_CALLER activity state. |
| ACT_DOTA_MK_STRIKE | 1715 | Represents the ACT_DOTA_MK_STRIKE activity state. |
| ACT_DOTA_VERSUS | 1716 | Represents the ACT_DOTA_VERSUS activity state. |
| ACT_DOTA_CAPTURE_CARD | 1717 | Represents the ACT_DOTA_CAPTURE_CARD activity state. |
| ACT_DOTA_MK_SPRING_SOAR | 1718 | Represents the ACT_DOTA_MK_SPRING_SOAR activity state. |
| ACT_DOTA_MK_SPRING_END | 1719 | Represents the ACT_DOTA_MK_SPRING_END activity state. |
| ACT_DOTA_MK_TREE_SOAR | 1720 | Represents the ACT_DOTA_MK_TREE_SOAR activity state. |
| ACT_DOTA_MK_TREE_END | 1721 | Represents the ACT_DOTA_MK_TREE_END activity state. |
| ACT_DOTA_MK_FUR_ARMY | 1722 | Represents the ACT_DOTA_MK_FUR_ARMY activity state. |
| ACT_DOTA_MK_SPRING_CAST | 1723 | Represents the ACT_DOTA_MK_SPRING_CAST activity state. |
| ACT_DOTA_NECRO_GHOST_SHROUD | 1724 | Represents the ACT_DOTA_NECRO_GHOST_SHROUD activity state. |
| ACT_DOTA_OVERRIDE_ARCANA | 1725 | Represents the ACT_DOTA_OVERRIDE_ARCANA activity state. |
| ACT_DOTA_SLIDE | 1726 | Represents the ACT_DOTA_SLIDE activity state. |
| ACT_DOTA_SLIDE_LOOP | 1727 | Represents the ACT_DOTA_SLIDE_LOOP activity state. |
| ACT_DOTA_GENERIC_CHANNEL_1 | 1728 | Represents the ACT_DOTA_GENERIC_CHANNEL_1 activity state. |
| ACT_DOTA_GS_SOUL_CHAIN | 1729 | Represents the ACT_DOTA_GS_SOUL_CHAIN activity state. |
| ACT_DOTA_GS_INK_CREATURE | 1730 | Represents the ACT_DOTA_GS_INK_CREATURE activity state. |
| ACT_DOTA_TRANSITION | 1731 | Represents the ACT_DOTA_TRANSITION activity state. |
| ACT_DOTA_BLINK_DAGGER | 1732 | Represents the ACT_DOTA_BLINK_DAGGER activity state. |
| ACT_DOTA_BLINK_DAGGER_END | 1733 | Represents the ACT_DOTA_BLINK_DAGGER_END activity state. |
| ACT_DOTA_CUSTOM_TOWER_ATTACK | 1734 | Represents the ACT_DOTA_CUSTOM_TOWER_ATTACK activity state. |
| ACT_DOTA_CUSTOM_TOWER_IDLE | 1735 | Represents the ACT_DOTA_CUSTOM_TOWER_IDLE activity state. |
| ACT_DOTA_CUSTOM_TOWER_DIE | 1736 | Represents the ACT_DOTA_CUSTOM_TOWER_DIE activity state. |
| ACT_DOTA_CAST_COLD_SNAP_ORB | 1737 | Represents the ACT_DOTA_CAST_COLD_SNAP_ORB activity state. |
| ACT_DOTA_CAST_GHOST_WALK_ORB | 1738 | Represents the ACT_DOTA_CAST_GHOST_WALK_ORB activity state. |
| ACT_DOTA_CAST_TORNADO_ORB | 1739 | Represents the ACT_DOTA_CAST_TORNADO_ORB activity state. |
| ACT_DOTA_CAST_EMP_ORB | 1740 | Represents the ACT_DOTA_CAST_EMP_ORB activity state. |
| ACT_DOTA_CAST_ALACRITY_ORB | 1741 | Represents the ACT_DOTA_CAST_ALACRITY_ORB activity state. |
| ACT_DOTA_CAST_CHAOS_METEOR_ORB | 1742 | Represents the ACT_DOTA_CAST_CHAOS_METEOR_ORB activity state. |
| ACT_DOTA_CAST_SUN_STRIKE_ORB | 1743 | Represents the ACT_DOTA_CAST_SUN_STRIKE_ORB activity state. |
| ACT_DOTA_CAST_FORGE_SPIRIT_ORB | 1744 | Represents the ACT_DOTA_CAST_FORGE_SPIRIT_ORB activity state. |
| ACT_DOTA_CAST_ICE_WALL_ORB | 1745 | Represents the ACT_DOTA_CAST_ICE_WALL_ORB activity state. |
| ACT_DOTA_CAST_DEAFENING_BLAST_ORB | 1746 | Represents the ACT_DOTA_CAST_DEAFENING_BLAST_ORB activity state. |
| ACT_DOTA_NOTICE | 1747 | Represents the ACT_DOTA_NOTICE activity state. |
| ACT_DOTA_CAST_ABILITY_2_ALLY | 1748 | Represents the ACT_DOTA_CAST_ABILITY_2_ALLY activity state. |
| ACT_DOTA_SHUFFLE_L | 1749 | Represents the ACT_DOTA_SHUFFLE_L activity state. |
| ACT_DOTA_SHUFFLE_R | 1750 | Represents the ACT_DOTA_SHUFFLE_R activity state. |
| ACT_DOTA_OVERRIDE_LOADOUT | 1751 | Represents the ACT_DOTA_OVERRIDE_LOADOUT activity state. |
| ACT_DOTA_TAUNT_SPECIAL | 1752 | Represents the ACT_DOTA_TAUNT_SPECIAL activity state. |
| ACT_DOTA_TELEPORT_START | 1753 | Represents the ACT_DOTA_TELEPORT_START activity state. |
| ACT_DOTA_GENERIC_CHANNEL_1_START | 1754 | Represents the ACT_DOTA_GENERIC_CHANNEL_1_START activity state. |
| ACT_DOTA_CUSTOM_TOWER_IDLE_RARE | 1755 | Represents the ACT_DOTA_CUSTOM_TOWER_IDLE_RARE activity state. |
| ACT_DOTA_CUSTOM_TOWER_TAUNT | 1756 | Represents the ACT_DOTA_CUSTOM_TOWER_TAUNT activity state. |
| ACT_DOTA_CUSTOM_TOWER_HIGH_FIVE | 1757 | Represents the ACT_DOTA_CUSTOM_TOWER_HIGH_FIVE activity state. |
| ACT_DOTA_ATTACK_SPECIAL | 1758 | Represents the ACT_DOTA_ATTACK_SPECIAL activity state. |
| ACT_DOTA_TRANSITION_IDLE | 1759 | Represents the ACT_DOTA_TRANSITION_IDLE activity state. |
| ACT_DOTA_PIERCE_THE_VEIL | 1760 | Represents the ACT_DOTA_PIERCE_THE_VEIL activity state. |
| ACT_DOTA_RUN_RARE | 1761 | Represents the ACT_DOTA_RUN_RARE activity state. |
| ACT_DOTA_VIPER_DIVE | 1762 | Represents the ACT_DOTA_VIPER_DIVE activity state. |
| ACT_DOTA_VIPER_DIVE_END | 1763 | Represents the ACT_DOTA_VIPER_DIVE_END activity state. |
| ACT_DOTA_MK_STRIKE_END | 1764 | Represents the ACT_DOTA_MK_STRIKE_END activity state. |
| ACT_DOTA_ARCANA_VOTE | 1766 | Represents the ACT_DOTA_ARCANA_VOTE activity state. |
| ACT_DOTA_SPIRIT_BREAKER_ULT_RUN | 1767 | Represents the ACT_DOTA_SPIRIT_BREAKER_ULT_RUN activity state. |
| ACT_DOTA_PUNCH | 1768 | Represents the ACT_DOTA_PUNCH activity state. |
| ACT_DOTA_CAST_STATUE | 1769 | Represents the ACT_DOTA_CAST_STATUE activity state. |
| ACT_DOTA_ATTACK_STATUE | 1770 | Represents the ACT_DOTA_ATTACK_STATUE activity state. |
| ACT_DOTA_CAST3_STATUE | 1771 | Represents the ACT_DOTA_CAST3_STATUE activity state. |
| ACT_DOTA_CAST1_STATUE | 1772 | Represents the ACT_DOTA_CAST1_STATUE activity state. |
| ACT_DOTA_TELEPORT_STATUE | 1773 | Represents the ACT_DOTA_TELEPORT_STATUE activity state. |
| ACT_DOTA_VICTORY_STATUE | 1774 | Represents the ACT_DOTA_VICTORY_STATUE activity state. |
| ACT_DOTA_TAUNT_STATUE | 1775 | Represents the ACT_DOTA_TAUNT_STATUE activity state. |
| ACT_DOTA_STATUE_SEQUENCE | 1776 | Represents the ACT_DOTA_STATUE_SEQUENCE activity state. |
| ACT_DOTA_RUN_STATUE | 1777 | Represents the ACT_DOTA_RUN_STATUE activity state. |
| ACT_DOTA_IDLE_STATUE | 1778 | Represents the ACT_DOTA_IDLE_STATUE activity state. |
| ACT_DOTA_CAST4_STATUE | 1779 | Represents the ACT_DOTA_CAST4_STATUE activity state. |
| ACT_DOTA_FLAIL_STATUE | 1780 | Represents the ACT_DOTA_FLAIL_STATUE activity state. |
| ACT_DOTA_STUN_STATUE | 1781 | Represents the ACT_DOTA_STUN_STATUE activity state. |
| ACT_DOTA_TELEPORT_END_STATUE | 1782 | Represents the ACT_DOTA_TELEPORT_END_STATUE activity state. |
| ACT_DOTA_DISABLED_END | 1784 | Represents the ACT_DOTA_DISABLED_END activity state. |
| ACT_DOTA_RELAX_IN | 1785 | Represents the ACT_DOTA_RELAX_IN activity state. |
| ACT_DOTA_RELAX_OUT | 1786 | Represents the ACT_DOTA_RELAX_OUT activity state. |
| ACT_DOTA_CAST_FENCE | 1787 | Represents the ACT_DOTA_CAST_FENCE activity state. |
| ACT_DOTA_RADIANT_CREEP_HAMMER | 1789 | Represents the ACT_DOTA_RADIANT_CREEP_HAMMER activity state. |
| ACT_DOTA_SPWN | 1790 | Represents the ACT_DOTA_SPWN activity state. |
| ACT_DOTA_RUN_ALT | 1791 | Represents the ACT_DOTA_RUN_ALT activity state. |
| ACT_DOTA_VOODOO_REST | 1792 | Represents the ACT_DOTA_VOODOO_REST activity state. |
| ACT_DOTA_CYCLONE | 1793 | Represents the ACT_DOTA_CYCLONE activity state. |
| ACT_DOTA_IMPALE | 1794 | Represents the ACT_DOTA_IMPALE activity state. |

### Paragraphs

- The GameActivity enum represents animation and activity states used by units in the game.

### Inline Code Tokens

- `GameActivity`
- `ACT_RESET`
- `0`
- `ACT_IDLE`
- `1`
- `ACT_TRANSITION`
- `2`
- `ACT_COVER`
- `3`
- `ACT_COVER_MED`
- `4`
- `ACT_COVER_LOW`
- `5`
- `ACT_WALK`
- `6`
- `ACT_WALK_AIM`
- `7`
- `ACT_WALK_CROUCH`
- `8`
- `ACT_WALK_CROUCH_AIM`
- `9`
- `ACT_RUN`
- `10`
- `ACT_RUN_AIM`
- `11`
- `ACT_RUN_CROUCH`
- `12`
- `ACT_RUN_CROUCH_AIM`
- `13`
- `ACT_RUN_PROTECTED`
- `14`
- `ACT_SCRIPT_CUSTOM_MOVE`
- `15`
- `ACT_RANGE_ATTACK1`
- `16`
- `ACT_RANGE_ATTACK2`
- `17`
- `ACT_RANGE_ATTACK1_LOW`
- `18`
- `ACT_RANGE_ATTACK2_LOW`
- `19`
- `ACT_DIESIMPLE`
- `20`
- `ACT_DIEBACKWARD`
- `21`
- `ACT_DIEFORWARD`
- `22`
- `ACT_DIEVIOLENT`
- `23`
- `ACT_DIERAGDOLL`
- `24`
- `ACT_FLY`
- `25`
- `ACT_HOVER`
- `26`
- `ACT_GLIDE`
- `27`
- `ACT_SWIM`
- `28`
- `ACT_JUMP`
- `29`
- `ACT_HOP`
- `30`
- `ACT_LEAP`
- `31`
- `ACT_LAND`
- `32`
- `ACT_CLIMB_UP`
- `33`
- `ACT_CLIMB_DOWN`
- `34`
- `ACT_CLIMB_DISMOUNT`
- `35`
- `ACT_SHIPLADDER_UP`
- `36`
- `ACT_SHIPLADDER_DOWN`
- `37`
- `ACT_STRAFE_LEFT`
- `38`
- `ACT_STRAFE_RIGHT`
- `39`
- `ACT_ROLL_LEFT`
- `40`
- `ACT_ROLL_RIGHT`
- `41`
- `ACT_TURN_LEFT`
- `42`
- `ACT_TURN_RIGHT`
- `43`
- `ACT_CROUCH`
- `44`
- `ACT_CROUCHIDLE`
- `45`
- `ACT_STAND`
- `46`
- `ACT_USE`
- `47`
- `ACT_ALIEN_BURROW_IDLE`
- `48`
- `ACT_ALIEN_BURROW_OUT`
- `49`
- `ACT_SIGNAL1`
- `50`
- `ACT_SIGNAL2`
- `51`
- `ACT_SIGNAL3`
- `52`
- `ACT_SIGNAL_ADVANCE`
- `53`
- `ACT_SIGNAL_FORWARD`
- `54`
- `ACT_SIGNAL_GROUP`
- `55`
- `ACT_SIGNAL_HALT`
- `56`
- `ACT_SIGNAL_LEFT`
- `57`
- `ACT_SIGNAL_RIGHT`
- `58`
- `ACT_SIGNAL_TAKECOVER`
- `59`
- `ACT_LOOKBACK_RIGHT`
- `60`
- `ACT_LOOKBACK_LEFT`
- `61`
- `ACT_COWER`
- `62`
- `ACT_SMALL_FLINCH`
- `63`
- `ACT_BIG_FLINCH`
- `64`
- `ACT_MELEE_ATTACK1`
- `65`
- `ACT_MELEE_ATTACK2`
- `66`
- `ACT_RELOAD`
- `67`
- `ACT_RELOAD_START`
- `68`
- `ACT_RELOAD_FINISH`
- `69`
- `ACT_RELOAD_LOW`
- `70`
- `ACT_ARM`
- `71`
- `ACT_DISARM`
- `72`
- `ACT_DROP_WEAPON`
- `73`
- `ACT_DROP_WEAPON_SHOTGUN`
- `74`
- `ACT_PICKUP_GROUND`
- `75`
- `ACT_PICKUP_RACK`
- `76`
- `ACT_IDLE_ANGRY`
- `77`
- `ACT_IDLE_RELAXED`
- `78`
- `ACT_IDLE_STIMULATED`
- `79`
- `ACT_IDLE_AGITATED`
- `80`
- `ACT_IDLE_STEALTH`
- `81`
- `ACT_IDLE_HURT`
- `82`
- `ACT_WALK_RELAXED`
- `83`
- `ACT_WALK_STIMULATED`
- `84`
- `ACT_WALK_AGITATED`
- `85`
- `ACT_WALK_STEALTH`
- `86`
- `ACT_RUN_RELAXED`
- `87`
- `ACT_RUN_STIMULATED`
- `88`
- `ACT_RUN_AGITATED`
- `89`
- `ACT_RUN_STEALTH`
- `90`
- `ACT_IDLE_AIM_RELAXED`
- `91`
- `ACT_IDLE_AIM_STIMULATED`
- `92`
- `ACT_IDLE_AIM_AGITATED`
- `93`
- `ACT_IDLE_AIM_STEALTH`
- `94`
- `ACT_WALK_AIM_RELAXED`
- `95`
- `ACT_WALK_AIM_STIMULATED`
- `96`
- `ACT_WALK_AIM_AGITATED`
- `97`
- `ACT_WALK_AIM_STEALTH`
- `98`
- `ACT_RUN_AIM_RELAXED`
- `99`
- `ACT_RUN_AIM_STIMULATED`
- `100`
- `ACT_RUN_AIM_AGITATED`
- `101`
- `ACT_RUN_AIM_STEALTH`
- `102`
- `ACT_CROUCHIDLE_STIMULATED`
- `103`
- `ACT_CROUCHIDLE_AIM_STIMULATED`
- `104`
- `ACT_CROUCHIDLE_AGITATED`
- `105`
- `ACT_WALK_HURT`
- `106`
- `ACT_RUN_HURT`
- `107`
- `ACT_SPECIAL_ATTACK1`
- `108`
- `ACT_SPECIAL_ATTACK2`
- `109`
- `ACT_COMBAT_IDLE`
- `110`
- `ACT_WALK_SCARED`
- `111`
- `ACT_RUN_SCARED`
- `112`
- `ACT_VICTORY_DANCE`
- `113`
- `ACT_DIE_HEADSHOT`
- `114`
- `ACT_DIE_CHESTSHOT`
- `115`
- `ACT_DIE_GUTSHOT`
- `116`
- `ACT_DIE_BACKSHOT`
- `117`
- `ACT_FLINCH_HEAD`
- `118`
- `ACT_FLINCH_CHEST`
- `119`
- `ACT_FLINCH_STOMACH`
- `120`
- `ACT_FLINCH_LEFTARM`
- `121`
- `ACT_FLINCH_RIGHTARM`
- `122`
- `ACT_FLINCH_LEFTLEG`
- `123`
- `ACT_FLINCH_RIGHTLEG`
- `124`
- `ACT_FLINCH_PHYSICS`
- `125`
- `ACT_FLINCH_HEAD_BACK`
- `126`
- `ACT_FLINCH_CHEST_BACK`
- `127`
- `ACT_FLINCH_STOMACH_BACK`
- `128`
- `ACT_FLINCH_CROUCH_FRONT`
- `129`
- `ACT_FLINCH_CROUCH_BACK`
- `130`
- `ACT_FLINCH_CROUCH_LEFT`
- `131`
- `ACT_FLINCH_CROUCH_RIGHT`
- `132`
- `ACT_IDLE_ON_FIRE`
- `133`
- `ACT_WALK_ON_FIRE`
- `134`
- `ACT_RUN_ON_FIRE`
- `135`
- `ACT_180_LEFT`
- `137`
- `ACT_180_RIGHT`
- `138`
- `ACT_90_LEFT`
- `139`
- `ACT_90_RIGHT`
- `140`
- `ACT_STEP_LEFT`
- `141`
- `ACT_STEP_RIGHT`
- `142`
- `ACT_STEP_BACK`
- `143`
- `ACT_STEP_FORE`
- `144`
- `ACT_GESTURE_RANGE_ATTACK1`
- `145`
- `ACT_GESTURE_RANGE_ATTACK2`
- `146`
- `ACT_GESTURE_MELEE_ATTACK1`
- `147`
- `ACT_GESTURE_MELEE_ATTACK2`
- `148`
- `ACT_GESTURE_RANGE_ATTACK1_LOW`
- `149`
- `ACT_GESTURE_RANGE_ATTACK2_LOW`
- `150`
- `ACT_MELEE_ATTACK_SWING_GESTURE`
- `151`
- `ACT_GESTURE_SMALL_FLINCH`
- `152`
- `ACT_GESTURE_BIG_FLINCH`
- `153`
- `ACT_GESTURE_FLINCH_BLAST`
- `154`
- `ACT_GESTURE_FLINCH_BLAST_SHOTGUN`
- `155`
- `ACT_GESTURE_FLINCH_BLAST_DAMAGED`
- `156`
- `ACT_GESTURE_FLINCH_BLAST_DAMAGED_SHOTGUN`
- `157`
- `ACT_GESTURE_FLINCH_HEAD`
- `158`
- `ACT_GESTURE_FLINCH_CHEST`
- `159`
- `ACT_GESTURE_FLINCH_STOMACH`
- `160`
- `ACT_GESTURE_FLINCH_LEFTARM`
- `161`
- `ACT_GESTURE_FLINCH_RIGHTARM`
- `162`
- `ACT_GESTURE_FLINCH_LEFTLEG`
- `163`
- `ACT_GESTURE_FLINCH_RIGHTLEG`
- `164`
- `ACT_GESTURE_TURN_LEFT`
- `165`
- `ACT_GESTURE_TURN_RIGHT`
- `166`
- `ACT_GESTURE_TURN_LEFT45`
- `167`
- `ACT_GESTURE_TURN_RIGHT45`
- `168`
- `ACT_GESTURE_TURN_LEFT90`
- `169`
- `ACT_GESTURE_TURN_RIGHT90`
- `170`
- `ACT_GESTURE_TURN_LEFT45_FLAT`
- `171`
- `ACT_GESTURE_TURN_RIGHT45_FLAT`
- `172`
- `ACT_GESTURE_TURN_LEFT90_FLAT`
- `173`
- `ACT_GESTURE_TURN_RIGHT90_FLAT`
- `174`
- `ACT_BARNACLE_HIT`
- `175`
- `ACT_BARNACLE_PULL`
- `176`
- `ACT_BARNACLE_CHOMP`
- `177`
- `ACT_BARNACLE_CHEW`
- `178`
- `ACT_DO_NOT_DISTURB`
- `179`
- `ACT_SPECIFIC_SEQUENCE`
- `180`
- `ACT_VM_DEPLOY`
- `181`
- `ACT_VM_RELOAD_EMPTY`
- `182`
- `ACT_VM_DRAW`
- `183`
- `ACT_VM_HOLSTER`
- `184`
- `ACT_VM_IDLE`
- `185`
- `ACT_VM_FIDGET`
- `186`
- `ACT_VM_PULLBACK`
- `187`
- `ACT_VM_PULLBACK_HIGH`
- `188`
- `ACT_VM_PULLBACK_LOW`
- `189`
- `ACT_VM_THROW`
- `190`
- `ACT_VM_DROP`
- `191`
- `ACT_VM_PULLPIN`
- `192`
- `ACT_VM_PRIMARYATTACK`
- `193`
- `ACT_VM_SECONDARYATTACK`
- `194`
- `ACT_VM_RELOAD`
- `195`
- `ACT_VM_DRYFIRE`
- `196`
- `ACT_VM_HITLEFT`
- `197`
- `ACT_VM_HITLEFT2`
- `198`
- `ACT_VM_HITRIGHT`
- `199`
- `ACT_VM_HITRIGHT2`
- `200`
- `ACT_VM_HITCENTER`
- `201`
- `ACT_VM_HITCENTER2`
- `202`
- `ACT_VM_MISSLEFT`
- `203`
- `ACT_VM_MISSLEFT2`
- `204`
- `ACT_VM_MISSRIGHT`
- `205`
- `ACT_VM_MISSRIGHT2`
- `206`
- `ACT_VM_MISSCENTER`
- `207`
- `ACT_VM_MISSCENTER2`
- `208`
- `ACT_VM_HAULBACK`
- `209`
- `ACT_VM_SWINGHARD`
- `210`
- `ACT_VM_SWINGMISS`
- `211`
- `ACT_VM_SWINGHIT`
- `212`
- `ACT_VM_IDLE_TO_LOWERED`
- `213`
- `ACT_VM_IDLE_LOWERED`
- `214`
- `ACT_VM_LOWERED_TO_IDLE`
- `215`
- `ACT_VM_RECOIL1`
- `216`
- `ACT_VM_RECOIL2`
- `217`
- `ACT_VM_RECOIL3`
- `218`
- `ACT_VM_PICKUP`
- `219`
- `ACT_VM_RELEASE`
- `220`
- `ACT_VM_MAUL_LOOP`
- `221`
- `ACT_VM_ATTACH_SILENCER`
- `222`
- `ACT_VM_DETACH_SILENCER`
- `223`
- `ACT_SLAM_STICKWALL_IDLE`
- `224`
- `ACT_SLAM_STICKWALL_ND_IDLE`
- `225`
- `ACT_SLAM_STICKWALL_ATTACH`
- `226`
- `ACT_SLAM_STICKWALL_ATTACH2`
- `227`
- `ACT_SLAM_STICKWALL_ND_ATTACH`
- `228`
- `ACT_SLAM_STICKWALL_ND_ATTACH2`
- `229`
- `ACT_SLAM_STICKWALL_DETONATE`
- `230`
- `ACT_SLAM_STICKWALL_DETONATOR_HOLSTER`
- `231`
- `ACT_SLAM_STICKWALL_DRAW`
- `232`
- `ACT_SLAM_STICKWALL_ND_DRAW`
- `233`
- `ACT_SLAM_STICKWALL_TO_THROW`
- `234`
- `ACT_SLAM_STICKWALL_TO_THROW_ND`
- `235`
- `ACT_SLAM_STICKWALL_TO_TRIPMINE_ND`
- `236`
- `ACT_SLAM_THROW_IDLE`
- `237`
- `ACT_SLAM_THROW_ND_IDLE`
- `238`
- `ACT_SLAM_THROW_THROW`
- `239`
- `ACT_SLAM_THROW_THROW2`
- `240`
- `ACT_SLAM_THROW_THROW_ND`
- `241`
- `ACT_SLAM_THROW_THROW_ND2`
- `242`
- `ACT_SLAM_THROW_DRAW`
- `243`
- `ACT_SLAM_THROW_ND_DRAW`
- `244`
- `ACT_SLAM_THROW_TO_STICKWALL`
- `245`
- `ACT_SLAM_THROW_TO_STICKWALL_ND`
- `246`
- `ACT_SLAM_THROW_DETONATE`
- `247`
- `ACT_SLAM_THROW_DETONATOR_HOLSTER`
- `248`
- `ACT_SLAM_THROW_TO_TRIPMINE_ND`
- `249`
- `ACT_SLAM_TRIPMINE_IDLE`
- `250`
- `ACT_SLAM_TRIPMINE_DRAW`
- `251`
- `ACT_SLAM_TRIPMINE_ATTACH`
- `252`
- `ACT_SLAM_TRIPMINE_ATTACH2`
- `253`
- `ACT_SLAM_TRIPMINE_TO_STICKWALL_ND`
- `254`
- `ACT_SLAM_TRIPMINE_TO_THROW_ND`
- `255`
- `ACT_SLAM_DETONATOR_IDLE`
- `256`
- `ACT_SLAM_DETONATOR_DRAW`
- `257`
- `ACT_SLAM_DETONATOR_DETONATE`
- `258`
- `ACT_SLAM_DETONATOR_HOLSTER`
- `259`
- `ACT_SLAM_DETONATOR_STICKWALL_DRAW`
- `260`
- `ACT_SLAM_DETONATOR_THROW_DRAW`
- `261`
- `ACT_SHOTGUN_RELOAD_START`
- `262`
- `ACT_SHOTGUN_RELOAD_FINISH`
- `263`
- `ACT_SHOTGUN_PUMP`
- `264`
- `ACT_SMG2_IDLE2`
- `265`
- `ACT_SMG2_FIRE2`
- `266`
- `ACT_SMG2_DRAW2`
- `267`
- `ACT_SMG2_RELOAD2`
- `268`
- `ACT_SMG2_DRYFIRE2`
- `269`
- `ACT_SMG2_TOAUTO`
- `270`
- `ACT_SMG2_TOBURST`
- `271`
- `ACT_PHYSCANNON_UPGRADE`
- `272`
- `ACT_RANGE_ATTACK_AR1`
- `273`
- `ACT_RANGE_ATTACK_AR2`
- `274`
- `ACT_RANGE_ATTACK_AR2_LOW`
- `275`
- `ACT_RANGE_ATTACK_AR2_GRENADE`
- `276`
- `ACT_RANGE_ATTACK_HMG1`
- `277`
- `ACT_RANGE_ATTACK_ML`
- `278`
- `ACT_RANGE_ATTACK_SMG1`
- `279`
- `ACT_RANGE_ATTACK_SMG1_LOW`
- `280`
- `ACT_RANGE_ATTACK_SMG2`
- `281`
- `ACT_RANGE_ATTACK_SHOTGUN`
- `282`
- `ACT_RANGE_ATTACK_SHOTGUN_LOW`
- `283`
- `ACT_RANGE_ATTACK_PISTOL`
- `284`
- `ACT_RANGE_ATTACK_PISTOL_LOW`
- `285`
- `ACT_RANGE_ATTACK_SLAM`
- `286`
- `ACT_RANGE_ATTACK_TRIPWIRE`
- `287`
- `ACT_RANGE_ATTACK_THROW`
- `288`
- `ACT_RANGE_ATTACK_SNIPER_RIFLE`
- `289`
- `ACT_RANGE_ATTACK_RPG`
- `290`
- `ACT_MELEE_ATTACK_SWING`
- `291`
- `ACT_RANGE_AIM_LOW`
- `292`
- `ACT_RANGE_AIM_SMG1_LOW`
- `293`
- `ACT_RANGE_AIM_PISTOL_LOW`
- `294`
- `ACT_RANGE_AIM_AR2_LOW`
- `295`
- `ACT_COVER_PISTOL_LOW`
- `296`
- `ACT_COVER_SMG1_LOW`
- `297`
- `ACT_GESTURE_RANGE_ATTACK_AR1`
- `298`
- `ACT_GESTURE_RANGE_ATTACK_AR2`
- `299`
- `ACT_GESTURE_RANGE_ATTACK_AR2_GRENADE`
- `300`
- `ACT_GESTURE_RANGE_ATTACK_HMG1`
- `301`
- `ACT_GESTURE_RANGE_ATTACK_ML`
- `302`
- `ACT_GESTURE_RANGE_ATTACK_SMG1`
- `303`
- `ACT_GESTURE_RANGE_ATTACK_SMG1_LOW`
- `304`
- `ACT_GESTURE_RANGE_ATTACK_SMG2`
- `305`
- `ACT_GESTURE_RANGE_ATTACK_SHOTGUN`
- `306`
- `ACT_GESTURE_RANGE_ATTACK_PISTOL`
- `307`
- `ACT_GESTURE_RANGE_ATTACK_PISTOL_LOW`
- `308`
- `ACT_GESTURE_RANGE_ATTACK_SLAM`
- `309`
- `ACT_GESTURE_RANGE_ATTACK_TRIPWIRE`
- `310`
- `ACT_GESTURE_RANGE_ATTACK_THROW`
- `311`
- `ACT_GESTURE_RANGE_ATTACK_SNIPER_RIFLE`
- `312`
- `ACT_GESTURE_MELEE_ATTACK_SWING`
- `313`
- `ACT_IDLE_RIFLE`
- `314`
- `ACT_IDLE_SMG1`
- `315`
- `ACT_IDLE_ANGRY_SMG1`
- `316`
- `ACT_IDLE_PISTOL`
- `317`
- `ACT_IDLE_ANGRY_PISTOL`
- `318`
- `ACT_IDLE_ANGRY_SHOTGUN`
- `319`
- `ACT_IDLE_STEALTH_PISTOL`
- `320`
- `ACT_IDLE_PACKAGE`
- `321`
- `ACT_WALK_PACKAGE`
- `322`
- `ACT_IDLE_SUITCASE`
- `323`
- `ACT_WALK_SUITCASE`
- `324`
- `ACT_IDLE_SMG1_RELAXED`
- `325`
- `ACT_IDLE_SMG1_STIMULATED`
- `326`
- `ACT_WALK_RIFLE_RELAXED`
- `327`
- `ACT_RUN_RIFLE_RELAXED`
- `328`
- `ACT_WALK_RIFLE_STIMULATED`
- `329`
- `ACT_RUN_RIFLE_STIMULATED`
- `330`
- `ACT_IDLE_AIM_RIFLE_STIMULATED`
- `331`
- `ACT_WALK_AIM_RIFLE_STIMULATED`
- `332`
- `ACT_RUN_AIM_RIFLE_STIMULATED`
- `333`
- `ACT_IDLE_SHOTGUN_RELAXED`
- `334`
- `ACT_IDLE_SHOTGUN_STIMULATED`
- `335`
- `ACT_IDLE_SHOTGUN_AGITATED`
- `336`
- `ACT_WALK_ANGRY`
- `337`
- `ACT_POLICE_HARASS1`
- `338`
- `ACT_POLICE_HARASS2`
- `339`
- `ACT_IDLE_MANNEDGUN`
- `340`
- `ACT_IDLE_MELEE`
- `341`
- `ACT_IDLE_ANGRY_MELEE`
- `342`
- `ACT_IDLE_RPG_RELAXED`
- `343`
- `ACT_IDLE_RPG`
- `344`
- `ACT_IDLE_ANGRY_RPG`
- `345`
- `ACT_COVER_LOW_RPG`
- `346`
- `ACT_WALK_RPG`
- `347`
- `ACT_RUN_RPG`
- `348`
- `ACT_WALK_CROUCH_RPG`
- `349`
- `ACT_RUN_CROUCH_RPG`
- `350`
- `ACT_WALK_RPG_RELAXED`
- `351`
- `ACT_RUN_RPG_RELAXED`
- `352`
- `ACT_WALK_RIFLE`
- `353`
- `ACT_WALK_AIM_RIFLE`
- `354`
- `ACT_WALK_CROUCH_RIFLE`
- `355`
- `ACT_WALK_CROUCH_AIM_RIFLE`
- `356`
- `ACT_RUN_RIFLE`
- `357`
- `ACT_RUN_AIM_RIFLE`
- `358`
- `ACT_RUN_CROUCH_RIFLE`
- `359`
- `ACT_RUN_CROUCH_AIM_RIFLE`
- `360`
- `ACT_RUN_STEALTH_PISTOL`
- `361`
- `ACT_WALK_AIM_SHOTGUN`
- `362`
- `ACT_RUN_AIM_SHOTGUN`
- `363`
- `ACT_WALK_PISTOL`
- `364`
- `ACT_RUN_PISTOL`
- `365`
- `ACT_WALK_AIM_PISTOL`
- `366`
- `ACT_RUN_AIM_PISTOL`
- `367`
- `ACT_WALK_STEALTH_PISTOL`
- `368`
- `ACT_WALK_AIM_STEALTH_PISTOL`
- `369`
- `ACT_RUN_AIM_STEALTH_PISTOL`
- `370`
- `ACT_RELOAD_PISTOL`
- `371`
- `ACT_RELOAD_PISTOL_LOW`
- `372`
- `ACT_RELOAD_SMG1`
- `373`
- `ACT_RELOAD_SMG1_LOW`
- `374`
- `ACT_RELOAD_SHOTGUN`
- `375`
- `ACT_RELOAD_SHOTGUN_LOW`
- `376`
- `ACT_GESTURE_RELOAD`
- `377`
- `ACT_GESTURE_RELOAD_PISTOL`
- `378`
- `ACT_GESTURE_RELOAD_SMG1`
- `379`
- `ACT_GESTURE_RELOAD_SHOTGUN`
- `380`
- `ACT_BUSY_LEAN_LEFT`
- `381`
- `ACT_BUSY_LEAN_LEFT_ENTRY`
- `382`
- `ACT_BUSY_LEAN_LEFT_EXIT`
- `383`
- `ACT_BUSY_LEAN_BACK`
- `384`
- `ACT_BUSY_LEAN_BACK_ENTRY`
- `385`
- `ACT_BUSY_LEAN_BACK_EXIT`
- `386`
- `ACT_BUSY_SIT_GROUND`
- `387`
- `ACT_BUSY_SIT_GROUND_ENTRY`
- `388`
- `ACT_BUSY_SIT_GROUND_EXIT`
- `389`
- `ACT_BUSY_SIT_CHAIR`
- `390`
- `ACT_BUSY_SIT_CHAIR_ENTRY`
- `391`
- `ACT_BUSY_SIT_CHAIR_EXIT`
- `392`
- `ACT_BUSY_STAND`
- `393`
- `ACT_BUSY_QUEUE`
- `394`
- `ACT_DUCK_DODGE`
- `395`
- `ACT_DIE_BARNACLE_SWALLOW`
- `396`
- `ACT_GESTURE_BARNACLE_STRANGLE`
- `397`
- `ACT_PHYSCANNON_DETACH`
- `398`
- `ACT_PHYSCANNON_ANIMATE`
- `399`
- `ACT_PHYSCANNON_ANIMATE_PRE`
- `400`
- `ACT_PHYSCANNON_ANIMATE_POST`
- `401`
- `ACT_DIE_FRONTSIDE`
- `402`
- `ACT_DIE_RIGHTSIDE`
- `403`
- `ACT_DIE_BACKSIDE`
- `404`
- `ACT_DIE_LEFTSIDE`
- `405`
- `ACT_DIE_CROUCH_FRONTSIDE`
- `406`
- `ACT_DIE_CROUCH_RIGHTSIDE`
- `407`
- `ACT_DIE_CROUCH_BACKSIDE`
- `408`
- `ACT_DIE_CROUCH_LEFTSIDE`
- `409`
- `ACT_DIE_INCAP`
- `410`
- `ACT_DIE_STANDING`
- `411`
- `ACT_OPEN_DOOR`
- `412`
- `ACT_DI_ALYX_ZOMBIE_MELEE`
- `413`
- `ACT_DI_ALYX_ZOMBIE_TORSO_MELEE`
- `414`
- `ACT_DI_ALYX_HEADCRAB_MELEE`
- `415`
- `ACT_DI_ALYX_ANTLION`
- `416`
- `ACT_DI_ALYX_ZOMBIE_SHOTGUN64`
- `417`
- `ACT_DI_ALYX_ZOMBIE_SHOTGUN26`
- `418`
- `ACT_READINESS_RELAXED_TO_STIMULATED`
- `419`
- `ACT_READINESS_RELAXED_TO_STIMULATED_WALK`
- `420`
- `ACT_READINESS_AGITATED_TO_STIMULATED`
- `421`
- `ACT_READINESS_STIMULATED_TO_RELAXED`
- `422`
- `ACT_READINESS_PISTOL_RELAXED_TO_STIMULATED`
- `423`
- `ACT_READINESS_PISTOL_RELAXED_TO_STIMULATED_WALK`
- `424`
- `ACT_READINESS_PISTOL_AGITATED_TO_STIMULATED`
- `425`
- `ACT_READINESS_PISTOL_STIMULATED_TO_RELAXED`
- `426`
- `ACT_IDLE_CARRY`
- `427`
- `ACT_WALK_CARRY`
- `428`
- `ACT_STARTDYING`
- `429`
- `ACT_DYINGLOOP`
- `430`
- `ACT_DYINGTODEAD`
- `431`
- `ACT_RIDE_MANNED_GUN`
- `432`
- `ACT_VM_SPRINT_ENTER`
- `433`
- `ACT_VM_SPRINT_IDLE`
- `434`
- `ACT_VM_SPRINT_LEAVE`
- `435`
- `ACT_FIRE_START`
- `436`
- `ACT_FIRE_LOOP`
- `437`
- `ACT_FIRE_END`
- `438`
- `ACT_CROUCHING_GRENADEIDLE`
- `439`
- `ACT_CROUCHING_GRENADEREADY`
- `440`
- `ACT_CROUCHING_PRIMARYATTACK`
- `441`
- `ACT_OVERLAY_GRENADEIDLE`
- `442`
- `ACT_OVERLAY_GRENADEREADY`
- `443`
- `ACT_OVERLAY_PRIMARYATTACK`
- `444`
- `ACT_OVERLAY_SHIELD_UP`
- `445`
- `ACT_OVERLAY_SHIELD_DOWN`
- `446`
- `ACT_OVERLAY_SHIELD_UP_IDLE`
- `447`
- `ACT_OVERLAY_SHIELD_ATTACK`
- `448`
- `ACT_OVERLAY_SHIELD_KNOCKBACK`
- `449`
- `ACT_SHIELD_UP`
- `450`
- `ACT_SHIELD_DOWN`
- `451`
- `ACT_SHIELD_UP_IDLE`
- `452`
- `ACT_SHIELD_ATTACK`
- `453`
- `ACT_SHIELD_KNOCKBACK`
- `454`
- `ACT_CROUCHING_SHIELD_UP`
- `455`
- `ACT_CROUCHING_SHIELD_DOWN`
- `456`
- `ACT_CROUCHING_SHIELD_UP_IDLE`
- `457`
- `ACT_CROUCHING_SHIELD_ATTACK`
- `458`
- `ACT_CROUCHING_SHIELD_KNOCKBACK`
- `459`
- `ACT_TURNRIGHT45`
- `460`
- `ACT_TURNLEFT45`
- `461`
- `ACT_TURN`
- `462`
- `ACT_OBJ_ASSEMBLING`
- `463`
- `ACT_OBJ_DISMANTLING`
- `464`
- `ACT_OBJ_STARTUP`
- `465`
- `ACT_OBJ_RUNNING`
- `466`
- `ACT_OBJ_IDLE`
- `467`
- `ACT_OBJ_PLACING`
- `468`
- `ACT_OBJ_DETERIORATING`
- `469`
- `ACT_OBJ_UPGRADING`
- `470`
- `ACT_DEPLOY`
- `471`
- `ACT_DEPLOY_IDLE`
- `472`
- `ACT_UNDEPLOY`
- `473`
- `ACT_CROSSBOW_DRAW_UNLOADED`
- `474`
- `ACT_GAUSS_SPINUP`
- `475`
- `ACT_GAUSS_SPINCYCLE`
- `476`
- `ACT_VM_PRIMARYATTACK_SILENCED`
- `477`
- `ACT_VM_RELOAD_SILENCED`
- `478`
- `ACT_VM_DRYFIRE_SILENCED`
- `479`
- `ACT_VM_IDLE_SILENCED`
- `480`
- `ACT_VM_DRAW_SILENCED`
- `481`
- `ACT_VM_IDLE_EMPTY_LEFT`
- `482`
- `ACT_VM_DRYFIRE_LEFT`
- `483`
- `ACT_VM_IS_DRAW`
- `484`
- `ACT_VM_IS_HOLSTER`
- `485`
- `ACT_VM_IS_IDLE`
- `486`
- `ACT_VM_IS_PRIMARYATTACK`
- `487`
- `ACT_PLAYER_IDLE_FIRE`
- `488`
- `ACT_PLAYER_CROUCH_FIRE`
- `489`
- `ACT_PLAYER_CROUCH_WALK_FIRE`
- `490`
- `ACT_PLAYER_WALK_FIRE`
- `491`
- `ACT_PLAYER_RUN_FIRE`
- `492`
- `ACT_IDLETORUN`
- `493`
- `ACT_RUNTOIDLE`
- `494`
- `ACT_VM_DRAW_DEPLOYED`
- `495`
- `ACT_HL2MP_IDLE_MELEE`
- `496`
- `ACT_HL2MP_RUN_MELEE`
- `497`
- `ACT_HL2MP_IDLE_CROUCH_MELEE`
- `498`
- `ACT_HL2MP_WALK_CROUCH_MELEE`
- `499`
- `ACT_HL2MP_GESTURE_RANGE_ATTACK_MELEE`
- `500`
- `ACT_HL2MP_GESTURE_RELOAD_MELEE`
- `501`
- `ACT_HL2MP_JUMP_MELEE`
- `502`
- `ACT_MP_STAND_IDLE`
- `503`
- `ACT_MP_CROUCH_IDLE`
- `504`
- `ACT_MP_CROUCH_DEPLOYED_IDLE`
- `505`
- `ACT_MP_CROUCH_DEPLOYED`
- `506`
- `ACT_MP_DEPLOYED_IDLE`
- `507`
- `ACT_MP_RUN`
- `508`
- `ACT_MP_WALK`
- `509`
- `ACT_MP_AIRWALK`
- `510`
- `ACT_MP_CROUCHWALK`
- `511`
- `ACT_MP_SPRINT`
- `512`
- `ACT_MP_JUMP`
- `513`
- `ACT_MP_JUMP_START`
- `514`
- `ACT_MP_JUMP_FLOAT`
- `515`
- `ACT_MP_JUMP_LAND`
- `516`
- `ACT_MP_DOUBLEJUMP`
- `517`
- `ACT_MP_SWIM`
- `518`
- `ACT_MP_DEPLOYED`
- `519`
- `ACT_MP_SWIM_DEPLOYED`
- `520`
- `ACT_MP_VCD`
- `521`
- `ACT_MP_ATTACK_STAND_PRIMARYFIRE`
- `522`
- `ACT_MP_ATTACK_STAND_PRIMARYFIRE_DEPLOYED`
- `523`
- `ACT_MP_ATTACK_STAND_SECONDARYFIRE`
- `524`
- `ACT_MP_ATTACK_STAND_GRENADE`
- `525`
- `ACT_MP_ATTACK_CROUCH_PRIMARYFIRE`
- `526`
- `ACT_MP_ATTACK_CROUCH_PRIMARYFIRE_DEPLOYED`
- `527`
- `ACT_MP_ATTACK_CROUCH_SECONDARYFIRE`
- `528`
- `ACT_MP_ATTACK_CROUCH_GRENADE`
- `529`
- `ACT_MP_ATTACK_SWIM_PRIMARYFIRE`
- `530`
- `ACT_MP_ATTACK_SWIM_SECONDARYFIRE`
- `531`
- `ACT_MP_ATTACK_SWIM_GRENADE`
- `532`
- `ACT_MP_ATTACK_AIRWALK_PRIMARYFIRE`
- `533`
- `ACT_MP_ATTACK_AIRWALK_SECONDARYFIRE`
- `534`
- `ACT_MP_ATTACK_AIRWALK_GRENADE`
- `535`
- `ACT_MP_RELOAD_STAND`
- `536`
- `ACT_MP_RELOAD_STAND_LOOP`
- `537`
- `ACT_MP_RELOAD_STAND_END`
- `538`
- `ACT_MP_RELOAD_CROUCH`
- `539`
- `ACT_MP_RELOAD_CROUCH_LOOP`
- `540`
- `ACT_MP_RELOAD_CROUCH_END`
- `541`
- `ACT_MP_RELOAD_SWIM`
- `542`
- `ACT_MP_RELOAD_SWIM_LOOP`
- `543`
- `ACT_MP_RELOAD_SWIM_END`
- `544`
- `ACT_MP_RELOAD_AIRWALK`
- `545`
- `ACT_MP_RELOAD_AIRWALK_LOOP`
- `546`
- `ACT_MP_RELOAD_AIRWALK_END`
- `547`
- `ACT_MP_ATTACK_STAND_PREFIRE`
- `548`
- `ACT_MP_ATTACK_STAND_POSTFIRE`
- `549`
- `ACT_MP_ATTACK_STAND_STARTFIRE`
- `550`
- `ACT_MP_ATTACK_CROUCH_PREFIRE`
- `551`
- `ACT_MP_ATTACK_CROUCH_POSTFIRE`
- `552`
- `ACT_MP_ATTACK_SWIM_PREFIRE`
- `553`
- `ACT_MP_ATTACK_SWIM_POSTFIRE`
- `554`
- `ACT_MP_STAND_PRIMARY`
- `555`
- `ACT_MP_CROUCH_PRIMARY`
- `556`
- `ACT_MP_RUN_PRIMARY`
- `557`
- `ACT_MP_WALK_PRIMARY`
- `558`
- `ACT_MP_AIRWALK_PRIMARY`
- `559`
- `ACT_MP_CROUCHWALK_PRIMARY`
- `560`
- `ACT_MP_JUMP_PRIMARY`
- `561`
- `ACT_MP_JUMP_START_PRIMARY`
- `562`
- `ACT_MP_JUMP_FLOAT_PRIMARY`
- `563`
- `ACT_MP_JUMP_LAND_PRIMARY`
- `564`
- `ACT_MP_SWIM_PRIMARY`
- `565`
- `ACT_MP_DEPLOYED_PRIMARY`
- `566`
- `ACT_MP_SWIM_DEPLOYED_PRIMARY`
- `567`
- `ACT_MP_ATTACK_STAND_PRIMARY`
- `568`
- `ACT_MP_ATTACK_STAND_PRIMARY_DEPLOYED`
- `569`
- `ACT_MP_ATTACK_CROUCH_PRIMARY`
- `570`
- `ACT_MP_ATTACK_CROUCH_PRIMARY_DEPLOYED`
- `571`
- `ACT_MP_ATTACK_SWIM_PRIMARY`
- `572`
- `ACT_MP_ATTACK_AIRWALK_PRIMARY`
- `573`
- `ACT_MP_RELOAD_STAND_PRIMARY`
- `574`
- `ACT_MP_RELOAD_STAND_PRIMARY_LOOP`
- `575`
- `ACT_MP_RELOAD_STAND_PRIMARY_END`
- `576`
- `ACT_MP_RELOAD_CROUCH_PRIMARY`
- `577`
- `ACT_MP_RELOAD_CROUCH_PRIMARY_LOOP`
- `578`
- `ACT_MP_RELOAD_CROUCH_PRIMARY_END`
- `579`
- `ACT_MP_RELOAD_SWIM_PRIMARY`
- `580`
- `ACT_MP_RELOAD_SWIM_PRIMARY_LOOP`
- `581`
- `ACT_MP_RELOAD_SWIM_PRIMARY_END`
- `582`
- `ACT_MP_RELOAD_AIRWALK_PRIMARY`
- `583`
- `ACT_MP_RELOAD_AIRWALK_PRIMARY_LOOP`
- `584`
- `ACT_MP_RELOAD_AIRWALK_PRIMARY_END`
- `585`
- `ACT_MP_ATTACK_STAND_GRENADE_PRIMARY`
- `586`
- `ACT_MP_ATTACK_CROUCH_GRENADE_PRIMARY`
- `587`
- `ACT_MP_ATTACK_SWIM_GRENADE_PRIMARY`
- `588`
- `ACT_MP_ATTACK_AIRWALK_GRENADE_PRIMARY`
- `589`
- `ACT_MP_STAND_SECONDARY`
- `590`
- `ACT_MP_CROUCH_SECONDARY`
- `591`
- `ACT_MP_RUN_SECONDARY`
- `592`
- `ACT_MP_WALK_SECONDARY`
- `593`
- `ACT_MP_AIRWALK_SECONDARY`
- `594`
- `ACT_MP_CROUCHWALK_SECONDARY`
- `595`
- `ACT_MP_JUMP_SECONDARY`
- `596`
- `ACT_MP_JUMP_START_SECONDARY`
- `597`
- `ACT_MP_JUMP_FLOAT_SECONDARY`
- `598`
- `ACT_MP_JUMP_LAND_SECONDARY`
- `599`
- `ACT_MP_SWIM_SECONDARY`
- `600`
- `ACT_MP_ATTACK_STAND_SECONDARY`
- `601`
- `ACT_MP_ATTACK_CROUCH_SECONDARY`
- `602`
- `ACT_MP_ATTACK_SWIM_SECONDARY`
- `603`
- `ACT_MP_ATTACK_AIRWALK_SECONDARY`
- `604`
- `ACT_MP_RELOAD_STAND_SECONDARY`
- `605`
- `ACT_MP_RELOAD_STAND_SECONDARY_LOOP`
- `606`
- `ACT_MP_RELOAD_STAND_SECONDARY_END`
- `607`
- `ACT_MP_RELOAD_CROUCH_SECONDARY`
- `608`
- `ACT_MP_RELOAD_CROUCH_SECONDARY_LOOP`
- `609`
- `ACT_MP_RELOAD_CROUCH_SECONDARY_END`
- `610`
- `ACT_MP_RELOAD_SWIM_SECONDARY`
- `611`
- `ACT_MP_RELOAD_SWIM_SECONDARY_LOOP`
- `612`
- `ACT_MP_RELOAD_SWIM_SECONDARY_END`
- `613`
- `ACT_MP_RELOAD_AIRWALK_SECONDARY`
- `614`
- `ACT_MP_RELOAD_AIRWALK_SECONDARY_LOOP`
- `615`
- `ACT_MP_RELOAD_AIRWALK_SECONDARY_END`
- `616`
- `ACT_MP_ATTACK_STAND_GRENADE_SECONDARY`
- `617`
- `ACT_MP_ATTACK_CROUCH_GRENADE_SECONDARY`
- `618`
- `ACT_MP_ATTACK_SWIM_GRENADE_SECONDARY`
- `619`
- `ACT_MP_ATTACK_AIRWALK_GRENADE_SECONDARY`
- `620`
- `ACT_MP_STAND_MELEE`
- `621`
- `ACT_MP_CROUCH_MELEE`
- `622`
- `ACT_MP_RUN_MELEE`
- `623`
- `ACT_MP_WALK_MELEE`
- `624`
- `ACT_MP_AIRWALK_MELEE`
- `625`
- `ACT_MP_CROUCHWALK_MELEE`
- `626`
- `ACT_MP_JUMP_MELEE`
- `627`
- `ACT_MP_JUMP_START_MELEE`
- `628`
- `ACT_MP_JUMP_FLOAT_MELEE`
- `629`
- `ACT_MP_JUMP_LAND_MELEE`
- `630`
- `ACT_MP_SWIM_MELEE`
- `631`
- `ACT_MP_ATTACK_STAND_MELEE`
- `632`
- `ACT_MP_ATTACK_STAND_MELEE_SECONDARY`
- `633`
- `ACT_MP_ATTACK_CROUCH_MELEE`
- `634`
- `ACT_MP_ATTACK_CROUCH_MELEE_SECONDARY`
- `635`
- `ACT_MP_ATTACK_SWIM_MELEE`
- `636`
- `ACT_MP_ATTACK_AIRWALK_MELEE`
- `637`
- `ACT_MP_ATTACK_STAND_GRENADE_MELEE`
- `638`
- `ACT_MP_ATTACK_CROUCH_GRENADE_MELEE`
- `639`
- `ACT_MP_ATTACK_SWIM_GRENADE_MELEE`
- `640`
- `ACT_MP_ATTACK_AIRWALK_GRENADE_MELEE`
- `641`
- `ACT_MP_STAND_ITEM1`
- `642`
- `ACT_MP_CROUCH_ITEM1`
- `643`
- `ACT_MP_RUN_ITEM1`
- `644`
- `ACT_MP_WALK_ITEM1`
- `645`
- `ACT_MP_AIRWALK_ITEM1`
- `646`
- `ACT_MP_CROUCHWALK_ITEM1`
- `647`
- `ACT_MP_JUMP_ITEM1`
- `648`
- `ACT_MP_JUMP_START_ITEM1`
- `649`
- `ACT_MP_JUMP_FLOAT_ITEM1`
- `650`
- `ACT_MP_JUMP_LAND_ITEM1`
- `651`
- `ACT_MP_SWIM_ITEM1`
- `652`
- `ACT_MP_ATTACK_STAND_ITEM1`
- `653`
- `ACT_MP_ATTACK_STAND_ITEM1_SECONDARY`
- `654`
- `ACT_MP_ATTACK_CROUCH_ITEM1`
- `655`
- `ACT_MP_ATTACK_CROUCH_ITEM1_SECONDARY`
- `656`
- `ACT_MP_ATTACK_SWIM_ITEM1`
- `657`
- `ACT_MP_ATTACK_AIRWALK_ITEM1`
- `658`
- `ACT_MP_STAND_ITEM2`
- `659`
- `ACT_MP_CROUCH_ITEM2`
- `660`
- `ACT_MP_RUN_ITEM2`
- `661`
- `ACT_MP_WALK_ITEM2`
- `662`
- `ACT_MP_AIRWALK_ITEM2`
- `663`
- `ACT_MP_CROUCHWALK_ITEM2`
- `664`
- `ACT_MP_JUMP_ITEM2`
- `665`
- `ACT_MP_JUMP_START_ITEM2`
- `666`
- `ACT_MP_JUMP_FLOAT_ITEM2`
- `667`
- `ACT_MP_JUMP_LAND_ITEM2`
- `668`
- `ACT_MP_SWIM_ITEM2`
- `669`
- `ACT_MP_ATTACK_STAND_ITEM2`
- `670`
- `ACT_MP_ATTACK_STAND_ITEM2_SECONDARY`
- `671`
- `ACT_MP_ATTACK_CROUCH_ITEM2`
- `672`
- `ACT_MP_ATTACK_CROUCH_ITEM2_SECONDARY`
- `673`
- `ACT_MP_ATTACK_SWIM_ITEM2`
- `674`
- `ACT_MP_ATTACK_AIRWALK_ITEM2`
- `675`
- `ACT_MP_GESTURE_FLINCH`
- `676`
- `ACT_MP_GESTURE_FLINCH_PRIMARY`
- `677`
- `ACT_MP_GESTURE_FLINCH_SECONDARY`
- `678`
- `ACT_MP_GESTURE_FLINCH_MELEE`
- `679`
- `ACT_MP_GESTURE_FLINCH_ITEM1`
- `680`
- `ACT_MP_GESTURE_FLINCH_ITEM2`
- `681`
- `ACT_MP_GESTURE_FLINCH_HEAD`
- `682`
- `ACT_MP_GESTURE_FLINCH_CHEST`
- `683`
- `ACT_MP_GESTURE_FLINCH_STOMACH`
- `684`
- `ACT_MP_GESTURE_FLINCH_LEFTARM`
- `685`
- `ACT_MP_GESTURE_FLINCH_RIGHTARM`
- `686`
- `ACT_MP_GESTURE_FLINCH_LEFTLEG`
- `687`
- `ACT_MP_GESTURE_FLINCH_RIGHTLEG`
- `688`
- `ACT_MP_GRENADE1_DRAW`
- `689`
- `ACT_MP_GRENADE1_IDLE`
- `690`
- `ACT_MP_GRENADE1_ATTACK`
- `691`
- `ACT_MP_GRENADE2_DRAW`
- `692`
- `ACT_MP_GRENADE2_IDLE`
- `693`
- `ACT_MP_GRENADE2_ATTACK`
- `694`
- `ACT_MP_PRIMARY_GRENADE1_DRAW`
- `695`
- `ACT_MP_PRIMARY_GRENADE1_IDLE`
- `696`
- `ACT_MP_PRIMARY_GRENADE1_ATTACK`
- `697`
- `ACT_MP_PRIMARY_GRENADE2_DRAW`
- `698`
- `ACT_MP_PRIMARY_GRENADE2_IDLE`
- `699`
- `ACT_MP_PRIMARY_GRENADE2_ATTACK`
- `700`
- `ACT_MP_SECONDARY_GRENADE1_DRAW`
- `701`
- `ACT_MP_SECONDARY_GRENADE1_IDLE`
- `702`
- `ACT_MP_SECONDARY_GRENADE1_ATTACK`
- `703`
- `ACT_MP_SECONDARY_GRENADE2_DRAW`
- `704`
- `ACT_MP_SECONDARY_GRENADE2_IDLE`
- `705`
- `ACT_MP_SECONDARY_GRENADE2_ATTACK`
- `706`
- `ACT_MP_MELEE_GRENADE1_DRAW`
- `707`
- `ACT_MP_MELEE_GRENADE1_IDLE`
- `708`
- `ACT_MP_MELEE_GRENADE1_ATTACK`
- `709`
- `ACT_MP_MELEE_GRENADE2_DRAW`
- `710`
- `ACT_MP_MELEE_GRENADE2_IDLE`
- `711`
- `ACT_MP_MELEE_GRENADE2_ATTACK`
- `712`
- `ACT_MP_ITEM1_GRENADE1_DRAW`
- `713`
- `ACT_MP_ITEM1_GRENADE1_IDLE`
- `714`
- `ACT_MP_ITEM1_GRENADE1_ATTACK`
- `715`
- `ACT_MP_ITEM1_GRENADE2_DRAW`
- `716`
- `ACT_MP_ITEM1_GRENADE2_IDLE`
- `717`
- `ACT_MP_ITEM1_GRENADE2_ATTACK`
- `718`
- `ACT_MP_ITEM2_GRENADE1_DRAW`
- `719`
- `ACT_MP_ITEM2_GRENADE1_IDLE`
- `720`
- `ACT_MP_ITEM2_GRENADE1_ATTACK`
- `721`
- `ACT_MP_ITEM2_GRENADE2_DRAW`
- `722`
- `ACT_MP_ITEM2_GRENADE2_IDLE`
- `723`
- `ACT_MP_ITEM2_GRENADE2_ATTACK`
- `724`
- `ACT_MP_STAND_BUILDING`
- `725`
- `ACT_MP_CROUCH_BUILDING`
- `726`
- `ACT_MP_RUN_BUILDING`
- `727`
- `ACT_MP_WALK_BUILDING`
- `728`
- `ACT_MP_AIRWALK_BUILDING`
- `729`
- `ACT_MP_CROUCHWALK_BUILDING`
- `730`
- `ACT_MP_JUMP_BUILDING`
- `731`
- `ACT_MP_JUMP_START_BUILDING`
- `732`
- `ACT_MP_JUMP_FLOAT_BUILDING`
- `733`
- `ACT_MP_JUMP_LAND_BUILDING`
- `734`
- `ACT_MP_SWIM_BUILDING`
- `735`
- `ACT_MP_ATTACK_STAND_BUILDING`
- `736`
- `ACT_MP_ATTACK_CROUCH_BUILDING`
- `737`
- `ACT_MP_ATTACK_SWIM_BUILDING`
- `738`
- `ACT_MP_ATTACK_AIRWALK_BUILDING`
- `739`
- `ACT_MP_ATTACK_STAND_GRENADE_BUILDING`
- `740`
- `ACT_MP_ATTACK_CROUCH_GRENADE_BUILDING`
- `741`
- `ACT_MP_ATTACK_SWIM_GRENADE_BUILDING`
- `742`
- `ACT_MP_ATTACK_AIRWALK_GRENADE_BUILDING`
- `743`
- `ACT_MP_STAND_PDA`
- `744`
- `ACT_MP_CROUCH_PDA`
- `745`
- `ACT_MP_RUN_PDA`
- `746`
- `ACT_MP_WALK_PDA`
- `747`
- `ACT_MP_AIRWALK_PDA`
- `748`
- `ACT_MP_CROUCHWALK_PDA`
- `749`
- `ACT_MP_JUMP_PDA`
- `750`
- `ACT_MP_JUMP_START_PDA`
- `751`
- `ACT_MP_JUMP_FLOAT_PDA`
- `752`
- `ACT_MP_JUMP_LAND_PDA`
- `753`
- `ACT_MP_SWIM_PDA`
- `754`
- `ACT_MP_ATTACK_STAND_PDA`
- `755`
- `ACT_MP_ATTACK_SWIM_PDA`
- `756`
- `ACT_MP_GESTURE_VC_HANDMOUTH`
- `757`
- `ACT_MP_GESTURE_VC_FINGERPOINT`
- `758`
- `ACT_MP_GESTURE_VC_FISTPUMP`
- `759`
- `ACT_MP_GESTURE_VC_THUMBSUP`
- `760`
- `ACT_MP_GESTURE_VC_NODYES`
- `761`
- `ACT_MP_GESTURE_VC_NODNO`
- `762`
- `ACT_MP_GESTURE_VC_HANDMOUTH_PRIMARY`
- `763`
- `ACT_MP_GESTURE_VC_FINGERPOINT_PRIMARY`
- `764`
- `ACT_MP_GESTURE_VC_FISTPUMP_PRIMARY`
- `765`
- `ACT_MP_GESTURE_VC_THUMBSUP_PRIMARY`
- `766`
- `ACT_MP_GESTURE_VC_NODYES_PRIMARY`
- `767`
- `ACT_MP_GESTURE_VC_NODNO_PRIMARY`
- `768`
- `ACT_MP_GESTURE_VC_HANDMOUTH_SECONDARY`
- `769`
- `ACT_MP_GESTURE_VC_FINGERPOINT_SECONDARY`
- `770`
- `ACT_MP_GESTURE_VC_FISTPUMP_SECONDARY`
- `771`
- `ACT_MP_GESTURE_VC_THUMBSUP_SECONDARY`
- `772`
- `ACT_MP_GESTURE_VC_NODYES_SECONDARY`
- `773`
- `ACT_MP_GESTURE_VC_NODNO_SECONDARY`
- `774`
- `ACT_MP_GESTURE_VC_HANDMOUTH_MELEE`
- `775`
- `ACT_MP_GESTURE_VC_FINGERPOINT_MELEE`
- `776`
- `ACT_MP_GESTURE_VC_FISTPUMP_MELEE`
- `777`
- `ACT_MP_GESTURE_VC_THUMBSUP_MELEE`
- `778`
- `ACT_MP_GESTURE_VC_NODYES_MELEE`
- `779`
- `ACT_MP_GESTURE_VC_NODNO_MELEE`
- `780`
- `ACT_MP_GESTURE_VC_HANDMOUTH_ITEM1`
- `781`
- `ACT_MP_GESTURE_VC_FINGERPOINT_ITEM1`
- `782`
- `ACT_MP_GESTURE_VC_FISTPUMP_ITEM1`
- `783`
- `ACT_MP_GESTURE_VC_THUMBSUP_ITEM1`
- `784`
- `ACT_MP_GESTURE_VC_NODYES_ITEM1`
- `785`
- `ACT_MP_GESTURE_VC_NODNO_ITEM1`
- `786`
- `ACT_MP_GESTURE_VC_HANDMOUTH_ITEM2`
- `787`
- `ACT_MP_GESTURE_VC_FINGERPOINT_ITEM2`
- `788`
- `ACT_MP_GESTURE_VC_FISTPUMP_ITEM2`
- `789`
- `ACT_MP_GESTURE_VC_THUMBSUP_ITEM2`
- `790`
- `ACT_MP_GESTURE_VC_NODYES_ITEM2`
- `791`
- `ACT_MP_GESTURE_VC_NODNO_ITEM2`
- `792`
- `ACT_MP_GESTURE_VC_HANDMOUTH_BUILDING`
- `793`
- `ACT_MP_GESTURE_VC_FINGERPOINT_BUILDING`
- `794`
- `ACT_MP_GESTURE_VC_FISTPUMP_BUILDING`
- `795`
- `ACT_MP_GESTURE_VC_THUMBSUP_BUILDING`
- `796`
- `ACT_MP_GESTURE_VC_NODYES_BUILDING`
- `797`
- `ACT_MP_GESTURE_VC_NODNO_BUILDING`
- `798`
- `ACT_MP_GESTURE_VC_HANDMOUTH_PDA`
- `799`
- `ACT_MP_GESTURE_VC_FINGERPOINT_PDA`
- `800`
- `ACT_MP_GESTURE_VC_FISTPUMP_PDA`
- `801`
- `ACT_MP_GESTURE_VC_THUMBSUP_PDA`
- `802`
- `ACT_MP_GESTURE_VC_NODYES_PDA`
- `803`
- `ACT_MP_GESTURE_VC_NODNO_PDA`
- `804`
- `ACT_VM_UNUSABLE`
- `805`
- `ACT_VM_UNUSABLE_TO_USABLE`
- `806`
- `ACT_VM_USABLE_TO_UNUSABLE`
- `807`
- `ACT_PRIMARY_VM_DRAW`
- `808`
- `ACT_PRIMARY_VM_HOLSTER`
- `809`
- `ACT_PRIMARY_VM_IDLE`
- `810`
- `ACT_PRIMARY_VM_PULLBACK`
- `811`
- `ACT_PRIMARY_VM_PRIMARYATTACK`
- `812`
- `ACT_PRIMARY_VM_SECONDARYATTACK`
- `813`
- `ACT_PRIMARY_VM_RELOAD`
- `814`
- `ACT_PRIMARY_VM_DRYFIRE`
- `815`
- `ACT_PRIMARY_VM_IDLE_TO_LOWERED`
- `816`
- `ACT_PRIMARY_VM_IDLE_LOWERED`
- `817`
- `ACT_PRIMARY_VM_LOWERED_TO_IDLE`
- `818`
- `ACT_SECONDARY_VM_DRAW`
- `819`
- `ACT_SECONDARY_VM_HOLSTER`
- `820`
- `ACT_SECONDARY_VM_IDLE`
- `821`
- `ACT_SECONDARY_VM_PULLBACK`
- `822`
- `ACT_SECONDARY_VM_PRIMARYATTACK`
- `823`
- `ACT_SECONDARY_VM_SECONDARYATTACK`
- `824`
- `ACT_SECONDARY_VM_RELOAD`
- `825`
- `ACT_SECONDARY_VM_DRYFIRE`
- `826`
- `ACT_SECONDARY_VM_IDLE_TO_LOWERED`
- `827`
- `ACT_SECONDARY_VM_IDLE_LOWERED`
- `828`
- `ACT_SECONDARY_VM_LOWERED_TO_IDLE`
- `829`
- `ACT_MELEE_VM_DRAW`
- `830`
- `ACT_MELEE_VM_HOLSTER`
- `831`
- `ACT_MELEE_VM_IDLE`
- `832`
- `ACT_MELEE_VM_PULLBACK`
- `833`
- `ACT_MELEE_VM_PRIMARYATTACK`
- `834`
- `ACT_MELEE_VM_SECONDARYATTACK`
- `835`
- `ACT_MELEE_VM_RELOAD`
- `836`
- `ACT_MELEE_VM_DRYFIRE`
- `837`
- `ACT_MELEE_VM_IDLE_TO_LOWERED`
- `838`
- `ACT_MELEE_VM_IDLE_LOWERED`
- `839`
- `ACT_MELEE_VM_LOWERED_TO_IDLE`
- `840`
- `ACT_PDA_VM_DRAW`
- `841`
- `ACT_PDA_VM_HOLSTER`
- `842`
- `ACT_PDA_VM_IDLE`
- `843`
- `ACT_PDA_VM_PULLBACK`
- `844`
- `ACT_PDA_VM_PRIMARYATTACK`
- `845`
- `ACT_PDA_VM_SECONDARYATTACK`
- `846`
- `ACT_PDA_VM_RELOAD`
- `847`
- `ACT_PDA_VM_DRYFIRE`
- `848`
- `ACT_PDA_VM_IDLE_TO_LOWERED`
- `849`
- `ACT_PDA_VM_IDLE_LOWERED`
- `850`
- `ACT_PDA_VM_LOWERED_TO_IDLE`
- `851`
- `ACT_ITEM1_VM_DRAW`
- `852`
- `ACT_ITEM1_VM_HOLSTER`
- `853`
- `ACT_ITEM1_VM_IDLE`
- `854`
- `ACT_ITEM1_VM_PULLBACK`
- `855`
- `ACT_ITEM1_VM_PRIMARYATTACK`
- `856`
- `ACT_ITEM1_VM_SECONDARYATTACK`
- `857`
- `ACT_ITEM1_VM_RELOAD`
- `858`
- `ACT_ITEM1_VM_DRYFIRE`
- `859`
- `ACT_ITEM1_VM_IDLE_TO_LOWERED`
- `860`
- `ACT_ITEM1_VM_IDLE_LOWERED`
- `861`
- `ACT_ITEM1_VM_LOWERED_TO_IDLE`
- `862`
- `ACT_ITEM2_VM_DRAW`
- `863`
- `ACT_ITEM2_VM_HOLSTER`
- `864`
- `ACT_ITEM2_VM_IDLE`
- `865`
- `ACT_ITEM2_VM_PULLBACK`
- `866`
- `ACT_ITEM2_VM_PRIMARYATTACK`
- `867`
- `ACT_ITEM2_VM_SECONDARYATTACK`
- `868`
- `ACT_ITEM2_VM_RELOAD`
- `869`
- `ACT_ITEM2_VM_DRYFIRE`
- `870`
- `ACT_ITEM2_VM_IDLE_TO_LOWERED`
- `871`
- `ACT_ITEM2_VM_IDLE_LOWERED`
- `872`
- `ACT_ITEM2_VM_LOWERED_TO_IDLE`
- `873`
- `ACT_RELOAD_SUCCEED`
- `874`
- `ACT_RELOAD_FAIL`
- `875`
- `ACT_WALK_AIM_AUTOGUN`
- `876`
- `ACT_RUN_AIM_AUTOGUN`
- `877`
- `ACT_IDLE_AUTOGUN`
- `878`
- `ACT_IDLE_AIM_AUTOGUN`
- `879`
- `ACT_RELOAD_AUTOGUN`
- `880`
- `ACT_CROUCH_IDLE_AUTOGUN`
- `881`
- `ACT_RANGE_ATTACK_AUTOGUN`
- `882`
- `ACT_JUMP_AUTOGUN`
- `883`
- `ACT_IDLE_AIM_PISTOL`
- `884`
- `ACT_WALK_AIM_DUAL`
- `885`
- `ACT_RUN_AIM_DUAL`
- `886`
- `ACT_IDLE_DUAL`
- `887`
- `ACT_IDLE_AIM_DUAL`
- `888`
- `ACT_RELOAD_DUAL`
- `889`
- `ACT_CROUCH_IDLE_DUAL`
- `890`
- `ACT_RANGE_ATTACK_DUAL`
- `891`
- `ACT_JUMP_DUAL`
- `892`
- `ACT_IDLE_AIM_SHOTGUN`
- `893`
- `ACT_CROUCH_IDLE_SHOTGUN`
- `894`
- `ACT_IDLE_AIM_RIFLE`
- `895`
- `ACT_CROUCH_IDLE_RIFLE`
- `896`
- `ACT_RANGE_ATTACK_RIFLE`
- `897`
- `ACT_SLEEP`
- `898`
- `ACT_WAKE`
- `899`
- `ACT_FLICK_LEFT`
- `900`
- `ACT_FLICK_LEFT_MIDDLE`
- `901`
- `ACT_FLICK_RIGHT_MIDDLE`
- `902`
- `ACT_FLICK_RIGHT`
- `903`
- `ACT_SPINAROUND`
- `904`
- `ACT_PREP_TO_FIRE`
- `905`
- `ACT_FIRE`
- `906`
- `ACT_FIRE_RECOVER`
- `907`
- `ACT_SPRAY`
- `908`
- `ACT_PREP_EXPLODE`
- `909`
- `ACT_EXPLODE`
- `910`
- `ACT_SCRIPT_CUSTOM_0`
- `911`
- `ACT_SCRIPT_CUSTOM_1`
- `912`
- `ACT_SCRIPT_CUSTOM_2`
- `913`
- `ACT_SCRIPT_CUSTOM_3`
- `914`
- `ACT_SCRIPT_CUSTOM_4`
- `915`
- `ACT_SCRIPT_CUSTOM_5`
- `916`
- `ACT_SCRIPT_CUSTOM_6`
- `917`
- `ACT_SCRIPT_CUSTOM_7`
- `918`
- `ACT_SCRIPT_CUSTOM_8`
- `919`
- `ACT_SCRIPT_CUSTOM_9`
- `920`
- `ACT_SCRIPT_CUSTOM_10`
- `921`
- `ACT_SCRIPT_CUSTOM_11`
- `922`
- `ACT_SCRIPT_CUSTOM_12`
- `923`
- `ACT_SCRIPT_CUSTOM_13`
- `924`
- `ACT_SCRIPT_CUSTOM_14`
- `925`
- `ACT_SCRIPT_CUSTOM_15`
- `926`
- `ACT_SCRIPT_CUSTOM_16`
- `927`
- `ACT_SCRIPT_CUSTOM_17`
- `928`
- `ACT_SCRIPT_CUSTOM_18`
- `929`
- `ACT_SCRIPT_CUSTOM_19`
- `930`
- `ACT_SCRIPT_CUSTOM_20`
- `931`
- `ACT_SCRIPT_CUSTOM_21`
- `932`
- `ACT_SCRIPT_CUSTOM_22`
- `933`
- `ACT_SCRIPT_CUSTOM_23`
- `934`
- `ACT_SCRIPT_CUSTOM_24`
- `935`
- `ACT_SCRIPT_CUSTOM_25`
- `936`
- `ACT_SCRIPT_CUSTOM_26`
- `937`
- `ACT_SCRIPT_CUSTOM_27`
- `938`
- `ACT_SCRIPT_CUSTOM_28`
- `939`
- `ACT_SCRIPT_CUSTOM_29`
- `940`
- `ACT_SCRIPT_CUSTOM_30`
- `941`
- `ACT_SCRIPT_CUSTOM_31`
- `942`
- `ACT_VR_PISTOL_LAST_SHOT`
- `943`
- `ACT_VR_PISTOL_SLIDE_RELEASE`
- `944`
- `ACT_VR_PISTOL_CLIP_OUT_CHAMBERED`
- `945`
- `ACT_VR_PISTOL_CLIP_OUT_SLIDE_BACK`
- `946`
- `ACT_VR_PISTOL_CLIP_IN_CHAMBERED`
- `947`
- `ACT_VR_PISTOL_CLIP_IN_SLIDE_BACK`
- `948`
- `ACT_VR_PISTOL_IDLE_SLIDE_BACK`
- `949`
- `ACT_VR_PISTOL_IDLE_SLIDE_BACK_CLIP_READY`
- `950`
- `ACT_RAGDOLL_RECOVERY_FRONT`
- `951`
- `ACT_RAGDOLL_RECOVERY_BACK`
- `952`
- `ACT_RAGDOLL_RECOVERY_LEFT`
- `953`
- `ACT_RAGDOLL_RECOVERY_RIGHT`
- `954`
- `ACT_GRABBITYGLOVES_GRAB`
- `955`
- `ACT_GRABBITYGLOVES_RELEASE`
- `956`
- `ACT_GRABBITYGLOVES_GRAB_IDLE`
- `957`
- `ACT_GRABBITYGLOVES_ACTIVE`
- `958`
- `ACT_GRABBITYGLOVES_ACTIVE_IDLE`
- `959`
- `ACT_GRABBITYGLOVES_DEACTIVATE`
- `960`
- `ACT_GRABBITYGLOVES_PULL`
- `961`
- `ACT_HEADCRAB_SMOKE_BOMB`
- `962`
- `ACT_HEADCRAB_SPIT`
- `963`
- `ACT_ZOMBIE_TRIP`
- `964`
- `ACT_ZOMBIE_LUNGE`
- `965`
- `ACT_NEUTRAL_REF_POSE`
- `966`
- `ACT_ANTLION_SCUTTLE_FORWARD`
- `967`
- `ACT_ANTLION_SCUTTLE_BACK`
- `968`
- `ACT_ANTLION_SCUTTLE_LEFT`
- `969`
- `ACT_ANTLION_SCUTTLE_RIGHT`
- `970`
- `ACT_VR_PISTOL_EMPTY_CLIP_IN_SLIDE_BACK`
- `971`
- `ACT_VR_SHOTGUN_IDLE`
- `972`
- `ACT_VR_SHOTGUN_OPEN_CHAMBER`
- `973`
- `ACT_VR_SHOTGUN_RELOAD_1`
- `974`
- `ACT_VR_SHOTGUN_RELOAD_2`
- `975`
- `ACT_VR_SHOTGUN_RELOAD_3`
- `976`
- `ACT_VR_SHOTGUN_CLOSE_CHAMBER`
- `977`
- `ACT_VR_SHOTGUN_TRIGGER_SQUEEZE`
- `978`
- `ACT_VR_SHOTGUN_SHOOT`
- `979`
- `ACT_VR_SHOTGUN_SLIDE_BACK`
- `980`
- `ACT_VR_SHOTGUN_SLIDE_FORWARD`
- `981`
- `ACT_VR_PISTOL_LONG_CLIP_IN_CHAMBERED`
- `982`
- `ACT_VR_PISTOL_LONG_CLIP_IN_SLIDE_BACK`
- `983`
- `ACT_VR_PISTOL_BURST_TOGGLE`
- `984`
- `ACT_VR_PISTOL_LOW_KICK`
- `985`
- `ACT_VR_PISTOL_BURST_ATTACK`
- `986`
- `ACT_VR_SHOTGUN_GRENADE_TWIST`
- `987`
- `ACT_DIE_STAND`
- `988`
- `ACT_DIE_STAND_HEADSHOT`
- `989`
- `ACT_DIE_CROUCH`
- `990`
- `ACT_DIE_CROUCH_HEADSHOT`
- `991`
- `ACT_CSGO_NULL`
- `992`
- `ACT_CSGO_DEFUSE`
- `993`
- `ACT_CSGO_DEFUSE_WITH_KIT`
- `994`
- `ACT_CSGO_FLASHBANG_REACTION`
- `995`
- `ACT_CSGO_FIRE_PRIMARY`
- `996`
- `ACT_CSGO_FIRE_PRIMARY_OPT_1`
- `997`
- `ACT_CSGO_FIRE_PRIMARY_OPT_2`
- `998`
- `ACT_CSGO_FIRE_SECONDARY`
- `999`
- `ACT_CSGO_FIRE_SECONDARY_OPT_1`
- `1000`
- `ACT_CSGO_FIRE_SECONDARY_OPT_2`
- `1001`
- `ACT_CSGO_RELOAD`
- `1002`
- `ACT_CSGO_RELOAD_START`
- `1003`
- `ACT_CSGO_RELOAD_LOOP`
- `1004`
- `ACT_CSGO_RELOAD_END`
- `1005`
- `ACT_CSGO_OPERATE`
- `1006`
- `ACT_CSGO_DEPLOY`
- `1007`
- `ACT_CSGO_CATCH`
- `1008`
- `ACT_CSGO_SILENCER_DETACH`
- `1009`
- `ACT_CSGO_SILENCER_ATTACH`
- `1010`
- `ACT_CSGO_TWITCH`
- `1011`
- `ACT_CSGO_TWITCH_BUYZONE`
- `1012`
- `ACT_CSGO_PLANT_BOMB`
- `1013`
- `ACT_CSGO_IDLE_TURN_BALANCEADJUST`
- `1014`
- `ACT_CSGO_IDLE_ADJUST_STOPPEDMOVING`
- `1015`
- `ACT_CSGO_ALIVE_LOOP`
- `1016`
- `ACT_CSGO_FLINCH`
- `1017`
- `ACT_CSGO_FLINCH_HEAD`
- `1018`
- `ACT_CSGO_FLINCH_MOLOTOV`
- `1019`
- `ACT_CSGO_JUMP`
- `1020`
- `ACT_CSGO_FALL`
- `1021`
- `ACT_CSGO_CLIMB_LADDER`
- `1022`
- `ACT_CSGO_LAND_LIGHT`
- `1023`
- `ACT_CSGO_LAND_HEAVY`
- `1024`
- `ACT_CSGO_EXIT_LADDER_TOP`
- `1025`
- `ACT_CSGO_EXIT_LADDER_BOTTOM`
- `1026`
- `ACT_CSGO_PARACHUTE`
- `1027`
- `ACT_CSGO_TAUNT`
- `1028`
- `ACT_DOTA_IDLE`
- `1500`
- `ACT_DOTA_IDLE_RARE`
- `1501`
- `ACT_DOTA_RUN`
- `1502`
- `ACT_DOTA_ATTACK`
- `1503`
- `ACT_DOTA_ATTACK2`
- `1504`
- `ACT_DOTA_ATTACK_EVENT`
- `1505`
- `ACT_DOTA_DIE`
- `1506`
- `ACT_DOTA_FLINCH`
- `1507`
- `ACT_DOTA_FLAIL`
- `1508`
- `ACT_DOTA_DISABLED`
- `1509`
- `ACT_DOTA_CAST_ABILITY_1`
- `1510`
- `ACT_DOTA_CAST_ABILITY_2`
- `1511`
- `ACT_DOTA_CAST_ABILITY_3`
- `1512`
- `ACT_DOTA_CAST_ABILITY_4`
- `1513`
- `ACT_DOTA_CAST_ABILITY_5`
- `1514`
- `ACT_DOTA_CAST_ABILITY_6`
- `1515`
- `ACT_DOTA_OVERRIDE_ABILITY_1`
- `1516`
- `ACT_DOTA_OVERRIDE_ABILITY_2`
- `1517`
- `ACT_DOTA_OVERRIDE_ABILITY_3`
- `1518`
- `ACT_DOTA_OVERRIDE_ABILITY_4`
- `1519`
- `ACT_DOTA_CHANNEL_ABILITY_1`
- `1520`
- `ACT_DOTA_CHANNEL_ABILITY_2`
- `1521`
- `ACT_DOTA_CHANNEL_ABILITY_3`
- `1522`
- `ACT_DOTA_CHANNEL_ABILITY_4`
- `1523`
- `ACT_DOTA_CHANNEL_ABILITY_5`
- `1524`
- `ACT_DOTA_CHANNEL_ABILITY_6`
- `1525`
- `ACT_DOTA_CHANNEL_END_ABILITY_1`
- `1526`
- `ACT_DOTA_CHANNEL_END_ABILITY_2`
- `1527`
- `ACT_DOTA_CHANNEL_END_ABILITY_3`
- `1528`
- `ACT_DOTA_CHANNEL_END_ABILITY_4`
- `1529`
- `ACT_DOTA_CHANNEL_END_ABILITY_5`
- `1530`
- `ACT_DOTA_CHANNEL_END_ABILITY_6`
- `1531`
- `ACT_DOTA_CONSTANT_LAYER`
- `1532`
- `ACT_DOTA_CAPTURE`
- `1533`
- `ACT_DOTA_SPAWN`
- `1534`
- `ACT_DOTA_KILLTAUNT`
- `1535`
- `ACT_DOTA_TAUNT`
- `1536`
- `ACT_DOTA_THIRST`
- `1537`
- `ACT_DOTA_CAST_DRAGONBREATH`
- `1538`
- `ACT_DOTA_ECHO_SLAM`
- `1539`
- `ACT_DOTA_CAST_ABILITY_1_END`
- `1540`
- `ACT_DOTA_CAST_ABILITY_2_END`
- `1541`
- `ACT_DOTA_CAST_ABILITY_3_END`
- `1542`
- `ACT_DOTA_CAST_ABILITY_4_END`
- `1543`
- `ACT_MIRANA_LEAP_END`
- `1544`
- `ACT_WAVEFORM_START`
- `1545`
- `ACT_WAVEFORM_END`
- `1546`
- `ACT_DOTA_CAST_ABILITY_ROT`
- `1547`
- `ACT_DOTA_DIE_SPECIAL`
- `1548`
- `ACT_DOTA_RATTLETRAP_BATTERYASSAULT`
- `1549`
- `ACT_DOTA_RATTLETRAP_POWERCOGS`
- `1550`
- `ACT_DOTA_RATTLETRAP_HOOKSHOT_START`
- `1551`
- `ACT_DOTA_RATTLETRAP_HOOKSHOT_LOOP`
- `1552`
- `ACT_DOTA_RATTLETRAP_HOOKSHOT_END`
- `1553`
- `ACT_STORM_SPIRIT_OVERLOAD_RUN_OVERRIDE`
- `1554`
- `ACT_DOTA_TINKER_REARM1`
- `1555`
- `ACT_DOTA_TINKER_REARM2`
- `1556`
- `ACT_DOTA_TINKER_REARM3`
- `1557`
- `ACT_TINY_AVALANCHE`
- `1558`
- `ACT_TINY_TOSS`
- `1559`
- `ACT_TINY_GROWL`
- `1560`
- `ACT_DOTA_WEAVERBUG_ATTACH`
- `1561`
- `ACT_DOTA_CAST_WILD_AXES_END`
- `1562`
- `ACT_DOTA_CAST_LIFE_BREAK_START`
- `1563`
- `ACT_DOTA_CAST_LIFE_BREAK_END`
- `1564`
- `ACT_DOTA_NIGHTSTALKER_TRANSITION`
- `1565`
- `ACT_DOTA_LIFESTEALER_RAGE`
- `1566`
- `ACT_DOTA_LIFESTEALER_OPEN_WOUNDS`
- `1567`
- `ACT_DOTA_SAND_KING_BURROW_IN`
- `1568`
- `ACT_DOTA_SAND_KING_BURROW_OUT`
- `1569`
- `ACT_DOTA_EARTHSHAKER_TOTEM_ATTACK`
- `1570`
- `ACT_DOTA_WHEEL_LAYER`
- `1571`
- `ACT_DOTA_ALCHEMIST_CHEMICAL_RAGE_START`
- `1572`
- `ACT_DOTA_ALCHEMIST_CONCOCTION`
- `1573`
- `ACT_DOTA_JAKIRO_LIQUIDFIRE_START`
- `1574`
- `ACT_DOTA_JAKIRO_LIQUIDFIRE_LOOP`
- `1575`
- `ACT_DOTA_LIFESTEALER_INFEST`
- `1576`
- `ACT_DOTA_LIFESTEALER_INFEST_END`
- `1577`
- `ACT_DOTA_LASSO_LOOP`
- `1578`
- `ACT_DOTA_ALCHEMIST_CONCOCTION_THROW`
- `1579`
- `ACT_DOTA_ALCHEMIST_CHEMICAL_RAGE_END`
- `1580`
- `ACT_DOTA_CAST_COLD_SNAP`
- `1581`
- `ACT_DOTA_CAST_GHOST_WALK`
- `1582`
- `ACT_DOTA_CAST_TORNADO`
- `1583`
- `ACT_DOTA_CAST_EMP`
- `1584`
- `ACT_DOTA_CAST_ALACRITY`
- `1585`
- `ACT_DOTA_CAST_CHAOS_METEOR`
- `1586`
- `ACT_DOTA_CAST_SUN_STRIKE`
- `1587`
- `ACT_DOTA_CAST_FORGE_SPIRIT`
- `1588`
- `ACT_DOTA_CAST_ICE_WALL`
- `1589`
- `ACT_DOTA_CAST_DEAFENING_BLAST`
- `1590`
- `ACT_DOTA_VICTORY`
- `1591`
- `ACT_DOTA_DEFEAT`
- `1592`
- `ACT_DOTA_SPIRIT_BREAKER_CHARGE_POSE`
- `1593`
- `ACT_DOTA_SPIRIT_BREAKER_CHARGE_END`
- `1594`
- `ACT_DOTA_TELEPORT`
- `1595`
- `ACT_DOTA_TELEPORT_END`
- `1596`
- `ACT_DOTA_CAST_REFRACTION`
- `1597`
- `ACT_DOTA_CAST_ABILITY_7`
- `1598`
- `ACT_DOTA_CANCEL_SIREN_SONG`
- `1599`
- `ACT_DOTA_CHANNEL_ABILITY_7`
- `1600`
- `ACT_DOTA_LOADOUT`
- `1601`
- `ACT_DOTA_FORCESTAFF_END`
- `1602`
- `ACT_DOTA_POOF_END`
- `1603`
- `ACT_DOTA_SLARK_POUNCE`
- `1604`
- `ACT_DOTA_MAGNUS_SKEWER_START`
- `1605`
- `ACT_DOTA_MAGNUS_SKEWER_END`
- `1606`
- `ACT_DOTA_MEDUSA_STONE_GAZE`
- `1607`
- `ACT_DOTA_RELAX_START`
- `1608`
- `ACT_DOTA_RELAX_LOOP`
- `1609`
- `ACT_DOTA_RELAX_END`
- `1610`
- `ACT_DOTA_CENTAUR_STAMPEDE`
- `1611`
- `ACT_DOTA_BELLYACHE_START`
- `1612`
- `ACT_DOTA_BELLYACHE_LOOP`
- `1613`
- `ACT_DOTA_BELLYACHE_END`
- `1614`
- `ACT_DOTA_ROQUELAIRE_LAND`
- `1615`
- `ACT_DOTA_ROQUELAIRE_LAND_IDLE`
- `1616`
- `ACT_DOTA_GREEVIL_CAST`
- `1617`
- `ACT_DOTA_GREEVIL_OVERRIDE_ABILITY`
- `1618`
- `ACT_DOTA_GREEVIL_HOOK_START`
- `1619`
- `ACT_DOTA_GREEVIL_HOOK_END`
- `1620`
- `ACT_DOTA_GREEVIL_BLINK_BONE`
- `1621`
- `ACT_DOTA_IDLE_SLEEPING`
- `1622`
- `ACT_DOTA_INTRO`
- `1623`
- `ACT_DOTA_GESTURE_POINT`
- `1624`
- `ACT_DOTA_GESTURE_ACCENT`
- `1625`
- `ACT_DOTA_SLEEPING_END`
- `1626`
- `ACT_DOTA_AMBUSH`
- `1627`
- `ACT_DOTA_ITEM_LOOK`
- `1628`
- `ACT_DOTA_STARTLE`
- `1629`
- `ACT_DOTA_FRUSTRATION`
- `1630`
- `ACT_DOTA_TELEPORT_REACT`
- `1631`
- `ACT_DOTA_TELEPORT_END_REACT`
- `1632`
- `ACT_DOTA_SHRUG`
- `1633`
- `ACT_DOTA_RELAX_LOOP_END`
- `1634`
- `ACT_DOTA_PRESENT_ITEM`
- `1635`
- `ACT_DOTA_IDLE_IMPATIENT`
- `1636`
- `ACT_DOTA_SHARPEN_WEAPON`
- `1637`
- `ACT_DOTA_SHARPEN_WEAPON_OUT`
- `1638`
- `ACT_DOTA_IDLE_SLEEPING_END`
- `1639`
- `ACT_DOTA_BRIDGE_DESTROY`
- `1640`
- `ACT_DOTA_TAUNT_SNIPER`
- `1641`
- `ACT_DOTA_DEATH_BY_SNIPER`
- `1642`
- `ACT_DOTA_LOOK_AROUND`
- `1643`
- `ACT_DOTA_CAGED_CREEP_RAGE`
- `1644`
- `ACT_DOTA_CAGED_CREEP_RAGE_OUT`
- `1645`
- `ACT_DOTA_CAGED_CREEP_SMASH`
- `1646`
- `ACT_DOTA_CAGED_CREEP_SMASH_OUT`
- `1647`
- `ACT_DOTA_IDLE_IMPATIENT_SWORD_TAP`
- `1648`
- `ACT_DOTA_INTRO_LOOP`
- `1649`
- `ACT_DOTA_BRIDGE_THREAT`
- `1650`
- `ACT_DOTA_DAGON`
- `1651`
- `ACT_DOTA_CAST_ABILITY_2_ES_ROLL_START`
- `1652`
- `ACT_DOTA_CAST_ABILITY_2_ES_ROLL`
- `1653`
- `ACT_DOTA_CAST_ABILITY_2_ES_ROLL_END`
- `1654`
- `ACT_DOTA_NIAN_PIN_START`
- `1655`
- `ACT_DOTA_NIAN_PIN_LOOP`
- `1656`
- `ACT_DOTA_NIAN_PIN_END`
- `1657`
- `ACT_DOTA_LEAP_STUN`
- `1658`
- `ACT_DOTA_LEAP_SWIPE`
- `1659`
- `ACT_DOTA_NIAN_INTRO_LEAP`
- `1660`
- `ACT_DOTA_AREA_DENY`
- `1661`
- `ACT_DOTA_NIAN_PIN_TO_STUN`
- `1662`
- `ACT_DOTA_RAZE_1`
- `1663`
- `ACT_DOTA_RAZE_2`
- `1664`
- `ACT_DOTA_RAZE_3`
- `1665`
- `ACT_DOTA_UNDYING_DECAY`
- `1666`
- `ACT_DOTA_UNDYING_SOUL_RIP`
- `1667`
- `ACT_DOTA_UNDYING_TOMBSTONE`
- `1668`
- `ACT_DOTA_WHIRLING_AXES_RANGED`
- `1669`
- `ACT_DOTA_SHALLOW_GRAVE`
- `1670`
- `ACT_DOTA_COLD_FEET`
- `1671`
- `ACT_DOTA_ICE_VORTEX`
- `1672`
- `ACT_DOTA_CHILLING_TOUCH`
- `1673`
- `ACT_DOTA_ENFEEBLE`
- `1674`
- `ACT_DOTA_FATAL_BONDS`
- `1675`
- `ACT_DOTA_MIDNIGHT_PULSE`
- `1676`
- `ACT_DOTA_ANCESTRAL_SPIRIT`
- `1677`
- `ACT_DOTA_THUNDER_STRIKE`
- `1678`
- `ACT_DOTA_KINETIC_FIELD`
- `1679`
- `ACT_DOTA_STATIC_STORM`
- `1680`
- `ACT_DOTA_MINI_TAUNT`
- `1681`
- `ACT_DOTA_ARCTIC_BURN_END`
- `1682`
- `ACT_DOTA_LOADOUT_RARE`
- `1683`
- `ACT_DOTA_SWIM`
- `1684`
- `ACT_DOTA_FLEE`
- `1685`
- `ACT_DOTA_TROT`
- `1686`
- `ACT_DOTA_SHAKE`
- `1687`
- `ACT_DOTA_SWIM_IDLE`
- `1688`
- `ACT_DOTA_WAIT_IDLE`
- `1689`
- `ACT_DOTA_GREET`
- `1690`
- `ACT_DOTA_TELEPORT_COOP_START`
- `1691`
- `ACT_DOTA_TELEPORT_COOP_WAIT`
- `1692`
- `ACT_DOTA_TELEPORT_COOP_END`
- `1693`
- `ACT_DOTA_TELEPORT_COOP_EXIT`
- `1694`
- `ACT_DOTA_SHOPKEEPER_PET_INTERACT`
- `1695`
- `ACT_DOTA_ITEM_PICKUP`
- `1696`
- `ACT_DOTA_ITEM_DROP`
- `1697`
- `ACT_DOTA_CAPTURE_PET`
- `1698`
- `ACT_DOTA_PET_WARD_OBSERVER`
- `1699`
- `ACT_DOTA_PET_WARD_SENTRY`
- `1700`
- `ACT_DOTA_PET_LEVEL`
- `1701`
- `ACT_DOTA_CAST_BURROW_END`
- `1702`
- `ACT_DOTA_LIFESTEALER_ASSIMILATE`
- `1703`
- `ACT_DOTA_LIFESTEALER_EJECT`
- `1704`
- `ACT_DOTA_ATTACK_EVENT_BASH`
- `1705`
- `ACT_DOTA_CAPTURE_RARE`
- `1706`
- `ACT_DOTA_AW_MAGNETIC_FIELD`
- `1707`
- `ACT_DOTA_CAST_GHOST_SHIP`
- `1708`
- `ACT_DOTA_FXANIM`
- `1709`
- `ACT_DOTA_VICTORY_START`
- `1710`
- `ACT_DOTA_DEFEAT_START`
- `1711`
- `ACT_DOTA_DP_SPIRIT_SIPHON`
- `1712`
- `ACT_DOTA_TRICKS_END`
- `1713`
- `ACT_DOTA_ES_STONE_CALLER`
- `1714`
- `ACT_DOTA_MK_STRIKE`
- `1715`
- `ACT_DOTA_VERSUS`
- `1716`
- `ACT_DOTA_CAPTURE_CARD`
- `1717`
- `ACT_DOTA_MK_SPRING_SOAR`
- `1718`
- `ACT_DOTA_MK_SPRING_END`
- `1719`
- `ACT_DOTA_MK_TREE_SOAR`
- `1720`
- `ACT_DOTA_MK_TREE_END`
- `1721`
- `ACT_DOTA_MK_FUR_ARMY`
- `1722`
- `ACT_DOTA_MK_SPRING_CAST`
- `1723`
- `ACT_DOTA_NECRO_GHOST_SHROUD`
- `1724`
- `ACT_DOTA_OVERRIDE_ARCANA`
- `1725`
- `ACT_DOTA_SLIDE`
- `1726`
- `ACT_DOTA_SLIDE_LOOP`
- `1727`
- `ACT_DOTA_GENERIC_CHANNEL_1`
- `1728`
- `ACT_DOTA_GS_SOUL_CHAIN`
- `1729`
- `ACT_DOTA_GS_INK_CREATURE`
- `1730`
- `ACT_DOTA_TRANSITION`
- `1731`
- `ACT_DOTA_BLINK_DAGGER`
- `1732`
- `ACT_DOTA_BLINK_DAGGER_END`
- `1733`
- `ACT_DOTA_CUSTOM_TOWER_ATTACK`
- `1734`
- `ACT_DOTA_CUSTOM_TOWER_IDLE`
- `1735`
- `ACT_DOTA_CUSTOM_TOWER_DIE`
- `1736`
- `ACT_DOTA_CAST_COLD_SNAP_ORB`
- `1737`
- `ACT_DOTA_CAST_GHOST_WALK_ORB`
- `1738`
- `ACT_DOTA_CAST_TORNADO_ORB`
- `1739`
- `ACT_DOTA_CAST_EMP_ORB`
- `1740`
- `ACT_DOTA_CAST_ALACRITY_ORB`
- `1741`
- `ACT_DOTA_CAST_CHAOS_METEOR_ORB`
- `1742`
- `ACT_DOTA_CAST_SUN_STRIKE_ORB`
- `1743`
- `ACT_DOTA_CAST_FORGE_SPIRIT_ORB`
- `1744`
- `ACT_DOTA_CAST_ICE_WALL_ORB`
- `1745`
- `ACT_DOTA_CAST_DEAFENING_BLAST_ORB`
- `1746`
- `ACT_DOTA_NOTICE`
- `1747`
- `ACT_DOTA_CAST_ABILITY_2_ALLY`
- `1748`
- `ACT_DOTA_SHUFFLE_L`
- `1749`
- `ACT_DOTA_SHUFFLE_R`
- `1750`
- `ACT_DOTA_OVERRIDE_LOADOUT`
- `1751`
- `ACT_DOTA_TAUNT_SPECIAL`
- `1752`
- `ACT_DOTA_TELEPORT_START`
- `1753`
- `ACT_DOTA_GENERIC_CHANNEL_1_START`
- `1754`
- `ACT_DOTA_CUSTOM_TOWER_IDLE_RARE`
- `1755`
- `ACT_DOTA_CUSTOM_TOWER_TAUNT`
- `1756`
- `ACT_DOTA_CUSTOM_TOWER_HIGH_FIVE`
- `1757`
- `ACT_DOTA_ATTACK_SPECIAL`
- `1758`
- `ACT_DOTA_TRANSITION_IDLE`
- `1759`
- `ACT_DOTA_PIERCE_THE_VEIL`
- `1760`
- `ACT_DOTA_RUN_RARE`
- `1761`
- `ACT_DOTA_VIPER_DIVE`
- `1762`
- `ACT_DOTA_VIPER_DIVE_END`
- `1763`
- `ACT_DOTA_MK_STRIKE_END`
- `1764`
- `ACT_DOTA_ARCANA_VOTE`
- `1766`
- `ACT_DOTA_SPIRIT_BREAKER_ULT_RUN`
- `1767`
- `ACT_DOTA_PUNCH`
- `1768`
- `ACT_DOTA_CAST_STATUE`
- `1769`
- `ACT_DOTA_ATTACK_STATUE`
- `1770`
- `ACT_DOTA_CAST3_STATUE`
- `1771`
- `ACT_DOTA_CAST1_STATUE`
- `1772`
- `ACT_DOTA_TELEPORT_STATUE`
- `1773`
- `ACT_DOTA_VICTORY_STATUE`
- `1774`
- `ACT_DOTA_TAUNT_STATUE`
- `1775`
- `ACT_DOTA_STATUE_SEQUENCE`
- `1776`
- `ACT_DOTA_RUN_STATUE`
- `1777`
- `ACT_DOTA_IDLE_STATUE`
- `1778`
- `ACT_DOTA_CAST4_STATUE`
- `1779`
- `ACT_DOTA_FLAIL_STATUE`
- `1780`
- `ACT_DOTA_STUN_STATUE`
- `1781`
- `ACT_DOTA_TELEPORT_END_STATUE`
- `1782`
- `ACT_DOTA_DISABLED_END`
- `1784`
- `ACT_DOTA_RELAX_IN`
- `1785`
- `ACT_DOTA_RELAX_OUT`
- `1786`
- `ACT_DOTA_CAST_FENCE`
- `1787`
- `ACT_DOTA_RADIANT_CREEP_HAMMER`
- `1789`
- `ACT_DOTA_SPWN`
- `1790`
- `ACT_DOTA_RUN_ALT`
- `1791`
- `ACT_DOTA_VOODOO_REST`
- `1792`
- `ACT_DOTA_CYCLONE`
- `1793`
- `ACT_DOTA_IMPALE`
- `1794`

## GameState Enum

- Kind: `enum`
- Path: `/en/guide/enum/GameState`
- URL: https://docs.melonity.gg/en/guide/enum/GameState

### Members / Signatures (H3/H4)

- `Enum Values`

### Tables

#### Table 1

| Name | Value | Description |
| --- | --- | --- |
| INIT | 0 | Initial state before the game setup begins. |
| WAIT_FOR_PLAYERS_TO_LOAD | 1 | Waiting for players to load into the game. |
| HERO_SELECTION | 2 | The hero selection phase. |
| STRATEGY_TIME | 3 | The strategy time phase before the game starts. |
| PRE_GAME | 4 | The pre-game phase before the main game begins. |
| GAME_IN_PROGRESS | 5 | The main gameplay phase. |
| POST_GAME | 6 | The post-game phase after the match concludes. |
| DISCONNECT | 7 | A state indicating player disconnection. |
| TEAM_SHOWCASE | 8 | Team showcase phase (e.g., during tournaments or events). |
| CUSTOM_GAME_SETUP | 9 | Setup phase for a custom game. |
| WAIT_FOR_MAP_TO_LOAD | 10 | Waiting for the game map to load. |
| SCENARIO_SETUP | 11 | Scenario setup phase for specific game scenarios. |
| PLAYER_DRAFT | 12 | Player draft phase for team compositions. |
| LAST | 13 | Indicates the last valid state in the enumeration (used as a boundary). |

### Paragraphs

- The GameState enum defines the various states that the game can transition through during its lifecycle.

### Inline Code Tokens

- `GameState`
- `INIT`
- `0`
- `WAIT_FOR_PLAYERS_TO_LOAD`
- `1`
- `HERO_SELECTION`
- `2`
- `STRATEGY_TIME`
- `3`
- `PRE_GAME`
- `4`
- `GAME_IN_PROGRESS`
- `5`
- `POST_GAME`
- `6`
- `DISCONNECT`
- `7`
- `TEAM_SHOWCASE`
- `8`
- `CUSTOM_GAME_SETUP`
- `9`
- `WAIT_FOR_MAP_TO_LOAD`
- `10`
- `SCENARIO_SETUP`
- `11`
- `PLAYER_DRAFT`
- `12`
- `LAST`
- `13`

## GCResponseStatus Enum

- Kind: `enum`
- Path: `/en/guide/enum/GCResponseStatus`
- URL: https://docs.melonity.gg/en/guide/enum/GCResponseStatus

### Members / Signatures (H3/H4)

- `Enum Values`

### Tables

#### Table 1

| Name | Value | Description |
| --- | --- | --- |
| Ok | 0 | The request was successful. |
| Timeout | 1 | The request timed out. |
| ParseFailed | 2 | The response could not be parsed. |

### Paragraphs

- The GCResponseStatus enum represents the status of a response from the Game Coordinator (GC). Each value indicates a specific outcome of a GC request.

### Inline Code Tokens

- `GCResponseStatus`
- `Ok`
- `0`
- `Timeout`
- `1`
- `ParseFailed`
- `2`

## GridNavCellFlags Enum

- Kind: `enum`
- Path: `/en/guide/enum/GridNavCellFlags`
- URL: https://docs.melonity.gg/en/guide/enum/GridNavCellFlags

### Members / Signatures (H3/H4)

- `Enum Values`

### Tables

#### Table 1

| Name | Value | Description |
| --- | --- | --- |
| Walkable | 1 | The cell can be walked on by units. |
| Tree | 2 | The cell contains a tree. |
| MovementBlocker | 4 | The cell contains an obstacle that blocks movement. |
| InteractionBlocker | 16 | The cell blocks interactions, such as targeting or abilities. |
| GridFlagObstacle | 128 | The cell contains a significant obstacle in the game world. |

### Paragraphs

- The GridNavCellFlags enum defines the properties and states of navigation grid cells.

### Inline Code Tokens

- `GridNavCellFlags`
- `Walkable`
- `1`
- `Tree`
- `2`
- `MovementBlocker`
- `4`
- `InteractionBlocker`
- `16`
- `GridFlagObstacle`
- `128`

## ImmunityTypes Enum

- Kind: `enum`
- Path: `/en/guide/enum/ImmunityTypes`
- URL: https://docs.melonity.gg/en/guide/enum/ImmunityTypes

### Members / Signatures (H3/H4)

- `Enum Values`

### Tables

#### Table 1

| Name | Value | Description |
| --- | --- | --- |
| SPELL_IMMUNITY_NONE | 0 | No interaction with spell immunity. |
| SPELL_IMMUNITY_ALLIES_YES | 1 | Affects spell-immune allies. |
| SPELL_IMMUNITY_ALLIES_NO | 2 | Does not affect spell-immune allies. |
| SPELL_IMMUNITY_ENEMIES_YES | 3 | Affects spell-immune enemies. |
| SPELL_IMMUNITY_ENEMIES_NO | 4 | Does not affect spell-immune enemies. |

### Paragraphs

- The ImmunityTypes enum defines the interaction of abilities with spell immunity, specifying whether an ability affects allies or enemies with spell immunity.

### Inline Code Tokens

- `ImmunityTypes`
- `SPELL_IMMUNITY_NONE`
- `0`
- `SPELL_IMMUNITY_ALLIES_YES`
- `1`
- `SPELL_IMMUNITY_ALLIES_NO`
- `2`
- `SPELL_IMMUNITY_ENEMIES_YES`
- `3`
- `SPELL_IMMUNITY_ENEMIES_NO`
- `4`

## KeyEvent Enum

- Kind: `enum`
- Path: `/en/guide/enum/KeyEvent`
- URL: https://docs.melonity.gg/en/guide/enum/KeyEvent

### Members / Signatures (H3/H4)

- `Enum Values`

### Tables

#### Table 1

| Name | Value | Description |
| --- | --- | --- |
| SCROLL_DOWN | 0 | Triggered when the mouse wheel scrolls downward. |
| SCROLL_UP | 1 | Triggered when the mouse wheel scrolls upward. |
| KEY_DOWN | 2 | Triggered when a key is pressed down. |
| KEY_UP | 3 | Triggered when a key is released. |

### Paragraphs

- The KeyEvent enum defines the types of key and scroll events that can be captured and processed.

### Inline Code Tokens

- `KeyEvent`
- `SCROLL_DOWN`
- `0`
- `SCROLL_UP`
- `1`
- `KEY_DOWN`
- `2`
- `KEY_UP`
- `3`

## LaneSelectionFlags Enum

- Kind: `enum`
- Path: `/en/guide/enum/LaneSelectionFlags`
- URL: https://docs.melonity.gg/en/guide/enum/LaneSelectionFlags

### Members / Signatures (H3/H4)

- `Enum Values`

### Tables

#### Table 1

| Name | Value | Description |
| --- | --- | --- |
| SafeLane | 1 | Represents the safe lane. |
| OffLane | 2 | Represents the offlane. |
| MidLane | 4 | Represents the mid lane. |
| SoftSupport | 8 | Represents the soft support role. |
| HardSupport | 16 | Represents the hard support role. |

### Paragraphs

- The LaneSelectionFlags enum represents flags used for selecting specific roles in the game. Each flag is associated with a unique value and can be combined using bitwise operations for flexible configurations.

### Inline Code Tokens

- `LaneSelectionFlags`
- `SafeLane`
- `1`
- `OffLane`
- `2`
- `MidLane`
- `4`
- `SoftSupport`
- `8`
- `HardSupport`
- `16`

## MatchGroup Enum

- Kind: `enum`
- Path: `/en/guide/enum/MatchGroup`
- URL: https://docs.melonity.gg/en/guide/enum/MatchGroup

### Members / Signatures (H3/H4)

- `Enum Values`

### Tables

#### Table 1

| Name | Value | Description |
| --- | --- | --- |
| Auto | 0 | Automatically select a match group. |
| WestUS | 1 | Match group for Western US. |
| EastUS | 2 | Match group for Eastern US. |
| WestEurope | 4 | Match group for Western Europe. |
| SouthWestAsia | 8 | Match group for Southwest Asia. |
| UNK1 | 16 | Unknown match group (UNK1). |
| Brasil | 32 | Match group for Brazil. |
| Argentina | 64 | Match group for Argentina. |
| Russia | 128 | Match group for Russia. |
| EastEurope | 256 | Match group for Eastern Europe. |
| Australia | 512 | Match group for Australia. |
| SouthAfrica | 1024 | Match group for South Africa. |
| ChinaTCShanghai | 2048 | Match group for Shanghai, China (TC). |
| ChinaUC | 4096 | Match group for China (UC). |
| Dubai | 8192 | Match group for Dubai. |
| Chile | 16384 | Match group for Chile. |
| Peru | 32768 | Match group for Peru. |
| India | 65536 | Match group for India. |
| ChinaTCGuangdong | 131072 | Match group for Guangdong, China (TC). |
| ChinaTCZhejiang | 262144 | Match group for Zhejiang, China (TC). |
| Japan | 524288 | Match group for Japan. |
| ChinaTCWuhan | 1048576 | Match group for Wuhan, China (TC). |
| ChinaUC2 | 33554432 | Match group for China (UC2). |

### Paragraphs

- The MatchGroup enum represents various regional match groups in the game. Each region is associated with a unique value, which can be used to identify or select specific regions for matchmaking purposes.

### Inline Code Tokens

- `MatchGroup`
- `Auto`
- `0`
- `WestUS`
- `1`
- `EastUS`
- `2`
- `WestEurope`
- `4`
- `SouthWestAsia`
- `8`
- `UNK1`
- `16`
- `Brasil`
- `32`
- `Argentina`
- `64`
- `Russia`
- `128`
- `EastEurope`
- `256`
- `Australia`
- `512`
- `SouthAfrica`
- `1024`
- `ChinaTCShanghai`
- `2048`
- `ChinaUC`
- `4096`
- `Dubai`
- `8192`
- `Chile`
- `16384`
- `Peru`
- `32768`
- `India`
- `65536`
- `ChinaTCGuangdong`
- `131072`
- `ChinaTCZhejiang`
- `262144`
- `Japan`
- `524288`
- `ChinaTCWuhan`
- `1048576`
- `ChinaUC2`
- `33554432`

## MatchType Enum

- Kind: `enum`
- Path: `/en/guide/enum/MatchType`
- URL: https://docs.melonity.gg/en/guide/enum/MatchType

### Members / Signatures (H3/H4)

- `Enum Values`

### Tables

#### Table 1

| Name | Value | Description |
| --- | --- | --- |
| MATCH_TYPE_CASUAL | 0 | Standard casual match. |
| MATCH_TYPE_COOP_BOTS | 1 | Cooperative match against bots. |
| MATCH_TYPE_LEGACY_TEAM_RANKED | 2 | Legacy team-based ranked match. |
| MATCH_TYPE_LEGACY_SOLO_QUEUE | 3 | Legacy solo queue ranked match. |
| MATCH_TYPE_COMPETITIVE | 4 | Competitive ranked match. |
| MATCH_TYPE_WEEKEND_TOURNEY | 5 | Weekend tournament match. |
| MATCH_TYPE_CASUAL_1V1 | 6 | Casual 1v1 match. |
| MATCH_TYPE_EVENT | 7 | Event-based match. |
| MATCH_TYPE_SEASONAL_RANKED | 8 | Seasonal ranked match. |
| MATCH_TYPE_LOWPRI_DEPRECATED | 9 | Low-priority match (deprecated). |
| MATCH_TYPE_STEAM_GROUP | 10 | Steam group-based match. |
| MATCH_TYPE_MUTATION | 11 | Mutation mode match. |
| MATCH_TYPE_COACHES_CHALLENGE | 12 | Coaches' challenge match. |
| MATCH_TYPE_GAUNTLET | 13 | Gauntlet mode match. |
| MATCH_TYPE_NEW_PLAYER_POOL | 14 | Match specifically for new players. |

### Paragraphs

- The MatchType enum represents various types of matches available in the game. Each value corresponds to a specific match type.

### Inline Code Tokens

- `MatchType`
- `MATCH_TYPE_CASUAL`
- `0`
- `MATCH_TYPE_COOP_BOTS`
- `1`
- `MATCH_TYPE_LEGACY_TEAM_RANKED`
- `2`
- `MATCH_TYPE_LEGACY_SOLO_QUEUE`
- `3`
- `MATCH_TYPE_COMPETITIVE`
- `4`
- `MATCH_TYPE_WEEKEND_TOURNEY`
- `5`
- `MATCH_TYPE_CASUAL_1V1`
- `6`
- `MATCH_TYPE_EVENT`
- `7`
- `MATCH_TYPE_SEASONAL_RANKED`
- `8`
- `MATCH_TYPE_LOWPRI_DEPRECATED`
- `9`
- `MATCH_TYPE_STEAM_GROUP`
- `10`
- `MATCH_TYPE_MUTATION`
- `11`
- `MATCH_TYPE_COACHES_CHALLENGE`
- `12`
- `MATCH_TYPE_GAUNTLET`
- `13`
- `MATCH_TYPE_NEW_PLAYER_POOL`
- `14`

## MenuOptionType Enum

- Kind: `enum`
- Path: `/en/guide/enum/MenuOptionType`
- URL: https://docs.melonity.gg/en/guide/enum/MenuOptionType

### Members / Signatures (H3/H4)

- `Enum Values`

### Tables

#### Table 1

| Name | Value | Description |
| --- | --- | --- |
| None | 0 | Represents no specific menu option. |
| Folder | 1 | A folder menu option, used to group other options. |
| Toggle | 2 | A toggle menu option, typically used for enabling or disabling a feature. |
| ToggleBlock | 3 | A block-based toggle menu option. |
| Slider | 4 | A slider menu option, used to adjust a value within a range. |
| MultiSelect | 5 | A multi-select menu option, allowing selection of multiple items. |
| ComboBox | 6 | A combo box menu option for selecting a single option from a dropdown. |
| ColorPicker | 7 | A color picker menu option, used for selecting a color. |
| KeyBind | 8 | A key binding menu option, used to assign a key to a specific action. |
| Button | 9 | A button menu option, typically used for triggering an action. |
| InputBox | 10 | An input box menu option, used to capture user text input. |
| PrioritySelect | 11 | A priority selection menu option, used to rank or prioritize items. |
| MultiComboBox | 12 | A multi-combo box menu option, allowing selection of multiple dropdown items. |
| Label | 13 | A label menu option. |
| HeroSelect | 14 | A hero selection menu option. |

### Paragraphs

- The MenuOptionType enum defines the various types of menu options available for user interaction or configuration.

### Inline Code Tokens

- `MenuOptionType`
- `None`
- `0`
- `Folder`
- `1`
- `Toggle`
- `2`
- `ToggleBlock`
- `3`
- `Slider`
- `4`
- `MultiSelect`
- `5`
- `ComboBox`
- `6`
- `ColorPicker`
- `7`
- `KeyBind`
- `8`
- `Button`
- `9`
- `InputBox`
- `10`
- `PrioritySelect`
- `11`
- `MultiComboBox`
- `12`
- `Label`
- `13`
- `HeroSelect`
- `14`

## ModifierState Enum

- Kind: `enum`
- Path: `/en/guide/enum/ModifierState`
- URL: https://docs.melonity.gg/en/guide/enum/ModifierState

### Members / Signatures (H3/H4)

- `Enum Values`

### Tables

#### Table 1

| Name | Value | Description |
| --- | --- | --- |
| MODIFIER_STATE_ROOTED | 0 | The unit is rooted and cannot move. |
| MODIFIER_STATE_DISARMED | 1 | The unit is disarmed and cannot attack. |
| MODIFIER_STATE_ATTACK_IMMUNE | 2 | The unit is immune to attacks. |
| MODIFIER_STATE_SILENCED | 3 | The unit is silenced and cannot cast spells. |
| MODIFIER_STATE_MUTED | 4 | The unit is muted and cannot use items. |
| MODIFIER_STATE_STUNNED | 5 | The unit is stunned and cannot perform any actions. |
| MODIFIER_STATE_HEXED | 6 | The unit is hexed, disabling all abilities and reducing movement speed. |
| MODIFIER_STATE_INVISIBLE | 7 | The unit is invisible to enemies without detection. |
| MODIFIER_STATE_INVULNERABLE | 8 | The unit is invulnerable and cannot take damage. |
| MODIFIER_STATE_MAGIC_IMMUNE | 9 | The unit is immune to magic damage. |
| MODIFIER_STATE_PROVIDES_VISION | 10 | The unit provides vision to its team, even while invisible. |
| MODIFIER_STATE_NIGHTMARED | 11 | The unit is under the effects of Nightmare. |
| MODIFIER_STATE_BLOCK_DISABLED | 12 | The unit cannot block damage with shields or abilities. |
| MODIFIER_STATE_EVADE_DISABLED | 13 | The unit cannot evade attacks. |
| MODIFIER_STATE_UNSELECTABLE | 14 | The unit cannot be selected. |
| MODIFIER_STATE_CANNOT_TARGET_ENEMIES | 15 | The unit cannot target enemies. |
| MODIFIER_STATE_CANNOT_TARGET_BUILDINGS | 16 | The unit cannot target buildings. |
| MODIFIER_STATE_CANNOT_MISS | 17 | The unit's attacks cannot miss. |
| MODIFIER_STATE_SPECIALLY_DENIABLE | 18 | The unit can be denied by allies under special conditions. |
| MODIFIER_STATE_FROZEN | 19 | The unit is frozen and unable to act. |
| MODIFIER_STATE_COMMAND_RESTRICTED | 20 | The unit cannot execute movement or attack commands. |
| MODIFIER_STATE_NOT_ON_MINIMAP | 21 | The unit does not appear on the minimap. |
| MODIFIER_STATE_LOW_ATTACK_PRIORITY | 22 | The unit has low attack priority for enemy units. |
| MODIFIER_STATE_NO_HEALTH_BAR | 23 | The unit's health bar is hidden. |
| MODIFIER_STATE_NO_HEALTH_BAR_FOR_ENEMIES | 24 | The unit's health bar is hidden for enemies only. |
| MODIFIER_STATE_NO_HEALTH_BAR_FOR_OTHER_PLAYERS | 25 | The unit's health bar is hidden for all players except its controller. |
| MODIFIER_STATE_FLYING | 26 | The unit is flying and ignores terrain restrictions. |
| MODIFIER_STATE_NO_UNIT_COLLISION | 27 | The unit can move through other units. |
| MODIFIER_STATE_NO_TEAM_MOVE_TO | 28 | The unit's teammates cannot issue "move to" commands on it. |
| MODIFIER_STATE_NO_TEAM_SELECT | 29 | The unit's teammates cannot select it. |
| MODIFIER_STATE_PASSIVES_DISABLED | 30 | The unit's passive abilities are disabled. |
| MODIFIER_STATE_DOMINATED | 31 | The unit is dominated by another player or entity. |
| MODIFIER_STATE_BLIND | 32 | The unit is blinded and has reduced attack accuracy. |
| MODIFIER_STATE_OUT_OF_GAME | 33 | The unit is temporarily removed from the game. |
| MODIFIER_STATE_FAKE_ALLY | 34 | The unit appears as an ally to enemies. |
| MODIFIER_STATE_FLYING_FOR_PATHING_PURPOSES_ONLY | 35 | The unit flies only for pathfinding purposes. |
| MODIFIER_STATE_TRUESIGHT_IMMUNE | 36 | The unit is immune to Truesight detection. |
| MODIFIER_STATE_UNTARGETABLE | 37 | The unit cannot be targeted by any actions. |
| MODIFIER_STATE_UNTARGETABLE_ALLIED | 38 | The unit cannot be targeted by allied actions. |
| MODIFIER_STATE_UNTARGETABLE_ENEMY | 39 | The unit cannot be targeted by enemy actions. |
| MODIFIER_STATE_UNTARGETABLE_SELF | 40 | The unit cannot target itself. |
| MODIFIER_STATE_IGNORING_MOVE_AND_ATTACK_ORDERS | 41 | The unit ignores movement and attack orders. |
| MODIFIER_STATE_ALLOW_PATHING_THROUGH_TREES | 42 | The unit can path through trees. |
| MODIFIER_STATE_NOT_ON_MINIMAP_FOR_ENEMIES | 43 | The unit does not appear on the minimap for enemies. |
| MODIFIER_STATE_UNSLOWABLE | 44 | The unit cannot be slowed. |
| MODIFIER_STATE_TETHERED | 45 | The unit is tethered to another unit. |
| MODIFIER_STATE_IGNORING_STOP_ORDERS | 46 | The unit ignores stop commands. |
| MODIFIER_STATE_FEARED | 47 | The unit is feared and moves away from the source of fear. |
| MODIFIER_STATE_TAUNTED | 48 | The unit is taunted and forced to attack the source of the taunt. |
| MODIFIER_STATE_CANNOT_BE_MOTION_CONTROLLED | 49 | The unit cannot be affected by motion control abilities. |
| MODIFIER_STATE_FORCED_FLYING_VISION | 50 | The unit provides flying vision for its team. |
| MODIFIER_STATE_ATTACK_ALLIES | 51 | The unit can attack allied units. |
| MODIFIER_STATE_ALLOW_PATHING_THROUGH_CLIFFS | 52 | The unit can path through cliffs. |
| MODIFIER_STATE_ALLOW_PATHING_THROUGH_FISSURE | 53 | The unit can path through fissures. |
| MODIFIER_STATE_SPECIALLY_UNDENIABLE | 54 | The unit cannot be denied under special conditions. |
| MODIFIER_STATE_ALLOW_PATHING_THROUGH_OBSTRUCTIONS | 55 | The unit can path through obstructions. |
| MODIFIER_STATE_DEBUFF_IMMUNE | 56 | The unit is immune to debuffs. |
| MODIFIER_STATE_NO_INVISIBILITY_VISUALS | 57 | The unit does not display invisibility visuals. |
| MODIFIER_STATE_ALLOW_PATHING_THROUGH_BASE_BLOCKER | 58 | The unit can path through base blockers. |
| MODIFIER_STATE_LAST | 59 | Marks the last valid state in the enumeration. |

### Paragraphs

- The ModifierState enum defines various states or conditions that can be applied to units in Dota 2. These states influence the unit's abilities, interactions, and behavior during the game.

### Inline Code Tokens

- `ModifierState`
- `MODIFIER_STATE_ROOTED`
- `0`
- `MODIFIER_STATE_DISARMED`
- `1`
- `MODIFIER_STATE_ATTACK_IMMUNE`
- `2`
- `MODIFIER_STATE_SILENCED`
- `3`
- `MODIFIER_STATE_MUTED`
- `4`
- `MODIFIER_STATE_STUNNED`
- `5`
- `MODIFIER_STATE_HEXED`
- `6`
- `MODIFIER_STATE_INVISIBLE`
- `7`
- `MODIFIER_STATE_INVULNERABLE`
- `8`
- `MODIFIER_STATE_MAGIC_IMMUNE`
- `9`
- `MODIFIER_STATE_PROVIDES_VISION`
- `10`
- `MODIFIER_STATE_NIGHTMARED`
- `11`
- `MODIFIER_STATE_BLOCK_DISABLED`
- `12`
- `MODIFIER_STATE_EVADE_DISABLED`
- `13`
- `MODIFIER_STATE_UNSELECTABLE`
- `14`
- `MODIFIER_STATE_CANNOT_TARGET_ENEMIES`
- `15`
- `MODIFIER_STATE_CANNOT_TARGET_BUILDINGS`
- `16`
- `MODIFIER_STATE_CANNOT_MISS`
- `17`
- `MODIFIER_STATE_SPECIALLY_DENIABLE`
- `18`
- `MODIFIER_STATE_FROZEN`
- `19`
- `MODIFIER_STATE_COMMAND_RESTRICTED`
- `20`
- `MODIFIER_STATE_NOT_ON_MINIMAP`
- `21`
- `MODIFIER_STATE_LOW_ATTACK_PRIORITY`
- `22`
- `MODIFIER_STATE_NO_HEALTH_BAR`
- `23`
- `MODIFIER_STATE_NO_HEALTH_BAR_FOR_ENEMIES`
- `24`
- `MODIFIER_STATE_NO_HEALTH_BAR_FOR_OTHER_PLAYERS`
- `25`
- `MODIFIER_STATE_FLYING`
- `26`
- `MODIFIER_STATE_NO_UNIT_COLLISION`
- `27`
- `MODIFIER_STATE_NO_TEAM_MOVE_TO`
- `28`
- `MODIFIER_STATE_NO_TEAM_SELECT`
- `29`
- `MODIFIER_STATE_PASSIVES_DISABLED`
- `30`
- `MODIFIER_STATE_DOMINATED`
- `31`
- `MODIFIER_STATE_BLIND`
- `32`
- `MODIFIER_STATE_OUT_OF_GAME`
- `33`
- `MODIFIER_STATE_FAKE_ALLY`
- `34`
- `MODIFIER_STATE_FLYING_FOR_PATHING_PURPOSES_ONLY`
- `35`
- `MODIFIER_STATE_TRUESIGHT_IMMUNE`
- `36`
- `MODIFIER_STATE_UNTARGETABLE`
- `37`
- `MODIFIER_STATE_UNTARGETABLE_ALLIED`
- `38`
- `MODIFIER_STATE_UNTARGETABLE_ENEMY`
- `39`
- `MODIFIER_STATE_UNTARGETABLE_SELF`
- `40`
- `MODIFIER_STATE_IGNORING_MOVE_AND_ATTACK_ORDERS`
- `41`
- `MODIFIER_STATE_ALLOW_PATHING_THROUGH_TREES`
- `42`
- `MODIFIER_STATE_NOT_ON_MINIMAP_FOR_ENEMIES`
- `43`
- `MODIFIER_STATE_UNSLOWABLE`
- `44`
- `MODIFIER_STATE_TETHERED`
- `45`
- `MODIFIER_STATE_IGNORING_STOP_ORDERS`
- `46`
- `MODIFIER_STATE_FEARED`
- `47`
- `MODIFIER_STATE_TAUNTED`
- `48`
- `MODIFIER_STATE_CANNOT_BE_MOTION_CONTROLLED`
- `49`
- `MODIFIER_STATE_FORCED_FLYING_VISION`
- `50`
- `MODIFIER_STATE_ATTACK_ALLIES`
- `51`
- `MODIFIER_STATE_ALLOW_PATHING_THROUGH_CLIFFS`
- `52`
- `MODIFIER_STATE_ALLOW_PATHING_THROUGH_FISSURE`
- `53`
- `MODIFIER_STATE_SPECIALLY_UNDENIABLE`
- `54`
- `MODIFIER_STATE_ALLOW_PATHING_THROUGH_OBSTRUCTIONS`
- `55`
- `MODIFIER_STATE_DEBUFF_IMMUNE`
- `56`
- `MODIFIER_STATE_NO_INVISIBILITY_VISUALS`
- `57`
- `MODIFIER_STATE_ALLOW_PATHING_THROUGH_BASE_BLOCKER`
- `58`
- `MODIFIER_STATE_LAST`
- `59`

## OrderQueueBehavior Enum

- Kind: `enum`
- Path: `/en/guide/enum/OrderQueueBehavior`
- URL: https://docs.melonity.gg/en/guide/enum/OrderQueueBehavior

### Members / Signatures (H3/H4)

- `Enum Values`

### Tables

#### Table 1

| Name | Value | Description |
| --- | --- | --- |
| DOTA_ORDER_QUEUE_DEFAULT | 0 | Default queue behavior. |
| DOTA_ORDER_QUEUE_NEVER | 1 | Orders are not queued; each replaces the last. |
| DOTA_ORDER_QUEUE_ALWAYS | 2 | Orders are always queued. |

### Paragraphs

- The OrderQueueBehavior enum specifies the behavior of the order queue for a unit.

### Inline Code Tokens

- `OrderQueueBehavior`
- `DOTA_ORDER_QUEUE_DEFAULT`
- `0`
- `DOTA_ORDER_QUEUE_NEVER`
- `1`
- `DOTA_ORDER_QUEUE_ALWAYS`
- `2`

## OutlineType Enum

- Kind: `enum`
- Path: `/en/guide/enum/OutlineType`
- URL: https://docs.melonity.gg/en/guide/enum/OutlineType

### Members / Signatures (H3/H4)

- `Enum Values`

### Tables

#### Table 1

| Name | Value | Description |
| --- | --- | --- |
| Center | 0 | default |
| Inside | 1 | Represents the Inside value. |
| Outside | 2 | Represents the Outside value. |

### Paragraphs

- The OutlineType enum defines how outline thickness should be positioned relative to the path.

### Inline Code Tokens

- `OutlineType`
- `Center`
- `0`
- `Inside`
- `1`
- `Outside`
- `2`

## OverheadAlert Enum

- Kind: `enum`
- Path: `/en/guide/enum/OverheadAlert`
- URL: https://docs.melonity.gg/en/guide/enum/OverheadAlert

### Members / Signatures (H3/H4)

- `Enum Values`

### Tables

#### Table 1

| Name | Value |
| --- | --- |
| OVERHEAD_ALERT_GOLD | 0 |
| OVERHEAD_ALERT_DENY | 1 |
| OVERHEAD_ALERT_CRITICAL | 2 |
| OVERHEAD_ALERT_XP | 3 |
| OVERHEAD_ALERT_BONUS_SPELL_DAMAGE | 4 |
| OVERHEAD_ALERT_MISS | 5 |
| OVERHEAD_ALERT_DAMAGE | 6 |
| OVERHEAD_ALERT_EVADE | 7 |
| OVERHEAD_ALERT_BLOCK | 8 |
| OVERHEAD_ALERT_BONUS_POISON_DAMAGE | 9 |
| OVERHEAD_ALERT_HEAL | 10 |
| OVERHEAD_ALERT_MANA_ADD | 11 |
| OVERHEAD_ALERT_MANA_LOSS | 12 |
| OVERHEAD_ALERT_LAST_HIT_EARLY | 13 |
| OVERHEAD_ALERT_LAST_HIT_CLOSE | 14 |
| OVERHEAD_ALERT_LAST_HIT_MISS | 15 |
| OVERHEAD_ALERT_MAGICAL_BLOCK | 16 |
| OVERHEAD_ALERT_INCOMING_DAMAGE | 17 |
| OVERHEAD_ALERT_OUTGOING_DAMAGE | 18 |
| OVERHEAD_ALERT_DISABLE_RESIST | 19 |
| OVERHEAD_ALERT_DEATH | 20 |
| OVERHEAD_ALERT_BLOCKED | 21 |
| OVERHEAD_ALERT_ITEM_RECEIVED | 22 |
| OVERHEAD_ALERT_SHARD | 23 |
| OVERHEAD_ALERT_DEADLY_BLOW | 24 |

### Paragraphs

- The OverheadAlert enum defines the types of visual notifications that appear above units in Dota 2, providing information about gameplay events.

### Inline Code Tokens

- `OverheadAlert`
- `OVERHEAD_ALERT_GOLD`
- `0`
- `OVERHEAD_ALERT_DENY`
- `1`
- `OVERHEAD_ALERT_CRITICAL`
- `2`
- `OVERHEAD_ALERT_XP`
- `3`
- `OVERHEAD_ALERT_BONUS_SPELL_DAMAGE`
- `4`
- `OVERHEAD_ALERT_MISS`
- `5`
- `OVERHEAD_ALERT_DAMAGE`
- `6`
- `OVERHEAD_ALERT_EVADE`
- `7`
- `OVERHEAD_ALERT_BLOCK`
- `8`
- `OVERHEAD_ALERT_BONUS_POISON_DAMAGE`
- `9`
- `OVERHEAD_ALERT_HEAL`
- `10`
- `OVERHEAD_ALERT_MANA_ADD`
- `11`
- `OVERHEAD_ALERT_MANA_LOSS`
- `12`
- `OVERHEAD_ALERT_LAST_HIT_EARLY`
- `13`
- `OVERHEAD_ALERT_LAST_HIT_CLOSE`
- `14`
- `OVERHEAD_ALERT_LAST_HIT_MISS`
- `15`
- `OVERHEAD_ALERT_MAGICAL_BLOCK`
- `16`
- `OVERHEAD_ALERT_INCOMING_DAMAGE`
- `17`
- `OVERHEAD_ALERT_OUTGOING_DAMAGE`
- `18`
- `OVERHEAD_ALERT_DISABLE_RESIST`
- `19`
- `OVERHEAD_ALERT_DEATH`
- `20`
- `OVERHEAD_ALERT_BLOCKED`
- `21`
- `OVERHEAD_ALERT_ITEM_RECEIVED`
- `22`
- `OVERHEAD_ALERT_SHARD`
- `23`
- `OVERHEAD_ALERT_DEADLY_BLOW`
- `24`

## ParticleAttachment Enum

- Kind: `enum`
- Path: `/en/guide/enum/ParticleAttachment`
- URL: https://docs.melonity.gg/en/guide/enum/ParticleAttachment

### Members / Signatures (H3/H4)

- `Enum Values`

### Tables

#### Table 1

| Name | Value | Description |
| --- | --- | --- |
| PATTACH_INVALID | -1 | Represents an invalid attachment. |
| PATTACH_ABSORIGIN | 0 | Attaches the particle to the absolute origin of the entity. |
| PATTACH_ABSORIGIN_FOLLOW | 1 | Attaches the particle to the absolute origin and follows the entity. |
| PATTACH_CUSTOMORIGIN | 2 | Uses a custom origin for the particle attachment. |
| PATTACH_CUSTOMORIGIN_FOLLOW | 3 | Uses a custom origin for the particle and follows the entity. |
| PATTACH_POINT | 4 | Attaches the particle to a specific point on the entity. |
| PATTACH_POINT_FOLLOW | 5 | Attaches the particle to a specific point and follows the entity. |
| PATTACH_EYES_FOLLOW | 6 | Attaches the particle to the eyes of the entity and follows it. |
| PATTACH_OVERHEAD_FOLLOW | 7 | Attaches the particle overhead and follows the entity. |
| PATTACH_WORLDORIGIN | 8 | Attaches the particle to the world origin. |
| PATTACH_ROOTBONE_FOLLOW | 9 | Attaches the particle to the root bone of the entity and follows it. |
| PATTACH_RENDERORIGIN_FOLLOW | 10 | Attaches the particle to the render origin and follows the entity. |
| PATTACH_MAIN_VIEW | 11 | Attaches the particle to the player's main view. |
| PATTACH_WATERWAKE | 12 | Attaches the particle to create a water wake effect. |
| PATTACH_CENTER_FOLLOW | 13 | Attaches the particle to the center of the entity and follows it. |
| PATTACH_CUSTOM_GAME_STATE_1 | 14 | Custom game state attachment point. |
| MAX_PATTACH_TYPES | 15 | Represents the total number of particle attachment types. |

### Paragraphs

- The ParticleAttachment enum defines the various attachment points and methods used for particle effects in Dota 2.

### Inline Code Tokens

- `ParticleAttachment`
- `PATTACH_INVALID`
- `-1`
- `PATTACH_ABSORIGIN`
- `0`
- `PATTACH_ABSORIGIN_FOLLOW`
- `1`
- `PATTACH_CUSTOMORIGIN`
- `2`
- `PATTACH_CUSTOMORIGIN_FOLLOW`
- `3`
- `PATTACH_POINT`
- `4`
- `PATTACH_POINT_FOLLOW`
- `5`
- `PATTACH_EYES_FOLLOW`
- `6`
- `PATTACH_OVERHEAD_FOLLOW`
- `7`
- `PATTACH_WORLDORIGIN`
- `8`
- `PATTACH_ROOTBONE_FOLLOW`
- `9`
- `PATTACH_RENDERORIGIN_FOLLOW`
- `10`
- `PATTACH_MAIN_VIEW`
- `11`
- `PATTACH_WATERWAKE`
- `12`
- `PATTACH_CENTER_FOLLOW`
- `13`
- `PATTACH_CUSTOM_GAME_STATE_1`
- `14`
- `MAX_PATTACH_TYPES`
- `15`

## PingType Enum

- Kind: `enum`
- Path: `/en/guide/enum/PingType`
- URL: https://docs.melonity.gg/en/guide/enum/PingType

### Members / Signatures (H3/H4)

- `Enum Values`

### Tables

#### Table 1

| Name | Value |
| --- | --- |
| NORMAL | 0 |
| DANGER | 1 |
| HEADING | 2 |
| RETREAT | 3 |
| ATTACK | 4 |
| ENEMY_VISION | 5 |
| OWN_VISION | 6 |

### Inline Code Tokens

- `NORMAL`
- `0`
- `DANGER`
- `1`
- `HEADING`
- `2`
- `RETREAT`
- `3`
- `ATTACK`
- `4`
- `ENEMY_VISION`
- `5`
- `OWN_VISION`
- `6`

## PlayerOrderIssuer Enum

- Kind: `enum`
- Path: `/en/guide/enum/PlayerOrderIssuer`
- URL: https://docs.melonity.gg/en/guide/enum/PlayerOrderIssuer

### Members / Signatures (H3/H4)

- `Enum Values`

### Tables

#### Table 1

| Name | Value | Description |
| --- | --- | --- |
| DOTA_ORDER_ISSUER_SELECTED_UNITS | 0 | The order is issued to all selected units. |
| DOTA_ORDER_ISSUER_CURRENT_UNIT_ONLY | 1 | The order is issued only to the currently active unit. |
| DOTA_ORDER_ISSUER_HERO_ONLY | 2 | The order is issued only to the player's hero. |
| DOTA_ORDER_ISSUER_PASSED_UNIT_ONLY | 3 | The order is issued only to the specific unit passed as a parameter. |

### Paragraphs

- The PlayerOrderIssuer enum specifies the context or scope in which a player issues orders to units in the game.

### Inline Code Tokens

- `PlayerOrderIssuer`
- `DOTA_ORDER_ISSUER_SELECTED_UNITS`
- `0`
- `DOTA_ORDER_ISSUER_CURRENT_UNIT_ONLY`
- `1`
- `DOTA_ORDER_ISSUER_HERO_ONLY`
- `2`
- `DOTA_ORDER_ISSUER_PASSED_UNIT_ONLY`
- `3`

## PowerTreadsAttributes Enum

- Kind: `enum`
- Path: `/en/guide/enum/PowerTreadsAttributes`
- URL: https://docs.melonity.gg/en/guide/enum/PowerTreadsAttributes

### Members / Signatures (H3/H4)

- `Enum Values`

### Tables

#### Table 1

| Name | Value | Description |
| --- | --- | --- |
| DOTA_PT_ATTRIBUTE_STRENGTH | 0 | Power Treads are set to provide Strength bonus. |
| DOTA_PT_ATTRIBUTE_INTELLECT | 1 | Power Treads are set to provide Intelligence bonus. |
| DOTA_PT_ATTRIBUTE_AGILITY | 2 | Power Treads are set to provide Agility bonus. |

### Paragraphs

- The PowerTreadsAttributes enum defines the selectable attribute modes for Power Treads.

### Inline Code Tokens

- `PowerTreadsAttributes`
- `DOTA_PT_ATTRIBUTE_STRENGTH`
- `0`
- `DOTA_PT_ATTRIBUTE_INTELLECT`
- `1`
- `DOTA_PT_ATTRIBUTE_AGILITY`
- `2`

## ProtobufBehavior Enum

- Kind: `enum`
- Path: `/en/guide/enum/ProtobufBehavior`
- URL: https://docs.melonity.gg/en/guide/enum/ProtobufBehavior

### Members / Signatures (H3/H4)

- `Enum Values`

### Tables

#### Table 1

| Name | Value | Description |
| --- | --- | --- |
| None | 0 | No specific behavior; default handling applies. |
| Ignore | 1 | The message is ignored and not processed. |
| Modify | 2 | The message is modified during processing. |

### Paragraphs

- The ProtobufBehavior enum defines behaviors for handling protobuf messages, specifying how they are processed or interacted with.

### Inline Code Tokens

- `ProtobufBehavior`
- `None`
- `0`
- `Ignore`
- `1`
- `Modify`
- `2`

## QueuePriority Enum

- Kind: `enum`
- Path: `/en/guide/enum/QueuePriority`
- URL: https://docs.melonity.gg/en/guide/enum/QueuePriority

### Members / Signatures (H3/H4)

- `Enum Values`

### Tables

#### Table 1

| Name | Value | Description |
| --- | --- | --- |
| Normal | 0 | Default priority. |
| High | 1 | High-priority queue order. |

### Paragraphs

- The QueuePriority enum defines the priority level of queued orders.

### Inline Code Tokens

- `QueuePriority`
- `Normal`
- `0`
- `High`
- `1`

## RoundCorners Enum

- Kind: `enum`
- Path: `/en/guide/enum/RoundCorners`
- URL: https://docs.melonity.gg/en/guide/enum/RoundCorners

### Members / Signatures (H3/H4)

- `Enum Values`

### Tables

#### Table 1

| Name | Value | Description |
| --- | --- | --- |
| TopLeft | 0 | Represents the TopLeft value. |
| TopRight | 1 | Represents the TopRight value. |
| BottomLeft | 2 | Represents the BottomLeft value. |
| BottomRight | 3 | Represents the BottomRight value. |
| None | 4 | Represents the None value. |
| Top | 5 | Represents the Top value. |
| Bottom | 6 | Represents the Bottom value. |
| Left | 7 | Represents the Left value. |
| Right | 8 | Represents the Right value. |
| All | 9 | Represents the All value. |

### Paragraphs

- The RoundCorners enum defines which rectangle corners should be rounded by renderer helpers.

### Inline Code Tokens

- `RoundCorners`
- `TopLeft`
- `0`
- `TopRight`
- `1`
- `BottomLeft`
- `2`
- `BottomRight`
- `3`
- `None`
- `4`
- `Top`
- `5`
- `Bottom`
- `6`
- `Left`
- `7`
- `Right`
- `8`
- `All`
- `9`

## RuneType Enum

- Kind: `enum`
- Path: `/en/guide/enum/RuneType`
- URL: https://docs.melonity.gg/en/guide/enum/RuneType

### Members / Signatures (H3/H4)

- `Enum Values`

### Tables

#### Table 1

| Name | Value |
| --- | --- |
| DOTA_RUNE_INVALID | -1 |
| DOTA_RUNE_DOUBLEDAMAGE | 0 |
| DOTA_RUNE_HASTE | 1 |
| DOTA_RUNE_ILLUSION | 2 |
| DOTA_RUNE_INVISIBILITY | 3 |
| DOTA_RUNE_REGENERATION | 4 |
| DOTA_RUNE_BOUNTY | 5 |
| DOTA_RUNE_ARCANE | 6 |
| DOTA_RUNE_SHIELD | 7 |
| DOTA_RUNE_COUNT | 8 |

### Inline Code Tokens

- `DOTA_RUNE_INVALID`
- `-1`
- `DOTA_RUNE_DOUBLEDAMAGE`
- `0`
- `DOTA_RUNE_HASTE`
- `1`
- `DOTA_RUNE_ILLUSION`
- `2`
- `DOTA_RUNE_INVISIBILITY`
- `3`
- `DOTA_RUNE_REGENERATION`
- `4`
- `DOTA_RUNE_BOUNTY`
- `5`
- `DOTA_RUNE_ARCANE`
- `6`
- `DOTA_RUNE_SHIELD`
- `7`
- `DOTA_RUNE_COUNT`
- `8`

## ShopType Enum

- Kind: `enum`
- Path: `/en/guide/enum/ShopType`
- URL: https://docs.melonity.gg/en/guide/enum/ShopType

### Members / Signatures (H3/H4)

- `Enum Values`

### Tables

#### Table 1

| Name | Value |
| --- | --- |
| DOTA_SHOP_HOME | 0 |
| DOTA_SHOP_SIDE | 1 |
| DOTA_SHOP_SECRET | 2 |
| DOTA_SHOP_GROUND | 3 |
| DOTA_SHOP_SIDE2 | 4 |
| DOTA_SHOP_SECRET2 | 5 |
| DOTA_SHOP_CUSTOM | 6 |
| DOTA_SHOP_NONE | 7 |

### Paragraphs

- The ShopType enum defines the different types of shops.

### Inline Code Tokens

- `ShopType`
- `DOTA_SHOP_HOME`
- `0`
- `DOTA_SHOP_SIDE`
- `1`
- `DOTA_SHOP_SECRET`
- `2`
- `DOTA_SHOP_GROUND`
- `3`
- `DOTA_SHOP_SIDE2`
- `4`
- `DOTA_SHOP_SECRET2`
- `5`
- `DOTA_SHOP_CUSTOM`
- `6`
- `DOTA_SHOP_NONE`
- `7`

## Talents Enum

- Kind: `enum`
- Path: `/en/guide/enum/Talents`
- URL: https://docs.melonity.gg/en/guide/enum/Talents

### Members / Signatures (H3/H4)

- `Enum Values`

### Tables

#### Table 1

| Name | Value | Description |
| --- | --- | --- |
| TALENT_1 | 1 | 10 level Right |
| TALENT_2 | 2 | 10 level Left |
| TALENT_3 | 4 | 15 level Right |
| TALENT_4 | 8 | 15 level Left |
| TALENT_5 | 16 | 20 level Right |
| TALENT_6 | 32 | 20 level Left |
| TALENT_7 | 64 | 25 level Right |
| TALENT_8 | 128 | 25 level Left |

### Inline Code Tokens

- `TALENT_1`
- `1`
- `TALENT_2`
- `2`
- `TALENT_3`
- `4`
- `TALENT_4`
- `8`
- `TALENT_5`
- `16`
- `TALENT_6`
- `32`
- `TALENT_7`
- `64`
- `TALENT_8`
- `128`

## TargetFlags Enum

- Kind: `enum`
- Path: `/en/guide/enum/TargetFlags`
- URL: https://docs.melonity.gg/en/guide/enum/TargetFlags

### Members / Signatures (H3/H4)

- `Enum Values`

### Tables

#### Table 1

| Name | Value | Description |
| --- | --- | --- |
| DOTA_UNIT_TARGET_FLAG_NONE | 0 | No additional targeting restrictions. |
| DOTA_UNIT_TARGET_FLAG_RANGED_ONLY | 2 | Targets ranged units only. |
| DOTA_UNIT_TARGET_FLAG_MELEE_ONLY | 4 | Targets melee units only. |
| DOTA_UNIT_TARGET_FLAG_DEAD | 8 | Targets dead units. |
| DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES | 16 | Includes magic-immune enemy units as valid targets. |
| DOTA_UNIT_TARGET_FLAG_NOT_MAGIC_IMMUNE_ALLIES | 32 | Excludes magic-immune allies from being valid targets. |
| DOTA_UNIT_TARGET_FLAG_INVULNERABLE | 64 | Includes invulnerable units as valid targets. |
| DOTA_UNIT_TARGET_FLAG_FOW_VISIBLE | 128 | Targets units visible in the fog of war. |
| DOTA_UNIT_TARGET_FLAG_NO_INVIS | 256 | Excludes invisible units from being valid targets. |
| DOTA_UNIT_TARGET_FLAG_NOT_ANCIENTS | 512 | Excludes ancient units from being valid targets. |
| DOTA_UNIT_TARGET_FLAG_PLAYER_CONTROLLED | 1024 | Includes only player-controlled units. |
| DOTA_UNIT_TARGET_FLAG_NOT_DOMINATED | 2048 | Excludes dominated units from being valid targets. |
| DOTA_UNIT_TARGET_FLAG_NOT_SUMMONED | 4096 | Excludes summoned units from being valid targets. |
| DOTA_UNIT_TARGET_FLAG_NOT_ILLUSIONS | 8192 | Excludes illusion units from being valid targets. |
| DOTA_UNIT_TARGET_FLAG_NOT_ATTACK_IMMUNE | 16384 | Excludes attack-immune units from being valid targets. |
| DOTA_UNIT_TARGET_FLAG_MANA_ONLY | 32768 | Targets only units that have mana. |
| DOTA_UNIT_TARGET_FLAG_CHECK_DISABLE_HELP | 65536 | Respects "disable help" settings for allies. |
| DOTA_UNIT_TARGET_FLAG_NOT_CREEP_HERO | 131072 | Excludes creep heroes from being valid targets. |
| DOTA_UNIT_TARGET_FLAG_OUT_OF_WORLD | 262144 | Includes units that are out of the game world. |
| DOTA_UNIT_TARGET_FLAG_NOT_NIGHTMARED | 524288 | Excludes units under the effects of Nightmare. |
| DOTA_UNIT_TARGET_FLAG_PREFER_ENEMIES | 1048576 | Prioritizes enemy units when targeting. |
| DOTA_UNIT_TARGET_FLAG_RESPECT_OBSTRUCTIONS | 2097152 | Respects obstructions (e.g., cliffs, trees) when determining valid targets. |

### Paragraphs

- The TargetFlags enum defines additional conditions and filters that can be applied when determining valid targets for abilities or effects in Dota 2.

### Inline Code Tokens

- `TargetFlags`
- `DOTA_UNIT_TARGET_FLAG_NONE`
- `0`
- `DOTA_UNIT_TARGET_FLAG_RANGED_ONLY`
- `2`
- `DOTA_UNIT_TARGET_FLAG_MELEE_ONLY`
- `4`
- `DOTA_UNIT_TARGET_FLAG_DEAD`
- `8`
- `DOTA_UNIT_TARGET_FLAG_MAGIC_IMMUNE_ENEMIES`
- `16`
- `DOTA_UNIT_TARGET_FLAG_NOT_MAGIC_IMMUNE_ALLIES`
- `32`
- `DOTA_UNIT_TARGET_FLAG_INVULNERABLE`
- `64`
- `DOTA_UNIT_TARGET_FLAG_FOW_VISIBLE`
- `128`
- `DOTA_UNIT_TARGET_FLAG_NO_INVIS`
- `256`
- `DOTA_UNIT_TARGET_FLAG_NOT_ANCIENTS`
- `512`
- `DOTA_UNIT_TARGET_FLAG_PLAYER_CONTROLLED`
- `1024`
- `DOTA_UNIT_TARGET_FLAG_NOT_DOMINATED`
- `2048`
- `DOTA_UNIT_TARGET_FLAG_NOT_SUMMONED`
- `4096`
- `DOTA_UNIT_TARGET_FLAG_NOT_ILLUSIONS`
- `8192`
- `DOTA_UNIT_TARGET_FLAG_NOT_ATTACK_IMMUNE`
- `16384`
- `DOTA_UNIT_TARGET_FLAG_MANA_ONLY`
- `32768`
- `DOTA_UNIT_TARGET_FLAG_CHECK_DISABLE_HELP`
- `65536`
- `DOTA_UNIT_TARGET_FLAG_NOT_CREEP_HERO`
- `131072`
- `DOTA_UNIT_TARGET_FLAG_OUT_OF_WORLD`
- `262144`
- `DOTA_UNIT_TARGET_FLAG_NOT_NIGHTMARED`
- `524288`
- `DOTA_UNIT_TARGET_FLAG_PREFER_ENEMIES`
- `1048576`
- `DOTA_UNIT_TARGET_FLAG_RESPECT_OBSTRUCTIONS`
- `2097152`

## TargetTeam Enum

- Kind: `enum`
- Path: `/en/guide/enum/TargetTeam`
- URL: https://docs.melonity.gg/en/guide/enum/TargetTeam

### Members / Signatures (H3/H4)

- `Enum Values`

### Tables

#### Table 1

| Name | Value | Description |
| --- | --- | --- |
| DOTA_UNIT_TARGET_TEAM_NONE | 0 | Targets no team. |
| DOTA_UNIT_TARGET_TEAM_FRIENDLY | 1 | Targets friendly units. |
| DOTA_UNIT_TARGET_TEAM_ENEMY | 2 | Targets enemy units. |
| DOTA_UNIT_TARGET_TEAM_CUSTOM | 3 | Targets a custom-defined group of units. |
| DOTA_UNIT_TARGET_TEAM_BOTH | 4 | Targets both friendly and enemy units. |

### Paragraphs

- The TargetTeam enum defines the possible teams that can be targeted by abilities or effects in Dota 2.

### Inline Code Tokens

- `TargetTeam`
- `DOTA_UNIT_TARGET_TEAM_NONE`
- `0`
- `DOTA_UNIT_TARGET_TEAM_FRIENDLY`
- `1`
- `DOTA_UNIT_TARGET_TEAM_ENEMY`
- `2`
- `DOTA_UNIT_TARGET_TEAM_CUSTOM`
- `3`
- `DOTA_UNIT_TARGET_TEAM_BOTH`
- `4`

## TargetType Enum

- Kind: `enum`
- Path: `/en/guide/enum/TargetType`
- URL: https://docs.melonity.gg/en/guide/enum/TargetType

### Members / Signatures (H3/H4)

- `Enum Values`

### Tables

#### Table 1

| Name | Value | Description |
| --- | --- | --- |
| DOTA_UNIT_TARGET_NONE | 0 | Targets no specific unit type. |
| DOTA_UNIT_TARGET_HERO | 1 | Targets hero units. |
| DOTA_UNIT_TARGET_CREEP | 2 | Targets creep units. |
| DOTA_UNIT_TARGET_BUILDING | 4 | Targets building units, such as towers or barracks. |
| DOTA_UNIT_TARGET_COURIER | 16 | Targets couriers. |
| DOTA_UNIT_TARGET_BASIC | 18 | Targets basic units, including creeps and non-hero units. |
| DOTA_UNIT_TARGET_OTHER | 32 | Targets other unit types not covered by the above categories. |
| DOTA_UNIT_TARGET_ALL | 55 | Targets all units, including heroes, creeps, and buildings. |
| DOTA_UNIT_TARGET_TREE | 64 | Targets trees. |
| DOTA_UNIT_TARGET_CUSTOM | 128 | Targets a custom-defined unit group. |

### Paragraphs

- The TargetType enum defines the types of units that can be targeted by abilities or effects in Dota 2.

### Inline Code Tokens

- `TargetType`
- `DOTA_UNIT_TARGET_NONE`
- `0`
- `DOTA_UNIT_TARGET_HERO`
- `1`
- `DOTA_UNIT_TARGET_CREEP`
- `2`
- `DOTA_UNIT_TARGET_BUILDING`
- `4`
- `DOTA_UNIT_TARGET_COURIER`
- `16`
- `DOTA_UNIT_TARGET_BASIC`
- `18`
- `DOTA_UNIT_TARGET_OTHER`
- `32`
- `DOTA_UNIT_TARGET_ALL`
- `55`
- `DOTA_UNIT_TARGET_TREE`
- `64`
- `DOTA_UNIT_TARGET_CUSTOM`
- `128`

## TeamType Enum

- Kind: `enum`
- Path: `/en/guide/enum/TeamType`
- URL: https://docs.melonity.gg/en/guide/enum/TeamType

### Members / Signatures (H3/H4)

- `Enum Values`

### Tables

#### Table 1

| Name | Value | Description |
| --- | --- | --- |
| TEAM_ENEMY | 1 | Represents the enemy team. |
| TEAM_FRIEND | 2 | Represents the player's team (friendly). |
| TEAM_BOTH | 3 | Represents both teams (enemy and friend). |

### Paragraphs

- The TeamType enum defines the types of teams that can be targeted or identified in the game. It is used to specify the relationship of an entity or action with respect to the player’s team.

### Inline Code Tokens

- `TeamType`
- `TEAM_ENEMY`
- `1`
- `TEAM_FRIEND`
- `2`
- `TEAM_BOTH`
- `3`

## UnitOrder Enum

- Kind: `enum`
- Path: `/en/guide/enum/UnitOrder`
- URL: https://docs.melonity.gg/en/guide/enum/UnitOrder

### Members / Signatures (H3/H4)

- `Enum Values`

### Tables

#### Table 1

| Name | Value | Description |
| --- | --- | --- |
| DOTA_UNIT_ORDER_NONE | 0 | No order. |
| DOTA_UNIT_ORDER_MOVE_TO_POSITION | 1 | Move to a specific position. |
| DOTA_UNIT_ORDER_MOVE_TO_TARGET | 2 | Move to a specific target. |
| DOTA_UNIT_ORDER_ATTACK_MOVE | 3 | Perform an attack-move command. |
| DOTA_UNIT_ORDER_ATTACK_TARGET | 4 | Attack a specific target. |
| DOTA_UNIT_ORDER_CAST_POSITION | 5 | Cast an ability at a specific position. |
| DOTA_UNIT_ORDER_CAST_TARGET | 6 | Cast an ability on a specific target. |
| DOTA_UNIT_ORDER_CAST_TARGET_TREE | 7 | Cast an ability on a specific tree. |
| DOTA_UNIT_ORDER_CAST_NO_TARGET | 8 | Cast an ability with no target. |
| DOTA_UNIT_ORDER_CAST_TOGGLE | 9 | Toggle an ability on or off. |
| DOTA_UNIT_ORDER_HOLD_POSITION | 10 | Hold the current position. |
| DOTA_UNIT_ORDER_TRAIN_ABILITY | 11 | Train a specific ability. |
| DOTA_UNIT_ORDER_DROP_ITEM | 12 | Drop an item. |
| DOTA_UNIT_ORDER_GIVE_ITEM | 13 | Give an item to another unit. |
| DOTA_UNIT_ORDER_PICKUP_ITEM | 14 | Pick up an item. |
| DOTA_UNIT_ORDER_PICKUP_RUNE | 15 | Pick up a rune. |
| DOTA_UNIT_ORDER_PURCHASE_ITEM | 16 | Purchase an item. |
| DOTA_UNIT_ORDER_SELL_ITEM | 17 | Sell an item. |
| DOTA_UNIT_ORDER_DISASSEMBLE_ITEM | 18 | Disassemble an item. |
| DOTA_UNIT_ORDER_MOVE_ITEM | 19 | Move an item between slots. |
| DOTA_UNIT_ORDER_CAST_TOGGLE_AUTO | 20 | Toggle an ability's auto-cast on or off. |
| DOTA_UNIT_ORDER_STOP | 21 | Stop the current action. |
| DOTA_UNIT_ORDER_TAUNT | 22 | Perform a taunt. |
| DOTA_UNIT_ORDER_BUYBACK | 23 | Perform a buyback. |
| DOTA_UNIT_ORDER_GLYPH | 24 | Activate the glyph of fortification. |
| DOTA_UNIT_ORDER_EJECT_ITEM_FROM_STASH | 25 | Eject an item from the stash. |
| DOTA_UNIT_ORDER_CAST_RUNE | 26 | Cast a rune ability. |
| DOTA_UNIT_ORDER_PING_ABILITY | 27 | Ping an ability. |
| DOTA_UNIT_ORDER_MOVE_TO_DIRECTION | 28 | Move in a specific direction. |
| DOTA_UNIT_ORDER_PATROL | 29 | Patrol between points. |
| DOTA_UNIT_ORDER_VECTOR_TARGET_POSITION | 30 | Issue a vector-targeted ability order. |
| DOTA_UNIT_ORDER_RADAR | 31 | Use the radar ability. |
| DOTA_UNIT_ORDER_SET_ITEM_COMBINE_LOCK | 32 | Set the lock status for combining items. |
| DOTA_UNIT_ORDER_CONTINUE | 33 | Continue the previous order. |
| DOTA_UNIT_ORDER_VECTOR_TARGET_CANCELED | 34 | Cancel a vector-targeted ability. |
| DOTA_UNIT_ORDER_CAST_RIVER_PAINT | 35 | Cast a river paint ability. |
| DOTA_UNIT_ORDER_PREGAME_ADJUST_ITEM_ASSIGNMENT | 36 | Adjust item assignment during the pregame. |
| DOTA_UNIT_ORDER_DROP_ITEM_AT_FOUNTAIN | 37 | Drop an item at the fountain. |
| DOTA_UNIT_ORDER_TAKE_ITEM_FROM_NEUTRAL_ITEM_STASH | 38 | Take an item from the neutral item stash. |
| DOTA_UNIT_ORDER_MOVE_RELATIVE | 39 | Move relative to the current position. |
| DOTA_UNIT_ORDER_CAST_TOGGLE_ALT | 40 | Toggle an alternative ability. |

### Paragraphs

- The UnitOrder enum defines the various types of orders that can be issued to units in the game.

### Inline Code Tokens

- `UnitOrder`
- `DOTA_UNIT_ORDER_NONE`
- `0`
- `DOTA_UNIT_ORDER_MOVE_TO_POSITION`
- `1`
- `DOTA_UNIT_ORDER_MOVE_TO_TARGET`
- `2`
- `DOTA_UNIT_ORDER_ATTACK_MOVE`
- `3`
- `DOTA_UNIT_ORDER_ATTACK_TARGET`
- `4`
- `DOTA_UNIT_ORDER_CAST_POSITION`
- `5`
- `DOTA_UNIT_ORDER_CAST_TARGET`
- `6`
- `DOTA_UNIT_ORDER_CAST_TARGET_TREE`
- `7`
- `DOTA_UNIT_ORDER_CAST_NO_TARGET`
- `8`
- `DOTA_UNIT_ORDER_CAST_TOGGLE`
- `9`
- `DOTA_UNIT_ORDER_HOLD_POSITION`
- `10`
- `DOTA_UNIT_ORDER_TRAIN_ABILITY`
- `11`
- `DOTA_UNIT_ORDER_DROP_ITEM`
- `12`
- `DOTA_UNIT_ORDER_GIVE_ITEM`
- `13`
- `DOTA_UNIT_ORDER_PICKUP_ITEM`
- `14`
- `DOTA_UNIT_ORDER_PICKUP_RUNE`
- `15`
- `DOTA_UNIT_ORDER_PURCHASE_ITEM`
- `16`
- `DOTA_UNIT_ORDER_SELL_ITEM`
- `17`
- `DOTA_UNIT_ORDER_DISASSEMBLE_ITEM`
- `18`
- `DOTA_UNIT_ORDER_MOVE_ITEM`
- `19`
- `DOTA_UNIT_ORDER_CAST_TOGGLE_AUTO`
- `20`
- `DOTA_UNIT_ORDER_STOP`
- `21`
- `DOTA_UNIT_ORDER_TAUNT`
- `22`
- `DOTA_UNIT_ORDER_BUYBACK`
- `23`
- `DOTA_UNIT_ORDER_GLYPH`
- `24`
- `DOTA_UNIT_ORDER_EJECT_ITEM_FROM_STASH`
- `25`
- `DOTA_UNIT_ORDER_CAST_RUNE`
- `26`
- `DOTA_UNIT_ORDER_PING_ABILITY`
- `27`
- `DOTA_UNIT_ORDER_MOVE_TO_DIRECTION`
- `28`
- `DOTA_UNIT_ORDER_PATROL`
- `29`
- `DOTA_UNIT_ORDER_VECTOR_TARGET_POSITION`
- `30`
- `DOTA_UNIT_ORDER_RADAR`
- `31`
- `DOTA_UNIT_ORDER_SET_ITEM_COMBINE_LOCK`
- `32`
- `DOTA_UNIT_ORDER_CONTINUE`
- `33`
- `DOTA_UNIT_ORDER_VECTOR_TARGET_CANCELED`
- `34`
- `DOTA_UNIT_ORDER_CAST_RIVER_PAINT`
- `35`
- `DOTA_UNIT_ORDER_PREGAME_ADJUST_ITEM_ASSIGNMENT`
- `36`
- `DOTA_UNIT_ORDER_DROP_ITEM_AT_FOUNTAIN`
- `37`
- `DOTA_UNIT_ORDER_TAKE_ITEM_FROM_NEUTRAL_ITEM_STASH`
- `38`
- `DOTA_UNIT_ORDER_MOVE_RELATIVE`
- `39`
- `DOTA_UNIT_ORDER_CAST_TOGGLE_ALT`
- `40`

## UnitType Enum

- Kind: `enum`
- Path: `/en/guide/enum/UnitType`
- URL: https://docs.melonity.gg/en/guide/enum/UnitType

### Members / Signatures (H3/H4)

- `Enum Values`
- `Notes`

### Tables

#### Table 1

| Name | Value | Description |
| --- | --- | --- |
| DOTA_UNIT_NONE | 0 | Represents no unit type. |
| DOTA_UNIT_HERO | 1 | Represents a hero unit. |
| DOTA_UNIT_STRUCTURE | 16 | Represents a structure, such as buildings or static objects. |
| DOTA_UNIT_TOWER | 20 | Represents a tower unit (`DOTA_UNIT_STRUCTURE |
| DOTA_UNIT_ANCIENT | 48 | Represents an ancient unit (`32 |
| DOTA_UNIT_BARRACKS | 80 | Represents a barracks unit (`64 |
| DOTA_UNIT_CREEP | 128 | Represents a creep unit. |
| DOTA_UNIT_COURIER | 256 | Represents a courier unit. |
| DOTA_UNIT_SHOPKEEP | 528 | Represents a shopkeeper unit (`512 |
| DOTA_UNIT_LANE_CREEP | 1152 | Represents a lane creep unit (`1024 |
| DOTA_UNIT_ROSHAN | 2176 | Represents Roshan (`2048 |

### Paragraphs

- The UnitType enum defines various types of units in Dota 2, categorizing them based on their attributes and roles in the game. Certain unit types combine properties of others using bitwise flags.
- The values for combined unit types are calculated using bitwise OR operations. For example:
- This structure allows efficient categorization and identification of units in the game.
- NOTE

### List Items

- The values for combined unit types are calculated using bitwise OR operations. For example:
- This structure allows efficient categorization and identification of units in the game.
- DOTA_UNIT_TOWER = DOTA_UNIT_STRUCTURE | 4
- DOTA_UNIT_ANCIENT = 32 | DOTA_UNIT_STRUCTURE
- DOTA_UNIT_LANE_CREEP = 1024 | DOTA_UNIT_CREEP
- DOTA_UNIT_ROSHAN = 2048 | DOTA_UNIT_CREEP

### Inline Code Tokens

- `UnitType`
- `DOTA_UNIT_NONE`
- `0`
- `DOTA_UNIT_HERO`
- `1`
- `DOTA_UNIT_STRUCTURE`
- `16`
- `DOTA_UNIT_TOWER`
- `20`
- `DOTA_UNIT_ANCIENT`
- `48`
- `DOTA_UNIT_BARRACKS`
- `80`
- `DOTA_UNIT_CREEP`
- `128`
- `DOTA_UNIT_COURIER`
- `256`
- `DOTA_UNIT_SHOPKEEP`
- `528`
- `DOTA_UNIT_LANE_CREEP`
- `1152`
- `DOTA_UNIT_ROSHAN`
- `2176`
- `DOTA_UNIT_TOWER = DOTA_UNIT_STRUCTURE | 4`
- `DOTA_UNIT_ANCIENT = 32 | DOTA_UNIT_STRUCTURE`
- `DOTA_UNIT_LANE_CREEP = 1024 | DOTA_UNIT_CREEP`
- `DOTA_UNIT_ROSHAN = 2048 | DOTA_UNIT_CREEP`

## WheelStopReason Enum

- Kind: `enum`
- Path: `/en/guide/enum/WheelStopReason`
- URL: https://docs.melonity.gg/en/guide/enum/WheelStopReason

### Members / Signatures (H3/H4)

- `Enum Values`

### Tables

#### Table 1

| Name | Value | Description |
| --- | --- | --- |
| Toggle | 0 | The wheel was stopped by toggling it on or off. |
| Order | 1 | The wheel was stopped due to issuing an order or selecting an action. |
| Click | 2 | The wheel was stopped by clicking outside of its area or context. |

### Paragraphs

- The WheelStopReason enum defines the various reasons why a wheel menu.

### Inline Code Tokens

- `WheelStopReason`
- `Toggle`
- `0`
- `Order`
- `1`
- `Click`
- `2`
