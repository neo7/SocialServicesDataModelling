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



        var checkbox = new HTMLCanvasTemplate().createHTMLCheckBox(columns[i], columns[i], true, "columnCheckbox", false);


        headerTD.appendChild(new HTMLCanvasTemplate().createHTMLNewLine());
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

    selectDropDown.setAttribute("class", "dropdown_l");


    var selectDropDownComparison = document.createElement("SELECT");
    selectDropDownComparison.id = "select_comparison";
    selectDropDownComparison.name = "select comparison";

    selectDropDownComparison.setAttribute("class", "dropdown_s");


    var columns = dataframe.listColumns();
    var blankOption = new HTMLCanvasTemplate().createHTMLSelectOption("blankoption", "Select Filter", "", "");

    selectDropDown.appendChild(blankOption);
    for (var i = 0; i< columns.length; i++)
    {
      var option = new HTMLCanvasTemplate().createHTMLSelectOption(columns[i], columns[i], columns[i], columns[i])
      selectDropDown.appendChild(option);
    }
    var blankcpz = new HTMLCanvasTemplate().createHTMLSelectOption("blankoption", "", "", "");
    var gt = new HTMLCanvasTemplate().createHTMLSelectOption("gt", ">", ">", ">");
    var lt = new HTMLCanvasTemplate().createHTMLSelectOption("lt", "<", "<", "<");
    var eq = new HTMLCanvasTemplate().createHTMLSelectOption("eq", "=", "=", "=");

    selectDropDownComparison.appendChild(eq);
    selectDropDownComparison.appendChild(lt);
    selectDropDownComparison.appendChild(gt);

    dynamicFilterDiv.appendChild(selectDropDown);
    dynamicFilterDiv.appendChild(selectDropDownComparison);

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

  createChartControls(dataframe)
  {
    var selectChart = document.createElement("SELECT");
    selectChart.id = "select_chart"
    selectChart.name = "select_chart"
    selectChart.setAttribute("class", "dropdown_l");


    var lineChartOption = new HTMLCanvasTemplate().createHTMLSelectOption("lineChartOption", "Line Chart", "line", "lineChartOption");
    var barChartOption = new HTMLCanvasTemplate().createHTMLSelectOption("barChartOption", "Bar Chart", "bar", "barChartOption");
    var pieChartOption = new HTMLCanvasTemplate().createHTMLSelectOption("pieChartOption", "Pie Chart", "pie", "pieChartOption");
    var stackedChartOption = new HTMLCanvasTemplate().createHTMLSelectOption("stackedChartOption", "Stacked Chart", "bar", "stackedChartOption");
    var radarChartOption = new HTMLCanvasTemplate().createHTMLSelectOption("radarChartOption", "Radar Chart", "radar", "radarChartOption");

    var blankOption = new HTMLCanvasTemplate().createHTMLSelectOption("Select Chart Type", "Select Chart Type", "", "");

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
    xselectDropDown.setAttribute("class", "dropdown_l");


    var columns = dataframe.listColumns();
    var xblankOption = new HTMLCanvasTemplate().createHTMLSelectOption("X-Axis", "X-Axis", "X-Axis", "X-Axis");

    xselectDropDown.appendChild(xblankOption);
    for (var i = 0; i< columns.length; i++)
    {
      var xoption = new HTMLCanvasTemplate().createHTMLSelectOption(columns[i], columns[i], columns[i], columns[i])
      xselectDropDown.appendChild(xoption);
    }

    xAxisDiv.appendChild(xselectDropDown);

    var frequencyCheckbox = new HTMLCanvasTemplate().createHTMLCheckBox("xaxis", "frequency", false, "frequency", "Frequency");

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
    yselectDropDown.setAttribute("class", "dropdown_l");


    var yblankOption = new HTMLCanvasTemplate().createHTMLSelectOption("Y-Axis", "Y-Axis", "Y-Axis", "Y-Axis");

    yselectDropDown.appendChild(yblankOption);
    for (var i = 0; i< columns.length; i++)
    {
      var yoption = new HTMLCanvasTemplate().createHTMLSelectOption(columns[i], columns[i], columns[i], columns[i])
      yselectDropDown.appendChild(yoption);
    }

    var yastackDropDown = document.createElement("SELECT");
    yastackDropDown.id = "select_ya"
    yastackDropDown.name = "select_ya"
    yastackDropDown.setAttribute("class", "dropdown_l");


    var yastackBlankOption = new HTMLCanvasTemplate().createHTMLSelectOption("Stack-A-Y-Axis", "Stack-A-Y-Axis", null, "Stack-A-Y-Axis");

    yastackDropDown.appendChild(yastackBlankOption);
    for (var i = 0; i< columns.length; i++)
    {
      var yoption = new HTMLCanvasTemplate().createHTMLSelectOption(columns[i], columns[i], columns[i], columns[i])
      yastackDropDown.appendChild(yoption);
    }

    var ybstackDropDown = document.createElement("SELECT");
    ybstackDropDown.id = "select_yb"
    ybstackDropDown.name = "select_yb"
    ybstackDropDown.setAttribute("class", "dropdown_l");


    var ybstackBlankOption = new HTMLCanvasTemplate().createHTMLSelectOption("Stack-B-Y-Axis", "Stack-B-Y-Axis", null, "Stack-B-Y-Axis");

    ybstackDropDown.appendChild(ybstackBlankOption);
    for (var i = 0; i< columns.length; i++)
    {
      var yoption = new HTMLCanvasTemplate().createHTMLSelectOption(columns[i], columns[i], columns[i], columns[i])
      ybstackDropDown.appendChild(yoption);
    }

    yAxisDiv.appendChild(yselectDropDown);
    yAxisDiv.appendChild(yastackDropDown);
    yAxisDiv.appendChild(ybstackDropDown);
    yAxisDiv.appendChild(new HTMLCanvasTemplate().createHTMLNewLine());

    var sumRadio = new HTMLCanvasTemplate().createHTMLRadio("yaxis", "sum", false, "sum", "Sum");
    var meanRadio = new HTMLCanvasTemplate().createHTMLRadio("yaxis", "mean", false, "mean", "Mean");
    var sdRadio = new HTMLCanvasTemplate().createHTMLRadio("yaxis", "sd", false, "sd", "Std Deviation");
    var maxRadio = new HTMLCanvasTemplate().createHTMLRadio("yaxis", "max", false, "max", "Max");
    var minRadio = new HTMLCanvasTemplate().createHTMLRadio("yaxis", "min", false, "min", "Min");
    var averageRadio = new HTMLCanvasTemplate().createHTMLRadio("yaxis", "average", false, "average", "Average");

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
    // Sangwon
    yAxisDiv.appendChild(document.createTextNode ("  "));
    // Sangwon
    yAxisDiv.appendChild(sumRadio);
    // Sangwon
    yAxisDiv.appendChild(document.createTextNode (" | "));
    // Sangwon

    yAxisDiv.appendChild(meanLabel);
    // Sangwon
    yAxisDiv.appendChild(document.createTextNode ("  "));
    // Sangwon
    yAxisDiv.appendChild(meanRadio);
    // Sangwon
    yAxisDiv.appendChild(document.createTextNode (" | "));
    //yAxisDiv.appendChild(new HTMLCanvasTemplate().createHTMLNewLine());
    // Sangwon

    yAxisDiv.appendChild(sdLabel);
    // Sangwon
    yAxisDiv.appendChild(document.createTextNode ("  "));
    // Sangwon
    yAxisDiv.appendChild(sdRadio);
    // Sangwon
    yAxisDiv.appendChild(document.createTextNode (" | "));
    // Sangwon

    yAxisDiv.appendChild(maxLabel);
    // Sangwon
    yAxisDiv.appendChild(document.createTextNode ("  "));
    // Sangwon
    yAxisDiv.appendChild(maxRadio);
    // Sangwon
    yAxisDiv.appendChild(document.createTextNode (" | "));
    //yAxisDiv.appendChild(new HTMLCanvasTemplate().createHTMLNewLine());
    // Sangwon

    yAxisDiv.appendChild(minLabel);
    // Sangwon
    yAxisDiv.appendChild(document.createTextNode ("  "));
    // Sangwon
    yAxisDiv.appendChild(minRadio);
    // Sangwon
    yAxisDiv.appendChild(document.createTextNode (" | "));
    // Sangwon

    yAxisDiv.appendChild(averageLabel);
    // Sangwon
    yAxisDiv.appendChild(document.createTextNode ("  "));
    // Sangwon
    yAxisDiv.appendChild(averageRadio);
    // Sangwon
    yAxisDiv.appendChild(new HTMLCanvasTemplate().createHTMLNewLine());
    yAxisDiv.appendChild(new HTMLCanvasTemplate().createHTMLNewLine());
    // Sangwon

    var button = document.createElement("BUTTON");
    button.id = "createChartButton";
    button.setAttribute("class","btn_s");
    button.appendChild(document.createTextNode("Create Chart"));

    var visualizationDiv = document.getElementById("visualizationDiv");
    var controlPanelDiv = document.createElement("DIV");
    controlPanelDiv.id = "controlPanelDiv";
    controlPanelDiv.appendChild(selectChart);
    controlPanelDiv.appendChild(xAxisDiv);
    controlPanelDiv.appendChild(yAxisDiv);
    controlPanelDiv.appendChild(button);
    controlPanelDiv.appendChild(new HTMLCanvasTemplate().createHTMLNewLine());
    controlPanelDiv.appendChild(new HTMLCanvasTemplate().createHTMLNewLine());

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
