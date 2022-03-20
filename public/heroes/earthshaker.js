if (detail === undefined) var detail = {};
detail.earthshaker = {
  result: {
    data: {
      heroes: [
        {
          id: 7,
          name: "npc_dota_hero_earthshaker",
          order_id: 6,
          name_loc: "Earthshaker",
          bio_loc:
            "Giống như lũ golem hay gargoyle, Earthshaker cũng khởi nguồn từ đất mẹ, nhưng giờ bước đi tự do trên mặt đất. Khác với các thực thể đó, hắn sáng tạo nên bản thân bằng chính ý chí của mình, và không phục tùng bất kỳ chủ nhân nào ngoài bản thân. Trong những cơn thao thức mộng mị, khi còn nằm sâu dưới tầng tầng đất đá, hắn bắt đầu nhận thức được sự sống tự do trôi dạt phía trên. Hắn tò mò, thật tò mò.\r\n<br><br>Để rồi vào mùa dời non lấp bể, khi mà những đỉnh núi Nishai rung mình tạo thành tuyết lở, khiến sông đổi chiều, biến thung lũng nông thành vực không đáy. Khi đất ngừng thở, ngừng rung, từ trong màn sương bụi Earthshaker bước ra, gạt đá tảng và sỏi to tựa như rũ bỏ chăn êm nệm ấm.\r\n<br><br>Hắn tự tạc bản thân theo hình một con thú phàm tục, tự đặt cái tên Raigor Stonehoof. Hắn có thể thở, có thể chảy máu, và dĩ nhiên, có thể chết. Nhưng linh hồn vẫn chân chất như mặt đất mà thôi; hắn chứa sức mạnh ấy trong cây tổ vật (totem) ma thuật, mang theo mình như hình với bóng. Để rồi ngày mà hắn trở về với cát bụi, đất mẹ sẽ chào đón đứa con trai hoang đàng như hắn về nhà.",
          hype_loc:
            "Whether <b>blocking an enemy's escape</b>, dividing their forces, or <b>shattering the ground</b> beneath gathered foes, Earthshaker is at his best when he strikes without warning. Whatever survives the <b>aftershocks</b> still has a swing from his <b>mighty totem</b> to look forward to.",
          npe_desc_loc: "Cản trở kẻ địch với kỹ năng làm choáng liên hoàn",
          str_base: 22,
          str_gain: 3.700000047683716,
          agi_base: 12,
          agi_gain: 1.399999976158142,
          int_base: 18,
          int_gain: 2.0999999046325684,
          primary_attr: 0,
          complexity: 2,
          attack_capability: 1,
          role_levels: [0, 1, 1, 2, 0, 0, 0, 0, 3],
          damage_min: 49,
          damage_max: 59,
          attack_rate: 1.7000000476837158,
          attack_range: 150,
          projectile_speed: 0,
          armor: 4,
          magic_resistance: 25,
          movement_speed: 315,
          turn_rate: 0.8999999761581421,
          sight_range_day: 1800,
          sight_range_night: 800,
          max_health: 640,
          health_regen: 3.200000047683716,
          max_mana: 291,
          mana_regen: 0.9000000357627869,
          abilities: [
            {
              id: 5023,
              name: "earthshaker_fissure",
              name_loc: "Fissure",
              desc_loc:
                "Đập mạnh tổ vật vĩ đại của mình xuống mặt đất, Earthshaker tạo ra một dải đá không thể băng qua được, gây sát thương và làm choáng đối phương bị dính phải.",
              lore_loc:
                "Tổ vật Nishian mở tung mặt đất với một sức mạnh khổng lồ.",
              notes_loc: [
                "Quái sẽ đứng chờ cho Fissure mất đi chứ không cố gắng đi vòng qua nó.",
                "Fissure không bị chặn bởi Linken's Sphere.",
              ],
              shard_loc:
                "Giảm 2 giây hồi Fissure và cho phép Earthshaker đi lên trên nó. Mỗi khi hắn thi triển kỹ năng, hiệu ứng của Aftershock sẽ được áp dụng quanh Fissure và gây choáng trong một nửa thời lượng.",
              scepter_loc: "",
              type: 0,
              behavior: "134217744",
              target_team: 2,
              target_type: 19,
              flags: 0,
              damage: 2,
              immunity: 4,
              dispellable: 1,
              max_level: 4,
              cast_ranges: [1400],
              cast_points: [
                0.6899999976158142, 0.6899999976158142, 0.6899999976158142,
                0.6899999976158142,
              ],
              channel_times: [0, 0, 0, 0],
              cooldowns: [21, 19, 17, 15],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [125, 140, 155, 170],
              gold_costs: [],
              special_values: [
                {
                  name: "fissure_range",
                  values_float: [1400],
                  is_percentage: false,
                  heading_loc: "CỰ LY FISSURE:",
                  bonuses: [],
                },
                {
                  name: "fissure_duration",
                  values_float: [6.5, 7, 7.5, 8],
                  is_percentage: false,
                  heading_loc: "FISSURE TỒN TẠI TRONG:",
                  bonuses: [],
                },
                {
                  name: "fissure_radius",
                  values_float: [225],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "stun_duration",
                  values_float: [1, 1.25, 1.5, 1.75],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN CHOÁNG:",
                  bonuses: [],
                },
                {
                  name: "fissure_damage",
                  values_float: [110, 160, 210, 260],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG:",
                  bonuses: [],
                },
                {
                  name: "AbilityCastRange",
                  values_float: [1400],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCastPoint",
                  values_float: [0.6899999976158142],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityManaCost",
                  values_float: [125, 140, 155, 170],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [21, 19, 17, 15],
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
              id: 5024,
              name: "earthshaker_enchant_totem",
              name_loc: "Enchant Totem",
              desc_loc:
                "Cường hóa tổ vật của Earthshaker, khiến nó tăng thêm sức mạnh và %bonus_attack_range% tầm đánh cho đòn đánh tiếp theo.",
              lore_loc:
                "Với sức khỏe của khỉ đột, Raigor đủ mạnh để dời cả núi.",
              notes_loc: [
                "Sát thương tăng thêm dựa vào sát thương cơ bản và sát thương từ thuộc tính chính.",
                "Dùng lên bản thân khi có Scepter sẽ thi triển kỹ năng này giống với lúc chưa có Scepter, Earthshaker không nhảy lên.",
              ],
              shard_loc: "",
              scepter_loc:
                "Enchant Totem trở thành một kỹ năng có thể chỉ định trên mặt đất với tầm thi triển là %distance_scepter%, cho phép Earthshaker nhảy lên không trung và tiếp đất tại vị trí chỉ định và dùng Enchant Totem ngay tại đó. Dùng lên bản thân khi có Scepter sẽ thi triển kỹ năng này giống với lúc chưa có Scepter, Earthshaker không nhảy lên. Khiến Enchant Totem có 40%% đánh lan.",
              type: 0,
              behavior: "4",
              target_team: 2,
              target_type: 19,
              flags: 0,
              damage: 0,
              immunity: 0,
              dispellable: 2,
              max_level: 4,
              cast_ranges: [0],
              cast_points: [0.6000000238418579],
              channel_times: [0, 0, 0, 0],
              cooldowns: [5],
              durations: [14],
              damages: [0, 0, 0, 0],
              mana_costs: [35, 40, 45, 50],
              gold_costs: [],
              special_values: [
                {
                  name: "totem_damage_percentage",
                  values_float: [100, 200, 300, 400],
                  is_percentage: true,
                  heading_loc: "TĂNG:",
                  bonuses: [
                    {
                      name: "special_bonus_unique_earthshaker_totem_damage",
                      value: 50,
                      operation: 0,
                    },
                  ],
                },
                {
                  name: "distance_scepter",
                  values_float: [950],
                  is_percentage: false,
                  heading_loc: "KHOẢNG CÁCH NHẢY (SCEPTER):",
                  bonuses: [],
                },
                {
                  name: "aftershock_range",
                  values_float: [300],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "scepter_height",
                  values_float: [950],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "scepter_height_arcbuffer",
                  values_float: [100],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "scepter_acceleration_z",
                  values_float: [4000],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "scepter_acceleration_horizontal",
                  values_float: [3000],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "scepter_leap_duration",
                  values_float: [0.800000011920929],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "bonus_attack_range",
                  values_float: [75],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityDuration",
                  values_float: [14],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN:",
                  bonuses: [],
                },
                {
                  name: "AbilityCastPoint",
                  values_float: [0.6000000238418579],
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
                  values_float: [5],
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
              id: 5025,
              name: "earthshaker_aftershock",
              name_loc: "Aftershock",
              desc_loc:
                "Khiến cho mặt đất rung chuyển, gây thêm một lượng sát thương kèm theo hiệu ứng choáng lên các kẻ địch xung quanh mỗi khi Earthshaker sử dụng kỹ năng.",
              lore_loc:
                "Mặt đất rung chuyển bởi những bước chân mạnh mẽ của Raigor.",
              notes_loc: ["Sử dụng đồ không kích hoạt Aftershock."],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "2",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 2,
              immunity: 4,
              dispellable: 1,
              max_level: 4,
              cast_ranges: [0],
              cast_points: [0, 0, 0, 0],
              channel_times: [0, 0, 0, 0],
              cooldowns: [0, 0, 0, 0],
              durations: [
                0.6000000238418579, 0.8999999761581421, 1.2000000476837158, 1.5,
              ],
              damages: [0, 0, 0, 0],
              mana_costs: [0, 0, 0, 0],
              gold_costs: [],
              special_values: [
                {
                  name: "aftershock_range",
                  values_float: [300],
                  is_percentage: false,
                  heading_loc: "BÁN KÍNH:",
                  bonuses: [],
                },
                {
                  name: "aftershock_damage",
                  values_float: [75, 100, 125, 150],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG:",
                  bonuses: [],
                },
                {
                  name: "AbilityDuration",
                  values_float: [
                    0.6000000238418579, 0.8999999761581421, 1.2000000476837158,
                    1.5,
                  ],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN:",
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
              id: 5026,
              name: "earthshaker_echo_slam",
              name_loc: "Echo Slam",
              desc_loc:
                "Sóng chấn động lan truyền dưới mặt đất, gây sát thương lên kẻ địch. Mỗi kẻ địch trúng chiêu đều tạo thành dư chấn, gây sát thương lên các kẻ địch khác xung quanh. Tướng thật sẽ tạo ra hai dư chấn.",
              lore_loc:
                "Mặt đất nứt ra, những ngọn núi sụp đổ, và kẻ thù của Raigor sẽ bị nghiền nát bởi Echo Slam.",
              notes_loc: [],
              shard_loc: "",
              scepter_loc: "",
              type: 1,
              behavior: "4",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 2,
              immunity: 4,
              dispellable: 0,
              max_level: 3,
              cast_ranges: [0],
              cast_points: [0, 0, 0, 0],
              channel_times: [0, 0, 0, 0],
              cooldowns: [150, 130, 110],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [145, 205, 265],
              gold_costs: [],
              special_values: [
                {
                  name: "echo_slam_damage_range",
                  values_float: [600],
                  is_percentage: false,
                  heading_loc: "BÁN KÍNH:",
                  bonuses: [],
                },
                {
                  name: "echo_slam_echo_search_range",
                  values_float: [600],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "echo_slam_echo_range",
                  values_float: [600],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "echo_slam_echo_damage",
                  values_float: [70, 90, 110],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG DƯ CHẤN:",
                  bonuses: [],
                },
                {
                  name: "echo_slam_initial_damage",
                  values_float: [100, 140, 180],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG KHỞI ĐIỂM:",
                  bonuses: [],
                },
                {
                  name: "AbilityManaCost",
                  values_float: [145, 205, 265],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [150, 130, 110],
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
              id: 7372,
              name: "special_bonus_attack_base_damage_30",
              name_loc: "+{s:value} sát thương cơ bản",
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
              id: 744,
              name: "special_bonus_unique_earthshaker_4",
              name_loc: "+{s:value} sát thương Fissure",
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
                  values_float: [80],
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
              id: 918,
              name: "special_bonus_unique_earthshaker_totem_damage",
              name_loc:
                "+{s:bonus_totem_damage_percentage}% Enchant Totem Damage",
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
              id: 858,
              name: "special_bonus_unique_earthshaker_6",
              name_loc: "+{s:value} Aftershock Damage",
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
              id: 6425,
              name: "special_bonus_unique_earthshaker_2",
              name_loc: "+{s:value} sát thương dư chấn Echo Slam",
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
              id: 6511,
              name: "special_bonus_unique_earthshaker_3",
              name_loc: "+{s:value} cự ly Fissure",
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
                  values_float: [320],
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
              id: 8041,
              name: "special_bonus_unique_earthshaker_5",
              name_loc: "+{s:value} Aftershock Range",
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
              id: 6035,
              name: "special_bonus_unique_earthshaker",
              name_loc: "-{s:value} giây hồi Enchant Totem",
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
                  values_float: [1.5],
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