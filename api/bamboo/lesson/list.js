exports.index = function (param) {

    var result = {
          status: 200,
          data: [{
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
        }]
    };
    
    return result;
}