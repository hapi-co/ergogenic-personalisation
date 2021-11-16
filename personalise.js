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

        if (urlParams.has('noob')) {
          // console.log("success");
          var noob = document.getElementById("noob");
          noob.style.display = "block";
          console.log("noob true");

          var avg = document.getElementById("avg");
          avg.style.display = "none";
          // console.log("avg_triggered");

          var advanced = document.getElementById("advanced");
          advanced.style.display = "none";
          // console.log("advanced_triggered");

        } else if (urlParams.has('avg')) {
          console.log("avg true");

        }

        // new
        function GetURLParameter(sParam)
{
    console.log("test 01");
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1];
            console.log(sParameterName);
        }
    }
}

});
