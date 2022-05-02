const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node
{
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree
{
    constructor()
    {
        this.sroot = null;
    }

    root(){
        return this.sroot;
    }

    add(data)
    {
    var newNode = new Node(data);
    
    if(this.sroot === null)
        this.sroot = newNode;
    else
        this.insertNode(this.sroot, newNode);
    }

    insertNode(node, newNode)
    {
    if(newNode.data < node.data)
    {
        if(node.left === null)
            node.left = newNode;
        else
            this.insertNode(node.left, newNode);
    }
    else
    {
        if(node.right === null)
            node.right = newNode;
        else
            this.insertNode(node.right,newNode);
    }
    }

    find(data, node=this.sroot){
        if(data < node.data)
        {
            if(node.left === null)
                return null;
            else
                return this.find(data,node.left);
        }
        if(data > node.data)
        {
            if(node.right === null)
                return null;
            else
                return this.find(data,node.right);
        } 
        if (data==node.data) return node;
    }
    has(data, node=this.sroot){
        if (typeof node.data==='undefined') return false;
        if(data < node.data)
        {
            if(node.left === null )
                return false;
            else
                return this.has(data,node.left);
        }
        if(data > node.data)
        {
            if(node.right === null)
            return false;
            else
                return this.has(data,node.right);
        } 
        if (data==node.data) return true;
        
    }
findMinNode(node)
{
    if(node.left === null)
        return node;
    else
        return this.findMinNode(node.left);
}

    remove(data)
{
    this.sroot = this.removeNode(this.sroot, data);
}

removeNode(node, key)
{
    if(node === null)
        return null;
 
    else if(key < node.data)
    {
        node.left = this.removeNode(node.left, key);
        return node;
    }

    else if(key > node.data)
    {
        node.right = this.removeNode(node.right, key);
        return node;
    }
    else
    {
        if(node.left === null && node.right === null)
        {
            node = null;
            return node;
        }
 
        if(node.left === null)
        {
            node = node.right;
            return node;
        }
         
        else if(node.right === null)
        {
            node = node.left;
            return node;
        }
        
        let aux = this.findMinNode(node.right);
        node.data = aux.data;
 
        node.right = this.removeNode(node.right, aux.data);
        return node;
    }
 
}
    min(){
        let node=this.sroot;
        while (node.left!==null) node=node.left;
        return node.data
    }
    max(){
        let node=this.sroot;
        while (node.right!==null) node=node.right;
        return node.data
    }

    

}

module.exports = {
  BinarySearchTree
};