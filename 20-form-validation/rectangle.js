$(function(){
  //get dom elem
  var $width=$('#width'),
      $height=$('#height'),
      $btuCal=$('#calculate'),
      $perimeter=$('#perimeter'),
      $area= $('#area');
  /*calc button click event */
$btuCal.click(function(){
    //validate if err return;
   if(!validate('#width')|| !validate('#height') ) return;
     
    //get value
    var w=Number($width.val());
    var h=Number($height.val());
    //calculate
    var p =retain(2*(w+h),2);
    var a =retain(w*h,2);
    //output
    $perimeter.val(p);
    $area.val(a);
});
$width.focusout(function(){
  if(!validate('#width')) $width.select();
});
$height.focusout(function(){
  if(!validate('#height')) $height.select();
});
function retain(s,n){
  return Math.round(s * Math.pow(10, n)) / Math.pow(10, n);
}
function validate(field){
  //get DOM error message
  var $data=$(field),
      $msg=$(field+'-validation-message');
  //validate null
  if($data.val()===''){
    $msg.html('数据不能为空！');
    $data.select();
    return false;
  }
  //validate number
  
  if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($data.val())){
    $msg.html('数据必须为数字！');
    $data.select();
    return false;
  }
  //validate>0
  if(window.Number($data.val())<0){
    $msg.html('数字必须大于零!');
    $data.select();
    return false;
  }
    //prompt err message
    //return false
  $msg.html('');
  return true;
  
}

});
