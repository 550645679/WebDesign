window.onload = function () {
        //  获取图片框
    var detailed_img   = document.getElementById('detailed-img')
        //  获取页面URL信息
        urlinfo = window.location.href,
        //  获取传值
        getoff = urlinfo.split('=');


    //  设置图片
    detailed_img.src = getoff[1];


};