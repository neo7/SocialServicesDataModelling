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



        var checkbox = this.createHTMLCheckBox(columns[i], columns[i], true, "columnCheckbox", false);


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
  createHTMLCheckBox(name, value, checked, clazz, nameElement)
  {
    var checkboxloc = document.createElement('input');
    checkboxloc.type = "checkbox";
    checkboxloc.name = name;
    checkboxloc.value = value;
    checkboxloc.id = value;
    checkboxloc.checked = checked;
    checkboxloc.className = clazz;

    return checkboxloc;
  }

  createHTMLRadio(name, value, checked, clazz, label)
  {
    var radio = document.createElement('input');
    radio.type = "radio";
    radio.name = name;
    radio.value = value;
    radio.id = value;
    radio.checked = checked;
    radio.className = clazz;
    radio.label = label;

    return radio;
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

  createChartControls(dataframe)
  {
    var selectChart = document.createElement("SELECT");
    selectChart.id = "select_chart"
    selectChart.name = "select_chart"

    var lineChartOption = this.createHTMLSelectOption("lineChartOption", "Line Chart", "line", "lineChartOption");
    var barChartOption = this.createHTMLSelectOption("barChartOption", "Bar Chart", "bar", "barChartOption");
    var pieChartOption = this.createHTMLSelectOption("pieChartOption", "Pie Chart", "pie", "pieChartOption");
    var stackedChartOption = this.createHTMLSelectOption("stackedChartOption", "Stacked Chart", "bar", "stackedChartOption");
    var radarChartOption = this.createHTMLSelectOption("radarChartOption", "Radar Chart", "radar", "radarChartOption");

    var blankOption = this.createHTMLSelectOption("Select Chart Type", "Select Chart Type", "", "");

    selectChart.appendChild(blankOption);
    selectChart.appendChild(lineChartOption);
    selectChart.appendChild(barChartOption);
    selectChart.appendChild(pieChartOption);
    selectChart.appendChild(stackedChartOption);
    selectChart.appendChild(radarChartOption);


    var xAxisDiv = document.createElement("DIV");
    xAxisDiv.id = "xAxisDiv";
    var xselectDropDown = document.createElement("SELECT");
    xselectDropDown.id = "select_x"
    xselectDropDown.name = "select_x"

    var columns = dataframe.listColumns();
    var xblankOption = this.createHTMLSelectOption("X-Axis", "X-Axis", "X-Axis", "X-Axis");

    xselectDropDown.appendChild(xblankOption);
    for (var i = 0; i< columns.length; i++)
    {
      var xoption = this.createHTMLSelectOption(columns[i], columns[i], columns[i], columns[i])
      xselectDropDown.appendChild(xoption);
    }

    xAxisDiv.appendChild(xselectDropDown);

    var frequencyCheckbox = this.createHTMLCheckBox("xaxis", "frequency", false, "frequency", "Frequency");

    var frequencyLabel = document.createElement("LABEL");
    frequencyLabel.for ="frequency";
    frequencyLabel.appendChild(document.createTextNode("Frequency"));

    xAxisDiv.appendChild(frequencyLabel);
    xAxisDiv.appendChild(frequencyCheckbox);

    var yAxisDiv = document.createElement("DIV");
    yAxisDiv.id = "yAxisDiv";
    var yselectDropDown = document.createElement("SELECT");
    yselectDropDown.id = "select_y"
    yselectDropDown.name = "select_y"

    var yblankOption = this.createHTMLSelectOption("Y-Axis", "Y-Axis", "Y-Axis", "Y-Axis");

    yselectDropDown.appendChild(yblankOption);
    for (var i = 0; i< columns.length; i++)
    {
      var yoption = this.createHTMLSelectOption(columns[i], columns[i], columns[i], columns[i])
      yselectDropDown.appendChild(yoption);
    }

    var yastackDropDown = document.createElement("SELECT");
    yastackDropDown.id = "stack_ya"
    yastackDropDown.name = "stack_ya"

    var yastackBlankOption = this.createHTMLSelectOption("Stack-A-Y-Axis", "Stack-A-Y-Axis", "", "Stack-A-Y-Axis");

    yastackDropDown.appendChild(yastackBlankOption);
    for (var i = 0; i< columns.length; i++)
    {
      var yoption = this.createHTMLSelectOption(columns[i], columns[i], columns[i], columns[i])
      yastackDropDown.appendChild(yoption);
    }

    var ybstackDropDown = document.createElement("SELECT");
    ybstackDropDown.id = "stack_yb"
    ybstackDropDown.name = "stack_yb"

    var ybstackBlankOption = this.createHTMLSelectOption("Stack-B-Y-Axis", "Stack-B-Y-Axis", "", "Stack-B-Y-Axis");

    ybstackDropDown.appendChild(ybstackBlankOption);
    for (var i = 0; i< columns.length; i++)
    {
      var yoption = this.createHTMLSelectOption(columns[i], columns[i], columns[i], columns[i])
      ybstackDropDown.appendChild(yoption);
    }

    yAxisDiv.appendChild(yselectDropDown);
    yAxisDiv.appendChild(yastackDropDown);
    yAxisDiv.appendChild(ybstackDropDown);
    yAxisDiv.appendChild(this.createHTMLNewLine());

    var sumRadio = this.createHTMLRadio("yaxis", "sum", false, "sum", "Sum");
    var meanRadio = this.createHTMLRadio("yaxis", "mean", false, "mean", "Mean");
    var sdRadio = this.createHTMLRadio("yaxis", "sd", false, "sd", "Std Deviation");
    var maxRadio = this.createHTMLRadio("yaxis", "max", false, "max", "Max");
    var minRadio = this.createHTMLRadio("yaxis", "min", false, "min", "Min");
    var averageRadio = this.createHTMLRadio("yaxis", "average", false, "average", "Average");

    var sumLabel = document.createElement("LABEL");
    sumLabel.for ="sum";
    sumLabel.appendChild(document.createTextNode("Sum"));

    var meanLabel = document.createElement("LABEL");
    meanLabel.for ="mean";
    meanLabel.appendChild(document.createTextNode("Mean"));

    var sdLabel = document.createElement("LABEL");
    sdLabel.for ="sd";
    sdLabel.appendChild(document.createTextNode("Std Deviation"));

    var maxLabel = document.createElement("LABEL");
    maxLabel.for ="max";
    maxLabel.appendChild(document.createTextNode("Maximum"));

    var minLabel = document.createElement("LABEL");
    minLabel.for ="min";
    minLabel.appendChild(document.createTextNode("Minimum"));

    var averageLabel = document.createElement("LABEL");
    averageLabel.for ="average";
    averageLabel.appendChild(document.createTextNode("Average"));

    yAxisDiv.appendChild(sumLabel);
    yAxisDiv.appendChild(sumRadio);

    yAxisDiv.appendChild(meanLabel);
    yAxisDiv.appendChild(meanRadio);
    yAxisDiv.appendChild(this.createHTMLNewLine());

    yAxisDiv.appendChild(sdLabel);
    yAxisDiv.appendChild(sdRadio);

    yAxisDiv.appendChild(maxLabel);
    yAxisDiv.appendChild(maxRadio);
    yAxisDiv.appendChild(this.createHTMLNewLine());

    yAxisDiv.appendChild(minLabel);
    yAxisDiv.appendChild(minRadio);

    yAxisDiv.appendChild(averageLabel);
    yAxisDiv.appendChild(averageRadio);
    yAxisDiv.appendChild(this.createHTMLNewLine());

    var button = document.createElement("BUTTON");
    button.id = "createChartButton";
    button.appendChild(document.createTextNode("Create Chart"));

    var visualizationDiv = document.getElementById("visualizationDiv");
    var controlPanelDiv = document.createElement("DIV");
    controlPanelDiv.id = "controlPanelDiv";
    controlPanelDiv.appendChild(selectChart);
    controlPanelDiv.appendChild(xAxisDiv);
    controlPanelDiv.appendChild(yAxisDiv);
    controlPanelDiv.appendChild(button);
    visualizationDiv.appendChild(controlPanelDiv);
  }

  createVisualizationPanel(dataframe)
  {
    var chartDiv = document.createElement("DIV");
    chartDiv.id = "chartDiv";
    chartDiv.className = "chart";

    var canvas = document.createElement("CANVAS");
    canvas.id = "chartCanvas";
    canvas.height="300";
    canvas.width="600";
    chartDiv.appendChild(canvas);

    var visualizationDiv = document.getElementById("visualizationDiv");
    visualizationDiv.appendChild(chartDiv);

    console.log("created Div and canvas");

  }
}
