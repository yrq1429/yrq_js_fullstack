// 表单验证策略
const strategies = {
    isNonEmpty: function (value, errorMsg) {
        if (value.trim() === '') {
            return errorMsg
            }
    },
    minLength: function (value, len, errorMsg) {
        if (value.trim().length < len) {
            return errorMsg
        }
    },
    maxLength: function (value, len, errorMsg) {
        if (value.trim().length > len) {
            return  errorMsg
        }
    },
    isMobilPhone: function (value, errorMsg) {
        if (!/1[3456789][0-9]{9}/.test(value)) {
            return  errorMsg
        }
    },
    isEmail: function () {
        
    }
}


























// const userNameResult = strategies.isNonEmpty(registerForm.username.value, '用户名不能为空')
    //     if (!userNameResult.status) {
    //         alert(userNameResult.msg);
    //         return false;
    //     }
    // const passwordLength = strategies.minLength(registerForm.password.value,6,'密码少于六位')
    //     if (!passwordLength.status) {
    //         alert(passwordLength.msg);
    //         return false;
    //     }
    //      const phoneNumberResult = strategies.isNonEmpty(registerForm.phoneNumber.value, '手机号不能为空')
    //     const phoneNumber = registerForm.phoneNumber.value.trim();
    //     if (!phoneNumberResult.status) {
    //         alert(phoneNumberResult.msg);
    //         return false;
    //     }
    //     const phoneTure = strategies.isMobilPhone(registerForm.phoneNumber.value,'手机格式有问题')
    //     if (!phoneTure.status) {
    //         alert(phoneTure.msg);
    //         return false
    //     }


     // const isNonEmpty = strategies.isNonEmpty(registerForm.username.value, '用户名不能为空');
        // const minLength = strategies.minLength(registerForm.password.value, 6, '密码少于六位');
        // const isMobilPhone = strategies.isMobilPhone(registerForm.phoneNumber.value, '手机格式有问题');
        // if (isNonEmpty) {
        //     return isNonEmpty
        // }
        // if (minLength) {
        //     return minLength
        // }
        // if (isMobilPhone) {
        //     return isMobilPhone
        // }

