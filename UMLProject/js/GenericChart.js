class GenericChart {
		constructor( chartColumns, chartValues, valueColumns) {
			 
       this.chartColumns = chartColumns;
       this.chartValues = chartValues;
       this.valueColumns = valueColumns;
    }

		createChart(chart_type){
			var type = chart_type;
			if(type == "bar"){
				var barChart = new BarChart(this.chartColumns, this.chartValues, this.valueColumns);	
				barChart.createChart();
			}
			/*
			else if(type == "stacked"){
				var stackedChart = new StackedChart(this.chartColumns, this.chartValues, this.valueColumns);	
				stackedChart.createChart();
			}
			*/
			else if(type == "pie"){
				var pieChart = new PieChart(this.chartColumns, this.chartValues, this.valueColumns);	
				pieChart.createChart();
			}
			else if(type == "doughnut"){
				var doughnutChart = new DoughnutChart(this.chartColumns, this.chartValues, this.valueColumns);	
				doughnutChart.createChart();
			}
			else if(type == "line"){
				var lineChart = new LineChart(this.chartColumns, this.chartValues, this.valueColumns);	
				lineChart.createChart();
			}
			else if(type == "radar"){
				var radarChart = new RadarChart(this.chartColumns, this.chartValues, this.valueColumns);	
				radarChart.createChart();
			}
			
		}

  }
