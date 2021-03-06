if (detail === undefined) var detail = {};
detail.sand_king = {
  result: {
    data: {
      heroes: [
        {
          id: 16,
          name: "npc_dota_hero_sand_king",
          order_id: 16,
          name_loc: "Sand King",
          bio_loc:
            "Những hạt cát trong Hoang mạc Scintillant có sinh mệnh và tri giác--cả sa mạc mênh mông đang tự vấn và ngẫm về những điều chỉ có thể ẩn trong trong sự vĩ đại của chính nó. Nhưng khi nó buộc phải tìm một hình dạng để giao tiếp với những kẻ thấp hèn hơn, nó giải phóng một mảnh của bản thân, chui vào lớp vỏ giáp ma thuật tạo ra bởi ma thần của Qaldin. Bản thể này tự gọi nó là Crixalis, nghĩa là 'Linh hồn của cát', nhưng những kẻ khác kính sợ gọi nó là Sand King. Sand King chọn cho mình hình dạng của một con bọ cạp khổng lồ, lấy cảm hứng từ những cư dân nhỏ bé nhưng phổ biến của Hoang mạc Scintillant; và hình dạng này thể hiện chính xác bản chất hung tàn của hắn. Người bảo hộ, chiến binh, sứ giả--Sand King là tất cả những thứ đó, và không thể bị tách rời khỏi sa mạc bất tận đã cho nó sự sống.",
          hype_loc:
            "Ít ai có thể sống sót khi bị Sandking phục kích. Hắn phá hủy mặt đất và tất cả những thứ xung quanh mình với những <b>đợt địa chấn khủng khiếp</b>, <b>trốn tránh những đợt phản công</b> bằng cách ẩn mình trong cơn bão cát hay <b>làm choáng</b> kẻ thù bằng cách chui từ dưới đất lên.",
          npe_desc_loc: "Chui xuống đất để làm choáng và làm chậm kẻ địch",
          str_base: 22,
          str_gain: 2.700000047683716,
          agi_base: 19,
          agi_gain: 1.7999999523162842,
          int_base: 19,
          int_gain: 1.7999999523162842,
          primary_attr: 0,
          complexity: 2,
          attack_capability: 1,
          role_levels: [0, 1, 2, 2, 1, 0, 2, 0, 3],
          damage_min: 45,
          damage_max: 55,
          attack_rate: 1.7000000476837158,
          attack_range: 150,
          projectile_speed: 900,
          armor: 3.1666667461395264,
          magic_resistance: 25,
          movement_speed: 290,
          turn_rate: 0.6000000238418579,
          sight_range_day: 1800,
          sight_range_night: 800,
          max_health: 640,
          health_regen: 2.450000047683716,
          max_mana: 303,
          mana_regen: 0.949999988079071,
          abilities: [
            {
              id: 5102,
              name: "sandking_burrowstrike",
              name_loc: "Burrowstrike",
              desc_loc:
                "Sand King chui xuống mặt đất và đào về phía trước, gây sát thương và làm choáng những kẻ địch ở trên khi hắn trở lại mặt đất.",
              lore_loc:
                "Crixalis thường kiên nhẫn chờ đợi, đào sâu dưới mặt đất để tập kích kẻ thù của hắn.",
              notes_loc: [],
              shard_loc: "",
              scepter_loc:
                "Tăng tầm thi triển của Burrowstrike và có thêm hiệu ứng của Caustic Finale lên các tướng địch bị trúng chiêu. Không nhiễm hiệu ứng của Caustic Finale lên phân thân.",
              type: 0,
              behavior: "524312",
              target_team: 2,
              target_type: 19,
              flags: 0,
              damage: 2,
              immunity: 4,
              dispellable: 1,
              max_level: 4,
              cast_ranges: [425, 500, 575, 650],
              cast_points: [0, 0, 0, 0],
              channel_times: [0, 0, 0, 0],
              cooldowns: [15, 14, 13, 12],
              durations: [0, 0, 0, 0],
              damages: [100, 160, 220, 280],
              mana_costs: [110, 120, 130, 140],
              gold_costs: [],
              special_values: [
                {
                  name: "burrow_width",
                  values_float: [150],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "burrow_duration",
                  values_float: [
                    1.600000023841858, 1.7999999523162842, 2, 2.200000047683716,
                  ],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN CHOÁNG:",
                  bonuses: [],
                },
                {
                  name: "burrow_speed",
                  values_float: [2000],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "burrow_anim_time",
                  values_float: [0.5199999809265137],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "cast_range_scepter",
                  values_float: [1300],
                  is_percentage: false,
                  heading_loc: "TẦM DI CHUYỂN (SCEPTER):",
                  bonuses: [],
                },
                {
                  name: "burrow_speed_scepter",
                  values_float: [3000],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "#AbilityDamage",
                  values_float: [100, 160, 220, 280],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCastRange",
                  values_float: [425, 500, 575, 650],
                  is_percentage: false,
                  heading_loc: "TẦM THI TRIỂN:",
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
                  values_float: [15, 14, 13, 12],
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
              id: 5103,
              name: "sandking_sand_storm",
              name_loc: "Sand Storm",
              desc_loc:
                "Sand King tạo ra một cơn bão cát khủng khiếp gây sát thương lên kẻ địch trong khi giấu hắn khỏi tầm nhìn của chúng. Hiệu ứng tàng hình kết thúc khi Sand King rời khỏi vùng ảnh hưởng của bão cát.",
              lore_loc:
                "Một số kẻ nói rằng Crixalis là một ảo ảnh; lớp mai của hắn ẩn hiện giữa biển cát cuồng loạn của Sa mạc Scintillant.",
              notes_loc: [
                "Sand Storm có thể sử dụng để né các loại đạn.",
                "Sand King hiện hình trong chốc lát mỗi khi tấn công hoặc dùng kỹ năng khác khi đang trong vùng Sand Storm. Sand King sẽ tàng hình lại sau %fade_delay% giây.",
              ],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "33554436",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 2,
              immunity: 4,
              dispellable: 3,
              max_level: 4,
              cast_ranges: [0],
              cast_points: [0, 0, 0, 0],
              channel_times: [0, 0, 0, 0],
              cooldowns: [40, 34, 28, 22],
              durations: [20, 25, 30, 35],
              damages: [0, 0, 0, 0],
              mana_costs: [70, 75, 80, 85],
              gold_costs: [],
              special_values: [
                {
                  name: "damage_tick_rate",
                  values_float: [0.20000000298023224],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "sand_storm_radius",
                  values_float: [425, 500, 575, 650],
                  is_percentage: false,
                  heading_loc: "BÁN KÍNH:",
                  bonuses: [],
                },
                {
                  name: "sand_storm_damage",
                  values_float: [20, 45, 70, 95],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG SAND STORM:",
                  bonuses: [],
                },
                {
                  name: "fade_delay",
                  values_float: [0.699999988079071],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityDuration",
                  values_float: [20, 25, 30, 35],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN:",
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
                  values_float: [40, 34, 28, 22],
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
              id: 5104,
              name: "sandking_caustic_finale",
              name_loc: "Caustic Finale",
              desc_loc:
                "Những đòn đánh thường của Sand King tiêm nhiễm thứ độc tố khiến kẻ địch bị làm chậm, và khi chết sẽ nổ tan xác.",
              lore_loc:
                "Nọc tiêm từ Crixalis làm nạn nhân mục rỗng, mỏng manh tựa như cát bụi sa mạc, để rồi vỡ tan từ bên trong mà chết.",
              notes_loc: [],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "2",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 2,
              immunity: 4,
              dispellable: 2,
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
                  name: "caustic_finale_radius",
                  values_float: [500],
                  is_percentage: false,
                  heading_loc: "PHẠM VI NỔ:",
                  bonuses: [],
                },
                {
                  name: "caustic_finale_damage_base",
                  values_float: [70, 90, 110, 130],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG CƠ BẢN:",
                  bonuses: [],
                },
                {
                  name: "caustic_finale_damage_pct",
                  values_float: [10, 14, 18, 22],
                  is_percentage: true,
                  heading_loc: "SÁT THƯƠNG MÁU TỐI ĐA:",
                  bonuses: [],
                },
                {
                  name: "caustic_finale_duration",
                  values_float: [5],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "caustic_finale_slow",
                  values_float: [-10, -15, -20, -25],
                  is_percentage: true,
                  heading_loc: "TỐC ĐỘ CHẠY GIẢM:",
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
              id: 5105,
              name: "sandking_epicenter",
              name_loc: "Epicenter",
              desc_loc:
                "Sau thời gian thi triển là %abilitycastpoint% giây, Sand King truyền chấn động xuống đất, làm mặt đất rung động dữ dội. Tất cả những kẻ địch đứng trên khu vực động đất sẽ nhận sát thương và bị làm chậm. Bán kính gây sát thương tăng dần với mỗi lần chấn động.",
              lore_loc:
                "Rất nhiều nhà thám hiểm đã mất mạng bởi những đụn cát lún của Sa mạc Scintillant.",
              notes_loc: [
                "Tâm chấn luôn theo vị trí của Sand King, không phải nơi hắn vận pháp.",
                "Các chấn động có bán kính tăng dần, từ 500 tới 725.",
              ],
              shard_loc:
                "Cứ di chuyển 700 đơn vị thì gây ra một nhịp Epicenter quanh Sand King 475 đơn vị. Tăng 20 sát thương mỗi nhịp của Epicenter.",
              scepter_loc: "",
              type: 1,
              behavior: "134217732",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 2,
              immunity: 4,
              dispellable: 3,
              max_level: 3,
              cast_ranges: [0],
              cast_points: [2],
              channel_times: [0, 0, 0, 0],
              cooldowns: [120, 110, 100],
              durations: [3],
              damages: [0, 0, 0, 0],
              mana_costs: [150, 225, 300],
              gold_costs: [],
              special_values: [
                {
                  name: "epicenter_radius",
                  values_float: [
                    500, 525, 550, 575, 600, 625, 650, 675, 700, 725, 750, 775,
                    800, 825,
                  ],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [
                    {
                      name: "special_bonus_unique_sand_king_5",
                      value: 100,
                      operation: 0,
                    },
                  ],
                },
                {
                  name: "shard_radius",
                  values_float: [425],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [
                    {
                      name: "special_bonus_unique_sand_king_5",
                      value: 100,
                      operation: 0,
                    },
                  ],
                },
                {
                  name: "epicenter_pulses",
                  values_float: [6, 8, 10],
                  is_percentage: false,
                  heading_loc: "SỐ CHẤN ĐỘNG:",
                  bonuses: [],
                },
                {
                  name: "epicenter_damage",
                  values_float: [110, 120, 130],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG MỖI CHẤN ĐỘNG:",
                  bonuses: [],
                },
                {
                  name: "epicenter_slow",
                  values_float: [-30],
                  is_percentage: true,
                  heading_loc: "TỐC ĐỘ CHẠY GIẢM:",
                  bonuses: [],
                },
                {
                  name: "epicenter_slow_as",
                  values_float: [-30],
                  is_percentage: false,
                  heading_loc: "TỐC ĐÁNH GIẢM:",
                  bonuses: [],
                },
                {
                  name: "AbilityDuration",
                  values_float: [3],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN LÀM CHẬM:",
                  bonuses: [],
                },
                {
                  name: "AbilityCastPoint",
                  values_float: [2],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityManaCost",
                  values_float: [150, 225, 300],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [120, 110, 100],
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
          ],
          talents: [
            {
              id: 6409,
              name: "special_bonus_unique_sand_king_2",
              name_loc: "+{s:value} sát thương/giây cho Sand Storm",
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
              id: 497,
              name: "special_bonus_unique_sand_king_6",
              name_loc: "Caustic Finale làm chậm thêm +{s:value}%",
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
                  values_float: [12],
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
              id: 6530,
              name: "special_bonus_unique_sand_king_3",
              name_loc: "+{s:value} Sand Storm Radius",
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
            {
              id: 890,
              name: "special_bonus_unique_sand_king_8",
              name_loc: "+{s:value} Caustic Finale Damage",
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
              id: 498,
              name: "special_bonus_unique_sand_king_7",
              name_loc: "-{s:value} giây hồi Burrowstrike",
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
              id: 6872,
              name: "special_bonus_unique_sand_king_5",
              name_loc: "+{s:bonus_epicenter_radius} Epicenter Radius",
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
              id: 6207,
              name: "special_bonus_unique_sand_king",
              name_loc: "+{s:value} lần chấn động cho Epicenter",
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
                  values_float: [5],
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
              id: 475,
              name: "special_bonus_unique_sand_king_4",
              name_loc: "Sand Storm làm chậm và mù {s:value}%",
              desc_loc:
                "Kẻ địch trong phạm vi ảnh hưởng của Sand Storm bị giảm {s:value}% tốc độ chạy và có {s:value}% tỷ lệ đánh trượt.",
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
          ],
        },
      ],
    },
    status: 1,
  },
};
