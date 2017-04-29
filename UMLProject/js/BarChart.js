class BarChart extends GenericChart {
	
		constructor( chartColumns, chartValues, valueColumns) {
        super(chartColumns, chartValues, valueColumns);       
        this.chart_type = "bar";
    }
    
    createChart(){
    		console.log("---------------");
				console.log(this.valueColumns);
				console.log(this.chartValues);
				console.log(this.chartColumns);
				console.log(this.chart_type);
				console.log("---------------");
				var backgroundColor = [];
				var borderColor = [];
				var red,green,blue,alpha;
				for(var j=0;j<this.valueColumns[0].length;j++){
					red = Math.floor((Math.random()*255)+0);
					green = Math.floor((Math.random()*255)+0);
					blue = Math.floor((Math.random()*255)+0);
					alpha = 0.5;
					backgroundColor[j] = 'rgba('+red+','+green+','+blue+','+alpha+')';
					borderColor[j] = 'rgba('+red+','+green+','+blue+','+'1'+')';
				}  
					
				var dataset = [];
				for(var i=0;i<this.valueColumns.length;i++){
					var obj = {};
					obj["label"] = this.valueColumns[i];
					obj["data"] = this.chartValues[i];
					obj["backgroundColor"] = backgroundColor;
					obj["borderColor"] = borderColor;
					obj["borderWidth"] = 1;
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