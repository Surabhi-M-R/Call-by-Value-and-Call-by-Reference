// pass by value
// let a=10;
// const modifyValue=(x)=>(x=20);
// console.log(modifyValue(a));
// console.log(a);

// let obj={
//     id:5,
//     name:"hacker",
// };
// let obj1=obj;
// console.log(obj1);
// obj1.name="coder";
// console.log(obj1);
// console.log(" original::",obj);

//obect.assign() is used to copy properties from one or more source objects to a target object.

// let obj={ id:5,name:"hacker"};
// let newObj=Object.assign({},obj);
// newObj.name="coder";
// console.log(newObj);
// console.log(obj);

// comparision by reference
// const obj1={ sName:" sush"};
// const obj2={ sName:" sush"};
// const isEqual = obj1==obj2 ? true: false;
// console.log(isEqual);

//converted to JSON and viceversa

// let student={
//     id:1,
//     sName:29,
//     isStudent:false,
//     greet:function(){
//         console.log(`hey my id is ${student.id} and my name is ${student.sName}`);
//     },
// };
// console.log(student);
// let jsonData=JSON.stringify(student);
// console.log(jsonData);
// let parseData=JSON.parse(jsonData);
// console.log(parseData);

// this key word
//  in an object this refers to global object
// alone,this refers to global object
// in a function this refers to global object
// in a function in strict mode this is undefined
// in a event , this refers to the element that recieved the event
// methods like call(),apply(),and bind() can refers this any object


//* regular function Expression
// const obj={
//     sName: "  coder",
//     greet:function(){
//         console.log(this);
//     },
// };
// obj.greet();

// const product={
//     id:1,
//     pName:"laptop",
//     category:" computers",
//     brand:" example brand",
//     price:999.99,
//     stock:50,
//     image:" image",
//};
// // to obtain keys
// let key=Object.keys(product);
// console.log(key);
// to obtain values
// let value=Object.values(product);
// console.log(value);
// to obtain values in the form of array
// let entries=Object.entries(product);
// console.log(entries);
// object.hasOwnProperty() : returns a boolean indicating whether the object has the specified property as an own property
// console.log(product.hasOwnProperty("pName"));
// console.log(product.hasOwnProperty("cost"));
// Object.assign(): Copies the values of all enumerable own properties from one or more source objects to a targeted object and also helps in pass by reference
// const target={a:1,b:2};
// const source={b:3,d:4};
// const mergedObjects=Object.assign(target,source);
// console.log(mergedObjects);

// Object.freeze(): Freezes an object,preventing new properties from being added to it and existing 
// Object.freeze(product);
// product.id="556";
// console.log(product);
//===========================================================================================================================================
// interView question  1) given an array object representing  a student,write a function to add a new subject with its corresponding grade to the student's record. also check if the grades property is present or not
//============================================================================================================================================
let student={
    name:" sush",
    age:20,
    grades:{
        math:90,
        science:95,
        history:99,
    },
};
const addSubjectGrade=(student,subject,marks)=>{
    if(!student.grades){
        student.grades={};
    }
    return (student.grades[subject]=marks);
}

addSubjectGrade(student,"computer",92);
console.log(student);
