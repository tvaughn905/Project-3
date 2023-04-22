const url = "https://unemployment-api4.onrender.com/industry"
const url2= "https://unemployment-api4.onrender.com/ethnicity"
const url3= "https://unemployment-api4.onrender.com/gender"

const data = d3.json(url).then(function(data) {console.log(data)});

const data2 = d3.json(url2).then(function(data2) {console.log(data2)});

const data3 = d3.json(url3).then(function(data3) {console.log(data3)});

var industry_list = []
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
        console.log(industry_list)
        // select drop down from html
        let selection = d3.select("#selDataset");

        // map data and apply to drop down
        industry_list.map(function(set) {
            return selection.append("option").text(set)
        
        });

    });
    graph("Construction")
}

function graph(set) {
    
    d3.json(url).then(function(data) {
        function indSelect(inds) {
            return inds.industry == set
        };    
        let filter = data.filter(indSelect)[0]
        console.log(filter)
      
        //select panel from html
        let body = d3.select("#industry-data");        
        info = Object.entries(filter);
        // Clear previous panel body
   
        body.html("");
        // apply key value pair of metadata to panel body
        info.map(function([key, value]) {
            return body.append("p").text(`${key}:         ${value}`)
        });
    });

    //document.addEventListener('DOMContentLoaded', () => {
            d3.json(url).then(function (data) {
                function indSelect(inds) {
                    return inds.industry == set;
                };
                let filter = data.filter(indSelect)[0];

                console.log(filter);

                info = Object.entries(filter);

                const chart = Highcharts.chart('bar', {
                    chart: {
                        type: 'bar'
                    },
                    title: {
                        text: 'Unemployment by Industry Type'
                    },
                    xAxis: {
                        categories: [filter.industry],
                        labels: {
                            enabled: false
                        },
                        title: {
                            text: filter.industry
                        }
                    },
                    yAxis: {
                        title: {
                            text: 'Unemployment in 1000s'
                        }
                    },
                    series: [{
                        name: "FY15",
                        data: [filter.fy15]
                    }, {
                        name: "FY16",
                        data: [filter.fy16]
                    }, {
                        name: "FY17",
                        data: [filter.fy17]
                    }, {
                        name: "FY18",
                        data: [filter.fy18]
                    }, {
                        name: "FY19",
                        data: [filter.fy19]
                    }, {
                        name: "FY20",
                        data: [filter.fy20]
                    }, {
                        name: "FY21",
                        data: [filter.fy21]
                    }]
                });
            });
       // });
}

function graph2() {
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
                    title: {
                        text: 'Unemployment Rate'
                    }
                },
                series: [{
                    name: 'Women',
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

graph2();

function optionChanged(Data) {
    graph(Data);
};
