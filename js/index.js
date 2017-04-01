$().ready(function(){
  animate.starScroll();//监听滚动条事件
  $('.number').countUp();//数字滚动
})

/**
 * starScroll 初始化
 * check 检查是否执行动画
 * isHeight 监听滚动条位置
 * showAnimate 执行动画
 */
var animate = {
  starScroll:function(){
    var me = this;
    $(window).scroll(function(event) {
      me.check()
    });
    me.check()
  },
  check:function(){
    var me = this
    $('.animated').each(function(index, el) {
      var $this = $(this);
      if($this.data('isAnimate')){
        return
      }
      if(me.isHeight($this)){
        me.showAnimate($this.parent());
      }
    });
  },
  isHeight:function($el){
    var winH = $(window).height();
    var scrollH = $(window).scrollTop();
    var ThisH = $el.offset().top;
    if(winH + scrollH  > ThisH +150){
      return true
    }else {
      return false
    }
  },
  showAnimate:function($el){
    $el.addClass('animated');
    $el.data('isAnimate', 'true')
  }
}
