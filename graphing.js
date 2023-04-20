const url = "https://unemployment-api4.onrender.com/industry"
const url2= "https://unemployment-api4.onrender.com/ethnicity"
const url3= "https://unemployment-api4.onrender.com/gender"

const data = d3.json(url).then(function(data) {console.log(data)});

const data2 = d3.json(url2).then(function(data2) {console.log(data2)});

const data3 = d3.json(url3).then(function(data3) {console.log(data3)});

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
var date_g_list = []
var women_list = []
var men_list = []

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
        graph(industry_list[0])
    });
}

function graph() {
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
        d3.json(url2).then(function(data2) {
            for (let i = 0; i < data2.length; i++)    
                date_list.push(data2[i].dates)
            for (let i = 0; i < data2.length; i++)    
                white_list.push(data2[i].white)
            for (let i = 0; i < data2.length; i++)    
                asian_list.push(data2[i].asian)
            for (let i = 0; i < data2.length; i++)
                black_list.push(data2[i].black)  
            for (let i = 0; i < data2.length; i++)    
                hisp_list.push(data2[i].hipsanic)  
            //console.log(white_list) 
            const chart = Highcharts.chart('line', {
                chart: {
                    type: 'line'
                },
                title: {
                    text: 'Unemployment by Ethnicity'
                },
                xAxis: {
                    categories: date_list
                },
                yAxis: {
                    title: {
                        text: 'Unemployment Rate'
                    }
                },
                series: [{
                    name: 'Asian',
                    data: asian_list
                }, {
                    name: 'Black',
                    data: black_list
                }, {
                    name: 'Hispanic',
                    data: hisp_list
                }, {
                    name: 'White',
                    data: white_list
                }]
            })
        })    
    })
    document.addEventListener('DOMContentLoaded', function () {
        d3.json(url3).then(function(data3) {
            for (let i = 0; i < data3.length; i++)    
                date_g_list.push(data3[i].date)
            for (let i = 0; i < data3.length; i++)    
                women_list.push(data3[i].women)
            for (let i = 0; i < data3.length; i++)    
                men_list.push(data3[i].men)
            console.log(date_g_list)

            const chart = Highcharts.chart('pie', {
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Unemployment by Gender'
                },
                xAxis: {                    
                    categories: date_g_list
                },
                yAxis: {

                },
                series: [{
                    name: 'women',
                    data: women_list
                }, {
                    name: 'Men',
                    data: men_list
            }]
            })
        })    
    })
};


start();
graph()

function optionChanged(Data) {
    start(Data);
};
