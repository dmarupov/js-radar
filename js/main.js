// const CHART = document.getElementById("lineChart");
const CHART = document.getElementById("radarChart");
console.log("Line 2: " + CHART);
console.log(CHART);
// let lineChart = new Chart(CHART, {
//     type: 'line',
//     data: {
//         labels: ["January", "February", "March", "April", "May", "June", "July"],
//         datasets: [
//             {
//                 label: "My First Dataset",
//                 fill: false,
//                 data: [65, 59, 80, 81, 56, 55, 40],
//                 borderColor: "rgb(75, 192, 192)",
//                 lineTension: 0.1
//             }
//         ]
//     }
// })

// data: {
//     labels: ['Running', 'Swimming', 'Eating', 'Cycling'],
//         datasets: [{
//             data: [20, 10, 4, 2]
//         }]
// };

// data: { 
//     labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"], 
//     datasets: [
//         { 
//             label: "My First Dataset", 
//             data: [65, 59, 90, 81, 56, 55, 40], 
//             fill: true, 
//             backgroundColor: "rgba(255, 99, 132, 0.2)", 
//             borderColor: "rgb(255, 99, 132)", 
//             pointBackgroundColor: "rgb(255, 99, 132)", 
//             pointBorderColor: "#fff", 
//             pointHoverBackgroundColor: "#fff", 
//             pointHoverBorderColor: "rgb(255, 99, 132)" }, 
//             { 
//                 label: "My Second Dataset", 
//                 data: [28, 48, 40, 19, 96, 27, 100], 
//                 fill: true, 
//                 backgroundColor: "rgba(54, 162, 235, 0.2)", 
//                 borderColor: "rgb(54, 162, 235)", 
//                 pointBackgroundColor: "rgb(54, 162, 235)", 
//                 pointBorderColor: "#fff", 
//                 pointHoverBackgroundColor: "#fff", 
//                 pointHoverBorderColor: "rgb(54, 162, 235)" 
//             }
//     ] 
// }

// new Chart(document.getElementById("chartjs-3"), { "type": "radar", "data": { "labels": ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"], "datasets": [{ "label": "My First Dataset", "data": [65, 59, 90, 81, 56, 55, 40], "fill": true, "backgroundColor": "rgba(255, 99, 132, 0.2)", "borderColor": "rgb(255, 99, 132)", "pointBackgroundColor": "rgb(255, 99, 132)", "pointBorderColor": "#fff", "pointHoverBackgroundColor": "#fff", "pointHoverBorderColor": "rgb(255, 99, 132)" }, { "label": "My Second Dataset", "data": [28, 48, 40, 19, 96, 27, 100], "fill": true, "backgroundColor": "rgba(54, 162, 235, 0.2)", "borderColor": "rgb(54, 162, 235)", "pointBackgroundColor": "rgb(54, 162, 235)", "pointBorderColor": "#fff", "pointHoverBackgroundColor": "#fff", "pointHoverBorderColor": "rgb(54, 162, 235)" }] }, "options": { "elements": { "line": { "tension": 0, "borderWidth": 3 } } } });

// let options = {
//     scale: {
//         // Hides the scale
//         display: false
//     }
// };

let radarChart = new Chart(CHART, {
    type: 'radar',
    data: {
        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
        datasets: [
            {
                label: "My First Dataset",
                data: [65, 59, 90, 81, 56, 55, 40],
                fill: true,
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgb(255, 99, 132)",
                pointBackgroundColor: "rgb(255, 99, 132)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgb(255, 99, 132)"
            },
            {
                label: "My Second Dataset",
                data: [28, 48, 40, 19, 96, 27, 100],
                fill: true,
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                borderColor: "rgb(54, 162, 235)",
                pointBackgroundColor: "rgb(54, 162, 235)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgb(54, 162, 235)"
            }
        ]
    }
});


// data: {
//     labels: ["January", "February", "March", "April", "May", "June", "July"],
//     datasets: [
//         {
//             label: "My First Dataset",
//             fill: false,
//             data: [65, 59, 80, 81, 56, 55, 40],
//             borderColor: "rgb(75, 192, 192)",
//             lineTension: 0.1
//         }
//     ]
// }

// data: {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [{
//         label: '# of Votes',
//         data: [12, 19, 3, 5, 2, 3],
//         backgroundColor: [
//             'rgba(255, 99, 132, 0.2)',
//             'rgba(54, 162, 235, 0.2)',
//             'rgba(255, 206, 86, 0.2)',
//             'rgba(75, 192, 192, 0.2)',
//             'rgba(153, 102, 255, 0.2)',
//             'rgba(255, 159, 64, 0.2)'
//         ],
//         borderColor: [
//             'rgba(255, 99, 132, 1)',
//             'rgba(54, 162, 235, 1)',
//             'rgba(255, 206, 86, 1)',
//             'rgba(75, 192, 192, 1)',
//             'rgba(153, 102, 255, 1)',
//             'rgba(255, 159, 64, 1)'
//         ],
//         borderWidth: 1
//     }]
// }