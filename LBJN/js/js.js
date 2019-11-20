$('.carousel').carousel({
  interval: 0
})


// 导航------------------
$(function () {
  var _this1 = null;
  $('.nav-list>li').hover(function () {
    _this1 = $(this);
    _this1.find('.second-nav').show();
    var _this2 = null;
    _this1.find('.second-nav').find('li').hover(function () {
      _this2 = $(this);
      _this2.find('.third-nav').show();
      _this2.find('.third-nav').hover(function () {
        $(this).show();
      }, function () {
        $(this).hide();
      });
    }, function () {
      _this2.find('.third-nav').hide();
    });
  }, function () {
    _this1.find('.second-nav').hide();
  });
});
// 返回顶部
var r = $('.return');
if (r)
  $(window).scroll(function () { if ($(window).scrollTop() >= 500) r.fadeIn('slow'); else r.fadeOut('slow'); });
//end
// 窗口
let blocks = [
  {
    id: "content1",
    aniClass: "yundong"
  },
  {
    id: "content2",
    aniClass: "yundong"
  },
  {
    id: "content3",
    aniClass: "yundong"
  },
  {
    id: "content4",
    aniClass: "yundong"
  },
  {
    id: "content5",
    aniClass: "yundong"
  }



];

let getId = function (id) {
  return document.getElementById(id);
};

//判断标签是否进入到窗口：
let isInWin = function (id) {
  let doc = document.documentElement;
  let tag = getId(id);
  if (tag.offsetTop - doc.scrollTop <= doc.clientHeight - doc.clientHeight / 2 && tag.offsetTop - doc.scrollTop >= 0) {
    console.info(id + " is in win");
    return true;
  }
  return false;
};

//创建板块添加动画效果函数。
let ScrollFun = {
  c1Fun: function () {
    let id = blocks[0].id;
    let cName = blocks[0].aniClass;
    if (isInWin(id)) {
      // 动画          
      getId(id).classList.add(cName);
      console.info(getId(id).className);
      // 动画执行完毕，删除该方法，防止重复执行。
      delete ScrollFun.c1Fun;
    }
  },
  c2Fun: function () {
    let id = blocks[1].id;
    let cName = blocks[1].aniClass;
    if (isInWin(id)) {
      getId(id).classList.add(cName);
      delete ScrollFun.c2Fun;
    }
  },
  c3Fun: function () {
    let id = blocks[2].id;
    let cName = blocks[2].aniClass;
    if (isInWin(id)) {

      getId(id).classList.add(cName);
      delete ScrollFun.c3Fun;
    }
  },
  c4Fun: function () {
    let id = blocks[3].id;
    let cName = blocks[3].aniClass;
    if (isInWin(id)) {

      getId(id).classList.add(cName);
      delete ScrollFun.c4Fun;
    }
  },
  c5Fun: function () {
    let id = blocks[4].id;
    let cName = blocks[4].aniClass;
    if (isInWin(id)) {

      getId(id).classList.add(cName);
      delete ScrollFun.c5Fun;
    }
  }
};

//滚动事件
let ScrollMain = function () {
  for (let funName in ScrollFun) {
    ScrollFun[funName]();
  }
};
// 初始执行一次。
ScrollMain();
window.addEventListener("scroll", ScrollMain);