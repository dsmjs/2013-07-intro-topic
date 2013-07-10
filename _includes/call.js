
function func1(){
    log('func1', "inside func1");
}
func1.call(); // func1

function func2(arg1){
    log('func2', arg1);
}
func2.call({}, 'X'); // func2

function func3(arg1){
    log('func3', this.amt + arg1);
}
func3.call({amt: 1}, 1); // func3

function func4(arg1, arg2){
    log('func4', this.amt + arg1 + arg2);
}
func4.call({amt: 1}, 1, 1); // func4

