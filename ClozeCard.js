

var closer = function(fulltext,cloze){
this.fulltext = fulltext;
this.cloze = cloze;
this.partial = fulltext.replace(cloze, "_".repeat(cloze.length))
};

module.exports = closer;


