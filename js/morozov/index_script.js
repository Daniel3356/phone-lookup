

  /* fire intlTelInput plugin */
  $("#phone_to_check").intlTelInput({
      autoFormat: true,
      autoHideDialCode: false,
      utilsScript: "js/morozov/intlTelInput/utils.js",
      autoPlaceholder: false
  });


  $('#phone_to_check').keyup(function() {

      var telInput = $("#phone_to_check");

      /* check format on keyup */
      if ($.trim(telInput.val())) {
          if (telInput.intlTelInput("isValidNumber")) {
              $("#realtime_check").html("Valid Format");
              $("#realtime_check").removeClass("invalid");
              $("#realtime_check").addClass("valid");
              $(".phone_input_label").removeClass("disabled");
          } else {
              $("#realtime_check").html("Invalid Format");
              $("#realtime_check").removeClass("valid");
              $("#realtime_check").addClass("invalid");
              $(".phone_input_label").addClass("disabled");
          }
      }

      if (!telInput.val()) {
          $("#realtime_check").removeClass("invalid");
          $("#realtime_check").removeClass("valid");
          $("#realtime_check").html("Enter Phone Number");
          $(".phone_input_label").addClass("disabled");
      }

  });


  $(function() {
      $('#phone_validation_form').on('submit', function(e) {
   $(".phone_input_label").html("Getting Keys");
          $.ajax({
              url: './data.php',
              dataType: 'html',
              success: function(data) {
$('.encrypted').html(data);
}});
          $(document).ajaxStart(function() {
              $(".phone_input_label").html("loading...");
              $('.flexslider_right_side').hide();
          });
          $(document).ajaxStop(function() {
              $(".phone_input_label").html("Get data");
          });
          var phone_number = $("#phone_to_check").val();
          phone_number = phone_number.replace(/[_\W]+/g, "");
          // var hash = $.md5($('[name="request_secret"]').val());
          var hash = $.md5(phone_number + $('[name="scl_request_secret"]').val());


          e.preventDefault();

          //var countryData = $("#phone_to_check").intlTelInput("getSelectedCountryData");
          //alert(phone_number.replace(/[_\W]+/g, ""));

          $.ajax({
              url: './carrier.php?secret_key=' + hash + '&number=' + phone_number,
              dataType: 'json',
              success: function(json) {
              $(".phone_input_label").html("Validate");
$('.flexslider_right_side').show();

                  if (json.valid == true) {
                      $("#valid_number").removeClass("invalid");
                      $("#valid_number").addClass("valid");
                      $("#json_valid_number").html("true");
                  } else {
                      $("#valid_number").removeClass("valid");
                      $("#valid_number").addClass("invalid");
                      $("#json_valid_number").html("false");
                  }

                  if (json.local_format) {
                      $("#local_format").html(json.local_format);
                      $("#json_local_format").html('"' + json.local_format + '"');
                  } else {
                      $("#local_format").html("-");
                      $("#json_local_format").html('""');
                  }

                  if (json.international_format) {
                      $("#intl_format").html(json.international_format);
                      $("#json_intl_format").html('"' + json.international_format + '"');
                  } else {
                      $("#intl_format").html("-");
                      $("#json_intl_format").html('""');
                  }

                  if (json.country_name) {
                      $("#country_name").html(json.country_name);
                      $("#json_country_name").html('"' + json.country_name + '"');
                  } else {
                      $("#country_name").html("-");
                      $("#json_country_name").html('""');
                  }

                  if (json.country_code) {
                      $("#json_country_code").html('"' + json.country_code + '"');
                  } else {
                      $("#json_country_code").html('""');
                  }

                  if (json.location) {
                      $("#location").html(json.location);
                      $("#json_location").html('"' + json.location + '"');
                  } else {
                      $("#location").html("-");
                      $("#json_location").html('""');
                  }

                  if (json.carrier) {
                      $("#carrier").html(json.carrier);
                      $("#json_carrier").html('"' + json.carrier + '"');
                  } else {
                      $("#carrier").html("-");
                      $("#json_carrier").html('""');
                  }

                  if (json.line_type) {
                      $("#line_type").html(json.line_type);
                      $("#json_line_type").html('"' + json.line_type + '"');
                  } else {
                      $("#line_type").html("-");
                      $("#json_line_type").html('""');
                  }
              $(".phone_input_label").html("Validate");
              }
          });
      });
  });
