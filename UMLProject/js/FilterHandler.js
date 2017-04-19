class FilterHandler{

  constructor(dataframe)
  {

    this.dataframeObject = new DataframeObject(dataframe);

    var filterbutton = document.getElementById("filterButton");
    filterbutton.addEventListener("click", evt => this.filterButtonEventListener(evt));

    var sqlfilterbutton = document.getElementById("submitSqlFilterButton");
    sqlfilterbutton.addEventListener("click", evt => this.sqlFilterButtonEventListener(evt));

    this.DataFrame = dfjs.DataFrame;
    this.dataframe = dataframe;

    this.canvasUtil = new HTMLCanvasUtils();

  }

  filterButtonEventListener()
  {
    console.log("reached filter button log");
  }

  sqlFilterButtonEventListener()
  {
    console.log("reached the sql filter")

    var sql_statement = document.getElementById("sqlQueryTextBox").value;
    console.log(sql_statement);

    this.DataFrame.sql.registerTable(this.dataframe, 'curr_table', true)
    // Request on Table
    var filteredDF = this.DataFrame.sql.request(sql_statement);
    filteredDF.show();

    this.postfilterActivity(filteredDF)

  }

  postfilterActivity(filteredDF)
  {
    this.updateObservers(filteredDF);
    this.refreshHTMLElements(filteredDF);
  }

  updateObservers(filteredDF)
  {
    this.dataframe = filteredDF;
    this.dataframeObject = new DataframeObject(filteredDF);
  }

  refreshHTMLElements(filteredDF)
  {
    if (document.getElementById("dataTable") != undefined && document.getElementById("dataTable") != null)
    {
      var table_element = document.getElementById("dataTable");
      table_element.parentNode.removeChild(table_element);
      var filter_elements = document.getElementById("dynamicFilterDiv");
      filter_elements.parentNode.removeChild(filter_elements);
      var sqlFilterDiv = document.getElementById("dynamicSqlFilterDiv");
      sqlFilterDiv.parentNode.removeChild(sqlFilterDiv);

    }
    var dashboard = new Dashboard(null);
    dashboard.createDashboardElements(filteredDF);
  }

}
