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
//1. event keypress
//2.event argument get key value
//3.ilegal key filter
//4.合法字符还要考虑出现的位置，例如:.,e,E,-
$width.keypress(function(e){
  var pos=e.target.selectionStart,
      con=e.target.value;
  console.log(pos);
  console.log(con);

  if(/[abcdf-zABCDF-Z`~!@#$%^&*()\-=_+[\]{}|;:'",<>/?\\]/.test(e.key)) {
    e.preventDefault();
    return;
  }
  //合法字符e
  //允许出现在非科学计数法的数字末尾
  //允许出现在非科学计数法的数字中间
  //不允许出现在非科学计数法的数字前面
  //不允许出现在空文本中
  //不允许出现在负号后面
  
  //不允许出现在科学技术法（e和E）数字的末尾
  //不允许出现在科学技术法数字的前面
  //不允许出现在科学技术法数字的中间
if(e.key === 'e'){
  if(pos===0 || con.indexOf('e')!==-1 || con.indexOf('E')!==-1){
    e.preventDefault();
    return;
  }
  if(pos===1 && con.substring(0,1)==='-'){
    e.preventDefault();
    return;
  }
}
//合法字符E

//合法字符.

//合法字符-
}); 

$height.keypress(function(e){
if(/[abcdf-zABCDF-Z`~!@#$%^&*()\-=_+[\]{}|;:'",<>/?\\]/.test(e.key)) {
  e.preventDefault();
    return;
  }

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
