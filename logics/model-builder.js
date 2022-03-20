var viewmodel = [];
var combinesmodel = [];

function saveCurrentCombines() {
  if (uivariables.activeGroupIndex !== -1) {
    combinesmodel.forEach((item) => {
      var editItem = uivariables.combines[item.index];
      if (editItem !== undefined) {
        item.name = editItem.name;
        item.description = editItem.description;
      }
    });

    var groupmodel = viewmodel.find(x => x.index === uivariables.activeGroupIndex);
    if (groupmodel !== undefined) groupmodel.combines = combinesmodel
  }
}

function createCombinesGroup(name) {
  this.name = name;
  this.combines = [];
  this.index = viewmodel.length;
}

function selectCombines(index) {
  var combines = viewmodel.filter((x) => x.index === index);
  combinesmodel = combines;
}

function createCombine(skillname) {
  this.name = "combine " + combinesmodel.length;
  this.skills = [skillname];
  this.description = "";
  this.index = combinesmodel.length;
}

function addSkill(index, skillname) {
  var combinemodel = combinesmodel.find((x) => x.index === +index);
  if (combinemodel === undefined) return;

  if (combinemodel.skills.indexOf(skillname) === -1) {
    combinemodel.skills.push(skillname);
    return true;
  }
  return false;
}

function removeSkill(index, skillname, e) {
  var combinemodel = combinesmodel.find((x) => x.index === +index);
  if (combinemodel === undefined) return;

  if (combinemodel.skills.indexOf(skillname) !== -1) {
    combinemodel.skills = combinemodel.skills.filter((v) => v !== skillname);

    var wrapper = $parentArea(e.target, "combine-one");
    renderCombineSkillElementRemoved(wrapper, skillname);
    return true;
  }
  return false;
}
