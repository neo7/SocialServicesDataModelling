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
  createChartDashboard()
  {

  }

}
