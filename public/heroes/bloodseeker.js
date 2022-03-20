if (detail === undefined) var detail = {};
detail.bloodseeker = {
  result: {
    data: {
      heroes: [
        {
          id: 4,
          name: "npc_dota_hero_bloodseeker",
          order_id: 47,
          name_loc: "Bloodseeker",
          bio_loc:
            "Strygwyr, hay Bloodseeker, là thợ săn của một nghi thức cổ. Với danh nghĩa là chó săn của Flayed Twins, hắn rời khỏi vùng núi Xhacatocatl sương mù bao phủ để tìm máu. Mỗi Flayed One cần cả một bể máu để thỏa mãn cơn khát của mình và chúng sẽ không ngần ngại tàn sát toàn bộ người dân trên những vùng núi nếu các thầy tu ở đây không thể thoả mãn chúng. Vì vậy, Strygwyr buộc phải thực hiện những vụ tàn sát. Năng lượng sống trong từng giọt máu hắn kiếm được chảy thẳng đến Flayed Twins nhờ vào những hình vẽ đáng sợ trên vũ khí và áo giáp của hắn. Năm này qua năm khác, hắn được biết đến như hiện thân của một con chó săn điên cuồng, hoang dại trong các trận chiến. Người ta đồn đại rằng, sau lớp mặt nạ của Bloodseeker, trong cơn khát máu của hắn, là dấu ấn thể hiện sự kiểm soát của Flayed Twins với con chó săn của chúng.",
          hype_loc:
            "Bloodseeker forces difficult decisions on his enemies. Able to drive his foes to a retreat by bathing a large area with a <b>damaging ritual</b>, his gruesome ultimate asks his opponents to <b>hold still, or die.</b>",
          npe_desc_loc:
            "Truy sát kẻ địch còn ít máu với tốc độ tấn công tăng cao",
          str_base: 24,
          str_gain: 2.700000047683716,
          agi_base: 22,
          agi_gain: 3.0999999046325684,
          int_base: 17,
          int_gain: 2,
          primary_attr: 1,
          complexity: 1,
          attack_capability: 1,
          role_levels: [1, 0, 1, 1, 1, 0, 0, 0, 1],
          damage_min: 57,
          damage_max: 63,
          attack_rate: 1.7000000476837158,
          attack_range: 150,
          projectile_speed: 900,
          armor: 5.6666669845581055,
          magic_resistance: 25,
          movement_speed: 300,
          turn_rate: 0.6000000238418579,
          sight_range_day: 1800,
          sight_range_night: 800,
          max_health: 680,
          health_regen: 2.6500000953674316,
          max_mana: 279,
          mana_regen: 0.8500000238418579,
          abilities: [
            {
              id: 5015,
              name: "bloodseeker_bloodrage",
              name_loc: "Bloodrage",
              desc_loc:
                "Khiến Bloodseeker trở nên khát máu, tăng tốc độ đánh và sát thương kỹ năng, đổi lại phải nhận sát thương dựa trên lượng máu tối đa theo thời gian. Hiệu quả tăng tốc độ đánh còn một nửa khi dùng lên tướng đồng minh.",
              lore_loc:
                "Strygwyr và phần thú trong người hắn cùng khát cháy thú vui chém giết.",
              notes_loc: [],
              shard_loc:
                "Bloodrage giờ khiến đòn đánh thường gây sát thương thuần bằng 2% máu tối đa của mục tiêu, và hồi lượng máu tương đương cho Bloodseeker. Chỉ có tác dụng cho Bloodseeker.",
              scepter_loc: "",
              type: 0,
              behavior: "2056",
              target_team: 1,
              target_type: 1,
              flags: 0,
              damage: 0,
              immunity: 4,
              dispellable: 2,
              max_level: 4,
              cast_ranges: [800],
              cast_points: [0.20000000298023224],
              channel_times: [0, 0, 0, 0],
              cooldowns: [14, 12, 10, 8],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [25],
              gold_costs: [],
              special_values: [
                {
                  name: "duration",
                  values_float: [8],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN:",
                  bonuses: [],
                },
                {
                  name: "attack_speed",
                  values_float: [60, 90, 120, 150],
                  is_percentage: false,
                  heading_loc: "TỐC ĐỘ ĐÁNH:",
                  bonuses: [],
                },
                {
                  name: "spell_amp",
                  values_float: [15, 20, 25, 30],
                  is_percentage: true,
                  heading_loc: "SPELL AMPLIFICATION:",
                  bonuses: [],
                },
                {
                  name: "damage_pct",
                  values_float: [2],
                  is_percentage: true,
                  heading_loc: "SÁT THƯƠNG MÁU TỐI ĐA MỖI GIÂY:",
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
                  values_float: [25],
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
              id: 5016,
              name: "bloodseeker_blood_bath",
              name_loc: "Blood Rite",
              desc_loc:
                "Bloodseeker rửa tội trong một khu vực bằng dòng máu thiêng. Sau %delay_plus_castpoint_tooltip% giây nghi lễ kết thúc, khiến tất cả kẻ thù trong khu vực đó nhận sát thương và bị khóa phép.",
              lore_loc:
                "Các Flayed Twin luôn sẵn sàng hỗ trợ cho những kẻ đổ máu trên chiến trường .",
              notes_loc: [
                "Tổng thời gian là %delay% giây thực hiện nghi lễ cộng thêm %abilitycastpoint% giây thi triển.",
              ],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "48",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 4,
              immunity: 4,
              dispellable: 2,
              max_level: 4,
              cast_ranges: [1500],
              cast_points: [0.30000001192092896],
              channel_times: [0, 0, 0, 0],
              cooldowns: [15, 14, 13, 12],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [90, 100, 110, 120],
              gold_costs: [],
              special_values: [
                {
                  name: "radius",
                  values_float: [600],
                  is_percentage: false,
                  heading_loc: "PHẠM VI NGHI LỄ:",
                  bonuses: [],
                },
                {
                  name: "silence_duration",
                  values_float: [3, 4, 5, 6],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN KHÓA PHÉP:",
                  bonuses: [],
                },
                {
                  name: "damage",
                  values_float: [120, 160, 200, 240],
                  is_percentage: false,
                  heading_loc: "SÁT THƯƠNG:",
                  bonuses: [],
                },
                {
                  name: "delay",
                  values_float: [2.5999999046325684],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "delay_plus_castpoint_tooltip",
                  values_float: [2.9000000953674316],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCastRange",
                  values_float: [1500],
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
                  values_float: [90, 100, 110, 120],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "AbilityCooldown",
                  values_float: [15, 14, 13, 12],
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
              id: 5017,
              name: "bloodseeker_thirst",
              name_loc: "Thirst",
              desc_loc:
                "Bloodseeker trở nên hưng phấn từ những vết thương của kẻ thù, khiến hắn hồi máu mỗi khi giết một kẻ địch. Được nhận một nửa lượng hồi máu khi chối bỏ, hoặc khi ở gần tướng địch bị giết bởi đồng minh. Mỗi khi có tướng địch với lượng máu dưới %min_bonus_pct%%% hắn sẽ được tăng thêm tốc độ chạy dựa vào lượng máu chúng mất. Nếu một tướng địch có ít hơn %invis_threshold_pct%%% lượng máu tối đa của mình, Bloodseeker sẽ có tầm nhìn và thấy xuyên tàng hình của tướng đó. Tốc độ chạy tăng cộng dồn với mỗi tướng địch. Mở khóa tốc độ chạy tối đa cho Bloodseeker.",
              lore_loc: "Strygwyr trở nên điên cuồng khi có máu chảy.",
              notes_loc: [
                "Không thể kích hoạt bởi các phân thân.",
                "Tốc độ chạy và tốc độ đánh được tăng thêm sẽ đạt tối đa khi một kẻ địch có lượng máu dưới hoặc bằng %max_bonus_pct%%%.",
                "Vẫn tác dụng thêm %linger_duration% giây sau khi một mục tiêu chết.",
              ],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "2",
              target_team: 0,
              target_type: 0,
              flags: 0,
              damage: 0,
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
                  name: "min_bonus_pct",
                  values_float: [80],
                  is_percentage: true,
                  heading_loc: "THIRST HEALTH THRESHOLD:",
                  bonuses: [],
                },
                {
                  name: "bonus_movement_speed",
                  values_float: [14, 24, 34, 44],
                  is_percentage: true,
                  heading_loc: "TỐC ĐỘ CHẠY TĂNG TỐI ĐA:",
                  bonuses: [],
                },
                {
                  name: "hero_kill_heal",
                  values_float: [10, 15, 20, 25],
                  is_percentage: true,
                  heading_loc: "MÁU TƯỚNG TỐI ĐA THÀNH MÁU:",
                  bonuses: [],
                },
                {
                  name: "creep_kill_heal",
                  values_float: [11, 14, 17, 20],
                  is_percentage: true,
                  heading_loc: "MÁU QUÁI TỐI ĐA THÀNH MÁU:",
                  bonuses: [],
                },
                {
                  name: "half_bonus_aoe",
                  values_float: [300],
                  is_percentage: false,
                  heading_loc: "BÁN KÍNH HỒI MỘT NỬA MÁU:",
                  bonuses: [],
                },
                {
                  name: "max_bonus_pct",
                  values_float: [25],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "visibility_threshold_pct",
                  values_float: [25],
                  is_percentage: true,
                  heading_loc: "VISIBILITY HEALTH THRESHOLD:",
                  bonuses: [],
                },
                {
                  name: "invis_threshold_pct",
                  values_float: [25],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "linger_duration",
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
              id: 902,
              name: "bloodseeker_blood_mist",
              name_loc: "Blood Mist",
              desc_loc:
                "Bloodseeker sprays his blood in an area paying with his blood to damage and slow his enemies. While active, Thirst's healing is increased by 50%. Cannot be turned off while on Cooldown.",
              lore_loc: "",
              notes_loc: [],
              shard_loc: "",
              scepter_loc: "",
              type: 0,
              behavior: "8594129413",
              target_team: 2,
              target_type: 19,
              flags: 0,
              damage: 2,
              immunity: 4,
              dispellable: 3,
              max_level: 1,
              cast_ranges: [0],
              cast_points: [0.5],
              channel_times: [0, 0, 0, 0],
              cooldowns: [4],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [0],
              gold_costs: [],
              special_values: [
                {
                  name: "hp_cost_per_second",
                  values_float: [5],
                  is_percentage: true,
                  heading_loc: "HP PER SECOND COST/DAMAGE:",
                  bonuses: [],
                },
                {
                  name: "radius",
                  values_float: [450],
                  is_percentage: false,
                  heading_loc: "RADIUS:",
                  bonuses: [],
                },
                {
                  name: "movement_slow",
                  values_float: [25],
                  is_percentage: true,
                  heading_loc: "MOVE SPEED SLOW:",
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
                  name: "AbilityCooldown",
                  values_float: [4],
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
              id: 5018,
              name: "bloodseeker_rupture",
              name_loc: "Rupture",
              desc_loc:
                "Làm rách da một đơn vị địch, gây sát thương ban đầu dựa theo phần trăm máu hiện tại của nó. Mỗi khi kẻ đó di chuyển, hắn sẽ nhận sát thương dựa theo quãng đường di chuyển. Sát thương xuyên trạng thái miễn nhiễm phép.",
              lore_loc:
                "Khi Bloodseeker săn ngươi, vết thương chính là tử thương.",
              notes_loc: [],
              shard_loc: "",
              scepter_loc: "",
              type: 1,
              behavior: "8",
              target_team: 2,
              target_type: 19,
              flags: 16,
              damage: 4,
              immunity: 3,
              dispellable: 3,
              max_level: 3,
              cast_ranges: [0],
              cast_points: [0.4000000059604645],
              channel_times: [0, 0, 0, 0],
              cooldowns: [70],
              durations: [0, 0, 0, 0],
              damages: [0, 0, 0, 0],
              mana_costs: [100, 150, 200],
              gold_costs: [],
              special_values: [
                {
                  name: "duration",
                  values_float: [10, 11, 12],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN:",
                  bonuses: [],
                },
                {
                  name: "movement_damage_pct",
                  values_float: [33, 44, 55],
                  is_percentage: true,
                  heading_loc: "SÁT THƯƠNG DI CHUYỂN:",
                  bonuses: [],
                },
                {
                  name: "hp_pct",
                  values_float: [10],
                  is_percentage: true,
                  heading_loc: "SÁT THƯƠNG MÁU:",
                  bonuses: [],
                },
                {
                  name: "damage_cap_amount",
                  values_float: [200],
                  is_percentage: false,
                  heading_loc: "",
                  bonuses: [],
                },
                {
                  name: "abilitycastrange",
                  values_float: [800],
                  is_percentage: false,
                  heading_loc: "TẦM THI TRIỂN:",
                  bonuses: [],
                },
                {
                  name: "max_charges_scepter",
                  values_float: [2],
                  is_percentage: false,
                  heading_loc: "SỐ LƯỢT DÙNG (SCEPTER):",
                  bonuses: [],
                },
                {
                  name: "charge_restore_time_scepter",
                  values_float: [40],
                  is_percentage: false,
                  heading_loc: "THỜI GIAN HỒI LƯỢT DÙNG (SCEPTER):",
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
                  values_float: [100, 150, 200],
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
              id: 482,
              name: "special_bonus_unique_bloodseeker_5",
              name_loc: "+{s:value} tốc độ đánh Bloodrage",
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
              id: 818,
              name: "special_bonus_unique_bloodseeker_6",
              name_loc: "+{s:value}% Bloodrage Spell Amplification",
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
              id: 819,
              name: "special_bonus_unique_bloodseeker_7",
              name_loc: "+{s:value}% Rupture Initial Damage",
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
              id: 6356,
              name: "special_bonus_unique_bloodseeker_2",
              name_loc: "+{s:value} sát thương Blood Rite",
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
                  values_float: [85],
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
              id: 6357,
              name: "special_bonus_unique_bloodseeker_3",
              name_loc: "+{s:value} tầm thi triển Rupture",
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
                  values_float: [475],
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
              id: 6550,
              name: "special_bonus_spell_lifesteal_15",
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
              id: 905,
              name: "special_bonus_unique_bloodseeker_rupture_charges",
              name_loc: "{s:value} Rupture Charges",
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
              id: 6809,
              name: "special_bonus_unique_bloodseeker_4",
              name_loc: "+{s:value}% tốc độ chạy Thirst tối đa",
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
                  values_float: [14],
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