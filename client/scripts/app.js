$(document).ready(function(){
    $.ajax({
        url: "/data",//calls server app.js and asks for JSON file
        success: function(data){
            console.log(data);
            console.log(data.person1.name);
            $.each(data, function(){
                $('.name').text(this.name);//sends JSON.name to the '.name' class in the html
                $('.description').text(this.desc);//sends JSON.desc to the '.description' class in the html
                $('.shout-out').text(this.thanks);//sendsJSON.thanks to the '.shout-out' class in the html
                console.log(this.name);
                $('.arrow-next').click(function(){
                    var currentSlide = $('.active-slide');
                    var nextSlide = currentSlide.next();
                    if(nextSlide.length == 0){
                        nextSlide = $('.slide').first();
                    }
                    currentSlide.fadeOut(600).removeClass('active-slide');
                    nextSlide.fadeIn(600).addClass('active-slide');
                    var currentDot = $('.active-dot');
                    var nextDot = currentDot.next();
                    if(nextDot.length == 0){
                        nextDot = $('.dot').first();
                    }
                    currentDot.removeClass('active-dot');
                    nextDot.addClass('active-dot');
                });
                $('.arrow-prev').click(function(){
                    var currentSlide = $('.active-slide');
                    var prevSlide = currentSlide.prev();
                    if(prevSlide.length == 0){
                        prevSlide = $('.slide').last();
                    }
                    currentSlide.fadeOut(600).removeClass('active-slide');
                    prevSlide.fadeIn(600).addClass('active-slide');
                    var currentDot = $('.active-dot');
                    var prevDot = currentDot.prev();
                    if(prevDot.length == 0){
                        prevDot = $('.dot').last();
                    }
                    currentDot.removeClass('active-dot');
                    prevDot.addClass('active-dot');
                });
            });
        }
    });
});