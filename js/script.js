$.ajaxSetup({
  cache: false,
});
var rotatedeg;
var rotatedata = [];
var count;
var locationurl = location.href;

$(window).load(function(){
  $('#content').load('works_area.html');
});
$(function(){
  $('#popup-index .disp-tbl > p > .button').on("click",function(){
    view_index("hide");
    $("#popup-index").one('oTransitionEnd mozTransitionEnd webkitTransitionEnd transitionend',
      function(e) {
        $('#popup-index .disp-tbl > p:first-child').addClass('none');
        $('#popup-index .disp-tbl > p:last-child').removeClass('none');
      }
    );
  });
  $('.navi-area > .jsc-ajax-link').on("click",function(){
    $('.navi-area > a').removeClass("active-menu");
    $(this).addClass("active-menu");
    $('body').addClass("loading");
    var maps = false;
    var urlSetting = $(this).attr('href').replace("#", "");
    urlSetting += ".html";
    $(".popup-area").removeClass("active");
    if($(this).hasClass('maps-view') == true) maps = true;
    $('#content').load(urlSetting,null,function(){
      if(maps == true) maps_cleate();
      $('body').removeClass("loading");
    });
    return false;
  });
});
function view_index(pattern){
  if(pattern == 'hide'){
    $('body').removeClass("index");
  } else {
    $('body').addClass("index");
  }
}
function maps_cleate(){
  var map_position = new google.maps.LatLng(35.724989, 139.696101);
  var mapOptions = {
    center: map_position,
    zoom: 18,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("gmap"),mapOptions);
  var marker = new google.maps.Marker({
    position: map_position,
    map: map,
    animation: google.maps.Animation.DROP
  });
};
function left_circle(){
  for(var i = 0; i < count; i++){
    rotatedata[i] = rotatedata[i] - rotatedeg;
  }
  rotate_change();
  active_change('left');
};
function right_circle(){
  for(var i = 0; i < count; i++){
    rotatedata[i] = rotatedata[i] + rotatedeg;
  }
  rotate_change();
  active_change('right');
};
function rotatesetting() {
  rotatedeg = 360 / $('.circle-layout > div').length;
  rotatedata = [];
  count = $('.circle-layout > div').length;
  for(var i = 0; i < count; i++){
    rotatedata.push(rotatedeg * i);
  }
}
function rotate_change(){
  $('.circle-layout > div').each(function(index){
    $(this).css({
      'transform':'rotate('+ rotatedata[index] +'deg)',
      '-moz-transform':'rotate('+ rotatedata[index] +'deg)',
      '-ms-transform':'rotate('+ rotatedata[index] +'deg)',
      '-o-transform':'rotate('+ rotatedata[index] +'deg)',
      '-webkit-transform':'rotate('+ rotatedata[index] +'deg)'
    });
  });
  return;
};
function active_change(turn){
  var thisdiv = $('.circle-layout > div');
  var activecontent = thisdiv.index($(".active")) + 1;
  thisdiv.removeClass("active");
  if(turn == 'right'){
    if(activecontent == 1){
      thisdiv.eq(count - 1).addClass("active");
    } else {
      thisdiv.eq(activecontent - 2).addClass("active");
    }
  } else {
    if(activecontent == count){
      $('.circle-layout > div:first-child').addClass("active");
    } else {
      thisdiv.eq(activecontent).addClass("active");
    }
  }
}