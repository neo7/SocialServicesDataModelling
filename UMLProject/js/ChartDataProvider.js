let instanceChartDataProvider = null;
class ChartDataProvider{
  constructor(){
    if (!instanceChartDataProvider) {
          instanceChartDataProvider = this;
        }
  }

  getDefaultChartData(x, y, ya, yb, dataframe)
  {
    var groupDF = dataframe.select(x, y, ya, yb);
    return this.createChartDataObject(groupDF);
  }
  getGroupFrequencyChartData(x, dataframe)
  {
    var groupDF = dataframe.groupBy(x).aggregate(group =>group.count());
    var renamedDF = groupDF.rename('aggregation', 'Frequency');
    return this.createChartDataObject(renamedDF);
  }

  getGroupSumChartData(x, y, ya, yb, dataframe)
  {
    var groupYARen = null;
    var groupYBRen = null;
    var groupY = dataframe.groupBy(x).aggregate(group =>group.stat.sum(y));
    var groupYRen = groupY.rename('aggregation', y);

    if (ya!=null)
    {
      var groupYA = dataframe.groupBy(x).aggregate(group =>group.stat.sum(ya));
      groupYARen = groupYA.rename('aggregation', ya);
    }

    if (yb!=null)
    {
      var groupYB = dataframe.groupBy(x).aggregate(group =>group.stat.sum(yb));
      groupYBRen = groupYB.rename('aggregation', yb);
    }

    if(ya != null && yb != null)
    {
      var innerJoinA = groupYRen.join(groupYARen, x, 'inner');
      var innerJoinB = innerJoinA.join(groupYBRen, x, 'inner');
      return this.createChartDataObject(innerJoinB);
    }
    else if (ya != null && yb == null)
    {
      var innerJoinA = groupYRen.join(groupYARen, x, 'inner');
      return this.createChartDataObject(innerJoinA);
    }
    else
    {
      return this.createChartDataObject(groupYRen);
    }

  }

  getGroupMeanChartData(x, y, ya, yb, dataframe)
  {
    var groupYARen = null;
    var groupYBRen = null;
    var groupY = dataframe.groupBy(x).aggregate(group =>group.stat.mean(y));
    var groupYRen = groupY.rename('aggregation', y);

    if (ya!=null)
    {
      var groupYA = dataframe.groupBy(x).aggregate(group =>group.stat.mean(ya));
      var groupYARen = groupYA.rename('aggregation', ya);
    }

    if (yb!=null)
    {
      var groupYB = dataframe.groupBy(x).aggregate(group =>group.stat.mean(yb));
      var groupYBRen = groupYB.rename('aggregation', yb);
    }

    if(ya != null && yb != null)
    {
      var innerJoinA = groupYRen.join(groupYARen, x, 'inner');
      var innerJoinB = innerJoinA.join(groupYBRen, x, 'inner');
      return this.createChartDataObject(innerJoinB);
    }
    else if (ya != null && yb == null)
    {
      var innerJoinA = groupYRen.join(groupYARen, x, 'inner');
      return this.createChartDataObject(innerJoinA);
    }
    else
    {
      return this.createChartDataObject(groupYRen);
    }
  }

  getGroupMinChartData(x, y, ya, yb, dataframe)
  {
    var groupYARen = null;
    var groupYBRen = null;
    var groupY = dataframe.groupBy(x).aggregate(group =>group.stat.min(y));
    var groupYRen = groupY.rename('aggregation', y);

    if (ya!=null)
    {
      var groupYA = dataframe.groupBy(x).aggregate(group =>group.stat.min(ya));
      var groupYARen = groupYA.rename('aggregation', ya);
    }

    if (yb!=null)
    {
      var groupYB = dataframe.groupBy(x).aggregate(group =>group.stat.min(yb));
      var groupYBRen = groupYB.rename('aggregation', yb);
    }

    if(ya != null && yb != null)
    {
      var innerJoinA = groupYRen.join(groupYARen, x, 'inner');
      var innerJoinB = innerJoinA.join(groupYBRen, x, 'inner');
      return this.createChartDataObject(innerJoinB);
    }
    else if (ya != null && yb == null)
    {
      var innerJoinA = groupYRen.join(groupYARen, x, 'inner');
      return this.createChartDataObject(innerJoinA);
    }
    else
    {
      return this.createChartDataObject(groupYRen);
    }
  }

