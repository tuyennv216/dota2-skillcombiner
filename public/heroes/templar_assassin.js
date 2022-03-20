if (detail === undefined) var detail = {};
detail.templar_assassin = {
  result: {
    data: {
      heroes: [
        {
          id: 46,
          name: "npc_dota_hero_templar_assassin",
          order_id: 86,
          name_loc: "Templar Assassin",
          bio_loc:
            "Lanaya, Templar Assassin, tìm thấy sứ mệnh cuộc đời qua con đường của tò mò khám phá. Sở hữu thiên hướng khoa học bẩm sinh, cô đã dành những năm tuổi trẻ để đào sâu nghiên cứu các quy luật của tự nhiên – nghiền ngẫm những quyển cổ thư về ma pháp và giả kim thuật, tái hiện thí nghiệm được ghi chép còn sót lại từ tro tàn tàng thư Violet Archives, và khắc cốt ghi tâm sự quan sát của thủ thư tộc Keen. Vốn bản chất kiệm lời và kín đáo, thêm vào đó là sự gian nan trong quá trình tìm và đoạt lấy kiến thức, đã càng giúp nàng rèn giũa kỹ năng lén lút của mình. Nếu không quá kín tiếng, danh tiếng cô có thể vang dội trong giới bang hội với vai trò một học giả-đạo tặc. Thay vào đó, công cuộc điều tra tìm tòi đã dẫn cô đến những góc hẻm ngày một tối tăm hơn.\r\n<br><br>Trong quá trình tận dụng nghệ ẩn náu trộm cắp của mình để mở khóa được bí ẩn của vũ trụ, nàng ấy vậy lại mở ra một cánh cửa bí mật tồn tại trong bản ngã của tự nhiên: đường vào Tối Ẩn Đền (Hidden Temple). Những bậc thần thông quảng đại bên kia cánh cổng rõ ràng đang chờ cô. Tất cả bí ẩn họ tiết lộ với nàng trong khoảnh khắc gặp mặt cũng không thể nào sánh được với lời giải đáp được treo làm phần thưởng nếu cô tiếp tục phục vụ họ. Thề nguyền sẽ bảo vệ những bí ẩn này, nhưng quan trọng hơn, phục vụ Tối Ẩn Đền đã khiến cô lấp đầy bụng tri thức vô đáy của mình. Trong mắt mỗi một kẻ thù mà cô xóa sổ, một chút bí ẩn nữa sẽ được phơi bày.",
          hype_loc:
            "Đặt các <b>bẫy nổ làm chậm</b> khắp chiến trường, Templar Assassin <b>ẩn mình vào bóng tối</b>, sẵn sàng phục kích con mồi. Một khi tung đòn, cô đập tan lớp giáp của địch với thanh kiếm psionic và làm <b>lệch hướng các đòn phản công</b> với khiên khúc xạ của mình.",
          npe_desc_loc: "Giăng bẫy làm chậm quân thù",
          str_base: 21,
          str_gain: 2.4000000953674316,
          agi_base: 23,
          agi_gain: 3.200000047683716,
          int_base: 20,
          int_gain: 2,
          primary_attr: 1,
          complexity: 2,
          attack_capability: 2,
          role_levels: [2, 0, 0, 0, 0, 0, 1, 0, 0],
          damage_min: 53,
          damage_max: 59,
          attack_rate: 1.7000000476837158,
          attack_range: 160,
          projectile_speed: 900,
          armor: 3.8333334922790527,
          magic_resistance: 25,
          movement_speed: 305,
          turn_rate: 0.699999988079071,
          sight_range_day: 1800,
          sight_range_night: 800,
          max_health: 620,
          health_regen: 2.3500001430511475,
          max_mana: 315,
          mana_regen: 1,
          abilities: [
            {
              id: 5194,
              name: "templar_assassin_refraction",
              name_loc: "Refraction",
              desc_loc:
                "Templar Assassin trở nên biến ảo khôn lường, tránh né sát thương nhận và tăng sát thương cho bản thân. Hai hiệu ứng này hoạt động độc lập, và với số lần nhất định.",
              lore_loc:
                "Vận dụng sức mạnh tâm linh, Lanaya bẻ cong quy luật tự nhiên theo ý muốn bản thân.",
              notes_loc: [
                "Sát thương dạng trừ máu sẽ xuyên qua Refraction (nhưng không làm tiêu hao nó).",
                "Chỉ những lần sát thương với giá trị từ %damage_threshold% trở lên mới kích hoạt Refraction.",
                "Kẻ địch cũng thấy được Refraction.",
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
              cast_ranges: [0],
              cast_points: [0, 0, 0, 0],
              channel_times: [0, 0, 0, 0],
              cooldowns: [17, 17, 17, 17],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [100],
              gold_costs: [],
              special_values: [
                {
                  name: "instances",
                  values_float: [3, 4, 5, 6],
                  is_percentage: false,
                  heading_loc: "SỐ LẦN:",
                  bonuses: [],
                },
                {
                  name: "bonus_damage",
                  values_float: [25, 50, 75, 100],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG TĂNG THÊM:",
                  bonuses: [],
                },
                {
                  name: "damage_threshold",
                  values_float: [5],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "duration",
                  values_float: [17],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN:",
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
                  values_float: [17],
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
              id: 5195,
              name: "templar_assassin_meld",
              name_loc: "Meld",
              desc_loc:
                "Templar Assassin ẩn thân, trở nên vô hình chừng nào còn bất động. Nếu hiệu ứng tàng hình của Meld bị phá vỡ bằng cách tấn công một kẻ địch, Lanaya sẽ gây thêm sát thương cho đối tượng và giảm giáp của chúng trong %abilityduration% giây.",
              lore_loc:
                "Lanaya biến ảo trước kẻ địch, cũng kỳ bí hệt như khế ước giữa nàng với Hidden Temple vậy.",
              notes_loc: [
                "Mọi hành động nào khiến Lanaya phải dời vị trí sẽ làm mất hiệu ứng ẩn thân của Meld.",
                "Hiệu ứng giảm giáp của Meld không có tác dụng với công trình.",
              ],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "33816580",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 1,
              immunity: 3,
              dispellable: 3,
              max_level: 4,
              cast_ranges: [0],
              cast_points: [0, 0, 0, 0],
              channel_times: [0, 0, 0, 0],
              cooldowns: [11, 9, 7, 5],
              durations: [12],
              damages: [0, 0, 0, 0],
              mana_costs: [35, 40, 45, 50],
              gold_costs: [],
              special_values: [
                {
                  name: "bonus_damage",
                  values_float: [80, 120, 160, 200],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG GÂY THÊM:",
                  bonuses: [],
                },
                {
                  name: "bonus_armor",
                  values_float: [-5, -6, -7, -8],
                  is_percentage: false,
                  heading_loc: "GIẢM GIÁP:",
                  bonuses: [],
                },
                {
                  name: "AbilityDuration",
                  values_float: [12],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN GIẢM GIÁP:",
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
                  values_float: [11, 9, 7, 5],
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
              id: 5196,
              name: "templar_assassin_psi_blades",
              name_loc: "Psi Blades",
              desc_loc:
                "Vũ khí của Templar Assassin tác động xuyên qua đơn vị mục tiêu, phân tách và sát thương các đơn vị địch trực diện phía sau đó. Đồng thời tăng tầm đánh cho tướng. Giảm sát thương gây ra với mỗi kẻ địch bị nhận sát thương xuyên.",
              lore_loc:
                "Những lưỡi dao của nàng xuyên thấu cả thể xác lẫn tâm trí, mở rộng sự hiểu biết của chính nàng về bí ẩn mang tên thực tại.",
              notes_loc: [
                "Sát thương xuyên thấu có thể trúng các đơn vị tàng hình.",
                "Các hiệu ứng trên đòn đánh như bash sẽ chỉ áp dụng lên mục tiêu chính.",
              ],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "2",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 4,
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
                  name: "bonus_attack_range",
                  values_float: [80, 130, 180, 230],
                  is_percentage: false,
                  heading_loc: "TĂNG TẦM ĐÁNH:",
                  bonuses: [
                    {
                      name: "special_bonus_unique_templar_assassin_8",
                      value: 120,
                      operation: 0,
                    },
                  ],
                },
                {
                  name: "attack_spill_range",
                  values_float: [550, 600, 650, 700],
                  is_percentage: false,
                  heading_loc: "PSI BLADE RANGE:",
                  bonuses: [
                    {
                      name: "special_bonus_unique_templar_assassin_8",
                      value: 120,
                      operation: 0,
                    },
                  ],
                },
                {
                  name: "attack_spill_width",
                  values_float: [90],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "attack_spill_pct",
                  values_float: [100],
                  is_percentage: true,
                  heading_loc: "SÁT THƯƠNG LAN:",
                  bonuses: [],
                },
                {
                  name: "attack_spill_penalty",
                  values_float: [5],
                  is_percentage: true,
                  heading_loc: "REDUCTION PER TARGET:",
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
              id: 7853,
              name: "templar_assassin_trap_teleport",
              name_loc: "Psionic Projection",
              desc_loc:
                "Allows Templar Assassin to teleport to any Psionic Trap after channeling. Does not break Meld. Detonates the Psionic Trap on arrival.",
              lore_loc:
                "Lanaya được tiếp cận các bí mật nhằm khai phá nhiều kỹ năng mới cho năng lực ngoại cảm thiên phú mà nàng sở hữu, như một phần thưởng cho việc nàng đã tận tâm phụng sự.",
              notes_loc: [],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "8589934801",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 0,
              immunity: 0,
              dispellable: 0,
              max_level: 3,
              cast_ranges: [0],
              cast_points: [0.20000000298023224],
              channel_times: [1.5],
              cooldowns: [10],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [50],
              gold_costs: [],
              special_values: [
                {
                  name: "trap_radius",
                  values_float: [400],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "trap_duration",
                  values_float: [5],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "trap_bonus_damage",
                  values_float: [250, 300, 350],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG KÍCH HOẠT BẪY:",
                  bonuses: [],
                },
                {
                  name: "movement_speed_min",
                  values_float: [30],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "movement_speed_max",
                  values_float: [60],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "trap_max_charge_duration",
                  values_float: [4],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "tooltip_channel_time",
                  values_float: [1.5],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN VẬN PHÁP:",
                  bonuses: [],
                },
                {
                  name: "tooltip_cooldown",
                  values_float: [30],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN HỒI:",
                  bonuses: [],
                },
                {
                  name: "AbilityChannelTime",
                  values_float: [1.5],
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
                  values_float: [50],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [10],
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
              id: 5197,
              name: "templar_assassin_psionic_trap",
              name_loc: "Psionic Trap",
              desc_loc:
                "Templar Assassin đặt những cạm bẫy thần bí, theo dõi nhất cử nhất động của đối phương trong vô hình. Khi được kích hoạt, chúng gây hiệu ứng làm chậm %movement_speed_min%%% tốc độ chạy trong phạm vi ảnh hưởng. Bẫy tự tăng mức làm chậm, lên tối đa %movement_speed_max%%% sau %trap_max_charge_duration% giây. Gây thêm sát thương khi đạt tới mức làm chậm tối đa.",
              lore_loc:
                "Nhờ triệu gọi sự thông tuệ của Hidden Temple, không kẻ nào có thể thoát khỏi tầm mắt của Templar Assassin.",
              notes_loc: [
                "Bẫy tồn tại không giới hạn thời gian.",
                "Bẫy có 100 máu, thời gian ẩn thân là %trap_fade_time% giây và miễn nhiễm phép.",
                "Bẫy có tầm nhìn 400/400 và không ngăn việc sản sinh bãi quái rừng.",
              ],
              shard_loc:
                "Khiến Psionic Traps khóa phép kẻ địch lên tới 3.5 giây dựa trên thời gian bẫy tác dụng. Số lượng bẫy tối đa tăng thêm 4 và tăng 125 tầm nhìn.",
              scepter_loc: "",
              type: 1,
              behavior: "134217744",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 0,
              immunity: 4,
              dispellable: 2,
              max_level: 3,
              cast_ranges: [1800],
              cast_points: [
                0.30000001192092896, 0.30000001192092896, 0.30000001192092896,
                0.30000001192092896,
              ],
              channel_times: [0, 0, 0, 0],
              cooldowns: [11, 8, 5],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [15, 15, 15],
              gold_costs: [],
              special_values: [
                {
                  name: "max_traps",
                  values_float: [5, 8, 11],
                  is_percentage: false,
                  heading_loc: "SỐ BẪY TỐI ĐA:",
                  bonuses: [],
                },
                {
                  name: "trap_fade_time",
                  values_float: [2],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "movement_speed_min",
                  values_float: [30],
                  is_percentage: true,
                  heading_loc: "TỐC ĐỘ CHẠY GIẢM TỐI THIỂU:",
                  bonuses: [],
                },
                {
                  name: "movement_speed_max",
                  values_float: [60],
                  is_percentage: true,
                  heading_loc: "TỐC ĐỘ CHẠY GIẢM TỐI ĐA:",
                  bonuses: [],
                },
                {
                  name: "trap_duration_tooltip",
                  values_float: [5],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN LÀM CHẬM:",
                  bonuses: [],
                },
                {
                  name: "trap_bonus_damage",
                  values_float: [250, 300, 350],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG THÊM:",
                  bonuses: [],
                },
                {
                  name: "trap_max_charge_duration",
                  values_float: [4],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCastRange",
                  values_float: [1800],
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
                  values_float: [15],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [11, 8, 5],
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
              id: 6938,
              name: "special_bonus_unique_templar_assassin_3",
              name_loc: "+{s:value} sát thương Psionic Trap",
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
            {
              id: 5973,
              name: "special_bonus_evasion_20",
              name_loc: "{s:value}% né đòn",
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
              id: 757,
              name: "special_bonus_unique_templar_assassin_8",
              name_loc: "+{s:value} Psi Blades Attack and Spill Range",
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
              id: 6939,
              name: "special_bonus_unique_templar_assassin_4",
              name_loc: "Meld hóa giải bùa hại",
              desc_loc: "Gây hiệu ứng hóa giải cơ bản lên Templar Assassin.",
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
              id: 6545,
              name: "special_bonus_unique_templar_assassin_2",
              name_loc: "Meld giảm thêm {s:value} giáp",
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
                  values_float: [-3],
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
              id: 7371,
              name: "special_bonus_unique_templar_assassin_7",
              name_loc: "Đòn đánh từ Meld gây choáng {s:value} giây",
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
              id: 6071,
              name: "special_bonus_unique_templar_assassin",
              name_loc: "+{s:value} số lần Refraction",
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
                  values_float: [7],
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
