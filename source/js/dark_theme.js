function changeDarkTheme() {
    document.documentElement.classList.toggle('dark-theme');
    if(document.documentElement.classList.contains('dark-theme')){
        sessionStorage.setItem("hexoTheme", "1");
    } else {
        sessionStorage.setItem("hexoTheme", "0");
    }
};

if(sessionStorage.getItem("hexoTheme") === null){   //第一次访问网站，试图参考系统设定
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    if (prefersDarkScheme.matches) {
        sessionStorage.setItem("hexoTheme", "1");
        changeDarkTheme();
    } else {
        sessionStorage.setItem("hexoTheme", "0");
    }
} else {
    const theme = sessionStorage.getItem("hexoTheme");    //每次打开网站，判断是否需要更新成深色模式
    if(theme == 1){
        changeDarkTheme();
    }
}