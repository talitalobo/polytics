defaultChartTest("test10", readData()); 

function defaultChartTest(container, data, margin) {
  nv.addGraph(function() {
    var chart;
    chart = nv.models.scatterChart()
                  .showDistX(true).showDistY(true)
                  ;
    chart.xAxis.tickFormat(d3.format('.02f'));
    chart.yAxis.tickFormat(d3.format('.02f'));
    if (margin) {
      chart.margin(margin);
    }
    chart.tooltipContent(function(key) {
        return "<h3>" + key  + "</h3>";
    });
    d3.select('#' + container + ' svg').datum(data).transition().duration(500).call(chart);
    nv.utils.windowResize(chart.update);
    return chart;
  });
}

/*
function scatterPlusLineTest(container, data) {
  nv.addGraph(function() {
    var chart;
    chart = nv.models.scatterPlusLineChart()
                  .showDistX(true).showDistY(true);
    chart.xAxis.tickFormat(d3.format('.02f'));
    chart.yAxis.tickFormat(d3.format('.02f'));
    chart.tooltipContent(function(key) {
        return "<h3>" + key+ "</h3>";
    });
    d3.select('#' + container + ' svg').datum(data).transition().duration(500).call(chart);
    nv.utils.windowResize(chart.update);
    return chart;
  });
}
*/

function randomData(groups, points) { //# groups,# points per group
  var data = [],
      shapes = ['circle', 'cross', 'triangle-up', 'triangle-down', 'diamond', 'square'],
      random = d3.random.normal();

  for (i = 0; i < groups; i++) {
    data.push({
      key: 'Group ' + i,
      values: []
    });

    for (j = 0; j < points; j++) {
      data[i].values.push({
        x: random(), 
        y: random(), 
        size: Math.random(), 
        shape: shapes[j % 6]
      });
    }
  }
  return data;
}

function readData() {
	var eData = [],
		metricas = ['QUALIDADE', 'PRIVILEGIOS', 'PROCESSOS', 'OUTROS', 'PONTUACAO', 'PARTICIPACAO', 'PRESENCA'],
		shapes = ['circle', 'cross', 'triangle-up', 'triangle-down', 'diamond', 'square'];
	
	d3.csv("dados_cruzados.csv", function(error, data) 
			{		
				for (i = 0; i < metricas.length; i++) {
					eData.push({
						key: metricas[i],
						values: []
					});
					
					data.forEach(function (d) {
						if (d[metricas[i]] != "Nao disponivel" || d[metricas[i]] != "-") {
							eData[i].values.push({
								y: +d[metricas[i]],
								x: Math.log(+d.DISPESA),
								size: Math.random(),
								shape: shapes[0],
								nome: d.CANDIDATO
							});
						}
					});
				}
	   	console.log(eData);	 
	  }
  )
  
  return eData;
}

function tinyPoints() {
  var rval = {key: "Tiny points", values: []};
  for(var i =1; i < 20; i++) {
    rval.values.push({
       x: Math.random() * 1e-10,
       y: Math.random() * 1e-10
    });
  }
  return [rval];
}

/*for (j = 0; j < 557; j++) {
						eData[i].values.push({
							x: ,
							y: 20,
							size: Math.random(),
							shape: shapes[0]
						});
					} */