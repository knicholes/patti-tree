(function(){
    var fs = require('fs');
    var NodeUtils = require('./Node');
    var contents = JSON.parse(fs.readFileSync("hierarchy.json"));
    var root = new NodeUtils.Node("root", "null");
    for (line of contents) {
        var newNode = new NodeUtils.Node(line["name"], line["parent"]);
        NodeUtils.addNode(root, newNode);
    }
    NodeUtils.printGraph(root);
})();

