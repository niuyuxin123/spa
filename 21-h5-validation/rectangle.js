$(function(){
  //get dom elem
  var $width=$('#width'),
      $height=$('#height'),
      $btuCal=$('#calculate'),
      $perimeter=$('#perimeter'),
      $form=$('form'),
      $area= $('#area');
  /*calc button click event */
//$btuCal.click(function(){
$form.submit(function(e){
  e.preventDefault();
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
function retain(s,n){
  return Math.round(s * Math.pow(10, n)) / Math.pow(10, n);
}

});
