function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


var housingLink = document.getElementById("housing");
var dashboardContainer = document.getElementById("dashboard-container")

housingLink.addEventListener("click", function(){
  var DataFrame = dfjs.DataFrame;
  DataFrame.fromCSV('datasets/SeniorServicesMeal.csv').then(df =>{
    var selectedDF = df.select('Month','Year','Home Delievered Meals','Congregate Dining Program')
    var columns = selectedDF.listColumns();
    var rows = selectedDF.toArray()

    var dataTableDiv = document.getElementById("dataTableDiv")
    var dataTable = document.createElement("TABLE");
    dataTable.setAttribute("id", "dataTable");
    dataTable.setAttribute("class", "table")
    dataTableDiv.appendChild(dataTable);
    dataTable.border = '1px';
    dataTable.borderColor = "black";

    var columnHeader = document.createElement("TR");
    columnHeader.setAttribute("id", "columnHeader");
    dataTable.appendChild(columnHeader);

    for (i = 0; i < columns.length; i++)
    {
      var headerTD = document.createElement("TH");
      var headerCell = document.createTextNode(columns[i])
      headerTD.appendChild(headerCell);

      columnHeader.appendChild(headerTD)

    }
    for (i = 0; i< rows.length; i++)
    {
      var tableRow = document.createElement("TR");
      tableRow.setAttribute("id", "tableRow");
      dataTable.appendChild(tableRow);
      var rowElements = rows[i];
      for (j = 0; j <rowElements.length; j++)
      {
        var columnTD = document.createElement("TD");
        var columnCell = document.createTextNode(rowElements[j])
        columnTD.appendChild(columnCell);
        tableRow.appendChild(columnTD)
      }
    }
  });
});
