class DataframeObject{
  constructor(dataframe)
  {
    this.columns = dataframe.listColumns();
    this.rows = dataframe.toArray()
    this.dataframe = dataframe;
  }

  getColumns()
  {
    return this.columns;
  }
  getRows()
  {
    return this.rows;
  }
  getDataFrameObject()
  {
    return this.dataframe;
  }
}
