<?
mb_language("Japanese");
mb_internal_encoding("UTF-8");

if($_REQUEST["group"] == 'お問い合わせ'){
  $to = "contact@kurumi-inc.com";
} else {
  $to = "recruit@kurumi-inc.com";
}
$header = "From: ".$_REQUEST["email"];
$subject = $_REQUEST["group"];
//本文
if($_REQUEST["title"]){
  $body .= " 項目: ".$_REQUEST["title"]." /";
}
if($_REQUEST["companyname"]){
  $body .= " 会社名: ".$_REQUEST["companyname"]." /";
}
$body .= " 名前: ".$_REQUEST["name"]." /";
$body .= " tel: ".$_REQUEST["tel"]." /";
$body .= " email: ".$_REQUEST["email"]." /";
if($_REQUEST["contentval"]){
  $body .= " 内容: ".$_REQUEST["contentval"]." /";
}

if(mb_send_mail($to,$subject,$body,$header)){
}
?>