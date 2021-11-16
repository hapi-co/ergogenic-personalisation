// Test cunny

// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
});

// V4
  const queryString = window.location.search;
  console.log(queryString);

  const urlParams = new URLSearchParams(queryString);

  // Function won't load. Figure out how to make it fire!!
  window.onload = function() {
    if (urlParams.has('noob')) {
      console.log(hide_noob_h1_triggered);
      var noob_h1 = document.getElementById("noob");
      noob_h1.style.display = "none";
    }
  }

  const area = urlParams.get('area')
  console.log(area);

  const experience = urlParams.get('experience')
  console.log(experience);
