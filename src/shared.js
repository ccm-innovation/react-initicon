function getBackgroundColor(props) {
  let {seed, saturation, brightness, color} = props
  if (color) return color
  var hue = Math.sin(seed)
  hue = hue < 0 ? -hue : hue
  hue = Math.round(hue * 359) + 1
  return "hsl(" + hue + "," + saturation + "," + brightness + ")"
}

function getFontSize(props) {
  let {single} = props
  return single ? (props.size)/1.7 : (props.size-5)/2
}

function getInitials(props) {
  let {text, single} = props
  if (text !== null && typeof text === 'object') {
    return text;
  } else if (text.indexOf(" ") > 0 && !single) {
    return text.split(" ")[0].charAt(0) + text.split(" ")[1].charAt(0)
  } else {
    return text.charAt(0)
  }
}

var defaultProps = {
  size: 75,
  saturation: "80%",
  brightness: "40%",
  color: false,
  single: false
}

if (typeof exports != 'undefined') {
  exports.getBackgroundColor = getBackgroundColor;
  exports.getFontSize = getFontSize;
  exports.getInitials = getInitials;
  exports.defaultProps = defaultProps;
}
