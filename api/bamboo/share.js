// 分享详情
exports.index = function (param) {

  var data = {
    "avatar": 'https://www.babyabc100.com/static/img/bg/cover.jpg',
    "donated": 2,// //用户是否送过竹笋，0：未知，1：已赠送，2：未赠送
    "lessons": [{
          "id": 1, // 物料id
          "name": "我们的地球", // 分集名称
          "englishName": "ssssss", // 英文名
          "cover": "https://www.babyabc100.com/static/img/bg/cover.jpg",//封面图片
          "order": 1, // 序号
          "status": 1,  // 课程状态，1：已解锁，2：未解锁
          "bambooCount": 3, // 需要的竹笋数量
          "unlockedUserCount": 70 // 已解锁的用户数
        }, {
          "id": 2, // 物料id
          "name": "我们的地球", // 分集名称
          "englishName": "ssssss", // 英文名
          "cover": "https://www.babyabc100.com/static/img/bg/cover.jpg",//封面图片
          "order": 1, // 序号
          "status": 1,  // 课程状态，1：已解锁，2：未解锁
          "bambooCount": 3, // 需要的竹笋数量
          "unlockedUserCount": 70 // 已解锁的用户数
        }
    ]
  };

    var result = {
          status: 200,
          data: data
    };
    
    return result;
}