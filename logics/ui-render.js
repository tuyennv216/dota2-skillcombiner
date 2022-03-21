// render combine
function renderCombineElement(combineElement) {
  var container = $area("combine-container")[0];
  container.appendChild(combineElement);
  // container.insertBefore(combineElement, container.firstChild);

  randomBorderColor($area("combine-one"));
}

function renderCombineSkillElement(wrapper, name) {
  var container = $areaOfElement(wrapper, "combine-skills")[0];
  var skillElement = createCombineSkillElement(wrapper.dataset.index, name);
  container.appendChild(skillElement);
}

function renderCombineSkillElementRemoved(wrapper, name) {
  var container = $areaOfElement(wrapper, "combine-skills")[0];
  container.childNodes.forEach((item) => {
    if (item.dataset.name === name) {
      container.removeChild(item);
    }
  });
}

function renderCombineSkillElementMove(index1, index2) {
  var container = $area("combine-container")[0];
  var element1 = $combines(index1)[0];
  var element2 = $combines(index2)[0];
  var nextOfElement2 = element2.nextSibling;

  var orderIndex1 = [].indexOf.call(container.children, element1);
  var orderIndex2 = [].indexOf.call(container.children, element2);
  if (orderIndex1 < orderIndex2) {
    container.insertBefore(element1, nextOfElement2);
  } else if (orderIndex1 > orderIndex2) {
    container.insertBefore(element1, element2);
  }
}
// end render combine

// random color
function randomColors() {
  randomBorderColor($area("combine-new"));
  randomBorderColor($area("combine-one"));
}

function randomBorderColor(items) {
  items.forEach((item) => {
    item.style.borderColor =
      "rgb(" +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      ")";
  });
}
//

function renderUI() {
  renderViewmodel();
  renderClasses();
  renderHeroes();
}

// load classes
function renderClasses() {
  const container = $area("hero-classes")[0];
  container.replaceChildren();

  Object.keys(classes).forEach((className) => {
    const element = document.createElement("div");
    element.classList.add("col-3", "d-grid", "gap-2", "spec-one");

    const button = document.createElement("button");
    button.innerText = classes[className].name;
    button.dataset.id = className;
    button.classList.add("btn", "btn-link");
    button.onclick = (e) => onClassClick(e);

    element.appendChild(button);
    container.appendChild(element);
  });
}

// load heros
function renderHeroes() {
  const container = $area("hero-types")[0];
  container.replaceChildren();

  var activeClass = classes[activeClassId];
  Object.keys(activeClass.values).forEach((valueId) => {
    var type = activeClass.values[valueId];

    // create a type wrapper
    var element = document.createElement("div");
    element.classList.add("col-12", "row", "hero-type");

    if (type.heroes !== undefined) {
      // create a title
      var typeElement = document.createElement("div");
      typeElement.classList.add("col-12", "type-title");
      typeElement.innerText = type.name;
      element.appendChild(typeElement);

      // create icon list of this type
      type.heroes.forEach((hero) => {
        var iconWrapper = document.createElement("div");
        iconWrapper.classList.add("p-0", "m-1", "icon-size-3");
        iconWrapper.dataset.type = "icon";

        var iconElement = document.createElement("img");
        iconElement.src = "/images/" + hero.name + ".png";
        iconElement.alt = hero.name_loc;
        iconElement.dataset.id = hero.id;
        iconElement.dataset.name = hero.name;
        iconElement.onclick = (e) => onHeroClick(e);

        iconWrapper.appendChild(iconElement);
        element.appendChild(iconWrapper);
      });
    }

    container.appendChild(element);
  });
}

// load hero skills
function renderHeroSkills() {
  var container = $area("list-skill")[0];
  container.replaceChildren();

  var hero = detail[activeHeroName];
  if (hero === undefined) return;

  hero.abilities.forEach((skill) => {
    var element = document.createElement("div");
    element.classList.add("row");

    var iconWrapper = document.createElement("div");
    iconWrapper.classList.add("mx-auto", "p-0", "icon-size-3");
    iconWrapper.dataset.type = "icon";
    element.appendChild(iconWrapper);

    var iconElement = document.createElement("img");
    iconElement.draggable = true;
    iconElement.ondragstart = (e) => onSkillDrag(e);
    iconElement.src = "/skills/" + skill.name + ".png";
    iconElement.alt = skill.name_loc;
    iconElement.dataset.name = skill.name;
    iconWrapper.appendChild(iconElement);

    var iconName = document.createElement("div");
    iconName.classList.add("text-center");
    iconName.innerText = skill.name_loc;
    element.appendChild(iconName);

    container.appendChild(element);
  });
}

function renderCombines() {
  var container = $area("combine-container")[0];
  container.replaceChildren();

  combinesmodel.forEach((combine) => {
    var combineElement = createCombineElement(combine);
    renderCombineElement(combineElement);
  });

  resetCombinesVariables();
  bindCombinesUI(combinesmodel);
}

function renderViewmodel() {
  var container = $area("save-container")[0];
  container.replaceChildren();

  viewmodel.forEach((group) => renderNewGroup(group));
}

function renderNewGroup(group) {
  var container = $area("save-container")[0];
  var buttonWrapper = createGroupButton(group);
  container.appendChild(buttonWrapper);
}

function renderGroupRemoved(group) {
  var container = $area("save-container")[0];
  var buttonElement = $index(container, group.index)[0];
  var buttonWrapper = buttonElement.parentElement;
  container.removeChild(buttonWrapper);
}
