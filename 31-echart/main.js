$(function() {
    for (var t, a = [], e = [], n = 0; n <= 1; n += .1)
        a.push(o(n, 1)),
        e.push(o(-1 * (r(t = n) + r(1 - t)), 2));
    var i = {
        title: {
            text: "二进熵函数曲线"
        },
        tooltip: {},
        legend: {
            data: ["信息量"]
        },
        xAxis: {
            data: a
        },
        yAxis: {},
        series: [{
            name: "信息量",
            type: "line",
            smooth: "true",
            data: e
        }]
    };
    function o(t, a) {
        return Math.round(t * Math.pow(10, a)) / Math.pow(10, a)
    }
    function r(t) {
        return 0 === t ? 0 : t * Math.log2(t)
    }
    echarts.init($(".main").get(0)).setOption(i)
});

