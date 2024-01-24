$(function() {
  $('#back a').on('click',function(event){
  // #back内のaタグがクリックされたときの処理
    $('body, html').animate({
      scrollTop:0
    }, 1500);
    event.preventDefault();
  });
});