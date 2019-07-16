exports.build = function (list) {
  const listEntries = []
  list.forEach(element => {
    listEntries.push(`<li><b>${element.repository}</b> ${links(element.links)}</li>`)
  });
  return  `
          <ul>
          ${listEntries.join(' ')}
          </ul>
          `
}
function links(l){
  let list = ''
  l.forEach(e => list += `<li><a>${e}</a></li>`)
  return `<ol>${list}</ol>`
}