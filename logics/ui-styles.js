function redrawHeight() {
  var classesElement = $area("hero-filter")[0];
  var classesStyles = window.getComputedStyle(classesElement);
  var classesHeight =
    classesElement.offsetHeight +
    parseInt(classesStyles.getPropertyValue("margin-top")) +
    parseInt(classesStyles.getPropertyValue("margin-bottom"));
  var typesHeight = "calc(100vh - " + (54 + 12 + 20 + classesHeight) + "px)";

  var typesElement = $area("hero-types")[0];
  typesElement.style.height = typesHeight;
}
