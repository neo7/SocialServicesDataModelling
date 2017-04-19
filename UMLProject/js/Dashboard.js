class Dashboard
{
  constructor(file_url)
  {
      this.DataFrame = dfjs.DataFrame;
      this.file_url = file_url;
      this.canvasUtil = new HTMLCanvasUtils();
      this.populateDashboard();

  }

  populateDashboard()
  {
    this.DataFrame.fromCSV(this.file_url).then(df => {
    this.createTable(df);
    this.createFilterPanel(df);
    this.createSqlFilterPanel(df);
    this.createFilterInstance(df);
    });

  }

  createTable(df)
  {
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

  createChartDashboard()
  {

  }

}
