var Constants;
(function (Constants) {
    Constants["name"] = "abhi";
    Constants[Constants["rollno"] = 123] = "rollno";
    Constants[Constants["isStudying"] = 1] = "isStudying";
})(Constants || (Constants = {}));
var name1 = Constants.name;
console.log(name1);
