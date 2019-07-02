"use strict";

// import Highcharts from 'highcharts';
// import Exporting from 'highcharts/modules/exporting';
// Exporting(Highcharts);
// console.log(Highcharts);
Highcharts.setOptions({
  lang: {
    thousandsSep: ','
  }
});
document.addEventListener('DOMContentLoaded', function () {
  var myChart = Highcharts.chart('chart-container', {
    chart: {
      type: 'variwide',
      styledMode: true,
      spacingBottom: 25,
      spacingRight: 100
    },
    title: {
      text: null
    },
    data: {
      googleSpreadsheetKey: '1BV34R-0-WzaE9J2oqWVIIxpWYyXe7MV6LVSNhg76OvA',
      googleSpreadsheetWorksheet: 1,
      endColumn: 2,
      endRow: 5
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          useHTML: true,
          format: '${point.z:,.0f}',
          allowOverlap: true,
          verticalAlign: 'top',
          align: 'left'
        }
      }
    },
    legend: {
      enabled: false
    },
    xAxis: {
      labels: {
        overflow: 'allow',
        padding: 20,
        style: {
          whiteSpace: 'wrap'
        }
      }
    },
    yAxis: {
      title: false,
      labels: {
        useHTML: true,
        overflow: 'allow'
      },
      max: 25
    },
    credits: {
      enabled: false
    },
    tooltip: {
      shadow: false,
      padding: 10,
      pointFormat: '<b>Median percentage:</b> {point.y:.0f}%<br>' + '<b>Median down payment:</b> ${point.z}<br>'
    },
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          chart: {
            spacingRight: 10
          },
          legend: {
            align: 'left',
            x: -18
          },
          tooltip: {
            enabled: false
          }
        }
      }]
    }
  });
});