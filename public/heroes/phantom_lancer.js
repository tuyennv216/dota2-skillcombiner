if (detail === undefined) var detail = {};
detail.phantom_lancer = {
  result: {
    data: {
      heroes: [
        {
          id: 12,
          name: "npc_dota_hero_phantom_lancer",
          order_id: 75,
          name_loc: "Phantom Lancer",
          bio_loc:
            "Xa xa, ở ngôi làng Pole hẻo lánh, người dân hoàn toàn chẳng hay biết gì về ngọn lửa chiến tranh đang rực lên trên toàn vương quốc. Đối với họ, có thể bình yên lấy lao đánh cá, một bữa ăn gia đình đã là đủ cho một cuộc sống hạnh phúc rồi. Thế nhưng, chiến tranh cuối cùng cũng đã lan đến tận thôn làng của họ. Dù là trai gái hay già trẻ, ai có sức thì phải tòng quân, trong đám lính mới nhập ngũ đó có Azwraith - một thương thủ khiêm nhường với lời thề sẽ mang về hòa bình cho vương quốc, và bằng cách đấy, an bình cho đồng bào mình. Cùng với đồng tộc ở vị trí tiên phong trong cuộc tiến công cuối cùng để tiêu diệt Đại tà sư Vorn (Dread Magus Vorn), cái giá mà chiến hữu của anh phải trả là quá đắt. Khi binh đoàn công kích tới pháo đài, Azwraith nhận ra mình, chỉ một mình mình trong chủng tộc của anh là còn sống và cũng là kẻ duy nhất xâm nhập vào bên trong thành công.\r\n<br><br>Toàn lực và nộ khí vì cái chết của đồng đội, Azwraith lần lượt đánh bại từ cạm bẫy cho đến đám hộ binh do gã tà sư triệu hồi ra. Không lâu sau đó, chàng ngư dân kia đã xâm nhập được vào mật thất của Vorn sâu bên trong tòa tháp. Một đêm dài tả xung hữu đột, lưỡi giáo chống lại quyền trượng, tựa như chiến trường hỗn loạn bên dưới. Cuối cùng, với một tiếng thét chói tai, Azwraith đâm mũi giáo mình xuyên qua kẻ thù. Thế nhưng, gã pháp sư không hề biến mất đơn giản như thế, hắn rạn nứt thành vô số mảnh vỡ chói sáng và mang theo sức mạnh của mình xuyên thẳng vào kẻ đã giết gã. Khi bụi đã và làn khói lửa chiến trận dần tan, Azwraith tỉnh dậy trong vòng tay của những người đồng tộ. Họ mặc trang phục như anh đang mặc, cầm loại vũ khí mà anh đang cầm, cảm nhận được tư tưởng của mỗi người như thể ta là họ mà họ là ta. Khi nhận ra đồng đội khác đang chạy đến, Azwraith dùng ý chí để khiến những ảo ảnh này ẩn nấp đi, và lần lượt từng người một tan biến vào hư không. Khi lính tráng tiến vào mật thất, bọn họ phát hiện ra người chiến binh đã đánh bại tên ma thuật sư. Thế nhưng, chưa kịp lao đến để tôn vinh người anh hùng, chàng thương thủ biến mất. Người vừa đứng trước họ, cũng không gì hơn, ngoài một ảo ảnh.",
          hype_loc:
            "Phantom Lancer hội đồng kẻ địch với chuỗi <b>phân thân vô tận</b>. Dẫn đầu đoàn quân phân thân, anh có thể cắt nhỏ kẻ thù với những <b>đòn tấn công nín thở</b>, ném các phân thân vào lãnh địa kẻ thù hay dùng kỹ năng Doppelganger để <b>đánh lừa và trốn thoát</b> khỏi chúng.",
          npe_desc_loc: "Tạo phân thân để đánh lừa hoặc công kích quân thù",
          str_base: 19,
          str_gain: 2.200000047683716,
          agi_base: 26,
          agi_gain: 3.200000047683716,
          int_base: 21,
          int_gain: 2,
          primary_attr: 1,
          complexity: 2,
          attack_capability: 1,
          role_levels: [2, 0, 1, 0, 0, 0, 2, 1, 0],
          damage_min: 52,
          damage_max: 62,
          attack_rate: 1.7000000476837158,
          attack_range: 150,
          projectile_speed: 900,
          armor: 3.3333334922790527,
          magic_resistance: 25,
          movement_speed: 290,
          turn_rate: 0.6000000238418579,
          sight_range_day: 1800,
          sight_range_night: 800,
          max_health: 580,
          health_regen: 3.4000000953674316,
          max_mana: 327,
          mana_regen: 1.0500000715255737,
          abilities: [
            {
              id: 5065,
              name: "phantom_lancer_spirit_lance",
              name_loc: "Spirit Lance",
              desc_loc:
                "Phóng một cây lao ma thuật vào kẻ địch, gây sát thương và làm chậm, đồng thời tạo ra một phân thân tấn công chúng.",
              lore_loc:
                "Kỹ năng đánh cá bằng lao, kiếm ăn cho cả nhà của Azwraith tỏ ra khá hữu dụng trên chiến trường.",
              notes_loc: [
                "Các phân thân ở gần cũng sẽ có cử động dùng phép của tướng để đánh lạc hướng.",
              ],
              shard_loc:
                "Spirit Lance nảy một lần sang một kẻ địch trong bán kính 750 đơn vị, ưu tiên tướng. Tăng 40%% sát thương của phân thân từ Spirit Lance.",
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
              cast_ranges: [525, 600, 675, 750],
              cast_points: [
                0.30000001192092896, 0.30000001192092896, 0.30000001192092896,
                0.30000001192092896,
              ],
              channel_times: [0, 0, 0, 0],
              cooldowns: [7],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [120],
              gold_costs: [],
              special_values: [
                {
                  name: "lance_damage",
                  values_float: [100, 160, 220, 280],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG LANCE:",
                  bonuses: [],
                },
                {
                  name: "lance_speed",
                  values_float: [1000],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "duration",
                  values_float: [3.25],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN LÀM CHẬM:",
                  bonuses: [],
                },
                {
                  name: "movement_speed_pct",
                  values_float: [-10, -18, -26, -34],
                  is_percentage: true,
                  heading_loc: "TỐC ĐỘ CHẠY GIẢM:",
                  bonuses: [],
                },
                {
                  name: "illusion_duration",
                  values_float: [2, 4, 6, 8],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN PHÂN THÂN:",
                  bonuses: [],
                },
                {
                  name: "illusion_damage_out_pct",
                  values_float: [-80],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "tooltip_illusion_damage",
                  values_float: [20],
                  is_percentage: true,
                  heading_loc: "SÁT THƯƠNG PHÂN THÂN:",
                  bonuses: [],
                },
                {
                  name: "illusion_damage_in_pct",
                  values_float: [300],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "tooltip_illusion_total_damage_in_pct",
                  values_float: [400],
                  is_percentage: true,
                  heading_loc: "SÁT THƯƠNG PHÂN THÂN NHẬN:",
                  bonuses: [],
                },
                {
                  name: "fake_lance_distance",
                  values_float: [675],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCastRange",
                  values_float: [525, 600, 675, 750],
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
                  values_float: [120],
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
              id: 5066,
              name: "phantom_lancer_doppelwalk",
              name_loc: "Doppelganger",
              desc_loc:
                "Phantom Lancer tạm biến mất khỏi chiến trường. Sau %delay% giây, Phantom Lancer và mọi phân thân gần đó sẽ tái xuất hiện tại một vị trí ngẫu nhiên trong phạm vi đã chỉ định, cộng thêm 2 phân thân khác. Tăng thời gian tồn tại của mọi phân thân khác. Hai phân thân này có tính chất khác nhau: một nhận sát thương bình thường nhưng không gây sát thương, một nhận %illusion_2_damage_in_pct%%% và bị giảm %illusion_2_damage_out_pct%%% sát thương gây ra.\n\nLOẠI HÓA GIẢI: cơ bản",
              lore_loc:
                "Tiêu diệt Dread Magus Vorn, Phantom Lancer có được khả năng bẻ cong và chia tách mọi quang phổ ánh sáng.",
              notes_loc: [
                "This ability can be used to dodge projectiles, and dispel debuffs.",
                "Khi tái xuất hiện sẽ phá các cây ở gần.",
                "Phantom Lancer và đồng minh có thể biết được đâu là phân thân nhận 100% sát thương.",
              ],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "524336",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 0,
              immunity: 0,
              dispellable: 0,
              max_level: 4,
              cast_ranges: [575],
              cast_points: [0.10000000149011612],
              channel_times: [0, 0, 0, 0],
              cooldowns: [25, 20, 15, 10],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [50],
              gold_costs: [],
              special_values: [
                {
                  name: "illusion_1_damage_out_pct",
                  values_float: [-100],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "illusion_1_damage_in_pct",
                  values_float: [0],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "illusion_2_damage_out_pct",
                  values_float: [-80],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "illusion_2_damage_in_pct",
                  values_float: [500],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "target_aoe",
                  values_float: [325],
                  is_percentage: false,
                  heading_loc: "BÁN KÍNH TÁI XUẤT HIỆN:",
                  bonuses: [],
                },
                {
                  name: "search_radius",
                  values_float: [900],
                  is_percentage: false,
                  heading_loc: "PHẠM VI THU PHÂN THÂN:",
                  bonuses: [],
                },
                {
                  name: "delay",
                  values_float: [1],
                  is_percentage: false,
                  heading_loc: "ĐỘ TRỄ TÁI XUẤT HIỆN:",
                  bonuses: [],
                },
                {
                  name: "illusion_duration",
                  values_float: [8],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN PHÂN THÂN:",
                  bonuses: [],
                },
                {
                  name: "illusion_extended_duration",
                  values_float: [2],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN PHÂN THÂN TĂNG:",
                  bonuses: [],
                },
                {
                  name: "AbilityCastRange",
                  values_float: [575],
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
              id: 5068,
              name: "phantom_lancer_phantom_edge",
              name_loc: "Phantom Rush",
              desc_loc:
                "Khi chọn tấn công mục tiêu ở ngoài tầm đánh, Phantom Lancer nhanh chóng lao tới nó, đồng thời được tăng nhanh nhẹn. Phân thân của Phantom Lancer cũng có kỹ năng này.",
              lore_loc:
                "Azwraith biết rằng trên chiến trường, tốc độ có thể quyết định tất cả.",
              notes_loc: [
                "Nếu hủy lệnh tấn công, tốc độ chạy được tăng sẽ lập tức mất.",
                "Tốc độ chạy khi đang lao là %bonus_speed%.",
              ],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "2564",
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
              cooldowns: [13, 10, 7, 4],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [0, 0, 0, 0],
              gold_costs: [],
              special_values: [
                {
                  name: "min_distance",
                  values_float: [200],
                  is_percentage: false,
                  heading_loc: "KHOẢNG CÁCH LAO TỐI THIỂU:",
                  bonuses: [],
                },
                {
                  name: "max_distance",
                  values_float: [600, 675, 750, 825],
                  is_percentage: false,
                  heading_loc: "KHOẢNG CÁCH LAO TỐI ĐA:",
                  bonuses: [],
                },
                {
                  name: "bonus_speed",
                  values_float: [800],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "bonus_agility",
                  values_float: [10, 20, 30, 40],
                  is_percentage: false,
                  heading_loc: "NHANH NHẸN TĂNG:",
                  bonuses: [],
                },
                {
                  name: "agility_duration",
                  values_float: [1.5],
                  is_percentage: false,
                  heading_loc: "BONUS AGILITY DURATION:",
                  bonuses: [
                    {
                      name: "special_bonus_unique_phantom_lancer_2",
                      value: 2.5,
                      operation: 0,
                    },
                  ],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [13, 10, 7, 4],
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
              id: 5067,
              name: "phantom_lancer_juxtapose",
              name_loc: "Juxtapose",
              desc_loc:
                "Phantom Lancer has a chance to fracture his presence on an attack, creating an illusion of himself. Illusions also have a chance to fracture further. Illusions created from Phantom Lancer last for %illusion_duration% seconds, while illusions created from other illusions last %illusion_from_illusion_duration% seconds.",
              lore_loc:
                "Mỗi mũi thương của Azwraith khiến nạn nhân thấy như thể bị tấn công bởi hai chiến binh; hay là ba, bốn... nhỉ?",
              notes_loc: [
                "Phân thân được tạo bởi Juxtapose sẽ tự động tấn công mục tiêu được chỉ định để kích hoạt kỹ năng này.",
              ],
              shard_loc: "",
              scepter_loc:
                "Cho phép kích hoạt Juxtapose, phá hủy các phân thân Juxtapose khác của Phantom Lancer và nhanh chóng tạo ra số phân thân tối đa cho phép. Các phân thân này được tăng 10 giây thời gian tồn tại. Tăng 2 phân thân Juxtapose tối đa.",
              type: 1,
              behavior: "2",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 0,
              immunity: 0,
              dispellable: 0,
              max_level: 3,
              cast_ranges: [0],
              cast_points: [0, 0, 0, 0],
              channel_times: [0, 0, 0, 0],
              cooldowns: [40],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [75],
              gold_costs: [],
              special_values: [
                {
                  name: "max_illusions",
                  values_float: [6, 8, 10],
                  is_percentage: false,
                  heading_loc: "SỐ PHÂN THÂN TỐI ĐA:",
                  bonuses: [],
                },
                {
                  name: "proc_chance_pct",
                  values_float: [40, 45, 50],
                  is_percentage: true,
                  heading_loc: "TỶ LỆ TẠO (TƯỚNG):",
                  bonuses: [],
                },
                {
                  name: "illusion_proc_chance_pct",
                  values_float: [8],
                  is_percentage: true,
                  heading_loc: "TỶ LỆ TẠO (PHÂN THÂN):",
                  bonuses: [],
                },
                {
                  name: "illusion_duration",
                  values_float: [8],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "illusion_damage_out_pct",
                  values_float: [-78],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "tooltip_illusion_damage",
                  values_float: [22],
                  is_percentage: true,
                  heading_loc: "SÁT THƯƠNG PHÂN THÂN:",
                  bonuses: [],
                },
                {
                  name: "illusion_damage_in_pct",
                  values_float: [550],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "tooltip_total_illusion_damage_in_pct",
                  values_float: [650],
                  is_percentage: true,
                  heading_loc: "SÁT THƯƠNG PHÂN THÂN NHẬN:",
                  bonuses: [],
                },
                {
                  name: "illusion_from_illusion_duration",
                  values_float: [4],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "scepter_bonus_duration",
                  values_float: [10],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "scepter_bonus_illusions",
                  values_float: [2],
                  is_percentage: false,
                  heading_loc: "SCEPTER BONUS ILLUSIONS:",
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
                  values_float: [40],
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
              id: 5902,
              name: "special_bonus_hp_150",
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
                  values_float: [150],
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
              id: 6400,
              name: "special_bonus_unique_phantom_lancer_2",
              name_loc:
                "+{s:bonus_agility_duration}s Phantom Rush Bonus Agi Duration",
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
              id: 6145,
              name: "special_bonus_strength_15",
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
              id: 563,
              name: "special_bonus_unique_phantom_lancer_5",
              name_loc: "-{s:value} giây hồi Spirit Lance",
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
              id: 6146,
              name: "special_bonus_unique_phantom_lancer",
              name_loc: "+{s:value} khoảng cách lao tối đa cho Phantom Rush",
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
                  values_float: [300],
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
              id: 564,
              name: "special_bonus_unique_phantom_lancer_6",
              name_loc: "+{s:value}% sát thương Juxtapose",
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
              id: 6850,
              name: "special_bonus_unique_phantom_lancer_4",
              name_loc: "-{s:value} giây hồi Doppelganger",
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
              id: 6851,
              name: "special_bonus_24_crit_2",
              name_loc:
                "+{s:crit_chance}% cơ hội chí mạng ({s:crit_multiplier}%)",
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
                  name: "crit_chance",
                  values_float: [24],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "crit_multiplier",
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
          ],
        },
      ],
    },
    status: 1,
  },
};
