$(function () {

    // 手动初始化scroll控件
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });

    //给底部的返回顶部注册事件
    $('.footer-up-top').on('tap',function () {
        // 点击之后,回到页面顶部
// console.log(111)
$("html,body").animate({"scrollTop":top});

$('html,body').animate({scrollTop: 0}, 500);//500滑动的时间，单位：毫秒；0，到某端的距离

    })

})