function set_bg () {
    // 设置Post页面一图流

    // 获取header/footer/web_bg对象
    header = document.getElementById('page-header')
    footer = document.getElementById('footer')
    web_bg = document.getElementById('web_bg')

    // 只有在页面类型是post的时候执行页面背景图替换
    if (document.getElementById('body-wrap').getAttribute('class') == 'post') {
        // 将web_bg背景图设为POST图
        web_bg.style.backgroundImage = header.style.backgroundImage

        // 隐藏首页图
        header.style.backgroundImage = ""
        footer.style.backgroundImage = ""
    }
}

document.addEventListener('onpageshow', set_bg())