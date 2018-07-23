/**
 *
    物料详情
 * 
 * 20180118
 * zhanwentao@baijiahulian.com
 */

exports.index = function (param) {
    var data = {
        "avatar": "https://www.babyabc100.com/static/img/bg/cover.jpg", // 用户头像
        "openId": "dfsfs",
        "unionId": "dsfsdfsdfeee",
        "nickname": "法师法师",
        "sex": 1, // 1:男，2:女，0:未知
        "phone": "15522443434" // 手机号
    };
    
    var result = {
        status: 401,
        data: 'err'
    };
    
    return result;
}