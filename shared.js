// reuse main methods for Native
exports.getBackgroundColor = function(seed, saturation, brightness) {
  var hue = Math.sin(seed);
  hue = hue < 0 ? -hue : hue;
  hue = Math.round(hue * 359) + 1;
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
  saturation: "80%",
  brightness: "40%",
  color: false,
  single: false
}
