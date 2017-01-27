$(document).ready(function(){
    var colors = ['blue','purple','indigo','light-blue','cyan','teal','pink','orange','red','green','deep-orange','brown'];
    var color = colors[Math.floor(Math.random()*colors.length )];
    $('.main-color').addClass(color);
    $('.main-color-text').addClass(color+'-text');
});
