class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BTS {
  constructor(value) {
    this.root = new Node(value)
    this.count = 0
  }
 size() {
  this.count
 }

 insert() {
  this.count++
  let newNode = new Node(value)
  const searchTree = (node) => {
    if(value < node.value){
      if (!node.left) {
        node.left = newNode
      }else{
        searchTree(node.left)
      }
    }
    else if (value > node.value){
      if(!node.right){
        node.right = newNode
      }else{
        searchTree(node.right)
      }
    }
  }
  searchTree(this.root.value)
 }


 min() {
  let currentNode = this.root

  while (currentNode.left) {
    currentNode = currentNode.left
  }
  return currentNode.value
 }

 max() {
  let currentNode = this.root

  while (currentNode.right){
    currentNode = currentNode.right
  }
  return currentNode.value
 }

 contains(value) {
   let currentNode = this.root

   while(currentNode){
    if (value === currentNode.value){
      return true
    }
    if (vallue < currentNode.value){
      currentNode = currentNode.left
    }else{
      currentNode = currentNode.right
    }
   }
   return false
 }




}

