const url = "http://localhost:5000/industry"
const url2= "http://localhost:5000/ethnicity"

const data = d3.json(url).then(function(data) {console.log(data)});

const data2 = d3.json(url2).then(function(data2) {console.log(data2)});
var industry_list = []
var fy14_list = []

function start() {

    // pull Json data
    d3.json(url).then(function(data) {
        

        for (let i = 0; i < data.length; i++)    
            industry_list.push(data[i].industry)
        for (let i = 0; i < data.length; i++)    
            fy14_list.push(data[i].fy14)    

        // select drop down from html
            let selection = d3.select("#selDataset");

        // map data and apply to drop down
            industry_list.map(function(set) {
            return selection.append("option").text(set)
        });
     
    });
    console.log(industry_list)
    console.log(fy14_list)
    document.addEventListener('DOMContentLoaded', function () {
        const chart = Highcharts.chart('bar', {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Unemployment by Industry Type'
            },
            xAxis: {
                categories: industry_list
            },
            yAxis: {
                title: {
                    text: 'Unemployment in 1000s'
                }
            },
            series: [{
                name: "FY14",
                data: [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5]//fy14_list
            }, {
                name: "FY15",
                data: [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5]//fy14_list
            }]
        });
    });
};

///function graphs(set) {
    


    // Pull Json data and create filter
d3.json(url).then(function(data) {
        //let industry = data[0];
    for (let i = 0; i < data.length; i++)    
        industry_list.push(data[i].industry)
        for (let i = 0; i < data.length; i++)    
            fy14_list.push(data[i].fy14)



});
//};

//let trace1 = {
//    x: ["giraffes", "orangutans", 'monkeys'],
//    y: [20, 14, 23],
//    type: "bar",
    //orientation:,
//text:
//};

//let layout1 = {
//};

//let data1 = [trace1];

//Plotly.newPlot("bar", data1, layout1);


start();


function optionChanged(Data) {
    graphs(Data);
};
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

