if (detail === undefined) var detail = {};
detail.lone_druid = {
  result: {
    data: {
      heroes: [
        {
          id: 80,
          name: "npc_dota_hero_lone_druid",
          order_id: 73,
          name_loc: "Lone Druid",
          bio_loc:
            "Rất lâu trước khi những dòng đầu tiên của những trang sử đầu tiên được viết nên, từng tồn tại một bộ lạc của các tu sĩ mang tên Tộc Gấu. Họ là một bộ tộc thông thái và công bằng, luôn tập trung vào con đường tìm kiếm sự thấu hiểu những lời huấn thị của tự nhiên. Thấy rõ quyết tâm của bộ tộc, các thế lực quyền năng nhất của tự nhiên đã xuất hiện và yêu cầu gặp mặt người thông thái nhất trong tộc. Trưởng lão Sylla, nhà tiên tri đồng thời là người phán xử của cả tộc, bước lên đại diện cho đồng bào mình và nhận lấy Hạt giống cùng lời căn dặn: ‘Khi cả thế giới chìm trong cõi vô minh, khi ánh sáng văn minh rời bỏ vùng đất này, vào thời khắc thế giới bị tàn sát và vụn vỡ bởi những sa mạc vô tận trong ngày tàn của các thời đại, hãy gieo Hạt giống này.’\r\n<br><br>Ngay lúc đón nhận trách nhiệm trời ban, Sylla cảm thấy những năm tháng cuộc đời in hằn lên thể xác như tan biến hết và sức sống trẻ trung lại chảy tràn trong cơ thể. Một đại dương tri thức bùng nổ trong tâm trí ông. Ông nhận ra mình có thể phóng chiếu ý chí của chính bản thân vào thực tại, và với một sự tập trung nhất định, ông có thể thay đổi hình dạng vật chất của mình. Ấy vậy, những kẻ xấu mồm độc miệng, những lời đàm tiếu lan truyền tin tức về Hạt giống và quyền năng của nó đến mọi nơi, một cuộc chiến kinh hoàng đã giáng xuống Tộc Gấu. Chứng kiến miền đất tổ tiên của mình lụi tàn trong khói lửa, Sylla gánh trách nhiệm lên vai và chạy trốn vào miền hoang dã.\r\n<br><br>Thời gian trôi qua, lịch sử và truyền thuyết về Tộc Gấu, về Sylla và Hạt giống, về cả những nền văn minh phi thường từng trỗi dậy và lụi tàn sau Tộc Gấu đều bị lãng quên. Hàng thiên niên kỷ trôi qua Sylla vẫn chờ đợi, chờ những lời dẫn dắt tiếp theo mà các vị thần ban xuống, chờ cho hòa bình đến với mọi vương quốc luôn sống trong bão lửa chiến tranh, chờ đến ngày tàn của mọi thứ trong cảnh lưu vong và đến hồi kết của giao ước thiêng liêng mà ông đã lập với các vị thần. Ông luôn chuẩn bị sẵn sàng để đối mặt và tiêu diệt bất cứ thứ gì dám đe dọa đến trọng trách của đời mình.",
          hype_loc:
            "Battling alongside his <b>powerful spirit bear</b>, Lone Druid demolishes enemy forces and structures. Switching as needed between <b>ranged and melee attacks</b> with his transformation, should he have enough time to arm and strengthen both himself and his companion, there is little that can stop them.",
          npe_desc_loc:
            "Điều khiển một chú gấu tinh hùng mạnh trong chiến trận",
          str_base: 18,
          str_gain: 2.5,
          agi_base: 20,
          agi_gain: 2.799999952316284,
          int_base: 13,
          int_gain: 1.399999976158142,
          primary_attr: 1,
          complexity: 3,
          attack_capability: 2,
          role_levels: [2, 0, 0, 0, 1, 1, 0, 3, 0],
          damage_min: 38,
          damage_max: 42,
          attack_rate: 1.600000023841858,
          attack_range: 550,
          projectile_speed: 900,
          armor: 1.3333334922790527,
          magic_resistance: 25,
          movement_speed: 325,
          turn_rate: 0.6000000238418579,
          sight_range_day: 1800,
          sight_range_night: 800,
          max_health: 560,
          health_regen: 2.0500001907348633,
          max_mana: 231,
          mana_regen: 0.6500000357627869,
          abilities: [
            {
              id: 5412,
              name: "lone_druid_spirit_bear",
              name_loc: "Summon Spirit Bear",
              desc_loc:
                "Summons a powerful Spirit Bear companion that can equip items.  If the bear moves 1100 distance away from the Lone Druid, it cannot attack.  Lone Druid suffers %backlash_damage%%% of his max health as backlash damage if the Spirit Bear dies. Spirit Bear does not benefit from attributes.\nSpirit Bear has the Return, Demolish and Entangling Claws abilities.",
              lore_loc:
                "Sinh vật đồng hành tri kỷ của Sylla, hòa hợp với hắn cả về tâm trí lẫn tinh thần, sẵn sàng xuất hiện để hỗ trợ bất cứ lúc nào.",
              notes_loc: [
                "Hầu hết các kỹ năng đều tương tác với Spirit Bear như đối với tướng.",
              ],
              shard_loc: "",
              scepter_loc:
                "Cho phép Spirit Bear tấn công mà không cần phải ở gần Lone Druid, và vẫn sống được khi hắn chết.",
              type: 0,
              behavior: "4",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 0,
              immunity: 0,
              dispellable: 0,
              max_level: 4,
              cast_ranges: [0],
              cast_points: [0.5, 0.5, 0.5, 0.5],
              channel_times: [0, 0, 0, 0],
              cooldowns: [120],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [75, 75, 75, 75],
              gold_costs: [],
              special_values: [
                {
                  name: "bear_hp",
                  values_float: [1100, 1400, 1700, 2000],
                  is_percentage: false,
                  heading_loc: "MÁU (SPIRIT BEAR):",
                  bonuses: [],
                },
                {
                  name: "bear_regen_tooltip",
                  values_float: [5, 6, 7, 8],
                  is_percentage: false,
                  heading_loc: "MÁU HỒI MỖI GIÂY (SPIRIT BEAR):",
                  bonuses: [],
                },
                {
                  name: "bear_bat",
                  values_float: [
                    1.75, 1.649999976158142, 1.5499999523162842,
                    1.4500000476837158,
                  ],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN ĐÁNH CƠ BẢN (SPIRIT BEAR):",
                  bonuses: [],
                },
                {
                  name: "bear_armor",
                  values_float: [3, 4, 5, 6],
                  is_percentage: false,
                  heading_loc: "GIÁP (SPIRIT BEAR):",
                  bonuses: [],
                },
                {
                  name: "backlash_damage",
                  values_float: [20],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "cooldown_scepter",
                  values_float: [120],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "movespeed_tooltip",
                  values_float: [340, 360, 380, 400],
                  is_percentage: false,
                  heading_loc: "TỐC ĐỘ CHẠY (SPIRIT BEAR):",
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
                  values_float: [75],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [120],
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
              id: 7309,
              name: "lone_druid_spirit_link",
              name_loc: "Spirit Link",
              desc_loc:
                "Links Lone Druid and the Spirit Bear, sharing a percentage of their armor with each other, increasing the attack speed of both and causing damage dealt by the Spirit Bear to heal Lone Druid. ",
              lore_loc:
                "Sylla như bạo dạn hơn khi ở cạnh người bạn đồng hành, sinh lực của ông như được phục hồi với mỗi cú vả của Spirit Bear.",
              notes_loc: [],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "2",
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
              cooldowns: [0, 0, 0, 0],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [0, 0, 0, 0],
              gold_costs: [],
              special_values: [
                {
                  name: "bonus_attack_speed",
                  values_float: [16, 32, 48, 64],
                  is_percentage: false,
                  heading_loc: "TỐC ĐỘ ĐÁNH TĂNG:",
                  bonuses: [],
                },
                {
                  name: "lifesteal_percent",
                  values_float: [20, 35, 50, 65],
                  is_percentage: true,
                  heading_loc: "HÚT MÁU CHIA SẺ:",
                  bonuses: [],
                },
                {
                  name: "armor_sharing",
                  values_float: [8, 12, 16, 20],
                  is_percentage: true,
                  heading_loc: "ARMOR SHARED:",
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
              id: 5414,
              name: "lone_druid_savage_roar",
              name_loc: "Savage Roar",
              desc_loc:
                "Lone Druid và Spirit Bear cùng gầm lên một tiếng dữ dội, khiến kẻ thù xung quanh hoảng hốt tháo chạy về căn cứ của chúng. Tăng %bonus_speed%%% tốc độ chạy cho các mục tiêu bị ảnh hưởng.",
              lore_loc:
                "Sylla học hỏi và thông thạo phép thuật thất truyền của Hùng tộc (Bear Clan), nâng cao sự hòa hợp của mình với thiên nhiên.",
              notes_loc: [
                "Tướng bị trói sẽ không thể di chuyển.",
                "Chia sẻ thời gian hồi với Spirit Bear.",
              ],
              shard_loc:
                "Savage Roar giờ cho đồng minh trong phạm vi 700 đơn vị +20% tốc độ chạy và +60 tốc độ đánh trong 5 giây. Cho hóa giải cơ bản. Lone Druid và Spirit Bear cùng thi triển bất chấp khả năng dùng phép của bên còn lại.",
              scepter_loc: "",
              type: 0,
              behavior: "4",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 0,
              immunity: 4,
              dispellable: 2,
              max_level: 4,
              cast_ranges: [0],
              cast_points: [0.10000000149011612],
              channel_times: [0, 0, 0, 0],
              cooldowns: [38, 32, 26, 20],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [50],
              gold_costs: [],
              special_values: [
                {
                  name: "radius",
                  values_float: [375],
                  is_percentage: false,
                  heading_loc: "KHOẢNG CÁCH:",
                  bonuses: [],
                },
                {
                  name: "bonus_speed",
                  values_float: [20],
                  is_percentage: true,
                  heading_loc: "TỐC ĐỘ CHẠY TĂNG (ĐỊCH):",
                  bonuses: [],
                },
                {
                  name: "duration",
                  values_float: [
                    1.399999976158142, 1.7999999523162842, 2.200000047683716,
                    2.5999999046325684,
                  ],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN:",
                  bonuses: [],
                },
                {
                  name: "only_affects_player_units",
                  values_float: [1],
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
                  values_float: [50],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [38, 32, 26, 20],
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
              id: 5415,
              name: "lone_druid_true_form",
              name_loc: "True Form",
              desc_loc:
                "Lone Druid learns to morph himself into a raging bear, losing his ranged advantage, but gaining increased bonus armor and health, and improved versions of Entangling Claws and Demolish.",
              lore_loc:
                "Đại hùng là bá chủ của khu rừng, sở hữu ngôi vương bằng sức mạnh thuần túy.",
              notes_loc: [
                "Tùy theo Lone Druid đang ở chế độ cận chiến hay đánh xa, thời gian hồi của một số trang bị dựa trên các yếu tố này sẽ thay đổi tương ứng tại thời điểm sử dụng.",
              ],
              shard_loc: "",
              scepter_loc: "",
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
              cast_points: [0, 0, 0],
              channel_times: [0, 0, 0, 0],
              cooldowns: [100],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [200],
              gold_costs: [],
              special_values: [
                {
                  name: "bonus_armor",
                  values_float: [8, 10, 12],
                  is_percentage: false,
                  heading_loc: "GIÁP TĂNG THÊM:",
                  bonuses: [],
                },
                {
                  name: "bonus_hp",
                  values_float: [500, 1000, 1500],
                  is_percentage: false,
                  heading_loc: "MÁU TĂNG:",
                  bonuses: [],
                },
                {
                  name: "base_attack_time",
                  values_float: [1.7000000476837158],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN ĐÁNH CƠ BẢN:",
                  bonuses: [],
                },
                {
                  name: "duration",
                  values_float: [40],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN:",
                  bonuses: [],
                },
                {
                  name: "transformation_time",
                  values_float: [1.9329999685287476],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN BIẾN HÌNH:",
                  bonuses: [],
                },
                {
                  name: "AbilityManaCost",
                  values_float: [200],
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
              id: 423,
              name: "special_bonus_unique_lone_druid_11",
              name_loc: "+{s:value} tốc độ chạy Spirit Bear",
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
              id: 6268,
              name: "special_bonus_unique_lone_druid_4",
              name_loc: "-{s:value}s Savage Roar Cooldown",
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
              id: 6262,
              name: "special_bonus_unique_lone_druid_2",
              name_loc: "+{s:value} giáp cho Spirit Bear",
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
              id: 6806,
              name: "special_bonus_unique_lone_druid_8",
              name_loc: "-{s:value} giây hồi True Form",
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
              id: 7036,
              name: "special_bonus_unique_lone_druid_9",
              name_loc: "0 Entangling Claws Cooldown",
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
              id: 7382,
              name: "special_bonus_unique_lone_druid_10",
              name_loc: "{s:value} thời gian đánh cơ bản Spirit Bear",
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
                  values_float: [-0.10000000149011612],
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
              id: 6680,
              name: "special_bonus_unique_lone_druid_7",
              name_loc: "+{s:value} máu True Form và Spirit Bear",
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
                  values_float: [1000],
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
