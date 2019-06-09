$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 100
        }, 1000);
        return false;
      }
    }
  });
});

/* mobile menu link */

$(document).ready(function($) {
	$(".menulink a").click(function() {
	  	$("#menu").slideToggle('fast');
	});
});

/* bug fix: show header menu buttons when window back to desktop size */

$(window).on('resize', function(){
      var win = $(this); //this = window
      if (win.width() >= 800) {
	  jQuery("#menu").show();
	  }
});


/* open close example code */

$(function() {
	$(".sample_button").click(function() {
	   $('.example').show();
	   $('.get_started').addClass('pulsating');
	   $('.index_tagline').show();
	   $(".sample_button").hide();
	});
});

$(".sample_button").click(function (event) {
     event.stopPropagation()
})

$(".example").click(function (event) {
     event.stopPropagation()
})

$(function() {
	$(document).click(function() {
	   $('.example').hide();
	   $('.get_started').removeClass('pulsating');
	   $('.index_tagline').hide();
	   $(".sample_button").show();
	});
});


/* credit card form */

  $(document).ready(function(){
    $("#credit_card").click(function(){
		$('.credit_card_form_container').slideDown(100);
		$('#pm_paypal').css("margin-top","20px");
		$('#pm_paypal').removeClass("no_border_top");
	});
  });


/* FAQ function */

$('.faq_row').click(function () {

	var $this = $(this);
    $(".faq_content").not($this.parent().next()).slideUp(100);
    $this.parent().next().slideToggle(100);
	$this.addClass("faq_row_current");
	$this.toggleClass("no_border_bottom_radius");
	$this.toggleClass("no_box_shadow");
});


/* toggle html text function ".toggleText()" */

$.fn.toggleText = function(t1, t2){
  if (this.text() == t1) this.text(t2);
  else                   this.text(t1);
  return this;
};


/* update show more/less function */

$('.action_bar').click(function () {

    var $this = $(this);
    $this.toggleClass("").prev().slideToggle(100);
    // $this.toggleClass("selected");
	$this.find(".show_more_button").toggleText("show less", "show more");
	$(".download_hover.secondary").toggleClass("no_border_bottom");

});

/* click to view more - system status details */

$('.open_ssdetails').click(function () {

    var $this = $(this);
    $this.toggleClass("").next().slideToggle(100);
	$this.find(".updated_note").toggleText("hide details", "click to view more");

});

/* expand - payment, usage */

$('.expand').find(".download_pdf_btn").click(function (event) {
     // stop the function below if clicked on "download_pdf_btn"
     event.stopPropagation()
})

$('.expand').click(function () {

    var $this = $(this);
    $this.toggleClass("").next().slideToggle(100);
    $this.toggleClass("selected");
	$this.find(".show_all_entries_button").toggleText("show all entries", "show less entries");
	$this.find(".view_invoice").toggleText("View", "Hide");

});

/* index - show currency change - currencies strip */

$('.currency_showcase').hover(function () {

    var $this = $(this);

	if($this.hasClass("up")){
       $this.toggleClass("progress_green");
	} else if($this.hasClass("down")) {
       $this.toggleClass("progress_red");
	}

	$this.find(".content_normal").toggleClass("hidden");
	$this.find(".content_hover").toggleClass("hidden");

});

$('.partners.hover_change_text').hover(function () {

	$("#header_text").toggleText("CHANGE - YESTERDAY (EOD) TO TODAY","168 CURRENCIES & PRECIOUS METALS");

});

/* index - numverify country code showcase */

$('.country_code_showcase').hover(function () {

    var $this = $(this);

	$this.find(".content_normal").toggleClass("hidden");
	$this.find(".content_hover").toggleClass("hidden");

});

$('.partners.hover_change_text.numverify').hover(function () {

	$("#header_text").toggleText("SUPPORTING 232 COUNTRIES","SEE ALL SUPPORTED COUNTRIES");

});

/* Change password form */

$(function() {
	$("#change_password_button").click(function() {
	   $('#change_password_form').show(0);
	   $('#change_password_placeholder').hide(0);
	   $('#change_password_button').hide(0);
	   $('#change_password_cancel').show(0);
	});
});

$(function() {
	$("#change_password_cancel").click(function() {
	   $('#change_password_form').hide(0);
	   $('#change_password_placeholder').show(0);
	   $('#change_password_button').show(0);
	   $('#change_password_cancel').hide(0);
	});
});

