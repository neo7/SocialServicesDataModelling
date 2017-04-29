class Main{
  constructor(){
    this.datasetKVObject = new DatasetFileURLs()
    this.openNavLink = document.getElementById("openNav");
    this.closeNavLink = document.getElementById("closeNav");

    this.senior_service_meal = document.getElementById("senior_service_meal");
    this.education_progress = document.getElementById("education_progress");
    this.senior_centers = document.getElementById("senior_centers");
    this.business_funds = document.getElementById("business_funds");
    this.public_health = document.getElementById("public_health");
    this.sex_offenders = document.getElementById("sex_offenders");

    this.openNavLink.addEventListener("click", evt => this.openNav(evt));
    this.closeNavLink.addEventListener("click", evt => this.closeNav(evt));

    this.senior_service_meal.addEventListener("click", evt => this.datasetEventListener(this.senior_service_meal.id));
    this.education_progress.addEventListener("click", evt => this.datasetEventListener(this.education_progress.id));
    this.senior_centers.addEventListener("click", evt => this.datasetEventListener(this.senior_centers.id));
    this.business_funds.addEventListener("click", evt => this.datasetEventListener(this.business_funds.id));
    this.public_health.addEventListener("click", evt => this.datasetEventListener(this.public_health.id));
    this.sex_offenders.addEventListener("click", evt => this.datasetEventListener(this.sex_offenders.id));
  }

  openNav() {
      document.getElementById("mySidenav").style.width = "200px";
  }

  closeNav() {
      document.getElementById("mySidenav").style.width = "0";
  }



  datasetEventListener(datasetId){
    this.clearDynamicContents()
    this.populateDashboard(this.datasetKVObject.getFileURL(datasetId))
    this.closeNav()
  }

  populateDashboard(value){
    var dashboard = new Dashboard(value);
  }

  clearDynamicContents()
  {
    if (document.getElementById("dataTable") != undefined && document.getElementById("dataTable") != null)
    {
      var table_element = document.getElementById("dataTable");
      table_element.parentNode.removeChild(table_element);
      var filter_elements = document.getElementById("dynamicFilterDiv");
      filter_elements.parentNode.removeChild(filter_elements);
      var sqlFilterDiv = document.getElementById("dynamicSqlFilterDiv");
      sqlFilterDiv.parentNode.removeChild(sqlFilterDiv);
      var controlPanelDiv = document.getElementById("controlPanelDiv");
      controlPanelDiv.parentNode.removeChild(controlPanelDiv);

      if(document.getElementById("chartDiv")!= null && document.getElementById("chartDiv")!= undefined){
        var chartDiv = document.getElementById("chartDiv");
        chartDiv.parentNode.removeChild(chartDiv);
      }

    }
  }

}

var mainInstance = new Main();
