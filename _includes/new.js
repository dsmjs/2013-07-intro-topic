
function func1(){
    this.val = this.val + 1 || 1;
    return this;
}

log('func1-1', func1().val); // func1-1
log('func1-2', func1().val); // func1-2

function func2(){
    this.val = this.val + 1 || 1;
}

log('func2-1', new func2().val); // func2-1
log('func2-2', new func2().val); // func2-2

