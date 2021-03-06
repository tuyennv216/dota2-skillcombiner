if (detail === undefined) var detail = {};
detail.broodmother = {
  result: {
    data: {
      heroes: [
        {
          id: 61,
          name: "npc_dota_hero_broodmother",
          order_id: 53,
          name_loc: "Broodmother",
          bio_loc:
            "Suốt nhiều thế kỷ, Black Arachnia - Broodmother ẩn nấp trong những hang động dung nham tối tăm bên dưới miệng núi lửa Pyrotheos còn âm ỉ, nuôi dưỡng hàng triệu nhện con trước khi đưa chúng ra thế giới bên trên săn mồi. Vào một thời kỳ về sau, tên Tể tướng Tham lam, Ptholopthales, đã dựng lên một đài chiêm tinh Ziggurat đá nam châm trên sườn ngọn núi lửa đã tắt, biết chắc rằng bất cứ tên cướp nào dám nhòm ngó khối tài sản từ tính của hắn, đều sẽ phải toàn mạng qua được những tử lộ nhung nhúc lũ nhện.\r\n<br><br>Sau nhiều thiên niên kỷ an bình, Black Arachnia cảm nhận được sự quấy nhiễu của bọn trộm, những hiệp sĩ gan góc và cả lũ quý tộc trẻ--tất cả chắc chắn đều rất thơm ngon, nhưng chúng sẽ gây hại cho môi trường nuôi dưỡng những đứa con thơ dại của mụ. Mệt mỏi vì các cuộc xâm lấn, ả đã ghé thăm Ptholopthales; và khi hắn không muốn thỏa hiệp, mụ ta đã dùng tơ trói kín tên Tể tướng và đặt sang một bên để làm món chính cho bữa tiệc sinh nhật đặc biệt của mình.\r\n<br><br>Không may thay, sự vắng mặt của chủ nhân đài chiêm tinh chỉ càng thêm kích động những kẻ xâm nhập mới. Khi một đứa con mới sinh của mụ bị dẫm chết bởi một gã thám hiểm vụng về, mụ đã hết kiên nhẫn. Broodmother hướng lên mặt đất, tuyên bố rằng sẽ tiêu diệt mọi kẻ xâm lăng trên thế giới này, đến những tên anh hùng cuối cùng nếu cần thiết, cho đến khi chắc chắn rằng nơi nuôi dưỡng những đứa con yêu dấu của mụ được an toàn trở lại.",
          hype_loc:
            "Gliding along her webs, Broodmother births an <b>army of spiders</b> to lead her team's forces toward the enemy base. As prey wanders near, she joins her children and attacks, <b>slowing foes</b> with incapacitating bites as she indulges her insatiable hunger.",
          npe_desc_loc: "Dùng quân đàn nhện con để đi săn",
          str_base: 18,
          str_gain: 3.200000047683716,
          agi_base: 19,
          agi_gain: 3.4000000953674316,
          int_base: 18,
          int_gain: 2,
          primary_attr: 1,
          complexity: 2,
          attack_capability: 1,
          role_levels: [1, 0, 1, 0, 0, 0, 3, 3, 0],
          damage_min: 48,
          damage_max: 54,
          attack_rate: 1.7000000476837158,
          attack_range: 150,
          projectile_speed: 900,
          armor: 3.1666667461395264,
          magic_resistance: 25,
          movement_speed: 280,
          turn_rate: 0.6000000238418579,
          sight_range_day: 1800,
          sight_range_night: 800,
          max_health: 560,
          health_regen: 2.0500001907348633,
          max_mana: 291,
          mana_regen: 0.9000000357627869,
          abilities: [
            {
              id: 5282,
              name: "broodmother_insatiable_hunger",
              name_loc: "Insatiable Hunger",
              desc_loc:
                "Cơn khát máu trỗi dậy, đòn đánh của Broodmother được tăng sát thương và có khả năng hút máu.",
              lore_loc:
                "Hầu hết các con mồi đều được bọc trong kén tơ để riêng cho con của ả, còn các anh hùng đi lạc sẽ phải nằm lại trong dạ dày của Broodmother.",
              notes_loc: ["Cộng dồn hoàn toàn với các nguồn hút máu khác."],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "4",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 0,
              immunity: 0,
              dispellable: 3,
              max_level: 4,
              cast_ranges: [0],
              cast_points: [
                0.20000000298023224, 0.20000000298023224, 0.20000000298023224,
              ],
              channel_times: [0, 0, 0, 0],
              cooldowns: [40, 35, 30, 25],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [50, 60, 70, 80],
              gold_costs: [],
              special_values: [
                {
                  name: "bonus_damage",
                  values_float: [35, 45, 55, 65],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG TĂNG THÊM:",
                  bonuses: [
                    {
                      name: "special_bonus_unique_broodmother_1",
                      value: 50,
                      operation: 0,
                    },
                  ],
                },
                {
                  name: "lifesteal_pct",
                  values_float: [40, 60, 80, 100],
                  is_percentage: true,
                  heading_loc: "HÚT MÁU:",
                  bonuses: [
                    {
                      name: "special_bonus_unique_broodmother_1",
                      value: 50,
                      operation: 0,
                    },
                  ],
                },
                {
                  name: "duration",
                  values_float: [8, 10, 12, 14],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN:",
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
                  values_float: [50, 60, 70, 80],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [40, 35, 30, 25],
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
              id: 5280,
              name: "broodmother_spin_web",
              name_loc: "Spin Web",
              desc_loc:
                "Spins a large web that grants Broodmother a passive movement speed increase, and boosts regeneration while in its vicinity, as well as giving free movement. Spin Web charges restore every %abilitychargerestoretime% seconds, with a max of %AbilityCharges% charges. Spin Web can be cast from anywhere as long as the new web touches an existing web. Webs never expire, and can be manually destroyed. When the maximum limit of webs is exceeded, the oldest web disappears. The movement bonus is proportional to the unit's HP",
              lore_loc:
                "Weaving a bed of silken fibers, Arachnia's web both protects her and her offspring, as well as giving advancing opponents a sense of foreboding.",
              notes_loc: [
                "Có tác dụng lên cả nhện con và nhện cháu.",
                "Hiệu ứng tăng tốc độ chạy đạt hiệu quả tối đa khi có 100% máu, và còn 0% khi còn 1 máu",
              ],
              shard_loc: "",
              scepter_loc: "Tăng tốc độ chạy, và tăng số mạng nhện tối đa",
              type: 0,
              behavior: "48",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 0,
              immunity: 0,
              dispellable: 3,
              max_level: 4,
              cast_ranges: [1000],
              cast_points: [0.4000000059604645],
              channel_times: [0, 0, 0, 0],
              cooldowns: [0],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [50],
              gold_costs: [],
              special_values: [
                {
                  name: "radius",
                  values_float: [900],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "count",
                  values_float: [3, 5, 7, 9],
                  is_percentage: false,
                  heading_loc: "MAX SIMULTANEOUS WEBS:",
                  bonuses: [
                    {
                      name: "special_bonus_unique_broodmother_6",
                      value: 3,
                      operation: 0,
                    },
                  ],
                },
                {
                  name: "heath_regen",
                  values_float: [3, 5, 7, 9],
                  is_percentage: false,
                  heading_loc: "HỒI MÁU MỖI GIÂY:",
                  bonuses: [],
                },
                {
                  name: "bonus_movespeed",
                  values_float: [18, 30, 42, 54],
                  is_percentage: true,
                  heading_loc: "TỐC ĐỘ CHẠY TĂNG:",
                  bonuses: [],
                },
                {
                  name: "AbilityChargeRestoreTime",
                  values_float: [30],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [
                    {
                      name: "special_bonus_unique_broodmother_5",
                      value: 10,
                      operation: 2,
                    },
                  ],
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
                  values_float: [0.4000000059604645],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCharges",
                  values_float: [4, 6, 8, 10],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityManaCost",
                  values_float: [50],
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
              id: 639,
              name: "broodmother_silken_bola",
              name_loc: "Silken Bola",
              desc_loc:
                "Làm chậm mục tiêu chỉ định, gây sát thương và khiến chúng có tỷ lệ đánh trượt. Gây thêm sát thương phép khi tấn công mục tiêu này.",
              lore_loc: "",
              notes_loc: [],
              shard_loc:
                "Khiến Silken Bola có phạm vi 550 đơn vị, và tăng tỷ lệ trượt thành 80%",
              scepter_loc: "",
              type: 0,
              behavior: "8",
              target_team: 2,
              target_type: 19,
              flags: 0,
              damage: 0,
              immunity: 4,
              dispellable: 2,
              max_level: 4,
              cast_ranges: [750],
              cast_points: [0.10000000149011612],
              channel_times: [0, 0, 0, 0],
              cooldowns: [24, 20, 16, 12],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [70, 75, 80, 85],
              gold_costs: [],
              special_values: [
                {
                  name: "movement_speed",
                  values_float: [25, 35, 45, 55],
                  is_percentage: true,
                  heading_loc: "LÀM CHẬM:",
                  bonuses: [
                    {
                      name: "special_bonus_unique_broodmother_4",
                      value: 15,
                      operation: 0,
                    },
                  ],
                },
                {
                  name: "duration",
                  values_float: [6],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN:",
                  bonuses: [],
                },
                {
                  name: "projectile_speed",
                  values_float: [1200],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "impact_damage",
                  values_float: [100, 120, 140, 160],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG VA CHẠM:",
                  bonuses: [],
                },
                {
                  name: "attack_damage",
                  values_float: [6, 7, 8, 9],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG TĂNG THÊM:",
                  bonuses: [],
                },
                {
                  name: "miss_chance",
                  values_float: [40],
                  is_percentage: true,
                  heading_loc: "TỶ LỆ TRƯỢT:",
                  bonuses: [],
                },
                {
                  name: "AbilityCastRange",
                  values_float: [750],
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
                  values_float: [70, 75, 80, 85],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [24, 20, 16, 12],
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
              id: 873,
              name: "broodmother_sticky_snare",
              name_loc: "Spinner's Snare",
              desc_loc:
                "Broodmother creates a 900 width invisible web line. Enemy Heroes that cross the web line will make it visible and become rooted, visible in fog and receive 100dps for 4 seconds, after which the line is destroyed. Broodmother's team is notified in the Minimap whenever someone trips in a Web line. Multiple Heroes can trip on the same line until it's destroyed. Can only have 5 Snares Active. Can be cast from anywhere as long as it touches an existing web. Formation Delay: 2, Cast Range: 600, Slow Duration: 0.25, Slow: 100%, Root Duration: 4, DPS: 100",
              lore_loc:
                "The slightest tremor of her web is all Arachnia needs to find her prey.",
              notes_loc: [],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "9663676561",
              target_team: 2,
              target_type: 19,
              flags: 0,
              damage: 2,
              immunity: 4,
              dispellable: 2,
              max_level: 1,
              cast_ranges: [600],
              cast_points: [0.20000000298023224],
              channel_times: [0, 0, 0, 0],
              cooldowns: [0, 0, 0, 0],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [100],
              gold_costs: [],
              special_values: [
                {
                  name: "root_duration",
                  values_float: [3],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "damage_per_second",
                  values_float: [100],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "count",
                  values_float: [5],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "width",
                  values_float: [900],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCastRange",
                  values_float: [600],
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
                  name: "AbilityCharges",
                  values_float: [2],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityChargeRestoreTime",
                  values_float: [20],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityManaCost",
                  values_float: [100],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
              ],
              is_item: false,
              ability_has_scepter: true,
              ability_has_shard: false,
              ability_is_granted_by_scepter: true,
              ability_is_granted_by_shard: false,
              item_cost: 0,
              item_initial_charges: 0,
              item_neutral_tier: 4294967295,
              item_stock_max: 0,
              item_stock_time: 0,
              item_quality: 0,
            },
            {
              id: 5279,
              name: "broodmother_spawn_spiderlings",
              name_loc: "Spawn Spiderlings",
              desc_loc:
                "Broodmother đẻ trứng vào trong một kẻ địch, gây sát thương lên hắn. Trứng Spiderling sẽ nở nếu kẻ đó chết trong khi trứng đang được ấp.",
              lore_loc:
                "Black Arachnia luôn luôn nuôi dưỡng và sản sinh những đứa con của mình, kể cả khi đang ở giữa chiến trận. Chúng nhanh chóng học được cách để giúp đỡ mẹ của mình.",
              notes_loc: [
                "Nếu mục tiêu bị giết trong vòng %buff_duration% giây sau khi bị trúng kỹ năng này, nhện con sẽ được sinh ra.",
                "Những kẻ bị Spiderling giết sẽ sinh ra Spiderite, một phiên bản nhỏ và yếu hơn Spiderling.",
              ],
              shard_loc: "",
              scepter_loc: "",
              type: 1,
              behavior: "8",
              target_team: 2,
              target_type: 19,
              flags: 0,
              damage: 2,
              immunity: 4,
              dispellable: 2,
              max_level: 3,
              cast_ranges: [900],
              cast_points: [
                0.20000000298023224, 0.20000000298023224, 0.20000000298023224,
                0.20000000298023224,
              ],
              channel_times: [0, 0, 0, 0],
              cooldowns: [9, 8, 7],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [120],
              gold_costs: [],
              special_values: [
                {
                  name: "buff_duration",
                  values_float: [20],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "spiderling_duration",
                  values_float: [40, 45, 50],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN SỐNG:",
                  bonuses: [],
                },
                {
                  name: "damage",
                  values_float: [260, 340, 420],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG:",
                  bonuses: [
                    {
                      name: "special_bonus_unique_broodmother_3",
                      value: 80,
                      operation: 0,
                    },
                  ],
                },
                {
                  name: "damage_bonus",
                  values_float: [0, 3, 6],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "hp_bonus",
                  values_float: [0],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [
                    {
                      name: "special_bonus_unique_broodmother_2",
                      value: 350,
                      operation: 0,
                    },
                  ],
                },
                {
                  name: "count",
                  values_float: [4, 5, 6],
                  is_percentage: false,
                  heading_loc: "SỐ LƯỢNG:",
                  bonuses: [],
                },
                {
                  name: "projectile_speed",
                  values_float: [1200],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCastRange",
                  values_float: [900],
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
                  values_float: [120],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [9, 8, 7],
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
          ],
          talents: [
            {
              id: 6361,
              name: "special_bonus_unique_broodmother_3",
              name_loc: "+{s:bonus_damage} Spawn Spiderlings Damage",
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
              id: 900,
              name: "special_bonus_unique_broodmother_6",
              name_loc: "+{s:bonus_count} Spin Web Simultaneous Webs",
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
              id: 8033,
              name: "special_bonus_unique_broodmother_5",
              name_loc:
                "-{s:bonus_AbilityChargeRestoreTime}s Spin Web Recharge Time",
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
              id: 6169,
              name: "special_bonus_agility_16",
              name_loc: "+{s:value} Nhanh nhẹn",
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
                  values_float: [16],
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
              id: 6362,
              name: "special_bonus_unique_broodmother_4",
              name_loc: "+{s:bonus_movement_speed}% Silken Bola Slow",
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
              id: 5976,
              name: "special_bonus_hp_400",
              name_loc: "+{s:value} máu",
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
                  values_float: [400],
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
              id: 6257,
              name: "special_bonus_unique_broodmother_1",
              name_loc:
                "+{s:bonus_lifesteal_pct} Insatiable Hunger Damage/Lifesteal",
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
              id: 6258,
              name: "special_bonus_unique_broodmother_2",
              name_loc: "+{s:bonus_hp_bonus} Spiders Health",
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
