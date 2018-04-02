exports.index = function (param) {

    var result = {
        status: 200,
        data:  {
            "id": 200, //资源ID，如果是音频，视频，图片类的必填，该ID上传成功后会返回。其他类型，修改的时候填写，新建填写0或者空。
            "materialId": 2, // 物料ID，修改的时候填写，新建填写0或者空
            "resourceType": 8, // 资源类型。1：标题，2：文本，3：图片，4：音频，5：视频，6：链接，7：副标题，8：跟读音频
            "content": { // 音频类型，此处为音频url
              "musicUrl": "http://www.babyabc.com/image.mp3",
              "score": 40,
              "tips": "Keep trying!再来一次吧"
            }, // 内容，标题或文本类型必填。
            "url": "http://www.babyabc.com/hhhaaa", //跳转链接。 链接类型必填，图片类型选填表示该图片对应的跳转链接。
            "transcodingStatus": 100, //转码状态。10:上传中 20:转码中 30:转码失败 31:转码超时 32:上传超时 100:转码成功
            "resourceOrder": 1 // 资源在对应模板中的显示顺序。
        }
    };

    return result;
}