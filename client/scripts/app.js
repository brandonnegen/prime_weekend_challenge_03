$(document).ready(function(){
    $.ajax({
        url: "/data",//calls server app.js and asks for JSON file
        success: function(data){
            $.each(data, function(){
                $('.whole-cohort').append("<div class='each-student'></div>");//appends all 22 students to the DOM one student per div, there is a css class each-student that automatically turns all students to display none
                var eachStudent = $('.whole-cohort').children().last();
                eachStudent.append("<h1 class='name'>" + this.name + "</h1>");//appends one name per div
                eachStudent.append("<p class='description'>" + this.desc + "</p>");//appends one description per div
                eachStudent.append("<p class='shout-out'>" + this.thanks + "</p>");//appends one shout out per div
            });
            $('.each-student:first').addClass('show-student');//changes css to display block so that just one of the students shows at a time
            $('.arrow-next').click(function(){  //moved all the click events to outside of my each loop because it was causing me problems
                var currentSlide = $('.show-student');  //sets variable currentSlide to the .show-student css class
                var nextSlide = currentSlide.next();//sets variable nextSlide to currentSlide.next
                if(nextSlide.length == 0){//this if statement makes sure when you get to the end it will return to the very beginning and not just stop
                    nextSlide = $('.each-student').first();
                }
                currentSlide.fadeOut(600).removeClass('show-student');//remove the css class that allows one student to be shown, once removed the class is set back to display none
                nextSlide.fadeIn(600).addClass('show-student');//adds the css class that allows one student to be shown to the next student in the json object
                var currentDot = $('.active-dot');//all Dot statements do the same as the slide statements, they are just making sure the selected dot changes as the arrow is clicked
                var nextDot = currentDot.next();
                if(nextDot.length == 0){
                    nextDot = $('.dot').first();
                }
                currentDot.removeClass('active-dot');
                nextDot.addClass('active-dot');
            });
            $('.arrow-prev').click(function(){//all things in this "previous" click function do the same as above but just with the "previous" arrow
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