function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

var datasetKVObject = new DatasetFileURLs()

var senior_service_meal = document.getElementById("senior_service_meal");
var education_progress = document.getElementById("education_progress");
var senior_centers = document.getElementById("senior_centers");
var business_funds = document.getElementById("business_funds");
var public_health = document.getElementById("public_health");

senior_service_meal.addEventListener("click", function(){
  clearDynamicContents()
  populateDashboard(datasetKVObject.getFileURL(senior_service_meal.id))
  closeNav()
});

senior_centers.addEventListener("click", function(){
  clearDynamicContents()
  populateDashboard(datasetKVObject.getFileURL(senior_centers.id))
  closeNav()
});

education_progress.addEventListener("click", function(){
  clearDynamicContents()
  populateDashboard(datasetKVObject.getFileURL(education_progress.id))
  closeNav()
});

business_funds.addEventListener("click", function(){
  clearDynamicContents()
  populateDashboard(datasetKVObject.getFileURL(business_funds.id))
  closeNav()
});

public_health.addEventListener("click", function(){
  clearDynamicContents()
  populateDashboard(datasetKVObject.getFileURL(public_health.id))
  closeNav()
});


function populateDashboard(value){
  var dashboard = new Dashboard(value);
}

function clearDynamicContents()
{
  if (document.getElementById("dataTable") != undefined && document.getElementById("dataTable") != null)
  {
    table_element = document.getElementById("dataTable");
    table_element.parentNode.removeChild(table_element);
  }
}
