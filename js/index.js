$(document).ready(function(){
  //(Mobile) 메뉴버튼
  $(".mo_view").css({"right":"-60%"});  /* 처음위치 */
  $(".close").hide();

  $(".mo_menu_btn").click(function(){
    $(".mo_view").stop(true,true).animate({"right":"0%"});
    $(".close").show();
  });

  $(".close").click(function(){
    $(".mo_view").stop(true,true).animate({"right":"-60%"});
    $(".close").hide();
  });

});