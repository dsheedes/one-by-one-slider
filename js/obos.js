(function( $ ){
    //Let's take into consideration the padding of elements while scrolling too!
    function calculatePadding(element){
        var padding = [];
        //top right bottom left

        padding.push(parseFloat(element.css('padding-top')));
        padding.push(parseFloat(element.css('padding-right')));
        padding.push(parseFloat(element.css('padding-bottom')));
        padding.push(parseFloat(element.css('padding-left')));

        return padding;
    }
    function moveRight(element, amount){

        var scrollPosition = element.scrollLeft();

        var padding = calculatePadding(element);

        $(element).animate({
            scrollLeft: scrollPosition + amount + padding[1] + padding[3]
        }, 800);

    }

    function moveLeft(element, amount){

        var scrollPosition = element.scrollLeft();

        var padding = calculatePadding(element);
        $(element).animate({
            scrollLeft: scrollPosition - amount - padding[1] - padding[3]
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

        //Initial offset of the scrollbar

        obosContainer.scrollLeft($(".obos-item").width()/2);

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