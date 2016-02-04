// reuse main methods for Native
exports.getBackgroundColor = function(seed, saturation, brightness) {
  var hue = Math.sin(seed);
  hue = hue - Math.floor(hue * (1 - 360)) + 1;
  if(hue < 0) {
    hue = -hue;
  }
  hue = Math.round(hue);
  return "hsl(" + hue + "," + saturation + "," + brightness + ")";
}

exports.getInitials = function(text, single) {
  if (text.indexOf(" ") > 0 && !single) {
    return text.split(" ")[0].charAt(0) + text.split(" ")[1].charAt(0);
  } else {
    return text.charAt(0);
  }
}

exports.defaultProps = {
  size: 75,
  saturation: "50%",
  brightness: "50%",
  color: false,
  single: false
}
