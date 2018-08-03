/**
 *
    课节详情
 * 
 * 20180723
 * zhanwentao@baijiahulian.com
 */

exports.index = function (param) {
    var util = require('../../util');
    var resources = [{
        "id": 23, //资源ID，如果是音频，视频，图片类的必填，该ID上传成功后会返回。其他类型，修改的时候填写，新建填写0或者空。
        "materialId": 2, // 物料ID，修改的时候填写，新建填写0或者空
        "resourceType": 1, // 资源类型。1：标题，2：文本，3：图片，4：音频，5：视频，6：链接，7：副标题，8：跟读音频
        "content": {
            definitions: util.getDefinitions(),
            playInfo: util.getPlayInfo(),
            "text": "视频学习区"
        }, // 内容，标题或文本类型必填。
        "url": "http://www.babyabc.com/hhhaaa", //跳转链接。 链接类型必填，图片类型选填表示该图片对应的跳转链接。
        "transcodingStatus": 100, //转码状态。10:上传中 20:转码中 30:转码失败 31:转码超时 32:上传超时 100:转码成功
        "resourceOrder": 1 // 资源在对应模板中的显示顺序。
    }, {
        "id": 25, //资源ID，如果是音频，视频，图片类的必填，该ID上传成功后会返回。其他类型，修改的时候填写，新建填写0或者空。
        "materialId": 2, // 物料ID，修改的时候填写，新建填写0或者空
        "resourceType": 2, // 资源类型。1：标题，2：文本，3：图片，4：音频，5：视频，6：链接，7：副标题，8：跟读音频
        "content": { // 图片类型，此处为图片url
            definitions: util.getDefinitions(),
            playInfo: util.getPlayInfo(),
            "text": "1.视频学习区2.爸妈必读区3.文本概念区",
            "musicUrl": "http://www.babyabc.com/image.mp3",
        }, // 内容，标题或文本类型必填。
        "url": "http://www.babyabc.com/hhhaaa", //跳转链接。 链接类型必填，图片类型选填表示该图片对应的跳转链接。
        "transcodingStatus": 100, //转码状态。10:上传中 20:转码中 30:转码失败 31:转码超时 32:上传超时 100:转码成功
        "resourceOrder": 1 // 资源在对应模板中的显示顺序。
    }, {
        "id": 200, //资源ID，如果是音频，视频，图片类的必填，该ID上传成功后会返回。其他类型，修改的时候填写，新建填写0或者空。
        "materialId": 2, // 物料ID，修改的时候填写，新建填写0或者空
        "resourceType": 3, // 资源类型。1：标题，2：文本，3：图片，4：音频，5：视频，6：链接，7：副标题，8：跟读音频
        "content": { // 图片类型，此处为图片url
          definitions: util.getDefinitions(),
          playInfo: util.getPlayInfo(),
          "musicUrl": "http://www.babyabc.com/image.mp3",
          "score": 40,
          "tips": "Keep trying!再来一次吧"
        }, // 内容，标题或文本类型必填。
        "url": "https://beta-www.babyabc100.com/static/img/bg/cover.png", //跳转链接。 链接类型必填，图片类型选填表示该图片对应的跳转链接。
        "transcodingStatus": 100, //转码状态。10:上传中 20:转码中 30:转码失败 31:转码超时 32:上传超时 100:转码成功
        "resourceOrder": 1 // 资源在对应模板中的显示顺序。
    }, {
        "id": 201, //资源ID，如果是音频，视频，图片类的必填，该ID上传成功后会返回。其他类型，修改的时候填写，新建填写0或者空。
        "materialId": 2, // 物料ID，修改的时候填写，新建填写0或者空
        "resourceType": 4, // 资源类型。1：标题，2：文本，3：图片，4：音频，5：视频，6：链接，7：副标题，8：跟读音频
        "content": { // 图片类型，此处为图片url
          definitions: util.getDefinitions(),
          playInfo: util.getPlayInfo(),
          "musicUrl": "http://mp4.111ttt.cn/2018/myxc/0/GHM.mp4?#.mp3",
          "score": 80,
          "tips": "Great！但是还有进步空间哦，重新跟读或者继续下一个"
        }, // 内容，标题或文本类型必填。
        "url": "http://www.babyabc.com/hhhaaa", //跳转链接。 链接类型必填，图片类型选填表示该图片对应的跳转链接。
        "transcodingStatus": 100, //转码状态。10:上传中 20:转码中 30:转码失败 31:转码超时 32:上传超时 100:转码成功
        "resourceOrder": 1 // 资源在对应模板中的显示顺序。
    }, {
        "id": 201, //资源ID，如果是音频，视频，图片类的必填，该ID上传成功后会返回。其他类型，修改的时候填写，新建填写0或者空。
        "materialId": 2, // 物料ID，修改的时候填写，新建填写0或者空
        "resourceType": 5, // 资源类型。1：标题，2：文本，3：图片，4：音频，5：视频，6：链接，7：副标题，8：跟读音频
        "content": { // 图片类型，此处为图片url
          definitions: util.getDefinitions(),
          playInfo: util.getPlayInfo(),
          "musicUrl": "http://www.babyabc.com/image.mp3",
          "score": 80,
          "tips": "Great！但是还有进步空间哦，重新跟读或者继续下一个"
        }, // 内容，标题或文本类型必填。
        "url": "http://www.babyabc.com/hhhaaa", //跳转链接。 链接类型必填，图片类型选填表示该图片对应的跳转链接。
        "transcodingStatus": 100, //转码状态。10:上传中 20:转码中 30:转码失败 31:转码超时 32:上传超时 100:转码成功
        "resourceOrder": 1 // 资源在对应模板中的显示顺序。
    }, {
        "id": 201, //资源ID，如果是音频，视频，图片类的必填，该ID上传成功后会返回。其他类型，修改的时候填写，新建填写0或者空。
        "materialId": 2, // 物料ID，修改的时候填写，新建填写0或者空
        "resourceType": 7, // 资源类型。1：标题，2：文本，3：图片，4：音频，5：视频，6：链接，7：副标题，8：跟读音频
        "content": { // 图片类型，此处为图片url
          definitions: util.getDefinitions(),
          playInfo: util.getPlayInfo(),
          "musicUrl": "http://www.babyabc.com/image.mp3",
          "score": 80,
          "text": '【E-book 电子歌曲绘本】',
          "tips": "Great！但是还有进步空间哦，重新跟读或者继续下一个"
        }, // 内容，标题或文本类型必填。
        "url": "http://www.babyabc.com/hhhaaa", //跳转链接。 链接类型必填，图片类型选填表示该图片对应的跳转链接。
        "transcodingStatus": 100, //转码状态。10:上传中 20:转码中 30:转码失败 31:转码超时 32:上传超时 100:转码成功
        "resourceOrder": 1 // 资源在对应模板中的显示顺序。
    }];
    
    var data = {
        "thumbnail": "https://www.babyabc100.com/static/img/bg/cover.jpg",
        "id": 2, // 课程id
        "name": "fssfsf", // 课程名称
        "materialType": 3,
        "templateType": 1,
        createTime: new Date().getTime(),
        updateTime: new Date().getTime(),
        validUrlNum: null,
        resources: resources
    };
    
    var result = {
        status: 200,
        data: data,
    };
    
    return result;
}