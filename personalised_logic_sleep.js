$(document).ready(function() {
    console.log("Document ready - logic script running!");

    // Get URL & paramaters
    const urlParams = new URLSearchParams(window.location.search);
    // console.log(urlParams);

    // Dynamic class selector test
    // var bannerName = "Banner";
    // $("#hero"+bannerName).css("background-color", "red");
    // console.log("set hero bkg to red");

    // Name values
    // Values: dynamic
    // const name_param = urlParams.get('name');
    // console.log("name =", name_param);
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
    var category_string = urlParams.get('category');
    console.log("Update category to:", category_string);
    $("#category").text(category_string);

    // Content
    var mainTitle = "sleep enhancement";
    var latencyTitle = "falling asleep quicker";
    var continuityTitle = "staying asleep longer";
    var remTitle = "boosting REM sleep";
    var deepTitle = "boosting deep sleep";
    const latencyVal = "latency";
    console.log("latencyVal =", latencyVal);
    const continuityVal = "continuity";
    console.log("continuityVal =", continuityVal);
    const remVal = "rem";
    console.log("remVal =", remVal);
    const deepVal = "deep";
    console.log("deepVal =", deepVal);

    // Optimised - from 1-3
    var optimisedTitle01 = "Not Very";
    var optimisedTitle02 = "Somewhat";
    var optimisedTitle03 = "Very";
    $(".margin_0.optimisedtitle_01").text(optimisedTitle01);
    $(".margin_0.optimisedtitle_02").text(optimisedTitle02);
    $(".margin_0.optimisedtitle_03").text(optimisedTitle03);

    if (optimised_param == 'notvery') {
      console.log("Optimised: Not Very = true");
      $("#optimised_01").css({'opacity': '1', 'border': '4px solid #577ad1'});
      $("#optimised_02, #optimised_03").css('opacity', '0.5');
      console.log("Multiple jQuery CSS property = working");

    } else if (optimised_param == 'somewhat') {
      console.log("Optimised = Somewhat");
      $("#optimised_01, #optimised_03").css('opacity', '0.5');
      $("#optimised_02").css({'opacity': '1', 'border': '4px solid #577ad1'});

    } else if (optimised_param == 'psychonaut') {
      console.log("Optimised: Psychonaut = true");
      $("#optimised_01, #optimised_02").css('opacity', '0.5');
      $("#optimised_03").css({'opacity': '1', 'border': '4px solid #577ad1'});
    }

    // Subcategory focus area
    if (subcategory_param == 'latency') {

      // Checklist section
      $("#checklist_title").text(mainTitle);

      // Noots section
      $("#noots_products_title").text(latencyTitle);
      $("#noots_subheadSubcategory").text(subcategory_param);
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
      $("#noots_subheadSubcategory").text(subcategory_param);
      $("#products_continuity").show();
      $("#products_latency, #products_rem, #products_deep").hide();

      // Playlist section
      $("#playlist_continuity").show();
      $("#playlist_latency, #playlist_rem, #playlist_deep").hide();

      // IN FUTURE, HERE IS A MORE EFFICIENT WAY TO APPEND THE _SUBCATEGORY ON END, DYNAMICALLY, NOT MANUALLY
      // $('#playlist_' + latencyVal, '#playlist_' + remVal, '#playlist_' + deepVal).hide();
      // console.log(latencyVal, remVal, deepVal);
      // console.log("dynamic class selector is working!");

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
      $("#noots_subheadSubcategory").text(subcategory_param);
      $("#products_focus, #products_memory, #products_mood").hide();
      $("#products_stress").show();

      // Playlist section
      // $("#playlist_title").text(remTitle);
      // $("#playlist_subtitle").text(subcategory_param);
      // $("#playlist_subtitle_boost").text("reduce");
      $("#playlist_rem").show();
      $("#playlist_latency, #playlist_continuity, #playlist_deep").hide();

      // Masterclass section
      $("#masterclassModule_stress").show();
      $("#masterclassModule_focus, #masterclassModule_memory, #masterclassModule_mood").hide();

      // Custom Stack section
      $("#custom_stack_title").text(remTitle);
      $("#customStackBanner_stress").show();
      $("#customStackBanner_memory, #customStackBanner_focus, #customStackBanner_mood").hide();

      $("#masterclassModule_rem").show();
      $("#masterclassModule_continuity, #masterclassModule_rem, #masterclassModule_deep").hide();

    } else if (subcategory_param == 'deep') {

      // Checklist section
      $("#checklist_title").text(mainTitle);

      // Noots section
      $("#noots_products_title").text(deepTitle);
      $("#noots_subheadSubcategory").text(subcategory_param);
      $("#products_focus, #products_memory, #products_stress").hide();
      $("#products_mood").show();

      // Playlist section
      // $("#playlist_title").text(deepTitle);
      // $("#playlist_subtitle").text(subcategory_param);
      $("#playlist_deep").show();
      $("#playlist_continuity, #playlist_latency, #playlist_rem").hide();

      // Masterclass section
      $("#masterclass_modules_mood").show();
      $("#masterclassModule_focus, #masterclassModule_stress, #masterclassModule_memory").hide();

      // Custom Stack section
      $("#custom_stack_title").text(deepTitle);
      $("#customStackBanner_mood").show();
      $("#customStackBanner_memory, #customStackBanner_stress, #customStackBanner_focus").hide();

    } else if (subcategory_param == 'other') {
      $("#noots_block, #checklist_noots").hide();
      $("#custom_stack_block").insertAfter("#checklist");
      // Make line visible in block as it move up
      // Hide line @ bottom block of page - how can I determine what block it will be, or will I have to manually sort it out?
    }

    // Experience
    if (experience_param == 'fresh') {
      $("#checklist_ebook, #playlist_block, #checklist_playlist, #masterclass_block, #checklist_masterclass").show();
      $("#custom_stack_block, #checklist_customStack").hide();

    } else if (experience_param == 'avg') {
      // Show Ebook, Custom Stack, Masterclass
      $("#checklist_ebook, #custom_stack_block, #checklist_customStack, #masterclass_block, #checklist_masterclass").show();
      // $("#noots_block, #checklist_noots, #playlist_block, #checklist_playlist").hide();

    } else if (experience_param == 'expert') {
      $("#custom_stack_block, #checklist_customStack").show();
      $("#noots_block, #checklist_noots, #checklist_ebook, #playlist_block, #checklist_playlist, #masterclass_block, #checklist_masterclass").hide();
      // Show coaching at top, hide everything else
      // Need to update checklist
    }

    // Coaching logic
    if (coaching_param == 'yes') {
      $("#checklist_customStack, #custom_stack_block").show();
      $("#custom_stack_block").insertAfter("#checklist");
    }

});

// Masterclass custom thumbnail, video-expander and responsive YT embed
jQuery("#playVideo").on('click', function() {
   setTimeout(
       function() {
         // var vi = jQuery("#iframe");
         // vi.attr("src", vi.data("autoplay-src"));
         $("#wistia_responsive_padding").css({ opacity: 1 });
         ("#wistia_responsive_padding").css({ paddingBottom: "56.25%" });
         $("#wistia_responsive_wrapper").css({ height: "100%" });
       },
       // Num of miliseconds to hide for. 1,000 = 1 sec.
       350);
});
