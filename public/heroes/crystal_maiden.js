if (detail === undefined) var detail = {};
detail.crystal_maiden = {
  result: {
    data: {
      heroes: [
        {
          id: 5,
          name: "npc_dota_hero_crystal_maiden",
          order_id: 3,
          name_loc: "Crystal Maiden",
          bio_loc:
            "Sinh ra ở một vương quốc có khí hậu ôn hòa, được nuôi lớn cùng với người chị cả Lina đầy sôi nổi, Rylai – Crystal Maiden sớm nhận ra rằng mối liên kết nguyên tố bẩm sinh với băng giá của cô đã gây nên rắc rối cho mọi người xung quanh. Các mạch nguồn và dòng sông trên núi bị đóng băng ngay khi cô nghỉ chân gần đó; những vụ mùa đến ngày thu hoạch chợt chìm trong sương giá, những vườn cây đang ra trái bị đóng băng rồi tan vỡ, hư thối. Khi cha mẹ cô giận dữ gửi Lina đến vùng xích đạo, Rylai cũng bị trục xuất đến vương quốc cực bắc lạnh giá Icewrack, nơi cô được thu nhận bởi một Băng Thuật sĩ, người đã tự tạo tác cho mình một chốn ẩn thân trên đỉnh sông băng Blueheart. Sau một thời gian dài học tập, vị thuật sĩ tuyên bố rằng cô đã sẵn sàng tu luyện một mình và để cô tiếp quản vị trí của ông, rồi chìm vào giấc ngủ bên dưới dòng sông băng suốt 1000 năm. Từ đó, khả năng điều khiển Băng Thuật của cô ngày càng mạnh mẽ, kết tinh thành những kỹ năng tối thượng khó ai bì được.",
          hype_loc:
            "Able to keep her <b>allies supplied with mana</b> as she <b>slows down enemies</b> to ensure a kill, Crystal Maiden is a helpful addition to any team. And, when the opportunity arises, she can unleash her <b>massive ultimate ability</b> to devastate her foes.",
          npe_desc_loc: "Tạo một cơn bão tuyết gây sát thương cao lên kẻ thù",
          str_base: 18,
          str_gain: 2.200000047683716,
          agi_base: 16,
          agi_gain: 1.600000023841858,
          int_base: 16,
          int_gain: 3.299999952316284,
          primary_attr: 2,
          complexity: 1,
          attack_capability: 2,
          role_levels: [0, 3, 2, 2, 1, 0, 0, 0, 0],
          damage_min: 44,
          damage_max: 50,
          attack_rate: 1.7000000476837158,
          attack_range: 600,
          projectile_speed: 900,
          armor: 1.6666667461395264,
          magic_resistance: 25,
          movement_speed: 280,
          turn_rate: 0.6000000238418579,
          sight_range_day: 1800,
          sight_range_night: 800,
          max_health: 560,
          health_regen: 2.0500001907348633,
          max_mana: 267,
          mana_regen: 1.7999999523162842,
          abilities: [
            {
              id: 5126,
              name: "crystal_maiden_crystal_nova",
              name_loc: "Crystal Nova",
              desc_loc:
                "Một vụ nổ băng gây sát thương và làm chậm tốc độ chạy cũng như tốc độ đánh trong khu vực được chọn.",
              lore_loc:
                "Nhiệt độ xung quanh Rylai giảm một cách nhanh chóng, đóng băng con tim của mọi kẻ thù xung quanh.",
              notes_loc: [],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "48",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 2,
              immunity: 4,
              dispellable: 2,
              max_level: 4,
              cast_ranges: [700],
              cast_points: [
                0.30000001192092896, 0.30000001192092896, 0.30000001192092896,
                0.30000001192092896,
              ],
              channel_times: [0, 0, 0, 0],
              cooldowns: [11, 10, 9, 8],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [115, 135, 155, 175],
              gold_costs: [],
              special_values: [
                {
                  name: "radius",
                  values_float: [425],
                  is_percentage: false,
                  heading_loc: "BÁN KÍNH:",
                  bonuses: [],
                },
                {
                  name: "movespeed_slow",
                  values_float: [-20, -30, -40, -50],
                  is_percentage: true,
                  heading_loc: "TỐC ĐỘ CHẠY GIẢM:",
                  bonuses: [],
                },
                {
                  name: "attackspeed_slow",
                  values_float: [-30, -45, -60, -75],
                  is_percentage: false,
                  heading_loc: "TỐC ĐÁNH GIẢM:",
                  bonuses: [],
                },
                {
                  name: "duration",
                  values_float: [4.5],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN:",
                  bonuses: [],
                },
                {
                  name: "vision_duration",
                  values_float: [6],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "nova_damage",
                  values_float: [130, 170, 210, 260],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG:",
                  bonuses: [],
                },
                {
                  name: "AbilityCastRange",
                  values_float: [700],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCastPoint",
                  values_float: [0.30000001192092896],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityManaCost",
                  values_float: [115, 135, 155, 175],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [11, 10, 9, 8],
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
              id: 5127,
              name: "crystal_maiden_frostbite",
              name_loc: "Frostbite",
              desc_loc:
                "Đóng băng một kẻ thù, khiến hắn không thể di chuyển cũng như đánh thường, đồng thời gây sát thương theo thời gian. Kéo dài trong %creep_duration% giây đối với quái từ cấp 6 trở xuống.",
              lore_loc:
                "Rylai kéo dài từng cơn giá lạnh từ Blueheart Glacier, giam cầm những kẻ cản đường trong băng giá.",
              notes_loc: ["Frostbite gây hiệu ứng trói."],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "8",
              target_team: 2,
              target_type: 19,
              flags: 0,
              damage: 2,
              immunity: 4,
              dispellable: 2,
              max_level: 4,
              cast_ranges: [550],
              cast_points: [
                0.30000001192092896, 0.30000001192092896, 0.30000001192092896,
                0.30000001192092896,
              ],
              channel_times: [0, 0, 0, 0],
              cooldowns: [9, 8, 7, 6],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [125, 135, 145, 155],
              gold_costs: [],
              special_values: [
                {
                  name: "damage_per_second",
                  values_float: [100],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG MỖI GIÂY:",
                  bonuses: [],
                },
                {
                  name: "creep_damage_per_second",
                  values_float: [100],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "duration",
                  values_float: [1.5, 2, 2.5, 3],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN (TƯỚNG):",
                  bonuses: [],
                },
                {
                  name: "creep_duration",
                  values_float: [10],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN (QUÁI):",
                  bonuses: [],
                },
                {
                  name: "tick_interval",
                  values_float: [0.25],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCastRange",
                  values_float: [550],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCastPoint",
                  values_float: [0.30000001192092896],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityManaCost",
                  values_float: [125, 135, 145, 155],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [9, 8, 7, 6],
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
              id: 5128,
              name: "crystal_maiden_brilliance_aura",
              name_loc: "Arcane Aura",
              desc_loc:
                "Gives additional mana regeneration to all friendly units on the map. This bonus is increased for Crystal Maiden. Whenever Crystal Maiden casts a spell, restores some mana to all friendly units within %radius% radius.",
              lore_loc:
                "Thời tiết lạnh làm tăng tinh khí của ma thuật, vì thế chỉ cần Rylai hiện diện thì đừng hà tiện dùng phép.",
              notes_loc: [],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "2",
              target_team: 1,
              target_type: 0,
              flags: 0,
              damage: 0,
              immunity: 1,
              dispellable: 0,
              max_level: 4,
              cast_ranges: [0],
              cast_points: [0.20000000298023224],
              channel_times: [0, 0, 0, 0],
              cooldowns: [0, 0, 0, 0],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [0, 0, 0, 0],
              gold_costs: [],
              special_values: [
                {
                  name: "mana_regen",
                  values_float: [0.5, 1, 1.5, 2],
                  is_percentage: false,
                  heading_loc: "MANA HỒI MỖI GIÂY:",
                  bonuses: [],
                },
                {
                  name: "self_factor",
                  values_float: [3],
                  is_percentage: false,
                  heading_loc: "HỆ SỐ CHO BẢN THÂN:",
                  bonuses: [],
                },
                {
                  name: "mana_per_cast",
                  values_float: [6, 12, 18, 24],
                  is_percentage: false,
                  heading_loc: "MANA PER CAST:",
                  bonuses: [
                    {
                      name: "special_bonus_unique_crystal_maiden_4",
                      value: 20,
                      operation: 0,
                    },
                  ],
                },
                {
                  name: "radius",
                  values_float: [1200],
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
              id: 5129,
              name: "crystal_maiden_freezing_field",
              name_loc: "Freezing Field",
              desc_loc:
                "VẬN PHÁP - Bao quanh Crystal Maiden với 100 vụ nổ băng ngẫu nhiên, làm chậm kẻ thù và gây sát thương khủng khiếp. Được tăng giáp khi đang vận pháp. Kéo dài trong %abilitychanneltime% giây.",
              lore_loc:
                "Từng là nơi mà Rylai bị lưu đày, Icewrack đã trở thành nơi kiềm hãm các cuộc tàn phá bởi băng giá của cô ấy.",
              notes_loc: [
                "Làm chậm mọi kẻ thù trong khu vực, dù cho chúng không trúng vụ nổ nào (kéo dài %slow_duration% giây).",
                "Cứ %explosion_interval% giây sẽ xảy ra một vụ nổ.",
              ],
              shard_loc:
                "Cho phép bạn di chuyển, thi triển phép và tấn công khi đang dùng Freezing Field. Vẫn có thể bị gián đoạn bởi kẻ địch. Giảm 75% tốc độ chạy khi di chuyển trong trạng thái này. Tăng %shard_bonus_explosion%%% vụ nổ băng.",
              scepter_loc:
                "Gây hiệu ứng của Frostbite (ở cấp độ hiện tại) lên bất kỳ kẻ địch nào đứng trong Freezing Field quá một khoảng thời gian.",
              type: 1,
              behavior: "33554564",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 2,
              immunity: 4,
              dispellable: 0,
              max_level: 3,
              cast_ranges: [0],
              cast_points: [0],
              channel_times: [10],
              cooldowns: [110, 100, 90],
              durations: [10],
              damages: [0, 0, 0, 0],
              mana_costs: [200, 400, 600],
              gold_costs: [],
              special_values: [
                {
                  name: "radius",
                  values_float: [810],
                  is_percentage: false,
                  heading_loc: "BÁN KÍNH:",
                  bonuses: [],
                },
                {
                  name: "explosion_radius",
                  values_float: [300],
                  is_percentage: false,
                  heading_loc: "BÁN KÍNH MỘT VỤ NỔ:",
                  bonuses: [],
                },
                {
                  name: "bonus_armor",
                  values_float: [20],
                  is_percentage: false,
                  heading_loc: "GIÁP TĂNG THÊM:",
                  bonuses: [],
                },
                {
                  name: "explosion_interval",
                  values_float: [0.10000000149011612],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "movespeed_slow",
                  values_float: [-30],
                  is_percentage: true,
                  heading_loc: "TỐC ĐỘ CHẠY GIẢM:",
                  bonuses: [],
                },
                {
                  name: "attack_slow",
                  values_float: [-60],
                  is_percentage: false,
                  heading_loc: "TỐC ĐÁNH GIẢM:",
                  bonuses: [],
                },
                {
                  name: "slow_duration",
                  values_float: [1],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "explosion_min_dist",
                  values_float: [195],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "explosion_max_dist",
                  values_float: [785],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "damage",
                  values_float: [105, 170, 250],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG:",
                  bonuses: [],
                },
                {
                  name: "scepter_delay",
                  values_float: [1.75],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN ĐỂ BỊ FROSTBITE (SCEPTER):",
                  bonuses: [],
                },
                {
                  name: "shard_bonus_explosion",
                  values_float: [20],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityChannelTime",
                  values_float: [10],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityDuration",
                  values_float: [10],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityManaCost",
                  values_float: [200, 400, 600],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [110, 100, 90],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
              ],
              is_item: false,
              ability_has_scepter: true,
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
          ],
          talents: [
            {
              id: 5903,
              name: "special_bonus_hp_250",
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
                  values_float: [250],
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
              id: 772,
              name: "special_bonus_unique_crystal_maiden_6",
              name_loc: "+{s:value} phạm vi Crystal Nova",
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
                  values_float: [125],
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
              id: 7042,
              name: "special_bonus_unique_crystal_maiden_4",
              name_loc: "+{s:bonus_mana_per_cast} Arcane Aura Mana per Cast",
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
              id: 7654,
              name: "special_bonus_unique_crystal_maiden_5",
              name_loc: "-{s:value} giây hồi Crystal Nova",
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
              id: 6622,
              name: "special_bonus_attack_speed_200",
              name_loc: "+{s:value} tốc độ đánh",
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
              id: 6520,
              name: "special_bonus_unique_crystal_maiden_3",
              name_loc: "+{s:value} sát thương Freezing Field",
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
              id: 6072,
              name: "special_bonus_unique_crystal_maiden_1",
              name_loc: "+{s:value} giây trói cho Frostbite",
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
                  values_float: [1.25],
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
              id: 6234,
              name: "special_bonus_unique_crystal_maiden_2",
              name_loc: "+{s:value} sát thương Crystal Nova",
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
                  values_float: [240],
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