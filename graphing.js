const url = "http://localhost:5000/industry"
const url2= "http://localhost:5000/ethnicity"

const data = d3.json(url).then(function(data) {console.log(data)});

const data2 = d3.json(url2).then(function(data2) {console.log(data2)});
var industry_list = []
var fy14_list = []
var fy15_list = []
var fy16_list = []
var fy17_list = []
var fy18_list = []
var fy19_list = []
var fy20_list = []
var fy21_list = []
var date_list = []
var white_list = []
var black_list = []
var asian_list = []
var hisp_list = []

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
        d3.json(url).then(function(data) {
            for (let i = 0; i < data.length; i++)    
                fy14_list.push(data[i].fy14)
            for (let i = 0; i < data.length; i++)    
                fy15_list.push(data[i].fy15)
            for (let i = 0; i < data.length; i++)    
                fy16_list.push(data[i].fy16)
            for (let i = 0; i < data.length; i++)
                fy17_list.push(data[i].fy17)  
            for (let i = 0; i < data.length; i++)    
                fy18_list.push(data[i].fy18)       
            for (let i = 0; i < data.length; i++)    
                fy19_list.push(data[i].fy19)
            for (let i = 0; i < data.length; i++)    
                fy20_list.push(data[i].fy20)
            for (let i = 0; i < data.length; i++)    
                fy21_list.push(data[i].fy21)        
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
                    name: "FY15",   
                    data: fy15_list
                }, {
                    name: "FY16",   
                    data: fy16_list
                }, {
                    name: "FY17",   
                    data: fy17_list
                }, {
                    name: "FY18",   
                    data: fy18_list
                }, {
                    name: "FY19",   
                    data: fy19_list
                }, {
                    name: "FY20",   
                    data: fy20_list
                }, {
                    name: "FY21",   
                    data: fy21_list
                }]
            });
        });
    });

    document.addEventListener('DOMContentLoaded', function () {
        d3.json(url).then(function(data) {
            for (let i = 0; i < data.length; i++)    
                date_list.push(data[i].fy14)
            for (let i = 0; i < data.length; i++)    
                white_list.push(data[i].fy15)
            for (let i = 0; i < data.length; i++)    
                asian_list.push(data[i].fy16)
            for (let i = 0; i < data.length; i++)
                black_list.push(data[i].fy17)  
            for (let i = 0; i < data.length; i++)    
                hisp_list.push(data[i].fy18)   
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
                    name: 'Asian',
                    data: [1, 0, 4]
                }, {
                    name: 'Black',
                    data: [5, 7, 3]
                }, {
                    name: 'Hispanic',
                    data: [5, 7, 3]
                }, {
                    name: 'White',
                    data: [5, 7, 3]
                }]
            })
        })    
    })
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
