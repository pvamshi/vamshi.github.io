$(document).ready(function(){
    var colors = ['blue','purple','indigo','light-blue','cyan','teal','pink','orange','red','green','deep-orange','brown'];
    var color = (sessionStorage && sessionStorage.getItem('theme') ) || colors[Math.floor(Math.random()*colors.length )];
    sessionStorage && sessionStorage.setItem('theme', color );
    $('.main-color').addClass(color);
    $('.main-color-text').addClass(color+'-text');
    $('table').addClass('striped');
    $('img').addClass('responsive-img');
});

function changeTheme(){
    sessionStorage && sessionStorage.removeItem('theme');
    return true;
}
