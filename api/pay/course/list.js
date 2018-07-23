exports.index = function (param) {    
    var result = {
        status: 200,
        data: {
            "data": [
                {
                  "id": 1,
                  "name": "0-2岁课程",
                  "cover": "https://img.gsxservice.com/55757232_2ejcq47b.png"//封面链接
                },
                {
                    "id": 2,
                    "name": "2-4岁课程",
                    "cover": "https://img.gsxservice.com/55757232_2ejcq47b.png"//封面链接
                },
                {
                    "id": 3,
                    "name": "4-6岁课程",
                    "cover": "https://img.gsxservice.com/55757232_2ejcq47b.png"//封面链接
                },
              ],
              "page": {
                "pageNum": 1,
                "pageSize": 10,
                "count": 3
              }
        }
    };
    
    return result;
}