"use strict";
// function greeter(person){
//     return `hello, ${person}`;
// }
// let user = 'Jane'
// document.body.innerHTML = greeter(user);
/**
 * 类型注解
 */
//  function greeter(person: string){
//     return `hello, ${person}`;
// }
// // let user = 'Jane'
// let user = ['Jane', 'Tony']
// document.body.innerHTML = greeter(user);
/**
 * 接口
 */
// interface Person {
//     firstName: string;
//     lastName: string;
// }
// function greeter(person: Person){
//     return "Hello, " + person.firstName + " " + person.lastName;
// }
// let user = { firstName: "Jane", lastName: "User" };
// document.body.innerHTML = greeter(user);
/**
 * 类
 */
//在构造函数的参数上使用public等同于创建了同名的成员变量。
// class Student {
//     fullName: string;
//     constructor(public firstName: string, public middleInitial: string, public lastName: string) {
//         this.fullName = firstName + " " + middleInitial + " " + lastName;
//     }
// }
// interface Person {
//     firstName: string;
//     lastName: string;
// }
// function greeter(person : Person) {
//     return "Hello, " + person.firstName + " " + person.lastName;
// }
// let user = new Student("Jane", "M.", "User");
// //Student {firstName: "Jane", middleInitial: "M.", lastName: "User", fullName: "Jane M. User"}
// console.log(user)
// document.body.innerHTML = greeter(user);
var a;
a = 123;
a = 'helle22';
console.log(a);
