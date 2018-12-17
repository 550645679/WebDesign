var name_bool     = false,
    password_bool = false;


window.onload = function () {

    var login_img       = document.getElementById('login-img'),
        name_input      = document.getElementById('name-input'),
        password_input  = document.getElementById('password-input'),
        login_bt        = document.getElementById('login-butt'),
        name_error      = document.getElementById('name-error'),
        password_error  = document.getElementById('password-error'),
        error_info      = "<i class=\"fa fa-times-circle\" aria-hidden=\"true\"></i>";

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
    };
    //  用户名 - 表单验证
    password_input.onblur = function () {
        var pwd_len = password_input.value.length,
            pwd_value = password_input.value;
        if(pwd_len === 0) {
            password_error.innerHTML = error_info + '请输入密码';
            return;
        }
        if(pwd_value === '123') {
            password_error.innerHTML = '';
            password_bool = true;
        } else {
            password_error.innerHTML = error_info + '密码错误';
            password_bool = false;
        }
    };

};

//  登录
/**
 * @return {boolean}
 */
function Login () {
    var error_info = "<i class=\"fa fa-times-circle\" aria-hidden=\"true\"></i>";
    if(name_bool && password_bool) {
        return true;
    } else {
        var name_error      = document.getElementById('name-error'),
            password_error  = document.getElementById('password-error');
        name_error.innerHTML = error_info + "请输入手机号码";
        password_error.innerHTML = error_info + '请输入密码';
        return false;
    }
}