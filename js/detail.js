$(function(){
     // 手动初始化scroll控件
     mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });

   // 获取inlanddiscount.html传来的id
   var id = getQueryString('id');
   console.log(id);
   // 这个是截取地址上的字符串的方法
   // 使用网上封装好的正则的方式完成url参数的值的获取
   function getQueryString(name) {
       var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
       var r = window.location.search.substr(1).match(reg);
       if (r != null) {
           // 默认使用encodeURI去对中文进行的加密  使用decodeURI解密
           return decodeURI(r[2]);
       }
       return null;
   }
$.ajax({
    url:'http://localhost:9090/api/getmoneyctrlproduct',
    data:{productid:id },
    success:function(data){
    console.log(data);
  //2.创建模板,传入后台数据
    var html = template('detailTpl',data);
    //3.渲染生成模板,把数据传到列表的ul上面
    $('.box').html(html);
    $('#comment').html(data.result[0].productComment)
    }
})
})