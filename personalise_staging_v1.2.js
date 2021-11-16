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
    $("#name").text("Name: " + name_string);

    // Update category
    var category_string = urlParams.get('category'); // NULL
    console.log(category_string);
    $("#category").text("Category: " + category_string);


    if (experience_string == 'noob') {
      console.log("NOOB!");
      $("#experience").text("Experience: " + "YOU'RE A NOOB!");

    } else if (experience_string == 'avg') {
      console.log("avg true");
      $("#experience").text("Experience: " + "YOU'RE AVERAGE!");

    } else if (experience_string == 'advanced') {
      console.log("advanced true");
      $("#experience").text("Experience: " + "YOU'RE ADVANCED!");

    }

});
