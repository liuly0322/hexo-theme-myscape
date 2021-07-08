function changeDarkTheme() {
    document.querySelector('html').classList.toggle('dark-theme');
    if(document.querySelector('html').classList.contains('dark-theme')){
        document.cookie="theme=1; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/";
    } else {
        document.cookie="theme=0; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/";
    }
};
function getCookie(cname)
{
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i<ca.length; i++) 
  {
    var c = ca[i].trim();
    if (c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return "";
}
if(document.cookie == 0){   //第一次访问网站，默认浅色模式
    document.cookie="theme=0; expires=Thu, 18 Dec 2043 12:00:00 GMT; path=/";
} else {
    const theme = getCookie('theme')    //每次打开网站，判断是否需要更新成深色模式
    if(theme == 1){
        changeDarkTheme();
    }
}