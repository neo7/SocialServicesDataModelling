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
    if(document.getElementById("chartDiv")!= null && document.getElementById("chartDiv")!= undefined){
      var chartDiv = document.getElementById("chartDiv");
      chartDiv.parentNode.removeChild(chartDiv);
    }
    this.createVisualizationPanel(this.dataframe);
  }

  createVisualizationPanel(dataframe)
  {
    var chartType = this.getChartType();
    var xAxisColumn = this.getAxisValue("x");
    var yAxisColumn = this.getAxisValue("y");

    var yAStackColumn = this.getAxisValue("ya");
    var yBStackColumn = this.getAxisValue("yb");

    var chartoption = this.getChartOption();

    var chartDataProvider = new ChartDataProvider()
    var chartData;
    switch (chartoption)
    {
      case 'default':
      chartData = chartDataProvider.getDefaultChartData(xAxisColumn, yAxisColumn, yAStackColumn, yBStackColumn, dataframe);
      break;

      case 'frequency':
      chartData = chartDataProvider.getGroupFrequencyChartData(xAxisColumn, dataframe);
      break;

      case 'sum':
      chartData = chartDataProvider.getGroupSumChartData(xAxisColumn, yAxisColumn, yAStackColumn, yBStackColumn, dataframe);
      break;

      case 'mean':
      chartData = chartDataProvider.getGroupMeanChartData(xAxisColumn, yAxisColumn, yAStackColumn, yBStackColumn, dataframe);
      break;

      case 'sd':
      chartData = chartDataProvider.getGroupSDChartData(xAxisColumn, yAxisColumn, yAStackColumn, yBStackColumn, dataframe);
      break;

      case 'max':
      chartData = chartDataProvider.getGroupMaxChartData(xAxisColumn, yAxisColumn, yAStackColumn, yBStackColumn, dataframe);
      break;

      case 'min':
      chartData = chartDataProvider.getGroupMinChartData(xAxisColumn, yAxisColumn, yAStackColumn, yBStackColumn, dataframe);
      break;

      case 'average':
      chartData = chartDataProvider.getGroupAverageChartData(xAxisColumn, yAxisColumn, yAStackColumn, yBStackColumn, dataframe);
      break;

    }

    console.log("creating chart");
    this.canvasUtil.createVisualizationPanel(dataframe);
    this.chart = new GenericChart(chartData.getXArray(),chartData.getYArray(),chartData.getYLabel())
    this.chart.createChart(chartType);
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

    var id = "select_"+ axis;


    var axisElement = document.getElementById(id);
    var axisValue = axisElement.options[axisElement.selectedIndex].value;
    if(axisValue == "null")
    {
      return null;
    }
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
