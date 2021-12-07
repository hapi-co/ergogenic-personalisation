<!-- Custom JS / Jquery script -->
<!-- Uses a Github repo + JSDeliver CDN -->
<!--
<script src="https://cdn.jsdelivr.net/gh/hapi-co/ergogenic-personalisation/personalise.js"></script>
-->

<!-- See index.html for URL params -->


<!-- REMEMBER TO PUT ALL THE BELOW IN <script></script> when in Webflow -->

    $( document ).ready(function() {
    console.log( "Document ready - logic script running!" );

    const urlParams = new URLSearchParams(window.location.search);
    // console.log(urlParams);

    // Name values
    // Values: dynamic
    const name_param = urlParams.get('name');
    console.log("name param =", name_param);

    // Optomised values
    // Values: notvery, somewhat, psychonaut
    const optimised_param = urlParams.get('optimised');
    console.log("optimised param =", optimised_param);
    // Test w/ out last line, seems like a duplicate...
    // var experience_string = urlParams.get('experience');

    // Category values
    // Values: brain, sleep, testosterone
    const category_param = urlParams.get('category');
    console.log("category param =", category_param);

    // Subcategory values
    // Values: focus, memory, stress, mood, other
    const subcategory_param = urlParams.get('subcategory');
    console.log("subcategory param =", subcategory_param);

    // Experience values
    // Values: fresh, avg, expert
    const experience_param = urlParams.get('experience');
    console.log("experience param =", experience_param);
    // Test w/ out last line, seems like a duplicate...
    var experience_string = urlParams.get('experience');

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
    $(".subcategory").text(priority_string);

    // Experience / level of optimisation from 1-3
    // Hero section
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
      $("#checklist_title").text("Focus-Enhancement");
      $("#noots_products_title").text("Focus");
      $("#ebook_title").text("Improve Focus");
      $("#playlist_title").text("Focus-Enhancement");
      $("#custom_stack_title").text("Focus-Enhancement");

    } else if (priority_string == 'memory') {
      console.log("memory = true");
      $("#checklist_title").text("Memory-Enhancement");
      $("#noots_products_title").text("Memory");
      $("#ebook_title").text("Improve Memory");
      $("#playlist_title").text("Memory-Enhancement");
      $("#custom_stack_title").text("Memory-Enhancement");

    } else if (priority_string == 'stress') {
      console.log("stress = true");
      $("#checklist_title").text("Stress-Reduction");
      $("#noots_products_title").text("Stress-Reduction");
      $("#ebook_title").text("Reduce Stress");
      $("#playlist_title").text("Stress-Reduction");
      $("#custom_stack_title").text("Stress-Reduction");

    } else if (priority_string == 'mood') {
      console.log("mood = true");
      $("#checklist_title").text("Mood-Boosting");
      $("#noots_products_title").text("Mood-Boosting");
      $("#ebook_title").text("Boost your Mood");
      $("#playlist_title").text("Mood-Boosting");
      $("#custom_stack_title").text("Mood-Boosting");

    } else if (priority_string == 'other') {
      console.log("other = true");
      // Script here
      // Hide container
      // Show 1-1 coaching / cust stack service

    }

});

// Masterclass custom thumbnail, video-expander and responsive YT embed
jQuery("#playVideo").on('click', function() {
   console.log("clicked video thumb...waiting...");
   setTimeout(
       function() {
         var vi = jQuery("#iframe");
         vi.attr("src", vi.data("autoplay-src"));
         $(".embed-container").css({ opacity: 1 });
         $(".embed-container").css({ height: "100%" });
         $(".embed-container").css({ paddingBottom: "56.25%" });
         console.log("video opacity set to 100%");
         console.log("video height set to 100%");
         console.log("video padding-bottom set to 56.25%");
         console.log("video playing...");
       },
       // Num of miliseconds to hide for. 1,000 = 1 sec.
       350);
});
