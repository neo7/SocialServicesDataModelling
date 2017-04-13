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



        var checkbox = this.createHTMLTextBox(columns[i], columns[i], true);


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

  createHTMLTextBox(name, value, checked)
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
}
