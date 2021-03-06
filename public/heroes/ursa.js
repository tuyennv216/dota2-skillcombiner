if (detail === undefined) var detail = {};
detail.ursa = {
  result: {
    data: {
      heroes: [
        {
          id: 70,
          name: "npc_dota_hero_ursa",
          order_id: 63,
          name_loc: "Ursa",
          bio_loc:
            "Chiến binh Ulfsaar là thành viên dũng mãnh nhất của bộ tộc gấu, luôn bảo vệ cho vùng đất và đồng loại của mình. Vào những mùa đông dài, khi các gấu mẹ ngủ đông và nuôi dưỡng gấu con, thì các gấu đực tuần tra các vùng đất phía trên, cảnh giác và không mệt mỏi, để bảo vệ và duy trì giống nòi của chúng. Khi những lời đồn đại về một thế lực tà ác đang lan truyền ngày một nhiều thêm, Ulfsaar quyết định du hành vượt ra khỏi địa giới quê nhà hoang dã của mình, với ý định tìm kiếm và tiêu diệt mối nguy trước khi nó có thể làm hại đến đồng loại loài gấu. Một sinh vật với tinh thần kiên định và ngay thẳng, vô cùng đáng tin cậy, và cũng là một đồng minh, người bảo vệ hết mực trung thành.",
          hype_loc:
            "<b>Với mỗi phát đánh bằng móng vuốt của mình</b>, Ursa khiến mục tiêu bị đau hơn trong đòn đánh kế tiếp. Có khả năng <b>tăng tốc đánh</b> trong một khoảng thời gian ngắn và <b>làm chậm</b> con mồi gần bên, hắn tiễn kẻ địch lên bảng trong chớp mắt.",
          npe_desc_loc:
            "Gây thêm sát thương với mỗi đòn đánh trúng lên cùng một kẻ địch",
          str_base: 25,
          str_gain: 2.5999999046325684,
          agi_base: 18,
          agi_gain: 2.5999999046325684,
          int_base: 16,
          int_gain: 1.5,
          primary_attr: 1,
          complexity: 1,
          attack_capability: 1,
          role_levels: [2, 0, 0, 1, 1, 1, 0, 0, 0],
          damage_min: 42,
          damage_max: 46,
          attack_rate: 1.7000000476837158,
          attack_range: 150,
          projectile_speed: 900,
          armor: 4,
          magic_resistance: 25,
          movement_speed: 310,
          turn_rate: 0.6000000238418579,
          sight_range_day: 1800,
          sight_range_night: 800,
          max_health: 700,
          health_regen: 3,
          max_mana: 267,
          mana_regen: 0.800000011920929,
          abilities: [
            {
              id: 5357,
              name: "ursa_earthshock",
              name_loc: "Earthshock",
              desc_loc:
                "Ursa nhảy %hop_distance% đơn vị tới trước rồi giậm mạnh xuống đất, tạo ra một chấn động mạnh mẽ, gây sát thương và làm chậm các đơn vị địch ở gần trong vòng %abilityduration% giây.",
              lore_loc:
                "Những bước chân dũng mãnh của gấu đực làm lay chuyển mặt đất cũng như chiến ý của kẻ địch.",
              notes_loc: [],
              shard_loc:
                "Khiến Earthshock khi được thi triển cho bạn hiệu ứng của Enrage trong 1.5 giây.",
              scepter_loc: "",
              type: 0,
              behavior: "134219780",
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
              cooldowns: [14, 12, 10, 8],
              durations: [4],
              damages: [75, 125, 175, 225],
              mana_costs: [85],
              gold_costs: [],
              special_values: [
                {
                  name: "shock_radius",
                  values_float: [385],
                  is_percentage: false,
                  heading_loc: "BÁN KÍNH:",
                  bonuses: [],
                },
                {
                  name: "movement_slow",
                  values_float: [-16, -24, -32, -40],
                  is_percentage: true,
                  heading_loc: "TỐC ĐỘ CHẠY GIẢM:",
                  bonuses: [],
                },
                {
                  name: "hop_distance",
                  values_float: [250],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "hop_duration",
                  values_float: [0.25],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "hop_height",
                  values_float: [83],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "#AbilityDamage",
                  values_float: [75, 125, 175, 225],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityDuration",
                  values_float: [4],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityManaCost",
                  values_float: [85],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [14, 12, 10, 8],
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
              id: 5358,
              name: "ursa_overpower",
              name_loc: "Overpower",
              desc_loc:
                "Vận dụng kỹ năng của hắn trong chiến đấu, Ursa tăng tốc độ đánh của bản thân cho một số đòn đánh thường kế tiếp.",
              lore_loc:
                "Chớ trông mặt mà bắt hình dong, Ursa tuy to xác nhưng nhanh khó lường.",
              notes_loc: [
                "Overpower không bị hóa giải bởi Black King Bar.",
                "Đánh trượt vẫn sẽ tốn một lượt đánh của Overpower.",
              ],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "134217732",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 0,
              immunity: 0,
              dispellable: 2,
              max_level: 4,
              cast_ranges: [0],
              cast_points: [
                0.30000001192092896, 0.30000001192092896, 0.30000001192092896,
                0.30000001192092896,
              ],
              channel_times: [0, 0, 0, 0],
              cooldowns: [12, 11, 10, 9],
              durations: [20],
              damages: [0, 0, 0, 0],
              mana_costs: [30, 40, 50, 60],
              gold_costs: [],
              special_values: [
                {
                  name: "max_attacks",
                  values_float: [3, 4, 5, 6],
                  is_percentage: false,
                  heading_loc: "SỐ ĐÒN ĐÁNH:",
                  bonuses: [],
                },
                {
                  name: "attack_speed_bonus_pct",
                  values_float: [400],
                  is_percentage: false,
                  heading_loc: "TỐC ĐÁNH TĂNG:",
                  bonuses: [],
                },
                {
                  name: "AbilityDuration",
                  values_float: [20],
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
                  values_float: [30, 40, 50, 60],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [12, 11, 10, 9],
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
              id: 5359,
              name: "ursa_fury_swipes",
              name_loc: "Fury Swipes",
              desc_loc:
                "Móng vuốt của Ursa liên tục hằn sâu thêm vào các vết thương của kẻ địch, khiến cho các đòn đánh liên tiếp lên cùng một mục tiêu gây sát thương tăng tiến dần. Nếu mục tiêu ảnh hưởng không bị Ursa tấn công trong vòng %bonus_reset_time% giây, sát thương cộng thêm sẽ mất.",
              lore_loc:
                "Trong tự nhiên, những kẻ đã bị thương tích sẽ hiếm khi sống sót qua những đòn tấn công của kẻ săn mồi đói khát.",
              notes_loc: [],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "2",
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
              cooldowns: [0, 0, 0, 0],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [0, 0, 0, 0],
              gold_costs: [],
              special_values: [
                {
                  name: "bonus_reset_time",
                  values_float: [8, 12, 16, 20],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN BÙA HẠI:",
                  bonuses: [
                    {
                      name: "special_bonus_unique_ursa_4",
                      value: 20,
                      operation: 0,
                    },
                  ],
                },
                {
                  name: "bonus_reset_time_roshan",
                  values_float: [10],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN BÙA HẠI (ROSHAN):",
                  bonuses: [],
                },
                {
                  name: "damage_per_stack",
                  values_float: [10, 19, 28, 37],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG TĂNG SAU MỖI ĐÒN:",
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
              id: 5360,
              name: "ursa_enrage",
              name_loc: "Enrage",
              desc_loc:
                "Ursa rơi vào trạng thái điên cuồng, giảm sát thương phải nhận và tăng kháng hiệu ứng. Xóa tất cả bùa hại đang chịu ảnh hưởng.\n\nLOẠI HÓA GIẢI: mạnh",
              lore_loc:
                "Ulfsaar phó thác tâm trí hắn cho linh hồn cổ xưa, biến bản thân thành sinh vật cuồng bạo nhất trên chiến trường.",
              notes_loc: [],
              shard_loc: "",
              scepter_loc:
                "Giảm thời gian hồi chiêu và cho phép Ursa dùng Enrage ngay cả khi bị khống chế.",
              type: 1,
              behavior: "2052",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 0,
              immunity: 3,
              dispellable: 3,
              max_level: 3,
              cast_ranges: [0],
              cast_points: [0, 0, 0, 0],
              channel_times: [0, 0, 0, 0],
              cooldowns: [70, 50, 30],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [0, 0, 0],
              gold_costs: [],
              special_values: [
                {
                  name: "damage_reduction",
                  values_float: [80],
                  is_percentage: true,
                  heading_loc: "SÁT THƯƠNG GIẢM:",
                  bonuses: [],
                },
                {
                  name: "status_resistance",
                  values_float: [50],
                  is_percentage: true,
                  heading_loc: "KHÁNG HIỆU ỨNG:",
                  bonuses: [],
                },
                {
                  name: "duration",
                  values_float: [4, 4.5, 5],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN:",
                  bonuses: [],
                },
                {
                  name: "cooldown_scepter",
                  values_float: [30, 24, 18],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN HỒI (SCEPTER):",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [70, 50, 30],
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
              id: 6975,
              name: "special_bonus_unique_ursa_4",
              name_loc: "+{s:value} giây hiệu ứng Fury Swipes",
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
              id: 6926,
              name: "special_bonus_mp_regen_175",
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
                  values_float: [1.75],
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
              id: 6029,
              name: "special_bonus_agility_10",
              name_loc: "+{s:value} Nhanh nhẹn",
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
              id: 6195,
              name: "special_bonus_hp_350",
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
            {
              id: 758,
              name: "special_bonus_unique_ursa_8",
              name_loc: "+{s:value}% kháng hiệu ứng Enrage",
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
              id: 6132,
              name: "special_bonus_unique_ursa",
              name_loc: "+{s:value} sát thương Fury Swipes",
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
              id: 6973,
              name: "special_bonus_unique_ursa_2",
              name_loc: "-{s:value} giây hồi chiêu Earthshock",
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
              id: 424,
              name: "special_bonus_unique_ursa_7",
              name_loc: "+{s:value} đòn đánh Overpower",
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
          ],
        },
      ],
    },
    status: 1,
  },
};
