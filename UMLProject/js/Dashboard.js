class Dashboard
{
  constructor(file_url)
  {
    if (file_url != null)
    {
      this.DataFrame = dfjs.DataFrame;
      this.file_url = file_url;
      this.populateDashboard();
      this.dashboardObserver = new DashboardObserver();
    }
  }

  populateDashboard()
  {
    this.DataFrame.fromCSV(this.file_url).then(df => {
    this.dashboardObserver.createDashboardElements(df);
    });

  }
}
