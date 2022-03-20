if (detail === undefined) var detail = {};
detail.wisp = {
  result: {
    data: {
      heroes: [
        {
          id: 91,
          name: "npc_dota_hero_wisp",
          order_id: 83,
          name_loc: "Io",
          bio_loc:
            "Io tồn tại ở mọi nơi và hiện hữu trong vạn vật. Kẻ thù xem hắn như kẻ hủy diệt vĩ đại, còn các học giả thì tôn sùng hắn như thiên nhãn lấp lánh của thánh thần, Tinh linh sự sống kỳ lạ này hiện diện tại mọi chiều không gian cùng lúc, trong khi những mảnh nhỏ nhất của nó thâm nhập vào thế giới vật chất vào mọi thời điểm.\r\n<br><br>Giống như cặp kỵ sĩ song hành vĩ đại Bóng tối và Ánh sáng, Io là một kẻ du hành cổ đại với quá khứ thật đã mất dấu theo lịch sử. Io - Wisp là một Thể bản nguyên của vũ trụ, một lực lượng cổ xưa hơn cả thời gian, một kẻ ngao du đến từ những cõi giới vượt quá tầm hiểu biết của người phàm. Io đơn giản là tổng hợp của toàn bộ những lực hút và đẩy bên trong vật chất, một thực thể tri giác giữ vai trò ràng buộc các sự vật lại với nhau. Chỉ duy nhất thông qua những tia điện từ bị bẻ cong có kiểm soát này, sự hiện diện của Io mới được cảm nhận ở không gian vật chất. Bằng thần lực nhân từ và đầy thiện chí, Io liên kết từ tính lạ thường của nó đến đồng minh để sức mạnh của họ có thể được gia tăng. Với động cơ bí ẩn và sức mạnh không tưởng, Io cứ thế di chuyển xuyên qua chiều không gian vật chất, trở thành một minh chứng hoàn hảo cho sự kỳ bí bất tận của vũ trụ.",
          hype_loc:
            "Io has a talent for <b>making allies more effective</b>. A powerful companion, the wisp's tether <b>speeds allies and stops enemies</b>. Capable of linking to and <b>teleporting</b> across the battlefield with an ally, Io can make a dangerous ally even deadlier.",
          npe_desc_loc: "Liên kết với đồng minh để tăng cường sức mạnh cho họ",
          str_base: 17,
          str_gain: 3,
          agi_base: 14,
          agi_gain: 1.600000023841858,
          int_base: 23,
          int_gain: 1.7000000476837158,
          primary_attr: 0,
          complexity: 3,
          attack_capability: 2,
          role_levels: [0, 3, 1, 0, 0, 0, 2, 0, 0],
          damage_min: 45,
          damage_max: 51,
          attack_rate: 1.7000000476837158,
          attack_range: 500,
          projectile_speed: 1200,
          armor: 3.3333334922790527,
          magic_resistance: 25,
          movement_speed: 320,
          turn_rate: 0.699999988079071,
          sight_range_day: 1800,
          sight_range_night: 800,
          max_health: 540,
          health_regen: 1.9500000476837158,
          max_mana: 351,
          mana_regen: 1.149999976158142,
          abilities: [
            {
              id: 5485,
              name: "wisp_tether",
              name_loc: "Tether",
              desc_loc:
                "Tethers Io to an allied unit, granting bonus movement speed to both. When Io restores health or mana, the tethered unit gains a larger portion of that amount. The tether breaks when the allied unit moves too far away, or Io cancels the tether.",
              lore_loc:
                "Liên kết nhân sinh với Io mang đến sức mạnh từ đa chiều không gian.",
              notes_loc: [
                "Nếu bạn cố gắng để nối một đơn vị từ khoảng cách 700 trở lên, Io sẽ được kéo gần tới đơn vị đó (đến khi trong khoảng cách 300 đơn vị).",
                "Đơn vị được nối sẽ hồi máu nhanh hơn, và vẫn được hồi kể cả khi Io đang đầy máu.",
                "Tốc độ chạy của Io sẽ bằng với tốc độ chạy của đơn vị được nối.",
              ],
              shard_loc:
                "Tether làm choáng kẻ địch chạm vào nó trong 1.75 giây và gây 150 sát thương. Cứ 7 giây mới ảnh hưởng lên cùng một đơn vị một lần. Tăng 8%% cho tốc độ chạy tăng thêm.",
              scepter_loc: "",
              type: 0,
              behavior: "8",
              target_team: 1,
              target_type: 128,
              flags: 0,
              damage: 0,
              immunity: 1,
              dispellable: 3,
              max_level: 4,
              cast_ranges: [1600],
              cast_points: [0],
              channel_times: [0, 0, 0, 0],
              cooldowns: [12],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [40, 40, 40, 40],
              gold_costs: [],
              special_values: [
                {
                  name: "radius",
                  values_float: [1000],
                  is_percentage: false,
                  heading_loc: "KHOẢNG CÁCH NỐI TỐI ĐA:",
                  bonuses: [],
                },
                {
                  name: "movespeed",
                  values_float: [6, 8, 10, 12],
                  is_percentage: true,
                  heading_loc: "TỐC ĐỘ CHẠY TĂNG:",
                  bonuses: [
                    {
                      name: "special_bonus_unique_wisp_3",
                      value: 6,
                      operation: 0,
                    },
                  ],
                },
                {
                  name: "latch_distance",
                  values_float: [700],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "latch_speed",
                  values_float: [1000],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "tether_heal_amp",
                  values_float: [
                    0.75, 0.8999999761581421, 1.0499999523162842,
                    1.2000000476837158,
                  ],
                  is_percentage: false,
                  heading_loc: "TĂNG HỒI MÁU/MANA:",
                  bonuses: [],
                },
                {
                  name: "self_bonus",
                  values_float: [0],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "slow",
                  values_float: [15, 25, 35, 45],
                  is_percentage: true,
                  heading_loc: "LÀM CHẬM:",
                  bonuses: [],
                },
                {
                  name: "slow_duration",
                  values_float: [0.20000000298023224],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "spell_lifesteal",
                  values_float: [10],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCastRange",
                  values_float: [1600],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityManaCost",
                  values_float: [40],
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
              id: 5486,
              name: "wisp_spirits",
              name_loc: "Spirits",
              desc_loc:
                "Triệu hồi năm tinh linh bay vòng tròn xung quanh Io. Nếu tinh linh chạm vào tướng địch, nó sẽ phát nổ, gây sát thương tất cả kẻ địch xung quanh đó. Quái chịu một lượng sát thương nhỏ từ tinh linh khi bị chúng chạm phải, nhưng không làm chúng phát nổ. Khi hết thời gian các tinh linh sẽ tự động phát nổ.",
              lore_loc:
                "Io xoắn các hạt của vũ trụ với khả năng không thể tưởng tượng được của mình.",
              notes_loc: [
                "Io có thể di chuyển các tinh linh ra xa hoặc lại gần sau khi triệu hồi chúng.",
              ],
              shard_loc: "",
              scepter_loc:
                "Spirits now passively spawn around Io constantly every second. Max of 5. Spirits colliding with heroes slow them by 15% for 0.3s.",
              type: 0,
              behavior: "2052",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 2,
              immunity: 4,
              dispellable: 3,
              max_level: 4,
              cast_ranges: [0],
              cast_points: [0],
              channel_times: [0, 0, 0, 0],
              cooldowns: [26, 24, 22, 20],
              durations: [19, 19, 19, 19],
              damages: [0, 0, 0, 0],
              mana_costs: [120, 130, 140, 150],
              gold_costs: [],
              special_values: [
                {
                  name: "creep_damage",
                  values_float: [10, 15, 20, 25],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG (QUÁI):",
                  bonuses: [],
                },
                {
                  name: "hero_damage",
                  values_float: [30, 50, 70, 90],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG (TƯỚNG):",
                  bonuses: [],
                },
                {
                  name: "revolution_time",
                  values_float: [5],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "min_range",
                  values_float: [200],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "max_range",
                  values_float: [650],
                  is_percentage: false,
                  heading_loc: "PHẠM VI DAO ĐỘNG:",
                  bonuses: [],
                },
                {
                  name: "hero_hit_radius",
                  values_float: [110],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "explode_radius",
                  values_float: [360],
                  is_percentage: false,
                  heading_loc: "BÁN KÍNH NỔ:",
                  bonuses: [],
                },
                {
                  name: "hit_radius",
                  values_float: [150],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "spirit_movement_rate",
                  values_float: [250],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "spirit_duration",
                  values_float: [19],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN:",
                  bonuses: [],
                },
                {
                  name: "spirit_amount",
                  values_float: [5],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityDuration",
                  values_float: [19],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityManaCost",
                  values_float: [120, 130, 140, 150],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [26, 24, 22, 20],
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
              id: 5487,
              name: "wisp_overcharge",
              name_loc: "Overcharge",
              desc_loc:
                "Io được tăng tốc độ đánh, cường hóa phép, và máu hồi mỗi giây dựa trên máu tối đa. Nếu Io đang nối với một đồng minh bằng Tether thì đồng minh đó cũng nhận được những hiệu ứng này.",
              lore_loc:
                "Dựa trên những vật chất từ vạn giới, Io bẻ gãy cả thời gian.",
              notes_loc: [],
              shard_loc:
                "Increases Overcharge Spell Amplification by 10%. Io gains 10% Spell Lifesteal and can now share Spell Lifesteal with its tethered target.",
              scepter_loc: "",
              type: 0,
              behavior: "2052",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 0,
              immunity: 0,
              dispellable: 3,
              max_level: 4,
              cast_ranges: [0],
              cast_points: [0, 0, 0, 0],
              channel_times: [0, 0, 0, 0],
              cooldowns: [25, 22, 19, 16],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [40, 60, 80, 100],
              gold_costs: [],
              special_values: [
                {
                  name: "bonus_attack_speed",
                  values_float: [50, 70, 90, 110],
                  is_percentage: false,
                  heading_loc: "TỐC ĐÁNH:",
                  bonuses: [],
                },
                {
                  name: "bonus_spell_amp",
                  values_float: [8, 10, 12, 14],
                  is_percentage: true,
                  heading_loc: "CƯỜNG HÓA PHÉP:",
                  bonuses: [],
                },
                {
                  name: "hp_regen",
                  values_float: [
                    0.5, 0.6000000238418579, 0.699999988079071,
                    0.800000011920929,
                  ],
                  is_percentage: true,
                  heading_loc: "PHẦN TRĂM MÁU TỐI ĐA HỒI:",
                  bonuses: [
                    {
                      name: "special_bonus_unique_wisp_10",
                      value: 0.20000000298023224,
                      operation: 0,
                    },
                  ],
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
                  values_float: [40, 60, 80, 100],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [25, 22, 19, 16],
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
              id: 5490,
              name: "wisp_spirits_in",
              name_loc: "Spirits In",
              desc_loc: "Gọi tinh linh về gần bạn hơn. Có thể bật hoặc tắt.",
              lore_loc: "",
              notes_loc: [],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "8728349185",
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
              cooldowns: [0],
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
              id: 5493,
              name: "wisp_spirits_out",
              name_loc: "Spirits ra xa",
              desc_loc:
                "Đẩy tinh linh ra xa khỏi Io. Có thể chuyển đổi bật/tắt để tinh linh tạm dừng hoặc tiếp tục.",
              lore_loc: "",
              notes_loc: [],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "8728349185",
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
              id: 5488,
              name: "wisp_relocate",
              name_loc: "Relocate",
              desc_loc:
                "Dịch chuyển Io và đồng minh được nối bằng Tether tới một vị trí bất kỳ. Sau khi kỹ năng hết hiệu lực, Io và bất kỳ đồng minh nào đang được nối sẽ trở lại vị trí cũ. Nhấp kép để dịch chuyển đến hồ máu của đội mình.",
              lore_loc: "Io là hiện thân cho sự huyền bí của vũ trụ.",
              notes_loc: [
                "Trong thời gian hoạt hóa phép, kẻ địch sẽ thấy được một dấu hiệu trên bản đồ và bản đồ nhỏ của nơi dịch chuyển tới.",
                "Nếu Io bị vô hiệu hóa trong thời gian hoạt hóa phép, Relocate sẽ bị hủy.",
                "Nếu một tướng đồng minh được nối, tướng đó sẽ dịch chuyển với bạn. Bạn có thể hủy nối bất kỳ lúc nào để ngăn việc tướng đó dịch chuyển cùng với bạn.",
              ],
              shard_loc: "",
              scepter_loc: "",
              type: 1,
              behavior: "16",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 0,
              immunity: 0,
              dispellable: 3,
              max_level: 3,
              cast_ranges: [0],
              cast_points: [0],
              channel_times: [0, 0, 0, 0],
              cooldowns: [100, 90, 80],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [175],
              gold_costs: [],
              special_values: [
                {
                  name: "cast_delay",
                  values_float: [3.5, 3.25, 3],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN VẬN PHÁP:",
                  bonuses: [],
                },
                {
                  name: "return_time",
                  values_float: [12],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN QUAY LẠI:",
                  bonuses: [],
                },
                {
                  name: "AbilityManaCost",
                  values_float: [175],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [100, 90, 80],
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
              id: 5909,
              name: "special_bonus_hp_regen_4",
              name_loc: "+{s:value} máu hồi mỗi giây",
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
              id: 7071,
              name: "special_bonus_unique_wisp_8",
              name_loc: "+{s:value} Attack Damage to Tethered Units",
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
              id: 6659,
              name: "special_bonus_unique_wisp_3",
              name_loc: "+{s:bonus_movespeed}% Tether Movement Speed",
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
              id: 6265,
              name: "special_bonus_unique_wisp",
              name_loc: "+{s:value} sát thương lên tướng cho Spirits",
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
                  values_float: [45],
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
              id: 7073,
              name: "special_bonus_unique_wisp_10",
              name_loc: "+{s:bonus_hp_regen}% Overcharge Max HP Regen Bonus",
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
              id: 7070,
              name: "special_bonus_unique_wisp_6",
              name_loc: "-{s:value} giây hồi Relocate",
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
              id: 7072,
              name: "special_bonus_unique_wisp_9",
              name_loc: "+{s:value} Health to Tethered Units",
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
                  values_float: [400],
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
              id: 6808,
              name: "special_bonus_unique_wisp_4",
              name_loc: "Tấn công cùng đồng minh được Tether",
              desc_loc:
                "Mỗi khi tướng được nối Tether tấn công, Io cũng sẽ tự động tấn công mục tiêu của đòn tấn công đó.",
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
