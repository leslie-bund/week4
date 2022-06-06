import FileTree from './fileTree';

export function createFileTree(input) {
  const fileTree = new FileTree();

  const rootDirNode = input.find(element => !element.parentId);
  input.splice(input.indexOf(rootDirNode), 1);
  input.sort((a, b) => a.id - b.id);
  // input = [rootDirNode, ...input];
  input.unshift(rootDirNode);
  for (const inputNode of input) {
    const parentNode = inputNode.parentId
      ? fileTree.findNodeById(inputNode.parentId)
      : null;

    fileTree.createNode(
      inputNode.id,
      inputNode.name,
      inputNode.type,
      parentNode
    );
  }

  return fileTree;
}