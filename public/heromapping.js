// for each heroes
Object.keys(heroes).forEach((heroId) => {
  var hero = heroes[heroId];
  // for each hero classes
  Object.keys(heroes[heroId].classes).forEach((className) => {
    // if class name is exists in classes
    if (!!classes[className]) {
      var classItem = classes[className];
      var heroClassValue = hero.classes[className];

      if (classItem.values[heroClassValue].heroes === undefined) {
        // create a new hero list
        classItem.values[heroClassValue].heroes = [];
      }

      // insert hero to this class item
      classItem.values[heroClassValue].heroes.push(heroes[heroId]);
    }
  });
});
