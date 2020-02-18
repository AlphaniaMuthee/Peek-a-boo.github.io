jQuery(document).ready(function() {
  jQuery("h1").click(function() {
    alert("This is a header.");
  });

  jQuery(".clickable").click(function() {
    jQuery(".walrus-showing").toggle();
    jQuery(".walrus-hidden").toggle();
  });

  jQuery("img").click(function() {
    alert("This is an image.");
  });
});
