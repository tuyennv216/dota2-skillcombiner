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
    var groupIndex = viewmodel.findIndex(x => x.index === uivariables.activeGroupIndex);
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

  renderHeroes();
}

function onHeroClick(e) {
  var data = e.target.dataset;
  activeHeroId = data.id;
  activeHeroName = data.name;

  renderHeroSkills();
}
