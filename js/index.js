$(function(){
   banner()
    // 动态生成轮播图结构 用函数封装ajax
    function banner(){
        $.ajax({
            type:'get',
            url:'http://157.122.54.189:9094/api/public/v1/home/swiperdata',
            dataTape:'json',
            success: function (result) {
            var html=template("pyg_bannerTemp",result)
            $('.mui-index-banner').html(html)
            //生成点标记
            var dihtml=template("indicatorTemp",result)
            $('mui-slider-indicator').html(dihtml)
            
            }
            })
           }
    function nav(){
        $.ajax({
            type:'get',
            url:'',
            dataTape:'json',

        })

           }

})
       
