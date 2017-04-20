class ChartHandler
{
  constructor(dataframe)
  {
    this.dataframe = dataframe;
    var createChartButton = document.getElementById("createChartButton");
    createChartButton.addEventListener("click", evt => this.createChartButtonHandler(evt));
  }

  createChartButtonHandler(evt)
  {
    console.log("inside chart control button handler");
    this.dashboardUtil = new Dashboard(null);
    this.dashboardUtil.createVisualizationPanel(this.dataframe);

  }
}
