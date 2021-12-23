$(document).ready(function() {
    console.log("Document ready - logic script running!");

    // Get URL & paramaters
    const urlParams = new URLSearchParams(window.location.search);
    // console.log(urlParams);

    // Name values
    // Values: dynamic
    const name_string = urlParams.get('name'); // NULL
    $("#name").text(name_string);
    console.log("Update name to:",name_string);

    // Optimised values
    // Values: notvery, somewhat, psychonaut
    const optimised_param = urlParams.get('optimised');
    console.log("optimised =", optimised_param);

    // Category values
    // Values: brain, sleep, testosterone
    const category_param = urlParams.get('category');
    console.log("category =", category_param);

    // Subcategory values
    // Values: latency, continuity, REM, deep, other
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

    // Update category
    const category_string = urlParams.get('category');
    $("#category").text(category_string);
    console.log("Update category to:", category_string);

    // Content
    const mainTitle = "sleep enhancement";
    const latencyTitle = "falling asleep quicker";
    const continuityTitle = "staying asleep longer";
    const remTitle = "boosting REM sleep";
    const deepTitle = "boosting deep sleep";
    const latencyVal = "latency";
    const continuityVal = "continuity";
    const remVal = "rem";
    const deepVal = "deep";

    // Optimised - from 1-3
    const optimisedTitle01 = "Not Very";
    const optimisedTitle02 = "Somewhat";
    const optimisedTitle03 = "Very";
    $(".margin_0.optimisedtitle_01").text(optimisedTitle01);
    $(".margin_0.optimisedtitle_02").text(optimisedTitle02);
    $(".margin_0.optimisedtitle_03").text(optimisedTitle03);

    if (optimised_param == 'notvery') {
      $("#optimised_01").css({'opacity': '1', 'border': '4px solid #577ad1'});
      $("#optimised_02, #optimised_03").css('opacity', '0.5');
      console.log("Multiple jQuery CSS property = working");
      console.log("Optimised: Not Very = true");

    } else if (optimised_param == 'somewhat') {
      $("#optimised_01, #optimised_03").css('opacity', '0.5');
      $("#optimised_02").css({'opacity': '1', 'border': '4px solid #577ad1'});
      console.log("Optimised = Somewhat");

    } else if (optimised_param == 'psychonaut') {
      $("#optimised_01, #optimised_02").css('opacity', '0.5');
      $("#optimised_03").css({'opacity': '1', 'border': '4px solid #577ad1'});
      console.log("Optimised: Psychonaut = true");
    }

    // Experience
    if (experience_param == 'fresh') {
      $("#noots_block, #checklist_noots, #ebook_block, #checklist_ebook, #playlist_block, #checklist_playlist, #masterclass_block, #checklist_masterclass").show();
      $("#custom_stack_block, #checklist_customStack").hide();
      console.log("experience = fresh");
      console.log("show: ebook, playlist, masterclass & hide custom noots");
    } else if (experience_param == 'avg') {
      // Show Ebook, Custom Stack, Masterclass
      $("#noots_block, #checklist_noots, #ebook_block, #checklist_ebook, #custom_stack_block, #checklist_customStack, #masterclass_block, #checklist_masterclass").show();
      console.log("experience = avg");
      console.log("show: ebook, custom stack, masterclass & hide playlist, noots?");
    } else if (experience_param == 'expert') {
      $("#custom_stack_block, #checklist_customStack").show();
      $("#noots_block, #checklist_noots, #ebook_block, #checklist_ebook, #playlist_block, #checklist_playlist, #masterclass_block, #checklist_masterclass").hide();
      console.log("experience = expert");
      console.log("show: custom stack, hide all else");
    }

    // Subcategory focus area
    if (subcategory_param == 'latency') {
      // Checklist section
      $("#checklist_title").text(mainTitle);
      // Noots section
      $("#noots_products_title").text(latencyTitle);
      $("#products_latency").show();
      $("#products_continuity, #products_rem, #products_deep").hide();
      // Playlist section
      $("#playlist_latency").show();
      $("#playlist_continuity, #playlist_rem, #playlist_deep").hide();
      // Masterclass section
      $("#masterclassModule_latency").show();
      $("#masterclassModule_continuity, #masterclassModule_rem, #masterclassModule_deep").hide();
      // Custom Stack section
      // $("#custom_stack_title").text(focusTitle);
      $("#customStackBanner_latency").show();
      $("#customStackBanner_continuity, #customStackBanner_rem, #customStackBanner_deep").hide();
    } else if (subcategory_param == 'continuity') {
      // Checklist section
      $("#checklist_title").text(mainTitle);
      // Noots section
      $("#noots_products_title").text(continuityTitle);
      $("#products_continuity").show();
      $("#products_latency, #products_rem, #products_deep").hide();
      // Playlist section
      $("#playlist_continuity").show();
      $("#playlist_latency, #playlist_rem, #playlist_deep").hide();
      // Masterclass section
      $("#masterclassModule_continuity").show();
      $("#masterclassModule_latency, #masterclassModule_rem, #masterclassModule_deep").hide();
    // Custom Stack section
      $("#customStackBanner_continuity").show();
      $("#customStackBanner_latency, #customStackBanner_rem, #customStackBanner_deep").hide();
    } else if (subcategory_param == 'rem') {
      // Checklist section
      $("#checklist_title").text(mainTitle);
      // Noots section
      $("#noots_products_title").text(remTitle);
      $("#products_rem").show();
      $("#products_latency, #products_continuity, #products_deep").hide();
      // Playlist section
      $("#playlist_rem").show();
      $("#playlist_latency, #playlist_continuity, #playlist_deep").hide();
      // Masterclass section
      $("#masterclassModule_rem").show();
      $("#masterclassModule_latency, #masterclassModule_continuity, #masterclassModule_deep").hide();
      // Custom Stack section
      $("#custom_stack_title").text(remTitle);
      $("#customStackBanner_rem").show();
      $("#customStackBanner_latency, #customStackBanner_continuity, #customStackBanner_deep").hide();
    } else if (subcategory_param == 'deep') {
      // Checklist section
      $("#checklist_title").text(mainTitle);
      // Noots section
      $("#noots_products_title").text(deepTitle);
      $("#products_deep").show();
      $("#products_latency, #products_continuity, #products_rem").hide();
      // Playlist section
      $("#playlist_deep").show();
      $("#playlist_latency, #playlist_continuity, #playlist_rem").hide();
      // Masterclass section
      $("#masterclass_modules_deep").show();
      $("#masterclassModule_latency, #masterclassModule_continuity, #masterclassModule_rem").hide();
      // Custom Stack section
      $("#custom_stack_title").text(deepTitle);
      $("#customStackBanner_deeo").show();
      $("#customStackBanner_latency, #customStackBanner_continuity, #customStackBanner_rem").hide();
    } else if (subcategory_param == 'other') {
      $("#checklist_title").text(mainTitle);
      $("#custom_stack_block").insertAfter("#checklist");
      $("#custom_stack_block, #checklist_customStack, #coachingLine, #customStackBanner_latency").show();
      $("#noots_block, #checklist_noots, #ebook_block, #checklist_ebook, #playlist_block, #checklist_playlist, #masterclass_block, #checklist_masterclass, #coachingLine, #customStackBanner_continuity, #customStackBanner_rem, #customStackBanner_deep").hide();
      console.log("other = true, moving custom stack to top");
      console.log("other = true");
      console.log("hiding Noots section");
    }

    // Coaching logic
    if (coaching_param == 'yes') {
      $("#checklist_title").text(mainTitle);
      // $("#custom_stack_block").insertAfter("#checklist");
      $("#checklist_customStack, #custom_stack_block, #coachingLine").show();
      $("#noots_block, #checklist_noots").hide();
      console.log("coaching = true");
    } else if (coaching_param == 'no') {
      $("#masterclassLine, #checklist_customStack, #custom_stack_block").hide();
      console.log("coaching = false");
    }

    // OVERRIDES
    if (coaching_param == 'yes' && subcategory_param == 'other') {
      $("#custom_stack_block").show();
      $("#coachingLine").hide();
      console.log("coaching and category other = true");
    }

    if (coaching_param == 'yes' && experience_param == 'expert') {
      console.log("coaching no and experience expert = true");
      $("#custom_stack_block").show();
      $("#coachingLine").hide();
    }

    if (experience_param == 'expert') {
      $("#checklist_customStack, #custom_stack_block").show();
      $("#coachingLine").hide();
      console.log("coaching no and experience expert = true");
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

// Dynamic class selector test
// var bannerName = "Banner";
// $("#hero"+bannerName).css("background-color", "red");
// console.log("set hero bkg to red");

//
// if (musicTaste == 'Justin Beiber') {
  // penisSize: "8==D";
// } else if (musicTaste == 'Black Sabbath') {
  // penisSize: "8=====================================D";
// }
