class Dashboard
{
  constructor(file_url)
  {
    if (file_url != null)
    {
      this.DataFrame = dfjs.DataFrame;
      this.file_url = file_url;
      this.canvasUtil = new HTMLCanvasUtils();
      this.populateDashboard();
    }
    else
    {
      this.canvasUtil = new HTMLCanvasUtils();
    }
  }

  populateDashboard()
  {
    this.DataFrame.fromCSV(this.file_url).then(df => {
    this.createDashboardElements(df);
    });

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
  createFilterPanel(dataframe){
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

  createVisualizationPanel(dataframe)
  {
    console.log("creating chart");
    this.canvasUtil.createVisualizationPanel(dataframe);
    this.chart = new ChartProto(dataframe, "bar", "chartCanvas", "Year", "HomeDelieveredMeals")
    this.chart.createChart();
    console.log("end creating chart");
  }

}
