var uivariables = {
  activeGroupIndex: -1,
  activeCombineIndex: -1,
  activeHeroName: "",
  combines: {},
};

// textbox new group
Object.defineProperty(uivariables, "newGroup", {
  get: function () {
    return document.getElementById("txtNewGroup").value;
  },
  set: function (value) {
    document.getElementById("txtNewGroup").value = value;
  },
});

Object.defineProperty(uivariables, "activeHeroName", {
  get: function () {
    return document.getElementById("txtHeroName").value;
  },
  set: function (value) {
    document.getElementById("txtHeroName").value = value;
  },
});
// end textbox new group

// textbox combine name and description
function resetCombinesVariables() {
  uivariables.combines = {};
}

function bindCombinesUI(combines) {
  combines.forEach((item) => {
    uivariables.combines[item.index] = {};
    Object.defineProperty(uivariables.combines[item.index], "name", {
      get: function () {
        return document.getElementById("txtName" + item.index).value;
      },
      set: function (value) {
        document.getElementById("txtName" + item.index).value = value;
      },
    });
    Object.defineProperty(uivariables.combines[item.index], "description", {
      get: function () {
        return document.getElementById("txtDescription" + item.index).value;
      },
      set: function (value) {
        document.getElementById("txtDescription" + item.index).value = value;
      },
    });
  });
}
// end textbox combine name and description
