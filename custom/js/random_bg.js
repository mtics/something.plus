// 在 [Blogroot]\_config.butterfly.yml 引入 randombg.js：
// inject:
//   head:
//   bottom:
//     - <script async data-pjax src="/js/randombg.js"></script>

//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var backimg = [
    "url(/img/bg1.JPG)",
    "url(/img/bg2.jpg)",
    "url(/img/bg3.jpg)",
    "url(/img/bg4.jpg)"
]
//获取背景图片总数，生成随机数
var bgindex = Math.floor(Math.random() * backimg.length)
//重设背景图片
document.getElementById("web_bg").style.backgroundImage = backimg[bgindex]
//随机banner数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var bannerimg = [
    "url(/img/bg1.JPG)",
    "url(/img/bg2.jpg)",
    "url(/img/bg3.jpg)",
    "url(/img/bg4.jpg)"
]
//获取banner图片总数，生成随机数
var bannerindex = Math.floor(Math.random() * bannerimg.length)
//重设banner图片
document.getElementById("page-header").style.backgroundImage = bannerimg[bannerindex]