var $html = $('html');
var $body = $('body');

$body.on('keydown', function () {
  var $ball = $('<div>');

  $ball.addClass('ball');
  $body.append($ball);
  $ball.css('left', Math.random() * 1400);
  $ball.css('top', Math.random() * 1400);
});