/* keep change password form opened after being submitted */

if($('#change_password_active').val() == '1')
{
	   $('#change_password_form').show(0);
	   $('#change_password_placeholder').hide(0);
	   $('#change_password_button').hide(0);
	   $('#change_password_cancel').show(0);
}


/* New Payment Method Form */

$(function() {
	$("#new_payment_method_button").click(function() {
	   $('#new_payment_method_container').slideToggle(0);
	   $("#new_payment_method_button").toggleText("ADD NEW", "CANCEL");
	   $("#get_mt60").toggleClass("mt60");
	});
});



/* show/hide Security Code hint */

$( "#get_sc_hint").hover(function() {

    $('img.sc_hint').toggleClass("visibility_hidden");

});

/* show/hide Download PDF */

$( ".hover_pdf").mouseover(function() {

    $('.download_hover').removeClass("visibility_hidden_actual");

});

$( ".hover_pdf").mouseout(function() {

    $('.download_hover').addClass("visibility_hidden_actual");

});


/* show/hide password footnote */

$( "#password_section").hover(function() {

    $('#password_footnote').toggleClass("color_transparent");

});


/* show/hide renews info */

$( ".hover_renews").hover(function() {

    $('.tick').toggleClass("hidden");
    $('.renews_info').toggleClass("hidden");

});

/* expand error types - documentation */

$( ".expand_table_button").click(function() {

    $(this).toggleText("show less","show more");
	$('tr.hidden').fadeToggle(200);

});


/* disable button after one click */

//for forms
$('form.one_click_only').one('submit', function() {
    $('label.one_click_only').css('pointer-events','none');
    $(this).find('label.one_click_only').html('loading...');
    $(this).find('label.one_click_only').css('opacity', '0.9');

});

//for anchors
$('a.one_click_only').one('click', function() {
	$(this).css('pointer-events', 'none');
    $(this).html('loading...');
    $(this).css('opacity', '1');
});


/* fade header in */

$(document).scroll(function() {
	if ($(this).scrollTop() > 1) {
    $('.header_action').removeClass("transparent");
    } else {
    $('.header_action').addClass("transparent");
	}
});

/* code box index */

function switchCode(id, className) {

$(".codebox_button.selected").removeClass("selected");
$("#open_code_" + id).addClass("selected");
$("." + className).hide();
$("#code_" + id).show();

}

/* mailboxlayer: hide/show score label on index */

$('#open_code_6').click(function(){
   $("#score_box").hide();
});
$('#open_code_5').click(function(){
   $("#score_box").show();
});


/* index links on mobile */

  $(document).ready(function(){

	var windowSize = $(window).width();

    if (windowSize < 800) {
       $("a.href_on_mobile").attr("href", "/product")
   }

  });


/* disable panel scroll on small height */

var callback = function(){
      var win = $(this); //this = window
      if (win.height() >= 1000) {
      $(".panels").css("overflow","scroll");
      $('.scroll_arrow.opacity').css("opacity","0");
	  $(".promo_target_box.content.plans").css("margin-top","-20px");
      $('.scroll_arrow').css("pointer-events","none");
	  $('.fourty_on_vert_res').css("padding-bottom","35px");
	   } else {
      $(".panels").css("overflow","hidden");
      $('.scroll_arrow.opacity').css("opacity","1");
	  $(".promo_target_box.content.plans").css("margin-top","0px");
      $('.scroll_arrow').css("pointer-events","auto");
	  $('.fourty_on_vert_res').css("padding-bottom","40px");
	   }
}

$(window).load(callback);
$(window).resize(callback);

/* GIFLAYER - DOCUMENTATION - SWITCH FPS EXAMPLE GIFS */

$(document).on('click', '[data-show-fps]', function(event) {
	"use strict";
	event.preventDefault();
	$('[data-fps]').hide();
	$('[data-show-fps]').removeClass('selected');
	$(this).addClass('selected');
	$('[data-fps="'+$(this).attr('data-show-fps')+'"]').fadeIn(150);
});

/* PDFLAYER - SWITCH OPTIONAL PARAMETERS */

$(document).on('change', 'select.optional_params', function() {
	"use strict";
	var paramID = $(this).val();

	$('[data-optional-parameter]').hide();
	$('[data-optional-parameter="'+paramID+'"]').show();

});

