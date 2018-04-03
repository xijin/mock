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
        "happyReadType":  1 // 0:未知，1：0-2岁星星班，2：2-4岁月亮班，3：4-6岁太阳班
    };
    
    var result = {
        status: 200,
        data: data,
    };
    
    return result;
}