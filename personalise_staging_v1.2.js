 $( document ).ready(function() {
    // console.log( "ready 2!" );

    const urlParams = new URLSearchParams(window.location.search);
    // console.log(urlParams);

    // Name values
    const name_param = urlParams.get('name');
    console.log("name param =", name_param);

    // Category values
    const category_param = urlParams.get('category');
    console.log("category param =", category_param);

    // Experience values
    const experience_param = urlParams.get('experience');
    console.log("experience param =", experience_param);
    var experience_string = urlParams.get('experience');
    // var experience_val = urlParams.get('experience'); // true (string)
    // console.log("experience_true");

    // Update name
    var name_string = urlParams.get('name'); // NULL
    console.log(name_string);
    $("#name").text(name_string);
    // $("#name_01").text(name_string);

    // Update category
    var category_string = urlParams.get('category');
    console.log(category_string);
    $("#category").text(category_string);

    // Update priority
    var priority_string = urlParams.get('priority');
    console.log(priority_string);
    $("#priority").text(priority_string);

    // Experience / level of optimisation from 1-3
    if (experience_string == 'mush') {
      console.log("mush = true");
      $("#experience").text("Optimised: " + "YOU'RE A NOOB!");
      $("#optimised_01").css('opacity', '1');
      $("#optimised_02").css('opacity', '0.5');
      $("#optimised_03").css('opacity', '0.5');
      $("#optimised_01").css('border', '4px solid #395C56');

    } else if (experience_string == 'noob') {
      console.log("noob = true");
      $("#experience").text("Optimised: " + "YOU'RE AVERAGE!");
      $("#optimised_01").css('opacity', '0.5');
      $("#optimised_02").css('opacity', '1');
      $("#optimised_03").css('opacity', '0.5');
      $("#optimised_02").css('border', '4px solid #395C56');

    } else if (experience_string == 'advanced') {
      console.log("advanced = true");
      $("#experience").text("Optimised: " + "YOU'RE ADVANCED!");
      $("#optimised_01").css('opacity', '0.5');
      $("#optimised_02").css('opacity', '0.5');
      $("#optimised_03").css('border', '4px solid #395C56');

    }

    // Subcategory focus area
    if (priority_string == 'focus') {
      console.log("focus = true");
      $("#noots-for").text("improving " + "Focus");

    } else if (priority_string == 'memory') {
      console.log("memory = true");
      $("#noots-for").text("improving " + "Memory");

    } else if (priority_string == 'stress') {
      console.log("stress = true");
      $("#noots-for").text("reducing " + "Stress");

    } else if (priority_string == 'mood') {
      console.log("mood = true");
      $("#noots-for").text("improving " + "Mood");

    } else if (priority_string == 'other') {
      console.log("other = true");
      // Script here
      // Hide container
      // Show 1-1 coaching / cust stack service

    }

});
