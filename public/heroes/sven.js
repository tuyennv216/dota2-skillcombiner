if (detail === undefined) var detail = {};
detail.sven = {
  result: {
    data: {
      heroes: [
        {
          id: 18,
          name: "npc_dota_hero_sven",
          order_id: 19,
          name_loc: "Sven",
          bio_loc:
            "Sven là đứa con hoang, kết quả mối lương duyên giữa một hiệp sĩ Vigil và một Pallid Meranth. Anh sinh ra và lớn lên tại tàn tích Shadeshore. Với người bố bị xử tử do vi phạm bộ luật Vigil Codex, mẹ bị chính đồng loại hoang dã xa lánh xua đuổi, Sven tin rằng danh dự không thể tìm thấy trong địa vị xã hội, mà phải do tự mình tạo ra. Sau khi chăm sóc mẹ trong những ngày chờ chết, Sven giấu thân phận và xung phong làm tân binh vào hội hiệp sỹ Vigil. Trong mười ba năm anh học trong trường phái của người cha quá cố, thuộc nằm lòng bộ luật cứng nhắc đã tuyên bố mình là thứ quái thai. Để rồi, đến cái ngày lẽ ra là thời điểm tuyên thệ trung thành, anh chiếm lấy Ngoại tông đao (Outcast Blade), đập nát Mũ thánh (Sacred Helm), đốt bộ luật hội trong chính ngọn lửa thiêng (Holy Flame) của chúng. Anh sải bước khỏi thành Vigil, vĩnh viễn cô độc, tuân theo bộ luật của chính mình tới từng văn tự một. Vẫn là một hiệp sĩ...nhưng là một hiệp sĩ lang bạt (Rogue Knight). Không chúa trời, không chủ nhân, Sven chỉ đáp trả tiếng gọi của chính bản thân.",
          hype_loc:
            "Sven luôn háo hức lao vào cuộc chiến. Anh ta làm cả <b>một nhóm địch choáng váng</b> rồi lao vào tham chiến. Và mỗi lần anh ta phát huy <b>tuyệt kỹ tăng sát thương</b> của mình, chỉ một vài phát chém của thanh đại đao cũng đủ để thanh trừng toàn bộ kẻ địch.",
          npe_desc_loc: "Dùng sức mạnh phi thường hạ gục nhiều kẻ địch một lúc",
          str_base: 22,
          str_gain: 3.200000047683716,
          agi_base: 21,
          agi_gain: 2.200000047683716,
          int_base: 16,
          int_gain: 1.2999999523162842,
          primary_attr: 0,
          complexity: 1,
          attack_capability: 1,
          role_levels: [2, 0, 1, 2, 0, 2, 0, 0, 2],
          damage_min: 63,
          damage_max: 65,
          attack_rate: 1.899999976158142,
          attack_range: 150,
          projectile_speed: 0,
          armor: 3.5,
          magic_resistance: 25,
          movement_speed: 325,
          turn_rate: 0.6000000238418579,
          sight_range_day: 1800,
          sight_range_night: 800,
          max_health: 640,
          health_regen: 2.450000047683716,
          max_mana: 267,
          mana_regen: 0.800000011920929,
          abilities: [
            {
              id: 5094,
              name: "sven_storm_bolt",
              name_loc: "Storm Hammer",
              desc_loc:
                "Sven phóng năng lượng từ chiếc găng tay phép của mình, gây sát thương và làm choáng kẻ địch trong bán kính nhỏ quanh mục tiêu chỉ định.",
              lore_loc:
                "Găng tay sắt của Rogue Knight, lấy từ trường phái kiếm sỹ đã xử tử cha mình, được hắn dùng để trừng trị những kẻ chống đối.",
              notes_loc: [],
              shard_loc: "",
              scepter_loc:
                "Increases cast range and transports Sven along the Storm Hammer. Storm  Hammer also applies a Dispel on the target.",
              type: 0,
              behavior: "134217768",
              target_team: 2,
              target_type: 19,
              flags: 0,
              damage: 2,
              immunity: 4,
              dispellable: 1,
              max_level: 4,
              cast_ranges: [600],
              cast_points: [
                0.20000000298023224, 0.20000000298023224, 0.20000000298023224,
                0.20000000298023224,
              ],
              channel_times: [0, 0, 0, 0],
              cooldowns: [18, 16, 14, 12],
              durations: [0, 0, 0, 0],
              damages: [95, 170, 245, 320],
              mana_costs: [110, 120, 130, 140],
              gold_costs: [],
              special_values: [
                {
                  name: "bolt_speed",
                  values_float: [1000],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "bolt_stun_duration",
                  values_float: [1.25, 1.5, 1.75, 2],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN:",
                  bonuses: [],
                },
                {
                  name: "bolt_aoe",
                  values_float: [255],
                  is_percentage: false,
                  heading_loc: "BÁN KÍNH:",
                  bonuses: [],
                },
                {
                  name: "vision_radius",
                  values_float: [225],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "cast_range_bonus_scepter",
                  values_float: [350],
                  is_percentage: false,
                  heading_loc: "TẦM THI TRIỂN TĂNG (SCEPTER):",
                  bonuses: [],
                },
                {
                  name: "#AbilityDamage",
                  values_float: [95, 170, 245, 320],
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
                  name: "AbilityManaCost",
                  values_float: [110, 120, 130, 140],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [18, 16, 14, 12],
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
              id: 5095,
              name: "sven_great_cleave",
              name_loc: "Great Cleave",
              desc_loc:
                "Sven tấn công với một lực lớn, gây sát thương lan ra cả những kẻ đứng gần mục tiêu chính.",
              lore_loc:
                "Hội hiệp sỹ Vigil vẫn đang tìm cách đoạt lại thanh Ngoại tông đao (Outcast Blade) bị Sven đánh cắp, một vũ khí có thể thổi bay cả đạo quân quèn trong tích tắc.",
              notes_loc: [
                "Sát thương đánh lan xuyên miễn nhiễm phép.",
                "Đánh lan có hiệu quả trong một vùng hình tròn trước mặt Sven.",
              ],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "2",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 0,
              immunity: 3,
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
                  name: "cleave_starting_width",
                  values_float: [150],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "cleave_ending_width",
                  values_float: [360],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "cleave_distance",
                  values_float: [700],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "great_cleave_damage",
                  values_float: [25, 50, 75, 100],
                  is_percentage: true,
                  heading_loc: "SÁT THƯƠNG LAN:",
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
              id: 5096,
              name: "sven_warcry",
              name_loc: "Warcry",
              desc_loc:
                "Warcry khiến các tướng đồng minh của Sven trở nên phấn chấn, tăng giáp và tốc độ chạy cho họ. Kéo dài %duration% giây.",
              lore_loc:
                "Hô vang vài câu từ Vigil Codex càng củng cố niềm tin của Sven vào quy tắc lang bạt của anh. Thật nên thơ!",
              notes_loc: [],
              shard_loc:
                "Warcry is now undispellable and passively grants 5 armor to all allies within 1200 range of Sven.",
              scepter_loc: "",
              type: 0,
              behavior: "2052",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 0,
              immunity: 1,
              dispellable: 2,
              max_level: 4,
              cast_ranges: [0],
              cast_points: [0, 0, 0, 0],
              channel_times: [0, 0, 0, 0],
              cooldowns: [32, 28, 24, 20],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [30, 40, 50, 60],
              gold_costs: [],
              special_values: [
                {
                  name: "movespeed",
                  values_float: [8, 12, 16, 20],
                  is_percentage: true,
                  heading_loc: "TỐC ĐỘ CHẠY TĂNG:",
                  bonuses: [],
                },
                {
                  name: "bonus_armor",
                  values_float: [6, 9, 12, 15],
                  is_percentage: false,
                  heading_loc: "GIÁP TĂNG:",
                  bonuses: [],
                },
                {
                  name: "radius",
                  values_float: [700],
                  is_percentage: false,
                  heading_loc: "BÁN KÍNH:",
                  bonuses: [],
                },
                {
                  name: "duration",
                  values_float: [8],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN:",
                  bonuses: [],
                },
                {
                  name: "AbilityManaCost",
                  values_float: [30, 40, 50, 60],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [32, 28, 24, 20],
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
              id: 5097,
              name: "sven_gods_strength",
              name_loc: "God's Strength",
              desc_loc:
                "Sven mở khóa khả năng tiềm tàng của mình, tăng sát thương trong vòng %abilityduration% giây.",
              lore_loc:
                "Sở hữu sức mạnh từng phá nát Sacred Helm, Rogue Knight không có đối thủ khi cận chiến.",
              notes_loc: [
                "Sát thương tăng thêm được tính dựa vào sát thương cơ bản và chỉ số chính của Sven.",
              ],
              shard_loc: "",
              scepter_loc: "",
              type: 1,
              behavior: "134217732",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 0,
              immunity: 0,
              dispellable: 3,
              max_level: 3,
              cast_ranges: [0],
              cast_points: [
                0.30000001192092896, 0.30000001192092896, 0.30000001192092896,
              ],
              channel_times: [0, 0, 0, 0],
              cooldowns: [110],
              durations: [35],
              damages: [0, 0, 0, 0],
              mana_costs: [100, 150, 200],
              gold_costs: [],
              special_values: [
                {
                  name: "gods_strength_damage",
                  values_float: [120, 160, 200],
                  is_percentage: true,
                  heading_loc: "SÁT THƯƠNG TĂNG THÊM:",
                  bonuses: [],
                },
                {
                  name: "AbilityDuration",
                  values_float: [35],
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
                  values_float: [100, 150, 200],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [110],
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
              id: 673,
              name: "special_bonus_unique_sven_5",
              name_loc: "Warcry +{s:value} giây thời lượng",
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
              id: 6119,
              name: "special_bonus_attack_speed_15",
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
              id: 6911,
              name: "special_bonus_unique_sven_3",
              name_loc: "-{s:value}s God's Strength Cooldown",
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
              id: 763,
              name: "special_bonus_unique_sven_8",
              name_loc: "+{s:value}% sát thương lan Great Cleave",
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
              id: 734,
              name: "special_bonus_unique_sven_6",
              name_loc: "Warcry +{s:value}% tốc độ chạy",
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
                  values_float: [8],
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
              id: 716,
              name: "special_bonus_unique_sven_7",
              name_loc: "+{s:value} giáp Warcry",
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
              id: 6910,
              name: "special_bonus_unique_sven_2",
              name_loc: "+{s:value}% sát thương God's Strength",
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
              id: 7112,
              name: "special_bonus_unique_sven_4",
              name_loc: "+{s:value} giây choáng Storm Hammer",
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
          ],
        },
      ],
    },
    status: 1,
  },
};