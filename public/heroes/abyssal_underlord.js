if (detail === undefined) var detail = {};
detail.abyssal_underlord = {
  result: {
    data: {
      heroes: [
        {
          id: 108,
          name: "npc_dota_hero_abyssal_underlord",
          order_id: 112,
          name_loc: "Underlord",
          bio_loc:
            "Chẳng có điển tích hay thơ ca nào trên đời từng tiên đoán về sự xuất hiện của chúng.<br><br>Ẩn sâu trong lòng thế giới là những điều kỳ vĩ và các nỗi kinh hoàng chưa từng được biết tới. Tầng tầng lớp lớp, nằm dưới cả những mạch dung nham và những lõi núi lửa ngủ yên là thành phố hắc diện thạch Aziyog, một công trình hùng tráng tạo tác từ đá, trải dài vạn dặm trong những hang động không có điểm kết. Dọc theo những bức tường được dựng nên từ xương cốt của vô vàn nô lệ là binh đoàn Abyssal và tên thủ lĩnh bạo tàn của chúng, Vrogros.<br><br>Được vũ trang bởi những thợ rèn quỷ bậc thầy cùng sự thuần thục ma thuật Dark Rift, Vrogros có thể triệu hồi những làn mưa lửa và khóa chân kẻ địch bằng cách bẻ gãy không gian giữa các thế giới. Luôn tìm cách mở rộng lãnh thổ của mình, hắn tàn phá hoặc nô dịch tất thảy những gì bắt gặp. Nhưng cõi giới ngầm này lại quá nhỏ hẹp, làm sao có thể thỏa mãn tham vọng hung tàn của hắn. Một vài đợt quân xâm lăng dưới lệnh hắn đã tiên phong vượt qua khe nứt, đơn thuần chỉ để thăm dò sức kháng cự của các vương quốc nơi mặt đất. Giờ đây, khi toàn lực lượng đã sẵn sàng cho cuộc chinh phạt không hồi kết, Vrogros đích thân bước ra thế giới tràn ngập ánh sáng kia, tuyên bố rằng ách cai trị của hắn đã cận kề. Những kẻ đối mặt với Underlord buộc phải lựa chọn, hoặc cúi đầu và cống nạp, hoặc lập tức tan thây.",
          hype_loc:
            "Conjure waves of abyssal flame to immolate <b>enemies held paralyzed</b> in your spiteful grip. Feast upon the carnage of battle, <b>gaining strength</b> as foes perish around you, their attacks diminished by your very presence. Tear a rift in reality to <b>teleport</b> yourself and your teammates across the map, delivering bloody retribution to any who would defy the will of Vrogros the Underlord.",
          npe_desc_loc: "Dịch chuyển cả đội để tham chiến hoặc đào tẩu",
          str_base: 25,
          str_gain: 3,
          agi_base: 12,
          agi_gain: 1.600000023841858,
          int_base: 17,
          int_gain: 2.299999952316284,
          primary_attr: 0,
          complexity: 2,
          attack_capability: 1,
          role_levels: [0, 1, 1, 1, 0, 1, 2, 0, 0],
          damage_min: 62,
          damage_max: 68,
          attack_rate: 1.7000000476837158,
          attack_range: 200,
          projectile_speed: 900,
          armor: 5,
          magic_resistance: 25,
          movement_speed: 290,
          turn_rate: 0.6000000238418579,
          sight_range_day: 1800,
          sight_range_night: 800,
          max_health: 700,
          health_regen: 2.75,
          max_mana: 279,
          mana_regen: 0.8500000238418579,
          abilities: [
            {
              id: 5613,
              name: "abyssal_underlord_firestorm",
              name_loc: "Firestorm",
              desc_loc:
                "Gọi xuống những làn lửa gây sát thương lên kẻ địch trong khu vực chỉ định và đốt chúng thêm một lượng sát thương theo thời gian.",
              lore_loc:
                "Ngọn lửa chinh chiến bừng cháy lên từ vực sâu tăm tối nhất.",
              notes_loc: [],
              shard_loc:
                "Firestorm can be self-targeted. When used that way, the Firestorm follows Underlord around. Increases the wave count by 3. Reduces Wave and Burn intervals and duration by 25%.",
              scepter_loc: "",
              type: 0,
              behavior: "48",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 2,
              immunity: 4,
              dispellable: 2,
              max_level: 4,
              cast_ranges: [600, 625, 650, 675],
              cast_points: [0.5],
              channel_times: [0, 0, 0, 0],
              cooldowns: [12],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [110, 120, 130, 140],
              gold_costs: [],
              special_values: [
                {
                  name: "radius",
                  values_float: [425],
                  is_percentage: false,
                  heading_loc: "BÁN KÍNH:",
                  bonuses: [],
                },
                {
                  name: "wave_duration",
                  values_float: [7],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "wave_count",
                  values_float: [6],
                  is_percentage: false,
                  heading_loc: "SỐ LÀN LỬA:",
                  bonuses: [],
                },
                {
                  name: "wave_damage",
                  values_float: [25, 40, 55, 70],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG MỖI LÀN LỬA:",
                  bonuses: [],
                },
                {
                  name: "wave_interval",
                  values_float: [1],
                  is_percentage: false,
                  heading_loc: "WAVE INTERVAL:",
                  bonuses: [],
                },
                {
                  name: "burn_damage",
                  values_float: [1, 2, 3, 4],
                  is_percentage: true,
                  heading_loc: "SÁT THƯƠNG ĐỐT THEO MÁU TỐI ĐA:",
                  bonuses: [],
                },
                {
                  name: "burn_interval",
                  values_float: [1],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "burn_duration",
                  values_float: [2],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN ĐỐT:",
                  bonuses: [],
                },
                {
                  name: "AbilityCastRange",
                  values_float: [600, 625, 650, 675],
                  is_percentage: false,
                  heading_loc: "",
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
                  values_float: [110, 120, 130, 140],
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
              id: 5614,
              name: "abyssal_underlord_pit_of_malice",
              name_loc: "Pit of Malice",
              desc_loc:
                "Một cái bẫy chết người được tạo ra ở vị trí chỉ định, bất kỳ kẻ địch nào đi vào đó sẽ bị trói. Nếu vẫn còn trong bẫy, chúng sẽ lại bị trói sau mỗi %pit_interval% giây.",
              lore_loc:
                "Vrogros bóp méo dòng chảy của thực tại với sự căm thù của mình, khiến những kẻ chống lại ý nguyện của hắn trở nên tê liệt.",
              notes_loc: [],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "48",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 2,
              immunity: 4,
              dispellable: 2,
              max_level: 4,
              cast_ranges: [675],
              cast_points: [0.44999998807907104],
              channel_times: [0, 0, 0, 0],
              cooldowns: [21, 19, 17, 15],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [80, 100, 120, 140],
              gold_costs: [],
              special_values: [
                {
                  name: "radius",
                  values_float: [400],
                  is_percentage: false,
                  heading_loc: "BÁN KÍNH:",
                  bonuses: [],
                },
                {
                  name: "pit_duration",
                  values_float: [12],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN BẪY:",
                  bonuses: [],
                },
                {
                  name: "pit_interval",
                  values_float: [3.5999999046325684],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN CHỜ TRÓI LẠI:",
                  bonuses: [],
                },
                {
                  name: "pit_damage",
                  values_float: [0],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "ensnare_duration",
                  values_float: [
                    1.2000000476837158, 1.399999976158142, 1.600000023841858,
                    1.7999999523162842,
                  ],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN TRÓI:",
                  bonuses: [],
                },
                {
                  name: "speed_bonus",
                  values_float: [40],
                  is_percentage: true,
                  heading_loc: "SCEPTER SLOW:",
                  bonuses: [],
                },
                {
                  name: "AbilityCastRange",
                  values_float: [675],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCastPoint",
                  values_float: [0.44999998807907104],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityManaCost",
                  values_float: [80, 100, 120, 140],
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
              id: 5615,
              name: "abyssal_underlord_atrophy_aura",
              name_loc: "Atrophy Aura",
              desc_loc:
                "Làm yếu kẻ địch xung quanh, khiến chúng mất một phần sát thương cơ bản. Nếu chúng chết khi chịu ảnh hưởng của kỹ năng này, Underlord sẽ được tăng sát thương đánh thường trong một khoảng thời gian.",
              lore_loc:
                "Sự hiện diện của Underlord khiến chiến ý của bất cứ ai cũng trở nên mong manh như ngọn đèn trước gió.",
              notes_loc: [],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "65538",
              target_team: 2,
              target_type: 0,
              flags: 0,
              damage: 0,
              immunity: 0,
              dispellable: 3,
              max_level: 4,
              cast_ranges: [900],
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
                  values_float: [900],
                  is_percentage: false,
                  heading_loc: "BÁN KÍNH:",
                  bonuses: [],
                },
                {
                  name: "damage_reduction_pct",
                  values_float: [5, 15, 25, 35],
                  is_percentage: true,
                  heading_loc: "GIẢM SÁT THƯƠNG:",
                  bonuses: [],
                },
                {
                  name: "bonus_damage_from_creep",
                  values_float: [2, 4, 6, 8],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG TĂNG (QUÁI):",
                  bonuses: [],
                },
                {
                  name: "bonus_damage_from_hero",
                  values_float: [30, 35, 40, 45],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG TĂNG (TƯỚNG):",
                  bonuses: [],
                },
                {
                  name: "bonus_damage_duration",
                  values_float: [30, 45, 60, 75],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN:",
                  bonuses: [],
                },
                {
                  name: "bonus_damage_duration_scepter",
                  values_float: [70, 80, 90, 100],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCastRange",
                  values_float: [900],
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
              id: 865,
              name: "abyssal_underlord_dark_portal",
              name_loc: "Fiend's Gate",
              desc_loc:
                "Opens 2 portals, one next to Underlord and one in the target location. Heroes can channel a portal for 3 seconds to teleport to the other side. Allies that pass through the portal temporarily gain Damage Reduction and Movement Speed. Portals have to be at least %minimum_distance% away from each other.",
              lore_loc:
                "They come without warning, leaving fire and blood where kingdoms once flourished.",
              notes_loc: [],
              shard_loc: "",
              scepter_loc:
                "Summons a Pit of Malice around each of the portals. Units in Pit of Malice are slowed by 40%.",
              type: 1,
              behavior: "134217744",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 0,
              immunity: 4,
              dispellable: 0,
              max_level: 3,
              cast_ranges: [0],
              cast_points: [
                0.44999998807907104, 0.44999998807907104, 0.44999998807907104,
              ],
              channel_times: [0, 0, 0, 0],
              cooldowns: [140, 120, 100],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [100],
              gold_costs: [],
              special_values: [
                {
                  name: "duration",
                  values_float: [20],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN:",
                  bonuses: [],
                },
                {
                  name: "damage_reduction",
                  values_float: [10, 20, 30],
                  is_percentage: true,
                  heading_loc: "DAMAGE REDUCTION:",
                  bonuses: [],
                },
                {
                  name: "bonus_ms",
                  values_float: [10, 20, 30],
                  is_percentage: true,
                  heading_loc: "BONUS MOVE SPEED:",
                  bonuses: [],
                },
                {
                  name: "buff_duration",
                  values_float: [5, 6, 7],
                  is_percentage: false,
                  heading_loc: "BUFF DURATION:",
                  bonuses: [],
                },
                {
                  name: "minimum_distance",
                  values_float: [2000],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCastPoint",
                  values_float: [0.44999998807907104],
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
                  values_float: [140, 120, 100],
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
              id: 5932,
              name: "special_bonus_armor_5",
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
              id: 710,
              name: "special_bonus_unique_underlord_8",
              name_loc: "+{s:value} bán kính Firestorm",
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
              id: 557,
              name: "special_bonus_unique_underlord_6",
              name_loc: "+{s:value} bán kính Pit of Malice",
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
              id: 556,
              name: "special_bonus_unique_underlord_5",
              name_loc: "-{s:value} giây hồi Firestorm",
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
              id: 6969,
              name: "special_bonus_unique_underlord_4",
              name_loc: "+{s:value}% sát thương theo máu Firestorm",
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
              id: 6968,
              name: "special_bonus_unique_underlord_3",
              name_loc: "Atrophy Aura giảm thêm {s:value}% sát thương",
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
              id: 6019,
              name: "special_bonus_unique_underlord",
              name_loc: "+{s:value} giây trói Pit of Malice",
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
                  values_float: [0.6499999761581421],
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
              id: 805,
              name: "special_bonus_unique_underlord_9",
              name_loc: "+{s:value}% giá trị Atrophy cho đồng minh",
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