var $body = $('body');

var $btnShowHide = $('.btn-show-hide');
var $box = $('.box');

var $btnMove = $('.btn-move');
var $diamond = $('.diamond');

var $btnColEx = $('.btn-collapse-expand');
var $panel = $('.panel');

var $btnBounce = $('.btn-bounce');
var $circle = $('.circle');

var $btnAppend = $('.btn-append');
var $list = $('.list');

$btnShowHide.on('click', function () {
  $box.toggleClass('showbox');
});

$btnMove.on('click', function () {
  $diamond.toggleClass('movein');
});

$btnColEx.on('click', function () {
  $panel.toggleClass('collapse');
});

$btnBounce.on('click', function () {
  $circle.addClass('bounce');
});

$btnBounce.on('animationend', function () {
  $circle.removeClass('bounce');
});

$btnAppend.on('click', function () {
  $list.append('<li>New List Item</li>');
});
