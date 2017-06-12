$(document).ready(function () {
    // Doghnut chart for Most View Category
    var donutCtx1 = document.getElementById("donutChartViews-1");
    createDonutChart(donutCtx1);
	
    var donutCtx2 = document.getElementById("donutChartViews-2");
    createDonutChart(donutCtx2);
	
    var donutCtx3 = document.getElementById("donutChartViews-3");
    createDonutChart(donutCtx3);
	
    var barCtx = document.getElementById("barChartViews");
    createBarChart(barCtx);	
});

// Get input file name and display
function getFileName(file) {
    var fileName = $(file).val().split('\\').pop();
	if(fileName == ""){
		$('.file-upload button').text('Upload File');
	} else {
		if(fileName.length > 15) fileName = fileName.substring(0,15)+'...';
		$('.file-upload button').text(fileName);
	}
}

var randomScalingFactor = function() {
	return Math.round(Math.random() * 100);
};

// Chart js settings
// Chart.defaults.global.defaultFontColor = '#ffffff';

// Create Doughnut chart for Most Viewed Category
function createDonutChart(ctx) {
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'doughnut',

        // The data for our dataset
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: "Views",
                backgroundColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)'
				],
                borderColor: '#FFF',
                borderWidth: 1,
                lineTension: 0,
                data: [
					randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
				],
            }]
        },

        // Configuration options go here
        options: {
            responsive: true,
            maintainAspectRatio: false,
            responsiveAnimationDuration: 400,  // in ms
			title: {
                text: 'Category',
                display: false,
                fontColor: '#fff',
                fontStyle: 'normal'
            },
            legend: {
                display: false,
                position: 'top',
                labels: {
                    // boxWidth: 20
                }
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    });
}


function createBarChart(ctx) {
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            datasets: [{
                label: 'Dataset',
                backgroundColor: 'rgba(255, 99, 132, 1)',
                borderColor: 'rgba(255, 255, 255, 1)',
                borderWidth: 1,
                data: [
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor(),
                    randomScalingFactor()
                ]
            }]
        },

        // Configuration options go here
        options: {
			responsive: true,
			legend: {
				position: 'top',
			},
			title: {
				display: true,
				text: 'Chart.js Bar Chart'
			}
		}
    });
}
