if (detail === undefined) var detail = {};
detail.queenofpain = {
  result: {
    data: {
      heroes: [
        {
          id: 39,
          name: "npc_dota_hero_queenofpain",
          order_id: 51,
          name_loc: "Queen of Pain",
          bio_loc:
            "Vị Vua Ecclesiast xứ Elze thèm khát đau đớn - đau đớn cấm. Nếu như hắn ở vị thế thấp hơn, những dục vọng như vậy sẽ chỉ bị coi là ngu ngốc, nhưng vì hắn là 1 vị vua, để thoả mãn những dục vọng như vậy có thể làm ô uế cả Ngai Vàng Thần Thánh. Vì vậy, hắn tìm đến những chuyên gia quỷ ám trong ngục tối, hứa sẽ đem tự do đến cho bất cứ ai triệu hồi 1 dục quỷ bạo dâm và đặt khoá nó dưới quyền lực của hắn. 1 sinh vật tên Akasha đến, và đem đến cho hắn những bạo dục tuyệt diệu đến nỗi hắn phong cho ả tước hiệu Nữ Hoàng Bí Mật, và hắn dành tất cả thời gian rảnh quỵ luỵ trước những trò bạo dâm thống khoái của ả - dẫn tới việc hắn phủi đi tất cả trách nhiệm của 1 vị vua để theo đuối những dục vọng mà chỉ ả có thể đem lại. Nữ Hoàng Đau Đớn có thể đưa hắn cận kề cái chết, nhưng ả cũng bị nguyền phải giữ hắn sống. Cuối cùng, sự thoái hoá của vị vua dẫn tới 1 cuộc nổi loạn. Hắn bị lôi khỏi phòng ngu và ném xuống từ đỉnh Tháp Cầu Nguyện, và lúc hắn chết là lúc Nữ Hoàng Đau Đớn được thả tự do ra thế giới, tự do khỏi kiếp nô lệ, tự do để đem lại đau đớn cho bất cứ ai ả lọt vào tầm ngắm của ả.",
          hype_loc:
            "Queen of Pain tấn công không cần dấu hiệu báo trước, tiêu diệt những kẻ địch đứng cạnh với <b>tiếng thét kinh hoàng</b>. Nếu có kẻ nào sống sót sau tiếng thét đó, ả hạ độc <b>làm chậm</b> chúng với <b>con dao</b> của mình trước khi ra đòn kết liễu.",
          npe_desc_loc: "Tốc biến ra vào để gây lượng lớn sát thương phép",
          str_base: 18,
          str_gain: 2.4000000953674316,
          agi_base: 22,
          agi_gain: 2.5,
          int_base: 25,
          int_gain: 3.4000000953674316,
          primary_attr: 2,
          complexity: 2,
          attack_capability: 2,
          role_levels: [1, 0, 3, 0, 0, 0, 3, 0, 0],
          damage_min: 49,
          damage_max: 55,
          attack_rate: 1.5,
          attack_range: 550,
          projectile_speed: 1500,
          armor: 3.6666667461395264,
          magic_resistance: 25,
          movement_speed: 290,
          turn_rate: 0.6000000238418579,
          sight_range_day: 1800,
          sight_range_night: 800,
          max_health: 560,
          health_regen: 2.0500001907348633,
          max_mana: 375,
          mana_regen: 1.25,
          abilities: [
            {
              id: 5173,
              name: "queenofpain_shadow_strike",
              name_loc: "Shadow Strike",
              desc_loc:
                "Ném một con dao găm độc gây ra lượng sát thương khởi điểm lớn, và rồi gây sát thương từ từ. Đối tượng dính độc bị giảm tốc độ chạy trong %duration% giây. Sát thương được gây ra từng đợt, mỗi đợt cách nhau %damage_interval% giây. Queen of Pain được hồi máu mỗi khi kẻ địch nhận sát thương. Lượng máu hồi giảm một nửa khi đối tượng nhận sát thương là quái.",
              lore_loc:
                "Dao găm tẩm độc của Akasha giúp nàng thỏa thích bòn rút sự khổ hạnh của nạn nhân.",
              notes_loc: [
                "Đối tượng dính độc dần dần hồi lại tốc độ chạy gốc theo thời gian.",
                "Đối tượng dính Shadow Strike có thể được chối bỏ bởi đồng minh khi lượng Máu rớt dưới 25% lượng máu tối đa.",
              ],
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
              cast_ranges: [450, 500, 550, 600],
              cast_points: [0.4000000059604645],
              channel_times: [0, 0, 0, 0],
              cooldowns: [16, 12, 8, 4],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [110, 120, 130, 140],
              gold_costs: [],
              special_values: [
                {
                  name: "strike_damage",
                  values_float: [30, 60, 90, 120],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG KHỞI ĐIỂM:",
                  bonuses: [],
                },
                {
                  name: "duration_damage",
                  values_float: [20, 40, 60, 80],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG MỖI ĐỢT:",
                  bonuses: [],
                },
                {
                  name: "movement_slow",
                  values_float: [-20, -35, -50, -65],
                  is_percentage: true,
                  heading_loc: "TỐC ĐỘ CHẠY GIẢM:",
                  bonuses: [],
                },
                {
                  name: "projectile_speed",
                  values_float: [900],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "damage_interval",
                  values_float: [3],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "duration_heal",
                  values_float: [10, 20, 30, 40],
                  is_percentage: false,
                  heading_loc: "HEAL PER TICK:",
                  bonuses: [],
                },
                {
                  name: "duration",
                  values_float: [15],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN:",
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
                  values_float: [110, 120, 130, 140],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [16, 12, 8, 4],
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
              id: 5174,
              name: "queenofpain_blink",
              name_loc: "Blink",
              desc_loc:
                "Phép dịch chuyển tầm ngắn giúp Queen of Pain di chuyển ra vào chiến trận.",
              lore_loc:
                "Nữ hoàng Bí mật sống không hổ danh, làm cho cơn đau của nàng không chi thoát được.",
              notes_loc: [
                "Bạn có thể dùng Blink để tránh những vật thể bay tới.",
              ],
              shard_loc:
                "Releases a sonic boom when Queen of Pain blinks, at both her starting and ending locations. Deals %shard_damage% damage in a 300 AoE and silences the target for %shard_duration% seconds.",
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
                0.33000001311302185, 0.33000001311302185, 0.33000001311302185,
                0.33000001311302185,
              ],
              channel_times: [0, 0, 0, 0],
              cooldowns: [12, 10, 8, 6],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [60, 60, 60, 60],
              gold_costs: [],
              special_values: [
                {
                  name: "blink_range",
                  values_float: [1075, 1150, 1225, 1300],
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
                  name: "shard_damage",
                  values_float: [125],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "shard_duration",
                  values_float: [1.75],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCastPoint",
                  values_float: [0.33000001311302185],
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
                  values_float: [12, 10, 8, 6],
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
              id: 5175,
              name: "queenofpain_scream_of_pain",
              name_loc: "Scream Of Pain",
              desc_loc:
                "Queen of Pain thét lên một tiếng sắc bén như ngàn mũi dao, gây sát thương lên kẻ địch xung quanh.",
              lore_loc:
                "Âm giọng nhục cảm của Akasha như mời gọi đối phương tới chơi, để rồi cướp hồn chúng và xơi.",
              notes_loc: [
                "Scream Of Pain tác động đến cả đối tượng tàng hình.",
                "Không thể tránh Scream Of Pain.",
              ],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "4",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 2,
              immunity: 4,
              dispellable: 0,
              max_level: 4,
              cast_ranges: [0],
              cast_points: [0, 0, 0, 0],
              channel_times: [0, 0, 0, 0],
              cooldowns: [7],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [100, 110, 120, 130],
              gold_costs: [],
              special_values: [
                {
                  name: "area_of_effect",
                  values_float: [550],
                  is_percentage: false,
                  heading_loc: "BÁN KÍNH:",
                  bonuses: [],
                },
                {
                  name: "projectile_speed",
                  values_float: [900],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "damage",
                  values_float: [75, 150, 225, 300],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG:",
                  bonuses: [],
                },
                {
                  name: "AbilityManaCost",
                  values_float: [100, 110, 120, 130],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
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
            {
              id: 5176,
              name: "queenofpain_sonic_wave",
              name_loc: "Sonic Wave",
              desc_loc:
                "Tạo ra một làn sóng âm khổng lồ trước Queen of Pain, gây ra một lượng sát thương lớn lên mọi kẻ địch dính phải và đẩy lùi chúng.",
              lore_loc:
                "Là đòn hành hình tuyệt mỹ nhất, Sonic Wave của Akasha giải thoát kẻ thù khỏi nỗi thống khổ của chúng.",
              notes_loc: [
                "Sonic Wave có thể đánh trúng mục tiêu cách đó tới 1150 đơn vị.",
              ],
              shard_loc: "",
              scepter_loc: "Tăng sát thương và giảm thời gian hồi chiêu.",
              type: 1,
              behavior: "1040",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 4,
              immunity: 3,
              dispellable: 0,
              max_level: 3,
              cast_ranges: [700],
              cast_points: [
                0.4519999921321869, 0.4519999921321869, 0.4519999921321869,
              ],
              channel_times: [0, 0, 0, 0],
              cooldowns: [125],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [250, 400, 550],
              gold_costs: [],
              special_values: [
                {
                  name: "starting_aoe",
                  values_float: [100],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "distance",
                  values_float: [900],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "final_aoe",
                  values_float: [450],
                  is_percentage: false,
                  heading_loc: "BÁN KÍNH TỐI ĐA:",
                  bonuses: [],
                },
                {
                  name: "speed",
                  values_float: [900],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "damage",
                  values_float: [310, 430, 550],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG:",
                  bonuses: [],
                },
                {
                  name: "knockback_distance",
                  values_float: [350],
                  is_percentage: false,
                  heading_loc: "CỰ LY ĐẨY LÙI:",
                  bonuses: [],
                },
                {
                  name: "knockback_duration",
                  values_float: [1.399999976158142],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "cooldown_scepter",
                  values_float: [40],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN HỒI (SCEPTER):",
                  bonuses: [],
                },
                {
                  name: "damage_scepter",
                  values_float: [420, 560, 700],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG (SCEPTER):",
                  bonuses: [],
                },
                {
                  name: "AbilityCastRange",
                  values_float: [700],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCastPoint",
                  values_float: [0.4519999921321869],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityManaCost",
                  values_float: [250, 400, 550],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [125],
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
              id: 5960,
              name: "special_bonus_attack_damage_20",
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
              id: 437,
              name: "special_bonus_strength_11",
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
                  values_float: [11],
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
              id: 629,
              name: "special_bonus_unique_queen_of_pain_4",
              name_loc: "+{s:value} đợt sát thương Shadow Strike",
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
              id: 5907,
              name: "special_bonus_attack_speed_30",
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
              id: 6856,
              name: "special_bonus_unique_queen_of_pain_2",
              name_loc: "+{s:value} sát thương Scream of Pain",
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
              id: 6407,
              name: "special_bonus_unique_queen_of_pain",
              name_loc: "Shadow Strike có phạm vi {s:value}",
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
                  values_float: [525],
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
              id: 751,
              name: "special_bonus_unique_queen_of_pain_6",
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
              id: 448,
              name: "special_bonus_spell_block_18",
              name_loc: "Chặn phép mỗi {s:block_cooldown} giây",
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
                  name: "block_cooldown",
                  values_float: [18],
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
