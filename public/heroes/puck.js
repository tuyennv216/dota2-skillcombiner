if (detail === undefined) var detail = {};
detail.puck = {
  result: {
    data: {
      heroes: [
        {
          id: 13,
          name: "npc_dota_hero_puck",
          order_id: 13,
          name_loc: "Puck",
          bio_loc:
            "Thoạt nhìn, Puck mang một vẻ ngoài tinh nghịch, trẻ con, nhưng đó chỉ là lớp mặt nạ che đậy một tính cách hoàn toàn khác. Ở độ tuổi thiếu niên của loài Rồng tiên (Faerie Dragon), một sinh vật sống đến hàng tỷ năm, Puck đã tồn tại vô số thiên niên kỷ trong hình hài trẻ con ấy. Vậy nên tuy đúng là một thiếu niên, Puck vẫn sẽ mang dáng vẻ này đến khi các trấn thành hưng thịnh đương thời lụi tàn về cát bụi. Động cơ của nó do đó thâm sâu khó dò, và trông mặt thì chẳng thể bắt hình dong, hành động chơi đùa bề ngoài kia hoàn toàn có thể che giấu một mục đích tà ác bên trong. Chỉ chắc chắn một điều, niềm ham vui bất tận trong việc phá phách nghịch ngợm chính là kim chỉ nam để hiểu được bản chất thực sự của Puck.",
          hype_loc:
            "Puck có tài làm nhiễu loạn kẻ địch với khả năng <b>trốn tránh</b> đầy tinh quái. Bằng cách dịch chuyển vào <b>quả cầu có sát thương cao</b> để di chuyến trong khoảng cách ngắn, nó tấn công kẻ địch với <b>bụi phép khóa phép</b>. Lúc mà kẻ địch có thể phản ứng, Puck đã trốn mất từ lâu.",
          npe_desc_loc: "Orbs to enemies and silences them",
          str_base: 17,
          str_gain: 2.4000000953674316,
          agi_base: 22,
          agi_gain: 2.5,
          int_base: 23,
          int_gain: 3.5,
          primary_attr: 2,
          complexity: 2,
          attack_capability: 2,
          role_levels: [0, 0, 2, 3, 0, 0, 3, 0, 3],
          damage_min: 45,
          damage_max: 53,
          attack_rate: 1.7000000476837158,
          attack_range: 550,
          projectile_speed: 900,
          armor: 0.6666667461395264,
          magic_resistance: 25,
          movement_speed: 290,
          turn_rate: 0.8999999761581421,
          sight_range_day: 1800,
          sight_range_night: 800,
          max_health: 540,
          health_regen: 2.200000047683716,
          max_mana: 351,
          mana_regen: 1.649999976158142,
          abilities: [
            {
              id: 5069,
              name: "puck_illusory_orb",
              name_loc: "Illusory Orb",
              desc_loc:
                "Puck phóng ra một quả cầu ma thuật bay theo đường thẳng, gây sát thương lên các đơn vị địch gặp phải. Puck có thể dịch chuyển đến vị trí quả cầu bất cứ lúc nào bằng Ethereal Jaunt.",
              lore_loc:
                "Faerie Dragon tinh nghịch luôn thấy thích thú khi trêu chọc người khác, thoắt ẩn thoắt hiện không ai ngờ.",
              notes_loc: [
                "Illusory Orb cho tầm nhìn xuyên địa hình xung quanh khi nó di chuyển.",
                "Nhảy sang Illusory Orb sẽ tránh được các đường đạn.",
              ],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "16",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 2,
              immunity: 4,
              dispellable: 0,
              max_level: 4,
              cast_ranges: [3000],
              cast_points: [
                0.10000000149011612, 0.10000000149011612, 0.10000000149011612,
                0.10000000149011612,
              ],
              channel_times: [0, 0, 0, 0],
              cooldowns: [12, 11, 10, 9],
              durations: [0, 0, 0, 0],
              damages: [75, 150, 225, 300],
              mana_costs: [80, 100, 120, 140],
              gold_costs: [],
              special_values: [
                {
                  name: "radius",
                  values_float: [225],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "max_distance",
                  values_float: [1950],
                  is_percentage: false,
                  heading_loc: "KHOẢNG CÁCH TỐI ĐA:",
                  bonuses: [],
                },
                {
                  name: "orb_speed",
                  values_float: [651],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "orb_vision",
                  values_float: [450],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "vision_duration",
                  values_float: [3.3399999141693115],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "#AbilityDamage",
                  values_float: [75, 150, 225, 300],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCastRange",
                  values_float: [3000],
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
                  values_float: [80, 100, 120, 140],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [12, 11, 10, 9],
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
              id: 5071,
              name: "puck_waning_rift",
              name_loc: "Waning Rift",
              desc_loc:
                "Puck dịch chuyển đến khu vực chỉ định, tỏa ra bụi tiên gây sát thương và khóa phép các kẻ địch gần đó.",
              lore_loc:
                "Mỉm cười tinh quái, Puck tung ra thứ bụi màu nhiệm của nó, làm gián đoạn dòng chảy phép thuật.",
              notes_loc: [],
              shard_loc: "",
              scepter_loc:
                "Waning Rift now has 150 extra radius and range and knocks enemies back 400 distance over 0.5 seconds (non-interrupting). Reveals invisible enemy units and wards in the area for 5 seconds.",
              type: 0,
              behavior: "48",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 2,
              immunity: 4,
              dispellable: 2,
              max_level: 4,
              cast_ranges: [0],
              cast_points: [0.10000000149011612],
              channel_times: [0, 0, 0, 0],
              cooldowns: [16, 15, 14, 13],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [100, 110, 120, 130],
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
                  name: "silence_duration",
                  values_float: [2, 2.5, 3, 3.5],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN:",
                  bonuses: [],
                },
                {
                  name: "damage",
                  values_float: [70, 130, 190, 250],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG:",
                  bonuses: [
                    {
                      name: "special_bonus_unique_puck_6",
                      value: 100,
                      operation: 0,
                    },
                  ],
                },
                {
                  name: "max_distance",
                  values_float: [400],
                  is_percentage: false,
                  heading_loc: "CỰ LY TỐI ĐA:",
                  bonuses: [],
                },
                {
                  name: "scepter_max_distance",
                  values_float: [550],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "scepter_radius",
                  values_float: [550],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "scepter_pushback",
                  values_float: [400],
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
                  values_float: [100, 110, 120, 130],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [16, 15, 14, 13],
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
              id: 5072,
              name: "puck_phase_shift",
              name_loc: "Phase Shift",
              desc_loc:
                "VẬN PHÁP - Puck tạm thời dịch chuyển sang một chiều không gian khác để tránh khỏi nguy hiểm.",
              lore_loc:
                "Nhanh như cắt, Puck dịch chuyển về chiều không gian kỳ quái nơi mà nó đã sinh ra.",
              notes_loc: [
                "Puck giữ nguyên kích thước tương tác khi đang Phase Shift.",
                "Đưa ra bất cứ mệnh lệnh nào cũng sẽ ngắt Phase Shift.",
                "Puck có trạng thái bất khả xâm phạm khi Phase Shift đang được sử dụng.",
              ],
              shard_loc:
                "Puck attacks all enemies within its attack range + 200 every time it phase shifts.",
              scepter_loc: "",
              type: 0,
              behavior: "33816708",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 0,
              immunity: 0,
              dispellable: 0,
              max_level: 4,
              cast_ranges: [0],
              cast_points: [0, 0, 0, 0],
              channel_times: [1, 1.75, 2.5, 3.25],
              cooldowns: [8, 7.5, 7, 6.5],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [0, 0, 0, 0],
              gold_costs: [],
              special_values: [
                {
                  name: "duration",
                  values_float: [1, 1.75, 2.5, 3.25],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN:",
                  bonuses: [],
                },
                {
                  name: "AbilityChannelTime",
                  values_float: [1, 1.75, 2.5, 3.25],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [8, 7.5, 7, 6.5],
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
              id: 5073,
              name: "puck_dream_coil",
              name_loc: "Dream Coil",
              desc_loc:
                "Tạo ra sợi dây ma thuật trói buộc các tướng địch, gây sát thương, làm choáng và buộc chúng. Nếu tướng địch kéo giãn sợi dây bằng cách di chuyển ra quá xa, nó sẽ đứt, gây thêm sát thương và choáng thêm một lần nữa.",
              lore_loc:
                "Faerie Dragon gieo rắc hỗn loạn trong lòng địch, khiến chúng mơ như thực về sinh mệnh mỏng manh của mình.",
              notes_loc: [],
              shard_loc: "",
              scepter_loc: "",
              type: 1,
              behavior: "48",
              target_team: 0,
              target_type: 1,
              flags: 0,
              damage: 2,
              immunity: 4,
              dispellable: 3,
              max_level: 3,
              cast_ranges: [750],
              cast_points: [
                0.10000000149011612, 0.10000000149011612, 0.10000000149011612,
              ],
              channel_times: [0, 0, 0, 0],
              cooldowns: [75],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [100, 150, 200],
              gold_costs: [],
              special_values: [
                {
                  name: "coil_duration",
                  values_float: [6],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN TRÓI:",
                  bonuses: [],
                },
                {
                  name: "coil_break_radius",
                  values_float: [600],
                  is_percentage: false,
                  heading_loc: "BÁN KÍNH ĐỨT:",
                  bonuses: [],
                },
                {
                  name: "stun_duration",
                  values_float: [0.5],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "coil_initial_damage",
                  values_float: [125, 200, 275],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG KHỞI ĐIỂM:",
                  bonuses: [],
                },
                {
                  name: "coil_stun_duration",
                  values_float: [1.7999999523162842, 2.4000000953674316, 3],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN CHOÁNG PHÁ TRÓI:",
                  bonuses: [
                    {
                      name: "special_bonus_unique_puck_4",
                      value: 1,
                      operation: 0,
                    },
                  ],
                },
                {
                  name: "coil_break_damage",
                  values_float: [200, 300, 400],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG ĐỨT:",
                  bonuses: [],
                },
                {
                  name: "coil_radius",
                  values_float: [375],
                  is_percentage: false,
                  heading_loc: "",
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
                  values_float: [100, 150, 200],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [75],
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
              id: 797,
              name: "special_bonus_unique_puck_8",
              name_loc: "-{s:value} giây hồi Illusory Orb",
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
                  values_float: [2],
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
              id: 767,
              name: "special_bonus_unique_puck_7",
              name_loc: "+{s:value} giây khóa phép Waning Rift",
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
                  values_float: [0.75],
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
              id: 6219,
              name: "special_bonus_unique_puck",
              name_loc: "-{s:value}s Dream Coil Cooldown",
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
                  values_float: [10],
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
              id: 407,
              name: "special_bonus_unique_puck_6",
              name_loc: "+{s:bonus_damage} Waning Rift Damage",
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
                  values_float: [100],
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
              id: 6402,
              name: "special_bonus_unique_puck_2",
              name_loc: "-{s:value} giây hồi Waning Rift",
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
                  values_float: [6],
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
              id: 7057,
              name: "special_bonus_unique_puck_4",
              name_loc:
                "+{s:bonus_coil_stun_duration}s Dream Coil Stun Duration",
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
              id: 348,
              name: "special_bonus_unique_puck_5",
              name_loc: "Dream Coil Pierces Magic Immunity",
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
                  values_float: [1],
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
              id: 6855,
              name: "special_bonus_unique_puck_3",
              name_loc: "Tự động đánh tất cả trong Dream Coil",
              desc_loc:
                "Puck lập tức tấn công mọi kẻ địch bị ảnh hưởng bởi Dream Coil, một lần mỗi {s:value} giây.",
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
                  values_float: [0.6000000238418579],
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
        },
      ],
    },
    status: 1,
  },
};