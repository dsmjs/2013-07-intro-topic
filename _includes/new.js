
function func1(){
    if (!this.val){
        this.val = 1;
    }
    else {
        this.val++;
    }
    return this;
}

var x1 = func1();
console.log(x1.val);
var x2 = func1();
console.log(x2.val);
var y1 = new func1();
console.log(y1.val);
var y2 = new func1();
console.log(y2.val);


