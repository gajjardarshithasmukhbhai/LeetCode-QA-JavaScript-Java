var MyQueue = function() {
    this.input = [];
    this.output = [];    
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.input.push(x);    
};

/**
 * @return {number}
 */
// amortized ---> O(1);

MyQueue.prototype.pop = function() {
    if(this.output.length) {
        return this.output.pop();
    }
    else {
        while(this.input.length) {
            this.output.push(this.input.pop());
        }
        return this.output.pop();
    }
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    if(!this.output.length) {
        while(this.input.length) {
            this.output.push(this.input.pop());
        }
    }
    return this.output[this.output.length-1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
   return this.input.length === 0 && this.output.length === 0;  
};
