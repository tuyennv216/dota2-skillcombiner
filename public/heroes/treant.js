if (detail === undefined) var detail = {};
detail.treant = {
  result: {
    data: {
      heroes: [
        {
          id: 83,
          name: "npc_dota_hero_treant",
          order_id: 76,
          name_loc: "Treant Protector",
          bio_loc:
            "Xa về phía tây, trong những ngọn núi phía bên kia thung lũng Vale of Augury là tàn tích của một quyền năng cổ xưa, một nguồn năng lượng hắc ám náu mình sâu giữa những cây đại thụ. Người đời đồn đại rằng mọi thứ ở đây sinh trưởng một cách lạ lùng. Đối với các thế lực của tự nhiên, đây là một nơi linh thiêng, một chốn náu mình vô hình vô tích. Vùng đất này đầy rẫy cạm bẫy và những mối hiểm nguy. Đây là nơi sinh sống của các loài cỏ ăn thịt, động vật quái lai và hoa độc, nhưng không loài nào đáng sợ bằng các Treant Protector hùng mạnh.\r\n<br><br>Những sinh vật to lớn và bất lão này chịu trách nhiệm giữ gìn hòa bình cho vùng đất thánh. Họ giữ các cư dân của rừng trong khuôn phép, và ngăn những kẻ ngoại lai xâm phạm các bí mật của khu rừng. Thời gian trôi, tương lai dần lùi thành quá khứ, họ vẫn cai quản vùng đất thánh của mình, không gián đoạn, không mảy may quan tâm đến thế giới đang thay đổi ngoài kia. Tuy nhiên thế giới rộng lớn ngoài kia lại ngày càng tò mò về vùng đất hoang dã này, và cứ mỗi mùa đông qua đi, những kẻ ngoại lai lại bạo dạng hơn một chút. Không lâu sau, bọn chúng kéo đến, mang theo công cụ để đốn cây và lửa để đốt rừng. Các Treant thường suy ngẫm: Các sinh vật mỏng manh, cần mẫn này là ai? Thế giới hoang dã, trong xanh này rồi sẽ ra sao? Thời gian trôi qua, những câu hỏi và các mối hồ nghi ngày càng chồng chất. Đã một nghìn mùa hạ trôi qua, các Treant vẫn chăm chú dõi theo cuộc sinh tồn của đám ngoại lai, trong khi bọn chúng hết thế hệ này đến thế hệ khác chết đi và trở thành nguồn dinh dưỡng cho đất mẹ.\r\n<br><br>Hoa nở rồi lại tàn, sự tò mò đã vượt qua tính thận trọng. Những người bảo vệ đi đến một quyết định: Một thành viên đơn độc sẽ được gửi tới thế giới bên ngoài, lãnh nhiệm vụ chu du khám phá cho đến khi các sông băng dâng lên trở lại, để quan sát các vùng đất đang thay đổi không ngừng cùng những cư dân của nó, và để khám phá những nguy hiểm tiềm tàng có thể đe dọa vùng đất linh thiêng của họ.",
          hype_loc:
            "Treant Protector luôn là một đồng minh tốt bụng. Ông <b>bọc giáp hồi phục</b> cho đồng đội cũng như công trình của mình. Hiện ra bất thình lình từ giữa các lùm cây để <b>trói chặt kẻ thù</b> bằng Overgrowth cũng như <b>hút máu</b> chúng mà truyền vào đồng minh cạnh đó.",
          npe_desc_loc: "Dùng sức mạnh của rừng để trói kẻ thù",
          str_base: 25,
          str_gain: 3.4000000953674316,
          agi_base: 15,
          agi_gain: 2,
          int_base: 20,
          int_gain: 1.7999999523162842,
          primary_attr: 0,
          complexity: 2,
          attack_capability: 1,
          role_levels: [0, 3, 0, 1, 0, 1, 1, 0, 2],
          damage_min: 87,
          damage_max: 95,
          attack_rate: 1.899999976158142,
          attack_range: 150,
          projectile_speed: 900,
          armor: 1.5,
          magic_resistance: 25,
          movement_speed: 285,
          turn_rate: 0.6000000238418579,
          sight_range_day: 1800,
          sight_range_night: 800,
          max_health: 700,
          health_regen: 2.75,
          max_mana: 315,
          mana_regen: 1.5,
          abilities: [
            {
              id: 338,
              name: "treant_natures_grasp",
              name_loc: "Nature's Grasp",
              desc_loc:
                "Tạo dây leo đến hướng mục tiêu. Dây leo làm chậm và gây sát thương kẻ địch đi qua. Toàn bộ dây leo gây thêm 50% sát thương nếu chạm vào cây. Chỉ gây một nửa sát thương với quái.",
              lore_loc:
                "Các hộ vệ thiên nhiên thường không lộ mình; trạng thái tự nhiên của họ thường ẩn náu bên trong bằng hữu lá cành của mình.",
              notes_loc: [],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "16",
              target_team: 0,
              target_type: 64,
              flags: 0,
              damage: 2,
              immunity: 4,
              dispellable: 0,
              max_level: 4,
              cast_ranges: [1500],
              cast_points: [0.20000000298023224],
              channel_times: [0, 0, 0, 0],
              cooldowns: [20, 19, 18, 17],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [75, 80, 85, 90],
              gold_costs: [],
              special_values: [
                {
                  name: "damage_per_second",
                  values_float: [30, 40, 50, 60],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG MỖI GIÂY:",
                  bonuses: [],
                },
                {
                  name: "movement_slow",
                  values_float: [20, 25, 30, 35],
                  is_percentage: true,
                  heading_loc: "TỐC ĐỘ CHẠY GIẢM:",
                  bonuses: [],
                },
                {
                  name: "vines_duration",
                  values_float: [9, 10, 11, 12],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN DÂY LEO:",
                  bonuses: [],
                },
                {
                  name: "creation_interval",
                  values_float: [0.10000000149011612],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "initial_latch_delay",
                  values_float: [0.30000001192092896],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "vine_spawn_interval",
                  values_float: [175],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "latch_range",
                  values_float: [135],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "latch_vision",
                  values_float: [150],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCastRange",
                  values_float: [1500],
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
                  values_float: [75, 80, 85, 90],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [20, 19, 18, 17],
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
              id: 5435,
              name: "treant_leech_seed",
              name_loc: "Leech Seed",
              desc_loc:
                "Treant đặt một mầm cây vào bên trong kẻ địch, làm nó mất máu và bị giảm tốc độ chạy. Mầm cây hồi máu cho các đơn vị đồng minh ở gần.",
              lore_loc:
                "Rooftrellen nuôi dưỡng các sinh vật được ông che chở, bằng nguồn sống của chính những kẻ xâm phạm vùng đất linh thiêng của mình.",
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
              cast_ranges: [400],
              cast_points: [0.4000000059604645],
              channel_times: [0, 0, 0, 0],
              cooldowns: [18, 16, 14, 12],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [80, 90, 100, 110],
              gold_costs: [],
              special_values: [
                {
                  name: "damage_interval",
                  values_float: [1],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "leech_damage",
                  values_float: [16, 32, 48, 64],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG/MÁU HỒI MỖI GIÂY:",
                  bonuses: [],
                },
                {
                  name: "movement_slow",
                  values_float: [-8, -14, -20, -26],
                  is_percentage: true,
                  heading_loc: "TỐC ĐỘ CHẠY GIẢM:",
                  bonuses: [],
                },
                {
                  name: "radius",
                  values_float: [650],
                  is_percentage: false,
                  heading_loc: "BÁN KÍNH:",
                  bonuses: [],
                },
                {
                  name: "duration",
                  values_float: [5],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN:",
                  bonuses: [],
                },
                {
                  name: "projectile_speed",
                  values_float: [450],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCastRange",
                  values_float: [400],
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
                  values_float: [80, 90, 100, 110],
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
              id: 5436,
              name: "treant_living_armor",
              name_loc: "Living Armor",
              desc_loc:
                "Bao bọc tướng hoặc công trình đồng minh được chỉ định bằng một lớp vỏ bảo vệ, giúp hồi máu và tăng giáp.",
              lore_loc:
                "Rễ và dây leo của các Treant Protector có thể vươn tới rất xa, kích thích sự tăng trưởng và hồi phục của thiên nhiên.",
              notes_loc: [],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "24",
              target_team: 1,
              target_type: 23,
              flags: 0,
              damage: 0,
              immunity: 1,
              dispellable: 2,
              max_level: 4,
              cast_ranges: [0],
              cast_points: [0.30000001192092896],
              channel_times: [0, 0, 0, 0],
              cooldowns: [30, 25, 20, 15],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [50],
              gold_costs: [],
              special_values: [
                {
                  name: "total_heal",
                  values_float: [45, 80, 125, 180],
                  is_percentage: false,
                  heading_loc: "TỔNG MÁU HỒI:",
                  bonuses: [],
                },
                {
                  name: "bonus_armor",
                  values_float: [3, 6, 9, 12],
                  is_percentage: false,
                  heading_loc: "GIÁP TĂNG:",
                  bonuses: [],
                },
                {
                  name: "duration",
                  values_float: [15, 20, 25, 30],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN:",
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
                  values_float: [30, 25, 20, 15],
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
              id: 5649,
              name: "treant_eyes_in_the_forest",
              name_loc: "Eyes In The Forest",
              desc_loc:
                "Treant Protector yểm bùa một cái cây, cho tầm nhìn vượt địa hình tại vị trí đó chừng nào cây này tồn tại. Khi Treant sử dụng Overgrowth, các đơn vị địch trong phạm vi hiệu lực của cây được yểm cũng sẽ bị trói và chịu sát thương. Nội tại: Làm toàn bộ cây mọc lại nhanh hơn.",
              lore_loc:
                "Sẽ chẳng ai biết chắc được ai, hay cái gì, sẽ cần được bảo vệ.",
              notes_loc: [
                "Being entangled by Overgrowth through enchanted trees from Eyes in the Forest does damage.",
                "Nếu đối phương có khả năng nhìn tàng hình, chúng sẽ thấy được cây nào đã được yểm bùa.",
              ],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "8589934601",
              target_team: 0,
              target_type: 64,
              flags: 0,
              damage: 2,
              immunity: 0,
              dispellable: 0,
              max_level: 1,
              cast_ranges: [160],
              cast_points: [0.20000000298023224],
              channel_times: [0, 0, 0, 0],
              cooldowns: [0, 0, 0, 0],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [100],
              gold_costs: [],
              special_values: [
                {
                  name: "vision_aoe",
                  values_float: [800],
                  is_percentage: false,
                  heading_loc: "PHẠM VI TẦM NHÌN CỦA CÂY:",
                  bonuses: [],
                },
                {
                  name: "overgrowth_aoe",
                  values_float: [800],
                  is_percentage: false,
                  heading_loc: "PHẠM VI OVERGROWTH (CÂY):",
                  bonuses: [],
                },
                {
                  name: "tree_respawn_seconds",
                  values_float: [10],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCastRange",
                  values_float: [160],
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
                  name: "AbilityCharges",
                  values_float: [3],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityChargeRestoreTime",
                  values_float: [40],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityManaCost",
                  values_float: [100],
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
              id: 5434,
              name: "treant_natures_guise",
              name_loc: "Nature's Guise",
              desc_loc:
                "Khiến Treant Protector có khả năng đi xuyên cây khi không nhận sát thương trong %cooldown_time% giây. Khi có tác dụng, Treant Protector được tăng tốc độ chạy, tăng hiệu quả hồi máu và máu hồi lên bản thân.",
              lore_loc:
                "Các Protector ít khi bị ai nhìn thấy, bởi thể trạng tự nhiên của họ dễ dàng hòa mình giữa cây cối.",
              notes_loc: [
                "While affected by Nature's Guise, Treant can move unobstructed through other trees.",
              ],
              shard_loc:
                "Khiến bạn trở nên tàng hình với Nature's Guise và trói chân kẻ địch khi tấn công. Trói trong 1 giây và gây tổng cộng 200 sát thương. Tăng thêm 1 giây khi tấn công gần cây. Tăng 15%% tốc độ chạy.",
              scepter_loc: "",
              type: 0,
              behavior: "8589934658",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 0,
              immunity: 0,
              dispellable: 0,
              max_level: 1,
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
                  name: "radius",
                  values_float: [150],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "grace_time",
                  values_float: [0.75],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "cooldown_time",
                  values_float: [3],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "regen_amp",
                  values_float: [40],
                  is_percentage: true,
                  heading_loc: "TĂNG TỰ HỒI VÀ MÁU HỒI BẢN THÂN:",
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
              id: 5437,
              name: "treant_overgrowth",
              name_loc: "Overgrowth",
              desc_loc:
                "Triệu tập một loạt các dây leo và rễ cây xung quanh Treant, gây sát thương lên kẻ địch bị ảnh hưởng, khiến chúng không thể di chuyển, dùng kỹ năng dạng blink, trở nên tàng hình, hay tấn công bằng đòn đánh thường.",
              lore_loc:
                "Rooftrellen mời gọi linh hồn cổ xưa của tự nhiên, phóng thích sức mạnh của nó tới mọi sinh linh đồng loại.",
              notes_loc: [
                "Tác động lên cả các đơn vị miễn nhiễm phép. Song nếu kẻ địch trở nên miễn nhiễm phép trong thời gian hiệu lực, chúng sẽ thoát khỏi trói.",
              ],
              shard_loc: "",
              scepter_loc: "",
              type: 1,
              behavior: "4",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 2,
              immunity: 3,
              dispellable: 2,
              max_level: 3,
              cast_ranges: [0],
              cast_points: [0.5, 0.5, 0.5, 0.5],
              channel_times: [0, 0, 0, 0],
              cooldowns: [100],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [200, 250, 300],
              gold_costs: [],
              special_values: [
                {
                  name: "duration",
                  values_float: [3, 4, 5],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN:",
                  bonuses: [],
                },
                {
                  name: "radius",
                  values_float: [800],
                  is_percentage: false,
                  heading_loc: "BÁN KÍNH:",
                  bonuses: [],
                },
                {
                  name: "eyes_radius",
                  values_float: [800],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "damage",
                  values_float: [75],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG MỖI GIÂY:",
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
                  values_float: [200, 250, 300],
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
              id: 339,
              name: "special_bonus_unique_treant_8",
              name_loc: "Living Armor hồi thêm {s:value} máu",
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
                  values_float: [36],
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
              id: 755,
              name: "special_bonus_unique_treant_12",
              name_loc: "-{s:value} giây hồi Nature's Grasp",
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
              id: 6955,
              name: "special_bonus_unique_treant_3",
              name_loc: "Leech Seed giảm thêm {s:value}% tốc độ chạy",
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
              id: 340,
              name: "special_bonus_unique_treant_9",
              name_loc: "+{s:value} sát thương Nature's Grasp",
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
              id: 756,
              name: "special_bonus_unique_treant_13",
              name_loc: "+{s:value} giáp Living Armor",
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
              id: 6531,
              name: "special_bonus_unique_treant_2",
              name_loc: "+{s:value} sát thương/hồi máu Leech Seed",
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
              id: 342,
              name: "special_bonus_unique_treant_11",
              name_loc: "Overgrowth thêm {s:value} sát thương/giây",
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
              id: 7115,
              name: "special_bonus_unique_treant_7",
              name_loc: "Living Armor có phạm vi {s:value}",
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
                  values_float: [450],
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