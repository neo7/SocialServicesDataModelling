class ChartHandler
{
  constructor(dataframe)
  {
    this.dataframe = dataframe;
    var createChartButton = document.getElementById("createChartButton");
    createChartButton.addEventListener("click", evt => this.createChartButtonHandler(evt));
    this.canvasUtil = new HTMLCanvasUtils();
  }

  createChartButtonHandler(evt)
  {
    console.log("inside chart control button handler");
    this.createVisualizationPanel(this.dataframe);
  }

  createVisualizationPanel(dataframe)
  {
    var chartType = this.getChartType();
    var xAxisColumn = this.getAxisValue("x");
    var yAxisColumn = this.getAxisValue("y");
    var chartoption = this.getChartOption();

    var chartDataProvider = new ChartDataProvider()
    var chartData;
    switch (chartoption)
    {
      case 'default':
      chartData = chartDataProvider.getDefaultChartData(xAxisColumn, yAxisColumn, dataframe);
      break;

      case 'frequency':
      chartData = chartDataProvider.getGroupFrequencyChartData(xAxisColumn, dataframe);
      break;

      case 'sum':
      chartData = chartDataProvider.getGroupSumChartData(xAxisColumn, yAxisColumn, dataframe);
      break;

      case 'mean':
      chartData = chartDataProvider.getGroupMeanChartData(xAxisColumn, yAxisColumn, dataframe);
      break;

      case 'sd':
      chartData = chartDataProvider.getGroupSDChartData(xAxisColumn, yAxisColumn, dataframe);
      break;

      case 'max':
      chartData = chartDataProvider.getGroupMaxChartData(xAxisColumn, yAxisColumn, dataframe);
      break;

      case 'min':
      chartData = chartDataProvider.getGroupMinChartData(xAxisColumn, yAxisColumn, dataframe);
      break;

      case 'average':
      chartData = chartDataProvider.getGroupAverageChartData(xAxisColumn, yAxisColumn, dataframe);
      break;

    }

    console.log("creating chart");
    this.canvasUtil.createVisualizationPanel(dataframe);
    this.chart = new ChartProto(dataframe, chartType, "chartCanvas", chartData.getXArray(), chartData.getYArray())
    this.chart.createChart();
    console.log("end creating chart");
  }

  getChartType()
  {
    var chartDropdownElement = document.getElementById("select_chart");
    var chartType = chartDropdownElement.options[chartDropdownElement.selectedIndex].value;
    return chartType;
  }

  getAxisValue(axis)
  {
    var id = null;
    if (axis == "x")
    {
      id = "select_x";
    }
    else
    {
      id = "select_y";
    }

    var axisElement = document.getElementById(id);
    var axisValue = axisElement.options[axisElement.selectedIndex].value;
    return axisValue;
  }

  getChartOption()
  {
    var frequency = document.getElementById("frequency");
    if (frequency.checked)
    {
      return frequency.value;
    }

    var radioValues = document.getElementsByName("yaxis");
    for (var i = 0; i < radioValues.length; i++)
    {
      if(radioValues[i].checked)
      {
        return radioValues[i].value;
      }
    }

    return 'default';
  }
}
