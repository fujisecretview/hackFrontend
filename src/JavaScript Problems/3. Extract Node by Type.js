// Extract Nodes by Type
// YandexSberAvito
// Given a tree structure of the following format:

// const tree = {
//         type: "nested",
//         children: [
//           { type: "added", value: 42 },
//           {
//             type: "nested",
//             children: [{ type: "added", value: 43 }],
//           },
//           { type: "added", value: 44 },
//         ],
//       };

// Write a function getNodes(tree, type) that returns all matching nodes in traversal order.
// The tree may have any nesting depth.
// Examples:
// Input 1: { "type": "nested", "children": [ { "type": "nested", "children": [ { "type": "added", "value": 50 } ] }, { "type": "added", "value": 51 } ] }
// Output 1: [ { "type": "added", "value": 50 }, { "type": "added", "value": 51 } ]
// Input 2: { "type": "nested", "children": [ { "type": "nested", "children": [ { "type": "nested", "children": [ { "type": "added", "value": 60 } ] } ] } ] }
// Output 2: [ { "type": "added", "value": 60 } ]
// Input 3: { "type": "nested", "children": [ { "type": "added", "value": 42 }, { "type": "nested", "children": [ { "type": "added", "value": 43 } ] }, { "type": "added", "value": 44 } ] }
// Output 3: [ { "type": "added", "value": 42 }, { "type": "added", "value": 43 }, { "type": "added", "value": 44 } ]

  function getTypeTree(tree) {
  const result = [];
  const stack = [tree];

  while (stack.length) {
    const node = stack.pop();

    if(node.type === "added") {
      result.push(node);
    }

    if (node.children) {
      for (let i = node.children.length - 1; i >= 0; i--) {
        stack.push(node.children[i]);
      }
    }
  }

  return result;
}
