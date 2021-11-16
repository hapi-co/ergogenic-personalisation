/*
?myparam1={id1}&myparam2={id2}

https://www.ergogenic.health/personalisation/cognitive-enhancement?experience=noob&

Values:
area=brain
area=sleep
area=testosterone

experience=noob
experience=average
experience=pro

focus=brain-concentration
focus=sleep-quality
focus=testosterone-libido


First test URL: https://www.ergogenic.health/personalisation/cognitive-enhancement?area=Cognitive%20Performance&experience=Fuck%20all%20-%20I%27m%20a%20noob

Second test URL: https://www.ergogenic.health/personalisation/cognitive-enhancement?area=brain&experience=advanced
*/

// V1
  const queryString = window.location.search;
  console.log(queryString);

  const urlParams = new URLSearchParams(queryString);
  if (urlParams.has('experience=noob')) {
    var x = document.getElementById("noob");
    x.style.display = "none";
  }


// V2
  const queryString = window.location.search;
  console.log(queryString);

  const urlParams = new URLSearchParams(queryString);

  const area = urlParams.get('area')
  console.log(area);

  const experience = urlParams.get('experience')
  console.log(experience);

  }

// V3
  const queryString = window.location.search;
  console.log(queryString);

  const urlParams = new URLSearchParams(queryString);
  if (urlParams.has('noob')) {
    console.log(hide_noob_h1_triggered);
    var noob_h1 = document.getElementById("noob");
    noob_h1.style.display = "none";
  }

  const area = urlParams.get('area')
  console.log(area);

  const experience = urlParams.get('experience')
  console.log(experience);

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
