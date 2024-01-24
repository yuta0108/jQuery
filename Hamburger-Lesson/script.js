$(function(){
  $('.menu-trigger').on('click', function(event){
  // .menu-triggerクリック時に行われる処理
    $(this).toggleClass('active');
    $('#sp-menu').fadeToggle();
    // ハンバーガーメニューを開いたときの状態
    event.preventDefault();
  })
});