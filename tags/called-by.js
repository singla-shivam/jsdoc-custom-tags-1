
const ulBuilder = require('./../utils/ulBuilder')
exports.name = 'calledBy';
exports.options = {
  canHaveType: true,
  mustNotHaveDescription: true,
  mustHaveValue: true,
  canHaveName: true,
  onTagged: function(doclet, tag) {
    if(!doclet.callers){
      doclet.callers = []
    }
    doclet.callers.push({
      'links': tag.value.type ? tag.value.type.names : [],
      'repository': tag.value.name ? tag.value.name : '',
    })
  }
}
exports.newDocletHandler = function(e) {
  const callers = e.doclet.callers;
  if(callers){
    var list = ulBuilder.build(callers)
    e.doclet.description =  `
                            ${e.doclet.description}
                            <h6>Called By: </h6>
                            ${list}
                            `
  }
}