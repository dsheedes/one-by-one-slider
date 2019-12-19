(function( $ ){
    function moveRight(element, amount){

        var scrollPosition = element.scrollLeft();

        $(element).animate({
            scrollLeft: scrollPosition + amount
        }, 800);

    }

    function moveLeft(element, amount){

        var scrollPosition = element.scrollLeft();
        $(element).animate({
            scrollLeft: scrollPosition - amount
        }, 800);
    }

    $.fn.obos = function(){ //Our main hook function.

        //Let's initialize our navigation items.
            //In order to do that we must figure out the height of our container, and set our navigation to the same height
        
        var containerHeight = this.height();
        var obosContainer = $(this);

        var navLeft = $(".obos-nav-left");
        var navRight = $(".obos-nav-right");
        
        navLeft.height(containerHeight);
        navRight.height(containerHeight);

        //Initial variables
        var position = 0;
        var left = 0;

        //Let's hook to our navigation

        $(".obos-nav-left").click(function(){

            moveLeft(obosContainer, $(".obos-item").width());

        });
        $(".obos-nav-right").click(function(){
            
            //When the user clicks on a navigation item we need to move all items by a certain amount.
            //This amount will be the width of an item.

            moveRight(obosContainer, $(".obos-item").width()); 

        })

    }
})( jQuery );