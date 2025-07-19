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
  blur: 7, // 毛玻璃模糊效果

  // 我的标签
  //tags : ['乐观开朗','温柔体贴','随和亲切','冷静沉着','才思敏捷','风趣幽默','刚正不阿','善解人意'],
  //"tags": ["疯批年下", "强制骨科", "双向救赎", "大型犬攻",  "绝世好受", "男孕生子", "强攻强受"],

  // 默认背景壁纸
  background: {
    "pc":{   //pc端
      "type":"pic",   //"pic":静态壁纸;"video":动态壁纸
      "datainfo":{
        "title":"海洋女孩", 
        "preview":"/img/wallpaper/static/海洋女孩/image-pre.webp",
        "url":"/img/wallpaper/static/海洋女孩/image.png",     //当然，也可填写网络地址或壁纸api，如随机PC壁纸api："url":"https://t.mwm.moe/pc"
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
    skills: ['Vue.js', 'React', 'JavaScript', 'Node', 'Java', 'Python', 'linux', 'Docker', 'MySQL', 'MongoDB', 'AWS'],
    skillPoints: [85, 78, 88, 90, 80, 78, 85, 65, 82, 78, 70],
  },

  //社交按钮
  socialPlatformIcons: [
    {icon:"mdi-github",link:"https://www.github.com/jane62626"},
    {icon:"mdi-email",link:"mailto:ldjanelee@outlook.com"},
    {icon:"mdi-qqchat",link:"https://im.qq.com/"},
    {icon:"mdi-wechat",link:"https://monojson.com/s/cJmu4"},
    {icon:"mdi-youtube",link:"https://www.youtube.com"},
    {icon:"mdi-twitter",link:"https://x.com"}
  ],

  //打字机
  typeWriterStrings: [
    "希望树活着，花也是，火也是。","走过安徒生走过的路，从此我就会写童话故事啦。",
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
      {"title":"珍珠少年","preview":"https://file.uhsea.com/2507/a897ae412dae1b7ef5526b9651cbbf933Z.webp","url":"https://file.uhsea.com/2507/8cd4f96990fc153492870a49223ca219X3.png"},
      {"title":"腾瑞雨","preview":"https://file.uhsea.com/2507/dcc9b874ae30dc3c1e2dbd020f4b4bc5HS.webp","url":"https://file.uhsea.com/2507/7a82ec7dc1881d6148510009b06a4373IJ.png"},
      {"title":"鬼夜曲","preview":"https://file.uhsea.com/2507/4531c4c9fd323247340f5d8738e27d64C7.webp","url":"https://file.uhsea.com/2507/e1655e686fbf5004231f6b2e4b5796fcZS.png"},
      {"title":"天官赐福","preview":"https://file.uhsea.com/2507/e5d3b30c2cd1d9f034dcbfabf7cc3ad97V.webp","url":"https://file.uhsea.com/2507/0554a4363df7878c2c2b4b9ea1ed94fe0M.png"},
      //{"title":"","preview":"","url":""},
      //{"title":"jgnIKMpd","preview":"","url":""},
      //{"title":"mgqyySeh","preview":"","url":""},
      //{"title":"dSXZfZp","preview":"h","url":""},
      
    ],
    picMobile:[
      {"title":"0001","preview":"/img/wallpaper/static-mobile/0001/image-pre.webp","url":"/img/wallpaper/static-mobile/0001/image.png"},
      {"title":"0002","preview":"/img/wallpaper/static-mobile/0002/image-pre.webp","url":"/img/wallpaper/static-mobile/0002/image.png"},
      {"title":"0003","preview":"/img/wallpaper/static-mobile/0003/image-pre.webp","url":"/img/wallpaper/static-mobile/0003/image.png"},
      {"title":"0004","preview":"/img/wallpaper/static-mobile/0004/image-pre.webp","url":"/img/wallpaper/static-mobile/0004/image.png"},
      //{"title":"DfNHPPcc","preview":"https://file.uhsea.com/2503/e3510f4d0286e37b828f74494230f0efM2.png","url":"https://file.uhsea.com/2503/97b50adb3d4cd6f1a4132f6d3e8c98483T.png"},
      //{"title":"WIOlrGSy","preview":"https://file.uhsea.com/2503/99162abfe07e18cfe6182ca3458561ef3A.png","url":"https://file.uhsea.com/2503/609532b992163117db9b341dde87b78f3C.png"},
      //{"title":"cZZwzhis","preview":"https://file.uhsea.com/2503/cf558fa1989c07726778c60be47b9928K8.png","url":"https://file.uhsea.com/2503/e27b91f1604f73d0444c807024ef7c9fI3.png"},
      //{"title":"aANKZHPX","preview":"https://file.uhsea.com/2503/0aa1cb875c8c7c20afd1aa72530294350K.png","url":"https://file.uhsea.com/2503/b09b65e20e176cb0d22dbc319981b5b45L.png"},
    ],
    video:[
      {
        "title":"鬼夜曲",
        "preview":"https://file.uhsea.com/2507/60d78759699bd5845da089a4de698869TK.webm",
        "url":"https://file.uhsea.com/2507/9c1e96aa5dfdfd051f959b418b19c6f3RV.webm"
      },
      {
        "title":"王亿",
        "preview":"https://file.uhsea.com/2507/f78e6dd807c5baeddc8e2bcf1cc59e74C4.webm",
        "url":"https://file.uhsea.com/2507/3403382387954d976112ed079a0555c5XF.webm"
      },
      //{
        //"title":"世界很温柔《龙族》上杉绘梨衣",
        //"preview":"https://file.uhsea.com/2503/c048d174eee7df15de79a6cdc5c47697LT.webm",
        //"url":"https://file.uhsea.com/2503/320a926c4a3d6c7e0457823f7fd45e5dUC.webm"
      //},
    ],
    videoMobile:[
      {
        "title":"言逸",
        "preview":"https://file.uhsea.com/2507/776bca40ebbcb7051904c0db9724e436S9.mp4",
        "url":"https://file.uhsea.com/2507/9629503e3cb52e6d00d16e6f71ea79460K.mp4"
      },
      {
        "title":"王亿",
        "preview":"https://file.uhsea.com/2507/35588a98c06091edd49c021ad9bebbceOK.mp4",
        "url":"https://file.uhsea.com/2507/e3c537915cd1b75c9dc9de49fbfeb217OT.mp4"
      },
      {
        "title":"珍珠花",
        "preview":"https://file.uhsea.com/2507/4b82698bc77d747ee20cf0e08acb737fHX.mp4",
        "url":"https://file.uhsea.com/2507/5e7264a8d81319f2fab413e75fe4b7b36F.mp4"
      },
      {
        "title":"无根树",
        "preview":"https://file.uhsea.com/2507/6f45c3b71a904d13ce5f74d2ba1a2943QS.mp4",
        "url":"https://file.uhsea.com/2507/f57a37f53fb7a050296718d8da8f91fd7C.mp4"
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