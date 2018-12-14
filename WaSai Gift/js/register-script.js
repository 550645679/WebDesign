var name_bool = false,
    password_bool  = false,
    rest_password_bool = false;

window.onload = function () {
    var login_img            = document.getElementById('login-img'),
        code_img             = document.getElementById('code-img'),
        name_input           = document.getElementById('name-input'),
        password_input       = document.getElementById('password-input'),
        rest_password_input  = document.getElementById('rest-password-input'),
        switch_code          = document.getElementById('switch-code'),
        register_bt          = document.getElementById('register-butt'),
        name_error           = document.getElementById('name-error'),
        password_error       = document.getElementById('password-error'),
        rest_password_error  = document.getElementById('rest-password-error'),
        error_info           = "<i class=\"fa fa-times-circle\" aria-hidden=\"true\"></i>";// 错误信息图标

    //  随机背景图片
    login_img.style.opacity = '1';
    var temp = parseInt(Math.random() * 7);
    if (temp === 0) {
        temp++;
    }
    login_img.src = 'img/login/login-' + temp + '.png';

    //  用户名 - 表单验证
    name_input.onblur = function () {
        var name_len = name_input.value.length,
            name_value = name_input.value;

        if (name_len === 0) {
            name_error.innerHTML = error_info + "请输入手机号码";
            name_bool = false;
            return;
        }
        if (name_len !== 11) {
            name_error.innerHTML = error_info + "手机号长度11位";
            name_bool = false;
            return;
        }
        for (var i = 0; i < 11; i++) {
            var x = name_value[0];
            if (name_value[0] !== '1') {
                name_error.innerHTML = error_info + "手机号码格式错误";
                name_bool = false;
                break;
            }
            if (isNaN(name_value[i])) {
                name_error.innerHTML = error_info + "手机号码格式错误";
                name_bool = false;
                break;
            } else {
                name_error.innerHTML = "";
                name_bool = true;
            }
        }
        if (name_bool && password_bool && rest_password_bool) {
            register_bt.style.background = '#448ca0'
        }
    };

    password_input.onblur = function () {
        var pwd_len = password_input.value.length;
        if(pwd_len < 6 || pwd_len > 12) {
            password_error.innerHTML = error_info + '密码格式错误';
            password_bool = false;
        } else {
            password_error.innerHTML = '';
            password_bool = true;
        }
        if (name_bool && password_bool && rest_password_bool) {
            register_bt.style.background = '#448ca0';
        }
    };

    rest_password_input.onblur = function () {
        var pwd_value      = password_input.value,
            rest_pwd_value = rest_password_input.value;

        if(pwd_value === "") {
            rest_password_error.innerHTML = error_info + '请输入您的密码';
            return;
        }
        if(pwd_value !== rest_pwd_value) {
            rest_password_error.innerHTML = error_info + '两次输入的密码不一样';
            rest_password_bool = false;
        } else {
            rest_password_error.innerHTML = '';
            rest_password_bool = true;
        }
        if (name_bool && password_bool && rest_password_bool) {
            register_bt.style.background = '#448ca0';
        }
    };

    //  验证码图片切换
    var code_num = 1;
    switch_code.onclick = function () {
        code_num = code_num + 1;
        if(code_num === 7) {
            code_num = 1;
        }
        code_img.src = 'img/code/code-' + code_num + '.jpg';
    }
};