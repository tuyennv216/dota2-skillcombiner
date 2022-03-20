function startAutosave() {
  setInterval(function () {
    localStorage.setItem('autosave', JSON.stringify(viewmodel));
  }, 5000);
}

function loadAutosave() {
  var savedStr = localStorage.getItem('autosave');
  if (savedStr !== null) {
    viewmodel = JSON.parse(savedStr);
  }
}
