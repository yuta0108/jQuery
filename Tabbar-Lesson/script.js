$('#tab-contents .tab[id != "tab1"]').hide();
// .hide();と記述することで、id="tab-contents"の要素のうち、 class="tab"であり、id="tab1"ではない要素が非表示になります

$('#tab-menu a').on('click', function(event) {
  $("#tab-contents .tab").hide();
  $("#tab-menu .active").removeClass("active");
  // id="tab-contents"内のいずれかのタブがクリックされたときに、そのタブ内の全コンテンツをいったん非表示
  $(this).addClass("active");
  // タブのクラスがactiveのときは背景色が白色／文字色が黒色になるように設定されています。
// タブを切り替えるときは、このCSS設定もいったん削除しなければなりません。このため、.removeClass()にactiveクラスを指定。
  $($(this).attr("href")).show();
  // $(this)のとき、つまり、タブがクリックされたときです。.attr()は,HTML要素の属性を取得したり設定できるメソッド.show()は要素を表示するメソッド
  event.preventDefault();
});