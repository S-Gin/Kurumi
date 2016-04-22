$(function(){
  $("form").submit(function(event) {
    event.preventDefault();
    var indispensable = false;
    $("form .indispensable").each(function(){
      if($(this).val() == '' ){
        indispensable = true;
      }
    });
    if(indispensable == true){
      alert("必須項目をご確認下さい");
    } else {
      var confirmcheck = confirm("入力内容を送信します");
      if( confirmcheck == true ) {
        $.ajax({
          url: locationurl + 'send.php',
          type:'post',
          data:{group:$('input[name=group]').val(),title:$('input[name=title]').val(),companyname:$('input[name=companyname]').val(),name:$('input[name=name]').val(),tel:$('input[name=tel]').val(),email:$('input[name=email]').val(),contentval:$('textarea[name=contentval]').val()}
        });
        $("#popup-form").parent().addClass("active");
        $('input[type=submit]').remove();
      }
    }
  });
  $('.value-button').on('click',function(){
    $('.navi-area > a').removeClass("active-menu");
    var urlAction = $(this).attr('href');
    $('.navi-area > a[href='+urlAction+']').addClass("active-menu");
    $('body').addClass("loading");
    var urlSetting = urlAction.replace("#", "");
    urlSetting += ".html";
    $(".popup-area").removeClass("active");
    var hrefvalue = $(this).data('value');
    $('.navbar.navbar-fixed-top').css("display","block");
    $('#content').load(urlSetting,null,function(){
      $("input[name=title]").attr("value",hrefvalue);
      $('body').removeClass("loading");
    });
    return false;
  });
});