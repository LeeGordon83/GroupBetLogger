async function convertDatetoString (date, region) {
  var d = new Date(date)

  var month = '' + (d.getMonth() + 1)
  var day = '' + d.getDate()
  var year = d.getFullYear()

  if (month.length < 2) { month = '0' + month }
  if (day.length < 2) { day = '0' + day }
  if (region === 'UK') {
    return [day, month, year].join('/')
  } else {
    return [year, month, day].join('-')
  }
}
module.exports = {
  convertDatetoString
}
