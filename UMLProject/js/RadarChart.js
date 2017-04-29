class RadarChart extends GenericChart {

		constructor( chartColumns, chartValues, valueColumns) {
        super(chartColumns, chartValues, valueColumns);
        this.chart_type = "radar";
    }

    createChart(){

				var backgroundColor = [];
				var borderColor = [];
				var red,green,blue,alpha;

				var dataset = [];
				for(var i=0;i<this.valueColumns.length;i++){
					red = Math.floor((Math.random()*255)+0);
					green = Math.floor((Math.random()*255)+0);
					blue = Math.floor((Math.random()*255)+0);
					alpha = 0.5;
					backgroundColor[i] = 'rgba('+red+','+green+','+blue+','+alpha+')';
					borderColor[i] = 'rgba('+red+','+green+','+blue+','+'1'+')';
					var obj = {};
					obj["label"] = this.valueColumns[i];
					obj["data"] = this.chartValues[i];
					obj["backgroundColor"] = backgroundColor[i];
					obj["borderColor"] = borderColor[i];
					obj["borderWidth"] = 1;
					obj["fill"] = true;
					obj["borderWidth"] = 1;
					obj["pointBorderColor"] = "#fff";
					obj["pointHoverBackgroundColor"] = "#fff";
					dataset.push(obj);
				}

				var ctx = document.getElementById("chartCanvas");
				var myChart = new Chart(ctx, {
					    type: this.chart_type,
					    data: {
					        labels: this.chartColumns,
					        datasets: dataset
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
				               			beginAtZero:true,
				                    min: 1,
				                    max: 1000
				                }
				            }],
				            yAxes: [{
				            	 stacked: true,
				                ticks: {
				                    beginAtZero:true
				                }
				            }]
				          }
					    }
				});

		}

}
