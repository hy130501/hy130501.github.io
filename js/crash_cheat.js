var crashSwitched = false;
var originalTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
  if (document.hidden) {
    if (Math.random() < parseFloat(0.25)) {
      crashSwitched = true;
      document.title = '╭(°A°`)╮ 页面崩溃啦~' + originalTitle;
      clearTimeout(titleTime);
    }
  } else {
    if (crashSwitched == true) {
      crashSwitched = false;
      document.title = '(ฅ>ω<*ฅ) 咦，又好了~' + originalTitle;
      titleTime = setTimeout(function () {
        document.title = originalTitle;
      }, 2000);
    }
  }
});


