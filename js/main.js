jQuery(document).ready(function(){
	if( $('.cd-stretchy-nav').length > 0 ) {
		var stretchyNavs = $('.cd-stretchy-nav');
		
		stretchyNavs.each(function(){
			var stretchyNav = $(this),
				stretchyNavTrigger = stretchyNav.find('.cd-nav-trigger');
			
			stretchyNavTrigger.on('click', function(event){
				event.preventDefault();
				stretchyNav.toggleClass('nav-is-visible');
			});
		});

		$(document).on('click', function(event){
			( !$(event.target).is('.cd-nav-trigger') && !$(event.target).is('.cd-nav-trigger span') ) && stretchyNavs.removeClass('nav-is-visible');
		});
	}

  	setTimeout(function(){
    		$('.scroll-link').removeClass('jabardasti')
  	}, 800)

	setInterval(function(){
		$('.scroll-link').addClass('neeche')
			setTimeout(function(){
				$('.scroll-link').removeClass('neeche')
		}, 900)
	}, 1800)

	$(window).resize(function(){
		var wid=$('.portfolio-img').width();
		$('.details').css('width', ''+wid+'');
    		var htemp=$(window).innerHeight();
    		$('.hero').css('height', ''+htemp+'');
	})

	$(window).load(function(){
		var wid=$('.portfolio-img').width();
		$('.details').css('width', ''+wid+'');
		    var htemp=$(window).innerHeight();
		    $('.hero').css('height', ''+htemp+'');
	})

	$('.box1').hover(function(){
	    setTimeout(function(){
	      $('.box1 .stuff').toggleClass('show')
	      $('.box1 .img-init').toggleClass('img-init-active')
	    }, 500)
  	})

	  $('.box2').hover(function(){
	    setTimeout(function(){
	      $('.box2 .stuff').toggleClass('show')
	      $('.box2 .img-init').toggleClass('img-init-active')
	    }, 500)
	  })

	  $('.box3').hover(function(){
	    setTimeout(function(){
	      $('.box3 .stuff').toggleClass('show')
	      $('.box3 .img-init').toggleClass('img-init-active')
	    }, 500)
	  })

	  $('.box4').hover(function(){
	    setTimeout(function(){
	      $('.box4 .stuff').toggleClass('show')
	      $('.box4 .img-init').toggleClass('img-init-active')
	    }, 500)
	  })

	$('.scroll-link').click(function(){
		$('html, body').animate({ scrollTop: $('.about').offset().top}, 750)
	})

	$('.author').click(function(){
		window.open("https://github.com/EDCBVUCOEP")
	})

	$("body").on("input propertychange", ".floating-label-form-group", function(e) {
      		$(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    	}).on("focus", ".floating-label-form-group", function() {
      		$(this).addClass("floating-label-form-group-with-focus");
    	}).on("blur", ".floating-label-form-group", function() {
      		$(this).removeClass("floating-label-form-group-with-focus");
   	 })

    $("#portfolio-flters li").click(function(){
	$("#portfolio-flters li").removeClass('filter-active');
	$(this).addClass('filter-active');
	var selectedFilter = $(this).data("filter");
	$("#portfolio-wrapper").fadeTo(100, 0);
	    $(".portfolio-item").fadeOut().css('transform', 'scale(0)');
	setTimeout(function() {
		$(selectedFilter).fadeIn(100).css('transform', 'scale(1)');
		$("#portfolio-wrapper").fadeTo(300, 1);
	}, 300);
  	})

    $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function($form, event, errors) {
      // additional error messages or events
    },
    submitSuccess: function($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM
      var name = $("input#name").val();
      var email = $("input#email").val();
      var phone = $("input#phone").val();
      var message = $("textarea#message").val();
      var firstName = name; // For Success/Failure Message
      // Check for white space in name for Success/Fail message
      if (firstName.indexOf(' ') >= 0) {
        firstName = name.split(' ').slice(0, -1).join(' ');
      }
      $this = $("#sendMessageButton");
      $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages
      $.ajax({
        url: "././mail/contact_me.php",
        type: "POST",
        data: {
          name: name,
          phone: phone,
          email: email,
          message: message
        },
        cache: false,
        success: function() {
          // Success message
          $('#success').html("<div class='alert alert-success'>");
          $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#success > .alert-success')
            .append("<strong>Your message has been sent. </strong>");
          $('#success > .alert-success')
            .append('</div>');
          //clear all fields
          $('#contactForm').trigger("reset");
        },
        error: function() {
          // Fail message
          $('#success').html("<div class='alert alert-danger'>");
          $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $('#success > .alert-danger').append($("<strong>").text("Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!"));
          $('#success > .alert-danger').append('</div>');
          //clear all fields
          $('#contactForm').trigger("reset");
        },
        complete: function() {
          setTimeout(function() {
            $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
          }, 1000);
        }
      });
    },
    filter: function() {
      return $(this).is(":visible");
    },
  });

  	$("a[data-toggle=\"tab\"]").click(function(e) {
    	e.preventDefault();
    	$(this).tab("show");
  	});

	/*When clicking on Full hide fail/success boxes */
	$('#name').focus(function() {
  		$('#success').html('');
	})

})
