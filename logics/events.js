function onGroupCreate() {
  var groupName = uivariables.newGroup;
  if (groupName.length === 0) groupName = "Group " + (viewmodel.length + 1);
  var newGroup = new createCombinesGroup(groupName);
  viewmodel.push(newGroup);

  uivariables.newGroup = "";
  renderNewGroup(newGroup);
  resetCombinesVariables();
}

function onGroupDelete() {
  if (uivariables.activeGroupIndex !== -1) {
    var groupIndex = viewmodel.findIndex(
      (x) => x.index === uivariables.activeGroupIndex
    );
    var removedGroup = viewmodel.splice(groupIndex, 1)[0];
    renderGroupRemoved(removedGroup);
    resetCombinesVariables();

    combinesmodel = [];
    uivariables.activeGroupIndex = -1;
  }
}

function onClassClick(e) {
  var data = e.target.dataset;
  activeClassId = data.id;

  updateFilterClasses();
  renderHeroes();
}

function onHeroClick(e) {
  var data = e.target.dataset;
  activeHeroId = data.id;
  activeHeroName = data.name;

  renderHeroSkills();
}

function updateFilterClasses() {
  var activeClass = classes[activeClassId];
  var dropdownButton = $($area("hero-filter")).find(".btn.dropdown-toggle");
  dropdownButton.text(activeClass.name);
}

function onHeroNameChange(e) {
  uivariables.activeHeroName = e.target.value;
}

function onHeroNameKeydown(e) {
  var key = e.keyCode || e.charCode;
  if (key == 8 || key == 46) {
    uivariables.activeHeroName = "";
  } else if (key == 13) {
    renderHeroes();
  }
}
