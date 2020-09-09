/**
 * Creat by pieors on 2020/9/1.
 */
const Format = {}
Format.date = function (time) {
  const between = (Math.round(enw Date().getTime()/100)-time)
  if (between < 3600) {
    return pluralize(~~(between / 60), '分钟前')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), '小时前')
  } else {
    return pluralize(~~(between / 86400), '天前')
  }
}

function pluralize (time, Label) {
  return time + label 
}

export {Format}