class DataframeObject{
  constructor(dataframe)
  {
    this.columns = dataFrame.listColumns();
    this.rows = dataFrame.toArray()
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
