
// global execution context

function func1(){
    // func1 execution context
}

// global execution context

function func2(){
    // func2 execution context
    function func3(){
        // func3 execution context
        function func4(){
            // func4 execution context
        }
        // func3 execution context
    }
    // func2 execution context
}
// global execution context
