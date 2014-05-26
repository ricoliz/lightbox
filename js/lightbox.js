$(window).on("load", function(){
  $("body").append("<div id='glayLayer'></div><div id='overLayer'></div>")
  // alert("bodyappendした");

  $("#glayLayer").click(function(){
      $(this).hide()
      $("#overLayer").hide()
      // alert("glaylayerとoverlayerかくす");
  });
  // 初期化
  var m_width = 0;
  var m_height = 0;
  var top = 0;
  var left = 0;
  $("a.modal").click(function(){
      // modalの高さと横幅をとる
      m_width = $('#overLayer').outerWidth();
      m_height = $('#overLayer').outerHeight();
      console.log("m_widthは", m_width);
      console.log("m_heightは", m_height);
      // 中心にするための計算
      top = (w_height - m_height)/2;
      left = (w_width - m_width)/2;
      // ↑で計算した新しい値をcssに適用する
      $('#overLayer').css({'top' : top, 'left' : left});
      console.log("top and left", top, left);
      // alert("overlayer数値");
      $("#glayLayer").show()
      $("#overLayer").html("<img src='"+$(this).attr("href")+"' />")
      $("#overLayer").show();
      // alert("glaylayerとoverlayerみせる");
      return false;
  });

  // 高さと横幅をとる
  var w_width = $(window).width();
  var w_height = $(window).height();
  console.log("w_widthは", w_width);
  console.log("w_heightは", w_height);

    // IE対策
    // if($.browser.msie && $.browser.version<7){
    //     $(window).scroll(function(){
    //         $("#glayLayer").css('top',$(document).scrollTop())
    //         $("#overLayer").css('top',($(document).scrollTop()+$(window).height()/2) +"px")
    //     })
    // }

});
// modalwindowを中心にする　each　にすることで複数あったときにも対応
// $('#overLayer').each(function(){

// });