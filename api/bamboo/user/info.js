/**
 *
   当前登录的用户信息
 * 
 * 20180118
 * zhanwentao@baijiahulian.com
 */

exports.index = function (param) {
    var data = {
        id: 1, // 用户ID
        "avatar": "https://www.babyabc100.com/static/img/bg/cover.jpg", // 用户头像
        "openId": "dfsfs",
        "unionId": "dsfsdfsdfeee",
        "nickname": "法师法师",
        "sex": 1, // 1:男，2:女，0:未知
        "bambooAmount":  3 // 竹笋数量
        "donated": 1, // 是否已经赠送过竹笋， 1已赠送 2， 未赠送
        "token": "dfsdfsfdsf", // 用户token
        "unlockLessonConsumedBambooCount": 3, // 解锁课程消费竹笋数量
        "signInProducedBambooCount": 1, // 签到产生的竹笋数量
        "friendGivingProducedBambooCount": 1 // 朋友赠送产生的竹笋数量
    };
    
    var result = {
        status: 200,
        data: data,
    };
    
    return result;
}