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

    // Optimised values
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
    // var experience_string = urlParams.get('experience');

    // Update name
    var name_string = urlParams.get('name'); // NULL
    console.log("Update name to:",name_string);
    $("#name").text(name_string);
    // $("#name_01").text(name_string);

    // Update category
    var category_string = urlParams.get('category');
    console.log("Update category to:", category_string);
    $("#category").text(category_string);

    // Update subcategory
    // var subcategory_string = urlParams.get('subcategory');
    // console.log("Update subcategory to:", subcategory_string);
    // $(".subcategory").text(subcategory_string);

    // Experience / level of optimisation from 1-3
    // Hero section
    if (optimised_param == 'notvery') {
      console.log("Optimised: Not Very = true");
      // $("#experience").text("Optimised: " + "YOU'RE A NOOB!");
      $("#optimised_01").css('opacity', '1');
      $("#optimised_02").css('opacity', '0.5');
      $("#optimised_03").css('opacity', '0.5');
      $("#optimised_01").css('border', '4px solid #395C56');

    } else if (optimised_param == 'somewhat') {
      console.log("Optimised = Somewhat");
      // $("#experience").text("Optimised: " + "YOU'RE AVERAGE!");
      $("#optimised_01").css('opacity', '0.5');
      $("#optimised_02").css('opacity', '1');
      $("#optimised_03").css('opacity', '0.5');
      $("#optimised_02").css('border', '4px solid #395C56');

    } else if (optimised_param == 'psychonaut') {
      console.log("Optimised: Psychonaut = true");
      // $("#experience").text("Optimised: " + "YOU'RE ADVANCED!");
      $("#optimised_01").css('opacity', '0.5');
      $("#optimised_02").css('opacity', '0.5');
      $("#optimised_03").css('opacity', '1');
      $("#optimised_03").css('border', '4px solid #395C56');
    }

    // Show / hide blocks
    // $("#id").show();
    // $("#id").hide();
    // Checklist section
    // Noots section
      // #noots_block
    // Ebook section
      // #ebook_block
    // Playlist section
      // #playlist_block
    // Masterclass section
      // #masterclass_block
    // Custom Stack section
      // #custom_stack_block

    // Subcategory focus area
    if (subcategory_param == 'focus') {
      console.log("focus = true");
      // Checklist section
      $("#checklist_title").text("Focus-Enhancement");
      // Noots section
      $("#noots_products_title").text("Focus");
      $("#noots_products_subheading").text("Noots subheading");
      $("#products_focus").show();
      $("#products_memory").hide();
      $("#products_stress").hide();
      $("#products_mood").hide();
      // Ebook section
      $("#ebook_title").text("Improve Focus");
      $("#ebook_subheading").text("Ebook subheading");
      // Playlist section
      $("#playlist_title").text("Focus-Enhancement");
      // Masterclass section
      $("#masterclass_subheading").text("Masterclass subheading");
      // Custom Stack section
      $("#custom_stack_title").text("Focus-Enhancement");

    } else if (subcategory_param == 'memory') {
      console.log("memory = true");
      // Checklist section
      $("#checklist_title").text("Memory-Enhancement");
      // Noots section
      $("#noots_products_title").text("Memory");
      $("#noots_products_subheading").text("Noots subheading");
      $("#products_focus").hide();
      $("#products_memory").show();
      $("#products_stress").hide();
      $("#products_mood").hide();
      // Ebook section
      $("#ebook_title").text("Improve Memory");
      $("#ebook_subheading").text("Ebook subheading");
      // Playlist section
      $("#playlist_title").text("Memory-Enhancement");
      // Masterclass section
      $("#masterclass_subheading").text("Masterclass subheading");
      // Custom Stack section
      $("#custom_stack_title").text("Memory-Enhancement");

    } else if (subcategory_param == 'stress') {
      console.log("stress = true");
      // Checklist section
      $("#checklist_title").text("Stress-Reduction");
      // Noots section
      $("#noots_products_title").text("Stress-Reduction");
      $("#noots_products_subheading").text("Noots subheading");
      $("#products_focus").hide();
      $("#products_memory").hide();
      $("#products_stress").show();
      $("#products_mood").hide();
      // Ebook section
      $("#ebook_title").text("Reduce Stress");
      $("#ebook_subheading").text("Ebook subheading");
      // Playlist section
      $("#playlist_title").text("Stress-Reduction");
      // Masterclass section
      $("#masterclass_subheading").text("Masterclass subheading");
      // Custom Stack section
      $("#custom_stack_title").text("Stress-Reduction");

    } else if (subcategory_param == 'mood') {
      console.log("mood = true");
      // Checklist section
      $("#checklist_title").text("Mood-Boosting");
      // Noots section
      $("#noots_products_title").text("Mood-Boosting");
      $("#noots_products_subheading").text("Noots subheading");
      $("#products_focus").hide();
      $("#products_memory").hide();
      $("#products_stress").hide();
      $("#products_mood").show();
      // Ebook section
      $("#ebook_title").text("Boost your Mood");
      $("#ebook_subheading").text("Ebook subheading");
      // Playlist section
      $("#playlist_title").text("Mood-Boosting");
      // Masterclass section
      $("#masterclass_subheading").text("Masterclass subheading");
      // Custom Stack section
      $("#custom_stack_title").text("Mood-Boosting");

    } else if (subcategory_param == 'other') {
      console.log("other = true");
      console.log("hiding Noots section");
      $("#noots_block").hide();
      // Show 1-1 coaching / cust stack service
      // Figure out how to MOVE cust stack to Noots sect, or duplicate sect & use classes instead of IDs on both so it's seamless. But still, there will be a ton of varients... what is a simple solution here?
      // Do I need to interact w/ the DOM?
      // Ask Timon, maybe?
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
         // console.log("video opacity set to 100%");
         // console.log("video height set to 100%");
         // console.log("video padding-bottom set to 56.25%");
         // console.log("video playing...");
       },
       // Num of miliseconds to hide for. 1,000 = 1 sec.
       350);
});
