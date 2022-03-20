if (detail === undefined) var detail = {};
detail.chaos_knight = {
  result: {
    data: {
      heroes: [
        {
          id: 81,
          name: "npc_dota_hero_chaos_knight",
          order_id: 79,
          name_loc: "Chaos Knight",
          bio_loc:
            "Là chiến binh lão luyện của vô số trận chiến khắp hàng ngàn thế giới, Chaos Knight được sinh ra ở một chiều không gian xa về phía thượng nguồn, nơi những Thể bản nguyên của vũ trụ bộc lộ tri giác. Trong tất cả các Thể bản nguyên cổ đại, hắn là kẻ cổ xưa và bền bỉ nhất, không ngừng tìm kiếm một sinh thể mà hắn chỉ biết đến với cái tên “Ánh sáng”. Rất lâu trước đây, Ánh sáng đã trốn chạy khỏi cõi khởi nguyên, như một sự thách thức với giao ước đầu tiên. Giờ đây Chaos Knight chu du từ chiều không gian này sang chiều không gian khác, trong cuộc săn đuổi không ngừng nghỉ nhằm dập tắt Ánh sáng ở bất cứ nơi đâu hắn tìm thấy. Hàng ngàn lần nguồn sáng bị dập tắt cũng là hàng ngàn lần hắn tiếp tục vượt qua một chiều không gian khác để lặp lại cuộc tìm kiếm của mình. \r\n<br><br>Cưỡi trên lưng chiến mã Armageddon, hắn lao vào chiến trận với sự phấn khích điên cuồng, hấp thu sức mạnh từ sự hỗn loạn của vũ trụ. Là chính hỗn mang được vật chất hóa, những lúc cần thiết hắn có thể kêu gọi những bản thể song song của chính mình ở các chiều không gian khác, và cùng nhau, những kỵ sĩ bóng tối này thúc ngựa xông thẳng vào chiến trường, với sức mạnh không thể ngăn cản giống như bất cứ thế lực nào khác của tự nhiên. Chỉ khi Ánh sáng cuối cùng của thế giới bị dập tắt, cuộc tìm kiếm của hắn mới chấm dứt. Vó ngựa của Chaos Knight giày xéo nơi đâu, tử thần sẽ sớm theo chân đến đấy.",
          hype_loc:
            "Chaos Knight is an army unto himself. Able to <b>summon a cavalry of clones</b> to demolish enemy defenses, should an enemy present itself, he can rift reality to <b>pull</b> him and his phantasms close enough to rain brutal cudgel blows upon their head.",
          npe_desc_loc: "Mạnh nhưng gây sát thương ngẫu nhiên",
          str_base: 22,
          str_gain: 3.200000047683716,
          agi_base: 18,
          agi_gain: 1.399999976158142,
          int_base: 18,
          int_gain: 1.2000000476837158,
          primary_attr: 0,
          complexity: 1,
          attack_capability: 1,
          role_levels: [3, 0, 0, 2, 0, 2, 0, 2, 1],
          damage_min: 51,
          damage_max: 81,
          attack_rate: 1.7000000476837158,
          attack_range: 150,
          projectile_speed: 900,
          armor: 5,
          magic_resistance: 25,
          movement_speed: 325,
          turn_rate: 0.6000000238418579,
          sight_range_day: 1800,
          sight_range_night: 800,
          max_health: 640,
          health_regen: 2.450000047683716,
          max_mana: 291,
          mana_regen: 0.9000000357627869,
          abilities: [
            {
              id: 5426,
              name: "chaos_knight_chaos_bolt",
              name_loc: "Chaos Bolt",
              desc_loc:
                "Ném một quả cầu ma thuật vào mục tiêu chỉ định, gây sát thương ngẫu nhiên và choáng trong một thời gian ngẫu nhiên.",
              lore_loc:
                "Đến cả Chaos Knight cũng không thể đoán trước được biểu hiện của nguồn năng lượng hắc ám.",
              notes_loc: [
                "Thời gian choáng và số sát thương gây ra có quan hệ nghịch đảo.",
                "Các phân thân ở gần cũng sẽ có cử động dùng phép của tướng để đánh lạc hướng.",
              ],
              shard_loc:
                "Chaos Bolt tạo phân thân Phantasm, tự động tấn công mục tiêu trong 6 giây. Tăng 300 tầm thi triển.",
              scepter_loc: "",
              type: 0,
              behavior: "8",
              target_team: 2,
              target_type: 19,
              flags: 0,
              damage: 2,
              immunity: 4,
              dispellable: 1,
              max_level: 4,
              cast_ranges: [500],
              cast_points: [
                0.4000000059604645, 0.4000000059604645, 0.4000000059604645,
                0.4000000059604645,
              ],
              channel_times: [0, 0, 0, 0],
              cooldowns: [13, 12, 11, 10],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [110, 120, 130, 140],
              gold_costs: [],
              special_values: [
                {
                  name: "chaos_bolt_speed",
                  values_float: [700],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "stun_min",
                  values_float: [1.25, 1.5, 1.75, 2],
                  is_percentage: false,
                  heading_loc: "CHOÁNG TỐI THIỂU:",
                  bonuses: [],
                },
                {
                  name: "stun_max",
                  values_float: [
                    2.200000047683716, 2.799999952316284, 3.4000000953674316, 4,
                  ],
                  is_percentage: false,
                  heading_loc: "CHOÁNG TỐI ĐA:",
                  bonuses: [],
                },
                {
                  name: "damage_min",
                  values_float: [90, 110, 130, 150],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG TỐI THIỂU:",
                  bonuses: [],
                },
                {
                  name: "damage_max",
                  values_float: [180, 220, 260, 300],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG TỐI ĐA:",
                  bonuses: [],
                },
                {
                  name: "fake_bolt_distance",
                  values_float: [675],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCastRange",
                  values_float: [500],
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
                  values_float: [13, 12, 11, 10],
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
              id: 5427,
              name: "chaos_knight_reality_rift",
              name_loc: "Reality Rift",
              desc_loc:
                "Dịch chuyển Chaos Knight, các phân thân của hắn cùng mục tiêu chỉ định đến một vị trí trên đường thẳng giữa hắn và mục tiêu. Giảm giáp của kẻ địch trong %duration% giây.",
              lore_loc:
                "Armageddon đi giữa các chiều không gian, đưa Chaos Knight đến bất cứ nơi nào mà nạn nhân của hắn đang ẩn nấp.",
              notes_loc: [
                "Chaos Knight và mục tiêu quay mặt vào nhau và Chaos Knight cùng các phân thân được lệnh tấn công mục tiêu.",
              ],
              shard_loc:
                "Cho phép thi triển Reality Rift lên bất kỳ tướng địch nào trong phạm vi 1200 đơn vị của tướng hoặc phân thân của bạn. Dịch chuyển tất cả phân thân cùng tướng của bạn đến kẻ địch được chỉ định.",
              scepter_loc: "",
              type: 0,
              behavior: "524296",
              target_team: 2,
              target_type: 19,
              flags: 0,
              damage: 0,
              immunity: 4,
              dispellable: 2,
              max_level: 4,
              cast_ranges: [550, 600, 650, 700],
              cast_points: [0.30000001192092896],
              channel_times: [0, 0, 0, 0],
              cooldowns: [18, 14, 10, 6],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [50],
              gold_costs: [],
              special_values: [
                {
                  name: "cast_range",
                  values_float: [550, 600, 650, 700],
                  is_percentage: false,
                  heading_loc: "TẦM THI TRIỂN:",
                  bonuses: [],
                },
                {
                  name: "pull_distance",
                  values_float: [250, 300, 350, 400],
                  is_percentage: false,
                  heading_loc: "CỰ LY KÉO VỀ:",
                  bonuses: [],
                },
                {
                  name: "armor_reduction",
                  values_float: [4, 5, 6, 7],
                  is_percentage: false,
                  heading_loc: "GIÁP GIẢM:",
                  bonuses: [],
                },
                {
                  name: "duration",
                  values_float: [6],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCastRange",
                  values_float: [550, 600, 650, 700],
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
                  values_float: [50],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [18, 14, 10, 6],
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
              id: 5428,
              name: "chaos_knight_chaos_strike",
              name_loc: "Chaos Strike",
              desc_loc:
                "Chaos Knight and his illusions' attacks have a chance to deal a critical strike of varying strength, in addition to a lifesteal for percentage of the damage. Deals %creep_multiplier%x damage to creeps.",
              lore_loc:
                "Vỏ quýt dày có móng tay nhọn, Chaos Knight đánh kẻ thù của hắn bằng sức mạnh không tưởng, giáp trâu bò đến đâu cũng tan đàn xẻ nghé.",
              notes_loc: [],
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
                  name: "chance",
                  values_float: [33.33000183105469],
                  is_percentage: true,
                  heading_loc: "TỶ LỆ:",
                  bonuses: [],
                },
                {
                  name: "crit_min",
                  values_float: [120],
                  is_percentage: true,
                  heading_loc: "CHÍ MẠNG TỐI THIỂU:",
                  bonuses: [],
                },
                {
                  name: "crit_max",
                  values_float: [140, 175, 210, 245],
                  is_percentage: true,
                  heading_loc: "CHÍ MẠNG TỐI ĐA:",
                  bonuses: [],
                },
                {
                  name: "lifesteal",
                  values_float: [24, 36, 48, 60],
                  is_percentage: true,
                  heading_loc: "HÚT MÁU ĐÒN CHÍ MẠNG:",
                  bonuses: [],
                },
                {
                  name: "creep_multiplier",
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
            {
              id: 5429,
              name: "chaos_knight_phantasm",
              name_loc: "Phantasm",
              desc_loc:
                "Triệu hồi một số dị ảnh của Chaos Knight từ những chiều không gian khác. Các dị ảnh là phân thân loại mạnh, gây %outgoing_damage_tooltip%%% sát thương và nhận %incoming_damage_tooltip%%% sát thương.\nLOẠI HÓA GIẢI: cơ bản",
              lore_loc:
                "Chaos Knight gọi các dị ảnh từ vô số thế giới và thời gian, triệu hồi thành một đạo quân chinh phạt mọi kẻ chống đối.",
              notes_loc: [
                "Loại bỏ hầu hết các bùa hại khỏi Chaos Knight.",
                "Chaos Knight có trạng thái bất khả xâm phạm trong %invuln_duration% giây khi đang thi triển, cho phép hắn tránh sát thương và các đường đạn bay tới.",
                "Phân thân loại Mạnh không thể bị giết tức thì bởi phép.",
              ],
              shard_loc: "",
              scepter_loc:
                "Tạo một phân thân của từng tướng đồng minh. Bản thân Chaos Knight cũng được tạo một phân thân nữa.",
              type: 1,
              behavior: "4",
              target_team: 1,
              target_type: 1,
              flags: 131072,
              damage: 0,
              immunity: 0,
              dispellable: 0,
              max_level: 3,
              cast_ranges: [1200],
              cast_points: [
                0.4000000059604645, 0.4000000059604645, 0.4000000059604645,
              ],
              channel_times: [0, 0, 0, 0],
              cooldowns: [75],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [75, 125, 175],
              gold_costs: [],
              special_values: [
                {
                  name: "images_count",
                  values_float: [1, 2, 3],
                  is_percentage: false,
                  heading_loc: "SỐ DỊ ẢNH:",
                  bonuses: [],
                },
                {
                  name: "illusion_duration",
                  values_float: [30],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN PHANTASM:",
                  bonuses: [],
                },
                {
                  name: "outgoing_damage",
                  values_float: [0],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "outgoing_damage_tooltip",
                  values_float: [100],
                  is_percentage: true,
                  heading_loc: "SÁT THƯƠNG DỊ ẢNH:",
                  bonuses: [],
                },
                {
                  name: "incoming_damage",
                  values_float: [225],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "incoming_damage_tooltip",
                  values_float: [325],
                  is_percentage: true,
                  heading_loc: "SÁT THƯƠNG DỊ ẢNH NHẬN:",
                  bonuses: [],
                },
                {
                  name: "invuln_duration",
                  values_float: [0.5],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "vision_radius",
                  values_float: [400],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "magic_resistance",
                  values_float: [0],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCastRange",
                  values_float: [1200],
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
                  values_float: [75, 125, 175],
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
              id: 871,
              name: "special_bonus_unique_chaos_knight_6",
              name_loc: "+{s:value}% Chaos Strike Lifesteal",
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
              id: 6618,
              name: "special_bonus_unique_chaos_knight_2",
              name_loc: "+{s:value} cự ly kéo về Reality Rift",
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
              id: 872,
              name: "special_bonus_unique_chaos_knight_8",
              name_loc: "-{s:value}s Chaos Bolt Cooldown",
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
              id: 5928,
              name: "special_bonus_strength_12",
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
              id: 6619,
              name: "special_bonus_unique_chaos_knight_3",
              name_loc:
                "+{s:value} giây choáng tối thiểu/tối đa cho Chaos Bolt",
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
                  values_float: [0.5],
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
              id: 6133,
              name: "special_bonus_unique_chaos_knight",
              name_loc: "Reality Rift xuyên miễn nhiễm phép",
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
                  values_float: [0],
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
              id: 510,
              name: "special_bonus_unique_chaos_knight_5",
              name_loc: "+{s:value}% tỷ lệ Chaos Strike",
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
              id: 7651,
              name: "special_bonus_unique_chaos_knight_4",
              name_loc: "+{s:value} giây Phantasm",
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
          ],
        },
      ],
    },
    status: 1,
  },
};
