if (detail === undefined) var detail = {};
detail.alchemist = {
  result: {
    data: {
      heroes: [
        {
          id: 73,
          name: "npc_dota_hero_alchemist",
          order_id: 60,
          name_loc: "Alchemist",
          bio_loc:
            "Khoa học thiêng liêng của Chymistry đã luôn là truyền thống nhà Darkbrew, nhưng không một Darkbrew thể hiện cái sự sáng tạo, tham vọng, và liễu lĩnh như cậu trẻ Razzil cả. Tuy thế, khi tiếng gọi của tuổi trưởng thành đến hắn đã gạt kinh doanh gia đình ra một bên và thử tài chế tạo vàng bằng Thuật Giả Kim. \r\n<br><br>Trong một lần bạo dạn đánh bóng tên tuổi, Razzil thông báo sẽ chuyển hóa cả ngọn núi thành vàng. Xuyên suốt hai thập kỉ của nghiên cứu và chi tiêu và chuẩn bị, hắn đã thất bại một cách ngoạn mục, nhanh chóng thấy mình bị cầm tù vì sự phá hoại lan rộng mà thí nghiệm của hắn chạm vào. Ấy vậy Razzil chưa bao giờ là loại người dễ dàng bỏ cuộc, và thế là tìm cách trốn thoát nhằm tiếp tục nghiên cứu của mình.\r\n<br><br>Khi bạn tù hóa ra là một con orge hung tợn, Razzil đã tìm ra cơ hội mà hắn cần. Sau khi thuyết phục con orge không ăn thịt mình, Razzil thiết lập cẩn thận pha chế một loại cồn cho nó uống, làm từ nấm mốc và rêu mọc trong các khối đá nhà tù. Chỉ trong vòng một tuần, mọi thứ đã có vẻ sẵn sàng. Khi con orge uống thuốc, nó rơi vào cơn giận điên cuồng không gì cản nổi, phá hủy mọi song tù và bùng nổ xuyên qua tường cũng như lính gác.\r\n<br><br>Bộ đôi sớm phát hiện mình bị lạc đâu đó trong khu rừng bao quanh thành phố với dấu vết đổ nát theo sau cơn bừng tỉnh và không còn dấu hiệu truy đuổi nào. Trong dư ảnh của thứ thuốc bổ, con orge trông có vẻ thanh thản, hạnh phúc, và thậm chí háo hức. Quyết định cùng nhau hợp tác, bộ đội khởi hành để tìm kiếm nguyên liệu cần thiết để tiếp tục công việc Thuật Giả Kim chuyển hóa của Razzil một lần nữa.",
          hype_loc:
            "Synthesizing <b>extra resources</b> from each and every kill, Alchemist has no trouble gathering the tools needed to destroy his foes. Ambushing enemies with <b>corrosive acid</b> and a host of <b>unstable chemicals</b>, he battles to ensure his greedy escapades can remain uninterrupted.",
          npe_desc_loc: "Nhận thêm vàng khi kết liễu hoặc rune phần thưởng",
          str_base: 25,
          str_gain: 2.9000000953674316,
          agi_base: 22,
          agi_gain: 1.5,
          int_base: 25,
          int_gain: 1.7999999523162842,
          primary_attr: 0,
          complexity: 1,
          attack_capability: 1,
          role_levels: [2, 1, 1, 1, 0, 2, 0, 0, 1],
          damage_min: 52,
          damage_max: 58,
          attack_rate: 1.7000000476837158,
          attack_range: 150,
          projectile_speed: 900,
          armor: 2.6666667461395264,
          magic_resistance: 25,
          movement_speed: 305,
          turn_rate: 0.6000000238418579,
          sight_range_day: 1800,
          sight_range_night: 800,
          max_health: 700,
          health_regen: 2.75,
          max_mana: 375,
          mana_regen: 1.25,
          abilities: [
            {
              id: 5365,
              name: "alchemist_acid_spray",
              name_loc: "Acid Spray",
              desc_loc:
                "Phun ra axit với áp suất cao trong khu vực đã chọn. Kẻ địch khi đi vào khu vực này sẽ chịu sát thương theo thời gian và bị giảm giáp.",
              lore_loc:
                "Sử dụng công thức hóa học gia truyền của gia đình Darkbrew, Razzil pha chế ra thứ axit ăn mòn mọi thứ.",
              notes_loc: [],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "48",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 1,
              immunity: 4,
              dispellable: 0,
              max_level: 4,
              cast_ranges: [900],
              cast_points: [0.20000000298023224],
              channel_times: [0, 0, 0, 0],
              cooldowns: [22],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [130, 140, 150, 160],
              gold_costs: [],
              special_values: [
                {
                  name: "radius",
                  values_float: [475, 525, 575, 625],
                  is_percentage: false,
                  heading_loc: "BÁN KÍNH:",
                  bonuses: [],
                },
                {
                  name: "duration",
                  values_float: [16],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN:",
                  bonuses: [],
                },
                {
                  name: "damage",
                  values_float: [20, 25, 30, 35],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG MỖI GIÂY:",
                  bonuses: [],
                },
                {
                  name: "armor_reduction",
                  values_float: [4, 5, 6, 7],
                  is_percentage: false,
                  heading_loc: "GIẢM GIÁP:",
                  bonuses: [],
                },
                {
                  name: "tick_rate",
                  values_float: [1],
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
                {
                  name: "AbilityCastPoint",
                  values_float: [0.20000000298023224],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityManaCost",
                  values_float: [130, 140, 150, 160],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [22],
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
              id: 5366,
              name: "alchemist_unstable_concoction",
              name_loc: "Unstable Concoction",
              desc_loc:
                "Alchemist brews up an unstable concoction that he can throw at an enemy hero, to stun and deal damage in an area around the explosion. The longer the concoction brews, the more damage it deals and the longer the stun. Alchemist is faster while charging the concoction. After %brew_time% seconds, the brew reaches its maximum damage and stun time. However, after %brew_explosion% seconds, the concoction will explode on Alchemist himself if not thrown.",
              lore_loc:
                "Được tìm ra sau nỗ lực biến ngọn núi thành vàng, dung dịch dễ nổ này có tiềm năng hủy diệt khủng khiếp.",
              notes_loc: [
                "Khi đang pha chế, kỹ năng này được thay thế bởi Unstable Concoction Throw. Alchemist có thể di chuyển và hoạt động bình thường khi pha chế.",
                "Đồng hồ trên đầu Alchemist sẽ cho biết thời gian còn trước khi nổ. Kẻ địch cũng nhìn thấy nó.",
                "Bạn có thể tự sát với kĩ năng này.",
                "Unstable Concoction cannot be disjointed and once thrown Unstable Concoction stops brewing.",
                "Unstable Concoction explosion damages heroes and creeps.",
              ],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "2052",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 1,
              immunity: 4,
              dispellable: 1,
              max_level: 4,
              cast_ranges: [775],
              cast_points: [0],
              channel_times: [0, 0, 0, 0],
              cooldowns: [13],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [100],
              gold_costs: [],
              special_values: [
                {
                  name: "brew_time",
                  values_float: [5],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "brew_explosion",
                  values_float: [5.5],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "min_stun",
                  values_float: [0.25],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "max_stun",
                  values_float: [1.75, 2.5, 3.25, 4],
                  is_percentage: false,
                  heading_loc: "CHOÁNG TỐI ĐA:",
                  bonuses: [],
                },
                {
                  name: "min_damage",
                  values_float: [0],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "max_damage",
                  values_float: [150, 220, 290, 360],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG TỐI ĐA:",
                  bonuses: [],
                },
                {
                  name: "radius",
                  values_float: [250],
                  is_percentage: false,
                  heading_loc: "BÁN KÍNH NỔ:",
                  bonuses: [],
                },
                {
                  name: "move_speed",
                  values_float: [5, 10, 15, 20],
                  is_percentage: true,
                  heading_loc: "MOVE SPEED BONUS:",
                  bonuses: [],
                },
                {
                  name: "AbilityCastRange",
                  values_float: [775],
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
                  values_float: [13],
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
              id: 5368,
              name: "alchemist_goblins_greed",
              name_loc: "Greevil's Greed",
              desc_loc:
                "Alchemist kiếm thêm vàng từ kẻ địch và rune phần thưởng. Với mỗi mạng, lượng vàng kiếm thêm gồm hai phần: vàng cơ bản và vàng gia tăng. Nếu Alchemist giết thêm một mạng nữa trong vòng %duration% giây, một lần vàng gia tăng sẽ được cộng vào tổng lượng vàng kiếm thêm. Ngoài ra, tăng thêm lượng vàng nhận được từ rune phần thưởng.",
              lore_loc:
                "Dù không chuyển đổi được cả ngọn núi, Razzil đã thành thục kĩ năng biến vật chất đơn giản để làm đầy túi mình.",
              notes_loc: [],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "2",
              target_team: 1,
              target_type: 1,
              flags: 0,
              damage: 0,
              immunity: 0,
              dispellable: 0,
              max_level: 4,
              cast_ranges: [0],
              cast_points: [0.20000000298023224],
              channel_times: [0, 0, 0, 0],
              cooldowns: [0, 0, 0, 0],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [0, 0, 0, 0],
              gold_costs: [],
              special_values: [
                {
                  name: "duration",
                  values_float: [36],
                  is_percentage: false,
                  heading_loc: "KHUNG THỜI GIAN GIẾT GẦN ĐÂY:",
                  bonuses: [],
                },
                {
                  name: "bonus_gold",
                  values_float: [3],
                  is_percentage: false,
                  heading_loc: "VÀNG CƠ BẢN THÊM:",
                  bonuses: [],
                },
                {
                  name: "bonus_bonus_gold",
                  values_float: [3],
                  is_percentage: false,
                  heading_loc: "VÀNG GIA TĂNG THÊM:",
                  bonuses: [],
                },
                {
                  name: "bonus_gold_cap",
                  values_float: [15, 18, 21, 24],
                  is_percentage: false,
                  heading_loc: "VÀNG THÊM TỐI ĐA MỖI MẠNG:",
                  bonuses: [],
                },
                {
                  name: "bounty_multiplier",
                  values_float: [1.5, 2, 2.5, 3],
                  is_percentage: false,
                  heading_loc: "HỆ SỐ RUNE PHẦN THƯỞNG:",
                  bonuses: [],
                },
                {
                  name: "AbilityCastPoint",
                  values_float: [0.20000000298023224],
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
              id: 642,
              name: "alchemist_berserk_potion",
              name_loc: "Berserk Potion",
              desc_loc:
                "Alchemist ném một lọ thuốc vào đồng minh, gây hiệu ứng hóa giải cơ bản, đồng thời tăng %attack_speed% tốc độ đánh, %move_speed% tốc độ chạy và hồi thêm %hp_regen% máu mỗi giây cho họ.<br><br>Thời gian tác dụng: %duration% giây.",
              lore_loc: "",
              notes_loc: [],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "8589934601",
              target_team: 1,
              target_type: 19,
              flags: 0,
              damage: 2,
              immunity: 1,
              dispellable: 2,
              max_level: 1,
              cast_ranges: [800],
              cast_points: [0.20000000298023224],
              channel_times: [0, 0, 0, 0],
              cooldowns: [35],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [125],
              gold_costs: [],
              special_values: [
                {
                  name: "duration",
                  values_float: [10],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN:",
                  bonuses: [],
                },
                {
                  name: "attack_speed",
                  values_float: [50],
                  is_percentage: false,
                  heading_loc: "TỐC ĐỘ ĐÁNH TĂNG:",
                  bonuses: [],
                },
                {
                  name: "hp_regen",
                  values_float: [40],
                  is_percentage: false,
                  heading_loc: "MÁU HỒI MỖI GIÂY:",
                  bonuses: [],
                },
                {
                  name: "movement_speed",
                  values_float: [900],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "move_speed",
                  values_float: [30],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCastRange",
                  values_float: [800],
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
                  values_float: [125],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [35],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
              ],
              is_item: false,
              ability_has_scepter: false,
              ability_has_shard: true,
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
              id: 5369,
              name: "alchemist_chemical_rage",
              name_loc: "Chemical Rage",
              desc_loc:
                "Alchemist dùng hóa chất làm con Ogre nổi điên, giảm thời gian hồi tấn công cơ bản đồng thời tăng tốc độ chạy và máu hồi mỗi giây.\n\nLOẠI HÓA GIẢI: Cơ bản",
              lore_loc:
                "Dung dịch Razzil cho con Ogre uống trong lần vượt ngục của chúng đã trở thành một loại thuốc hữu dụng trên chiến trường.",
              notes_loc: [
                "Chuyển dạng mất %transformation_time% giây, trong lúc đó có thể tránh được các đường đạn.",
              ],
              shard_loc: "",
              scepter_loc:
                "Alchemist nung chảy Aghanim's Scepter để cung cấp cho tướng đồng minh hiệu ứng nâng cấp của Aghanim's Scepter. Với mỗi Aghanim's Scepter được nung chảy, khi bản thân Alchemist có Aghanim's Scepter hắn sẽ được tăng sát thương và tăng cường hóa phép.",
              type: 1,
              behavior: "4",
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
              cooldowns: [55],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [50, 75, 100],
              gold_costs: [],
              special_values: [
                {
                  name: "duration",
                  values_float: [25],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN:",
                  bonuses: [],
                },
                {
                  name: "transformation_time",
                  values_float: [0.3499999940395355],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "base_attack_time",
                  values_float: [1.2000000476837158, 1.100000023841858, 1],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN ĐÁNH CƠ BẢN:",
                  bonuses: [],
                },
                {
                  name: "bonus_health",
                  values_float: [0],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "bonus_health_regen",
                  values_float: [50, 75, 100],
                  is_percentage: false,
                  heading_loc: "MÁU HỒI MỖI GIÂY TĂNG:",
                  bonuses: [],
                },
                {
                  name: "bonus_mana_regen",
                  values_float: [0],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "bonus_movespeed",
                  values_float: [40, 50, 60],
                  is_percentage: false,
                  heading_loc: "TỐC ĐỘ CHẠY TĂNG:",
                  bonuses: [],
                },
                {
                  name: "scepter_gold_damage",
                  values_float: [2],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "scepter_bonus_damage",
                  values_float: [20],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG TĂNG (SCEPTER):",
                  bonuses: [],
                },
                {
                  name: "scepter_spell_amp",
                  values_float: [5],
                  is_percentage: true,
                  heading_loc: "CƯỜNG HÓA PHÉP (SCEPTER):",
                  bonuses: [],
                },
                {
                  name: "AbilityManaCost",
                  values_float: [50, 75, 100],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [55],
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
              id: 6119,
              name: "special_bonus_attack_speed_15",
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
              id: 6101,
              name: "special_bonus_unique_alchemist",
              name_loc: "+{s:value} bán kính Unstable Concoction",
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
                  values_float: [125],
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
              id: 6801,
              name: "special_bonus_cleave_25",
              name_loc: "+{s:value}% đánh lan",
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
              id: 6350,
              name: "special_bonus_unique_alchemist_2",
              name_loc: "+{s:value} sát thương Unstable Concoction",
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
              id: 351,
              name: "special_bonus_unique_alchemist_6",
              name_loc: "+{s:value} tốc độ chạy khi Chemical Rage",
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
            {
              id: 7054,
              name: "special_bonus_unique_alchemist_4",
              name_loc: "+{s:value} máu/giây cho Chemical Rage",
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
