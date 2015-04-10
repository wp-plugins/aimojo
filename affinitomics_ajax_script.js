jQuery(document).ready( function() {
  request_counter = 0;

  jQuery( "[name='af_view_placeholder']" ).each(function(){
    request_counter += 1;
    url = this.value;
    jQuery.ajax({
      type : "get",
      dataType : "json",
      url : 'http://' + url + '&request_counter=' + request_counter,
      data : { },
      success: function(response) {
        if (response['status'] == 'success'){
          this_response_number = response['request_counter']
          my_ul_id = 'af_view_list_' + this_response_number;
          jQuery('<ul class="aflist" id="af_view_list_' + this_response_number + '"></ul>').insertAfter(
            jQuery( "[name='af_view_placeholder']" )[this_response_number - 1]);
          jQuery.each(response['related'], function(){
            jQuery('#' + my_ul_id).append('<li><a href="' + this.element.url + '">' + this.element.title + ' (' + this.score + ')' + '</a></li>');
          });
        } else {
          console.log('Error, response["status"] != "success"');
        }
      }
    });
  });

  jQuery( "[name='af_cloud_sync_placeholder']" ).each(function(){
    okToGo = jQuery('#af_cloud_sync_go').val();

    if (okToGo == 'yes'){
      url = this.value;
      jQuery.ajax({
        type : "get",
        dataType : "json",
        url : 'http://' + url,
        data : { },
        success: function(response) {
          if (response['status'] == 'success'){
            jQuery('.cloud_sync_ol').append('<li>' + JSON.stringify(response) + '</li>');
          } else {
            console.log('Error, response["status"] != "success"');
          }
        }
      });
    }
  });

});
