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
    this.createTable();
    //this.createColumnFilters();
  }

  createTable()
  {
    console.log(this.file_url);
    this.DataFrame.fromCSV(this.file_url).then(df => {
    this.canvasUtil.createTableFromDataframe(df);
    });
  }
  createColumnFilters(){
    console.log("creating filter for the columns");
    console.log(this.file_url);
    this.DataFrame.fromCSV(this.file_url).then(df => {
    this.canvasUtil.createColumnFilters(df);
    });

  }
  createChartDashboard()
  {

  }

}
