if (detail === undefined) var detail = {};
detail.lycan = {
  result: {
    data: {
      heroes: [
        {
          id: 77,
          name: "npc_dota_hero_lycan",
          order_id: 72,
          name_loc: "Lycan",
          bio_loc:
            'Banehallow được sinh ra là quý tộc trong nhà Ambry, dòng họ quyền thế nhất trong vương quốc Slom cổ xưa. Trước khi vương quốc sụp đổ, khi mà những ham muốn của vị vua ngày càng trở nên kỳ dị, còn triều đình thì đầy rẫy lũ phù thủy và kẻ bịp bợm, nhà Ambry đã khơi mào cho cuộc nổi dậy chống lại gã quốc vương sa đọa. Không còn thần phục và tận trung với ngai vàng, họ điều động sáu nghìn binh sĩ đến thủ đô, để rồi bị tiêu diệt hoàn toàn trong cái được gọi là Cuộc thảm sát của kẻ bội giáo. Và rồi, câu ngạn ngữ xưa lại được kiểm chứng: Muốn cắt cổ vua, phải chắc chắn lìa được đầu.\r\n<br><br>Quốc vương nổi cơn thịnh nộ trước sự phản bội này, ra lệnh tru di cửu tộc dòng dõi nhà Ambry, chẳng chừa một ai ngoài vị lãnh chúa và đứa con trai nhỏ tuổi nhất của ông, Banehallow. Trước mặt toàn bộ quần thần hoàng gia, với vị lãnh chúa thất thế bị xích xuống sàn đá hoa, kẻ hôn quân kia ra lệnh cho lũ phù thủy của mình nguyền cậu bé thành một con ma sói, để rồi chính cậu sẽ xé nát cổ họng người cha của mình. "Ra tay đi," tên vua đồi bại cất tiếng, "để lãnh chúa của Ambry thấm được vết cắn của sự phản bội." Lời nguyền hoàn tất, và cậu bé hóa thành thứ bọn vô lại muốn. Nhưng cơ thể dù có đổi thay, tâm trí của cậu vẫn vẹn toàn, và thay vì cắn nát cổ của cha mình, cậu bắt những kẻ đang ghìm giữ mình phải chịu số phận đó, xé xác chúng thành trăm mảnh. Một tá hiệp sĩ hoàng cung bỏ mạng dưới nanh sói trước khi chúng có thể đuổi cậu đi vào màn đêm u tối. Lãnh chúa của Ambry, vẫn còn đang trong xiềng xích, không dứt tiếng cười lớn, dẫu có bị tên bạo chúa kia đâm kiếm xuyên người. Giờ đây, là người nối dõi duy nhất của dòng họ Ambry, Banehallow trở thành Lycan: nửa chiến binh, nửa sói, lang thang khắp chốn nhằm tìm lại công lý cho những gì mình đã mất.',
          hype_loc:
            "As a man or as a wolf, Lycan devastates enemies with sharp claws and deadly jaws. <b>Summoning stealthy wolves</b> to scout ahead or assault a foe, his wolf transformation grants him the <b>speed and strength</b> to run down his enemies, or escape an ambush.",
          npe_desc_loc: "Biến thành ma sói dữ tợn",
          str_base: 26,
          str_gain: 3.4000000953674316,
          agi_base: 16,
          agi_gain: 1.7000000476837158,
          int_base: 23,
          int_gain: 1.7000000476837158,
          primary_attr: 0,
          complexity: 2,
          attack_capability: 1,
          role_levels: [2, 0, 0, 0, 1, 1, 1, 3, 0],
          damage_min: 50,
          damage_max: 55,
          attack_rate: 1.7000000476837158,
          attack_range: 150,
          projectile_speed: 900,
          armor: 2.6666667461395264,
          magic_resistance: 25,
          movement_speed: 315,
          turn_rate: 0.6000000238418579,
          sight_range_day: 1800,
          sight_range_night: 800,
          max_health: 720,
          health_regen: 2.8500001430511475,
          max_mana: 351,
          mana_regen: 1.149999976158142,
          abilities: [
            {
              id: 5395,
              name: "lycan_summon_wolves",
              name_loc: "Summon Wolves",
              desc_loc:
                "Triệu hồi hai Spirit Wolf để chiến đấu cùng Lycan. Spirit Wolf ở cấp 3-4 có khả năng tàng hình vô hạn, và ở cấp 4 có kỹ năng Cripple.",
              lore_loc:
                "Chính loại bùa phép đã nguyền rủa Banehallow cũng cho hắn khả năng triệu hồi những hầu cận trung thành.",
              notes_loc: [],
              shard_loc:
                "Khiến một trong ba đợt quái đường của phe bạn có thêm một Spirit Wolf (không thể điều khiển được) đi cùng. Spirit Wolf này có khả năng gây hiệu ứng Cripple lên trụ",
              scepter_loc: "",
              type: 0,
              behavior: "4",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 0,
              immunity: 0,
              dispellable: 0,
              max_level: 4,
              cast_ranges: [0],
              cast_points: [
                0.30000001192092896, 0.30000001192092896, 0.30000001192092896,
                0.30000001192092896,
              ],
              channel_times: [0, 0, 0, 0],
              cooldowns: [30, 30, 30, 30],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [125, 130, 135, 140],
              gold_costs: [],
              special_values: [
                {
                  name: "wolf_index",
                  values_float: [1, 2, 3, 4],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "wolf_duration",
                  values_float: [50],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN:",
                  bonuses: [],
                },
                {
                  name: "wolf_bat",
                  values_float: [
                    1.2000000476837158, 1.100000023841858, 1,
                    0.8999999761581421,
                  ],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN ĐÁNH CƠ BẢN:",
                  bonuses: [],
                },
                {
                  name: "wolf_damage",
                  values_float: [18, 24, 30, 36],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG:",
                  bonuses: [],
                },
                {
                  name: "wolf_hp",
                  values_float: [325, 375, 425, 475],
                  is_percentage: false,
                  heading_loc: "MÁU:",
                  bonuses: [
                    {
                      name: "special_bonus_unique_lycan_7",
                      value: 200,
                      operation: 0,
                    },
                  ],
                },
                {
                  name: "bonus_health",
                  values_float: [0],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [
                    {
                      name: "special_bonus_unique_lycan_7",
                      value: 200,
                      operation: 0,
                    },
                  ],
                },
                {
                  name: "bonus_damage",
                  values_float: [0],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [
                    {
                      name: "special_bonus_unique_lycan_3",
                      value: 10,
                      operation: 0,
                    },
                  ],
                },
                {
                  name: "bash_chance",
                  values_float: [15],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "bash_duration",
                  values_float: [1],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "tooltip_wolf_count",
                  values_float: [2],
                  is_percentage: false,
                  heading_loc: "SỐ SÓI TẠO RA:",
                  bonuses: [
                    {
                      name: "special_bonus_unique_lycan_2",
                      value: 2,
                      operation: 0,
                    },
                  ],
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
                  values_float: [125, 130, 135, 140],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [30],
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
              id: 5396,
              name: "lycan_howl",
              name_loc: "Howl",
              desc_loc:
                "Khiến kẻ địch trong cự ly %radius% quanh Lycan và sói của hắn giảm giáp và sát thương đòn đánh.",
              lore_loc:
                "Tiếng sói tru báo hiệu cho kẻ thù của Banehallow rằng hắn đang ẩn mình giữa chúng.",
              notes_loc: [],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "134217732",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 0,
              immunity: 4,
              dispellable: 2,
              max_level: 4,
              cast_ranges: [0],
              cast_points: [
                0.30000001192092896, 0.30000001192092896, 0.30000001192092896,
                0.30000001192092896,
              ],
              channel_times: [0, 0, 0, 0],
              cooldowns: [22, 20, 18, 16],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [35, 40, 45, 50],
              gold_costs: [],
              special_values: [
                {
                  name: "howl_duration",
                  values_float: [8],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN:",
                  bonuses: [],
                },
                {
                  name: "attack_damage_reduction",
                  values_float: [25, 30, 35, 40],
                  is_percentage: true,
                  heading_loc: "SÁT THƯƠNG TẤN CÔNG GIẢM:",
                  bonuses: [
                    {
                      name: "special_bonus_unique_lycan_6",
                      value: 20,
                      operation: 0,
                    },
                  ],
                },
                {
                  name: "armor",
                  values_float: [4, 5, 6, 7],
                  is_percentage: false,
                  heading_loc: "GIẢM GIÁP:",
                  bonuses: [],
                },
                {
                  name: "radius",
                  values_float: [2000],
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
                  values_float: [35, 40, 45, 50],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [22, 20, 18, 16],
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
              id: 5397,
              name: "lycan_feral_impulse",
              name_loc: "Feral Impulse",
              desc_loc:
                "Tăng khả năng hồi máu mỗi giây và sát thương đòn đánh của Lycan cũng như mọi đơn vị dưới quyền điều khiển của hắn.",
              lore_loc:
                "Sự hòa hợp giữa Banehallow và thú tính của loài khuyển giúp cường hóa phản xạ cũng như khả năng săn mồi của hắn.",
              notes_loc: [],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
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
                  name: "bonus_damage",
                  values_float: [10, 20, 30, 40],
                  is_percentage: true,
                  heading_loc: "SÁT THƯƠNG TĂNG THÊM:",
                  bonuses: [
                    {
                      name: "special_bonus_unique_lycan_4",
                      value: 25,
                      operation: 0,
                    },
                  ],
                },
                {
                  name: "bonus_hp_regen",
                  values_float: [1, 3, 5, 7],
                  is_percentage: false,
                  heading_loc: "MÁU HỒI MỖI GIÂY TĂNG:",
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
              id: 333,
              name: "lycan_wolf_bite",
              name_loc: "Wolf Bite",
              desc_loc:
                "Lycan cắn một đồng minh, khiến họ có hiệu ứng của Shapeshift. Lycan và mục tiêu bị cắn có %lifesteal_percent%%% hút máu và chia sẻ hiệu ứng hút máu cho nhau khi ở cách nhau không quá %lifesteal_range% đơn vị.",
              lore_loc: "Vết cắn này trông có nhiễm trùng không?",
              notes_loc: [],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "8589934665",
              target_team: 1,
              target_type: 1,
              flags: 0,
              damage: 0,
              immunity: 1,
              dispellable: 3,
              max_level: 3,
              cast_ranges: [300],
              cast_points: [
                0.30000001192092896, 0.30000001192092896, 0.30000001192092896,
                0.30000001192092896,
              ],
              channel_times: [0, 0, 0, 0],
              cooldowns: [125, 110, 95],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [150],
              gold_costs: [],
              special_values: [
                {
                  name: "lifesteal_percent",
                  values_float: [30],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "lifesteal_range",
                  values_float: [1200],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "attack_range",
                  values_float: [150],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCastRange",
                  values_float: [300],
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
                  values_float: [150],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [125, 110, 95],
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
              id: 5398,
              name: "lycan_shapeshift",
              name_loc: "Shapeshift",
              desc_loc:
                "Lycan hóa thành dạng sói, cho hắn và các đơn vị dưới quyền điều khiển khả năng đánh chí mạng, đồng thời tăng tầm nhìn ban đêm. Khi Shapeshift, Lycan và các đơn vị dưới quyền điều khiển di chuyển với tốc độ tăng cao và không thể bị làm chậm, có %crit_chance%%% cơ hội đánh chí mạng gây %crit_multiplier%%% sát thương.",
              lore_loc:
                "Vĩnh viễn là nô lệ của lời nguyền hóa sói, Banehallow đã chịu bằng lòng với số phận và chấp nhận hung tính của bản thân.",
              notes_loc: [
                "Các loại nguyền rủa hóa thú không làm mất khả năng chạy siêu tốc của Shapeshift trên Lycan.",
                "Lycan ở trạng thái này có kích thước tương tác nhỏ hơn.",
              ],
              shard_loc: "",
              scepter_loc: "",
              type: 1,
              behavior: "4",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 0,
              immunity: 0,
              dispellable: 3,
              max_level: 3,
              cast_ranges: [0],
              cast_points: [0, 0, 0, 0],
              channel_times: [0, 0, 0, 0],
              cooldowns: [125, 110, 95],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [100],
              gold_costs: [],
              special_values: [
                {
                  name: "duration",
                  values_float: [25],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN:",
                  bonuses: [
                    {
                      name: "special_bonus_unique_lycan_1",
                      value: 6,
                      operation: 0,
                    },
                  ],
                },
                {
                  name: "speed",
                  values_float: [550],
                  is_percentage: false,
                  heading_loc: "TỐC ĐỘ CHẠY KHI SHAPESHIFT:",
                  bonuses: [],
                },
                {
                  name: "bonus_night_vision",
                  values_float: [1000],
                  is_percentage: false,
                  heading_loc: "TẦM NHÌN ĐÊM TĂNG:",
                  bonuses: [],
                },
                {
                  name: "transformation_time",
                  values_float: [1.100000023841858],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN BIẾN HÌNH:",
                  bonuses: [],
                },
                {
                  name: "crit_chance",
                  values_float: [40],
                  is_percentage: true,
                  heading_loc: "TỶ LỆ CHÍ MẠNG:",
                  bonuses: [
                    {
                      name: "special_bonus_unique_lycan_5",
                      value: 30,
                      operation: 0,
                    },
                  ],
                },
                {
                  name: "crit_multiplier",
                  values_float: [150, 175, 200],
                  is_percentage: true,
                  heading_loc: "SÁT THƯƠNG CHÍ MẠNG:",
                  bonuses: [],
                },
                {
                  name: "health_bonus",
                  values_float: [200, 300, 400],
                  is_percentage: false,
                  heading_loc: "MÁU TĂNG:",
                  bonuses: [],
                },
                {
                  name: "AbilityManaCost",
                  values_float: [100],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [125, 110, 95],
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
              id: 621,
              name: "special_bonus_unique_lycan_6",
              name_loc:
                "+{s:bonus_attack_damage_reduction}% Howl Attack Damage Reduction",
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
              id: 6519,
              name: "special_bonus_unique_lycan_3",
              name_loc: "+{s:bonus_bonus_damage} Wolves Damage",
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
              id: 794,
              name: "special_bonus_unique_lycan_7",
              name_loc: "+{s:bonus_bonus_health} Summon Wolves Health",
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
              id: 846,
              name: "special_bonus_unique_lycan_8",
              name_loc: "-{s:value}s Shapeshift Cooldown",
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
              id: 6134,
              name: "special_bonus_unique_lycan_1",
              name_loc: "+{s:bonus_duration}s Shapeshift Duration",
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
              id: 6684,
              name: "special_bonus_unique_lycan_4",
              name_loc: "+{s:bonus_bonus_damage}% Feral Impulse Damage",
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
              id: 6685,
              name: "special_bonus_unique_lycan_5",
              name_loc:
                "+{s:bonus_crit_chance}% Chance Shapeshift Critical Strike",
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
              id: 6140,
              name: "special_bonus_unique_lycan_2",
              name_loc: "+{s:bonus_tooltip_wolf_count} Wolves Summoned",
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
