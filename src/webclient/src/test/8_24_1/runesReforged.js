const rune = [{
    "id": 8100,
    "key": "Domination",
    "icon": "perk-images/Styles/7200_Domination.png",
    "name": "主宰",
    "slots": [{
        "runes": [{
            "id": 8112,
            "key": "Electrocute",
            "icon": "perk-images/Styles/Domination/Electrocute/Electrocute.png",
            "name": "电刑",
            "shortDesc": "在3秒内用3个<b>独立的</b>攻击或技能命中一位英雄时，会造成额外的<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'>自适应伤害</lol-uikit-tooltipped-keyword>。",
            "longDesc": "在3秒内用3个<b>独立的</b>攻击或技能命中一位英雄时，会造成额外的<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'><font color='#48C4B7'>自适应伤害</font></lol-uikit-tooltipped-keyword>。<br><br>伤害值：30 - 180 (+0.4额外攻击力, +0.25法术强度)。<br><br>冷却时间：25 - 20秒<br><br><hr></hr><i>“我们曾称呼他们为“雷霆领主”，是因为他们的闪电招来了灾祸。”</i>"
        }, {
            "id": 8124,
            "key": "Predator",
            "icon": "perk-images/Styles/Domination/Predator/Predator.png",
            "name": "掠食者",
            "shortDesc": "为你的鞋子添加一个主动效果，此效果可提供一个巨量移动速度加成，并使你的下次攻击或技能造成额外的<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'>自适应伤害</lol-uikit-tooltipped-keyword>。",
            "longDesc": "为你的鞋子附魔上主动效果“<font color='#c60300'>掠食者</font>。”<br><br>在非战斗状态下引导1.5秒，以获取45%移动速度加成，持续15秒。伤害型的攻击或技能会终止这个效果，并造成60 - 180 (+<scaleAD>0.4</scaleAD>额外攻击力)(+<scaleAP>0.25</scaleAP>法术强度)的额外<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'><font color='#48C4B7'>自适应伤害</font></lol-uikit-tooltipped-keyword>。<br><br>冷却时间：180-120秒。开始游戏时处于冷却阶段。在引导时被打断时会返还50%冷却时间。"
        }, {
            "id": 8128,
            "key": "DarkHarvest",
            "icon": "perk-images/Styles/Domination/DarkHarvest/DarkHarvest.png",
            "name": "黑暗收割",
            "shortDesc": "伤害一名低生命值的英雄时会造成<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'>自适应伤害</lol-uikit-tooltipped-keyword>并从该猎物身上收割灵魂。",
            "longDesc": "伤害一名生命值低于50%的英雄时会造成<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'>自适应伤害</lol-uikit-tooltipped-keyword>并收割该英雄的灵魂，将黑暗收割的伤害永久提升5。<br><br>黑暗收割伤害：20-60 (基于等级) (+5伤害x灵魂数) (+0.25额外攻击力) (+0.15法术强度)<br>冷却时间：45秒(参与击杀时重置到1.5秒)"
        }, {
            "id": 9923,
            "key": "HailOfBlades",
            "icon": "perk-images/Styles/Domination/HailOfBlades/HailOfBlades.png",
            "name": "丛刃",
            "shortDesc": "在攻击敌方英雄时，提供大幅攻击速度给最先的3次攻击。",
            "longDesc": "在攻击敌方英雄时，提供75-125%攻击速度给最先的3次攻击。<br><br>每次攻击的间隔不能超过2秒，否则这个效果就会结束。<br><br>丛刃允许你暂时溢出你的攻击速度上限。<br><br>冷却时间：脱离战斗后4秒。"
        }]
    }, {
        "runes": [{
            "id": 8126,
            "key": "CheapShot",
            "icon": "perk-images/Styles/Domination/CheapShot/CheapShot.png",
            "name": "恶意中伤",
            "shortDesc": "对<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_ImpairAct'>移动或行动受损的</lol-uikit-tooltipped-keyword>敌方英雄造成额外真实伤害。",
            "longDesc": "对<b>移动或行动受损</b>的敌人造成8~40额外真实伤害(基于等级)。<br><br>冷却时间：4秒<br><rules>会在移动受损之后触发伤害。</rules>"
        }, {
            "id": 8139,
            "key": "TasteOfBlood",
            "icon": "perk-images/Styles/Domination/TasteOfBlood/GreenTerror_TasteOfBlood.png",
            "name": "血之滋味",
            "shortDesc": "在你伤害一名敌方英雄时治疗自身。",
            "longDesc": "在你伤害一名敌方英雄时为你提供治疗效果。<br>治疗效果：18-35 (+0.2额外攻击力，+0.1法术强度)生命值(基于等级)<br><br>冷却时间：20秒"
        }, {
            "id": 8143,
            "key": "SuddenImpact",
            "icon": "perk-images/Styles/Domination/SuddenImpact/SuddenImpact.png",
            "name": "猛然冲击",
            "shortDesc": "在使用一次突进、跃击、闪烁、传送效果或离开潜行状态后获得穿甲和法术穿透。",
            "longDesc": "在离开潜行状态或使用一次突进、跃击、闪烁或传送效果，对英雄造成任何伤害后，你都会获得7穿甲和6法术穿透，持续5秒。<br><br>冷却时间：4秒"
        }]
    }, {
        "runes": [{
            "id": 8136,
            "key": "ZombieWard",
            "icon": "perk-images/Styles/Domination/ZombieWard/ZombieWard.png",
            "name": "僵尸守卫",
            "shortDesc": "<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>参与击杀</lol-uikit-tooltipped-keyword>敌方守卫时，会使友方的僵尸守卫从敌方守卫的尸体上爬出。此外，在摧毁一个守卫后，对敌方英雄造成伤害时会造成额外魔法伤害。",
            "longDesc": "<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>参与击杀</lol-uikit-tooltipped-keyword>敌方守卫时，会使友方的僵尸守卫从敌方守卫的尸体上爬出。此外，在摧毁一个守卫后，对敌方英雄造成伤害时会造成<scaleLevel>30 - 90</scaleLevel>额外魔法伤害（基于等级）。<br><br>僵尸守卫是可被看见的，持续120秒并且不会算入你的守卫限制。"
        }, {
            "id": 8120,
            "key": "GhostPoro",
            "icon": "perk-images/Styles/Domination/GhostPoro/GhostPoro.png",
            "name": "幽灵魄罗",
            "shortDesc": "进入草丛时会将你的当前饰品换成一个幽灵魄罗。幽灵魄罗可以被放置在草丛中并且将提供视野。<br><br>当你或你的魄罗中有一个在<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_EnemyTerritory'>敌方领土</lol-uikit-tooltipped-keyword>时，提供<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'>自适应</lol-uikit-tooltipped-keyword>之力 。",
            "longDesc": "进入草丛时会暂时将你的当前饰品换成一个幽灵魄罗，在被放置于草丛中时可提供300秒视野。附近的敌方英雄会将幽灵魄罗吓跑。<br><br>当你或你的幽灵魄罗中有一个在<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_EnemyTerritory'>敌方领土</lol-uikit-tooltipped-keyword>时，此符文会提供5-20<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'>自适应</lol-uikit-tooltipped-keyword>之力（基于等级）。<br><br>冷却时间：60秒，前提是魄罗被吓跑。"
        }, {
            "id": 8138,
            "key": "EyeballCollection",
            "icon": "perk-images/Styles/Domination/EyeballCollection/EyeballCollection.png",
            "name": "眼球收集器",
            "shortDesc": "在<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>参与击杀</lol-uikit-tooltipped-keyword>英雄和守卫时收集眼球。每个眼球都会提供永久的攻击力或法术强度，<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'>自动适应</lol-uikit-tooltipped-keyword>，并在完成收集后会提供额外加成。",
            "longDesc": "在参与击杀英雄和守卫时收集眼球。每个已收集的眼球都会提供一个<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>自动适应的</font></lol-uikit-tooltipped-keyword>加成，0.6攻击力或1法术强度。<br><br>你的收集会在20个眼球时被视为已完成，额外提供一个<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>自动适应的</font></lol-uikit-tooltipped-keyword>加成，6攻击力或10法术强度。<br><br>每次击杀英雄提供2个眼球，每次协助击杀英雄提供1个眼球，每次参与击杀守卫提供1个眼球"
        }]
    }, {
        "runes": [{
            "id": 8135,
            "key": "RavenousHunter",
            "icon": "perk-images/Styles/Domination/RavenousHunter/RavenousHunter.png",
            "name": "贪欲猎手",
            "shortDesc": "<b>独特的</b><lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>参与击杀</lol-uikit-tooltipped-keyword>会永久使来自技能的伤害提供治疗效果。",
            "longDesc": "你的技能造成的伤害值的一部分将转化为对你的治疗效果。<br>治疗百分比：1.5%+2.5%x<i>赏金猎人</i>层数。<br><br>你首次参与击杀每位独特的敌方英雄时，都会赚取一层<i>赏金猎人</i>效果。<br><br><rules><br><i>群体技能：</i> 治疗效果会降低至三分之一。</rules>"
        }, {
            "id": 8134,
            "key": "IngeniousHunter",
            "icon": "perk-images/Styles/Domination/IngeniousHunter/IngeniousHunter.png",
            "name": "灵性猎手",
            "shortDesc": "<b>独特的</b><lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>参与击杀</lol-uikit-tooltipped-keyword>会提供永久的主动道具<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_CDR'>冷却缩减</lol-uikit-tooltipped-keyword>(包含饰品效果)。",
            "longDesc": "提供<b>主动装备冷却缩减</b>(包含饰品效果)，数额相当于15%+5%x<i>赏金猎人</i>层数。<br><br>你首次参与击杀每位独特的敌方英雄时，都会赚取一层<i>赏金猎人</i>效果。"
        }, {
            "id": 8105,
            "key": "RelentlessHunter",
            "icon": "perk-images/Styles/Domination/RelentlessHunter/RelentlessHunter.png",
            "name": "无情猎手",
            "shortDesc": "<b>独特的</b><lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>参与击杀</lol-uikit-tooltipped-keyword>会提供永久的<b>非战斗状态<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_MS'>移动速度加成</lol-uikit-tooltipped-keyword></b>。",
            "longDesc": "提供额外的<b>非战斗状态移动速度加成</b>，数额相当于8+8x<i>赏金猎人</i>层数。<br><br>你首次参与击杀每位独特的敌方英雄时，都会赚取一层<i>赏金猎人</i>效果。"
        }, {
            "id": 8106,
            "key": "UltimateHunter",
            "icon": "perk-images/Styles/Domination/UltimateHunter/UltimateHunter.png",
            "name": "终极猎人",
            "shortDesc": "<b>独特的</b><lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>参与击杀</lol-uikit-tooltipped-keyword>会永久为你的终极技能提供冷却缩减。",
            "longDesc": "你的大招获得5%<b>冷却缩减，</b>外加2%x<i>赏金猎人</i>层数。<br><br>你首次参与击杀每位独特的敌方英雄时，都会赚取一层<i>赏金猎人</i>效果。"
        }]
    }]
}, {
    "id": 8300,
    "key": "Inspiration",
    "icon": "perk-images/Styles/7203_Whimsy.png",
    "name": "启迪",
    "slots": [{
        "runes": [{
            "id": 8351,
            "key": "GlacialAugment",
            "icon": "perk-images/Styles/Inspiration/GlacialAugment/GlacialAugment.png",
            "name": "冰川增幅",
            "shortDesc": "你对敌方英雄发起的第一次攻击会使该英雄减速(一段时间内无法重复作用于相同目标)。用主动型装备使敌方英雄减速，还会对着他们发射冻结射线，并创造出一个缓慢消失的减速场。",
            "longDesc": "对一名英雄进行普攻时还会使该英雄减速2秒。减速效果会在持续期间不断增强。<li><i>远程</i>：远程攻击最多可减速30% - 40% </li> <li><i>近战</i>：近战攻击最多可减速45% - 55%</li> <br>用主动型装备减速一名英雄时，还会发射一束冻结射线来穿透该英雄，冻住附近的地面5秒，使其中的所有单位减速60%。<br><br>冷却时间：每个单位7-4秒"
        }, {
            "id": 8359,
            "key": "Kleptomancy",
            "icon": "perk-images/Styles/Inspiration/Kleptomancy/Kleptomancy.png",
            "name": "行窃预兆",
            "shortDesc": "通过施放技能然后普攻敌方英雄的方式从敌方英雄身上掠夺金币和物品。",
            "longDesc": "在使用一个技能后，你的下2次攻击都可以提供5金币……或者更棒的东西。<br><br>只有对英雄发起的攻击才会为你提供奖励。"
        }, {
            "id": 8360,
            "key": "UnsealedSpellbook",
            "icon": "perk-images/Styles/Inspiration/UnsealedSpellbook/UnsealedSpellbook.png",
            "name": "启封的秘籍",
            "shortDesc": "在非战斗状态下置换召唤师技能。置换到独特的召唤师技能时将提升你未来进行置换的速率。",
            "longDesc": "将你的一个已装备的召唤师技能置换成一个新的、单一的召唤师技能。你所置换的每个独特的召唤师技能都会使你的置换冷却时间永久降低20秒（初始置换冷却时间为4分钟）。<br><br>你的首次置换将在6分钟时变为可用状态。<br><rules><br>召唤师技能仅可在非战斗状态下置换。<br>在使用一个已置换的召唤师技能后，你必须置换3次以上才能再次选择第一个召唤师技能。</rules>"
        }]
    }, {
        "runes": [{
            "id": 8306,
            "key": "HextechFlashtraption",
            "icon": "perk-images/Styles/Inspiration/HextechFlashtraption/HextechFlashtraption.png",
            "name": "海克斯科技闪现罗网",
            "shortDesc": "当【闪现】尚未冷却完毕时，它会被替换为<i>海克斯闪现</i>。<br><br><i>海克斯闪现</i>：引导，然后闪烁到一个新位置。",
            "longDesc": "当【闪现】尚未冷却完毕时，它会被替换为<i>海克斯闪现</i>。<br><br><i>海克斯闪现</i>：引导2秒后闪烁到一个新位置。<br><br>冷却时间：20秒。在你进入与英雄战斗的状态时，会有一个为期10秒的冷却时间。<br>"
        }, {
            "id": 8304,
            "key": "MagicalFootwear",
            "icon": "perk-images/Styles/Inspiration/MagicalFootwear/MagicalFootwear.png",
            "name": "神奇之鞋",
            "shortDesc": "你在10分钟时获得免费的鞋子，但你在之前不能购买鞋子。每次<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>协助击杀</lol-uikit-tooltipped-keyword>都会让你的鞋子的到来时间提前30秒。",
            "longDesc": "你在10分钟时获得免费的有点神奇之靴，但你在之前不能购买鞋子。你每参与一次击杀，就会使获得鞋子的时间点提前30秒。<br><br>有点神奇之靴可为你提供额外的+10移动速度。"
        }, {
            "id": 8313,
            "key": "PerfectTiming",
            "icon": "perk-images/Styles/Inspiration/PerfectTiming/PerfectTiming.png",
            "name": "完美时机",
            "shortDesc": "获得一个免费的秒表。秒表有一个一次性使用的<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Stasis'>凝滞</lol-uikit-tooltipped-keyword>主动效果。",
            "longDesc": "开始游戏时带着一个一次性使用的始动的秒表，可用来进入凝滞状态。秒表在最初的10分钟里无法被使用。<br><br>使中娅沙漏，守护天使,，和石像鬼石板甲的冷却时间减少15%。"
        }]
    }, {
        "runes": [{
            "id": 8321,
            "key": "FuturesMarket",
            "icon": "perk-images/Styles/Inspiration/FuturesMarket/FuturesMarket.png",
            "name": "未来市场",
            "shortDesc": "你可以欠债来购买装备。",
            "longDesc": "你可以欠债来购买装备。你可以欠的数额会随时间增加。<br><br>借款费用：50金币"
        }, {
            "id": 8316,
            "key": "MinionDematerializer",
            "icon": "perk-images/Styles/Inspiration/MinionDematerializer/MinionDematerializer.png",
            "name": "小兵去质器",
            "shortDesc": "开始游戏时会带着6个能够秒杀线上小兵的小兵去质器。用该物品击杀小兵会永久提升你对该类型小兵的额外伤害。",
            "longDesc": "开始游戏时会带着6个能够立刻击杀并吸收线上小兵的小兵去质器。小兵去质器在游戏最初的240秒内处于冷却状态。<br><br>吸收一个小兵会使你对该类型小兵的伤害永久提升+4%，并且每吸收该类型的另一个小兵，这个伤害加成就会提升+1%。<br>"
        }, {
            "id": 8345,
            "key": "BiscuitDelivery",
            "icon": "perk-images/Styles/Inspiration/BiscuitDelivery/BiscuitDelivery.png",
            "name": "饼干配送",
            "shortDesc": "每过3分钟获得一个免费的【饼干】，直到12分钟为止。享用一个饼干可永久提升你的最大法力值并回复生命值和法力值。",
            "longDesc": "饼干配送：每过3分钟获得一个永续意志夹心饼干，直到12分钟为止。<br><br>饼干可回复你15%的已损失生命值和法力值。使用一个饼干可永久给予你40最大法力值。<br><br><i>没有法力的</i>英雄会回复20%已损失生命值。"
        }]
    }, {
        "runes": [{
            "id": 8347,
            "key": "CosmicInsight",
            "icon": "perk-images/Styles/Inspiration/CosmicInsight/CosmicInsight.png",
            "name": "星界洞悉",
            "shortDesc": "+5%<lol-uikit-tooltipped-keyword key=\"LinkTooltip_Description_CDR\">冷却缩减</lol-uikit-tooltipped-keyword><br>+5%最大冷却缩减<br>+5%召唤师技能冷却缩减<br>+5%装备冷却缩减",
            "longDesc": "+5%冷却缩减<br>+5%最大冷却缩减<br>+5%召唤师技能冷却缩减<br>+5%装备冷却缩减"
        }, {
            "id": 8410,
            "key": "ApproachVelocity",
            "icon": "perk-images/Styles/Resolve/ApproachVelocity/ApproachVelocity.png",
            "name": "行近速率",
            "shortDesc": "朝着<lol-uikit-tooltipped-keyword key=\"LinkTooltip_Description_ImpairMov\">移动受损</lol-uikit-tooltipped-keyword>的友方英雄或被你施加了移动受损效果的敌方英雄移动时，获得<lol-uikit-tooltipped-keyword key=\"LinkTooltip_Description_MS\">移动速度</lol-uikit-tooltipped-keyword>加成。",
            "longDesc": "朝着附近移动受损的友方英雄或敌方英雄移动时，将获得15%移动速度加成。<br><br>距离：1000"
        }, {
            "id": 8352,
            "key": "TimeWarpTonic",
            "icon": "perk-images/Styles/Inspiration/TimeWarpTonic/TimeWarpTonic.png",
            "name": "时间扭曲补药",
            "shortDesc": "药水和饼干会立刻提供一部分生命或法力的回复额度，并且你在效果期间会获得<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_MS'>移动速度</lol-uikit-tooltipped-keyword>。",
            "longDesc": "在享用一瓶药水或一个饼干时，会即时提供50%的生命或法力回复额度，但会让该消耗品进入短暂冷却时间。此外，你会在效果期间获得5% 移动速度。<br><br>冷却时间：与消耗品的持续时间相同。"
        }]
    }]
}, {
    "id": 8000,
    "key": "Precision",
    "icon": "perk-images/Styles/7201_Precision.png",
    "name": "精密",
    "slots": [{
        "runes": [{
            "id": 8005,
            "key": "PressTheAttack",
            "icon": "perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png",
            "name": "强攻",
            "shortDesc": "用3次连续的普攻命中一名敌方英雄时，将使其变为易损状态，造成额外伤害并使所受的来自任意来源的伤害变多，持续6秒。",
            "longDesc": "用3次连续的普攻命中一名敌方英雄时，将造成40 - 180的额外<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'><font color='#48C4B7'>自适应伤害</font></lol-uikit-tooltipped-keyword>（基于等级）并使其进入易损状态，让其所受的来自任意来源的伤害提升8 - 12%，持续6秒。"
        }, {
            "id": 8008,
            "key": "LethalTempo",
            "icon": "perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png",
            "name": "致命节奏",
            "shortDesc": "在伤害一名英雄1.5秒后，你会获得大幅攻击速度加成。致命节奏允许你暂时溢出你的攻击速度上限。",
            "longDesc": "在对英雄造成伤害的1.5秒后，提供40 - 110%攻击速度(基于等级)，持续3秒。你可通过不断攻击一名敌方英雄来让这个效果延长至6秒。<br><br>冷却时间：6秒<br><br>致命节奏允许你暂时溢出你的攻击速度上限。"
        }, {
            "id": 8021,
            "key": "FleetFootwork",
            "icon": "perk-images/Styles/Precision/FleetFootwork/FleetFootwork.png",
            "name": "迅捷步法",
            "shortDesc": "攻击和移动会积攒能量层数。在100层时，你的下次攻击会治疗你并提升<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_MS'>移动速度</lol-uikit-tooltipped-keyword>。",
            "longDesc": "攻击和移动会积攒能量层数。在100层时，你的下次攻击会充盈能量。<br><br>充盈能量的攻击会为你治疗3 - 60(+0.3额外攻击力，+0.3法术强度)生命值并为你提供持续1秒的20%移动速度加成。<br><rules><br>远程英雄：来自小兵的治疗效果只有20%效能。</rules>"
        }, {
            "id": 8010,
            "key": "Conqueror",
            "icon": "perk-images/Styles/Precision/Conqueror/Conqueror.png",
            "name": "征服者",
            "shortDesc": "在处于战斗状态4秒后，你对敌方英雄发起的第一次攻击将为你提供攻击力，并将你对该英雄造成伤害值中的一部分转化为真实伤害。",
            "longDesc": "在处于战斗状态4秒后，你对敌方英雄发起的第一次攻击将为你提供6 - 35攻击力，基于等级，持续3秒，在此期间将你对该英雄造成伤害值的20%转化为真实伤害。<br><br><rules>仅限近战：对敌方英雄造成伤害时可刷新这个增益效果。</rules>"
        }]
    }, {
        "runes": [{
            "id": 9101,
            "key": "Overheal",
            "icon": "perk-images/Styles/Precision/Overheal.png",
            "name": "过量治疗",
            "shortDesc": "你身上的溢出治疗效果将变成一个护盾。",
            "longDesc": "你身上的溢出治疗效果会变成一个护盾，护盾生命值最多可达你10%总生命值+10。<br><br>护盾的增加方式为：40%的自我治疗效果溢出，或300%的来自友方的治疗效果溢出。"
        }, {
            "id": 9111,
            "key": "Triumph",
            "icon": "perk-images/Styles/Precision/Triumph.png",
            "name": "凯旋",
            "shortDesc": "<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>参与击杀</lol-uikit-tooltipped-keyword>会回复你12%的已损失生命值并提供额外20金币。",
            "longDesc": "参与击杀会回复12%已损失生命值并提供额外的20金币。<br><br><hr></hr><br><i>“最危险的游戏带来最伟大的荣光。”<br>—诺克萨斯清算人</i>"
        }, {
            "id": 8009,
            "key": "PresenceOfMind",
            "icon": "perk-images/Styles/Precision/PresenceOfMind/PresenceOfMind.png",
            "name": "气定神闲",
            "shortDesc": "参与击杀后回复你20%的最大法力值并返还你终极技能10%的冷却时间。",
            "longDesc": "参与击杀后回复你20%的最大法力值并返还你终极技能10%的冷却时间。"
        }]
    }, {
        "runes": [{
            "id": 9104,
            "key": "LegendAlacrity",
            "icon": "perk-images/Styles/Precision/LegendAlacrity/LegendAlacrity.png",
            "name": "传说：欢欣",
            "shortDesc": "<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>参与击杀</lol-uikit-tooltipped-keyword>敌人将提供永久的<b>攻击速度</b>。",
            "longDesc": "获得3%攻击速度，此外每层<i>传奇</i>效果额外提供1.5%攻击速度(最大层数：10)。<br><br>赚取<i>传奇</i>层数进度的方式为：参与英雄击杀，击杀大型野怪，击杀小兵。"
        }, {
            "id": 9105,
            "key": "LegendTenacity",
            "icon": "perk-images/Styles/Precision/LegendTenacity/LegendTenacity.png",
            "name": "传说：韧性",
            "shortDesc": "<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>参与击杀</lol-uikit-tooltipped-keyword>敌人将提供永久的<b>韧性</b>。",
            "longDesc": "获得5%韧性，此外每层<i>传奇</i>效果额外提供2.5%韧性(最大层数：10)。<br><br>赚取<i>传奇</i>层数进度的方式为：参与英雄击杀，击杀大型野怪，击杀小兵。"
        }, {
            "id": 9103,
            "key": "LegendBloodline",
            "icon": "perk-images/Styles/Precision/LegendBloodline/LegendBloodline.png",
            "name": "传说：血统",
            "shortDesc": "<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Takedown'>参与击杀</lol-uikit-tooltipped-keyword>敌人将提供永久的<b>生命偷取</b>。",
            "longDesc": "每层<i>传奇</i>效果提供0.8%生命偷取(最大层数：10)。<br><br>赚取<i>传奇</i>层数进度的方式为：参与英雄击杀，击杀大型野怪，击杀小兵。"
        }]
    }, {
        "runes": [{
            "id": 8014,
            "key": "CoupDeGrace",
            "icon": "perk-images/Styles/Precision/CoupDeGrace/CoupDeGrace.png",
            "name": "致命一击",
            "shortDesc": "对低生命值的敌方英雄造成更多伤害。",
            "longDesc": "对生命值低于40%的英雄多造成7%伤害。<br><br>此外，参与击杀英雄会提供一个<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>自动适应的</font></lol-uikit-tooltipped-keyword>加成，9攻击力或15法术强度，持续10秒。"
        }, {
            "id": 8017,
            "key": "CutDown",
            "icon": "perk-images/Styles/Precision/CutDown/CutDown.png",
            "name": "砍倒",
            "shortDesc": "对最大生命值多于你的所有敌方英雄造成更多伤害。",
            "longDesc": "对最大生命值比你多150以上的敌方英雄多造成4%伤害，在最大生命值差额为2000时提升到最大值12%。"
        }, {
            "id": 8299,
            "key": "LastStand",
            "icon": "perk-images/Styles/Sorcery/LastStand/LastStand.png",
            "name": "坚毅不倒",
            "shortDesc": "当你的生命值较低时，你的攻击对英雄多造成伤害。",
            "longDesc": "当你的生命值低于60%时，对英雄多造成5% -11%伤害。最大伤害会在30%生命值时提供。"
        }]
    }]
}, {
    "id": 8400,
    "key": "Resolve",
    "icon": "perk-images/Styles/7204_Resolve.png",
    "name": "坚决",
    "slots": [{
        "runes": [{
            "id": 8437,
            "key": "GraspOfTheUndying",
            "icon": "perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png",
            "name": "不灭之握",
            "shortDesc": "在战斗中每过4秒，你对一个英雄发起的下一次普攻将会造成额外魔法伤害、治疗你、并永久提升你的生命值。",
            "longDesc": "在战斗中每过4秒，你对一个英雄发起的下一次普攻将会：<li>造成相当于你4%最大生命值的魔法伤害</li><li>治疗你2%的最大生命值</li><li>你的生命值永久提升5</li><br><rules><i>远程英雄：</i>伤害、治疗效果和提升的永久生命值减少40%。</rules><br>"
        }, {
            "id": 8439,
            "key": "Aftershock",
            "icon": "perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png",
            "name": "余震",
            "shortDesc": "在你<lol-uikit-tooltipped-keyword key=\"LinkTooltip_Description_Immobilize\">定身</lol-uikit-tooltipped-keyword>一个敌方英雄后提供防御属性，稍后会在你的周围造成爆发性的魔法伤害。",
            "longDesc": "在定身住一名敌方英雄后，使你的当前护甲和魔法抗性提升70 - 120，持续2.5秒。随后，在2.5秒后对附近的敌人造成魔法伤害。<br><br>伤害值：10 - 120 (+你3.0%的最大生命值)(+15%额外攻击力)(+10%法术强度)<br>冷却时间：35秒"
        }, {
            "id": 8465,
            "key": "Guardian",
            "icon": "perk-images/Styles/Resolve/Guardian/Guardian.png",
            "name": "守护者",
            "shortDesc": "守护你选作技能目标的友军和那些距离你非常近的友军们。如果你和一个被守护的友军即将承受伤害，那么你们两个都会获得加速效果和一层护盾。",
            "longDesc": "<i>守护</i>距离你175码内的友军，以及被你选为技能目标的友军2.5秒。当<i>守护</i>持续时，如果你和该友军承受伤害，那么你们两个都会获得一层护盾且被加速1.5秒。<br><br>冷却时间：<scaleLevel>70 - 40</scaleLevel>秒<br>护盾生命值：<scaleLevel>70 - 150</scaleLevel> + <scaleAP>0.25%</scaleAP>法术强度 + <scalehealth>12%</scalehealth>额外生命值。<br>加速效果：+20%移动速度。"
        }]
    }, {
        "runes": [{
            "id": 8446,
            "key": "Demolish",
            "icon": "perk-images/Styles/Resolve/Demolish/Demolish.png",
            "name": "爆破",
            "shortDesc": "当位于防御塔附近时，持续充能一次针对防御塔的强力攻击。",
            "longDesc": "当位于防御塔600码内时，在3秒里持续充能一次针对防御塔的强力攻击。充能攻击造成100(+你30%最大生命值)额外伤害。<br><br>冷却时间：45秒"
        }, {
            "id": 8463,
            "key": "FontOfLife",
            "icon": "perk-images/Styles/Resolve/FontOfLife/FontOfLife.png",
            "name": "生命源泉",
            "shortDesc": "对一名敌方英雄施加<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_ImpairMov'>移动受损</lol-uikit-tooltipped-keyword>效果会将其标记。你和友方英雄在攻击被标记的英雄时会获得治疗效果。",
            "longDesc": "对一名敌方英雄施加移动受损效果会将其标记4秒。<br><br>友方英雄在攻击被标记的敌人时，会在2秒里共获得5+你1%最大生命值的治疗效果。"
        }, {
            "id": 8401,
            "key": "ShieldBash",
            "icon": "perk-images/Styles/Resolve/MirrorShell/MirrorShell.png",
            "name": "护盾猛击",
            "shortDesc": "当你获得一个护盾时，你的下次对英雄发起的普攻造成额外<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>自适应</font></lol-uikit-tooltipped-keyword>伤害。",
            "longDesc": "在带有护盾时，基于等级获得<scaleLevel>1 - 10</scaleLevel>护甲和魔法抗性。<br><br>在你获得一个新的护盾时，你的下一次对英雄发起的普攻造成<scaleLevel>4 - 21</scaleLevel><scaleHealth>(+1.5%额外生命值)</scaleHealth><scaleMana>(+8.5%新护盾值)</scaleMana>额外<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>自适应</font></lol-uikit-tooltipped-keyword>伤害。<br><br>在护盾消散后，你最多有2秒的时间来使用这个效果。"
        }]
    }, {
        "runes": [{
            "id": 8429,
            "key": "Conditioning",
            "icon": "perk-images/Styles/Resolve/Conditioning/Conditioning.png",
            "name": "调节",
            "shortDesc": "在10分钟时获得+8护甲和+8魔抗，并使你的护甲和魔抗提升5%。",
            "longDesc": "在10分钟时获得+8护甲和+8魔抗，并使你的护甲和魔抗提升5%。"
        }, {
            "id": 8444,
            "key": "SecondWind",
            "icon": "perk-images/Styles/Resolve/SecondWind/SecondWind.png",
            "name": "复苏之风",
            "shortDesc": "在受到来自一名敌方英雄的伤害后，会持续治疗一些已损失生命值。",
            "longDesc": "在你受到来自一名敌方英雄伤害之后，你会在10秒里持续回复生命值，总额相当于你4%已损失生命值 +6。"
        }, {
            "id": 8473,
            "key": "BonePlating",
            "icon": "perk-images/Styles/Resolve/BonePlating/BonePlating.png",
            "name": "骸骨镀层",
            "shortDesc": "在承受来自一名敌方英雄的伤害后，你所受的下3次来自英雄的技能或攻击将少造成25-50伤害。<br><br>持续时长：1.5秒<br>冷却时间：45秒",
            "longDesc": "在承受来自一名敌方英雄的伤害后，你所受的下3次来自英雄的技能或攻击将少造成25-50伤害。<br><br>持续时长：1.5秒<br>冷却时间：45秒"
        }]
    }, {
        "runes": [{
            "id": 8451,
            "key": "Overgrowth",
            "icon": "perk-images/Styles/Resolve/Overgrowth/Overgrowth.png",
            "name": "过度生长",
            "shortDesc": "在附近有小兵或野怪死亡时获得永久最大生命值。",
            "longDesc": "你附近每有8个野怪或小兵死亡，就会使你永久获得3最大生命值。<br><br>在你吸收了120个野怪或小兵时，提供一个额外的2.5%最大生命值。"
        }, {
            "id": 8453,
            "key": "Revitalize",
            "icon": "perk-images/Styles/Resolve/Revitalize/Revitalize.png",
            "name": "复苏",
            "shortDesc": "你施放或受到的治疗效果和护盾效果会增强5%，并且如果目标的生命值较低，则此数值会提升额外的10%。",
            "longDesc": "你施放或获得的治疗效果和护盾效果会增强5%，并且如果目标的生命值低于40%，则此数值会提升额外的10%。"
        }, {
            "id": 8242,
            "key": "Unflinching",
            "icon": "perk-images/Styles/Sorcery/Unflinching/Unflinching.png",
            "name": "坚定",
            "shortDesc": "在施放一个召唤师技能后，立刻获得幅度更大的韧性和减速抵抗，持续一段不短的时间。此外，你每有一个尚未冷却完毕的召唤师技能，你的韧性和减速抵抗就会获得提升。",
            "longDesc": "在施放一个召唤师技能后，获得15%韧性和15%减速抵抗，持续10秒。此外，你每有一个尚未冷却完毕的召唤师技能，你的韧性和减速抵抗就会提升10%。"
        }]
    }]
}, {
    "id": 8200,
    "key": "Sorcery",
    "icon": "perk-images/Styles/7202_Sorcery.png",
    "name": "巫术",
    "slots": [{
        "runes": [{
            "id": 8214,
            "key": "SummonAery",
            "icon": "perk-images/Styles/Sorcery/SummonAery/SummonAery.png",
            "name": "召唤：艾黎",
            "shortDesc": "你的攻击和技能会向目标派出艾黎，来对敌方英雄造成伤害或为友方英雄套上护盾。",
            "longDesc": "你的攻击和技能会向目标派出艾黎，来对敌方英雄造成伤害或为友方英雄套上护盾。<br><br>伤害：10 - 40（基于等级）+<scaleAP>0.1法术强度</scaleAP>和+<scaleAD>0.15额外攻击力</scaleAD><br>护盾生命值：35 - 80（基于等级）+<scaleAP>0.25法术强度</scaleAP>和+<scaleAD>0.4额外攻击力</scaleAD>)<br><br>艾黎在回到你的位置前无法被再次派出。"
        }, {
            "id": 8229,
            "key": "ArcaneComet",
            "icon": "perk-images/Styles/Sorcery/ArcaneComet/ArcaneComet.png",
            "name": "奥术彗星",
            "shortDesc": "用一个技能对一名英雄造成伤害时，会在其位置处召唤一颗彗星。",
            "longDesc": "用一个技能对一名英雄造成伤害时，会在其位置处召唤一颗彗星，若【奥术彗星】尚未冷却，则改为减少它的剩余冷却时间。<br><br><lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'><font color='#48C4B7'>自适应伤害</font></lol-uikit-tooltipped-keyword>：30 - 100基于等级(<scaleAP>+0.2法术强度</scaleAP>和<scaleAD>+0.35额外攻击力</scaleAD>)<br>冷却时间：20 - 8秒<br><rules><br>冷却缩减：<br>单体目标技能：20%。<br>群体目标技能：10%。<br>持续伤害技能：5%。<br></rules>"
        }, {
            "id": 8230,
            "key": "PhaseRush",
            "icon": "perk-images/Styles/Sorcery/PhaseRush/PhaseRush.png",
            "name": "相位猛冲",
            "shortDesc": "用3次<b>独立</b>的攻击或技能命中一名敌方英雄时，会提供爆发性的<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_MS'>移动速度</lol-uikit-tooltipped-keyword>。",
            "longDesc": "在3秒内用3次攻击或<b>独立</b>的技能命中一名敌方英雄时，会提供25 - 40%移动速度加成和75%减速抵抗（基于等级）。<br><br>持续时间：3秒<br>冷却时间：15秒"
        }]
    }, {
        "runes": [{
            "id": 8224,
            "key": "NullifyingOrb",
            "icon": "perk-images/Styles/Sorcery/NullifyingOrb/Pokeshield.png",
            "name": "无效化之法球",
            "shortDesc": "当你在承受即将使生命值降至危险线的魔法伤害时，提供一个魔法伤害护盾。",
            "longDesc": "在你受到即将使你的生命值降至30%以下的魔法伤害时，为你提供一个魔法伤害护盾，可吸收的魔法伤害值为：40 - 120（基于等级）<scaleAP>+0.1法术强度</scaleAP>和<scaleAD>+0.15额外攻击力</scaleAD>)，持续4秒。<br><br>冷却时间： 60秒"
        }, {
            "id": 8226,
            "key": "ManaflowBand",
            "icon": "perk-images/Styles/Sorcery/ManaflowBand/ManaflowBand.png",
            "name": "法力流系带",
            "shortDesc": "用一个技能命中一名敌方英雄时，可永久使你的最大法力值提升25，提升法力的上限为250法力。<br><br>在达到250额外法力值后，每5秒回复你1%的已损失法力值。\t",
            "longDesc": "用一个技能命中一名敌方英雄时，可永久使你的最大法力值提升25，提升法力的上限为250法力。<br><br>在达到250额外法力值后，每5秒回复你1%的已损失法力值。<br><br>冷却时间：15秒"
        }, {
            "id": 8275,
            "key": "NimbusCloak",
            "icon": "perk-images/Styles/Sorcery/NimbusCloak/6361.png",
            "name": "灵光披风",
            "shortDesc": "在你施放终极技能后的短时间里，为你提供一个不断衰减的移动速度提升，持续2.5秒，并允许你无视单位的碰撞体积。",
            "longDesc": "在你施放终极技能后的短时间里，为你提供一个不断衰减的移动速度提升，持续2.5秒，并允许你无视单位的碰撞体积。<br><br>提升：100移动速度<br>冷却时间：60秒，受益于<b>冷却缩减</b>"
        }]
    }, {
        "runes": [{
            "id": 8210,
            "key": "Transcendence",
            "icon": "perk-images/Styles/Sorcery/Transcendence/Transcendence.png",
            "name": "超然",
            "shortDesc": "在你到达10级时获得10%<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_CDR'>冷却缩减</lol-uikit-tooltipped-keyword>。溢出的冷却缩减会转化为法术强度或攻击力，<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'>自动适应</lol-uikit-tooltipped-keyword>。",
            "longDesc": "在你到达10级时获得10%冷却缩减。<br><br>每百分比溢出的冷却缩减会转化为一个<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>自动适应的</font></lol-uikit-tooltipped-keyword>加成，1.2攻击力或2法术强度。"
        }, {
            "id": 8234,
            "key": "Celerity",
            "icon": "perk-images/Styles/Sorcery/Celerity/CelerityTemp.png",
            "name": "迅捷",
            "shortDesc": "你身上的所有移动速度加成效率多8%。",
            "longDesc": "你身上的所有移动速度加成效率多8%。"
        }, {
            "id": 8233,
            "key": "AbsoluteFocus",
            "icon": "perk-images/Styles/Sorcery/AbsoluteFocus/AbsoluteFocus.png",
            "name": "绝对专注",
            "shortDesc": "在高于70%生命值时，获得额外的<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_AdaptiveDmg'>自适应伤害</lol-uikit-tooltipped-keyword>。",
            "longDesc": "在高于70%生命值时，获得一个<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>自动适应的</font></lol-uikit-tooltipped-keyword>加成，24攻击力或40法术强度(基于等级)<br><br>在1级时提供3攻击力或5法术强度。"
        }]
    }, {
        "runes": [{
            "id": 8237,
            "key": "Scorch",
            "icon": "perk-images/Styles/Sorcery/Scorch/Scorch.png",
            "name": "焦灼",
            "shortDesc": "你每10秒内命中的第一个技能会灼烧英雄。",
            "longDesc": "你的下一个技能在命中时会使敌方英雄燃烧，在1秒后造成10 - 30额外魔法伤害（基于等级）。<br><br>冷却时间：10秒"
        }, {
            "id": 8232,
            "key": "Waterwalking",
            "icon": "perk-images/Styles/Sorcery/Waterwalking/Waterwalking.png",
            "name": "水上行走",
            "shortDesc": "在河道时提供<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_MS'>移动速度</lol-uikit-tooltipped-keyword>和法术强度或攻击力，<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'>自动适应</lol-uikit-tooltipped-keyword>。",
            "longDesc": "在河道时，获得25移动速度并获得一个<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>自动适应的</font></lol-uikit-tooltipped-keyword>加成，18攻击力或30法术强度(基于等级)。<br><br><hr></hr><br><i>愿你如奔腾的河流一样迅捷，如受惊的峡谷迅捷蟹一样机敏</i><br>"
        }, {
            "id": 8236,
            "key": "GatheringStorm",
            "icon": "perk-images/Styles/Sorcery/GatheringStorm/GatheringStorm.png",
            "name": "风暴聚集",
            "shortDesc": "随着游戏的进程而获得数额不断提升的攻击力或法术强度，<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'>自动适应</lol-uikit-tooltipped-keyword>。",
            "longDesc": "每10分钟获得法术强度或攻击力，<lol-uikit-tooltipped-keyword key='LinkTooltip_Description_Adaptive'><font color='#48C4B7'>自动适应</font></lol-uikit-tooltipped-keyword>。<br><br><i>10分钟</i>: + 8法术强度 或 5攻击力<br><i>20分钟</i>: + 24法术强度 或 14攻击力<br><i>30分钟</i>: + 48法术强度 或 29攻击力<br><i>40分钟</i>: + 80法术强度 或 48攻击力<br><i>50分钟</i>: + 120法术强度 或 72攻击力<br><i>60分钟</i>: + 168法术强度 或 101攻击力<br>以此类推……"
        }]
    }]
}];

module.exports = {
    rune
};