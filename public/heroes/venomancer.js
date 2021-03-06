if (detail === undefined) var detail = {};
detail.venomancer = {
  result: {
    data: {
      heroes: [
        {
          id: 40,
          name: "npc_dota_hero_venomancer",
          order_id: 30,
          name_loc: "Venomancer",
          bio_loc:
            "Tại những cánh rừng axit của đảo Jidi, độc dịch chảy khắp huyết quản và sôi sục trong ruột gan của tất thảy các sinh vật. Chúng leo trèo, trườn bò, hay lao đi thoăn thoắt giữa các dây leo phát sáng, thứ đang rỉ từng giọt nhựa ăn mòn đáng sợ. Dẫu vậy, trong số các hung thần chốn rừng thiêng nước độc này, Venomancer được xem như kẻ sở hữu độc tố tối thượng. Từ rất lâu về trước, một Thảo dược sư với cái tên Lesale đã vượt qua Vịnh Fradj hiểm trở chỉ bằng một chiếc thuyền thúng nhỏ, mong muốn tìm kiếm một tinh chất với động lực mạnh, có thể chiết xuất từ vỏ và rễ cây. Thế nhưng trời phụ lòng người, một cơn ác mộng đã ập đến. Sau ngót nghét bảy dặm đường rừng vào Jidi, khi Lesale vươn tay ngắt một loài thực vật biểu sinh - thực chất là một thứ bò sát ngụy trang thành, ông đã không may bị nó tiêm nọc. Trong cơn tuyệt vọng, ông liều lĩnh vận dụng những hiểu biết còn hạn hẹp của mình về thảo mộc của khu rừng, trộn lẫn nọc độc của con thằn lằn đã chết cùng với mật của một loài hoa lan bì cứng, tạo ra một thứ thuốc giải. Hỗn hợp được ông tiêm vào cơ thể bằng gai của cây lan này, giây lát trước khi hoàn toàn tê liệt, để rồi bản thân rơi vào cơn hôn mê tăm tối.\r\n<br><br>Mười bảy năm sau đó, tại chính nơi mà ông tưởng như đã bỏ mạng, một sinh vật khẽ rùng mình, phủi đi bùn đất đã bao phủ bấy nhiêu năm: Venomancer. Thảo dược sư Lesale giờ đây đã không còn––thay vào đó là Sứ giả chết chóc Lesale. Trí nhớ của hắn đã bị xoá sạch, xác thịt của hắn đã bị bào mòn, được thay thế bởi một vỏ bọc mới, hòa trộn giữa nọc của loài bò sát với độc bì của cây lan. Rừng axit Jidi xuất hiện một chủ nhân mới––một kẻ mà cả những sinh vật săn mồi hiểm ác nhất cũng phải học cách cúi đầu hoặc nấp sâu trốn kỹ để bảo toàn tính mạng. Hòn đảo khủng khiếp này nhanh chóng trở nên quá chật hẹp trước tham vọng của phần người còn sót lại sâu trong tim hắn. Nó xui khiến hắn đi tìm những loại độc tố mới––để rồi gieo rắc những cái chết mới cùng nỗi kinh hoàng bất tận.",
          hype_loc:
            "Venomancer mang lại cái chết cho kẻ thù của mình một cách từ từ. Tạo ra <b>một đội quân phóng độc</b> vô tận để bảo vệ lãnh thổ, khi kẻ thù đến gần hắn có thể giải phóng một <b>đám khói độc</b> lớn để làm suy yếu chúng.",
          npe_desc_loc:
            "Gây thêm sát thương theo thời gian với đòn đánh tẩm độc",
          str_base: 19,
          str_gain: 2.0999999046325684,
          agi_base: 24,
          agi_gain: 2.799999952316284,
          int_base: 19,
          int_gain: 1.7999999523162842,
          primary_attr: 1,
          complexity: 1,
          attack_capability: 2,
          role_levels: [0, 2, 1, 1, 0, 0, 0, 1, 1],
          damage_min: 46,
          damage_max: 49,
          attack_rate: 1.7000000476837158,
          attack_range: 450,
          projectile_speed: 900,
          armor: 4,
          magic_resistance: 25,
          movement_speed: 280,
          turn_rate: 0.6000000238418579,
          sight_range_day: 1800,
          sight_range_night: 800,
          max_health: 580,
          health_regen: 2.1500000953674316,
          max_mana: 303,
          mana_regen: 0.949999988079071,
          abilities: [
            {
              id: 5178,
              name: "venomancer_venomous_gale",
              name_loc: "Venomous Gale",
              desc_loc:
                "Phóng một quả cầu nọc độc theo đường thẳng, khiến kẻ địch chịu cả sát thương khởi điểm và theo thời gian, đồng thời bị giảm tốc độ chạy. Venomous Gale gây sát thương mỗi 3 giây trong thời gian hiệu lực.",
              lore_loc:
                "Một hỗn hợp các loại độc chất, nọc dịch thu thập từ rừng rậm đảo Jidi, không mấy nạn nhân có thể qua khỏi.",
              notes_loc: [
                "Sát thương từ Venomous Gale gây tử vong. Các đơn vị trúng phải Venomous Gale có thể được chối bỏ bởi đồng đội khi máu xuống dưới mức 25%.",
                "Gây sát thương mỗi %tick_interval% giây trong thời gian hiệu lực.",
                "Giảm %movement_slow%%% tốc độ chạy với hiệu quả giảm dần theo thời gian.",
              ],
              shard_loc:
                "Khiến Venomous Gale gọi 2 Plague Ward khi trúng một tướng. Tăng 400 cự ly di chuyển.",
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
              cast_ranges: [800],
              cast_points: [0, 0, 0, 0],
              channel_times: [0, 0, 0, 0],
              cooldowns: [21, 20, 19, 18],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [125],
              gold_costs: [],
              special_values: [
                {
                  name: "duration",
                  values_float: [15],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN:",
                  bonuses: [],
                },
                {
                  name: "strike_damage",
                  values_float: [50, 75, 100, 125],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG KHỞI ĐIỂM:",
                  bonuses: [],
                },
                {
                  name: "tick_damage",
                  values_float: [15, 45, 75, 105],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG MỖI 3 GIÂY:",
                  bonuses: [],
                },
                {
                  name: "tick_interval",
                  values_float: [3],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "movement_slow",
                  values_float: [-50],
                  is_percentage: true,
                  heading_loc: "LÀM CHẬM:",
                  bonuses: [],
                },
                {
                  name: "radius",
                  values_float: [125],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "speed",
                  values_float: [1200],
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
                  name: "AbilityManaCost",
                  values_float: [125],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [21, 20, 19, 18],
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
              id: 5179,
              name: "venomancer_poison_sting",
              name_loc: "Poison Sting",
              desc_loc:
                "Khiến các đòn đánh thường của Venomancer thêm độc tính, làm giảm tốc độ chạy của mục tiêu.",
              lore_loc:
                "Venomancer giờ đây sở hữu thứ nọc độc gây tê liệt của sinh vật từng biến hắn thành hình dạng này.",
              notes_loc: [
                "Sát thương của Poison Sting có thể gây tử vong.",
                "Sát thương từ Poison Sting không làm mất hiệu ứng hồi máu hay mana từ vật phẩm, và cũng không kích hoạt thời gian hồi của Blink Dagger.",
              ],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "2",
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
              cooldowns: [0, 0, 0, 0],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [0, 0, 0, 0],
              gold_costs: [],
              special_values: [
                {
                  name: "duration",
                  values_float: [6, 9, 12, 15],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN:",
                  bonuses: [],
                },
                {
                  name: "damage",
                  values_float: [8, 16, 24, 32],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG MỖI GIÂY:",
                  bonuses: [],
                },
                {
                  name: "movement_speed",
                  values_float: [-8, -10, -12, -14],
                  is_percentage: true,
                  heading_loc: "TỐC ĐỘ CHẠY GIẢM:",
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
              id: 5180,
              name: "venomancer_plague_ward",
              name_loc: "Plague Ward",
              desc_loc:
                "Triệu tập một cái cọc mang bệnh dịch, tấn công các đơn vị và công trình địch. Cọc miễn nhiễm phép và khi tấn công có hiệu ứng Poison Sting của Venomancer, gây 50% sát thương của kỹ năng đó.",
              lore_loc:
                "Một chút tài năng thảo dược, pha thêm sự tinh thông độc chất mới có, kết quả là hiện thân sống của bệnh dịch.",
              notes_loc: [],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "16",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 1,
              immunity: 3,
              dispellable: 0,
              max_level: 4,
              cast_ranges: [850],
              cast_points: [0, 0, 0, 0],
              channel_times: [0, 0, 0, 0],
              cooldowns: [5],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [20, 22, 24, 26],
              gold_costs: [],
              special_values: [
                {
                  name: "duration",
                  values_float: [40],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN:",
                  bonuses: [],
                },
                {
                  name: "ward_hp_tooltip",
                  values_float: [120, 230, 340, 450],
                  is_percentage: false,
                  heading_loc: "MÁU CỌC:",
                  bonuses: [],
                },
                {
                  name: "ward_damage_tooltip",
                  values_float: [13, 22, 31, 40],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG CỌC:",
                  bonuses: [],
                },
                {
                  name: "ward_hp",
                  values_float: [150, 400, 650, 900],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "ward_damage",
                  values_float: [26, 44, 62, 80],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCastRange",
                  values_float: [850],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityManaCost",
                  values_float: [20, 22, 24, 26],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
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
              id: 5181,
              name: "venomancer_poison_nova",
              name_loc: "Poison Nova",
              desc_loc:
                "A spreading ring of poison that does damage over time to enemy units around Venomancer.  Poison Nova cannot deal lethal damage; targets will be left with at least 1 health.",
              lore_loc:
                "Ở các cánh rừng Acid, không lạ khi các sinh vật phóng độc chất vào kẻ tấn công mình; Venomancer rắp tâm truyền thứ bệnh dịch này ra ngoài đảo Jidi.",
              notes_loc: [],
              shard_loc: "",
              scepter_loc: "Tăng sát thương và giảm thời gian hồi chiêu.",
              type: 1,
              behavior: "4",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 2,
              immunity: 4,
              dispellable: 3,
              max_level: 3,
              cast_ranges: [0],
              cast_points: [0, 0, 0],
              channel_times: [0, 0, 0, 0],
              cooldowns: [140, 120, 100],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [200, 300, 400],
              gold_costs: [],
              special_values: [
                {
                  name: "radius",
                  values_float: [850, 900, 950],
                  is_percentage: false,
                  heading_loc: "BÁN KÍNH:",
                  bonuses: [],
                },
                {
                  name: "start_radius",
                  values_float: [255],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "duration",
                  values_float: [20],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN:",
                  bonuses: [],
                },
                {
                  name: "damage",
                  values_float: [2, 2.75, 3.5],
                  is_percentage: true,
                  heading_loc: "MAX HP AS DAMAGE:",
                  bonuses: [],
                },
                {
                  name: "cooldown_scepter",
                  values_float: [100, 80, 60],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN HỒI (SCEPTER):",
                  bonuses: [],
                },
                {
                  name: "damage_scepter",
                  values_float: [3, 3.75, 4.5],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG (SCEPTER):",
                  bonuses: [],
                },
                {
                  name: "speed",
                  values_float: [550],
                  is_percentage: false,
                  heading_loc: "TRAVEL SPEED:",
                  bonuses: [],
                },
                {
                  name: "base_damage",
                  values_float: [20, 30, 40],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG CƠ BẢN:",
                  bonuses: [],
                },
                {
                  name: "aspd_slow",
                  values_float: [0],
                  is_percentage: false,
                  heading_loc: "ATTACK SPEED SLOW:",
                  bonuses: [
                    {
                      name: "special_bonus_unique_venomancer_5",
                      value: 100,
                      operation: 0,
                    },
                  ],
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
              id: 6979,
              name: "special_bonus_unique_venomancer_3",
              name_loc: "-{s:value}s Venomous Gale CD",
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
                  values_float: [6],
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
              id: 6034,
              name: "special_bonus_hp_175",
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
                  values_float: [175],
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
              id: 6532,
              name: "special_bonus_unique_venomancer_2",
              name_loc: "Poison Sting làm chậm thêm {s:value}%",
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
                  values_float: [-8],
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
              id: 6980,
              name: "special_bonus_unique_venomancer_4",
              name_loc: "+{s:value} giây tác dụng Poison Nova",
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
              id: 811,
              name: "special_bonus_unique_venomancer_8",
              name_loc: "-{s:value} giây hồi Plague Ward",
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
              id: 6981,
              name: "special_bonus_unique_venomancer_5",
              name_loc: "Poison Nova reduces {s:bonus_aspd_slow} Attack Speed",
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
              id: 6058,
              name: "special_bonus_unique_venomancer",
              name_loc: "{s:value}x máu/sát thương Plague Ward",
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
                  values_float: [2.5],
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
