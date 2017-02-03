const Node = require('./node');

class LinkedList {    
    constructor() {
		this.length = 0;
    }

    append(data) {
    	if(data){
    		var node = new Node(data);
	    	if(this.length == 0){
	    		this._head = this._tail = node;
			}
			else{
				this._tail.next = node;
	            node.prev = this._tail;
	            this._tail = node;
			}
			this.length++;
    		return this;
    	}    	
    }

    head() {
    	if(this._head !== null)
    		return this._head.data;
    	else
    		return this._head;
    }

    tail() {
    	if(this._tail !== null)
    		return this._tail.data;
    	else
    		return this._tail;
    }

    at(index) {
		var element = this._head;
		var i=0;
		while(i != index){
			element = element.next;
			i++;
		}
		return element.data;
    }

    insertAt(index, data) {
    	var element = this._head;
    	var length = this.length;
    	this.length = 0;
    	delete(this._head,this._tail);
    	for (var i = 0; i < length; i++){
    		if(i == index)
    			this.append(data);
			else
    			this.append(element.data);
    		element = element.data;
    	}
    	return this;
    }

    isEmpty() {
    	if(this.length == 0)
    		return true;
    	else
    		return false;
    }

    clear() {
    	this.length = 0;
    	this._tail = this._head = null;
    	return this;
    }

    deleteAt(index) {
    	var element = this._head;
    	var length = this.length;
    	var i = this.length = 0;
    	delete(this._head,this._tail);
		while(i != length){
			if(i != index){
    			this.append(element.data);
    		}
    		element = element.next;
			i++;
		}
		return this; 			
    }

    reverse() {
    	var element = this._tail;
    	var length = this.length;
    	var i = this.length = 0;
    	delete(this._head,this._tail);
		while(i != length){
    		this.append(element.data);
    		element = element.prev;
			i++;
		}
		return this;			
    }

    indexOf(data) {
    	var element = this._head;
		var i=0;
		while(element !== null){
			if(data == element.data)
				return i;
			element = element.next;
			i++;
		}
		return -1;
    }
}

module.exports = LinkedList;