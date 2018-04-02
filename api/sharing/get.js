/**
 *
    物料详情
 * 
 * 20180118
 * zhanwentao@baijiahulian.com
 */

exports.index = function (param) {
    var util = require('../util');
    var resources = [{
        "id": 23, //资源ID，如果是音频，视频，图片类的必填，该ID上传成功后会返回。其他类型，修改的时候填写，新建填写0或者空。
        "materialId": 2, // 物料ID，修改的时候填写，新建填写0或者空
        "resourceType": 2, // 资源类型。1：标题，2：文本，3：图片，4：音频，5：视频，6：链接，7：副标题，8：跟读音频
        "content": {
            definitions: util.getDefinitions(),
            "text": "文本"
        }, // 内容，标题或文本类型必填。
        "url": "http://www.babyabc.com/hhhaaa", //跳转链接。 链接类型必填，图片类型选填表示该图片对应的跳转链接。
        "transcodingStatus": 100, //转码状态。10:上传中 20:转码中 30:转码失败 31:转码超时 32:上传超时 100:转码成功
        "resourceOrder": 1 // 资源在对应模板中的显示顺序。
    }, {
        "id": 25, //资源ID，如果是音频，视频，图片类的必填，该ID上传成功后会返回。其他类型，修改的时候填写，新建填写0或者空。
        "materialId": 2, // 物料ID，修改的时候填写，新建填写0或者空
        "resourceType": 4, // 资源类型。1：标题，2：文本，3：图片，4：音频，5：视频，6：链接，7：副标题，8：跟读音频
        "content": { // 图片类型，此处为图片url
          "musicUrl": "http://www.babyabc.com/image.mp3",
        }, // 内容，标题或文本类型必填。
        "url": "http://www.babyabc.com/hhhaaa", //跳转链接。 链接类型必填，图片类型选填表示该图片对应的跳转链接。
        "transcodingStatus": 100, //转码状态。10:上传中 20:转码中 30:转码失败 31:转码超时 32:上传超时 100:转码成功
        "resourceOrder": 1 // 资源在对应模板中的显示顺序。
    }, {
        "id": 200, //资源ID，如果是音频，视频，图片类的必填，该ID上传成功后会返回。其他类型，修改的时候填写，新建填写0或者空。
        "materialId": 2, // 物料ID，修改的时候填写，新建填写0或者空
        "resourceType": 8, // 资源类型。1：标题，2：文本，3：图片，4：音频，5：视频，6：链接，7：副标题，8：跟读音频
        "content": { // 图片类型，此处为图片url
          "musicUrl": "http://www.babyabc.com/image.mp3",
          "score": 40,
          "tips": "Keep trying!再来一次吧"
        }, // 内容，标题或文本类型必填。
        "url": "http://www.babyabc.com/hhhaaa", //跳转链接。 链接类型必填，图片类型选填表示该图片对应的跳转链接。
        "transcodingStatus": 100, //转码状态。10:上传中 20:转码中 30:转码失败 31:转码超时 32:上传超时 100:转码成功
        "resourceOrder": 1 // 资源在对应模板中的显示顺序。
    }, {
        "id": 201, //资源ID，如果是音频，视频，图片类的必填，该ID上传成功后会返回。其他类型，修改的时候填写，新建填写0或者空。
        "materialId": 2, // 物料ID，修改的时候填写，新建填写0或者空
        "resourceType": 8, // 资源类型。1：标题，2：文本，3：图片，4：音频，5：视频，6：链接，7：副标题，8：跟读音频
        "content": { // 图片类型，此处为图片url
            definitions: util.getDefinitions(),
          "musicUrl": "http://www.babyabc.com/image.mp3",
          "score": 80,
          "tips": "Great！但是还有进步空间哦，重新跟读或者继续下一个"
        }, // 内容，标题或文本类型必填。
        "url": "http://www.babyabc.com/hhhaaa", //跳转链接。 链接类型必填，图片类型选填表示该图片对应的跳转链接。
        "transcodingStatus": 100, //转码状态。10:上传中 20:转码中 30:转码失败 31:转码超时 32:上传超时 100:转码成功
        "resourceOrder": 1 // 资源在对应模板中的显示顺序。
    }];
    
    var data = {
        "nickname": "依依妈妈", // 用户昵称
        "avatar": "http://sdfsdfasfds.com/sfsf.jpg", // 用户头像
        "avgScore": 85, // 平均得分
        "course": {
            "id": 2, // 课程id
            "name": "fssfsf", // 课程名称
            "learningStatus": 1, // 1: 学习中，2: 已完成
            "sharingToken": "dsf234535435", // 打开分享页面用的token
            resources: resources
        }
    };
    
    var result = {
        status: 200,
        data: data,
    };
    
    return result;
}