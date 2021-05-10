let daysBetween = function(inputdate) {
    //Get 1 day in milliseconds
    let one_day=1000*60*60*24;
    //Current date
    let currentDate = new Date();
    let inputDate = new Date(inputdate)
    // Convert both dates to milliseconds
    let currentDate_ms = currentDate.getTime();
    let inputDate_ms = inputDate.getTime();
    console.log(currentDate);
    // Calculate the difference in milliseconds
    let difference_ms = inputDate_ms - currentDate_ms;
    // Convert back to days and return
    return Math.round(difference_ms/one_day); 
  }

function main() {
    $("#reminder-button").on("click", function() {
        $(".missing-alert").html("");
        let inputtodo = $("#todo-input").val(); 
        let inputdate = $("#date-input").val();
        let days = daysBetween(inputdate);
        let months = Math.floor(days/30);
        let years = Math.floor(days/365);
        if(!inputtodo) {
            $(".big-container").prepend(
                `<div class="missing-alert">missing todo</div>`
            );
        } else if (!inputdate) {
            $(".big-container").prepend(
                `<div class="missing-alert">missing date</div>`
            );
        } else if (days < 0) {
            $(".big-container").append(
                `<div class="reminder-container">
                    <div class="todo-container">
                        <div class="to-do">${inputtodo}</div>
                        <div class="day-count" style="color:red">Time's up</div>
                    </div>
                    <div class="closecheck-container">
                        <span class="close" onclick='this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode); return false;'>x</span>
                        <input type="checkbox" class="check-box"></input>
                    </div>
                </div>`
            );
        } else if (days > 365) {
        $(".big-container").append(
            `<div class="reminder-container">
                 <div class="todo-container">
                    <div class="to-do">${inputtodo}</div>
                    <div class="day-count">in ${years} years</div>
                </div>
                <div class="closecheck-container">
                    <span class="close" onclick='this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode); return false;'>x</span>
                    <input type="checkbox" class="check-box"></input>
                </div>
            </div>`
        );
        } else if (days > 30) {
            $(".big-container").append(
                `<div class="reminder-container">
                     <div class="todo-container">
                        <div class="to-do">${inputtodo}</div>
                        <div class="day-count">in ${months} months</div>
                    </div>
                    <div class="closecheck-container">
                        <span class="close" onclick='this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode); return false;'>x</span>
                        <input type="checkbox" class="check-box"></input>
                    </div>
                </div>`
            );
        } else {
            $(".big-container").append(
                `<div class="reminder-container">
                    <div class="todo-container">
                        <div class="to-do">${inputtodo}</div>
                        <div class="day-count">in ${days} days</div>
                    </div>
                    <div class="closecheck-container">
                        <span class="close" onclick='this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode); return false;'>x</span>
                        <input type="checkbox" class="check-box"></input>
                    </div>
                </div>`
            );
        }
            $("#todo-input").val(""); 
            $("#date-input").val(""); 
    })   
}

main();