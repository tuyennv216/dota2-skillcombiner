// combine elements
function createCombineElement(combine) {
  var element = document.createElement("div");
  element.classList.add("row", "x-center");
  element.dataset.area = "combine-one";
  element.dataset.index = combine.index;
  element.ondragover = (e) => allowDrop(e);
  element.ondragstart = (e) => onCombineOneDrag(e);
  element.ondrop = (e) => onCombineOneDrop(e);
  element.draggable = "true";

  var nameElement = createCombineNameElement(combine);
  var combineElement = createCombineSkills(combine);
  var descriptionElement = createDescriptionElement(combine);

  element.appendChild(nameElement);
  element.appendChild(combineElement);
  element.appendChild(descriptionElement);

  return element;
}

function createCombineNameElement(combine) {
  var nameElement = document.createElement("div");
  nameElement.classList.add("col-12", "px-0");
  nameElement.innerHTML =
    `<input id="txtName` +
    combine.index +
    `" type="text" class="combine-name" draggable="true" ondragstart="event.preventDefault()" value="` +
    combine.name +
    `">`;

  return nameElement;
}

function createDescriptionElement(combine) {
  var descriptionElement = document.createElement("div");
  descriptionElement.classList.add("col-8");
  descriptionElement.innerHTML =
    `<textarea id="txtDescription` +
    combine.index +
    `" type="text" class="combine-description" draggable="true" ondragstart="event.preventDefault()">` +
    combine.description +
    `</textarea>`;

  return descriptionElement;
}

function createCombineSkills(combine) {
  var combineElement = document.createElement("div");
  combineElement.classList.add("col-4", "row");
  combineElement.dataset.area = "combine-skills";

  combine.skills.forEach((skill) => {
    var skillElement = createCombineSkillElement(combine.index, skill);
    combineElement.appendChild(skillElement);
  });

  return combineElement;
}

function createCombineSkillElement(index, skillName) {
  var skillElement = document.createElement("div");
  skillElement.classList.add("col-6", "px-0");
  skillElement.dataset.name = skillName;

  var iconWrapper = document.createElement("div");
  iconWrapper.classList.add("mx-auto", "p-0", "m-1", "icon-size-2");
  iconWrapper.dataset.type = "icon";
  iconWrapper.innerHTML =
    `<div class="img-wrapper"><span class="img-remover" onclick="removeSkill(` +
    index +
    `, '` +
    skillName +
    `', event)">&#10005;</span><img draggable="false" src="/skills/` +
    skillName +
    `.png" /></div>`;

  skillElement.appendChild(iconWrapper);
  return skillElement;
}
// end combine elements

// group elements
function createGroupButton(group) {
  var buttonWrapper = document.createElement("div");
  buttonWrapper.classList.add("col-12", "d-grid", "gap-2");

  var buttonElement = document.createElement("button");
  buttonElement.classList.add("btn", "btn-outline-primary");
  buttonElement.dataset.index = group.index;
  buttonElement.innerText = group.name;
  buttonElement.onclick = (e) => {
    var buttonIndex = +e.target.dataset.index;
    if (uivariables.activeGroupIndex === buttonIndex) return;

    saveCurrentCombines();

    uivariables.activeGroupIndex = buttonIndex;
    var groupmodel = viewmodel.find(x => x.index === buttonIndex);
    combinesmodel = groupmodel.combines;
    e.target.classList.remove("btn-outline-primary");
    e.target.classList.add("btn-primary");

    var wrapper = $area("save-container")[0];
    for (var i = 0; i < wrapper.children.length; i++) {
      var item = wrapper.children[i].firstChild;
      if (
        +item.dataset.index !== buttonIndex &&
        item.classList.contains("btn-primary")
      ) {
        item.classList.remove("btn-primary");
        item.classList.add("btn-outline-primary");
      }
    }

    renderCombines();
  };

  buttonWrapper.appendChild(buttonElement);
  return buttonWrapper;
}
// end group elements
