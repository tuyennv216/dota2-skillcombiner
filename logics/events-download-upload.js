function onUploadChange(e) {
  var reader = new FileReader();
  reader.onload = (e2) => {
    viewmodel = JSON.parse(e2.target.result);
    renderViewmodel();
  };
  var file = e.target.files[0];
  reader.readAsText(file);
}

function onDownloadClick(e) {
  saveCurrentCombines();

  var dataStr =
    "data:text/json;charset=utf-8," +
    encodeURIComponent(JSON.stringify(viewmodel));

    var downloadName = "save_" + new Date().toISOString(); 
  var downloadElement = document.createElement("a");
  downloadElement.setAttribute("href", dataStr);
  downloadElement.setAttribute("download", downloadName + ".json");

  document.body.appendChild(downloadElement);
  downloadElement.click();
  downloadElement.remove();
}
