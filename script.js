$(document).ready(function(){

function checkCollision() {
    var blueLeft = $("#blue").offset().left;
    var redLeft = $("#red").offset().left;
    var blueRight = blueLeft + $("#blue").width();
    var redRight = redLeft + $("#red").width();
    if(blueRight > redLeft && blueLeft < redRight) {
        alert("Touching");
    }
}

$("body").keydown(function(event) {
    //moves left
    if (event.which === 37) {
        $("#blue").css("left", $("#blue").offset().left - 10);
    //moves right
    } else if (event.which === 39) {
        $("#blue").css("left", $("#blue").offset().left + 10);
        //move to top
    }else if (event.which === 38) {
        $("#blue").css("top", $("#blue").offset().top - 10);
        //move to bottom
    }else if (event.which === 40) {
        $("#blue").css("top", $("#blue").offset().top + 10);
    }
    
    else {
        return;
    }
    
        //Checks for position relative to each other
        checkCollision();
});

});