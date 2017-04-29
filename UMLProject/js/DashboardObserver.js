let dashboardObserverInstance = null;
class DashboardObserver
{
  constructor()
  {
    if (!dashboardObserverInstance)
    {
      dashboardObserverInstance = this;
    }
    this.canvasUtil = new HTMLCanvasUtils();
  }

  createDashboardElements(df)
  {
    this.createTable(df);
    this.createFilterPanel(df);
    this.createSqlFilterPanel(df);
    this.createFilterInstance(df);
    this.createChartDashboard(df);
  }

  createTable(df)
  { console.log("creating table");
    this.canvasUtil.createTableFromDataframe(df);
  }

  createFilterPanel(dataframe)
  {
    console.log("creating filter panel for");
    console.log(this.file_url);
    this.canvasUtil.createDropDownAndTextBox(dataframe);
  }

  createSqlFilterPanel(dataframe)
  {
    console.log("creating sql filter panel for");
    console.log(this.file_url);
    this.canvasUtil.createSqlFilterPanel(dataframe);
  }

  createFilterInstance(dataframe)
  {
      this.filterUtil = new FilterHandler(dataframe);
  }

  createChartDashboard(dataframe)
  {
    this.createChartControls(dataframe);
  }

  createChartControls(dataframe)
  {
    this.canvasUtil.createChartControls(dataframe);
    this.chartUtils = new ChartHandler(dataframe);
  }

}
