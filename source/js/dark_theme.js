function changeDarkTheme() {
    document.querySelector('html').classList.toggle('dark-theme');
    if(document.querySelector('html').classList.contains('dark-theme')){
        localStorage.setItem("hexoTheme", "1");
    } else {
        localStorage.setItem("hexoTheme", "0");
    }
};

if(localStorage.getItem("hexoTheme") === null){   //第一次访问网站，默认浅色模式
    localStorage.setItem("hexoTheme", "0");
} else {
    const theme = localStorage.getItem("hexoTheme");    //每次打开网站，判断是否需要更新成深色模式
    if(theme == 1){
        changeDarkTheme();
    }
}