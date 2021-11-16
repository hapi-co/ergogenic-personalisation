// Test cunny

// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );

    // V4
      const queryString = window.location.search;
      console.log(queryString);

      const urlParams = new URLSearchParams(queryString);
      // console.log(urlParams.has('experience'));
      console.log(urlParams.has('experience', 'noob'));
      // console.log(urlParams.getAll('experience'));
      // console.log(urlParams.getAll('experience', 'noob'));
      // console.log(urlParams.getAll('area'));

        if (urlParams.has('experience', 'noob')) {
          console.log("success");
          var noob_h1 = document.getElementById("noob");
          noob_h1.style.display = "none";
          console.log("hidden");
        }

      //const area = urlParams.get('area')
      //console.log(area);

      // const experience = urlParams.get('experience')
      // console.log(experience);

});
