module.exports = function typeCheck (variable, expectType) {
    let variableType = typeof variable;
    if(variable === null) {
        if(variableType === expectType) return true;
        else return false;
    } else {
        if(variableType !== 'object') {
            if(variableType === expectType) return true;
            else return false;
        } else {
            if(eval(`variable instanceof ${expectType}`)) return true;
            else return false;
        }
    }
}
