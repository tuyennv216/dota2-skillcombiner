if (detail === undefined) var detail = {};
detail.bristleback = {
  result: {
    data: {
      heroes: [
        {
          id: 99,
          name: "npc_dota_hero_bristleback",
          order_id: 99,
          name_loc: "Bristleback",
          bio_loc:
            'Không bao giờ quay lưng lại với một trận đấu, Rigwarl nổi danh nhờ giao tranh với những đấu sĩ to nhất, hung hăng nhất mà hắn gặp được. Bị rửa tội bởi đám đông say xỉn, hắn ngao du trên các sàn đấu chui tại mọi tửu quán ven đường giữa vùng Slom và Elze, cho đến khi thành tích đủ ấn tượng để lọt vào mắt xanh của một chủ quán nọ đang cần lắm một bảo kê tài ba. Đổi lấy chén anh chén chú, Bristleback được thuê làm đòi nợ, giữ gìn an ninh, và thi thoảng bẻ gãy một hai chân (hoặc là năm nếu chúng ta nói đến loài web-hund).\r\n<br><br>Sau một đêm chè chén mà độ hại cơ thể của đám khách say xỉn bằng ngang bằng lá gan của gã, Bristleback rốt cuộc đã gặp đối thủ ngang tài. "Ngà đây chướng mắt quá, thưa ngài," đó là lời rượu nói gã bung ra với một bợm nhậu khá to lớn đến từ vùng hoang mạc phương bắc, mà đơn nợ đã đến lúc trả. Chuyện xảy ra tiếp theo là trận đánh xứng tầm thiên niên kỷ. Một tá võ sĩ nhảy vào. Không cái ghế nào nguyên vẹn, và cuối cùng, điều không tưởng đã xảy ra: nợ có chủ nhưng chả thu. Nhiều tuần tiếp theo sau đó, Bristleback liếm lành vết thương, và gai mọc lại; nhưng danh dự của một bảo kê có thể coi là thứ khá nhọc nhằn. Gã trả nợ bằng chính tiền túi, rồi thề sẽ truy lùng ra kẻ lạ phương bắc kia để phục hận. Và rồi gã làm thứ mà mình chưa bao thử trước đó: tập luyện nghiêm túc, và trong quá trình đó khám phá ra sự thật choáng váng về bản thân. Một nụ cười nở toe toét trên răng khi gã gã gồng uốn lông gai của mình. Quay lưng khi đánh nhau, có khi đó mới là tuyệt chiêu.',
          hype_loc:
            "When it comes to a fight, Bristleback really puts his back into it. <b>Reducing all damage</b> arriving from the rear or from the sides, he wades into battle with barely a care, spraying enemies with <b>damaging quills</b> and <b>slowing snot.</b>",
          npe_desc_loc: "Nhận ít sát thương hơn khi không nhìn mặt kẻ thù",
          str_base: 22,
          str_gain: 2.5,
          agi_base: 17,
          agi_gain: 1.7999999523162842,
          int_base: 14,
          int_gain: 2.799999952316284,
          primary_attr: 0,
          complexity: 1,
          attack_capability: 1,
          role_levels: [2, 0, 1, 0, 0, 3, 0, 0, 1],
          damage_min: 52,
          damage_max: 58,
          attack_rate: 1.7999999523162842,
          attack_range: 150,
          projectile_speed: 900,
          armor: 3.8333334922790527,
          magic_resistance: 25,
          movement_speed: 295,
          turn_rate: 0.8999999761581421,
          sight_range_day: 1800,
          sight_range_night: 800,
          max_health: 640,
          health_regen: 2.450000047683716,
          max_mana: 243,
          mana_regen: 0.949999988079071,
          abilities: [
            {
              id: 5548,
              name: "bristleback_viscous_nasal_goo",
              name_loc: "Viscous Nasal Goo",
              desc_loc:
                "Phun nước mũi vào mục tiêu, khiến hắn bị giảm giáp và tốc độ chạy. Có thể cộng dồn và làm mới thời gian tác dụng.",
              lore_loc:
                "Sụt sịt nước mũi vì cảm lạnh do kẹt trong tuyết, Bristleback đã biến nó thành lợi thế của mình.",
              notes_loc: [],
              shard_loc: "",
              scepter_loc:
                "Viscous Nasal Goo trở thành một kỹ năng diện rộng không chỉ định mục tiêu, áp dụng hiệu ứng của nó lên mọi kẻ địch trong phạm vi tác dụng. Tăng giới hạn cộng dồn thành %stack_limit_scepter%.",
              type: 0,
              behavior: "134217736",
              target_team: 2,
              target_type: 19,
              flags: 0,
              damage: 0,
              immunity: 4,
              dispellable: 2,
              max_level: 4,
              cast_ranges: [600],
              cast_points: [0.30000001192092896],
              channel_times: [0, 0, 0, 0],
              cooldowns: [1.75],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [12, 16, 20, 24],
              gold_costs: [],
              special_values: [
                {
                  name: "goo_speed",
                  values_float: [1000],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "goo_duration",
                  values_float: [5],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN:",
                  bonuses: [],
                },
                {
                  name: "base_armor",
                  values_float: [2],
                  is_percentage: false,
                  heading_loc: "GIÁP CƠ BẢN BỊ GIẢM:",
                  bonuses: [],
                },
                {
                  name: "armor_per_stack",
                  values_float: [1.5, 2, 2.5, 3],
                  is_percentage: false,
                  heading_loc: "GIẢM GIÁP MỖI CỘNG DỒN:",
                  bonuses: [],
                },
                {
                  name: "base_move_slow",
                  values_float: [15],
                  is_percentage: true,
                  heading_loc: "TỐC ĐỘ CHẠY GIẢM:",
                  bonuses: [],
                },
                {
                  name: "move_slow_per_stack",
                  values_float: [3, 6, 9, 12],
                  is_percentage: true,
                  heading_loc: "TỐC ĐỘ CHẠY GIẢM MỖI LẦN CỘNG DỒN:",
                  bonuses: [],
                },
                {
                  name: "stack_limit",
                  values_float: [4],
                  is_percentage: false,
                  heading_loc: "CỘNG DỒN TỐI ĐA:",
                  bonuses: [],
                },
                {
                  name: "goo_duration_creep",
                  values_float: [10],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "radius_scepter",
                  values_float: [800],
                  is_percentage: false,
                  heading_loc: "BÁN KÍNH (SCEPTER):",
                  bonuses: [],
                },
                {
                  name: "stack_limit_scepter",
                  values_float: [7],
                  is_percentage: false,
                  heading_loc: "GIỚI HẠN CỘNG DỒN (SCEPTER):",
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
                  values_float: [0.30000001192092896],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityManaCost",
                  values_float: [12, 16, 20, 24],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [1.75],
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
              id: 5549,
              name: "bristleback_quill_spray",
              name_loc: "Quill Spray",
              desc_loc:
                "Bắn gai ra xung quanh, gây sát thương cho kẻ địch trong phạm vị ảnh hưởng. Gây thêm sát thương cộng dồn nếu mục tiêu bị dính gai trong vòng %quill_stack_duration% giây trước đó.",
              lore_loc:
                "Danh dự của một tên bảo kê cũng giống như Britsleback vậy, đầy chông gai và hiểm trở.",
              notes_loc: [
                "Sát thương từ Quill Spray không bị giảm bởi các kỹ năng hay trang bị có khả năng đỡ đòn.",
              ],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "2052",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 1,
              immunity: 3,
              dispellable: 3,
              max_level: 4,
              cast_ranges: [650],
              cast_points: [0, 0, 0, 0],
              channel_times: [0, 0, 0, 0],
              cooldowns: [3, 3, 3, 3],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [35, 35, 35, 35],
              gold_costs: [],
              special_values: [
                {
                  name: "radius",
                  values_float: [700],
                  is_percentage: false,
                  heading_loc: "BÁN KÍNH:",
                  bonuses: [],
                },
                {
                  name: "quill_base_damage",
                  values_float: [25, 45, 65, 85],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG CƠ BẢN:",
                  bonuses: [],
                },
                {
                  name: "quill_stack_damage",
                  values_float: [28, 30, 32, 34],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG CỘNG DỒN:",
                  bonuses: [],
                },
                {
                  name: "quill_stack_duration",
                  values_float: [14],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN CỘNG DỒN:",
                  bonuses: [],
                },
                {
                  name: "max_damage",
                  values_float: [550],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG TỐI ĐA:",
                  bonuses: [],
                },
                {
                  name: "projectile_speed",
                  values_float: [2400],
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
                  name: "AbilityManaCost",
                  values_float: [35],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [3],
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
              id: 5550,
              name: "bristleback_bristleback",
              name_loc: "Bristleback",
              desc_loc:
                "Bristleback phải chịu sát thương ít hơn nếu bị tấn công từ hai bên hoặc từ phía sau. Nếu Bristleback nhận %quill_release_threshold% sát thương từ phía sau lưng thì hắn sẽ tự động thi triển kỹ năng Quill Spray.",
              lore_loc: "Quay lưng với giao tranh có vẻ là những gì hắn cần.",
              notes_loc: [
                "Phía sau của Bristleback là 70 độ tính từ lưng.",
                "Phía bên của Bristleback là 110 độ tính từ lưng.",
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
                  name: "side_damage_reduction",
                  values_float: [8, 12, 16, 20],
                  is_percentage: true,
                  heading_loc: "GIẢM SÁT THƯƠNG TỪ HAI BÊN:",
                  bonuses: [],
                },
                {
                  name: "back_damage_reduction",
                  values_float: [16, 24, 32, 40],
                  is_percentage: true,
                  heading_loc: "GIẢM SÁT THƯƠNG TỪ LƯNG:",
                  bonuses: [],
                },
                {
                  name: "side_angle",
                  values_float: [110],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "back_angle",
                  values_float: [70],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "quill_release_threshold",
                  values_float: [210],
                  is_percentage: false,
                  heading_loc: "NGƯỠNG SÁT THƯƠNG:",
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
              id: 643,
              name: "bristleback_hairball",
              name_loc: "Hairball",
              desc_loc:
                "Ho ra một cục gỉ dính đầy gai đến vị trí chỉ định. Nổ tung khi tiếp đất, khiến kẻ địch trong bán kính 700 đơn vị trúng Viscous Nasal Goo và 2 lần Quill Spray.",
              lore_loc: "",
              notes_loc: [],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "8589934641",
              target_team: 2,
              target_type: 19,
              flags: 0,
              damage: 2,
              immunity: 1,
              dispellable: 2,
              max_level: 1,
              cast_ranges: [1500],
              cast_points: [0.10000000149011612],
              channel_times: [0, 0, 0, 0],
              cooldowns: [20],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [100],
              gold_costs: [],
              special_values: [
                {
                  name: "projectile_speed",
                  values_float: [1200],
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
                  values_float: [0.10000000149011612],
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
                {
                  name: "AbilityCooldown",
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
              ability_is_granted_by_shard: true,
              item_cost: 0,
              item_initial_charges: 0,
              item_neutral_tier: 4294967295,
              item_stock_max: 0,
              item_stock_time: 0,
              item_quality: 0,
            },
            {
              id: 5551,
              name: "bristleback_warpath",
              name_loc: "Warpath",
              desc_loc:
                "Bristleback trở nên điên cuồng mỗi khi hắn thi triển một kỹ năng, tăng tốc độ chạy và sát thương đòn đánh thường của hắn.",
              lore_loc:
                "'Ngoan nào, ngoan nào' là những gì mẹ vẫn nói với hắn. Nhưng khi đánh lộn thì ngoan thế quái nào được, phải hư mới máu.",
              notes_loc: [
                "Phân thân của Bristleback cũng nhận được hiệu ứng này.",
                "Sử dụng trang bị sẽ không kích hoạt Warpath.",
              ],
              shard_loc: "",
              scepter_loc: "",
              type: 1,
              behavior: "2",
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
              cooldowns: [0, 0, 0, 0],
              durations: [10, 10, 10],
              damages: [0, 0, 0, 0],
              mana_costs: [0, 0, 0, 0],
              gold_costs: [],
              special_values: [
                {
                  name: "damage_per_stack",
                  values_float: [25, 30, 35],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG CỘNG DỒN:",
                  bonuses: [],
                },
                {
                  name: "move_speed_per_stack",
                  values_float: [3, 4, 5],
                  is_percentage: true,
                  heading_loc: "TỐC ĐỘ CHẠY CỘNG DỒN:",
                  bonuses: [],
                },
                {
                  name: "stack_duration",
                  values_float: [16, 18, 20],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN CỘNG DỒN:",
                  bonuses: [],
                },
                {
                  name: "max_stacks",
                  values_float: [6, 8, 10],
                  is_percentage: false,
                  heading_loc: "LẦN CỘNG DỒN TỐI ĐA:",
                  bonuses: [],
                },
                {
                  name: "AbilityDuration",
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
          talents: [
            {
              id: 5938,
              name: "special_bonus_attack_damage_15",
              name_loc: "+{s:value} sát thương",
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
              id: 7132,
              name: "special_bonus_mp_regen_150",
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
              id: 5959,
              name: "special_bonus_hp_200",
              name_loc: "+{s:value} máu",
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
              id: 5906,
              name: "special_bonus_attack_speed_20",
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
              id: 6079,
              name: "special_bonus_hp_regen_20",
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
              id: 6360,
              name: "special_bonus_unique_bristleback_2",
              name_loc: "+{s:value} sát thương cộng dồn cho Quill Spray",
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
              id: 434,
              name: "special_bonus_spell_lifesteal_12",
              name_loc: "{s:value}% hút máu phép",
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
              id: 6615,
              name: "special_bonus_unique_bristleback_3",
              name_loc: "+{s:value} sát thương mỗi cộng dồn Warpath",
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
          ],
        },
      ],
    },
    status: 1,
  },
};
