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
    // Values: struggling, average, Semi-Solid
    const optimised_param = urlParams.get('optimised');
    console.log("optimised =", optimised_param);

    // Category values
    // Values: brain, sleep, testosterone
    const category_param = urlParams.get('category');
    console.log("category =", category_param);

    // Subcategory values
    // Values: sex, muscle, mental, other
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
    const mainTitle = "testosterone enhancement";
    const sexTitle = "improving sexual performance";
    const muscleTitle = "muscle growth";
    const mentalTitle = "improving mental health";
    const sexVal = "sex";
    const musceleVal = "muscle";
    const mentalVal = "mental";

    // Optimised - from 1-3
    const optimisedTitle01 = "Struggling";
    const optimisedTitle02 = "Average";
    const optimisedTitle03 = "Semi-Solid";
    $(".margin_0.optimisedtitle_01").text(optimisedTitle01);
    $(".margin_0.optimisedtitle_02").text(optimisedTitle02);
    $(".margin_0.optimisedtitle_03").text(optimisedTitle03);

    if (optimised_param == 'notvery') {
      $("#optimised_01").css({'opacity': '1', 'border': '4px solid #6d79c3'});
      $("#optimised_02, #optimised_03").css('opacity', '0.5');
      console.log("Multiple jQuery CSS property = working");
      console.log("Optimised: Not Very = true");

    } else if (optimised_param == 'somewhat') {
      $("#optimised_01, #optimised_03").css('opacity', '0.5');
      $("#optimised_02").css({'opacity': '1', 'border': '4px solid #6d79c3'});
      console.log("Optimised = Somewhat");

    } else if (optimised_param == 'psychonaut') {
      $("#optimised_01, #optimised_02").css('opacity', '0.5');
      $("#optimised_03").css({'opacity': '1', 'border': '4px solid #6d79c3'});
      console.log("Optimised: Psychonaut = true");
    }

    // Experience
    if (experience_param == 'fresh') {
      $("#ebook_block, #checklist_ebook, #playlist_block, #checklist_playlist, #masterclass_block, #checklist_masterclass").show();
      $("#custom_stack_block, #checklist_customStack").hide();
      console.log("experience = fresh");
      console.log("show: ebook, playlist, masterclass & hide custom noots");
    } else if (experience_param == 'avg') {
      // Show Ebook, Custom Stack, Masterclass
      $("#ebook_block, #checklist_ebook, #custom_stack_block, #checklist_customStack, #masterclass_block, #checklist_masterclass").show();
      console.log("experience = avg");
      console.log("show: ebook, custom stack, masterclass & hide playlist, noots?");
    } else if (experience_param == 'expert') {
      $("#custom_stack_block, #checklist_customStack").show();
      $("#noots_block, #checklist_noots, #ebook_block, #checklist_ebook, #playlist_block, #checklist_playlist, #masterclass_block, #checklist_masterclass").hide();
      console.log("experience = expert");
      console.log("show: custom stack, hide all else");
    }

    // Subcategory focus area
    if (subcategory_param == 'sex') {
      // Checklist section
      $("#checklist_title").text(mainTitle);
      // Noots section
      $("#noots_products_title").text(sexTitle);
      $("#products_sex").show();
      $("#products_muscle, #products_mental").hide();
      // Playlist section
      $("#playlist_sex").show();
      $("#playlist_muscle, #playlist_mental, #playlist_deep").hide();
      // Masterclass section
      $("#masterclassModule_sex").show();
      $("#masterclassModule_muscle, #masterclassModule_mental").hide();
      // Custom Stack section
      // $("#custom_stack_title").text(focusTitle);
      $("#customStackBanner_sex").show();
      $("#customStackBanner_muscle, #customStackBanner_mental").hide();
    } else if (subcategory_param == 'muscle') {
      // Checklist section
      $("#checklist_title").text(mainTitle);
      // Noots section
      $("#noots_products_title").text(muscleTitle);
      $("#products_muscle").show();
      $("#products_sex, #products_mental").hide();
      // Playlist section
      $("#playlist_muscle").show();
      $("#playlist_sex, #playlist_mental").hide();
      // Masterclass section
      $("#masterclassModule_muscle").show();
      $("#masterclassModule_sex, #masterclassModule_mental").hide();
    // Custom Stack section
      $("#customStackBanner_muscle").show();
      $("#customStackBanner_sex, #customStackBanner_mental").hide();
    } else if (subcategory_param == 'mental') {
      // Checklist section
      $("#checklist_title").text(mainTitle);
      // Noots section
      $("#noots_products_title").text(mentalTitle);
      $("#products_mental").show();
      $("#products_sex, #products_muscle").hide();
      // Playlist section
      $("#playlist_mental").show();
      $("#playlist_sex, #playlist_muscle").hide();
      // Masterclass section
      $("#masterclassModule_mental").show();
      $("#masterclassModule_sex, #masterclassModule_muscle").hide();
      // Custom Stack section
      $("#custom_stack_title").text(mentalTitle);
      $("#customStackBanner_mental").show();
      $("#customStackBanner_sex, #customStackBanner_muscle").hide();
    } else if (subcategory_param == 'other') {
      $("#checklist_title").text(mainTitle);
      $("#custom_stack_block").insertAfter("#checklist");
      $("#custom_stack_block, #checklist_customStack, #coachingLine, #customStackBanner_sex").show();
      $("#noots_block, #checklist_noots, #ebook_block, #checklist_ebook, #playlist_block, #checklist_playlist, #masterclass_block, #checklist_masterclass, #coachingLine, #customStackBanner_muscle, #customStackBanner_mental").hide();
      console.log("other = true, moving custom stack to top");
      console.log("other = true");
      console.log("hiding Noots section");
    }

    // Coaching logic
    if (coaching_param == 'yes') {
      $("#checklist_title").text(mainTitle);
      $("#custom_stack_block").insertAfter("#checklist");
      $("#checklist_customStack, #custom_stack_block, #coachingLine").show();
      $("#noots_block, #checklist_noots, #masterclassLine").hide();
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
