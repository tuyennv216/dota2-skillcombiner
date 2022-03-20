if (detail === undefined) var detail = {};
detail.tidehunter = {
  result: {
    data: {
      heroes: [
        {
          id: 29,
          name: "npc_dota_hero_tidehunter",
          order_id: 20,
          name_loc: "Tidehunter",
          bio_loc:
            "Tidehunter, thường được biết đến với tên gọi Leviathan, từng là kẻ bất khả chiến bại, xưng hùng xưng bá của Quần đảo Sunken, dù biết nhiều như thế, nhưng động cơ thôi thúc hắn và các đồng loại của hắn vẫn còn là điều bí ẩn. Ai ai cũng đều nhận thức rõ tầm quan trọng của tuyến giao thương hàng hải đối với các bộ tộc trên cạn, bởi sự hưng thịnh và lụi tàn của nhiều đế chế hoàn toàn có thể phụ thuộc vào việc bên nào nắm quyền điều khiển vùng biển lớn. Song ta lại biết rất ít về tuyến hải lưu dưới đáy biển, hay thế nào mà các bộ lạc chiến binh Meranthic Diaspora đã gầy dựng nên lãnh hải của riêng mình qua nhiều đợt chinh phạt bất tận dưới lòng đại dương. Qua những hiệp ước mong manh giữa chủng tộc Mer và con người, chúng ta thấp thoáng thấy được quy mô của các đế chế dưới biển sâu, nhưng chính trị của họ dường như lại phức tạp và mơ hồ. Có vẻ như Leviathan đã mệt mỏi với những xung đột cỏn con đó, để rồi bỏ tất cả lại sau lưng và dấn thân vào con đường riêng của mình, hiến dâng lòng trung thành duy nhất cho vị thần biển sâu, Maelrawn the Tentacular. Giờ đây, hắn rình rập nơi vùng nước nông, săn tìm kẻ xấu số lạc vào lãnh hải của mình, cả con người lẫn Meranth, mang theo một nỗi căm hận đặc biệt dành cho đô đốc Kunkka - kẻ thù truyền kiếp của hắn, với cội nguồn mối hiềm khích giữa hai bên đã chìm vào quên lãng trong những khe vực sâu thẳm nhất của đại dương.",
          hype_loc:
            "Đi tiên phong trong đội hình, rình rập kẻ thù, Tidehunter luôn <b>canh đúng thời điểm trong giao tranh</b>. Khi thời khắc chín mùi, hắn thả những xúc tu khủng khiếp lên mặt đất, tàn phá mọi thứ và dọn đường cho đồng đội tiêu diệt <b>kẻ địch đang choáng váng.</b>",
          npe_desc_loc: "Bền bỉ, phủi sát thương kẻ địch như phủi bụi",
          str_base: 27,
          str_gain: 3.5,
          agi_base: 15,
          agi_gain: 1.5,
          int_base: 18,
          int_gain: 1.7000000476837158,
          primary_attr: 0,
          complexity: 1,
          attack_capability: 1,
          role_levels: [1, 0, 1, 2, 0, 3, 0, 0, 3],
          damage_min: 52,
          damage_max: 58,
          attack_rate: 1.7000000476837158,
          attack_range: 150,
          projectile_speed: 900,
          armor: 2.5,
          magic_resistance: 25,
          movement_speed: 300,
          turn_rate: 0.6000000238418579,
          sight_range_day: 1800,
          sight_range_night: 800,
          max_health: 740,
          health_regen: 2.950000047683716,
          max_mana: 291,
          mana_regen: 1.4000000953674316,
          abilities: [
            {
              id: 5118,
              name: "tidehunter_gush",
              name_loc: "Gush",
              desc_loc:
                "Triệu tập một sóng nước gây sát thương cho một đơn vị địch, giảm tốc độ chạy và giáp của chúng.",
              lore_loc:
                "Trên hành trình trở thành quán quân của Sunken Isles, Leviathan đạt được sức mạnh thao túng biển cả.",
              notes_loc: [],
              shard_loc: "",
              scepter_loc:
                "Gush trở thành kỹ năng chọn mục tiêu tự do, tạo ra một cơn sóng tác động lên kẻ địch theo một đường thẳng. Giảm thời gian hồi chiêu.",
              type: 0,
              behavior: "8",
              target_team: 2,
              target_type: 19,
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
              cooldowns: [12],
              durations: [4],
              damages: [0, 0, 0, 0],
              mana_costs: [100, 105, 110, 115],
              gold_costs: [],
              special_values: [
                {
                  name: "gush_damage",
                  values_float: [110, 160, 210, 260],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG:",
                  bonuses: [],
                },
                {
                  name: "projectile_speed",
                  values_float: [2500],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "movement_speed",
                  values_float: [-40],
                  is_percentage: true,
                  heading_loc: "LÀM CHẬM:",
                  bonuses: [],
                },
                {
                  name: "negative_armor",
                  values_float: [3, 4, 5, 6],
                  is_percentage: false,
                  heading_loc: "GIẢM GIÁP:",
                  bonuses: [],
                },
                {
                  name: "speed_scepter",
                  values_float: [1500],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "aoe_scepter",
                  values_float: [260],
                  is_percentage: false,
                  heading_loc: "BÁN KÍNH (SCEPTER):",
                  bonuses: [],
                },
                {
                  name: "cooldown_scepter",
                  values_float: [7],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN HỒI (SCEPTER):",
                  bonuses: [],
                },
                {
                  name: "cast_range_scepter",
                  values_float: [2200],
                  is_percentage: false,
                  heading_loc: "KHOẢNG CÁCH (SCEPTER):",
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
                  name: "AbilityDuration",
                  values_float: [4],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN BÙA HẠI:",
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
                  values_float: [100, 105, 110, 115],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [12],
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
              id: 5119,
              name: "tidehunter_kraken_shell",
              name_loc: "Kraken Shell",
              desc_loc:
                "Lớp da của Tidehunter dày lên, tự động chặn một phần các sát thương vật lý từ các đòn đánh thường. Lớp da này cũng xóa bỏ các trạng thái bất lợi mỗi lần sát thương nhận đạt đến ngưỡng nhất định.\n\nKhông cộng dồn với các trang bị có khả năng đỡ đòn.\n\nLOẠI HÓA GIẢI: Mạnh",
              lore_loc:
                "Hải quân Claddish truyền tai nhau giai thoại về một con quái vật biển đáng sợ, gươm dao đâm không thủng, hủy diệt cả hạm đội.",
              notes_loc: [
                "Chỉ sát thương gây ra bởi những người chơi khác được tính vào ngưỡng giải bùa hại.",
                "Bộ đếm sát thương sẽ về 0 nếu %damage_reset_interval% giây liền không nhận sát thương từ người chơi.",
                "Kraken Shell loại bỏ hầu hết các bùa hại, kể cả loại thường không thể giải trừ.",
              ],
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
                  name: "damage_reduction",
                  values_float: [15, 30, 45, 60],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG CHẶN:",
                  bonuses: [],
                },
                {
                  name: "damage_cleanse",
                  values_float: [600, 550, 500, 450],
                  is_percentage: false,
                  heading_loc: "NGƯỠNG SÁT THƯƠNG:",
                  bonuses: [],
                },
                {
                  name: "damage_reset_interval",
                  values_float: [7],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN TÍNH SÁT THƯƠNG:",
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
              id: 5120,
              name: "tidehunter_anchor_smash",
              name_loc: "Anchor Smash",
              desc_loc:
                "Tidehunter vung chiếc mỏ neo đồ sộ của hắn, cùng lúc tấn công mọi kẻ địch xung quanh với sát thương được gia tăng, và giảm sát thương đòn đánh thường của chúng.",
              lore_loc:
                "Chôm từ một trong các tàu của đô đốc Kunkka, chiếc mỏ neo đồ sộ của Leviathan trở thành một vũ khí khá vừa tay hắn.",
              notes_loc: [
                "Anchor Smash tác động lên các loại quái cổ đại trừ Roshan.",
              ],
              shard_loc:
                "Increases Anchor Smash damage by 75 and causes it to affect buildings. Reduces cooldown by 1 second.",
              scepter_loc: "",
              type: 0,
              behavior: "4",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 1,
              immunity: 4,
              dispellable: 2,
              max_level: 4,
              cast_ranges: [375],
              cast_points: [0.4000000059604645],
              channel_times: [0, 0, 0, 0],
              cooldowns: [7, 6, 5, 4],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [40, 50, 60, 70],
              gold_costs: [],
              special_values: [
                {
                  name: "attack_damage",
                  values_float: [40, 85, 130, 175],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG GÂY THÊM:",
                  bonuses: [],
                },
                {
                  name: "damage_reduction",
                  values_float: [-30, -40, -50, -60],
                  is_percentage: true,
                  heading_loc: "SÁT THƯƠNG GIẢM:",
                  bonuses: [],
                },
                {
                  name: "reduction_duration",
                  values_float: [6],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN:",
                  bonuses: [],
                },
                {
                  name: "radius",
                  values_float: [375],
                  is_percentage: false,
                  heading_loc: "BÁN KÍNH:",
                  bonuses: [],
                },
                {
                  name: "AbilityCastRange",
                  values_float: [375],
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
                  name: "AbilityManaCost",
                  values_float: [40, 50, 60, 70],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [7, 6, 5, 4],
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
              id: 5121,
              name: "tidehunter_ravage",
              name_loc: "Ravage",
              desc_loc:
                "Giậm mặt đất mạnh đến mức khiến xúc tu thủy quái trồi lên khắp nơi, sát thương và làm choáng mọi kẻ thù xung quanh.",
              lore_loc:
                "Phạm đến tên tà thần vực thẳm Maelrawn đã từng khiến cả một hạm đội mất tích trên biển.",
              notes_loc: [
                "Ravage tác động lên cả các đơn vị tàng hình.",
                "Ravage lan từ tâm ra ngoài với vận tốc %speed% đơn vị.",
              ],
              shard_loc: "",
              scepter_loc: "",
              type: 1,
              behavior: "4",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 2,
              immunity: 4,
              dispellable: 1,
              max_level: 3,
              cast_ranges: [0],
              cast_points: [
                0.30000001192092896, 0.30000001192092896, 0.30000001192092896,
              ],
              channel_times: [0, 0, 0, 0],
              cooldowns: [150, 150, 150],
              durations: [0, 0, 0, 0],
              damages: [200, 300, 400],
              mana_costs: [150, 225, 325],
              gold_costs: [],
              special_values: [
                {
                  name: "radius",
                  values_float: [1250],
                  is_percentage: false,
                  heading_loc: "BÁN KÍNH:",
                  bonuses: [],
                },
                {
                  name: "speed",
                  values_float: [725],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "duration",
                  values_float: [
                    2.4000000953674316, 2.5999999046325684, 2.799999952316284,
                  ],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN:",
                  bonuses: [],
                },
                {
                  name: "#AbilityDamage",
                  values_float: [200, 300, 400],
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
                  values_float: [150, 225, 325],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [150],
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
              id: 754,
              name: "special_bonus_unique_tidehunter_5",
              name_loc: "Gush +{s:value}% làm chậm",
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
              id: 7977,
              name: "special_bonus_unique_tidehunter_6",
              name_loc: "-{s:value} Kraken Shell Damage Threshold",
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
              id: 6945,
              name: "special_bonus_unique_tidehunter_2",
              name_loc: "+{s:value} sát thương Gush",
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
                  values_float: [120],
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
              id: 6946,
              name: "special_bonus_unique_tidehunter_3",
              name_loc: "Anchor Smash giảm thêm {s:value}% sát thương",
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
                  values_float: [-20],
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
              id: 6947,
              name: "special_bonus_unique_tidehunter_4",
              name_loc: "+{s:value} sát thương Kraken Shell chặn",
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
            {
              id: 6151,
              name: "special_bonus_unique_tidehunter",
              name_loc: "Gush giảm thêm {s:value} giáp",
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
              id: 7978,
              name: "special_bonus_unique_tidehunter_7",
              name_loc: "+{s:value}s Ravage Stun",
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
              id: 7979,
              name: "special_bonus_unique_tidehunter_8",
              name_loc: "50% chance of Anchor Smash on attack",
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
          ],
        },
      ],
    },
    status: 1,
  },
};
