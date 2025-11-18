var user = {
    dbId: 22,
    email: 'abhi@gmail.com',
    userId: 10403,
    startTrail: function () {
        return 'hello';
    },
    getCoupon: function (name, off) {
        return off;
    }
};
console.log(user.getCoupon('abhi', 20));
