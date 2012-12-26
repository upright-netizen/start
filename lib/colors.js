/*jshint laxcomma: true, asi: true */

var
  colors = {

    red          : "\033[0;31m",
    lightRed     : "\033[1;31m",
    green        : "\033[0;32m",
    lightGreen   : "\033[1;32m",
    yellow       : "\033[0;33m",
    lightYellow  : "\033[1;33m",
    blue         : "\033[0;34m",
    lightBlue    : "\033[1;34m",
    magenta      : "\033[0;35m",
    lightMagenta : "\033[1;35m",
    cyan         : "\033[0;36m",
    lightCyan    : "\033[1;36m",
    white        : "\033[0;37",
    lightWhite   : "\033[1;37",
    stop         : "\033[0m"
  };

function c (color) {
  return function (string) {
    return colors[color] + string + colors.stop + " ";
  }
}

module.exports = {
  red             : c("red"),
  lightRed        : c("lightRed"),
  green           : c("green"),
  lightGreen      : c('lightGreen'),
  yellow          : c("yellow"),
  lightYellow     : c("lightYellow"),
  blue            : c("blue"),
  lightBlue       : c("lightBlue"),
  magenta         : c("magenta"),
  lightMagenta    : c("lightMagenta"),
  cyan            : c("cyan"),
  lightCyan       : c("lightCyan"),
  white           : c("white"),
  lightWhite      : c("lightWhite")
}