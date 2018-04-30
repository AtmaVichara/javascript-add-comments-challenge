$(document).ready(function(){
  $('#new_comment_button').click(function(){
    $('#new_comment_button').hide();
    $('#new_comment').show();
    $("#new_comment").submit(function(){
      let comment = $("#comment").val();
      let authorName = $("#authorName").val();
      $("#comment_list").append("<li>" + comment + "<span class='author'>" + authorName + "</span></li>")
      $("#new_comment").hide();
      $("#new_comment_button").show();
      event.preventDefault();
    })
  });
});
