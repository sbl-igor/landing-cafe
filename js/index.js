$(document).ready(function() {
    $(".header-burger-menu").click(function(event) {
        $(".header-burger-menu,.header-nav").toggleClass('active');
        $("body").toggleClass('block-scroll');
    })
})

$(document).ready(function() {
    $('.btn-apply').click(function(event) {
        $(".popup-modale").addClass('active');
        event.preventDefault(); 
        var sectionId = $(this).attr("href"); 
        var targetSection = $(sectionId); 
        if (targetSection.length) {
          $("html, body").animate({ scrollTop: targetSection.offset().top }, "slow"); 
        }        
    })
    $('.popup-modale-cont__exit').click(function(event) {
        $(".popup-modale").removeClass('active');
    })
})

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();

    var formData = $(this).serialize(); 
    var inputValue = document.getElementById("input-name").value;
  
    $.ajax({
      type: "POST",
      url: "https://www.youtube.com/", 
      data: formData,
      success: function(response) {
        console.log(response);
      },
      error: function(error) {
        console.error(error);
        alert(`Thank you, expect a call, ${inputValue}!`);
      }
    });
  });
});

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    effect: 'flip',
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});
  