
var figure = $("#doc").hover( hoverVideo, hideVideo );

function hoverVideo(e) {  
    $('doc', this).get(0).play(); 
}

function hideVideo(e) {
    $('doc', this).get(0).pause(); 
}