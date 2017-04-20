class ChartProto {
	constructor(dataframe, chart_type, chart_div, selected_columnX, selected_columnY) {
       this.dataframe = dataframe;
       this.chart_type = chart_type;
       this.chart_div = chart_div;
       this.selected_columnX = selected_columnX;
       this.selected_columnY = selected_columnY;
    }

		createChart(){
				var chartColumns = [];
    		var chartValues = [];
    		var result;

			  var displayData = this.dataframe.select(this.selected_columnX, this.selected_columnY);
				result = displayData.groupBy(this.selected_columnX).aggregate(group => group.sum(this.selected_columnX)); 
				console.log(result);

				for(var j=0; j<result.select(this.selected_columnX).toArray().length; j++){
						chartColumns[j] = result.select(this.selected_columnX).toArray()[j][0];
				}
				console.log(chartColumns);

				for(var i=0; i<result.select('aggregation').toArray().length; i++){
						chartValues[i] = result.select('aggregation').toArray()[i][0];
				}
				console.log(chartValues);

			  var ctx = document.getElementById(this.chart_div);
				var myChart = new Chart(ctx, {
			    type: this.chart_type,
			    data: {
			        labels: chartColumns,
			        datasets: [{
			            label: '# of Votes',
			            data: chartValues,
			            backgroundColor: [
			                'rgba(255, 99, 132, 0.2)',
			                'rgba(54, 162, 235, 0.2)',
			                'rgba(255, 206, 86, 0.2)',
			                'rgba(75, 192, 192, 0.2)',
			                'rgba(153, 102, 255, 0.2)',
			                'rgba(255, 159, 64, 0.2)'
			            ],
			            borderColor: [
			                'rgba(255,99,132,1)',
			                'rgba(54, 162, 235, 1)',
			                'rgba(255, 206, 86, 1)',
			                'rgba(75, 192, 192, 1)',
			                'rgba(153, 102, 255, 1)',
			                'rgba(255, 159, 64, 1)'
			            ],
			            borderWidth: 1
			        }]
			    },
			    options: {
			    	responsive: false,
			        animation:{
		            animateScale:true
		       },
		        scales: {
		        	xAxes: [{
		               // type: 'linear',
		               position: 'bottom',
		               // display: false
		               //stacked:true,
		                ticks: {
		                    min: 1,
		                    max: 1000
		                }
		            }],
		            yAxes: [{
		                ticks: {
		                    beginAtZero:true
		                }
		            }]
		          }
			    }
			});

		}

  }
