function allowDrop(e) {
  e.preventDefault();
}

// drag skill from skill list and drop on combine one
function onSkillDrag(e) {
  var data = e.target.dataset;
  var transfer = {
    from: "skill",
    data: data.name,
  };
  e.dataTransfer.setData("data", JSON.stringify(transfer));
}

function onCombineOneDrop(e) {
  e.preventDefault();
  var wrapper = $parentArea(e.target, "combine-one");
  var transfer = JSON.parse(e.dataTransfer.getData("data"));
  switch (transfer.from) {
    case "skill": {
      var name = transfer.data;
      var added = addSkill(wrapper.dataset.index, name);
      if (added) {
        renderCombineSkillElement(wrapper, name);
      }
      break;
    }
    case "combine": {
      var data = wrapper.dataset;
      var firstIndex = +transfer.data;
      var secondIndex = +data.index;
      if (firstIndex === secondIndex) return;

      var viewindex1 = combinesmodel.findIndex(x => x.index === secondIndex);
      var viewindex2 = combinesmodel.findIndex(x => x.index === firstIndex);
      var temp = combinesmodel[viewindex1];
      combinesmodel[viewindex1] = combinesmodel[viewindex2];
      combinesmodel[viewindex2] = temp;

      renderCombineSkillElementMove(firstIndex, secondIndex);
      break;
    }
    default: {
      console.log("drop from " + transfer.from + " is unhandle");
    }
  }

  // e.target.appendChild(document.getElementById(data));
}

function onCombineNewDrop(e) {
  e.preventDefault();
  var transfer = JSON.parse(e.dataTransfer.getData("data"));
  var name = transfer.data;

  var newCombine = new createCombine(name);
  var combineElement = createCombineElement(newCombine);
  renderCombineElement(combineElement);

  combinesmodel.push(newCombine);
  bindCombinesUI([newCombine]);
  // e.target.appendChild(document.getElementById(data));
}
// end drag skill from skill list and drop on combine one

// drag combine one and drop on another
function onCombineOneDrag(e) {
  var wrapper = $parentArea(e.target, "combine-one");
  var data = wrapper.dataset;
  var transfer = {
    from: "combine",
    data: data.index,
  };
  e.dataTransfer.setData("data", JSON.stringify(transfer));
}
// end drag combine one and drop on another
