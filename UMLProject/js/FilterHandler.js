class FilterHandler{

  constructor(dataframe)
  {

    this.dataframeObject = new DataframeObject(dataframe);

    var filterbutton = document.getElementById("filterButton");
    filterbutton.addEventListener("click", evt => this.filterButtonEventListener(evt));

    var sqlfilterbutton = document.getElementById("submitSqlFilterButton");
    sqlfilterbutton.addEventListener("click", evt => this.sqlFilterButtonEventListener(evt));



  }

  filterButtonEventListener()
  {
    alert("button pressed");
    console.log("reached filter button log");
  }

  sqlFilterButtonEventListener()
  {
    alert("sql button pressed");
    console.log("reached the sql filter")
  }

}
