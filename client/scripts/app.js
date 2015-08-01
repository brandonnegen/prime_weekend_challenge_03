$(document).ready(function(){
    $.ajax({
        url: "/data",//calls server app.js and asks for JSON file
        success: function(data){
            $.each(data, function(){
                $('.whole-cohort').append("<div class='each-student'></div>");//appends all 22 students to the DOM
                var eachStudent = $('.whole-cohort').children().last();
                eachStudent.append("<h1 class='name'>" + this.name + "</h1>");
                eachStudent.append("<p class='description'>" + this.desc + "</p>");
                eachStudent.append("<p class='shout-out'>" + this.thanks + "</p>");
            });
            $('.each-student:first').addClass('show-student');//only shows "active" student
            $('.arrow-next').click(function(){
                var currentSlide = $('.show-student');
                var nextSlide = currentSlide.next();
                if(nextSlide.length == 0){
                    nextSlide = $('.each-student').first();
                }
                currentSlide.fadeOut(600).removeClass('show-student');
                nextSlide.fadeIn(600).addClass('show-student');
                var currentDot = $('.active-dot');
                var nextDot = currentDot.next();
                if(nextDot.length == 0){
                    nextDot = $('.dot').first();
                }
                currentDot.removeClass('active-dot');
                nextDot.addClass('active-dot');
            });
            $('.arrow-prev').click(function(){
                var currentSlide = $('.show-student');
                var prevSlide = currentSlide.prev();
                if(prevSlide.length == 0){
                    prevSlide = $('.each-student').last();
                }
                currentSlide.fadeOut(600).removeClass('show-student');
                prevSlide.fadeIn(600).addClass('show-student');
                var currentDot = $('.active-dot');
                var prevDot = currentDot.prev();
                if(prevDot.length == 0){
                    prevDot = $('.dot').last();
                }
                currentDot.removeClass('active-dot');
                prevDot.addClass('active-dot');
            });
        }
    });
});