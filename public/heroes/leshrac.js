if (detail === undefined) var detail = {};
detail.leshrac = {
  result: {
    data: {
      heroes: [
        {
          id: 52,
          name: "npc_dota_hero_leshrac",
          order_id: 38,
          name_loc: "Leshrac",
          bio_loc:
            "Leshrac, Tormented Soul, là một sinh vật xé toạc từ trái tim của thiên nhiên, một sự sống định mức mà sự tồn tại lưu nửa trên mặt phẳng của vật chất, nửa còn lại bên kia. Kiến thức sâu thẳm đến mức hắn không có phút giây nào làm ngơ một khoảng khắc đau đớn kinh hoàng bùng nổ trong trái tim của mọi tạo hóa. Từng là một triết học gia vĩ đại, hắn đào sâu đến khe vực của tự nhiên với những viên pha lê Chronoptic bị ám, để rồi mãi mãi bị biến đổi bởi những bí ẩn kinh hoàng hiện khám phá được. Giờ đây, sự kiêu ngạo của hắn là thứ ánh sáng duy nhất bùng lên trong những khe vực khai ngộ tăm tối nhất. Như mọi sinh vật nguyên tố khác, hắn hòa làm một với thiên nhiên, nhưng là thứ thiên nhiên của hao mỹ và đê hèn. Chỉ mình hắn thấy chân lý độc ác của hiện thực, và vì thế không còn tin rằng vũ trụ sẽ tưởng thưởng xứng đáng cho người làm điều tốt.",
          hype_loc:
            "Leshrac's powerful spells lay waste to enemies and their defenses alike. Pushing deep into enemy territory with his <b>devastating edict</b>, careful timing of his ability to split the earth will <b>stun foes</b>, allowing his merciless allies to finish them off.",
          npe_desc_loc: "Gây sát thương lớn lên một vùng xung quanh tướng này",
          str_base: 20,
          str_gain: 2.5,
          agi_base: 23,
          agi_gain: 2.799999952316284,
          int_base: 22,
          int_gain: 3.5,
          primary_attr: 2,
          complexity: 1,
          attack_capability: 2,
          role_levels: [1, 1, 3, 1, 0, 0, 0, 3, 0],
          damage_min: 47,
          damage_max: 51,
          attack_rate: 1.7000000476837158,
          attack_range: 575,
          projectile_speed: 900,
          armor: 3.8333334922790527,
          magic_resistance: 25,
          movement_speed: 325,
          turn_rate: 0.6000000238418579,
          sight_range_day: 1800,
          sight_range_night: 800,
          max_health: 600,
          health_regen: 2.25,
          max_mana: 339,
          mana_regen: 1.100000023841858,
          abilities: [
            {
              id: 5241,
              name: "leshrac_split_earth",
              name_loc: "Split Earth",
              desc_loc:
                "Làm nứt mặt đất dưới chân địch. Gây sát thương và làm choáng trong một khoảng thời gian ngắn.",
              lore_loc:
                "Thao túng tự nhiên theo ý chí hiểm ác của hắn, mặt đất xoay chuyển và nuốt chửng những kẻ xấu số bắt gặp Leshrac.",
              notes_loc: [
                "Split Earth sẽ phá hủy cây cối trong tầm ảnh hưởng.",
                "Mất %delay% giây trước khi hiệu ứng bắt đầu xuất hiện.",
              ],
              shard_loc:
                "Split Earth lặp lại thêm 3 lần ngay vị trí được sử dụng, từng lượt cách nhau 5 giây, mỗi lần thêm 75 bán kính đơn vị và hiệu ứng lặp lại sẽ hiển thị cho hai bên đội.",
              scepter_loc: "",
              type: 0,
              behavior: "48",
              target_team: 2,
              target_type: 19,
              flags: 0,
              damage: 2,
              immunity: 4,
              dispellable: 1,
              max_level: 4,
              cast_ranges: [650],
              cast_points: [
                0.699999988079071, 0.699999988079071, 0.699999988079071,
                0.699999988079071,
              ],
              channel_times: [0, 0, 0, 0],
              cooldowns: [9, 9, 9, 9],
              durations: [2],
              damages: [120, 180, 240, 300],
              mana_costs: [80, 100, 120, 140],
              gold_costs: [],
              special_values: [
                {
                  name: "delay",
                  values_float: [0.3499999940395355],
                  is_percentage: false,
                  heading_loc: "ĐỘ TRỄ CHOÁNG:",
                  bonuses: [],
                },
                {
                  name: "radius",
                  values_float: [150, 175, 200, 225],
                  is_percentage: false,
                  heading_loc: "BÁN KÍNH:",
                  bonuses: [],
                },
                {
                  name: "duration",
                  values_float: [2],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN CHOÁNG:",
                  bonuses: [],
                },
                {
                  name: "#AbilityDamage",
                  values_float: [120, 180, 240, 300],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCastRange",
                  values_float: [650],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityDuration",
                  values_float: [2],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCastPoint",
                  values_float: [0.699999988079071],
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
                  values_float: [9],
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
              id: 5242,
              name: "leshrac_diabolic_edict",
              name_loc: "Diabolic Edict",
              desc_loc:
                "Bao phủ khu vực xung quanh Leshrac bằng những vụ nổ ma thuật gây sát thương thuần lên kẻ thù và công trình. Càng ít địch và công trình thì sát thương gây ra càng lớn. Kéo dài %abilityduration% giây.",
              lore_loc:
                "Năng lượng Chronoptic bạo phát qua các thứ nguyên, xóa sổ mọi thứ nó chạm phải.",
              notes_loc: [
                "Ngay cả khi Leshrac đã bị giết, những vụ nổ vẫn sẽ tiếp tục.",
              ],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "4",
              target_team: 2,
              target_type: 23,
              flags: 0,
              damage: 4,
              immunity: 3,
              dispellable: 3,
              max_level: 4,
              cast_ranges: [0],
              cast_points: [0.5],
              channel_times: [0, 0, 0, 0],
              cooldowns: [22, 22, 22, 22],
              durations: [10],
              damages: [7, 14, 21, 28],
              mana_costs: [95, 120, 135, 155],
              gold_costs: [],
              special_values: [
                {
                  name: "num_explosions",
                  values_float: [40],
                  is_percentage: false,
                  heading_loc: "SỐ VỤ NỔ:",
                  bonuses: [],
                },
                {
                  name: "radius",
                  values_float: [500],
                  is_percentage: false,
                  heading_loc: "BÁN KÍNH",
                  bonuses: [],
                },
                {
                  name: "tower_bonus",
                  values_float: [0],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "#AbilityDamage",
                  values_float: [7, 14, 21, 28],
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
                  name: "AbilityCastPoint",
                  values_float: [0.5],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityManaCost",
                  values_float: [95, 120, 135, 155],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [22],
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
              id: 5243,
              name: "leshrac_lightning_storm",
              name_loc: "Lightning Storm",
              desc_loc:
                "Triệu hồi một cơn bão sét đánh vào một kẻ địch, sau đó đánh các kẻ địch đứng gần. Kẻ trúng đòn sẽ bị làm chậm.",
              lore_loc:
                "Những cơn bão kinh thiên quét sạch trăm quân là minh chứng cho sự lão luyện nguyên tố của Tormented Soul.",
              notes_loc: [],
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
              cast_ranges: [650],
              cast_points: [0.30000001192092896],
              channel_times: [0, 0, 0, 0],
              cooldowns: [4],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [80, 100, 120, 140],
              gold_costs: [],
              special_values: [
                {
                  name: "damage",
                  values_float: [90, 130, 170, 210],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG:",
                  bonuses: [],
                },
                {
                  name: "jump_count",
                  values_float: [4, 6, 8, 10],
                  is_percentage: false,
                  heading_loc: "SỐ LẦN GIẬT SÉT:",
                  bonuses: [],
                },
                {
                  name: "radius",
                  values_float: [475],
                  is_percentage: false,
                  heading_loc: "BÁN KÍNH NHẢY SÉT:",
                  bonuses: [],
                },
                {
                  name: "jump_delay",
                  values_float: [0.25],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "slow_movement_speed",
                  values_float: [-75],
                  is_percentage: true,
                  heading_loc: "TỐC ĐỘ CHẠY GIẢM:",
                  bonuses: [],
                },
                {
                  name: "slow_duration",
                  values_float: [
                    0.4000000059604645, 0.6000000238418579, 0.800000011920929,
                    1,
                  ],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN LÀM CHẬM:",
                  bonuses: [],
                },
                {
                  name: "interval_scepter",
                  values_float: [1.5],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "radius_scepter",
                  values_float: [750],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCastRange",
                  values_float: [650],
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
                  values_float: [80, 100, 120, 140],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [4],
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
              id: 539,
              name: "leshrac_greater_lightning_storm",
              name_loc: "Nihilism",
              desc_loc:
                "Causes Leshrac and all nearby enemies in %radius% AoE to turn ethereal, preventing them from attacking, causing them to take %magic_amp%%% more magic damage and be slowed by %slow%%% for %duration% seconds. Increases Leshrac's speed rather than reducing it. Does not cause you to take amplified damage.",
              lore_loc: "",
              notes_loc: [],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "8589936645",
              target_team: 2,
              target_type: 0,
              flags: 0,
              damage: 1,
              immunity: 4,
              dispellable: 0,
              max_level: 1,
              cast_ranges: [0],
              cast_points: [0, 0, 0, 0],
              channel_times: [0, 0, 0, 0],
              cooldowns: [25],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [75],
              gold_costs: [],
              special_values: [
                {
                  name: "duration",
                  values_float: [4],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN:",
                  bonuses: [],
                },
                {
                  name: "magic_amp",
                  values_float: [30],
                  is_percentage: true,
                  heading_loc: "SÁT THƯƠNG PHÉP TĂNG:",
                  bonuses: [],
                },
                {
                  name: "slow",
                  values_float: [30],
                  is_percentage: true,
                  heading_loc: "LÀM CHẬM:",
                  bonuses: [],
                },
                {
                  name: "radius",
                  values_float: [450],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityManaCost",
                  values_float: [75],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [25],
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
              id: 5244,
              name: "leshrac_pulse_nova",
              name_loc: "Pulse Nova",
              desc_loc:
                "Tạo một luồng xung lượng xung quanh Leshrac, gây sát thương lên kẻ địch mỗi giây. Leshrac tốn mana cho mỗi luồng xung lượng hắn tạo ra.",
              lore_loc:
                "Khi cần thiết, Tormented Soul có thể thao túng cả không-thời gian, tàn phá những sinh thể thấp kém.",
              notes_loc: [],
              shard_loc: "",
              scepter_loc: "",
              type: 1,
              behavior: "4194820",
              target_team: 2,
              target_type: 19,
              flags: 0,
              damage: 2,
              immunity: 4,
              dispellable: 3,
              max_level: 3,
              cast_ranges: [0],
              cast_points: [0, 0, 0, 0],
              channel_times: [0, 0, 0, 0],
              cooldowns: [1, 1, 1, 1],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [70],
              gold_costs: [],
              special_values: [
                {
                  name: "mana_cost_per_second",
                  values_float: [20, 40, 60],
                  is_percentage: false,
                  heading_loc: "MANA TỐN MỖI GIÂY:",
                  bonuses: [],
                },
                {
                  name: "radius",
                  values_float: [525],
                  is_percentage: false,
                  heading_loc: "BÁN KÍNH:",
                  bonuses: [],
                },
                {
                  name: "damage",
                  values_float: [100, 150, 200],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG:",
                  bonuses: [],
                },
                {
                  name: "AbilityManaCost",
                  values_float: [70],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
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
          ],
          talents: [
            {
              id: 6926,
              name: "special_bonus_mp_regen_175",
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
                  values_float: [1.75],
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
              id: 509,
              name: "special_bonus_unique_leshrac_5",
              name_loc: "+{s:value} bán kính Split Earth",
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
                  values_float: [40],
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
              id: 516,
              name: "special_bonus_unique_leshrac_6",
              name_loc: "+{s:value} sát thương Lightning Storm",
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
              id: 5919,
              name: "special_bonus_movement_speed_25",
              name_loc: "+{s:value} tốc độ chạy",
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
                  values_float: [25],
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
              id: 6080,
              name: "special_bonus_strength_20",
              name_loc: "+{s:value} Sức mạnh",
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
              id: 6672,
              name: "special_bonus_unique_leshrac_3",
              name_loc: "+{s:value} sát thương Pulse Nova",
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
                  values_float: [40],
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
              id: 6240,
              name: "special_bonus_unique_leshrac_2",
              name_loc: "Lightning Storm nảy hai lần",
              desc_loc:
                "Will bounce to units it affected already only when there are no other units available",
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
              id: 6063,
              name: "special_bonus_unique_leshrac_1",
              name_loc: "+{s:value} vụ nổ cho Diabolic Edict",
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
                  values_float: [30],
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
