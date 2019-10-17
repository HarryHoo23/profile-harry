// Progress Bar

$(function () {

  var prog = $(".progress-bar");

  console.log(prog);

  prog.eq(0).animate({
    width: "80%"
  }, 2500)

  prog.eq(1).animate({
    width: "70%"
  }, 2500)

  prog.eq(2).animate({
    width: "75%"
  }, 2500)

  prog.eq(3).animate({
    width: "95%"
  }, 2500)

  prog.eq(4).animate({
    width: "90%"
  }, 2500)

  prog.eq(5).animate({
    width: "85%"
  }, 2500)

});



// Show desired Page with animation when clicked
$(window).on('load', function () {
  $(".nav-item").addEventListener(alert);
});


// Example starter JavaScript for disabling form submissions if there are invalid fields
$(function () {
  'use strict';
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
});


$(function () {
  new WOW().init();
})


$(function initMap() {
  // The location of Uluru
  var uluru = {
    lat: -25.344,
    lng: 131.036
  };
  // The map, centered at Uluru
  var map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
})