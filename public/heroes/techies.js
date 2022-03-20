if (detail === undefined) var detail = {};
detail.techies = {
  result: {
    data: {
      heroes: [
        {
          id: 105,
          name: "npc_dota_hero_techies",
          order_id: 108,
          name_loc: "Techies",
          bio_loc:
            "Trong những giai thoại của xứ Dredger's Bight, sự phá phách của Techies luôn đứng đầu danh sách những điều bị xỉ vả thậm tệ nhất. Tuy nhiên, Dredger's Blight nay đã không còn tồn tại. Cả xứ Toterin và thị trấn Trapper cũng chung số phận. Thực tế là, nếu có một ai đó lật lại những trang sử về sự phá hoại của Techies, sẽ không khó để nhận thấy sau khi có sự xuất hiện của Techies, các thị trấn và thành phố đều có xu hướng bị xóa sổ.\r\n<br><br>Giống như bao thảm họa không thể tránh khỏi do Techies gây ra, Cái kết của Dredger's Bight bắt đầu với một phát minh. Được giao nhiệm vụ tìm ra cách kích nổ an toàn những khối mìn trong hầm mỏ bên dưới thành phố, ba thiên tài chế tạo bom Squee, Spleen, và Spoon tạo ra thiết bị kì quặc nhất từ trước đến này: một cái nút bấm, khi được sử dụng, sẽ kích hoạt một thiết bị từ xa để đánh lửa cho ngòi nổ.\r\n<br><br>Háo hức thử nghiệm phát minh mới của mình, bộ ba xếp chồng chồng lớp lớp những thùng chứa đầy thuốc nổ, lấp kín mọi ngóc ngách của cái xưởng nhỏ bé bằng một đống bom điều khiển từ xa. Từ kho dự trữ này, chúng lấy ra một trái bom, đem chôn tại một cánh đồng xa. Sau khi đã nằm dưới hào bảo vệ, Spleen nhấn nút kích nổ. Một khắc trôi qua, mọi thứ vẫn hoàn toàn im ắng. Bối rối, hắn ta đứng lên, nhấn nút lần này đến lần khác cho đến khi một vụ nổ xảy ra, xé toạc một lỗ trên mặt đất. Phấn chấn, Squee và Spleen vừa định quay về nhà thì một đợt sóng âm và xung lực hất tung chúng.\r\n<br><br>Bộ ba ngơ ngác, tai chúng vẫn còn đang ù đi bởi vụ nổ bất ngờ, qua lớp bụi đen, chúng thấy khói bốc lên từ đống đổ nát nơi đã từng là ngôi xưởng nhỏ. Gỗ và đá rơi rụng xuống miệng hố khổng lồ đang ngày một mở rộng. Cả Dredger's Bight rung lên và bắt đầu trượt dần xuống hầm mỏ bên dưới trong khi cư dân thành phố hốt hoảng chạy trốn.\r\n<br><br>Ngồi bên rìa của cái hố nơi từng là nhà của chúng, bộ ba cười khúc khích, chẳng để tâm tới sự khinh miệt của những người hàng xóm, và phởn chí bởi tiềm năng của mình. Trong đầu chúng bây giờ chỉ văng vẳng một câu hỏi: Làm thế nào để tạo ra một vụ nổ lớn hơn thế này?",
          hype_loc:
            "For the Techies, battle is a matter of mischief. Giggling while they <b>lob sticky bombs</b> around the battlefield, their <b>hidden explosive mines, disarming zaps, and reckless blast-off attacks</b> are enough to leave most enemies dead. Or at least enraged. Often both.",
          npe_desc_loc:
            "Surprises enemies with invisible landmines and explosive attacks",
          str_base: 19,
          str_gain: 2.5,
          agi_base: 14,
          agi_gain: 1.2999999523162842,
          int_base: 25,
          int_gain: 3,
          primary_attr: 2,
          complexity: 2,
          attack_capability: 2,
          role_levels: [0, 0, 3, 1, 0, 0, 0, 0, 0],
          damage_min: 46,
          damage_max: 48,
          attack_rate: 1.7000000476837158,
          attack_range: 700,
          projectile_speed: 900,
          armor: 5.333333492279053,
          magic_resistance: 25,
          movement_speed: 300,
          turn_rate: 0.6000000238418579,
          sight_range_day: 1800,
          sight_range_night: 800,
          max_health: 580,
          health_regen: 2.1500000953674316,
          max_mana: 375,
          mana_regen: 2.25,
          abilities: [
            {
              id: 879,
              name: "techies_sticky_bomb",
              name_loc: "Sticky Bomb",
              desc_loc:
                "Lobs a Sticky Bomb towards the target area. If it lands next to an enemy hero, the bomb will stick to it, slowing its movement speed. After a few seconds the bomb will explode, dealing damage in an area around the detonation and applying a secondary slow for %secondary_slow_duration% seconds.",
              lore_loc: "Such revolutionary brilliance was meant to be shared.",
              notes_loc: [],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "48",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 2,
              immunity: 3,
              dispellable: 0,
              max_level: 4,
              cast_ranges: [1000],
              cast_points: [0.20000000298023224],
              channel_times: [0, 0, 0, 0],
              cooldowns: [12, 10, 8, 6],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [100, 115, 130, 145],
              gold_costs: [],
              special_values: [
                {
                  name: "duration",
                  values_float: [1.2000000476837158],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "countdown",
                  values_float: [2],
                  is_percentage: false,
                  heading_loc: "EXPLOSION DELAY:",
                  bonuses: [],
                },
                {
                  name: "radius",
                  values_float: [250],
                  is_percentage: false,
                  heading_loc: "STICK RADIUS:",
                  bonuses: [
                    {
                      name: "special_bonus_unique_techies_2",
                      value: 125,
                      operation: 0,
                    },
                  ],
                },
                {
                  name: "damage",
                  values_float: [90, 180, 270, 360],
                  is_percentage: false,
                  heading_loc: "DAMAGE:",
                  bonuses: [],
                },
                {
                  name: "slow",
                  values_float: [25, 35, 45, 55],
                  is_percentage: true,
                  heading_loc: "MOVEMENT SLOW:",
                  bonuses: [],
                },
                {
                  name: "secondary_slow",
                  values_float: [15, 25, 35, 45],
                  is_percentage: true,
                  heading_loc: "SECONDARY MOVEMENT SLOW:",
                  bonuses: [],
                },
                {
                  name: "secondary_slow_duration",
                  values_float: [2],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "explosion_radius",
                  values_float: [300],
                  is_percentage: false,
                  heading_loc: "EXPLOSION RADIUS:",
                  bonuses: [
                    {
                      name: "special_bonus_unique_techies_2",
                      value: 125,
                      operation: 0,
                    },
                  ],
                },
                {
                  name: "speed",
                  values_float: [500],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "acceleration",
                  values_float: [2000],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "pre_chase_time",
                  values_float: [0.10000000149011612],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCastRange",
                  values_float: [1000],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCastPoint",
                  values_float: [0.20000000298023224],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityManaCost",
                  values_float: [100, 115, 130, 145],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [12, 10, 8, 6],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
              ],
              is_item: false,
              ability_has_scepter: false,
              ability_has_shard: false,
              ability_is_granted_by_scepter: false,
              ability_is_granted_by_shard: false,
              item_cost: 0,
              item_initial_charges: 0,
              item_neutral_tier: 4294967295,
              item_stock_max: 0,
              item_stock_time: 0,
              item_quality: 0,
            },
            {
              id: 886,
              name: "techies_reactive_tazer",
              name_loc: "Reactive Tazer",
              desc_loc:
                "Techies trigger an electric charge giving them bonus movement speed for a short period of time. Enemies attacking Techies are temporarily disarmed. At the end of the effect, the charge explodes, disarming all enemies within the radius.",
              lore_loc:
                "A steady bomb hand prefers an abundance of personal space.",
              notes_loc: [],
              shard_loc: "",
              scepter_loc:
                "Reactive Tazer can be cast on allies and deals %scepter_damage% damage on detonation.",
              type: 0,
              behavior: "4",
              target_team: 1,
              target_type: 3,
              flags: 0,
              damage: 2,
              immunity: 0,
              dispellable: 0,
              max_level: 4,
              cast_ranges: [500],
              cast_points: [0.10000000149011612],
              channel_times: [0, 0, 0, 0],
              cooldowns: [28, 24, 20, 16],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [60],
              gold_costs: [],
              special_values: [
                {
                  name: "duration",
                  values_float: [6],
                  is_percentage: false,
                  heading_loc: "BUFF DURATION:",
                  bonuses: [],
                },
                {
                  name: "disarm_duration",
                  values_float: [
                    2.4000000953674316, 2.700000047683716, 3, 3.299999952316284,
                  ],
                  is_percentage: false,
                  heading_loc: "DISARM DURATION:",
                  bonuses: [],
                },
                {
                  name: "bonus_ms",
                  values_float: [15, 20, 25, 30],
                  is_percentage: true,
                  heading_loc: "MOVEMENT BONUS:",
                  bonuses: [],
                },
                {
                  name: "stun_radius",
                  values_float: [400],
                  is_percentage: false,
                  heading_loc: "EXPLOSION RADIUS:",
                  bonuses: [],
                },
                {
                  name: "scepter_damage",
                  values_float: [300],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCastRange",
                  values_float: [500],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCastPoint",
                  values_float: [0.10000000149011612],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityManaCost",
                  values_float: [60],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [28, 24, 20, 16],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
              ],
              is_item: false,
              ability_has_scepter: true,
              ability_has_shard: false,
              ability_is_granted_by_scepter: false,
              ability_is_granted_by_shard: false,
              item_cost: 0,
              item_initial_charges: 0,
              item_neutral_tier: 4294967295,
              item_stock_max: 0,
              item_stock_time: 0,
              item_quality: 0,
            },
            {
              id: 5601,
              name: "techies_suicide",
              name_loc: "Blast Off!",
              desc_loc:
                "Techies hurtle themselves into the enemy's midst, detonating charges upon impact which deal massive area of effect damage and silence enemies. Upon landing, the assault deals Techies non-lethal damage equal to a percentage of their current health.",
              lore_loc: "Anh ơi mình đi đâu thế?",
              notes_loc: [
                "The self-damage Techies receive from this blast is non-lethal.",
                "This ability destroys trees.",
              ],
              shard_loc:
                "Tăng 300 tầm thi triển cho Blast Off! và làm choáng 1.75 giây cho kẻ địch bị ảnh hưởng.",
              scepter_loc: "",
              type: 0,
              behavior: "67633200",
              target_team: 2,
              target_type: 0,
              flags: 0,
              damage: 2,
              immunity: 4,
              dispellable: 2,
              max_level: 4,
              cast_ranges: [1000],
              cast_points: [1],
              channel_times: [0, 0, 0, 0],
              cooldowns: [39, 36, 33, 30],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [100, 125, 150, 175],
              gold_costs: [],
              special_values: [
                {
                  name: "radius",
                  values_float: [400],
                  is_percentage: false,
                  heading_loc: "BÁN KÍNH:",
                  bonuses: [],
                },
                {
                  name: "damage",
                  values_float: [200, 300, 400, 500],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG TỔNG:",
                  bonuses: [],
                },
                {
                  name: "silence_duration",
                  values_float: [4, 5, 6, 7],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN KHÓA PHÉP:",
                  bonuses: [],
                },
                {
                  name: "hp_cost",
                  values_float: [35, 30, 25, 20],
                  is_percentage: true,
                  heading_loc: "CURRENT HP SELF DAMAGE:",
                  bonuses: [],
                },
                {
                  name: "duration",
                  values_float: [0.75],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCastRange",
                  values_float: [1000],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCastPoint",
                  values_float: [1],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityManaCost",
                  values_float: [100, 125, 150, 175],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [39, 36, 33, 30],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
              ],
              is_item: false,
              ability_has_scepter: false,
              ability_has_shard: true,
              ability_is_granted_by_scepter: false,
              ability_is_granted_by_shard: false,
              item_cost: 0,
              item_initial_charges: 0,
              item_neutral_tier: 4294967295,
              item_stock_max: 0,
              item_stock_time: 0,
              item_quality: 0,
            },
            {
              id: 5644,
              name: "techies_minefield_sign",
              name_loc: "Minefield Sign",
              desc_loc:
                "Cắm một biển cảnh báo bãi mìn để ra đòn tâm lý với đối phương. Cùng một lúc chỉ được phép có một biển. Hư sau %lifetime% giây.",
              lore_loc: "Cẩn thận dẫm mìn!",
              notes_loc: [],
              shard_loc: "",
              scepter_loc:
                "Cho phép Minefield Sign ẩn những Proximity Mine, Stasis Trap và Remote Mine trong một bán kính nhỏ quanh nó khỏi khả năng nhìn tàng hình.",
              type: 0,
              behavior: "8589934640",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 0,
              immunity: 0,
              dispellable: 0,
              max_level: 1,
              cast_ranges: [10],
              cast_points: [0, 0, 0, 0],
              channel_times: [0, 0, 0, 0],
              cooldowns: [360],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [0],
              gold_costs: [],
              special_values: [
                {
                  name: "aura_radius",
                  values_float: [125],
                  is_percentage: false,
                  heading_loc: "BÁN KÍNH HIỆU ỨNG:",
                  bonuses: [],
                },
                {
                  name: "lifetime",
                  values_float: [180],
                  is_percentage: false,
                  heading_loc: "HẠN SỬ DỤNG:",
                  bonuses: [],
                },
                {
                  name: "AbilityCastRange",
                  values_float: [10],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [360],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
              ],
              is_item: false,
              ability_has_scepter: true,
              ability_has_shard: false,
              ability_is_granted_by_scepter: false,
              ability_is_granted_by_shard: false,
              item_cost: 0,
              item_initial_charges: 0,
              item_neutral_tier: 4294967295,
              item_stock_max: 0,
              item_stock_time: 0,
              item_quality: 0,
            },
            {
              id: 5599,
              name: "techies_land_mines",
              name_loc: "Proximity Mines",
              desc_loc:
                "Plant an invisible mine that cannot be detected by True Sight, but is visible if an enemy is within the active %radius% AoE of the mine. Mines detonate if an enemy is standing within the active AoE for %proximity_threshold% seconds dealing damage and temporarily reducing the enemy's Magic Resistance. The explosion deals full damage if the target is within %min_distance% radius and decreases up to %outer_damage%%% on the edge. Deals %building_damage_pct%%% damage to buildings.",
              lore_loc: "Tai ương của Toterin!",
              notes_loc: [
                "Cannot be placed within %placement_radius% AoE of another Proximity Mine.",
                "Các Proximity Mine không thể chặn việc tạo ra quái từ bãi quái.",
                "Mìn tồn tại mãi mãi tới khi phát nổ hoặc bị phá.",
                "Những kẻ tàng hình vẫn kích nổ mìn được.",
                "Một vài kẻ đang bay sẽ không kích nổ mìn.",
                "Tướng địch phá mìn sẽ được thưởng 30 vàng.",
                "Mines damage and debuff pierce spell immunity.",
              ],
              shard_loc: "",
              scepter_loc: "",
              type: 1,
              behavior: "48",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 2,
              immunity: 4,
              dispellable: 0,
              max_level: 3,
              cast_ranges: [400],
              cast_points: [0, 0, 0, 0],
              channel_times: [0, 0, 0, 0],
              cooldowns: [0],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [110, 140, 170],
              gold_costs: [],
              special_values: [
                {
                  name: "radius",
                  values_float: [500],
                  is_percentage: false,
                  heading_loc: "BÁN KÍNH:",
                  bonuses: [],
                },
                {
                  name: "proximity_threshold",
                  values_float: [1],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "damage",
                  values_float: [400, 575, 750],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG:",
                  bonuses: [],
                },
                {
                  name: "building_damage_pct",
                  values_float: [30],
                  is_percentage: true,
                  heading_loc: "SÁT THƯƠNG CÔNG TRÌNH:",
                  bonuses: [],
                },
                {
                  name: "activation_delay",
                  values_float: [1],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN KÍCH NỔ:",
                  bonuses: [
                    {
                      name: "special_bonus_unique_techies_4",
                      value: 0.800000011920929,
                      operation: 2,
                    },
                  ],
                },
                {
                  name: "cast_range_scepter_bonus",
                  values_float: [300],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "outer_damage",
                  values_float: [50],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "min_distance",
                  values_float: [150],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "placement_radius",
                  values_float: [350],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "mres_reduction",
                  values_float: [10, 15, 20],
                  is_percentage: true,
                  heading_loc: "MAGIC RESISTANCE REDUCTION:",
                  bonuses: [],
                },
                {
                  name: "burn_duration",
                  values_float: [5],
                  is_percentage: false,
                  heading_loc: "DEBUFF DURATION:",
                  bonuses: [],
                },
                {
                  name: "AbilityCastRange",
                  values_float: [400],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCharges",
                  values_float: [3],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityChargeRestoreTime",
                  values_float: [19, 17, 15],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityManaCost",
                  values_float: [110, 140, 170],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
              ],
              is_item: false,
              ability_has_scepter: true,
              ability_has_shard: false,
              ability_is_granted_by_scepter: false,
              ability_is_granted_by_shard: false,
              item_cost: 0,
              item_initial_charges: 0,
              item_neutral_tier: 4294967295,
              item_stock_max: 0,
              item_stock_time: 0,
              item_quality: 0,
            },
          ],
          talents: [
            {
              id: 6000,
              name: "special_bonus_magic_resistance_20",
              name_loc: "+{s:value}% kháng phép",
              desc_loc: "",
              lore_loc: "",
              notes_loc: [],
              shard_loc: "",
              scepter_loc: "",
              type: 2,
              behavior: "2",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 0,
              immunity: 0,
              dispellable: 0,
              max_level: 4,
              cast_ranges: [0],
              cast_points: [0, 0, 0, 0],
              channel_times: [0, 0, 0, 0],
              cooldowns: [0, 0, 0, 0],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [0, 0, 0, 0],
              gold_costs: [],
              special_values: [
                {
                  name: "value",
                  values_float: [20],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
              ],
              is_item: false,
              ability_has_scepter: false,
              ability_has_shard: false,
              ability_is_granted_by_scepter: false,
              ability_is_granted_by_shard: false,
              item_cost: 0,
              item_initial_charges: 0,
              item_neutral_tier: 4294967295,
              item_stock_max: 0,
              item_stock_time: 0,
              item_quality: 0,
            },
            {
              id: 6997,
              name: "special_bonus_unique_techies_3",
              name_loc: "-{s:value} giây hồi Proximity Mines",
              desc_loc: "",
              lore_loc: "",
              notes_loc: [],
              shard_loc: "",
              scepter_loc: "",
              type: 2,
              behavior: "2",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 0,
              immunity: 0,
              dispellable: 0,
              max_level: 4,
              cast_ranges: [0],
              cast_points: [0, 0, 0, 0],
              channel_times: [0, 0, 0, 0],
              cooldowns: [0, 0, 0, 0],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [0, 0, 0, 0],
              gold_costs: [],
              special_values: [
                {
                  name: "value",
                  values_float: [3],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
              ],
              is_item: false,
              ability_has_scepter: false,
              ability_has_shard: false,
              ability_is_granted_by_scepter: false,
              ability_is_granted_by_shard: false,
              item_cost: 0,
              item_initial_charges: 0,
              item_neutral_tier: 4294967295,
              item_stock_max: 0,
              item_stock_time: 0,
              item_quality: 0,
            },
            {
              id: 6282,
              name: "special_bonus_unique_techies",
              name_loc: "+{s:value} sát thương Blast Off!",
              desc_loc: "",
              lore_loc: "",
              notes_loc: [],
              shard_loc: "",
              scepter_loc: "",
              type: 2,
              behavior: "2",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 0,
              immunity: 0,
              dispellable: 0,
              max_level: 4,
              cast_ranges: [0],
              cast_points: [0, 0, 0, 0],
              channel_times: [0, 0, 0, 0],
              cooldowns: [0, 0, 0, 0],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [0, 0, 0, 0],
              gold_costs: [],
              special_values: [
                {
                  name: "value",
                  values_float: [200],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
              ],
              is_item: false,
              ability_has_scepter: false,
              ability_has_shard: false,
              ability_is_granted_by_scepter: false,
              ability_is_granted_by_shard: false,
              item_cost: 0,
              item_initial_charges: 0,
              item_neutral_tier: 4294967295,
              item_stock_max: 0,
              item_stock_time: 0,
              item_quality: 0,
            },
            {
              id: 6160,
              name: "special_bonus_mp_regen_3",
              name_loc: "+{s:value} mana hồi mỗi giây",
              desc_loc: "",
              lore_loc: "",
              notes_loc: [],
              shard_loc: "",
              scepter_loc: "",
              type: 2,
              behavior: "2",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 0,
              immunity: 0,
              dispellable: 0,
              max_level: 4,
              cast_ranges: [0],
              cast_points: [0, 0, 0, 0],
              channel_times: [0, 0, 0, 0],
              cooldowns: [0, 0, 0, 0],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [0, 0, 0, 0],
              gold_costs: [],
              special_values: [
                {
                  name: "value",
                  values_float: [3],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
              ],
              is_item: false,
              ability_has_scepter: false,
              ability_has_shard: false,
              ability_is_granted_by_scepter: false,
              ability_is_granted_by_shard: false,
              item_cost: 0,
              item_initial_charges: 0,
              item_neutral_tier: 4294967295,
              item_stock_max: 0,
              item_stock_time: 0,
              item_quality: 0,
            },
            {
              id: 6552,
              name: "special_bonus_unique_techies_2",
              name_loc: "+{s:bonus_radius} Sticky Bomb Latch/Explosion Radius",
              desc_loc: "",
              lore_loc: "",
              notes_loc: [],
              shard_loc: "",
              scepter_loc: "",
              type: 2,
              behavior: "2",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 0,
              immunity: 0,
              dispellable: 0,
              max_level: 4,
              cast_ranges: [0],
              cast_points: [0, 0, 0, 0],
              channel_times: [0, 0, 0, 0],
              cooldowns: [0, 0, 0, 0],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [0, 0, 0, 0],
              gold_costs: [],
              special_values: [],
              is_item: false,
              ability_has_scepter: false,
              ability_has_shard: false,
              ability_is_granted_by_scepter: false,
              ability_is_granted_by_shard: false,
              item_cost: 0,
              item_initial_charges: 0,
              item_neutral_tier: 4294967295,
              item_stock_max: 0,
              item_stock_time: 0,
              item_quality: 0,
            },
            {
              id: 412,
              name: "special_bonus_unique_techies_5",
              name_loc: "-{s:value} giây hồi Blast Off!",
              desc_loc: "",
              lore_loc: "",
              notes_loc: [],
              shard_loc: "",
              scepter_loc: "",
              type: 2,
              behavior: "2",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 0,
              immunity: 0,
              dispellable: 0,
              max_level: 4,
              cast_ranges: [0],
              cast_points: [0, 0, 0, 0],
              channel_times: [0, 0, 0, 0],
              cooldowns: [0, 0, 0, 0],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [0, 0, 0, 0],
              gold_costs: [],
              special_values: [
                {
                  name: "value",
                  values_float: [15],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
              ],
              is_item: false,
              ability_has_scepter: false,
              ability_has_shard: false,
              ability_is_granted_by_scepter: false,
              ability_is_granted_by_shard: false,
              item_cost: 0,
              item_initial_charges: 0,
              item_neutral_tier: 4294967295,
              item_stock_max: 0,
              item_stock_time: 0,
              item_quality: 0,
            },
            {
              id: 703,
              name: "special_bonus_attack_damage_252",
              name_loc: "+{s:value} sát thương",
              desc_loc: "",
              lore_loc: "",
              notes_loc: [],
              shard_loc: "",
              scepter_loc: "",
              type: 2,
              behavior: "2",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 0,
              immunity: 0,
              dispellable: 0,
              max_level: 4,
              cast_ranges: [0],
              cast_points: [0, 0, 0, 0],
              channel_times: [0, 0, 0, 0],
              cooldowns: [0, 0, 0, 0],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [0, 0, 0, 0],
              gold_costs: [],
              special_values: [
                {
                  name: "value",
                  values_float: [252],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
              ],
              is_item: false,
              ability_has_scepter: false,
              ability_has_shard: false,
              ability_is_granted_by_scepter: false,
              ability_is_granted_by_shard: false,
              item_cost: 0,
              item_initial_charges: 0,
              item_neutral_tier: 4294967295,
              item_stock_max: 0,
              item_stock_time: 0,
              item_quality: 0,
            },
            {
              id: 6998,
              name: "special_bonus_unique_techies_4",
              name_loc:
                "-{s:bonus_activation_delay}s Proximity Mines Activation Delay",
              desc_loc: "",
              lore_loc: "",
              notes_loc: [],
              shard_loc: "",
              scepter_loc: "",
              type: 2,
              behavior: "2",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 0,
              immunity: 0,
              dispellable: 0,
              max_level: 4,
              cast_ranges: [0],
              cast_points: [0, 0, 0, 0],
              channel_times: [0, 0, 0, 0],
              cooldowns: [0, 0, 0, 0],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [0, 0, 0, 0],
              gold_costs: [],
              special_values: [],
              is_item: false,
              ability_has_scepter: false,
              ability_has_shard: false,
              ability_is_granted_by_scepter: false,
              ability_is_granted_by_shard: false,
              item_cost: 0,
              item_initial_charges: 0,
              item_neutral_tier: 4294967295,
              item_stock_max: 0,
              item_stock_time: 0,
              item_quality: 0,
            },
          ],
        },
      ],
    },
    status: 1,
  },
};