if (detail === undefined) var detail = {};
detail.antimage = {
  result: {
    data: {
      heroes: [
        {
          id: 1,
          name: "npc_dota_hero_antimage",
          order_id: 1,
          name_loc: "Anti-Mage",
          bio_loc:
            "Những thầy tu trên đỉnh Turstarkuri ngoảnh mặt làm ngơ khi mà từng đợt, từng đợt máu và lửa càn quét qua những vương quốc dưới núi. Sống khổ hạnh và thực tế, họ chìm vào những triết lý, rời xa khỏi bụi trần cũng như sự nhiễu loạn của ma thuật và thần linh. Và rồi quân đoàn của Dead God đã tới, mang theo niềm tin về cuộc thánh chiến, cuộc chiến xóa sổ mọi tín ngưỡng, chỉ còn lại một, tín ngưỡng hư vô hiểm độc của Unliving Lord. Đến từ vùng đất chỉ có máu và lửa trong hàng ngàn năm chiến loạn, chúng xé tan linh hồn và thân xác của những kẻ bại trận, rồi dùng chúng để chống lại những thầy tu Turstarkuri. Thế nhưng họ vẫn thiền định như xưa, chìm trong cái ý nghĩ rằng đó chỉ là những thứ được ma quỷ gửi đến để quấy nhiễu tâm trí họ. Kết quả tu viện chỉ trụ được trong một hai tuần. Và họ chết tại nơi họ đang thiền định. Chỉ có một người sống sót, một người thanh niên, người đến với tu viện để tìm kiếm trí tuệ, nhưng vẫn chưa được tu viện chấp thuận. Hắn kinh hoàng chứng chiến cảnh những thầy tu mình từng phục vụ bị thảm sát, rồi được hồi sinh trở thành một phần của binh đoàn ấy. Hắn bỏ hết tất cả, chạy trốn đến một nơi an toàn, chỉ mang theo những quyển trục giáo lý của Turstarkuri, hắn thề, hắn sẽ không chỉ xóa sạch ma thuật của Dead God mà còn đặt dấu chấm hết cho hai chữ 'ma thuật' một cách hoàn toàn.",
          hype_loc:
            "Should Anti-Mage have the opportunity to gather his full strength, few can stop his assaults. <b>Draining mana</b> from enemies with every strike or <b>teleporting short distances</b> to escape an ambush, cornering him is a challenge for any foe.",
          npe_desc_loc: "Chém quân thù với những đòn tấn công triệt tiêu mana",
          str_base: 21,
          str_gain: 1.600000023841858,
          agi_base: 24,
          agi_gain: 2.799999952316284,
          int_base: 12,
          int_gain: 1.7999999523162842,
          primary_attr: 1,
          complexity: 1,
          attack_capability: 1,
          role_levels: [3, 0, 1, 0, 0, 0, 3, 0, 0],
          damage_min: 53,
          damage_max: 57,
          attack_rate: 1.399999976158142,
          attack_range: 150,
          projectile_speed: 0,
          armor: 4,
          magic_resistance: 25,
          movement_speed: 310,
          turn_rate: 0.6000000238418579,
          sight_range_day: 1800,
          sight_range_night: 800,
          max_health: 620,
          health_regen: 2.3500001430511475,
          max_mana: 219,
          mana_regen: 0.6000000238418579,
          abilities: [
            {
              id: 5003,
              name: "antimage_mana_break",
              name_loc: "Mana Break",
              desc_loc:
                "Burns an opponent's mana on each attack and deals damage equal to a percentage of the mana burnt. Enemies with no mana left are temporarily slowed.",
              lore_loc:
                "Một kĩ thuật cải tiến từ cách tu sĩ Turstarkuri biến nội lực phép thuật chống lại chính chủ của nó.",
              notes_loc: [
                "Mana Break has %illusion_percentage%%% effect if caused by illusions.",
              ],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "2",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 1,
              immunity: 4,
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
                  name: "percent_damage_per_burn",
                  values_float: [50],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "mana_per_hit",
                  values_float: [28, 40, 52, 64],
                  is_percentage: false,
                  heading_loc: "MANA ĐỐT MỖI ĐÒN ĐÁNH:",
                  bonuses: [],
                },
                {
                  name: "mana_per_hit_pct",
                  values_float: [
                    1, 1.7999999523162842, 2.5999999046325684,
                    3.4000000953674316,
                  ],
                  is_percentage: true,
                  heading_loc: "MANA TỐI ĐA ĐỐT MỖI ĐÒN:",
                  bonuses: [],
                },
                {
                  name: "silence_chance",
                  values_float: [15],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "silence_duration",
                  values_float: [3],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "illusion_percentage",
                  values_float: [50],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "move_slow",
                  values_float: [10, 20, 30, 40],
                  is_percentage: true,
                  heading_loc: "MOVE SPEED SLOW ON FULL DRAIN:",
                  bonuses: [],
                },
                {
                  name: "slow_duration",
                  values_float: [0.75],
                  is_percentage: false,
                  heading_loc: "SLOW DURATION:",
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
              id: 5004,
              name: "antimage_blink",
              name_loc: "Blink",
              desc_loc:
                "Phép dịch chuyển tầm ngắn giúp Anti-Mage di chuyển ra vào chiến trận.",
              lore_loc:
                "Trong cuộc chạm trán với các Dead God, Anti-Mage hiểu được giá trị của khả năng né tránh, thoắt ẩn thoắt hiện.",
              notes_loc: ["Bạn có thể dùng Blink để né các đòn đánh bay tới."],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "524304",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 0,
              immunity: 0,
              dispellable: 0,
              max_level: 4,
              cast_ranges: [0],
              cast_points: [
                0.4000000059604645, 0.4000000059604645, 0.4000000059604645,
                0.4000000059604645,
              ],
              channel_times: [0, 0, 0, 0],
              cooldowns: [15, 12, 9, 6],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [60],
              gold_costs: [],
              special_values: [
                {
                  name: "blink_range",
                  values_float: [925, 1000, 1075, 1150],
                  is_percentage: false,
                  heading_loc: "CỰ LY:",
                  bonuses: [],
                },
                {
                  name: "min_blink_range",
                  values_float: [200],
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
                  values_float: [60],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [15, 12, 9, 6],
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
              id: 7314,
              name: "antimage_counterspell",
              name_loc: "Counterspell",
              desc_loc:
                "Tăng kháng phép. Có thể được kích hoạt để tạo một lớp khiên chống phép, phản lại toàn bộ các kỹ năng chỉ định lên kẻ thi triển nó.",
              lore_loc:
                "Khi tập trung đúng mức, Anti-Mage biến khả năng kháng cự thiên phú thành màn trả đũa có tính toán.",
              notes_loc: [],
              shard_loc:
                "Counterspell tạo một hào quang bán kính đơn vị, giảm 10%% sát thương kỹ năng của kẻ địch. Giảm thêm 20%% sát thương kỹ năng đối với kẻ địch trong bán kính 300 đơn vị",
              scepter_loc: "",
              type: 0,
              behavior: "2052",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 0,
              immunity: 0,
              dispellable: 2,
              max_level: 4,
              cast_ranges: [0],
              cast_points: [0, 0, 0, 0],
              channel_times: [0, 0, 0, 0],
              cooldowns: [15, 11, 7, 3],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [45, 50, 55, 60],
              gold_costs: [],
              special_values: [
                {
                  name: "magic_resistance",
                  values_float: [15, 25, 35, 45],
                  is_percentage: true,
                  heading_loc: "KHÁNG PHÉP:",
                  bonuses: [],
                },
                {
                  name: "duration",
                  values_float: [1.2000000476837158],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN:",
                  bonuses: [],
                },
                {
                  name: "AbilityManaCost",
                  values_float: [45, 50, 55, 60],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [15, 11, 7, 3],
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
              id: 543,
              name: "antimage_mana_overload",
              name_loc: "Blink Fragment",
              desc_loc:
                "Dịch chuyển một phân thân đến kẻ địch hoặc vị trí chỉ định, và tấn công chúng trong 7 giây. Counterspell khi thi triển cũng sẽ có tác dụng trên phân thân của Blink Fragment. Có 3 lượt dùng",
              lore_loc: "",
              notes_loc: [],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "8589934617",
              target_team: 2,
              target_type: 19,
              flags: 0,
              damage: 0,
              immunity: 4,
              dispellable: 0,
              max_level: 1,
              cast_ranges: [0],
              cast_points: [0.20000000298023224],
              channel_times: [0, 0, 0, 0],
              cooldowns: [0],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [50],
              gold_costs: [],
              special_values: [
                {
                  name: "duration",
                  values_float: [7],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "outgoing_damage",
                  values_float: [-25],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "incoming_damage",
                  values_float: [100],
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
                  values_float: [25],
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
              id: 5006,
              name: "antimage_mana_void",
              name_loc: "Mana Void",
              desc_loc:
                "Gây sát thương lên đối tượng và kẻ thù xung quanh dựa trên lượng mana thiếu hụt của mục tiêu. Đối tượng chính đồng thời cũng bị choáng nhẹ.",
              lore_loc:
                "Sau khi bắt kẻ thù phải phủ phục, Anti-Mage trừng phạt chúng vì sử dụng nghệ thuật pháp thuật.",
              notes_loc: [
                "Sát thương được tính toán dựa trên lượng mana thiếu hụt của mục tiêu chính, nhưng áp dụng cho tất cả kẻ địch trong vùng ảnh hưởng.",
              ],
              shard_loc: "",
              scepter_loc: "",
              type: 1,
              behavior: "40",
              target_team: 2,
              target_type: 19,
              flags: 0,
              damage: 2,
              immunity: 4,
              dispellable: 0,
              max_level: 3,
              cast_ranges: [600],
              cast_points: [
                0.30000001192092896, 0.30000001192092896, 0.30000001192092896,
                0.30000001192092896,
              ],
              channel_times: [0, 0, 0, 0],
              cooldowns: [70, 70, 70],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [100, 200, 300],
              gold_costs: [],
              special_values: [
                {
                  name: "mana_void_damage_per_mana",
                  values_float: [
                    0.800000011920929, 0.949999988079071, 1.100000023841858,
                  ],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG:",
                  bonuses: [],
                },
                {
                  name: "mana_void_ministun",
                  values_float: [0.30000001192092896],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN CHOÁNG:",
                  bonuses: [],
                },
                {
                  name: "mana_void_aoe_radius",
                  values_float: [500],
                  is_percentage: false,
                  heading_loc: "BÁN KÍNH:",
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
                  values_float: [100, 200, 300],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [70],
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
              id: 6250,
              name: "special_bonus_strength_9",
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
                  values_float: [9],
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
              id: 6012,
              name: "special_bonus_unique_antimage",
              name_loc: "-{s:value} giây hồi Blink",
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
              id: 666,
              name: "special_bonus_unique_antimage_7",
              name_loc: "+{s:value}% mana tối đa đốt",
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
                  values_float: [0.6000000238418579],
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
              id: 735,
              name: "special_bonus_unique_antimage_8",
              name_loc: "+{s:value} giây choáng cho Mana Void",
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
                  values_float: [0.699999988079071],
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
              id: 665,
              name: "special_bonus_unique_antimage_6",
              name_loc: "+{s:value} hệ số sát thương Mana Void",
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
                  values_float: [0.10000000149011612],
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
              id: 6606,
              name: "special_bonus_unique_antimage_3",
              name_loc: "+{s:value} tầm thi triển Blink",
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
                  values_float: [250],
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
              id: 6607,
              name: "special_bonus_unique_antimage_4",
              name_loc: "+{s:value}% kháng phép Counterspell",
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
              id: 6353,
              name: "special_bonus_unique_antimage_2",
              name_loc: "-{s:value} giây hồi Mana Void",
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
          ],
        },
      ],
    },
    status: 1,
  },
};
