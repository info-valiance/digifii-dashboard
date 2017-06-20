$(document).ready(function () {
    // Doghnut chart for Most View Category
	
    var barCtx = document.getElementById("barChartViews");
    createBarChart(barCtx);
	
	$('#form').on("submit",function(){
		console.log("submit");
		$('#myModal').modal('hide');
		$('.after-upload').show();
	});
	
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
