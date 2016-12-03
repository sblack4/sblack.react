/* $, d3; main methods for timeline */



//Global Variables
aboutMe = {};
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
d3.json("data/life.json", function(err, data){
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
    subject: function(){
    if(!aboutMe.activeFilters.subject){
        aboutMe.subject.filterAll();
        return aboutMe.classes;
    }else{
        return aboutMe.subject.filterExact(aboutMe.activeFilters.subject).top(aboutMe.activeFilters.n_classes);
    }}, 
    level: function(){
    if(!aboutMe.activeFilters.level){
        return aboutMe.classes;
    }else{
        return aboutMe.level.filterExact(aboutMe.activeFilters.level).top(aboutMe.activeFilters.n_classes);
    }},
    semester: function(){
    if(!aboutMe.activeFilters.semester){
        return aboutMe.classes;
    }else{
        return aboutMe.semester.filterExact(aboutMe.activeFilters.semester).top(aboutMe.activeFilters.n_classes);
    }}
};

//Draw Rectangles 
aboutMe.drawRects = function(data){
    var numElements = data.length;
    //var barHeight = 
    aboutMe.svg.attr("height", numElements*20);
    var rects =  aboutMe.svg.selectAll("rect")
        .data(data, function(d) { return d["Subject"]+"_"+d["Course"]; });
    rects.enter()
        .append("rect")
        .attr("class", "classRects")
        .attr("id", function(d){return d["Subject"]+"_"+d["Course"];})
        .attr("height", 20)
    .merge(rects)
        .transition()
        .duration(2000)
        .attr("width", function(d){ return d["Quality Points"]*40; })
        .attr("transform", function(d, i){ return "translate("+0+", "+i*18+")"; });
    rects.exit().remove();

    var texts = aboutMe.svg.selectAll("text")
        .data(data, function(d) { return d["Subject"]+"_"+d["Course"]; });
    texts.enter()
        .append("text")
        .attr("class", "classText")
        .attr("id", function(d){return d["Subject"]+"_"+d["Course"];})
    .merge(texts)
        .text(function(d){return d["Subject"]+"_"+d["Course"];})
        .transition()
        .duration(2000)
        .attr("y", 17)//function(d,i){return i*18; })
        .attr("transform", function(d, i){ return "translate("+0+", "+i*18+")"; });
    texts.exit().remove();
};

//Update Data
aboutMe.updateData = function(data){
    console.log(data);
    aboutMe.drawRects(data);
};

//Populate Dropdowns
populateDropdowns = function(){
    for(var filter in aboutMe.dropDowns){
        console.log(filter);
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

$('#clearFilters').click(function(e){
    $('#filters').empty();
    clearActiveFilters(clear=true);
    aboutMe.updateData(aboutMe.classes);
});