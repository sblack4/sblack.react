/* main methods for timeline */

var svg = d3.select("#viz");

d3.json("data/life.json", function(err, data){
    if(err) console.log(err);
    var g = svg.append("g");
    var numElements = d3.sum(data.College.Classes, function(d, i){ return 1; });
    svg.attr("height", numElements*20);
    var rectGs =  g.selectAll("g")
            .data(data.College.Classes)
            .enter()
            .append("g")
            .attr("class", "classRectsGs")
            .attr("transform", function(d, i){ return "translate("+0+", "+i*20+")"; });

    rectGs.append("rect")
        .attr("class", "classRects")
        .attr("dy", 0)
        .attr("height", 20)
        .attr("width", function(d){ return d["Quality Points"]*40; });


    rectGs.append("text")
        .attr("class", "classText")
        .attr("dy", 15)
        .text(function(d){ return d.Title; });
    console.log(data.College.Classes);
});