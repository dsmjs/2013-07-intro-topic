
function notstrict() {
    log('not1', this === window); // not1
    log('not2', this); // not2
}
notstrict();

function strict() {
    "use strict";
    log('strict1', this === window); // strict1
    log('strict2', this); // strict2
}
strict();

