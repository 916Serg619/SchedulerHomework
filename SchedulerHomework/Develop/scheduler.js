var workHours = [];
var m = moment();
var currentTime = m.hour();



/* Function to update clock based on current time.*/
function clock() {
    var currTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    $('#currentDay').html(currTime);
}

setInterval(clock, 1000);

/*generating scheduler layout.*/
for (var h = 14; h < 22; h++) {
    workHours.push(moment({ h }).format('h  a'));
    $('.container').append(`<div class='row time-block' data-time='${h}'>
       
        <!--Columns that desigantes the work hours, and what part of the day i.e. 'am' and 'pm'.-->
           <div class='col-sm col-md-2 hour'>
             <p>${moment({h}).format('h  a')}</p>
           </div>

       <!--Columns for user input-->
           <div class='col-sm col-md-10 d-flex description'>
              <div class='input-group'>
                <textarea class="form-control text-area"></textarea>
              
               <!--Columns for the save buttons-->
                <div class='input-group-append'>
                  <button class='saveBtn d-flex justify-center align-center'>
                    <i class='far fa-save fa-2x save-icon'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>`);
}



/*adds desired Class to each time-block based on time i.e 'past', 'present', and 'future'. See style.css for properties.*/
$.each($('.time-block'), function(_index, value) {
    let dateHour = $(value).attr('data-time');
    if (Number(dateHour) === m.hour()) {
        $(this).find('textarea').addClass('present');
    } else if (Number(dateHour) < m.hour()) {
        $(this).find('textarea').addClass('past');
    } else {
        $(this).find('textarea').addClass('future');
    }
});
/* I tried various attempts to save user data with a 'click' function.  I deleted pretty much all of it out of frustration.*/
$('.saveBtn').on('click', function(event) {
    event.preventDefault();





});