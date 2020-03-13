$(function(){
  var $btu=$('input'),
  num=6,
  timer;
timer = setInterval(function(){
  num--;
  if(num===0){
    clearInterval(timer);
    $btu.val('同意');
    $btu.removeAttr('disabled');
  }else{
    $btu.val('同意('+num+'s)')
  }
},1000);
  $btu.click(function(){
    alert('就知道你会同意的！')
  });
});
