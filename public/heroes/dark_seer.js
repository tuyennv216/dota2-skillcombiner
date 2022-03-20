if (detail === undefined) var detail = {};
detail.dark_seer = {
  result: {
    data: {
      heroes: [
        {
          id: 55,
          name: "npc_dota_hero_dark_seer",
          order_id: 33,
          name_loc: "Dark Seer",
          bio_loc:
            'Thần tốc khi cần thiết và đồng thời cũng là một chiến lược gia khôn ngoan, Ish\'Kafel Dark Seer chẳng cần lấy một khí giới sắc bén nào để đánh bại kẻ thù. Thay vào đó, ông sử dụng sức mạnh đến từ bộ óc siêu việt của mình, lèo lái cuộc chiến theo hướng có lợi cho bản thân. Xuất thân từ một nơi mà ông gọi là "Vùng đất phía sau bức tường", thế nên Dark Seer là kẻ lưu vong xa xứ, một chiến binh đến từ vương quốc nằm ngoại thực tại này.\r\n<br><br>Từng là đại tướng quân của dân tộc ông, và là thủ vệ quân dũng mãnh của vương thần Damathryx, đội quân của Dark Seer đã bị quét sạch trong những ngày cuối cùng của cuộc Đại Chiến Ranh Giới (Great Boundaries War), bởi một lực lượng đông hơn bội phần. Đối mặt với thất bại, ông cố thực hiện hành động tuyệt vọng cuối cùng này: dùng mưu trí, dẫn dụ đội quân đối địch vào một mê cung sâu năm trong những bức tường. Tại thời khắc cuối cùng, ngay trước khi bị bắt, ông băng qua, rồi ngay lập tức niêm phong khóa tường bằng bằng một vụ nổ bộc phát năng lượng bóng tối. Khi bụi lắng, Dark Seer nhận ra mình đã thành công, cứu được đồng bào nhưng rồi... chỉ sau một cái nháy mắt, ông lại thấy mặt trời của thế giới khác, với đường về đã tuyệt. Giờ đây, ông tận lực chứng minh giá trị của mình với vai trò chiến lược gia quân sự, và thề sẽ chứng minh mình là chiến lược gia vĩ đại nhất mà thế giới xa lạ này từng được thấy.',
          hype_loc:
            "Versatile and strategic, Dark Seer excels at <b>manipulating the positions</b> of his enemies. <b>Vacuuming foes</b> into the attacks of his allies, he can turn enemy strength against itself by pulling foes through his <b>replicating wall.</b>",
          npe_desc_loc: "Kéo và thao túng vị trí quân địch",
          str_base: 22,
          str_gain: 2.5999999046325684,
          agi_base: 18,
          agi_gain: 1.7999999523162842,
          int_base: 21,
          int_gain: 2.700000047683716,
          primary_attr: 2,
          complexity: 1,
          attack_capability: 1,
          role_levels: [0, 0, 0, 1, 1, 0, 1, 0, 1],
          damage_min: 54,
          damage_max: 60,
          attack_rate: 1.7000000476837158,
          attack_range: 150,
          projectile_speed: 900,
          armor: 5,
          magic_resistance: 25,
          movement_speed: 295,
          turn_rate: 0.6000000238418579,
          sight_range_day: 1800,
          sight_range_night: 800,
          max_health: 640,
          health_regen: 2.450000047683716,
          max_mana: 327,
          mana_regen: 1.0500000715255737,
          abilities: [
            {
              id: 5255,
              name: "dark_seer_vacuum",
              name_loc: "Vacuum",
              desc_loc:
                "Dark Seer tạo ra một vùng chân không, hút đối phương trong phạm vi đó vào tâm, làm gián đoạn mọi hành động của chúng và gây sát thương.",
              lore_loc:
                "Ish'Kafel tạm thời dịch chuyển tâm trọng lực sang vị trí hắn chọn lựa.",
              notes_loc: [
                "Vacuum làm gián đoạn các kỹ năng đang vận pháp.",
                "Hút các mục tiêu lại trong %duration% giây trước khi gây sát thương.",
                "Cây ở gần trung tâm của phép này sẽ bị phá.",
              ],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "48",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 2,
              immunity: 4,
              dispellable: 1,
              max_level: 4,
              cast_ranges: [450, 500, 550, 600],
              cast_points: [0.4000000059604645],
              channel_times: [0, 0, 0, 0],
              cooldowns: [60, 50, 40, 30],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [60, 90, 120, 150],
              gold_costs: [],
              special_values: [
                {
                  name: "radius",
                  values_float: [400, 450, 500, 550],
                  is_percentage: false,
                  heading_loc: "BÁN KÍNH:",
                  bonuses: [],
                },
                {
                  name: "duration",
                  values_float: [
                    0.30000001192092896, 0.4000000059604645, 0.5,
                    0.6000000238418579,
                  ],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "damage",
                  values_float: [40, 110, 180, 250],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG:",
                  bonuses: [],
                },
                {
                  name: "radius_tree",
                  values_float: [150],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCastRange",
                  values_float: [450, 500, 550, 600],
                  is_percentage: false,
                  heading_loc: "TẦM THI TRIỂN:",
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
                  values_float: [60, 90, 120, 150],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [60, 50, 40, 30],
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
              id: 5256,
              name: "dark_seer_ion_shell",
              name_loc: "Ion Shell",
              desc_loc:
                "Bao bọc cho mục tiêu được chọn một lớp giáp gai, gây sát thương cho đối phương trong phạm vi xung quanh nó.",
              lore_loc:
                'Dark Seer rạch những lỗ hổng nối sang "Vùng đất phía sau bức tường", khiến năng lượng lăng kính thẩm thấu qua chúng.',
              notes_loc: [
                "Gây nhiều lần sát thương nhỏ với tần suất %tick_interval% giây.",
                "Không gây sát thương cho mục tiêu được bọc giáp.",
                "Nếu bọc giáp cho mục tiêu đã có sẵn Ion Shell, một tấm giáp mới sẽ được tạo ra thay cho tấm giáp cũ.",
              ],
              shard_loc: "",
              scepter_loc:
                "Causes Ion Shell to have 2 Charges, increases duration by 15 seconds and provides +275 Health.",
              type: 0,
              behavior: "33554440",
              target_team: 3,
              target_type: 3,
              flags: 0,
              damage: 2,
              immunity: 4,
              dispellable: 2,
              max_level: 4,
              cast_ranges: [600],
              cast_points: [
                0.4000000059604645, 0.4000000059604645, 0.4000000059604645,
                0.4000000059604645,
              ],
              channel_times: [0, 0, 0, 0],
              cooldowns: [9],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [110, 120, 130, 140],
              gold_costs: [],
              special_values: [
                {
                  name: "radius",
                  values_float: [275],
                  is_percentage: false,
                  heading_loc: "BÁN KÍNH:",
                  bonuses: [],
                },
                {
                  name: "damage_per_second",
                  values_float: [30, 50, 70, 90],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG MỖI GIÂY:",
                  bonuses: [],
                },
                {
                  name: "duration",
                  values_float: [21, 24, 27, 30],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN:",
                  bonuses: [],
                },
                {
                  name: "tick_interval",
                  values_float: [0.15000000596046448],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "max_charges",
                  values_float: [2],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "scepter_bonus_duration",
                  values_float: [15],
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
                  values_float: [0.4000000059604645],
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
                  values_float: [9],
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
              id: 5257,
              name: "dark_seer_surge",
              name_loc: "Surge",
              desc_loc:
                "Ban sức mạnh cho một đồng minh, khiến họ có một lượng lớn tốc độ chạy và khả năng đi xuyên đơn vị trong một thời gian ngắn. Ngoài ra còn khiến họ đạt tốc độ chạy tối đa và không thể bị làm chậm.",
              lore_loc:
                "Ish'Kafel từng sử dụng tốc độ của tâm trí bản thân để tìm đường trong mê cung giữa những bức tường.",
              notes_loc: [
                "Những đối tượng được Surge sẽ không thể bị làm chậm trừ phi hiệu ứng Surge bị loại bỏ.",
              ],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "8",
              target_team: 1,
              target_type: 19,
              flags: 0,
              damage: 0,
              immunity: 1,
              dispellable: 2,
              max_level: 4,
              cast_ranges: [600],
              cast_points: [0.4000000059604645],
              channel_times: [0, 0, 0, 0],
              cooldowns: [19, 16, 13, 10],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [50],
              gold_costs: [],
              special_values: [
                {
                  name: "duration",
                  values_float: [3, 4, 5, 6],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN:",
                  bonuses: [],
                },
                {
                  name: "speed_boost",
                  values_float: [550],
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
                  values_float: [0.4000000059604645],
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
                {
                  name: "AbilityCooldown",
                  values_float: [19, 16, 13, 10],
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
              id: 687,
              name: "dark_seer_normal_punch",
              name_loc: "Normal Punch",
              desc_loc:
                "Passive cooldown attack. Causes Dark Seer's next attack on a hero to have True Strike, knock an illusion out of the victim and stun them for up to 2.25 seconds, 350 distance and 300 magic damage based on how far Dark Seer has moved in the past 3 seconds. Max power is reached after 900 distance moved. Illusions lasts for 6 seconds. Cooldown: 14",
              lore_loc: "",
              notes_loc: [],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "8589934595",
              target_team: 2,
              target_type: 19,
              flags: 0,
              damage: 0,
              immunity: 0,
              dispellable: 0,
              max_level: 1,
              cast_ranges: [0],
              cast_points: [0, 0, 0, 0],
              channel_times: [0, 0, 0, 0],
              cooldowns: [14],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [0, 0, 0, 0],
              gold_costs: [],
              special_values: [
                {
                  name: "max_stun",
                  values_float: [2.25],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "recent_duration",
                  values_float: [3],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "max_distance",
                  values_float: [900],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "knockback_distance",
                  values_float: [350],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "illusion_duration",
                  values_float: [6],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "max_damage",
                  values_float: [300],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "normal_punch_illusion_delay",
                  values_float: [0.699999988079071],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [14],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
              ],
              is_item: false,
              ability_has_scepter: false,
              ability_has_shard: false,
              ability_is_granted_by_scepter: false,
              ability_is_granted_by_shard: true,
              item_cost: 0,
              item_initial_charges: 0,
              item_neutral_tier: 4294967295,
              item_stock_max: 0,
              item_stock_time: 0,
              item_quality: 0,
            },
            {
              id: 5258,
              name: "dark_seer_wall_of_replica",
              name_loc: "Wall of Replica",
              desc_loc:
                "Bẻ cong ánh sáng để tạo ra một bức tường làm chậm và tạo ra một bản sao cho bất kì tướng địch nào đi qua nó. Những bản sao được tạo ra sẽ nghe theo sự điều khiển của Dark Seer. Chúng sẽ tồn tại cho đến khi bị phá hủy hoặc đến khi bức tường biến mất.",
              lore_loc:
                "Tuy không thể trở về thế giới nguyên bản của hắn, Dark Seer vẫn có thể dùng sức mạnh tâm trí để gọi ra một phần của bức tường lăng kính, gieo rắc hỗn loạn vào hàng ngũ quân thù.",
              notes_loc: [
                "Không thể tạo ra phân thân từ những phân thân khác.",
                "Mỗi bức tường sẽ chỉ tạo tối đa một phân thân cho mỗi người chơi.",
                "Wall of Replica will not slow spell-immune enemies.",
              ],
              shard_loc: "",
              scepter_loc: "",
              type: 1,
              behavior: "1073741840",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 2,
              immunity: 3,
              dispellable: 0,
              max_level: 3,
              cast_ranges: [1300],
              cast_points: [0.20000000298023224],
              channel_times: [0, 0, 0, 0],
              cooldowns: [100, 100, 100],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [125, 250, 375],
              gold_costs: [],
              special_values: [
                {
                  name: "duration",
                  values_float: [30],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN TƯỜNG:",
                  bonuses: [],
                },
                {
                  name: "replica_damage_outgoing",
                  values_float: [-30, -15, 0],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "tooltip_outgoing",
                  values_float: [70, 85, 100],
                  is_percentage: true,
                  heading_loc: "SÁT THƯƠNG BẢN SAO GÂY:",
                  bonuses: [],
                },
                {
                  name: "replica_damage_incoming",
                  values_float: [100],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "tooltip_replica_total_damage_incoming",
                  values_float: [200],
                  is_percentage: true,
                  heading_loc: "SÁT THƯƠNG BẢN SAO NHẬN:",
                  bonuses: [],
                },
                {
                  name: "width",
                  values_float: [1300],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "replica_scale",
                  values_float: [0],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "movement_slow",
                  values_float: [50, 60, 70],
                  is_percentage: true,
                  heading_loc: "TỐC ĐỘ CHẠY GIẢM:",
                  bonuses: [],
                },
                {
                  name: "slow_duration",
                  values_float: [1],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN LÀM CHẬM:",
                  bonuses: [],
                },
                {
                  name: "scepter_length_multiplier",
                  values_float: [2],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCastRange",
                  values_float: [1300],
                  is_percentage: false,
                  heading_loc: "TẦM THI TRIỂN:",
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
                  values_float: [125, 250, 375],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
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
          ],
          talents: [
            {
              id: 560,
              name: "special_bonus_unique_dark_seer_7",
              name_loc: "+{s:value}% sát thương phân thân Wall of Replica",
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
              id: 5933,
              name: "special_bonus_armor_6",
              name_loc: "+{s:value} giáp",
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
              id: 6365,
              name: "special_bonus_unique_dark_seer_2",
              name_loc: "+{s:value} phạm vi Vacuum",
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
              id: 420,
              name: "special_bonus_unique_dark_seer_5",
              name_loc: "+{s:value} phạm vi Ion Shell",
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
            {
              id: 736,
              name: "special_bonus_unique_dark_seer_13",
              name_loc: "-{s:value} giây hồi Wall of Replica",
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
              id: 6047,
              name: "special_bonus_unique_dark_seer",
              name_loc: "+{s:value} sát thương/giây cho Ion Shell",
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
              id: 7046,
              name: "special_bonus_unique_dark_seer_4",
              name_loc: "Tường song song",
              desc_loc:
                "Tạo tường Wall of Replica thứ hai cách tường đầu tiên {s:value} đơn vị. Phân thân tạo ra từ mỗi tường là riêng biệt.",
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
                  values_float: [600],
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
              id: 6624,
              name: "special_bonus_unique_dark_seer_3",
              name_loc: "Surge có phạm vi {s:value}",
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
                  values_float: [350],
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
