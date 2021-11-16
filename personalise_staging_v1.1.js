$( document ).ready(function() {
    // console.log( "ready 2!" );

    const urlParams = new URLSearchParams(window.location.search);
    const experience_param = urlParams.get('experience');
    console.log("experience param =", experience_param);

    // var is_noob = urlParams.has('experience'); // true (boolean)
    // console.log("experience_true");
    // var noob_val = urlParams.get('experience'); //success
    // console.log("experience =", noob_val);

    var experience_val = urlParams.get('experience'); // true (string)
    // console.log("experience_true");
    var experience_string = urlParams.get('experience'); // NULL

    // if (urlParams.has('experience')) {
      // console.log("success");
      // var noob = document.getElementById("noob");
      // noob.style.display = "block";
      // console.log("noob true");
    // }

    if (experience_string == 'noob') {
      console.log("NOOB!");
      noob.style.display = "block";
      avg.style.display = "none";
      advanced.style.display = "none";

    } else if (experience_string == 'avg') {
      console.log("avg true");
      noob.style.display = "none";
      avg.style.display = "block";
      advanced.style.display = "none";

    } else if (experience_string == 'advanced') {
      console.log("advanced true");
      noob.style.display = "none";
      avg.style.display = "none";
      advanced.style.display = "block";

    }

});
