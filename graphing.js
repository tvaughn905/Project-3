const url = "http://localhost:127.0.0.1:5000/"

const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

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