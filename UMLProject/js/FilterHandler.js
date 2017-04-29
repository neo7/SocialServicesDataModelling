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

    this.dashboardObserver = new DashboardObserver();

  }

  filterButtonEventListener()
  {
    console.log("reached filter button log");

    var checkboxValues = document.getElementsByClassName('columnCheckbox');
    var select_columns = [];
    for (var i = 0; i< checkboxValues.length; i++)
    {
      if (checkboxValues[i].checked)
      {
        select_columns.push(checkboxValues[i].value);
      }
    }
    var selection_clause = this.parseColumnsToString(select_columns);
    var selectFilterElement = document.getElementById("select_filter");
    var subject = selectFilterElement.options[selectFilterElement.selectedIndex].value;

    var comparisonElement = document.getElementById("select_comparison");
    var comparison = comparisonElement.options[comparisonElement.selectedIndex].value;
    var predicate = document.getElementById("queryClause").value;
    var sql_statement = selection_clause + subject + comparison + predicate;

    this.executeSQLQuery(sql_statement);
  }

  sqlFilterButtonEventListener()
  {
    console.log("reached the sql filter")
    var sql_statement = document.getElementById("sqlQueryTextBox").value;
    this.executeSQLQuery(sql_statement)

  }

  executeSQLQuery(sql_statement)
  {
    console.log(sql_statement);
    this.DataFrame.sql.registerTable(this.dataframe, 'table', true)
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
      var controlPanelDiv = document.getElementById("controlPanelDiv");
      controlPanelDiv.parentNode.removeChild(controlPanelDiv);

      if(document.getElementById("chartDiv")!= null && document.getElementById("chartDiv")!= undefined)
      {
        var chartDiv = document.getElementById("chartDiv");
        chartDiv.parentNode.removeChild(chartDiv);
      }
    }
    var dashboard = new Dashboard(null);
    this.dashboardObserver.createDashboardElements(filteredDF);
  }

  parseColumnsToString(columnCollection)
  {
    var selection_string = "select ";
    const blank_space = " ";
    const comma = ","
    for (var i = 0; i<columnCollection.length; i++)
    {
      if(i == columnCollection.length-1)
      {
        selection_string = selection_string+columnCollection[i]+blank_space;
      } else {
          selection_string = selection_string+columnCollection[i]+comma+blank_space;
      }
    }
    selection_string = selection_string + "from table where ";
    return selection_string;
  }


}
