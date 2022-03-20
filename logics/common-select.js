// query element by data type
function itemsType(name) {
  var items = document.querySelectorAll("[data-type='" + name + "']");
  return items;
}

// query element by data index inside the element
function itemsIndex(element, index) {
  var items = element.querySelectorAll("[data-index='" + index + "']");
  return items;
}

// query element by data area
function itemsArea(name) {
  var items = document.querySelectorAll("[data-area='" + name + "']");
  return items;
}

// query element by data area inside the element
function itemsAreaFromElement(element, name) {
  var items = element.querySelectorAll("[data-area='" + name + "']");
  return items;
}

// reference to itemsType
function $type(name) {
  return itemsType(name);
}

// reference to itemsArea
function $area(name) {
  return itemsArea(name);
}

// reference to itemsIndex
function $index(element, index) {
  return itemsIndex(element, index);
}

function $areaOfElement(element, name) {
  return itemsAreaFromElement(element, name);
}

function $parentArea(element, areaName) {
  var nodeItem = element;
  while (nodeItem !== null) {
    if (nodeItem.dataset.area === areaName) return nodeItem;
    nodeItem = nodeItem.parentElement;
  }
  return null;
}

function $combines(index) {
  var items = document.querySelectorAll(
    "[data-area='combine-one'][data-index='" + index + "']"
  );
  return items;
}
