/* $, d3; main methods for timeline */



//Global Variables
aboutMe = {};
aboutMe.TRANS_DUR = 2000;
aboutMe.fields = ["Subject", "Level", "Semester"];
aboutMe.svg = d3.select("#viz");
aboutMe.activeFilters = {
    n_classes : Infinity,
    subject : [],
    semester: [],
    level: []
};
aboutMe.dropDowns = {
    //n_classes: null,
    subject: $('#subject'),
    semester: $('#semester'),
    level: $('#level')
};

//Ajax and Load
d3.json("data/life.json", function(err, data){ // MAIN INIT HERE
    if(err) console.log(err);
    aboutMe.classes = data.College.Classes;
    aboutMe.makeFilters(aboutMe.classes);
    aboutMe.drawRects(aboutMe.classes);
    populateDropdowns();
    addFilters();
});

//Make filters 
aboutMe.makeFilters = function(data){
    var cf = crossfilter(data);
    aboutMe.subject = cf.dimension(function(d) {return d[aboutMe.fields[0]]; });
    aboutMe.subjects = aboutMe.subject.group(function(d){ return d[aboutMe.fields[0]];});
    aboutMe.level = cf.dimension(function(d) {return d[aboutMe.fields[1]]; });
    aboutMe.semester = cf.dimension(function(d) {return d[aboutMe.fields[2]]; });
};

//Use filters 

aboutMe.filters = {
    n_classes: function(){
        return aboutMe.n_classes.top(n_classes);
    },
    subject: function(){
    if(!aboutMe.activeFilters.subject){
        aboutMe.subject.filterAll();
        return aboutMe.classes;
    }else{
        return aboutMe.subject.filterFunction(function(d){
            return ($.inArray(d, aboutMe.activeFilters.subject)>=0) ? d : null;
        }).top(aboutMe.activeFilters.n_classes);
    }}, 
    level: function(){
    if(!aboutMe.activeFilters.level){
        return aboutMe.classes;
    }else{
        return aboutMe.level.filterFunction(function(d){
            return ($.inArray(d, aboutMe.activeFilters.level)>=0) ? d : null;
        }).top(aboutMe.activeFilters.n_classes);
    }},
    semester: function(){
    if(!aboutMe.activeFilters.semester){
        return aboutMe.classes;
    }else{
        return aboutMe.semester.filterFunction(function(d){
            return ($.inArray(d, aboutMe.activeFilters.semester)>=0) ? d : null;
        }).top(aboutMe.activeFilters.n_classes);
    }}
};

//Draw Rectangles 
aboutMe.drawRects = function(data){
    const BAR_HEIGHT = 18;
    var numElements = data.length;
    
    //SVG 
    aboutMe.svg
        .transition()
        .duration(aboutMe.TRANS_DUR)
        .attr("height", numElements*20);

    //BAR/RECT ELEMENTS 
    var rects =  aboutMe.svg.selectAll("rect")
        .data(data, function(d) { return d["Subject"]+"_"+d["Course"]; });
    rects.enter()
        .append("rect")
        .attr("class", "classRects")
        .attr("id", function(d){return d["Subject"]+"_"+d["Course"];})
        .attr("height", 20)
        .on("mouseover", function(d, i) { toolTip(d, i); })
        .on("mouseout", function() { toolTipHide(); })
    .merge(rects)
        .transition()
        .duration(aboutMe.TRANS_DUR)
        .attr("width", function(d){ return d["Quality Points"]*40; })
        .attr("transform", function(d, i){ return "translate("+0+", "+i*BAR_HEIGHT+")"; });
    rects.exit().remove();

    //TEXT ELEMENTS
    var texts = aboutMe.svg.selectAll("text")
        .data(data, function(d) { return d["Subject"]+"_"+d["Course"]; });
    texts.enter()
        .append("text")
        .attr("class", "classText")
        .attr("id", function(d){return d["Subject"]+"_"+d["Course"];})
    .merge(texts)
        .text(function(d){return d["Subject"]+"_"+d["Course"];})
        .transition()
        .duration(aboutMe.TRANS_DUR)
        .attr("y", 17)//function(d,i){return i*18; })
        .attr("transform", function(d, i){ return "translate("+0+", "+i*18+")"; });
    texts.exit().remove();

    //X-AXIS

    //TOOLTIP
    var tooltip = d3.select("#tooltip");
    var pre = d3.select("#jsonContainer");
    toolTip = function(d, i){
        var outPut = "";
        for(var key in d){
            outPut += key+": "+d[key]+". ";
        }
        console.log(outPut);
        tooltip.classed("hidden", false)
            .style("top", (i*BAR_HEIGHT)+"px")
            .style("left", event.pageX-15+"px")
            .text(outPut);
    };
    toolTipHide = function(){
        tooltip.classed("hidden", true);
    };


};

//Update Data
aboutMe.updateData = function(data){
    console.log("updateData ", data);
    aboutMe.drawRects(data);
};

//Populate Dropdowns
populateDropdowns = function(){
    for(var filter in aboutMe.dropDowns){
        console.log("populateDropdowns ", filter);
        $.each(aboutMe[filter].group().all(), function(){
            aboutMe.dropDowns[filter].append($("<li />").append(`<a>${this.key}</a>`));
        });
    }
};

//Event Handlers for Dropdowns 
filterOnClick = function(button){
    $(button).click(function(e){
        //clearActiveFilters();
        console.log("this filter: ", this.id);
        console.log("filter this: ", e.target.innerHTML);
        $('#filters').append('\\', e.target.innerHTML);
        aboutMe.activeFilters[this.id].push(e.target.innerHTML);
        console.log(aboutMe.activeFilters[this.id]);
        aboutMe.updateData(aboutMe.filters[this.id].call());
    });
};
addFilters = function(){
    for(var filter in aboutMe.dropDowns){
        console.log(aboutMe.dropDowns[filter]);
        filterOnClick(aboutMe.dropDowns[filter]);
    }
};

clearActiveFilters = function(clear= false){
    for(var filter in aboutMe.activeFilters){
        if(filter=="n_classes"){
            aboutMe.activeFilters[filter] = Infinity;
        }else{
            aboutMe.activeFilters[filter] = [];
            if(clear) aboutMe[filter].filterAll();
        } 
    }
};