/* PDFLAYER - UNIVERSAL SELECT-ID SHOW HIDE */

$('body').on('change', '.select_show_hide', function() {
	"use strict";

	var type = $(this).attr('data-type');
	$('[data-type-group="'+type+'"]').hide();

	var show = $(this).val();
	$('[data-type-target="'+show+'"]').show();

});


/* NEW March 4 2018 - CONFIRMATION POPUP */
$('body').on('click', '[data-confirmation-popup]', function() {

	var action = $(this).attr('data-confirmation-popup');
	var htmlContent;

	var heading;
	var text;
	var actionButtonText;
	var actionButtonClass;
	var actionButtonHREF;
	var cancelButtonText;
	var footnote;

	switch (action) {

		case 'downgrade':

			heading = 'Downgrade';
			text = 'Please confirm your downgrade to the '+$(this).closest('.plan').find('[data-plan-name]').attr('data-plan-name')+'. Your previous subscription plan will remain active until the end of the current period.';
			actionButtonText = 'Downgrade Account';
			actionButtonClass = 'red_button';
			actionButtonHREF = $(this).attr('data-href');
			cancelButtonText = 'Cancel';
			footnote = '<p class="popup_footnote">Looking to change your payment frequency? Follow these <a target="_blank" href="/faq?billing_frequency=1#b" class="blue_link">instructions</a>. </p>';

		break;

		case 'upgrade_monthly':
		case 'upgrade_yearly':

			heading = 'Upgrade';
			text = 'Please confirm your upgrade to the '+$(this).closest('.plan').find('[data-plan-name]').attr('data-plan-name')+'. The remaining unused days of your current plan will be deducted from your new invoice amount.';
			actionButtonText = action === 'upgrade_monthly' ? 'Pay $' + $(this).closest('.plan').find('[data-monthly-price]').attr('data-monthly-price') + ' per month' : 'Pay $' + $(this).closest('.plan').find('[data-monthly-price]').attr('data-monthly-price')*12*0.8 + ' per year';
			actionButtonClass = 'green_button';
			actionButtonHREF = $(this).attr('data-href');
			cancelButtonText = 'Cancel';
			footnote = '<p class="popup_footnote">Looking to change your payment frequency? Follow these <a target="_blank" href="/faq?billing_frequency=1#b" class="blue_link">instructions</a>. </p>';

		break;

		case 'upgrade_choose_frequency':

			actionButtonHREF = $(this).attr('data-href');

			htmlContent = '<div class="cd-popup is-visible new_confirmation_popup choose_payment_freq" role="alert"> <div class="cd-popup-container"> <p class="no_min_width"><span class="cd-heading">Upgrade</span>Please confirm your upgrade by choosing your preferred billing frequency. </p> <div class="yes_no_buttons_container"> <a href="'+actionButtonHREF+'monthly" class="popup_button">Pay $'+($(this).closest('.plan').find('[data-monthly-price]').attr('data-monthly-price')*1).toFixed(2)+' per month</a> <a href="'+actionButtonHREF+'yearly" class="popup_button">Pay $'+($(this).closest('.plan').find('[data-monthly-price]').attr('data-monthly-price')*12*0.8).toFixed(2)+' per year <span class="small_and_fat green"> -20%</span></a> <a href="javascript:void(0)" class="cd-popup-close popup_button no">Cancel</a> </div> </div></div>';

		break;

	}

	if (!htmlContent) {

	htmlContent = '<div class="cd-popup is-visible new_confirmation_popup" role="alert"> <div class="cd-popup-container"> <p class="no_min_width"><span class="cd-heading">'+heading+'</span>'+text+'</p> <div class="yes_no_buttons_container"> <a href="'+actionButtonHREF+'" class="popup_button yes '+actionButtonClass+'">'+actionButtonText+'</a> <a href="javascript:void(0)" class="cd-popup-close popup_button no">Cancel</a> '+footnote+'</div> </div></div>';
	}

	$('body').append(htmlContent);

});

/* CLOSE CONFIRMATION POPUP */
$('body').on('click', '.cd-popup-close', function() {

	if ($(this).closest('.new_confirmation_popup').length > 0) {

		$(this).closest('.new_confirmation_popup').remove();

	}

});



