$(function () {
    //1.发送ajax请求
    $.ajax({
        url: 'http://localhost:9090/api/getmoneyctrl',
        type: 'get',
        dataType: 'json',
        data: {
            pageid: 1,
            pagesize: 10
        },
        success: function (data) {
            console.log(data)
            //2.创建模板,传入后台数据
            var html = template('getmoneyctrlTpl', data);
            //3.渲染生成模板,把数据传到列表的ul上面
            $('#product ul').html(html);
        }
    })

    $('#product ul').on('tap', 'li', function () {

        // console.log(1111);

        
        var productid = $(this).data('id');
         location="detail.html?id="+productid;
        console.log(productid)
    });
})