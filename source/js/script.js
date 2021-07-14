(function ($) {
  // Share
  $('body').on('click', function () {
    $('.article-share-box.on').removeClass('on');
  }).on('click', '.article-share-link', function (e) {
    e.stopPropagation();
    var $this = $(this),
      url = $this.attr('data-url'),
      encodedUrl = encodeURIComponent(url),
      id = 'article-share-box-' + $this.attr('data-id'),
      title = $this.attr('data-title'),
      offset = $this.offset();
    if ($('#' + id).length) {
      var box = $('#' + id);
      if (box.hasClass('on')) {
        box.removeClass('on');
        return;
      }
    } else {
      var html = [
        '<div id="' + id + '" class="article-share-box">',
        '<input class="article-share-input" value="' + url + '">',
        '<div class="article-share-links">',
        '<a href="http://connect.qq.com/widget/shareqq/index.html?url=' + encodedUrl + '&title=' + encodeURIComponent(title) + '" class="article-share-qq" target="_blank" title="qq"></a>',
        '<a href="http://service.weibo.com/share/share.php?title=' + encodedUrl + '" class="article-share-weibo" target="_blank" title="weibo"></a>',
        '<a href="https://www.linkedin.com/shareArticle?mini=true&url=' + encodedUrl + '" class="article-share-linkedin" target="_blank" title="LinkedIn"></a>',
        '<a href="https://twitter.com/intent/tweet?text=' + encodeURIComponent(title) + '&url=' + encodedUrl + '" class="article-share-twitter" target="_blank" title="Twitter"></a>',
        '</div>',
        '</div>'
      ].join('');
      var box = $(html);
      $('body').append(box);
    }
    $('.article-share-box.on').hide();
    box.css({
      top: offset.top + 25,
      left: offset.left
    }).addClass('on');
  }).on('click', '.article-share-box', function (e) {
    e.stopPropagation();
  }).on('click', '.article-share-box-input', function () {
    $(this).select();
  }).on('click', '.article-share-box-link', function (e) {
    e.preventDefault();
    e.stopPropagation();
    window.open(this.href, 'article-share-box-window-' + Date.now(), 'width=500,height=450');
  });

  // Caption
  $(window).on("load", function () {
    $('.article-entry').each(function (i) {
      $(this).find('img').each(function () {
        if ($(this).parent().hasClass('fancybox') || $(this).parent().is('a') ||
          $(this).hasClass('vemoji')) return;
        var alt = this.alt;
        $(this).wrap('<a href="' + this.src + '" data-fancybox=\"gallery\" data-caption="' + alt + '"></a>')
      });
      $(this).find('.fancybox').each(function () {
        $(this).attr('rel', 'article' + i);
      });
    });
    if ($.fancybox) {
      $('.fancybox').fancybox();
    }
  })

  // Mobile nav
  var $container = $('#container'),
    isMobileNavAnim = false,
    mobileNavAnimDuration = 200;
  var startMobileNavAnim = function () {
    isMobileNavAnim = true;
  };
  var stopMobileNavAnim = function () {
    setTimeout(function () {
      isMobileNavAnim = false;
    }, mobileNavAnimDuration);
  }
  $('#main-nav-toggle').on('click', function () {
    if (isMobileNavAnim) return;
    startMobileNavAnim();
    $container.toggleClass('mobile-nav-on');
    stopMobileNavAnim();
  });
  $('#wrap').on('click', function () {
    if (isMobileNavAnim || !$container.hasClass('mobile-nav-on')) return;
    $container.removeClass('mobile-nav-on');
  });
})(jQuery);

//scroll
$(window).scroll(function () {
  let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  if (scrollTop > 1000) {
    $("#go-page-front").css({ display: "block" })
  }
  else {
    $("#go-page-front").css({ display: "none" })
  }
});
$("#go-page-front").click(function () {
  $("html,body").animate({ scrollTop: "0px" }, 500);
})

//oneword
function refresh() {
  fetch('https://v1.hitokoto.cn/?c=a&c=b&c=d&c=i&c=k&min_length=0&max_length=30')
    .then(response => response.json())
    .then(data => {
      const hitokoto = document.getElementById('hitokoto')
      const from = document.getElementById('from-work')
      hitokoto.innerText = data.hitokoto
      from.innerText = data.from
      sessionStorage.setItem("word", hitokoto.innerText);
      sessionStorage.setItem("work", from.innerText);
    })
    .catch(console.error)
};
if (sessionStorage.getItem("word") === null || sessionStorage.getItem("word") === 'undefined') {
  refresh();
  document.getElementById('hitokoto').innerText = sessionStorage.getItem("word");
  document.getElementById('from-work').innerText = sessionStorage.getItem("work");
}