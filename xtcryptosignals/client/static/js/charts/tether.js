function create_chart_tether(price_formatter, num_formatter, data) {
      return Highcharts.chart('chart', {
        chart: {
            zoomType: 'x'
        },
        title: {
            text: `Tether / BTC 1h`
        },
        subtitle: {
            text: document.ontouchstart === undefined ?
                'Click and drag in the plot area to zoom in' : 'Pinch the chart to zoom in'
        },
        credits: {
            enabled: false
        },
        time: {
            timezone: moment.tz.guess(true)
        },
        xAxis: [{
            type: 'datetime',
            title: {
                text: `Datetime (${moment.tz.guess(true)})`
            }
        }],
        yAxis: [{
            labels: {
                format: '${value}',
                 style: {
                    color: Highcharts.getOptions().colors[0]
                },
                formatter: function() {
                    return price_formatter.format(this.value);
                }
            },
            title: {
                text: 'Price (USD)',
                style: {
                    color: Highcharts.getOptions().colors[0]
                },
                formatter: function() {
                    return price_formatter.format(this.value);
                }
            }
        }, {
            labels: {
                format: '${value}',
                style: {
                    color: Highcharts.getOptions().colors[1]
                },
                formatter: function() {
                    return price_formatter.format(this.value);
                }
            },
            title: {
                text: 'Tether Max Supply (ERC-20)',
            },
            opposite: true
        }, {
            labels: {
                format: '{value}',
                style: {
                    color: Highcharts.getOptions().colors[3]
                },
                formatter: function() {
                    return num_formatter.format(this.value);
                }
            },
            title: {
                text: 'Tether Number of Hodlers (ERC-20)',
                style: {
                    color: Highcharts.getOptions().colors[3]
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true,
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            x: 120,
            verticalAlign: 'top',
            y: 100,
            floating: true,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || // theme
                'rgba(255,255,255,0.25)'
        },
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    enable: false
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            },
            line: {
                marker: {
                    enable: false
                },
            }
        },
        series: [{
            name: 'BTC Price',
            type: 'area',
            data: data.prices_btc,
            tooltip: {
                valuePrefix: '$',
                pointFormatter: function() {
                    return '<span style="color:' + this.color + '">\u25CF</span> ' +
                        this.series.name + ': <b>' + price_formatter.format(this.y) + '</b><br/>';
                }
            },
            marker: {
                enabled: false,
            },
        }, {
            name: 'Tether Max Supply (ERC-20)',
            type: 'line',
            yAxis: 1,
            data: data.tether_max_supply_erc20,
            tooltip: {
                valuePrefix: '$',
                pointFormatter: function() {
                    return '<span style="color:' + this.color + '">\u25CF</span> ' +
                        this.series.name + ': <b>' + price_formatter.format(this.y) + '</b><br/>';
                }
            },
            marker: {
                enabled: false,
            },
        }, {
            name: 'Tether Number of Hodlers (ERC-20)',
            type: 'line',
            color: Highcharts.getOptions().colors[3],
            yAxis: 2,
            data: data.tether_num_hodlers_erc20,
            tooltip: {
                pointFormatter: function() {
                    return '<span style="color:' + this.color + '">\u25CF</span> ' +
                        this.series.name + ': <b>' + num_formatter.format(this.y) + '</b><br/>';
                }
            },
            marker: {
                enabled: false,
            },
        }]
    });
}