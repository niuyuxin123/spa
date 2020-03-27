var $timerButton = (function(){
  var $btn=$('<input type="button" class="timer-button"  disabled>'),
  cfg={
    container:'body',
    num:6,
    title:'同意',
  },
  num,
  timer;
  function show(conf){
    //1.DOM draw
    $(cfg.container).append($btn);
    $.extend(cfg,conf);
    num=cfg.num;
    $btn.val(cfg.title+'('+ cfg.num +'s)');

  timer = setInterval(function(){
    num--;
    if(num===0){
      clearInterval(timer);
      $btn.val(cfg.title);
     $btn.removeAttr('disabled');
    }else{
      $btn.val(cfg.title+'('+num+'s)')
    }
  },1000);

    //2.event bind
  } 
   
    $btn.click(function(){
     //alert('就知道你会同意的！')
     cfg.onClick();
    });

  return {
    show:show
  }

  
}());

//不用page load event
/*
封装成对象，有几种方案
1.简单对象自变量，不完全是面向对象，不能包括私有方法
var timerBtn={
  show:function();
}
2.工厂函数，一个函数返回值是一个简单对象
var timerBtn=function(){

  return{
    show:function(){}
  } 
}

3.构造函数
function TimerBtn(){
 var tb = new TimerBtn();
}
*/

