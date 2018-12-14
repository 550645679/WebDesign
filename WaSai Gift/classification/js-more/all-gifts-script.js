window.onload = function () {
        //  送礼对象
    var who = document.getElementById('who').getElementsByTagName('div'),
        //  数码科技
        ele = document.getElementById('electronics').getElementsByTagName('div'),
        //  木质工艺
        tec = document.getElementById('technology').getElementsByTagName('div');

    function switchPageOn(temp,index) {
        if (temp[index].className === 'li-who all-li-on') {
            return;
        }

        for (var i = 0; i < who.length; i++) {
            if(temp[i].className === 'li-who all-li-on') {
                temp[i].className = 'li-who';
                break
            }
        }

        temp[index].className = 'li-who all-li-on';
    }

    who[0].onclick = function () {
        switchPageOn(who,0);
    };
    who[1].onclick = function () {
        switchPageOn(who,1);
    };
    who[2].onclick = function () {
        switchPageOn(who,2);
    };
    who[3].onclick = function () {
        switchPageOn(who,3);
    };
    who[4].onclick = function () {
        switchPageOn(who,4);
    };
    who[5].onclick = function () {
        switchPageOn(who,5);
    };
    who[6].onclick = function () {
        switchPageOn(who,6);
    };
    who[7].onclick = function () {
        switchPageOn(who,7);
    };
    who[8].onclick = function () {
        switchPageOn(who,8);
    };
    who[9].onclick = function () {
        switchPageOn(who,9);
    };

    ele[0].onclick = function () {
        switchPageOn(ele,0);
    };
    ele[1].onclick = function () {
        switchPageOn(ele,1);
    };
    ele[2].onclick = function () {
        switchPageOn(ele,2);
    };
    ele[3].onclick = function () {
        switchPageOn(ele,3);
    };
    ele[4].onclick = function () {
        switchPageOn(ele,4);
    };
    ele[5].onclick = function () {
        switchPageOn(ele,5);
    };
    ele[6].onclick = function () {
        switchPageOn(ele,6);
    };

    tec[0].onclick = function () {
        switchPageOn(tec,0);
    };
    tec[1].onclick = function () {
        switchPageOn(tec,1);
    };
    tec[2].onclick = function () {
        switchPageOn(tec,2);
    };
    tec[3].onclick = function () {
        switchPageOn(tec,3);
    };
    tec[4].onclick = function () {
        switchPageOn(tec,4);
    };
    tec[5].onclick = function () {
        switchPageOn(tec,5);
    };
    tec[6].onclick = function () {
        switchPageOn(tec,6);
    };

};