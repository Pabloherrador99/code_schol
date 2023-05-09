Highcharts.chart("containerBubble", {
  chart: {
    type: "packedbubble",
    height: "100%",
  },
  title: {
    text: "Salaries By field in Data Science",
    align: "left",
  },
  tooltip: {
    useHTML: true,
    pointFormat: "<b>{point.name}:</b> {point.value} total </sub>",
  },
  plotOptions: {
    packedbubble: {
      minSize: "20%",
      maxSize: "70%",
      zMin: 0,
      zMax: 5,
      layoutAlgorithm: {
        gravitationalConstant: 0.05,
        splitSeries: true,
        seriesInteraction: false,
        dragBetweenSeries: true,
        parentNodeLimit: true,
      },
      dataLabels: {
        enabled: true,
        format: "{point.name}",
        filter: {
          property: "y",
          operator: ">",
          value: 250,
        },
        style: {
          color: "black",
          textOutline: "none",
          fontWeight: "normal",
        },
      },
    },
  },
  series: [{
    name: 'Machine learning',
    data: [{
        name: '206k a year', value: 2
    }, {
        name: '110k to 150k a year', value: 1
    }, {
        name: '12-30 an hour', value: 1
    }, {
        name: '182k-262k a year', value: 1
    }, {
        name: '20-28 an hour', value: 1
    }, {
        name: '221k-374k a year', value: 1
    }, {
        name: '35-70 an hour', value: 1
    }, {
        name: '82 an hour', value: 1
    }, {
        name: '90k-140k a year', value: 1
    }, {
        name: '93.8k-`174k a year', value: 1
    }]
}, {
    name: 'deep learning',
    data: [{
        name: '20-28 an hour', value: 2
    }, {
        name: '35-70 an hour', value: 2
    }, {
        name: '125k-170k a year', value: 1
    }, {
        name: '163k-275k a year', value: 1
    }, {
        name: '75-80 an hour', value: 1
    }, {
        name: '130k-200k a year', value: 1
    }]
}, {
    name: 'NLP',
    data: [{
        name: '120k-190k a year', value: 3
    }, {
        name: '100k-150k a year', value: 1
    }, {
        name: '110k-159k a year', value: 1
    }, {
        name: '130k-180k a year', value: 1
    }, {
        name: '160k-250k a year', value: 1
    }, {
        name: '20-28 an hour', value: 1
    }]
}, {
    name: 'Block Chain',
    data: [{
        name: '20-28 an hour', value: 3
    }, {
        name: '100-120 an hour', value: 1
    }, {
        name: '150k-200k a year', value: 1
    }, {
        name: '150k-250k a year', value: 1
    }, {
        name: '35-70 an hour', value: 1
    }]
}, {
    name: 'Data Scientist',
    data: [{
        name: '121k a year', value: 2
    }, {
        name: '184k-275k a year', value: 2
    }, {
        name: '100k-125k a year', value: 1
    }, {
        name: '8413-14.201 a month', value: 1
    }, {
        name: '98.9k-175k a year', value: 1
    }]
}, {
    name: 'Data Analyst',
    data: [{
        name: '17.21 an hour', value: 2
    }, {
        name: '49,916-56,155 a year', value: 1
    }, {
        name: '6,151.93-12,187.25 a month', value: 1
    }, {
        name: '60k-90k a year', value: 1
    }, {
        name: '75k-95k a year', value: 1
    }]
}, {
    name: 'Big Data',
    data: [{
        name: '20-28 an hour', value: 3
    }, {
        name: '120k-190k a year', value: 2
    }]
}, {
    name: 'Reinforcement Learning',
    data: [{
        name: '160k-200k a year', value: 2
    }, {
        name: '130k-200k a year', value: 1
    }, {
        name: '140k-200k a year', value: 1
    }, {
        name: '280k a year', value: 1
    }]
}, {    
    name: 'Time Series',
    data: [{
        name: '20-28 an hour', value: 2
    }, {
        name: '60-80 an hour', value: 1
    }, {
        name: '80k-100k a year', value: 1
    }]}, { 

    name: 'Neural Networks',
    data: [{
        name: '20-28 an hour', value: 3
    }, {
        name: '100k-140k a year', value: 1
    }, {
        name: '10-25 an hour', value: 1
    }, {
        name: '10-80 an hour', value: 1
    }, {
        name: '120k-190k a year', value: 1
    }, {
        name: '12-40 an hour', value: 1
    }, {
        name: '130k-185k a year', value: 1
    }, {
        name: '140k-160k a year', value: 1
    }, {
        name: '150k-200k a year', value: 1
    }, {
        name: '15-20 an hour', value: 1
    }, {
        name: '25-100 an hour', value: 1
    }, {
        name: '35-50 an hour', value: 1
    }, {
        name: '40-60 an hour', value: 1
    }, {
        name: '80k-120k a year', value: 1
    }, {
        name: '80k-140k a year', value: 1
    }



]}

]
});

