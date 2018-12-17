//  声明两个变量保存位置信息和定时器对象
var position, timerTop;

function backToTop() {
    position = document.documentElement.scrollTop || document.body.scrollTop;
    position -= 30;
    if (position <= 0) {
        window.scrollTo(0, 0);
        clearInterval(timerTop);
    }
    else {
        window.scrollTo(0, position);
    }
}

function GoTop() {
    timerTop = setInterval('backToTop()', 1);
}

window.onload = function () {
    //  轮播图
    var navigation = document.getElementById('navigation'),
        door_box   = document.getElementById('door-box').getElementsByTagName('section'),
        points     = document.getElementById('points').getElementsByTagName('span'),
        //  获取左右轮播按钮
        bt_left    = document.getElementById('bt-left'),
        bt_right   = document.getElementById('bt-right'),
        //  获取四个元素点
        point_1    = document.getElementById('point-1'),
        point_2    = document.getElementById('point-2'),
        point_3    = document.getElementById('point-3'),
        point_4    = document.getElementById('point-4');

    door_box[0].style.opacity = '1';
    //  轮播图左按钮
    bt_left.onclick = function () {
        for (var i = 0; i < door_box.length; i++) {
            if (door_box[i].className === 'img-on') {
                if (i === 0) {
                    door_box[i].style.opacity = 0;
                    door_box[i].className = '';
                    points[i].className = '';
                    i = 4;
                    break;
                }
                door_box[i].style.opacity = 0;
                door_box[i].className = '';
                points[i].className = '';
                break;
            }
        }
        door_box[i - 1].style.opacity = 1;
        door_box[i - 1].className = 'img-on';
        points[i - 1].className = 'point-at';//  图片切换的同时图片小圆点标签切换
    };
    //  轮播图右按钮
    bt_right.onclick = function () {
        for (var i = 0; i < door_box.length; i++) {
            if (door_box[i].className === 'img-on') {
                if (i === 3) {
                    door_box[i].style.opacity = 0;
                    door_box[i].className = '';
                    points[i].className = '';
                    i = -1;
                    break;
                }
                door_box[i].style.opacity = 0;
                door_box[i].className = '';
                points[i].className = '';
                break;
            }
        }
        door_box[i + 1].style.opacity = 1;
        door_box[i + 1].className = 'img-on';
        points[i + 1].className = 'point-at';//  图片切换的同时图片小圆点标签切换
    };

    //  轮播图图片位置点
    point_1.onclick = function () {
        if (point_1.className === 'point-at') {
            return;
        }
        for (var i = 0; i < door_box.length; i++) {
            if (door_box[i].className === 'img-on') {
                door_box[i].style.opacity = 0;
                door_box[i].className = '';
                points[i].className = '';
                break;
            }
        }
        door_box[0].style.opacity = 1;
        door_box[0].className = 'img-on';
        point_1.className = 'point-at'
    };
    point_2.onclick = function () {
        if (point_2.className === 'point-at') {
            return;
        }
        for (var i = 0; i < door_box.length; i++) {
            if (door_box[i].className === 'img-on') {
                door_box[i].style.opacity = 0;
                door_box[i].className = '';
                points[i].className = '';
                break;
            }
        }
        door_box[1].style.opacity = 1;
        door_box[1].className = 'img-on';
        point_2.className = 'point-at'
    };
    point_3.onclick = function () {
        if (point_3.className === 'point-at') {
            return;
        }
        for (var i = 0; i < door_box.length; i++) {
            if (door_box[i].className === 'img-on') {
                door_box[i].style.opacity = 0;
                door_box[i].className = '';
                points[i].className = '';
                break;
            }
        }
        door_box[2].style.opacity = 1;
        door_box[2].className = 'img-on';
        point_3.className = 'point-at'
    };
    point_4.onclick = function () {
        if (point_4.className === 'point-at') {
            return;
        }
        for (var i = 0; i < door_box.length; i++) {
            if (door_box[i].className === 'img-on') {
                door_box[i].style.opacity = 0;
                door_box[i].className = '';
                points[i].className = '';
                break;
            }
        }
        door_box[3].style.opacity = 1;
        door_box[3].className = 'img-on';
        point_4.className = 'point-at'
    };

    //  轮播图自动播放与停止
    var timerImgs;
    function Play() {
        for (var i = 0; i < door_box.length; i++) {
            if (door_box[i].className === 'img-on') {
                if (i === 3) {
                    door_box[i].style.opacity = 0;
                    door_box[i].className = '';
                    points[i].className = '';
                    i = -1;
                    break;
                }
                door_box[i].style.opacity = 0;
                door_box[i].className = '';
                points[i].className = '';
                break;
            }
        }
        door_box[i + 1].style.opacity = 1;
        door_box[i + 1].className = 'img-on';
        points[i + 1].className = 'point-at';//  图片切换的同时图片小圆点标签切换
    }
    function Timer() {
        timerImgs = setTimeout(function () {
            Play();
            Timer();
        }, 3000);
    }
    function Stop() {
        clearTimeout(timerImgs);
    }

    navigation.onmouseover = Stop;
    navigation.onmouseout = Timer;

    //  送礼分类
    var gifts_enum = document.getElementById('gifts-enum');
    gifts_enum.style.opacity = '1';
    gifts_enum.style.transform = 'translateY(0)';//  页面加载完成，位置还原，上升效果

    //  导航栏
    var nav_bar_fixed = document.getElementById('nav-bar-fixed');
    function NavBar() {
        setTimeout(function () {
            var height = document.documentElement.scrollTop || document.body.scrollTop;
            //  当用户浏览超过一定高度后显示固定位置的导航栏
            if(height >= 680) {
                nav_bar_fixed.style.opacity = '1';
                nav_bar_fixed.style.transform = 'translateY(0)';
            } else {
                nav_bar_fixed.style.opacity = '0';
                nav_bar_fixed.style.transform = 'translateY(-60px)';
            }
            NavBar();
        }, 1);
    }
    NavBar();
};
