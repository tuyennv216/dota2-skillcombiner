if (detail === undefined) var detail = {};
detail.chen = {
  result: {
    data: {
      heroes: [
        {
          id: 66,
          name: "npc_dota_hero_chen",
          order_id: 50,
          name_loc: "Chen",
          bio_loc:
            "Sinh ra trên vùng hoang địa vô thần Hazhadal Barrens, Chen lớn lên giữa các bộ lạc ngoài vòng pháp luật, những kẻ vật lộn mưu sinh qua ngày trong cái nắng chói chang vùng sa mạc. Sử dụng kỹ thuật cổ xưa để thao túng động vật, bộ lạc của Chen thuần hóa loài locuthi sa mạc rắn rỏi, một giống còi cọc thuộc họ rồng đất có thể nung chảy cát sa mạc thành những ống thủy tinh để chứa nước, vốn vô cùng quý giá ở nơi chỉ có mưa hai lần một năm này. Luôn bên bờ vực của chết đói và khát, phải đấu tranh giành lẫn nhau và giao chiến với các bộ tộc lân cận để sinh tồn, bộ lạc của Chen đã phạm một sai lầm, vào cái ngày định mệnh ấy, khi chọn nhầm đoàn lữ hành để tấn công.\r\n<br><br>Trong trận chiến khốc liệt diễn ra sau đó, bộ lạc của Chen đã bị áp đảo hoàn toàn. Những thánh kỵ sĩ Knights of the Fold với giáp trụ đầy đủ tiêu diệt bọn locuthi một cách dễ dàng, phe tấn công gục ngã hết lớp này đến lớp khác. Khi bọn rồng ngã xuống, những kẻ trong bộ tộc cũng chịu chung số phận. Chen đã chiến đấu, đã chống chọi, đã cào xé, đã thịt nát xương tan – mọi chuyện đáng lẽ đã xảy ra như vậy. Nhưng không, quỳ mọp trong tư thế của kẻ bại trận, hắn đối diện cuộc hành quyết với sự điềm tĩnh lạ thường, cổ giương ra sẵn sàng hứng lấy lưỡi dao chém xuống. Lay động bởi dũng khí đường đường của Chen, tay đao phủ dừng kiếm. Thay vì đầu lìa khỏi cổ, Chen được ban cho quyền lựa chọn: Chết hay cải đạo. Chen đón nhận tín ngưỡng mới với một sự hung bạo cực đoan. Hắn gia nhập hội thánh kỵ sĩ và nhận giáp phục cấp chức đều đều sau mỗi cuộc chinh phạt cải đạo đẫm máu. Giờ đây, với sự cuồng tín của một tên cải đạo cùng năng lực thao túng động vật đang trong thời đỉnh cao, hắn săn lùng những kẻ vô tín ngưỡng và khai sáng chúng đến với sự giác ngộ cuối cùng.",
          hype_loc:
            "Converting the creatures of the forest to his cause, Chen leads his <b>makeshift armies</b> to aid his team in battle. He assaults enemies with beasts while sending friends to safety. Then, when things seem darkest, he <b>heals his allies</b> wherever they may be.",
          npe_desc_loc: "Thu phục quái vật, xây dựng binh lực",
          str_base: 25,
          str_gain: 2,
          agi_base: 15,
          agi_gain: 2.0999999046325684,
          int_base: 19,
          int_gain: 3.200000047683716,
          primary_attr: 2,
          complexity: 3,
          attack_capability: 2,
          role_levels: [0, 2, 0, 0, 3, 0, 0, 2, 0],
          damage_min: 46,
          damage_max: 56,
          attack_rate: 1.7000000476837158,
          attack_range: 650,
          projectile_speed: 1100,
          armor: 1.5,
          magic_resistance: 25,
          movement_speed: 300,
          turn_rate: 0.6000000238418579,
          sight_range_day: 1800,
          sight_range_night: 800,
          max_health: 700,
          health_regen: 2.75,
          max_mana: 303,
          mana_regen: 1.4500000476837158,
          abilities: [
            {
              id: 5328,
              name: "chen_penitence",
              name_loc: "Penitence",
              desc_loc:
                "Khiến mục tiêu di chuyển chậm lại và đồng đội được tăng tốc độ đánh khi tấn công nó.",
              lore_loc:
                "Dù khả năng giác ngộ thú vật của Chen không đủ sức để thay đổi trí óc của tướng địch, nó vẫn đủ để thử sức chúng trong chiến trận.",
              notes_loc: [],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "8",
              target_team: 2,
              target_type: 19,
              flags: 0,
              damage: 0,
              immunity: 4,
              dispellable: 2,
              max_level: 4,
              cast_ranges: [800],
              cast_points: [
                0.30000001192092896, 0.30000001192092896, 0.30000001192092896,
                0.30000001192092896,
              ],
              channel_times: [0, 0, 0, 0],
              cooldowns: [14, 13, 12, 11],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [70, 75, 80, 85],
              gold_costs: [],
              special_values: [
                {
                  name: "duration",
                  values_float: [5, 6, 7, 8],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN:",
                  bonuses: [],
                },
                {
                  name: "speed",
                  values_float: [1400],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "bonus_movement_speed",
                  values_float: [-18, -24, -30, -36],
                  is_percentage: true,
                  heading_loc: "TỐC ĐỘ CHẠY GIẢM:",
                  bonuses: [],
                },
                {
                  name: "bonus_attack_speed",
                  values_float: [30, 60, 90, 120],
                  is_percentage: false,
                  heading_loc: "TỐC ĐỘ ĐÁNH TĂNG:",
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
                  values_float: [0.30000001192092896],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityManaCost",
                  values_float: [70, 75, 80, 85],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [14, 13, 12, 11],
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
              id: 5330,
              name: "chen_holy_persuasion",
              name_loc: "Holy Persuasion",
              desc_loc:
                "Chen thu phục một quái địch hoặc quái rừng và khiến nó được tăng tốc độ chạy. Nếu nó có lượng máu cơ bản thấp hơn ngưỡng máu tối thiểu, lượng máu cơ bản của nó sẽ được tăng lên tới ngưỡng máu tối thiểu. Quái được thu phục sẽ được tăng tốc độ chạy và sát thương đánh thường.\n\nCó thể thi triển lên quái được thu phục để dịch chuyển nó về cạnh Chen. Nếu thi triển lên Chen, mọi quái dưới quyền điều khiển sẽ được dịch chuyển về cạnh hắn. Mất hiệu ứng dịch chuyển khi mục tiêu nhận sát thương.",
              lore_loc:
                "Chẳng có ngựa, chẳng có tước hiệu, chẳng giống tí gì là hiệp sỹ, ấy thế Chen vẫn có thể thuần hóa thú hoang gia nhập hội Fold như cách mà chính hắn được giác ngộ.",
              notes_loc: [
                "Nếu thu phục một quái mới trong khi đã đạt số lượng thu phục tối đa, con được thu phục cũ nhất sẽ chết.",
                "Can target Ancient Creeps when Chen has Aghanim's Shard.",
                "Lượng máu của quái hiện đang bị Chen thu phục sẽ không cập nhật theo cấp độ mới nâng của Holy Persuasion.",
                "Hồi đầy mana cho quái khi thu phục.",
              ],
              shard_loc:
                "Allows Holy Persuasion to target Ancient Creeps. Can control up to 1/2/3 Ancient Creeps based on Hand of God's level.",
              scepter_loc: "",
              type: 0,
              behavior: "33554440",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 0,
              immunity: 3,
              dispellable: 3,
              max_level: 4,
              cast_ranges: [600],
              cast_points: [
                0.30000001192092896, 0.30000001192092896, 0.30000001192092896,
                0.30000001192092896,
              ],
              channel_times: [0, 0, 0, 0],
              cooldowns: [15],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [90, 110, 130, 150],
              gold_costs: [],
              special_values: [
                {
                  name: "max_units",
                  values_float: [1, 2, 3, 4],
                  is_percentage: false,
                  heading_loc: "SỐ LƯỢNG TỐI ĐA:",
                  bonuses: [],
                },
                {
                  name: "level_req",
                  values_float: [3, 4, 5, 6],
                  is_percentage: false,
                  heading_loc: "CẤP ĐỘ QUÁI TỐI ĐA:",
                  bonuses: [],
                },
                {
                  name: "health_min",
                  values_float: [700, 800, 900, 1000],
                  is_percentage: false,
                  heading_loc: "NGƯỠNG MÁU TỐI THIỂU:",
                  bonuses: [],
                },
                {
                  name: "movement_speed_bonus",
                  values_float: [10, 20, 30, 40],
                  is_percentage: false,
                  heading_loc: "TỐC ĐỘ CHẠY TĂNG:",
                  bonuses: [],
                },
                {
                  name: "damage_bonus",
                  values_float: [8, 16, 24, 32],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG TĂNG THÊM:",
                  bonuses: [],
                },
                {
                  name: "teleport_delay",
                  values_float: [6],
                  is_percentage: false,
                  heading_loc: "ĐỘ TRỄ DỊCH CHUYỂN:",
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
                  values_float: [90, 110, 130, 150],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [15],
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
              id: 7306,
              name: "chen_divine_favor",
              name_loc: "Divine Favor",
              desc_loc:
                "Hào quang khiến đồng minh được tăng giáp và máu hồi mỗi giây.",
              lore_loc:
                "Sự sùng đạo của Chen khiến đồng minh tràn đầy sinh khí, khiến chúng nghe theo mọi hiệu lệnh của hắn.",
              notes_loc: [],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "2",
              target_team: 1,
              target_type: 19,
              flags: 32,
              damage: 0,
              immunity: 1,
              dispellable: 3,
              max_level: 4,
              cast_ranges: [600],
              cast_points: [0.20000000298023224],
              channel_times: [0, 0, 0, 0],
              cooldowns: [0, 0, 0, 0],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [0, 0, 0, 0],
              gold_costs: [],
              special_values: [
                {
                  name: "armor",
                  values_float: [1, 2, 3, 4],
                  is_percentage: false,
                  heading_loc: "GIÁP:",
                  bonuses: [],
                },
                {
                  name: "heal_rate",
                  values_float: [1.5, 3, 4.5, 6],
                  is_percentage: false,
                  heading_loc: "MÁU HỒI MỖI GIÂY:",
                  bonuses: [],
                },
                {
                  name: "aura_radius",
                  values_float: [1200],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "teleport_delay",
                  values_float: [6],
                  is_percentage: false,
                  heading_loc: "",
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
              id: 5331,
              name: "chen_hand_of_god",
              name_loc: "Hand of God",
              desc_loc:
                "Heals all allied heroes on the map as well as all units under Chen's control. A large heal is applied at first and a slow heal over time is applied for %hot_duration% afterwards.",
              lore_loc:
                "Dùng liên kết tâm linh với nô lệ của mình, Chen phục hồi vết thương thể xác của những ai cùng chung niềm tin cuồng tín như hắn.",
              notes_loc: [
                "Có thể hồi máu cho các đồng minh với trạng thái bất khả xâm phạm, hay đang ẩn giấu hoặc bị trục xuất.",
              ],
              shard_loc: "",
              scepter_loc: "Hand of God Applies a Strong Dispel to all allies.",
              type: 1,
              behavior: "4",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 0,
              immunity: 1,
              dispellable: 0,
              max_level: 3,
              cast_ranges: [0],
              cast_points: [
                0.30000001192092896, 0.30000001192092896, 0.30000001192092896,
              ],
              channel_times: [0, 0, 0, 0],
              cooldowns: [160, 140, 120],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [200, 300, 400],
              gold_costs: [],
              special_values: [
                {
                  name: "heal_amount",
                  values_float: [200, 300, 400],
                  is_percentage: false,
                  heading_loc: "INITIAL HEAL:",
                  bonuses: [
                    {
                      name: "special_bonus_unique_chen_2",
                      value: 200,
                      operation: 0,
                    },
                  ],
                },
                {
                  name: "hot_duration",
                  values_float: [10],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "heal_per_second",
                  values_float: [20, 30, 40],
                  is_percentage: false,
                  heading_loc: "HEAL PER SECOND:",
                  bonuses: [
                    {
                      name: "special_bonus_unique_chen_2",
                      value: 10,
                      operation: 0,
                    },
                  ],
                },
                {
                  name: "ancient_creeps_scepter",
                  values_float: [1, 2, 3],
                  is_percentage: false,
                  heading_loc: "SỐ QUÁI CỔ ĐẠI (SHARD):",
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
                  values_float: [200, 300, 400],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [160, 140, 120],
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
              id: 841,
              name: "special_bonus_unique_chen_11",
              name_loc: "Penitence gây {s:value} sát thương",
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
              id: 7869,
              name: "special_bonus_unique_chen_5",
              name_loc: "+{s:value} sát thương tăng cho quái Holy Persuasion",
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
                  values_float: [16],
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
              id: 529,
              name: "special_bonus_unique_chen_8",
              name_loc: "Penitence +{s:value}% làm chậm",
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
              id: 7653,
              name: "special_bonus_unique_chen_7",
              name_loc: "-{s:value} giây hồi Hand of God",
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
              id: 6535,
              name: "special_bonus_unique_chen_4",
              name_loc: "+{s:value} máu tối thiểu của Holy Persuasion",
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
                  values_float: [1200],
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
              id: 6259,
              name: "special_bonus_unique_chen_1",
              name_loc: "Holy Persuasion +{s:value} đệ và lượt dùng tối đa",
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
              id: 6260,
              name: "special_bonus_unique_chen_2",
              name_loc:
                "+{s:bonus_heal_amount}/+{s:bonus_heal_per_second} Hand of God Heal/Heal Over Time",
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
          ],
        },
      ],
    },
    status: 1,
  },
};
