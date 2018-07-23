exports.index = function (param) {

    var result = {
          status: 200,
          data: [{
            "id": 1,// 记录id
            "type": 1,//1：签到，2：朋友赠送，3：解锁课程，4：加入学习
            "title": "每日签到",
            "avatar": "https://www.babyabc100.com/static/img/bg/cover.jpg",//头像
            "bambooNum": 1,//竹笋数
            "createTime": new Date().getTime(), // 创建时间
          }, {
            "id": 2,// 记录id
            "type": 2,//1：签到，2：朋友赠送，3：解锁课程，4：加入学习
            "title": "xx送你小竹笋",
            "avatar": "https://www.babyabc100.com/static/img/bg/cover.jpg",//头像
            "bambooNum": 1,//竹笋数
            "createTime": new Date().getTime(), // 创建时间
          }]
    };
    
    return result;
}