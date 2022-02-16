$(document).ready(function() {
    //selected brands will pull from selections of different section
    var $selected_brands = ['White Rascal', 'India Pale Ale', 'Certatio Equestris'];
    //Type will pull from selections of different section  or maybe not...
    var $pack_type = ['Bottles - 12oz', 'Bombers - 22oz'];
    //tanks will pull from selections of different section  
    var $selected_tanks = ['B1', 'B2', 'B3'];
    //get the time
    var $time = new Date();
    //add pallet button click count
    var $pallets = 1;
    //count number of pauses
    var $pauses = 0;
    //click count on restart button
    var $restarts = 0;
    //variables for input fields
    var $last_count = 0;
    var $lab = 0;
    var $scrap = 0;
    var $Q01 = 0;
  
    //add selected brands to drop down menu
    for (b = 0; b < $selected_brands.length; b++) {
      var $brand_run_one = $('<option value="' + b + '">' + $selected_brands[b] + '</option>');
      $("#start_brand").append($brand_run_one);
    };
  
    //add selected types to drop down menu
    for (t = 0; t < $pack_type.length; t++) {
      var $start_type = $('<option value="' + t + '">' + $pack_type[t] + '</option>');
      //add the options to select with id brands_menu
      $("#start_type").append($start_type);
    }
  
    //add selected tanks to drop down menu
    for (t = 0; t < $selected_tanks.length; t++) {
      var $start_tank = $('<option value="' + t + '">' + $selected_tanks[t] + '</option>');
      //add the options to select with id brands_menu
      $("#start_tank").append($start_tank);
    }
  
    //add a zero in front of minutes if less than 10
    if ($time.getMinutes() < 10) {
      var $timeStamp = $time.getHours() + ":0" + $time.getMinutes() + ":" + $time.getSeconds();
    } else {
      var $timeStamp = $time.getHours() + ":" + $time.getMinutes() + ":" + $time.getSeconds();
    };
    //when start run is clicked show the other buttons hide the start button and put a start time stamp
    $("#start_run").click(function() {
      $("#run_buttons").removeClass("hidden");
      $("#start_run").addClass("hidden");
      $("#log").append("Run Start Time: " + $timeStamp + "</br>");
    })
  
    //number of total cases with 72 to a pallet
    function $btl_cases() {
      return $pallets * 72;
    };
  
    //when add pallet clicked 
    $("#add_pallet").click(function() {
        //add a time stamp with case count and pallet count
        $("#log").append("<div id='" + $pallets + "'>" + $timeStamp + " - Pallet #" + $pallets + ": " + $btl_cases() + " Cases </div>");
        //show the delete pallet button
        $("#delete_pallet").removeClass("hidden");
        //show last pallet button
        $("#last_pallet").removeClass("hidden");
        //increase pallet count by 1
        $pallets++;
      })
      //when delete pallet button is clicked
    $("#delete_pallet").click(function() {
      //lessen the pallet count by one
      $pallets--;
      //remove the last pallet by it's id
      $("#" + $pallets).remove();
      //if pallet count back at one hide delete pallet button
      if ($pallets <= 1) {
        $("#delete_pallet").addClass("hidden")
      };
    })
  
    //when pause button clicked hide the other buttons
    $("#pause_run").click(function() {
      $("#add_pallet").addClass("hidden");
      $("#delete_pallet").addClass("hidden");
      $("#pause_run").addClass("hidden");
      $("#last_pallet").addClass("hidden");
      //show restart run button
      $("#restart_run").removeClass("hidden");
      //time stamp the pause run and put a space for notes
      $("#log").append("<div id='pause'" + $pauses + "'>Run Paused: " + $timeStamp + " Notes: <input type='textbox'></input></div>");
      //increase pauses by one
      $pauses++;
    })
  
    //when restart button clicked show other buttons
    $("#restart_run").click(function() {
      $("#add_pallet").removeClass("hidden");
      $("#pause_run").removeClass("hidden");
      $("#last_pallet").removeClass("hidden");
      //hide the restart run button
      $("#restart_run").addClass("hidden");
      //time stamp and create input for potential barrles lossed
      $("#log").append("<div id='restart'" + $restarts + "'>Run Restarted: " + $timeStamp + " Potential Barrels Lost: <input class='loss' type='number' maxlenght='3'></input></div>");
      //increase restart count by one
      $restarts++;
    })
  
    function $totalOnPallets() {
      return $last_count + $btl_cases();
    };
  
    function $sum() {
      return $totalOnPallets() + $lab + $scrap + $Q01;
    };
    //when last pallet button clicked ask if they are sure
    $("#last_pallet").click(function() {
      var last_pallet = confirm("Are you sure this is the last pallet?");
      //if they are sure then hide pallet buttons
      if (last_pallet == true) {
        $pallets--;
        $("#add_pallet").addClass("hidden");
        $("#pause_run").addClass("hidden");
        $("#last_pallet").addClass("hidden");
        $("#restart_run").addClass("hidden");
        $("#delete_pallet").addClass("hidden");
        //show end line run buttons
        $("#last_pallet_info").removeClass("hidden");
        $("#switch_brand").removeClass("hidden");
        $("#switch_type").removeClass("hidden");
        $("#start_next").removeClass("hidden");
        $("#end_run").removeClass("hidden");
        //time stamp the last pallet
        $("#log").append("<div id='last_pallet'>Last Pallet: " + $timeStamp + "</div>");
        //list the sum of what's on the pallets
        $("#sum_section").prepend("<div id='run_sum'>Total on Pallets: " + $totalOnPallets() + "</div>");
        $("#sum").append($sum());
      } else {}
    });
  //get the value of the inputs
    $( "#lastPcount" )
    .keyup(function() {
      var value = $( this ).val();
      return $last_count = value;
    })
    .keyup();
  });