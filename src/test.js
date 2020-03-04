// for (var i = 0; i < 10; i++) {
//     setTimeout(function() {
//         console.log(i)
//     },0)
// }  //输出10个10

// for (let i = 0; i < 10; i++) {
//     setTimeout(function() {
//         console.log(i)
//     },0)
// }  //输出0~9

// let x = 9
// let y = 0
// console.log([x,y] = [y,x])
// console.log(x)
// console.log(y)

//对象结构例子
// {
//     let metaData = {
//         name: 'soft_1851',
//         info: [{
//             title: 'ES6',
//             desc: 'ES6学习'
//         }]
//     }

//     let {
//         name: myName,
//         info: [{ title: myTitle, desc: myDesc }]
//     } = metaData
//     console.log(myName,myTitle,myDesc)
// }

//ES5合并数组
// var a = [1,2,3]
// var b = [4,5,6]
// a = a.concat(b)
// console.log(a)
// console.log(b)

//ES6合并数组
// let arr1 = [1,2,3]
// let arr2 = [4,5,6]
// arr1 = [...arr1,...arr2]
// console.log(arr1)
// console.log(arr2)

//数组元素按条件过滤
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const result = arr.filter((v) => v > 5)
// console.log(result)