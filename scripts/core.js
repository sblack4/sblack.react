$('#clearFilters').click(function(e){
    $('#filters').empty();
    clearActiveFilters(clear=true);
    aboutMe.updateData(aboutMe.classes);
});

$('.toggle').click(function(e){
    console.log(this.parentNode);
    $(this.parentNode).find('.collapsable').slideToggle('slow');
});