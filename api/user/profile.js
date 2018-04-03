/**
 *
    物料详情
 * 
 * 20180118
 * zhanwentao@baijiahulian.com
 */

exports.index = function (param) {
    var data = {
        "nickname": "依依妈妈", // 用户昵称
        "avatar": "https://www.babyabc100.com/static/img/bg/cover.jpg", // 用户头像
        "learningDuration": 200, // 学习时长，单位分钟
        "wordCount": 200, // 学习的单词数量
        "sentenceCount": 3, // 学习的句子数量
        "historyRecords": [{
            "id": 3, // 课程id
            "name": "dwfw", // 课程名称
            "score": 90, // 得分
            "learningDate": 324342342, // 学习日期
            "cover": 'https://www.babyabc100.com/static/img/bg/cover.jpg'
        }, {
            "id": 3, // 课程id
            "name": "dwfw", // 课程名称
            "score": 90, // 得分
            "learningDate": 324342342, // 学习日期
            "cover": 'https://www.babyabc100.com/static/img/bg/cover.jpg'
        }, {
            "id": 3, // 课程id
            "name": "dwfw", // 课程名称
            "score": 90, // 得分
            "learningDate": 324342342, // 学习日期
            "cover": 'https://www.babyabc100.com/static/img/bg/cover.jpg'
        }, {
            "id": 3, // 课程id
            "name": "dwfw", // 课程名称
            "score": 90, // 得分
            "learningDate": 324342342, // 学习日期
            "cover": 'https://www.babyabc100.com/static/img/bg/cover.jpg'
        }, {
            "id": 3, // 课程id
            "name": "dwfw", // 课程名称
            "score": 90, // 得分
            "learningDate": 324342342, // 学习日期
            "cover": 'https://www.babyabc100.com/static/img/bg/cover.jpg'
        }]
    };
    
    var result = {
        status: 200,
        data: data
    };
    
    return result;
}