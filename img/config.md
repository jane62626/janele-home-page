```javascript
const config = {
  //网页元数据
  metaData:{
    title: 'JaneLe的个人主页🎉',
    description: '欢迎来到JaneLe的奇妙世界！',
    keywords: 'JaneLe,JaneLe,个人主页,个人网站',
    icon: '/favicon.ico'   //网页图标，支持外链
  },

  avatar: "/img/avatar.jpg", // 头像
  welcometitle: "Hi, I'm JaneLe", // 标题

  // 颜色配置
  color: {
    themecolor: "#FFFFFF", // 主题颜色，推荐趋于亮白可带有轻微色调，例： #D1FFEC
    welcometitlecolor: "#FFFFFF", // 标题颜色 例： #7BFFC9
  },
  
  brightness: 85, // 背景亮度 --%
  blur: 5, // 毛玻璃模糊效果

  // 我的标签
  tags : ['乐观开朗','温柔体贴','随和亲切','冷静沉着','才思敏捷','风趣幽默','刚正不阿','善解人意'],

  // 默认背景壁纸
  background: {
    "pc":{   //pc端
      "type":"pic",   //"pic":静态壁纸;"video":动态壁纸
      "datainfo":{
        "title":"珍珠少年", 
        "preview":"/img/wallpaper/static/珍珠少年/image-pre.webp",
        "url":"/img/wallpaper/static/珍珠少年/image.png",     //当然，也可填写网络地址或壁纸api，如随机PC壁纸api："url":"https://t.mwm.moe/pc"
      },
    },
    "mobile":{   //移动端
      "type":"pic",
      "datainfo":{
        "title":"0001", 
        "preview":"/img/wallpaper/static-mobile/0001/image-pre.webp",
        "url":"/img/wallpaper/static-mobile/0001/image.png"  //同理，随机移动端壁纸："url":"https://t.mwm.moe/mp"
      }
    }
      
  },

  //极坐标图数据
  polarChart:{
    skills: ['Node', 'Vue.js', 'React', 'JavaScript', 'Java', 'Python', 'linux', 'Docker', 'MySQL', 'MongoDB', 'AWS'],
    skillPoints: [90, 85, 78, 88, 80, 78, 85, 65, 82, 78, 65],
  },

  //社交按钮，图标使用mdi图标（https://pictogrammers.com/library/mdi/），复制图标名称即可
  socialPlatformIcons: [
    {icon:"mdi-github",link:"https://www.github.com/jane62626"},
    {icon:"mdi-email",link:"mailto:ldjanelee@outlook.com"},
    {icon:"mdi-qqchat",link:"https://im.qq.com/"},
    {icon:"mdi-wechat",link:"https://monojson.com/s/cJmu4"},
    {icon:"mdi-youtube",link:"https://www.youtube.com"},
    {icon:"mdi-facebook",link:"https://www.facebook.com"}
  ],

  //打字机
  typeWriterStrings: [
    "希望树活着，花也是，火也是。",
    "走过安徒生走过的路，从此我就会写童话故事啦。",
    "我不在乎外部给我的标签，因为他们只是想记住我而已。",
    "终有一日，寒冬会融于暖阳之下，而我，会化作你永不落幕的春天。",
    "生命太短，没有时间留给遗憾，若不是终点，请微笑一直向前。"
  ],

  //音乐播放配置，采用MetingJS Api(https://github.com/metowolf/MetingJS)
  musicPlayer:{
    server: 'netease',  //服务提供商 --网易云音乐
    type: 'playlist',   //歌单类型
    id: '2028178887'  //歌单id ---> music.163.com/#/playlist?id=2028178887
  },

  //壁纸数据 -----可以将壁纸文件上传到uhsea.com获取网络直链。若想调用api，请前往脚本自行修改逻辑
  wallpaper:{
    pic:[
      {"title":"珍珠少年","preview":"/img/wallpaper/static/珍珠少年/image-pre.webp","url":"/img/wallpaper/static/珍珠少年/image.png"},
      {"title":"不健全关系","preview":"/img/wallpaper/static/不健全关系/image-pre.webp","url":"/img/wallpaper/static/不健全关系/image.png"},
      {"title":"天官赐福","preview":"/img/wallpaper/static/天官赐福/image-pre.webp","url":"/img/wallpaper/static/天官赐福/image.png"},
      {"title":"鬼夜曲","preview":"/img/wallpaper/static/鬼夜曲/image-pre.webp","url":"/img/wallpaper/static/鬼夜曲/image.png"},
      {"title":"jswcMaMj","preview":"https://file.uhsea.com/2503/76a4f03e8654d6e66bbbc7e8149c2fe33M.png","url":"https://file.uhsea.com/2503/5b8a20a5f2b269659911c9485d0d0c3f0F.png"},
      {"title":"pgtTqoqq","preview":"https://file.uhsea.com/2503/caeae6b4fc1aba41bff4ad4ec59d6d8aA5.png","url":"https://file.uhsea.com/2503/45aa0a5a31a0ae95f7cc660e3ab4148eUT.png"},
      {"title":"cvKMKhue","preview":"https://file.uhsea.com/2503/7a693bf725b501e0907ce40f18d2edc49P.png","url":"https://file.uhsea.com/2503/55e7191130d160a8e4421497308ffb67DT.png"},
      {"title":"XpxvQVoP","preview":"https://file.uhsea.com/2503/f4b6804c7189357d3252aa0f981b59c4EF.png","url":"https://file.uhsea.com/2503/66359907715d46e0a4523da0142a6f63EU.png"},
    ],
    picMobile:[
      {"title":"0001","preview":"/img/wallpaper/static-mobile/0001/image-pre.webp","url":"/img/wallpaper/static-mobile/0001/image.png"},
      {"title":"0002","preview":"/img/wallpaper/static-mobile/0002/image-pre.webp","url":"/img/wallpaper/static-mobile/0002/image.png"},
      {"title":"0003","preview":"/img/wallpaper/static-mobile/0003/image-pre.webp","url":"/img/wallpaper/static-mobile/0003/image.png"},
      {"title":"0004","preview":"/img/wallpaper/static-mobile/0004/image-pre.webp","url":"/img/wallpaper/static-mobile/0004/image.png"},
      {"title":"0005","preview":"/img/wallpaper/static-mobile/0005/image-pre.webp","url":"/img/wallpaper/static-mobile/0005/image.png"},
      {"title":"DfNHPPcc","preview":"https://file.uhsea.com/2503/e3510f4d0286e37b828f74494230f0efM2.png","url":"https://file.uhsea.com/2503/97b50adb3d4cd6f1a4132f6d3e8c98483T.png"},
      {"title":"WIOlrGSy","preview":"https://file.uhsea.com/2503/99162abfe07e18cfe6182ca3458561ef3A.png","url":"https://file.uhsea.com/2503/609532b992163117db9b341dde87b78f3C.png"},
      {"title":"cZZwzhis","preview":"https://file.uhsea.com/2503/cf558fa1989c07726778c60be47b9928K8.png","url":"https://file.uhsea.com/2503/e27b91f1604f73d0444c807024ef7c9fI3.png"},
      {"title":"aANKZHPX","preview":"https://file.uhsea.com/2503/0aa1cb875c8c7c20afd1aa72530294350K.png","url":"https://file.uhsea.com/2503/b09b65e20e176cb0d22dbc319981b5b45L.png"},
    ],
    video:[
      {
        "title":"鬼夜曲",
        "preview":"/img/wallpaper/dynamic/鬼夜曲/guiyequ-pre.webm",
        "url":"/img/wallpaper/dynamic/鬼夜曲/guiyequ.webm"
      },
      {
        "title":"王亿",
        "preview":"/img/wallpaper/dynamic/王亿/wangyi-pre.webm",
        "url":"/img/wallpaper/dynamic/王亿/wagnyi.webm"
      },
    ],
    videoMobile:[
      {
        "title":"言逸",
        "preview":"/img/wallpaper/dynamic-mobile/言逸/yanyi-pre.mp4",
        "url":"/img/wallpaper/dynamic-mobile/言逸/yanyi.mp4"
      },
      {
        "title":"王亿",
        "preview":"/img/wallpaper/dynamic-mobile/王亿/wangyi-pre.mp4",
        "url":"/img/wallpaper/dynamic-mobile/王亿/wangyi.mp4"
      },
      {
        "title":"珍珠花",
        "preview":"/img/wallpaper/dynamic-mobile/珍珠花/zhenzhuhua-pre.mp4",
        "url":"/img/wallpaper/dynamic-mobile/珍珠花/zhenzhuhua.mp4"
      },
      {
        "title":"无根树",
        "preview":"/img/wallpaper/dynamic-mobile/无根树/wugenshu-pre.mp4",
        "url":"/img/wallpaper/dynamic-mobile/无根树/wugenshu.mp4"
      },
    ],
  },

  //项目卡片 其中 字段"show"控制初始卡片的text是否展开
  projectcards:[ 
    {go:"🚀 前往",img:"/img/sunshine.jpg",title:"Project 1",subtitle:"1,000 miles of wonder", text:"If you see this line, I've managed to get your attention.",url:"https://leleo.top",show:false},
    {go:"🗂️ 前往",img:"/img/sunshine.jpg",title:"Project 2",subtitle:"2,000 miles of wonder", text:"If you see this line, I've managed to get your attention.",url:"https://leleo.top",show:false},
    {go:"📝 前往",img:"/img/sunshine.jpg",title:"Project 3",subtitle:"3,000 miles of wonder", text:"If you see this line, I've managed to get your attention.",url:"https://leleo.top",show:false},
    {go:"👍 前往",img:"/img/sunshine.jpg",title:"Project 4",subtitle:"4,000 miles of wonder", text:"If you see this line, I've managed to get your attention.",url:"https://leleo.top",show:false},
    {go:"🗃 前往",img:"/img/sunshine.jpg",title:"Project 5",subtitle:"5,000 miles of wonder", text:"If you see this line, I've managed to get your attention.",url:"https://leleo.top",show:false},
    {go:"🎨 前往",img:"/img/sunshine.jpg",title:"Project 6",subtitle:"6,000 miles of wonder", text:"If you see this line, I've managed to get your attention.",url:"https://leleo.top",show:false},
    {go:"💍 前往",img:"/img/sunshine.jpg",title:"Project 7",subtitle:"7,000 miles of wonder", text:"If you see this line, I've managed to get your attention.",url:"https://leleo.top",show:false},
    {go:"🔍 前往",img:"/img/sunshine.jpg",title:"Project 8",subtitle:"8,000 miles of wonder", text:"If you see this line, I've managed to get your attention.",url:"https://leleo.top",show:false},
  ],
  
  statement: ["备案号：XXICP备123456789号","Copyright © 2025 JaneLe"],
}

export default config
```