class ChartProto {
	constructor(dataframe, chart_type, chart_div, chartColumns, chartValues) {
       this.dataframe = dataframe;
       this.chart_type = chart_type;
       this.chart_div = chart_div;
       this.selected_columnX = chartColumns;
       this.selected_columnY = chartValues;
    }

		createChart(){
				var chartColumns = this.selected_columnX;
    		var chartValues = this.selected_columnY;

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
		                stacked:true,
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
