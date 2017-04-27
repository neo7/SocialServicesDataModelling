let instanceChartDataProvider = null;
class ChartDataProvider{
  constructo(){
    if (!instanceChartDataProvider) {
          instanceChartDataProvider = this;
        }
  }

  getDefaultChartData(x, y, dataframe)
  {
    const groupDF = dataframe.select(x, y);
    return this.createChartDataObject(groupDF);
  }
  getGroupFrequencyChartData(x, dataframe)
  {
    const groupDF = dataframe.groupBy(x).aggregate(group =>group.count());
    const renamedDF = groupDF.rename('aggregation', 'Frequency');
    return this.createChartDataObject(renamedDF);
  }

  getGroupSumChartData(x, y, dataframe)
  {
    const groupDF = dataframe.groupBy(x).aggregate(group =>group.stat.sum(y));
    const renamedDF = groupDF.rename('aggregation', 'Sum');
    return this.createChartDataObject(renamedDF);
  }

  getGroupMeanChartData(x, y, dataframe)
  {
    const groupDF = dataframe.groupBy(x).aggregate(group =>group.stat.mean(y));
    const renamedDF = groupDF.rename('aggregation', 'Mean');
    return this.createChartDataObject(renamedDF);
  }
  getGroupMaxChartData(x, y, dataframe)
  {
    const groupDF = dataframe.groupBy(x).aggregate(group =>group.stat.max(y));
    const renamedDF = groupDF.rename('aggregation', 'Max');
    return this.createChartDataObject(renamedDF);
  }
  getGroupMinChartData(x, y, dataframe)
  {
    const groupDF = dataframe.groupBy(x).aggregate(group =>group.stat.min(y));
    const renamedDF = groupDF.rename('aggregation', 'Min');
    return this.createChartDataObject(renamedDF);
  }
  getGroupSDChartData(x, y, dataframe)
  {
    const groupDF = dataframe.groupBy(x).aggregate(group =>group.stat.sd(y));
    const renamedDF = groupDF.rename('aggregation', 'SD');
    return this.createChartDataObject(renamedDF);
  }

  getGroupAverageChartData(x, y, dataframe)
  {
    const groupDF = dataframe.groupBy(x).aggregate(group =>group.stat.average(y));
    const renamedDF = groupDF.rename('aggregation', 'Average');
    return this.createChartDataObject(renamedDF);
  }

  createChartDataObject(groupDataFrame)
  {
    var dataframeArray = groupDataFrame.toArray();
    var x_array = [];
    var y_array = [];
    var columns = groupDataFrame.listColumns();
    console.log(columns);
    var x_lbl = columns[0];
    var y_lbl = columns[1];

    for (var i = 0; i < dataframeArray.length; i++)
    {
      x_array[i] = dataframeArray[i][0];
      y_array[i] = dataframeArray[i][1];
    }

    var chartData = new ChartData(x_lbl, x_array, y_lbl, y_array);
    return chartData;

  }

}
