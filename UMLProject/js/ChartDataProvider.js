let instanceChartDataProvider = null;
class ChartDataProvider{
  constructo(){
    if (!instanceChartDataProvider) {
          instanceChartDataProvider = this;
        }
  }

  getDefaultChartData(x, y, ya, yb, dataframe)
  {
    const groupDF = dataframe.select(x, y, ya, yb);
    return this.createChartDataObject(groupDF);
  }
  getGroupFrequencyChartData(x, dataframe)
  {
    const groupDF = dataframe.groupBy(x).aggregate(group =>group.count());
    const renamedDF = groupDF.rename('aggregation', 'Frequency');
    return this.createChartDataObject(renamedDF);
  }

  getGroupSumChartData(x, y, ya, yb, dataframe)
  {
    const groupY = dataframe.groupBy(x).aggregate(group =>group.stat.sum(y));
    const groupYRen = groupY.rename('aggregation', y);

    if (ya!=null)
    {
      const groupYA = dataframe.groupBy(x).aggregate(group =>group.stat.sum(ya));
      const groupYARen = groupYA.rename('aggregation', ya);
    }

    if (yb!=null)
    {
      const groupYB = dataframe.groupBy(x).aggregate(group =>group.stat.sum(yb));
      const groupYBRen = groupYB.rename('aggregation', yb);
    }

    if(ya != null && yb != null)
    {
      const innerJoinA = groupYRen.join(groupYARen, x, 'inner');
      const innerJoinB = innerJoinA.join(groupYBRen, x, 'inner');
      return this.createChartDataObject(innerJoinB);
    }
    else if (ya != null && yb == null)
    {
      const innerJoinA = groupYRen.join(groupYARen, x, 'inner');
      return this.createChartDataObject(innerJoinA);
    }
    else
    {
      return this.createChartDataObject(groupYRen);
    }

  }

  getGroupMeanChartData(x, y, ya, yb, dataframe)
  {
    const groupY = dataframe.groupBy(x).aggregate(group =>group.stat.mean(y));
    const groupYRen = groupY.rename('aggregation', y);

    if (ya!=null)
    {
      const groupYA = dataframe.groupBy(x).aggregate(group =>group.stat.mean(ya));
      const groupYARen = groupYA.rename('aggregation', ya);
    }

    if (yb!=null)
    {
      const groupYB = dataframe.groupBy(x).aggregate(group =>group.stat.mean(yb));
      const groupYBRen = groupYB.rename('aggregation', yb);
    }

    if(ya != null && yb != null)
    {
      const innerJoinA = groupYRen.join(groupYARen, x, 'inner');
      const innerJoinB = innerJoinA.join(groupYBRen, x, 'inner');
      return this.createChartDataObject(innerJoinB);
    }
    else if (ya != null && yb == null)
    {
      const innerJoinA = groupYRen.join(groupYARen, x, 'inner');
      return this.createChartDataObject(innerJoinA);
    }
    else
    {
      return this.createChartDataObject(groupYRen);
    }
  }

  getGroupMinChartData(x, y, ya, yb, dataframe)
  {
    const groupY = dataframe.groupBy(x).aggregate(group =>group.stat.min(y));
    const groupYRen = groupY.rename('aggregation', y);

    if (ya!=null)
    {
      const groupYA = dataframe.groupBy(x).aggregate(group =>group.stat.min(ya));
      const groupYARen = groupYA.rename('aggregation', ya);
    }

    if (yb!=null)
    {
      const groupYB = dataframe.groupBy(x).aggregate(group =>group.stat.min(yb));
      const groupYBRen = groupYB.rename('aggregation', yb);
    }

    if(ya != null && yb != null)
    {
      const innerJoinA = groupYRen.join(groupYARen, x, 'inner');
      const innerJoinB = innerJoinA.join(groupYBRen, x, 'inner');
      return this.createChartDataObject(innerJoinB);
    }
    else if (ya != null && yb == null)
    {
      const innerJoinA = groupYRen.join(groupYARen, x, 'inner');
      return this.createChartDataObject(innerJoinA);
    }
    else
    {
      return this.createChartDataObject(groupYRen);
    }
  }
  getGroupSDChartData(x, y, ya, yb, dataframe)
  {
    const groupY = dataframe.groupBy(x).aggregate(group =>group.stat.sd(y));
    const groupYRen = groupY.rename('aggregation', y);

    if (ya!=null)
    {
      const groupYA = dataframe.groupBy(x).aggregate(group =>group.stat.sd(ya));
      const groupYARen = groupYA.rename('aggregation', ya);
    }

    if (yb!=null)
    {
      const groupYB = dataframe.groupBy(x).aggregate(group =>group.stat.sd(yb));
      const groupYBRen = groupYB.rename('aggregation', yb);
    }

    if(ya != null && yb != null)
    {
      const innerJoinA = groupYRen.join(groupYARen, x, 'inner');
      const innerJoinB = innerJoinA.join(groupYBRen, x, 'inner');
      return this.createChartDataObject(innerJoinB);
    }
    else if (ya != null && yb == null)
    {
      const innerJoinA = groupYRen.join(groupYARen, x, 'inner');
      return this.createChartDataObject(innerJoinA);
    }
    else
    {
      return this.createChartDataObject(groupYRen);
    }
  }

  getGroupAverageChartData(x, y, ya, yb, dataframe)
  {
    const groupY = dataframe.groupBy(x).aggregate(group =>group.stat.average(y));
    const groupYRen = groupY.rename('aggregation', y);

    if (ya!=null)
    {
      const groupYA = dataframe.groupBy(x).aggregate(group =>group.stat.average(ya));
      const groupYARen = groupYA.rename('aggregation', ya);
    }

    if (yb!=null)
    {
      const groupYB = dataframe.groupBy(x).aggregate(group =>group.stat.average(yb));
      const groupYBRen = groupYB.rename('aggregation', yb);
    }

    if(ya != null && yb != null)
    {
      const innerJoinA = groupYRen.join(groupYARen, x, 'inner');
      const innerJoinB = innerJoinA.join(groupYBRen, x, 'inner');
      return this.createChartDataObject(innerJoinB);
    }
    else if (ya != null && yb == null)
    {
      const innerJoinA = groupYRen.join(groupYARen, x, 'inner');
      return this.createChartDataObject(innerJoinA);
    }
    else
    {
      return this.createChartDataObject(groupYRen);
    }
  }

  createChartDataObject(groupDataFrame)
  {
    var rows = groupDataFrame.toArray();
    var x_array = [];
    var y_array = [[]];

    var columns = groupDataFrame.listColumns();
    console.log(columns);
    var x_lbl = columns[0];
    var y_lbl = [];
    for(var i=1; i < columns.length; i++)
    {
      y_lbl.push(columns[i]);
      y_array[i-1] = [];
    }

    for (var i = 0; i < rows.length; i++)
    {
      var rowElements = rows[i];
      x_array.push(rowElements[0]);
      rowElements.shift();

      for (var j=0; j<rowElements.length;j++)
      {
        y_array[j].push(rowElements[j]);
      }
    }

    var chartData = new ChartData(x_lbl, x_array, y_lbl, y_array);
    return chartData;

  }

}
