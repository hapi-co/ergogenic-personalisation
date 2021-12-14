$(document).ready(function() {
    console.log("Document ready - logic script running!");
    console.log("External script loaded");

    // Get URL & paramaters
    const urlParams = new URLSearchParams(window.location.search);
    // console.log(urlParams);

    // Name values
    // Values: dynamic
    const name_param = urlParams.get('name');
    console.log("name =", name_param);

    // Optimised values
    // Values: notvery, somewhat, psychonaut
    const optimised_param = urlParams.get('optimised');
    console.log("optimised =", optimised_param);
    // Test w/ out last line, seems like a duplicate...
    // var experience_string = urlParams.get('experience');

    // Category values
    // Values: brain, sleep, testosterone
    const category_param = urlParams.get('category');
    console.log("category =", category_param);

    // Subcategory values
    // Values: focus, memory, stress, mood, other
    const subcategory_param = urlParams.get('subcategory');
    console.log("subcategory =", subcategory_param);

    // Experience values
    // Values: fresh, avg, expert
    const experience_param = urlParams.get('experience');
    console.log("experience =", experience_param);

    // Coaching values
    // Values: yes, no
    const coaching_param = urlParams.get('coaching');
    console.log("coaching =", coaching_param);

    // Masterclass values
    // Values: yes, no
    const masterclass_param = urlParams.get('masterclass');
    console.log("masterclass =", masterclass_param);

    // Update name
    var name_string = urlParams.get('name'); // NULL
    console.log("Update name to:",name_string);
    $("#name").text(name_string);
    // $("#name_01").text(name_string);

    // Update category
    var category_string = urlParams.get('category');
    console.log("Update category to:", category_string);
    $("#category").text(category_string);

    // Optimised - from 1-3
    if (optimised_param == 'notvery') {
      console.log("Optimised: Not Very = true");
      $("#optimised_01").css({'opacity': '1', 'border': '4px solid #395C56'});
      $("#optimised_02, #optimised_03").css('opacity', '0.5');
      console.log("Multiple jQuery CSS property = working");

    } else if (optimised_param == 'somewhat') {
      console.log("Optimised = Somewhat");
      $("#optimised_01, #optimised_03").css('opacity', '0.5');
      $("#optimised_02").css({'opacity': '1', 'border': '4px solid #395C56'});

    } else if (optimised_param == 'psychonaut') {
      console.log("Optimised: Psychonaut = true");
      $("#optimised_01, #optimised_02").css('opacity', '0.5');
      $("#optimised_03").css({'opacity': '1', 'border': '4px solid #395C56'});
    }

    // Global
      // #noots_block
      // #ebook_block
      // #playlist_block
      // #masterclass_block
      // #custom_stack_block

    // Checklist IDs
      // #checklist_noots, #checklist_ebook, #checklist_playlist, #checklist_masterclass, #checklist_customStack

    if (coaching_param == 'yes') {
      console.log("coaching = true");
      $("#custom_stack_block").insertAfter("#checklist");
      // Make line visible in block as it move up
      // Hide line @ bottom block of page - how can I determine what block it will be, or will I have to manually sort it out?
      // Else if??
    }

    if (masterclass_param == 'yes') {
      console.log("masterclass = true");
      // Make line visible in block as it move up
      // Hide line @ bottom block of page - how can I determine what block it will be, or will I have to manually sort it out?
      // Else if??
    }

    var focusTitle = "Focus-Enhancement";
    console.log(focusTitle);

    // Subcategory focus area
    if (subcategory_param == 'focus') {
      console.log("focus = true");
      // Checklist section
      $("#checklist_title").text(focusTitle);
      // Noots section
      $("#noots_products_title").text("Focus");
      $("#noots_products_subheading").text("Noots subheading");
      $("#products_focus").show();
      $("#products_memory, #products_stress, #products_mood").hide();
      // Ebook section
      $("#ebook_title").text("Improve Focus");
      $("#ebook_subheading").text("Ebook subheading");
      // Playlist section
      $("#playlist_title").text(focusTitle);
      $("#playlist_focus").show();
      $("#playlist_memory, #playlist_stress, #playlist_mood").hide();
      // Masterclass section
      $("#masterclass_subheading").text("Masterclass subheading");
      // Custom Stack section
      $("#custom_stack_title").text(focusTitle);

    } else if (subcategory_param == 'memory') {
      console.log("memory = true");
      // Checklist section
      $("#checklist_title").text("Memory-Enhancement");
      // Noots section
      $("#noots_products_title").text("Memory");
      $("#noots_products_subheading").text("Noots subheading");
      $("#products_focus, #products_stress, #products_mood").hide();
      $("#products_memory").show();
      // Ebook section
      $("#ebook_title").text("Improve Memory");
      $("#ebook_subheading").text("Ebook subheading");
      // Playlist section
      $("#playlist_title").text("Memory-Enhancement");
      $("#playlist_focus, #playlist_stress, #playlist_mood").hide();
      $("#playlist_memory").show();
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
      $("#products_focus, #products_memory, #products_mood").hide();
      $("#products_stress").show();
      // Ebook section
      $("#ebook_title").text("Reduce Stress");
      $("#ebook_subheading").text("Ebook subheading");
      // Playlist section
      $("#playlist_title").text("Stress-Reduction");
      $("#playlist_focus, #playlist_memory, #playlist_mood").hide();
      $("#playlist_stress").show();
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
      $("#products_focus, #products_memory, #products_stress").hide();
      $("#products_mood").show();
      // Ebook section
      $("#ebook_title").text("Boost your Mood");
      $("#ebook_subheading").text("Ebook subheading");
      // Playlist section
      $("#playlist_title").text("Mood-Boosting");
      $("#playlist_focus, #playlist_memory, #playlist_stress").hide();
      $("#playlist_mood").show();
      // Masterclass section
      $("#masterclass_subheading").text("Masterclass subheading");
      // Custom Stack section
      $("#custom_stack_title").text("Mood-Boosting");

    } else if (subcategory_param == 'other') {
      console.log("other = true");
      console.log("hiding Noots section");
      $("#noots_block").hide();
      console.log("other = true, moving custom stack to top");
      $("#custom_stack_block").insertAfter("#checklist");
      // Make line visible in block as it move up
      // Hide line @ bottom block of page - how can I determine what block it will be, or will I have to manually sort it out?
    }

    // Experience
    if (experience_param == 'fresh') {
      console.log("experience = fresh");
      console.log("show: ebook, playlist, masterclass & hide custom noots");
      $("#ebook_block, #checklist_ebook, #playlist_block, #checklist_playlist, #masterclass_block, #checklist_masterclass").show();
      $("#custom_stack_block, #checklist_customStack").hide();

    } else if (experience_param == 'avg') {
      // Show Ebook, Custom Stack, Masterclass
      console.log("experience = avg");
      console.log("show: ebook, custom stack, masterclass & hide playlist, noots?");
      $("#ebook_block, #checklist_ebook, #custom_stack_block, #checklist_customStack, #masterclass_block, #checklist_masterclass").show();
      $("#noots_block, #checklist_noots, #playlist_block, #checklist_playlist").hide();

    } else if (experience_param == 'expert') {
      console.log("experience = expert");
      console.log("show: custom stack, hide all else");
      $("#custom_stack_block, #checklist_customStack").show();
      $("#noots_block, #checklist_noots, #ebook_block, #checklist_ebook, #playlist_block, #checklist_playlist, #masterclass_block, #checklist_masterclass").hide();
      // Show coaching at top, hide everything else
      // Need to update checklist
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
       },
       // Num of miliseconds to hide for. 1,000 = 1 sec.
       350);
});
