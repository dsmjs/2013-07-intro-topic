
function func1(arg1){
    log('func1', this.amt + arg1);
}

var tmpFunc1 = func1.bind({amt: 1});
tmpFunc1(1); // func1

function func2(arg1, arg2){
    log('func2', this.amt + arg1 + arg2);
}

var tmpFunc2 = func2.bind({amt: 1});
tmpFunc2(1, 1); // func2

function func3(arg1, arg2){
    log('func3', this.amt + arg1 + arg2);
}

var tmpFunc3 = func3.bind({amt: 1}, 2);
tmpFunc3(1); // func3
