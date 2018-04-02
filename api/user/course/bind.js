/**
 *
    用户课程绑定
 * 
 * 20180118
 * zhanwentao@baijiahulian.com
 */

exports.index = function (param) {
    var data = {
        "happyReadType": 1 // 体验营，1：0-2岁星星班，2：2-4岁月亮班，3：4-6岁太阳班
    };
    
    var result = {
        status: 200,
        data: data,
    };
    
    return result;
}