  getGroupMaxChartData(x, y, ya, yb, dataframe)
  {
    var groupYARen = null;
    var groupYBRen = null;
    var groupY = dataframe.groupBy(x).aggregate(group =>group.stat.max(y));
    var groupYRen = groupY.rename('aggregation', y);

    if (ya!=null)
    {
      var groupYA = dataframe.groupBy(x).aggregate(group =>group.stat.max(ya));
      var groupYARen = groupYA.rename('aggregation', ya);
    }

    if (yb!=null)
    {
      var groupYB = dataframe.groupBy(x).aggregate(group =>group.stat.max(yb));
      var groupYBRen = groupYB.rename('aggregation', yb);
    }

    if(ya != null && yb != null)
    {
      var innerJoinA = groupYRen.join(groupYARen, x, 'inner');
      var innerJoinB = innerJoinA.join(groupYBRen, x, 'inner');
      return this.createChartDataObject(innerJoinB);
    }
    else if (ya != null && yb == null)
    {
      var innerJoinA = groupYRen.join(groupYARen, x, 'inner');
      return this.createChartDataObject(innerJoinA);
    }
    else
    {
      return this.createChartDataObject(groupYRen);
    }
  }


  getGroupSDChartData(x, y, ya, yb, dataframe)
  {
    var groupYARen = null;
    var groupYBRen = null;
    var groupY = dataframe.groupBy(x).aggregate(group =>group.stat.sd(y));
    var groupYRen = groupY.rename('aggregation', y);

    if (ya!=null)
    {
      var groupYA = dataframe.groupBy(x).aggregate(group =>group.stat.sd(ya));
      var groupYARen = groupYA.rename('aggregation', ya);
    }

    if (yb!=null)
    {
      var groupYB = dataframe.groupBy(x).aggregate(group =>group.stat.sd(yb));
      var groupYBRen = groupYB.rename('aggregation', yb);
    }

    if(ya != null && yb != null)
    {
      var innerJoinA = groupYRen.join(groupYARen, x, 'inner');
      var innerJoinB = innerJoinA.join(groupYBRen, x, 'inner');
      return this.createChartDataObject(innerJoinB);
    }
    else if (ya != null && yb == null)
    {
      var innerJoinA = groupYRen.join(groupYARen, x, 'inner');
      return this.createChartDataObject(innerJoinA);
    }
    else
    {
      return this.createChartDataObject(groupYRen);
    }
  }

  getGroupAverageChartData(x, y, ya, yb, dataframe)
  {
    var groupYARen = null;
    var groupYBRen = null;
    var groupY = dataframe.groupBy(x).aggregate(group =>group.stat.average(y));
    var groupYRen = groupY.rename('aggregation', y);

    if (ya!=null)
    {
      var groupYA = dataframe.groupBy(x).aggregate(group =>group.stat.average(ya));
      groupYARen = groupYA.rename('aggregation', ya);
    }

    if (yb!=null)
    {
      var groupYB = dataframe.groupBy(x).aggregate(group =>group.stat.average(yb));
      groupYBRen = groupYB.rename('aggregation', yb);
    }

    if(ya != null && yb != null)
    {
      var innerJoinA = groupYRen.join(groupYARen, x, 'inner');
      var innerJoinB = innerJoinA.join(groupYBRen, x, 'inner');
      return this.createChartDataObject(innerJoinB);
    }
    else if (ya != null && yb == null)
    {
      var innerJoinA = groupYRen.join(groupYARen, x, 'inner');
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
