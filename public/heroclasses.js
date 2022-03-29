var activeClassId = "attribute";
const classes = {
  "attribute": {
    "name": "Thuộc tính",
    "values": {
      "0": {
        "name": "Thông minh"
      },
      "1": {
        "name": "Nhanh nhẹn"
      },
      "2": {
        "name": "Sức mạnh"
      }
    }
  },
  "complexity": {
    "name": "Độ khó",
    "values": {
      "0": {
        "name": "Rất dễ"
      },
      "1": {
        "name": "Dễ"
      },
      "2": {
        "name": "Trung bình"
      },
      "3": {
        "name": "Trung bình khó"
      },
      "4": {
        "name": "Khó"
      },
      "5": {
        "name": "Rất khó"
      }
    }
  },
  "attach_range": {
    "name": "Tầm đánh",
    "values": {
      "0": {
        "name": "Cận chiến"
      },
      "1": {
        "name": "Xa trung bình"
      },
      "2": {
        "name": "Rất xa"
      }
    }
  },
  "attach_farm": {
    "name": "Farm lính",
    "values": {
      "0": {
        "name": "Rất chậm"
      },
      "1": {
        "name": "Chậm"
      },
      "2": {
        "name": "Trung bình"
      },
      "3": {
        "name": "Nhanh"
      },
      "4": {
        "name": "Rất nhanh"
      }
    }
  },
  "attach_hero": {
    "name": "Farm tướng",
    "values": {
      "0": {
        "name": "Rất ít"
      },
      "1": {
        "name": "Ít trung bình"
      },
      "2": {
        "name": "Trung bình"
      },
      "3": {
        "name": "Nhiều"
      },
      "4": {
        "name": "Rất nhiều"
      }
    }
  },
  "attach_tower": {
    "name": "Farm trụ",
    "values": {
      "0": {
        "name": "Rất chậm"
      },
      "1": {
        "name": "Chậm"
      },
      "2": {
        "name": "Trung bình"
      },
      "3": {
        "name": "Nhanh"
      },
      "4": {
        "name": "Rất nhanh"
      }
    }
  },
  "role_play": {
    "name": "Kiểu chơi",
    "values": {
      "0": {
        "name": "Hỗ trợ, hp/mp"
      },
      "1": {
        "name": "Damage chính"
      },
      "2": {
        "name": "Damage phụ"
      },
      "3": {
        "name": "Combat"
      },
      "4": {
        "name": "Tank"
      },
      "5": {
        "name": "Counter"
      },
      "6": {
        "name": "Đẩy nhà"
      },
      "7": {
        "name": "Backup"
      }
    }
  },
  "damage_type": {
    "name": "Loại sát thương",
    "values": {
      "0": {
        "name": "Vật lý"
      },
      "1": {
        "name": "Phép thuật"
      },
      "2": {
        "name": "Vật lý + phép thuật"
      }
    }
  },
  "active_area": {
    "name": "Vùng hoạt động",
    "values": {
      "0": {
        "name": "Cố định"
      },
      "1": {
        "name": "Nhỏ"
      },
      "2": {
        "name": "Trung bình"
      },
      "3": {
        "name": "Lớn"
      },
      "4": {
        "name": "Rất lớn"
      }
    }
  },
  "damage_physic": {
    "name": "Sát thương vật lý",
    "values": {
      "0": {
        "name": "Không có"
      },
      "1": {
        "name": "Rất nhỏ"
      },
      "2": {
        "name": "Nhỏ"
      },
      "3": {
        "name": "Trung bình"
      },
      "4": {
        "name": "Trung bình nhiều"
      },
      "5": {
        "name": "Nhiều"
      },
      "6": {
        "name": "Rất nhiều"
      }
    }
  },
  "damage_spell": {
    "name": "Sát thương phép",
    "values": {
      "0": {
        "name": "Không có"
      },
      "1": {
        "name": "Rất nhỏ"
      },
      "2": {
        "name": "Nhỏ"
      },
      "3": {
        "name": "Trung bình"
      },
      "4": {
        "name": "Trung bình nhiều"
      },
      "5": {
        "name": "Nhiều"
      },
      "6": {
        "name": "Rất nhiều"
      }
    }
  },
  "damage_aoe": {
    "name": "Sát thương diện rộng",
    "values": {
      "0": {
        "name": "Không có"
      },
      "1": {
        "name": "Rất nhỏ"
      },
      "2": {
        "name": "Nhỏ"
      },
      "3": {
        "name": "Trung bình"
      },
      "4": {
        "name": "Trung bình nhiều"
      },
      "5": {
        "name": "Nhiều"
      },
      "6": {
        "name": "Rất nhiều"
      }
    }
  },
  "increment_position": {
    "name": "Tăng kiểm soát vị trí",
    "values": {
      "0": {
        "name": "Không tăng"
      },
      "1": {
        "name": "Tăng nhỏ"
      },
      "2": {
        "name": "Tăng trung bình"
      },
      "3": {
        "name": "Tăng nhiều"
      },
      "4": {
        "name": "Tăng rất nhiều"
      }
    }
  },
  "increment_turn": {
    "name": "Tăng lượt giao tranh",
    "values": {
      "0": {
        "name": "Không tăng"
      },
      "1": {
        "name": "Tăng nhỏ"
      },
      "2": {
        "name": "Tăng trung bình"
      },
      "3": {
        "name": "Tăng nhiều"
      },
      "4": {
        "name": "Tăng rất nhiều"
      }
    }
  },
  "increment_combat": {
    "name": "Ưu thế giao tranh",
    "values": {
      "0": {
        "name": "Không tăng"
      },
      "1": {
        "name": "Tăng nhỏ"
      },
      "2": {
        "name": "Tăng trung bình"
      },
      "3": {
        "name": "Tăng nhiều"
      },
      "4": {
        "name": "Tăng rất nhiều"
      }
    }
  },
  "combat_turn": {
    "name": "Lượt giao tranh",
    "values": {
      "0": {
        "name": "Lượt 1"
      },
      "1": {
        "name": "Lượt 2"
      },
      "2": {
        "name": "Lượt 3"
      },
      "3": {
        "name": "Lượt 4"
      },
      "4": {
        "name": "Lượt 5"
      }
    }
  },
  "skill_time": {
    "name": "Thời gian giao tranh",
    "values": {
      "0": {
        "name": "Rất nhanh"
      },
      "1": {
        "name": "Nhanh trung bình"
      },
      "2": {
        "name": "Trung bình"
      },
      "3": {
        "name": "Lâu"
      },
      "4": {
        "name": "Rất lâu"
      }
    }
  },
  "hp": {
    "name": "Lượng máu",
    "values": {
      "0": {
        "name": "Rất thấp"
      },
      "1": {
        "name": "Thấp"
      },
      "2": {
        "name": "Trung bình"
      },
      "3": {
        "name": "Cao"
      },
      "4": {
        "name": "Rất cao"
      }
    }
  },
  "mp": {
    "name": "Lượng mana",
    "values": {
      "0": {
        "name": "Rất thấp"
      },
      "1": {
        "name": "Thấp"
      },
      "2": {
        "name": "Trung bình"
      },
      "3": {
        "name": "Cao"
      },
      "4": {
        "name": "Rất cao"
      }
    }
  },
  "counter_item": {
    "name": "Cần item để counter",
    "values": {
      "0": {
        "name": "Không cần"
      },
      "1": {
        "name": "Item nhỏ"
      },
      "2": {
        "name": "Item trung bình"
      },
      "3": {
        "name": "Item lớn"
      },
      "4": {
        "name": "Item rất lớn"
      }
    }
  },
  "money": {
    "name": "Số lượng tiền cần thiết",
    "values": {
      "0": {
        "name": "Rất ít"
      },
      "1": {
        "name": "Ít trung bình"
      },
      "2": {
        "name": "Trung bình"
      },
      "3": {
        "name": "Nhiều"
      },
      "4": {
        "name": "Rất nhiều"
      }
    }
  },
  "carry": {
    "name": "Có thể cân team",
    "values": {
      "0": {
        "name": "Không"
      },
      "1": {
        "name": "Cân 1"
      },
      "2": {
        "name": "Cân 2"
      },
      "3": {
        "name": "Cân 3"
      },
      "4": {
        "name": "Cân 4"
      },
      "5": {
        "name": "Cân 5"
      }
    }
  },
  "time": {
    "name": "Thời gian farm",
    "values": {
      "0": {
        "name": "Không"
      },
      "1": {
        "name": "Ít trung bình"
      },
      "2": {
        "name": "Trung bình"
      },
      "3": {
        "name": "Nhiều"
      },
      "4": {
        "name": "Rất nhiều"
      }
    }
  }
}
