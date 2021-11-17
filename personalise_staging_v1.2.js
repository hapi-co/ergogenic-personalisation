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

    // var experience_val = urlParams.get('experience'); // true (string)
    // console.log("experience_true");
    var experience_string = urlParams.get('experience'); // NULL

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

});
