"use strict";
let instanceHTMLCanvasUtils = null;
class HTMLCanvasUtils {
  constructor(){
    if (!instanceHTMLCanvasUtils) {
          instanceHTMLCanvasUtils = this;
        }
  }

  createTableFromDataframe(dataFrame)
  {
      var columns = dataFrame.listColumns();
      var rows = dataFrame.toArray()

      var navcontent = document.getElementById("content")
      var dataTableDiv = document.getElementById("dataTableDiv")
      var dataTable = document.createElement("TABLE");
      dataTable.setAttribute("id", "dataTable");
      dataTable.setAttribute("class", "table")
      navcontent.style.display = "inline";
      dataTableDiv.appendChild(dataTable);
      dataTable.border = '1px';
      dataTable.borderColor = "black";

      var columnHeader = document.createElement("TR");
      columnHeader.setAttribute("id", "columnHeader");
      dataTable.appendChild(columnHeader);



      for (var i = 0; i < columns.length; i++)
      {
        var headerTD = document.createElement("TH");
        var headerCell = document.createTextNode(columns[i])
        headerTD.appendChild(headerCell);

        columnHeader.appendChild(headerTD)



        var checkbox = this.createHTMLCheckBox(columns[i], columns[i], true);


        headerTD.appendChild(this.createHTMLNewLine());
        headerTD.appendChild(checkbox);

      }
      for (var i = 0; i< rows.length; i++)
      {
        var tableRow = document.createElement("TR");
        tableRow.setAttribute("id", "tableRow");
        dataTable.appendChild(tableRow);
        var rowElements = rows[i];
        for (var j = 0; j <rowElements.length; j++)
        {
          var columnTD = document.createElement("TD");
          var columnCell = document.createTextNode(rowElements[j])
          columnTD.appendChild(columnCell);
          tableRow.appendChild(columnTD)
        }
      }
  }

  createDropDownAndTextBox(dataframe)
  {
    var dynamicFilterDiv = document.createElement("DIV");
    dynamicFilterDiv.id = "dynamicFilterDiv";
    var selectDropDown = document.createElement("SELECT");
    selectDropDown.id = "select_filter"
    selectDropDown.name = "Select"

    var columns = dataframe.listColumns();
    var blankOption = this.createHTMLSelectOption("blankoption", "", "", "");

    selectDropDown.appendChild(blankOption);
    for (var i = 0; i< columns.length; i++)
    {
      var option = this.createHTMLSelectOption(columns[i], columns[i], columns[i], columns[i])
      selectDropDown.appendChild(option);
    }
    dynamicFilterDiv.appendChild(selectDropDown);

    var queryClause = document.createElement("INPUT");
    queryClause.type = "text";
    queryClause.id = "queryClause";

    dynamicFilterDiv.appendChild(queryClause);

    var submitFilterButton = document.createElement("BUTTON");
    submitFilterButton.id = "filterButton";
    submitFilterButton.appendChild(document.createTextNode("Filter"))

    dynamicFilterDiv.appendChild(submitFilterButton);

    var filterDiv = document.getElementById("filterDiv");
    filterDiv.appendChild(dynamicFilterDiv);

  }

  createSqlFilterPanel(dataframe)
  {
    var dynamicSqlFilterDiv = document.createElement("DIV");
    dynamicSqlFilterDiv.id = "dynamicSqlFilterDiv";

    var sqlQueryTextBox = document.createElement("INPUT");
    sqlQueryTextBox.type = "text";
    sqlQueryTextBox.id = "sqlQueryTextBox";

    var submitSqlFilterButton = document.createElement("BUTTON");
    submitSqlFilterButton.id = "submitSqlFilterButton";
    submitSqlFilterButton.appendChild(document.createTextNode("SQL Filter"));

    dynamicSqlFilterDiv.appendChild(sqlQueryTextBox);
    dynamicSqlFilterDiv.appendChild(submitSqlFilterButton);

    var sqlFilterDiv = document.getElementById("sqlFilterDiv");
    sqlFilterDiv.appendChild(dynamicSqlFilterDiv);


  }
  createHTMLCheckBox(name, value, checked)
  {
    var checkboxloc = document.createElement('input');
    checkboxloc.type = "checkbox";
    checkboxloc.name = name;
    checkboxloc.value = value;
    checkboxloc.id = "id";
    checkboxloc.checked = true;

    return checkboxloc;
  }

  createHTMLNewLine()
  {
    var brloc = document.createElement("BR");

    return brloc;
  }



  createHTMLSelectOption(id, name, value, label)
  {
    var option = document.createElement("option");
    option.id = id;
    option.name = name;
    option.value = value;
    option.label = label;
    option.appendChild(document.createTextNode(name))

    return option;
  }
}
