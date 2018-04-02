/**
 *
    物料详情
 * 
 * 20180118
 * zhanwentao@baijiahulian.com
 */

exports.index = function (param) {
    var data = {
        "data": [{
            "id": 1, // 课程id
            "name": "dwfw", // 课程名称
            "avgScore": 90, // 得分
            "learningDate": 324342342 // 学习日期
        }, {
            "id": 2, // 课程id
            "name": "dwfw", // 课程名称
            "avgScore": 90, // 得分
            "learningDate": 324342342 // 学习日期
        }, {
            "id": 3, // 课程id
            "name": "dwfw", // 课程名称
            "avgScore": 90, // 得分
            "learningDate": 324342342 // 学习日期
        }],
        "page": {
          "pageNum": 1,
          "pageSize": 10,
          "count": 3
        }
    };
    
    var result = {
        status: 200,
        data: data,
    };
    
    return result;
}