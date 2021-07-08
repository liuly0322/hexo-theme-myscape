function changeDarkTheme() {
    document.querySelector('html').classList.toggle('dark-theme');
    theme = (theme === 0) ? 1 : 0;
};