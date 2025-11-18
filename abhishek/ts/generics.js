function A(val) {
    return val;
}
// function A<T>(val:T):string{
//     return 'hello'
// }
console.log(A([1, 2, 3, 4, 5]));
var Box = /** @class */ (function () {
    function Box(content) {
        this.content = content;
        this.content = content;
        console.log(content);
    }
    return Box;
}());
var abhi = new Box('hello');
