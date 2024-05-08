
  function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
      x.className += ' responsive';
    } else {
      x.className = 'navtoggle';
    }
  }


  $(document).ready(function() {
    $("#go-to-top-button").click(function (event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: "0" }, 2000);
    });
  });