if (detail === undefined) var detail = {};
detail.nyx_assassin = {
  result: {
    data: {
      heroes: [
        {
          id: 88,
          name: "npc_dota_hero_nyx_assassin",
          order_id: 88,
          name_loc: "Nyx Assassin",
          bio_loc:
            "Sâu bên dưới đại thư viện Archive of Ultimyr, nằm giữa những sách chuyên luận học thuật về phân loại rồng và sách về các bùa chú bất khả dịch, tồn tại một quyển cổ thư ghi lại điều bí ẩn về côn trùng. Được biên soạn bởi nhiều học giả, quyển cổ thư mô tả năng lực về thần giao cách cảm của loài bọ hung zealot, một quần thể côn trùng xa lạ với bộ kỹ năng độc nhất vô nhị trong cả bảy cõi giới.\r\n<br><br>Khác với ấu trùng trong đàn, Nyx Assassin không trải qua quá trình biến đổi hình thái thông thường, chẳng biến thành cái chủng sinh vật đầu óc chậm chạp với những phần phụ tầm thường, mòn cụt vốn chỉ thuộc về tầng lớp lao động trong giống loài của hắn. Vì giai đoạn lột xác của hắn là đặc biệt, được dẫn lối bởi quyền năng của nữ thần Nyx. Hắn đã trải qua sự chọn lọc khắt khe, vượt qua vô số kẻ để được xức dầu thánh - tinh chế từ chính nữ thần. Không phải ai cũng sống sót qua lễ cầu phúc hắc ám trong gian phòng bọ chúa, nhưng hắn đã làm được, để rồi trỗi dậy với một tâm trí thông suốt, với vuốt sắc như gươm đao, bộ hàm bén như dao cạo - xé toạc không khí trong khi ý nghĩ trong ám xuyên thấu trí óc muôn loài xung quanh. Trong toàn thể bọ hung zealot, hắn là kẻ duy nhất được chọn để đi theo tiếng gọi tối cao. Sau cuộc lột xác đó, hắn như được tái sinh, bởi quyền năng của nữ thần Nyx, với những khả năng đã định hình chỉ cho một và chỉ một mục đích duy nhất: giết chóc nhân danh nữ thần.",
          hype_loc:
            "Nyx Assassin is always hunting for fragile targets. Sneaking <b>invisibly</b> through the forest, when he spots his prey, he swipes them with his deadly claws and impales them on <b>stunning spikes</b>, then reverses any counterattack with his <b>reflecting carapace.</b>",
          npe_desc_loc: "Phản sát thương và làm choáng kẻ địch",
          str_base: 17,
          str_gain: 2.5,
          agi_base: 18,
          agi_gain: 2.5,
          int_base: 21,
          int_gain: 2.0999999046325684,
          primary_attr: 1,
          complexity: 2,
          attack_capability: 1,
          role_levels: [0, 0, 2, 2, 0, 0, 1, 0, 2],
          damage_min: 45,
          damage_max: 49,
          attack_rate: 1.7000000476837158,
          attack_range: 150,
          projectile_speed: 900,
          armor: 4,
          magic_resistance: 25,
          movement_speed: 310,
          turn_rate: 0.6000000238418579,
          sight_range_day: 1800,
          sight_range_night: 800,
          max_health: 540,
          health_regen: 3.700000047683716,
          max_mana: 327,
          mana_regen: 1.0500000715255737,
          abilities: [
            {
              id: 5462,
              name: "nyx_assassin_impale",
              name_loc: "Impale",
              desc_loc:
                "Một loạt gai đá lao lên từ mặt đất, chạy theo một đường thẳng. Kẻ địch dính phải sẽ bị ném lên trên không, sau đó bị choáng và nhận sát thương khi chúng rơi xuống.",
              lore_loc:
                "Toàn bộ lũ Zealot Scarab đều biết tường tận mọi lối đi, ngõ ngách dưới lòng đất để sử dụng chúng khi cần.",
              notes_loc: [
                "Impale di chuyển khoảng cách %length% đơn vị với tốc độ %speed% mỗi giây.",
                "Impale không thể bị chặn bởi Linken's Sphere.",
              ],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "134217744",
              target_team: 2,
              target_type: 19,
              flags: 0,
              damage: 2,
              immunity: 4,
              dispellable: 1,
              max_level: 4,
              cast_ranges: [700],
              cast_points: [0.30000001192092896],
              channel_times: [0, 0, 0, 0],
              cooldowns: [17, 16, 15, 14],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [105, 120, 135, 150],
              gold_costs: [],
              special_values: [
                {
                  name: "width",
                  values_float: [125],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "duration",
                  values_float: [
                    1.399999976158142, 1.7999999523162842, 2.200000047683716,
                    2.5999999046325684,
                  ],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN CHOÁNG:",
                  bonuses: [],
                },
                {
                  name: "length",
                  values_float: [700],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "speed",
                  values_float: [1600],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "cooldown_upgrade",
                  values_float: [7],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "impale_damage",
                  values_float: [100, 160, 220, 280],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG IMPALE:",
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
                  values_float: [0.30000001192092896],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityManaCost",
                  values_float: [105, 120, 135, 150],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [17, 16, 15, 14],
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
              id: 5463,
              name: "nyx_assassin_mana_burn",
              name_loc: "Mana Burn",
              desc_loc:
                "Đốt mana của tướng địch được chỉ định dựa theo chỉ số trí tuệ của hắn, và gây sát thương bằng với lượng mana đốt được.",
              lore_loc:
                "Sử sách Ultimyr có ghi lại về một con bọ với khả năng ăn mòn tâm trí của những kẻ kém cỏi hơn.",
              notes_loc: [],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "134217768",
              target_team: 2,
              target_type: 1,
              flags: 0,
              damage: 2,
              immunity: 4,
              dispellable: 0,
              max_level: 4,
              cast_ranges: [600, 600, 600, 600],
              cast_points: [
                0.4000000059604645, 0.4000000059604645, 0.4000000059604645,
                0.4000000059604645,
              ],
              channel_times: [0, 0, 0, 0],
              cooldowns: [20, 15, 10, 5],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [70, 80, 90, 100],
              gold_costs: [],
              special_values: [
                {
                  name: "float_multiplier",
                  values_float: [
                    2.299999952316284, 3.200000047683716, 4.099999904632568, 5,
                  ],
                  is_percentage: false,
                  heading_loc: "MANA ĐỐT MỖI TRÍ TUỆ:",
                  bonuses: [
                    {
                      name: "special_bonus_unique_nyx_5",
                      value: 0.5,
                      operation: 0,
                    },
                  ],
                },
                {
                  name: "aoe",
                  values_float: [0],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [
                    {
                      name: "special_bonus_unique_nyx",
                      value: 300,
                      operation: 0,
                    },
                  ],
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
                  values_float: [0.4000000059604645],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityManaCost",
                  values_float: [70, 80, 90, 100],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [20, 15, 10, 5],
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
              id: 5464,
              name: "nyx_assassin_spiked_carapace",
              name_loc: "Spiked Carapace",
              desc_loc:
                "Khi được dùng ở trên mặt đất, Spiked Carapace bỏ qua và phản lại sát thương Nyx Assassin phải nhận lên nguồn gây sát thương đó, đồng thời làm choáng chúng (tối đa một lần từ mỗi nguồn). Sử dụng Spiked Carapace sẽ không làm mất tàng hình từ Vendetta.\n\nKhi đang ở dưới lòng đất do Burrow, Spiked Carapace có thêm hiệu ứng làm choáng lập tức mọi kẻ địch ở xung quanh khi được kích hoạt.",
              lore_loc:
                "Mai của chúng tuy khá mỏng, nhưng lại được bảo vệ bởi những chiếc gai nhọn sẵn sàng bật ra khi gặp nguy hiểm.",
              notes_loc: [
                "Sát thương phản lại được tính sau khi áp dụng mọi loại giảm sát thương.",
                "Spiked Carapace sẽ chỉ phản lại sát thương từ các đơn vị được điều khiển bởi người chơi khác.",
                "Sát thương phản lại sẽ có cùng loại với sát thương được gây lên Nyx Assassin.",
              ],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "2052",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 0,
              immunity: 4,
              dispellable: 3,
              max_level: 4,
              cast_ranges: [0],
              cast_points: [0, 0, 0, 0],
              channel_times: [0, 0, 0, 0],
              cooldowns: [25, 20, 15, 10],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [40, 40, 40, 40],
              gold_costs: [],
              special_values: [
                {
                  name: "reflect_duration",
                  values_float: [2],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN PHẢN LẠI:",
                  bonuses: [],
                },
                {
                  name: "stun_duration",
                  values_float: [
                    0.6000000238418579, 1.2000000476837158, 1.7999999523162842,
                    2.4000000953674316,
                  ],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN CHOÁNG:",
                  bonuses: [],
                },
                {
                  name: "bonus_damage",
                  values_float: [0],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "bonus_armor",
                  values_float: [0],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "bonus_intellect",
                  values_float: [0],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "burrow_aoe",
                  values_float: [300],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "damage_reflect_pct",
                  values_float: [100],
                  is_percentage: true,
                  heading_loc: "SÁT THƯƠNG PHẢN LẠI:",
                  bonuses: [],
                },
                {
                  name: "AbilityManaCost",
                  values_float: [40],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [25, 20, 15, 10],
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
              id: 5666,
              name: "nyx_assassin_burrow",
              name_loc: "Burrow",
              desc_loc:
                "Nyx Assassin chôn mình dưới chiến trường sau một khoảng thời gian ngắn. Một khi đã ở dưới đất, Spiked Carapace sẽ lập tức làm choáng kẻ địch xung quanh khi kích hoạt, tăng tầm thi triển của Mana Burn và Impale, và giảm thời gian hồi của Impale. Ngoài ra, Nyx Assassin trở nên bất động, tàng hình và không thể tấn công, đồng thời nhận ít sát thương hơn từ mọi nguồn.",
              lore_loc:
                "Một số giai cấp Zealot Scarab thích tạo một hang nhỏ để rình rập, sẵn sàng mai phục con mồi của chúng.",
              notes_loc: [
                "Thi triển Vendetta sẽ hủy trạng thái và hiệu ứng của Burrow.",
              ],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "8589934597",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 0,
              immunity: 0,
              dispellable: 3,
              max_level: 1,
              cast_ranges: [0],
              cast_points: [1.5],
              channel_times: [0, 0, 0, 0],
              cooldowns: [0, 0, 0, 0],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [0, 0, 0, 0],
              gold_costs: [],
              special_values: [
                {
                  name: "health_regen_rate",
                  values_float: [1],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "mana_regen_rate",
                  values_float: [1],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "damage_reduction",
                  values_float: [40],
                  is_percentage: true,
                  heading_loc: "SÁT THƯƠNG NHẬN GIẢM (BURROW):",
                  bonuses: [],
                },
                {
                  name: "impale_burn_range_increase_pct_tooltip",
                  values_float: [75],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "mana_burn_burrow_range_tooltip",
                  values_float: [1050],
                  is_percentage: false,
                  heading_loc: "TẦM THI TRIỂN MANA BURN (BURROW):",
                  bonuses: [],
                },
                {
                  name: "impale_burrow_range_tooltip",
                  values_float: [1225],
                  is_percentage: false,
                  heading_loc: "TẦM THI TRIỂN IMPALE (BURROW):",
                  bonuses: [],
                },
                {
                  name: "impale_burrow_cooldown_tooltip",
                  values_float: [7],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN HỒI IMPALE (BURROW):",
                  bonuses: [],
                },
                {
                  name: "carapace_burrow_range_tooltip",
                  values_float: [300],
                  is_percentage: false,
                  heading_loc: "PHẠM VI SPIKED CARAPACE (BURROW):",
                  bonuses: [],
                },
                {
                  name: "AbilityCastPoint",
                  values_float: [1.5],
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
              id: 5465,
              name: "nyx_assassin_vendetta",
              name_loc: "Vendetta",
              desc_loc:
                "Khiến Nyx Assassin trở nên tàng hình và dược tăng tốc độ chạy. Nếu hắn đánh thường để phá hiệu ứng tàng hình, một lượng lớn sát thương sẽ được gây ra kèm theo đòn đánh đó.",
              lore_loc:
                "Mọi nạn nhân của Nyx Assassin đều bị hạ sát vì vinh quang của Nữ hoàng.",
              notes_loc: [
                "Thời gian ẩn thân là %fade_time% giây.",
                "Nếu hiệu ứng tàng hình bị mất do dùng phép hoặc hết thời gian hiệu lực, sát thương gây thêm sẽ không còn.",
              ],
              shard_loc:
                "Causes Nyx's Vendetta attack to amplify spell damage received by 17%% for 4 seconds. Also increases Vendetta movement speed by 25%.",
              scepter_loc: "",
              type: 1,
              behavior: "4196356",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 4,
              immunity: 3,
              dispellable: 3,
              max_level: 3,
              cast_ranges: [0],
              cast_points: [0, 0, 0, 0],
              channel_times: [0, 0, 0, 0],
              cooldowns: [90, 75, 60],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [180, 240, 300],
              gold_costs: [],
              special_values: [
                {
                  name: "duration",
                  values_float: [40, 50, 60],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN:",
                  bonuses: [],
                },
                {
                  name: "fade_time",
                  values_float: [0],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "movement_speed",
                  values_float: [16, 18, 20],
                  is_percentage: true,
                  heading_loc: "TỐC ĐỘ CHẠY:",
                  bonuses: [],
                },
                {
                  name: "bonus_damage",
                  values_float: [300, 450, 600],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG GÂY THÊM:",
                  bonuses: [],
                },
                {
                  name: "health_regen_rate_scepter",
                  values_float: [3],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "mana_regen_rate_scepter",
                  values_float: [3],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "break_duration",
                  values_float: [4],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "shard_magic_resist_reduction",
                  values_float: [17],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityManaCost",
                  values_float: [180, 240, 300],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [90, 75, 60],
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
              id: 5949,
              name: "special_bonus_spell_amplify_8",
              name_loc: "Cường hóa phép +{s:value}%",
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
              id: 402,
              name: "special_bonus_unique_nyx_4",
              name_loc: "+{s:value} giây choáng Impale",
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
                  values_float: [0.25],
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
              id: 5903,
              name: "special_bonus_hp_250",
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
              id: 778,
              name: "special_bonus_unique_nyx_5",
              name_loc:
                "+{s:bonus_float_multiplier}x Mana Burn Intelligence Multiplier",
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
            {
              id: 891,
              name: "special_bonus_unique_nyx_6",
              name_loc: "+{s:value} giây choáng Spiked Carapace",
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
              id: 6399,
              name: "special_bonus_unique_nyx_2",
              name_loc: "+{s:value} sát thương cho Impale",
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
                  values_float: [130],
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
              id: 6130,
              name: "special_bonus_unique_nyx",
              name_loc: "{s:bonus_aoe} Mana Burn Radius",
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
              id: 6814,
              name: "special_bonus_unique_nyx_3",
              name_loc: "Vendetta đi xuyên địa hình",
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
          ],
        },
      ],
    },
    status: 1,
  },
};
