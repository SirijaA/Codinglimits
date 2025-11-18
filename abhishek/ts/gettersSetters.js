var User = /** @class */ (function () {
    function User(name, email) {
        this.name = name;
        this.email = email;
        this._courseCount = 1;
        this.city = 'jaipur';
    }
    Object.defineProperty(User.prototype, "getAppleElement", {
        get: function () {
            return "apple".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "courseCount", {
        get: function () {
            return this._courseCount;
        },
        set: function (courseNum) {
            if (courseNum <= 1) {
                throw new Error('course counts hould be more than 1');
            }
            this._courseCount = courseNum;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var abhi = new User('abhi', '@apple.com');
console.log(abhi.getAppleElement);
console.log(abhi.courseCount);
console.log(abhi.courseCount = 20);
console.log(abhi.courseCount);
