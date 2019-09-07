class Node {
    constructor(nodeName, parentName) {
        this.name = nodeName;
        this.parentName = parentName;
        this.parentNode = null;
        this.children = [];
        this.level = null;
        this.position = -1;
    }

    addChild(childNode) {
        this.children.push(childNode);
    }
}

function findNode(node, searchNodeName) {
    var frontier = [node];
    while (frontier.length > 0) {
        var currentNode = frontier.shift();
        if (currentNode.name === searchNodeName) {
            return currentNode;
        } else {
            frontier = frontier.concat(currentNode.children);
        }
    }
    return null;
}

function addNode(root, newNode) {
    var parent = findNode(root, newNode.parentName);
    if (parent === null) {
        console.log(`Unable to find parent ${newNode.parentName} for ${newNode.name}`);
        return null;
    }
    newNode.parentNode = parent;
    parent.addChild(newNode);
}

function printGraph(graph) {
    console.log(JSON.stringify(nodeToJson(graph)));
}

function nodeToJson(node) {
    return {"name": node.name,
            "parent": node.parentName,
            "children": getChildren(node)
           }
}

function getChildren(node) {
    var children = [];
    for (child of node.children) {
        children.push(nodeToJson(child));
    }
    return children;
}


// module.exports = {"Node": Node, "printGraph": printGraph, "addNode": addNode, "findNode": findNode};
exports.Node = Node;
exports.printGraph = printGraph;
exports.addNode = addNode;
exports.findNode = findNode;