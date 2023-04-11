window.addEventListener("load", function () {
  var x = 0;
  var myVar = setInterval(function () {
    if (x == 0) {
      if (
        jQuery("#success:contains(has been sent)").is(":visible") &&
        window.location.pathname == "/"
      ) {
        gtag("event", "conversion", {
          send_to: "AW-11077030407/VcKMCJykvJcYEIek-KEp",
        });
        clearInterval(myVar);
        x = 1;
      }
    }
  }, 1000);

  jQuery("body").on("mousedown", "a:contains(Book Your Meeting)", function () {
    gtag("event", "conversion", {
      send_to: "AW-11077030407/YNrhCJakvJcYEIek-KEp",
    });
  });
  jQuery("body").on("mousedown", ".email", function () {
    gtag("event", "conversion", {
      send_to: "AW-11077030407/Ml-BCJmkvJcYEIek-KEp",
    });
  });
  if (window.location.href.indexOf("/hire/") != -1) {
    jQuery("body").on("mousedown", "button:contains(Submit)", function () {
      gtag("event", "conversion", {
        send_to: "AW-11077030407/yu_VCJ-kvJcYEIek-KEp",
      });
    });
  }
});
