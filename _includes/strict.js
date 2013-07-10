
function notstrict() {
    console.log(this === window);
    console.log(this);
}
notstrict();

function strict() {
    "use strict";
    console.log(this === window);
    console.log(this);
}
strict();

