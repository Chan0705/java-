function sum(x, y, callback) {
 return callback(x + y);
}

const Plus = (x) => {
    return x
};
// callback(x+y)에서 파라미터가 x+y='z' 라는 한개의 인자기 때문에 인자 1개로 설정해야됨.

console.log(sum(1, 2, Plus))

