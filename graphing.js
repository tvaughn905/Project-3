const url = "http://localhost:5000/industry"
const url2= "http://localhost:5000/ethnicity"

const data = d3.json(url).then(function(data) {console.log(data)});

const data2 = d3.json(url2).then(function(data2) {console.log(data2)});
console.log(data)
function start() {

    // pull Json data
    d3.json(url).then(function(data) {

        // select drop down from html
        let selection = d3.select("#selDataset");
        
        // map data and apply to drop down
        data.industry.map(function(set) {
            return selection.append("option").text(set)
        });
     
    });
};
document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('bar', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Unemployment by Industry Type'
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
            title: {
                text: 'Fruit Eaten'
            }
        },
        series: [{
            name: 'Jane',
            data: [1, 0, 4]
        }, {
            name: 'John',
            data: [5, 7, 3]
        }]
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('line', {
        chart: {
            type: 'line'
        },
        title: {
            text: '??????????????'
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [{
            name: 'Jane',
            data: [1, 0, 4]
        }, {
            name: 'John',
            data: [5, 7, 3]
        }]
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('pie', {
        chart: {
            type: 'pie'
        },
        title: {
            text: '??????????????????????'
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [{
            name: 'Jane',
            data: [1, 0, 4]
        }, {
            name: 'John',
            data: [5, 7, 3]
        }]
    });
});
