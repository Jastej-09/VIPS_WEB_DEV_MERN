// function firstfun(){
//     var a=20;
//     var b=30;
//     console.log("HELLO I AM FIRST FUNCTION");
//     function secFun(){
//         var c=50;
//         console.log("HELLO I AM SECOND FUNCTION");
//         function thirdfun(){
//             var d= 80;
//                 console.log("HELLO I AM THIRD FUNCTION");

//             return a+b+c+d;

//         }
//        return thirdfun();
//     }return secFun();
// }
// console.log(firstfun());
// let count=0;

//     const intervalID = setInterval(()=>{
//         console.log(count);
//         count++;
//         if(count==5){
//     clearInterval(intervalID);
//         }
//     },2000);

// another way to do the same thing
// for (var a=0;a<5;a++){
//     function close(i){
//         setTimeout(()=>{
//         console.log(i);
//     },2000);
//     }
//     close(a);
//}

// console.log("CLASS START");
// var a=200;
// console.log(a);
// functionB();
// function functionB(){
//     console.log("THIS IS FUNCTION B");

// }
// var functionB= () =>{
//     var x=100;
//     console.log("THE OUTPUT IS : ",x);
// }

// var functionB= function(){
//     console.log("THIS IS FUNCTION B");
//  }


//first class function

// function outerfunction(arg1){
//     console.log("This is outer function")
// }

// function outerfunction(collegename){
//     console.log("THIS IS MY COLLEGE DETAILS");
//     return function xyz(){
//         console.log("THE COLLEGE IS :",collegename);
//         return 1;
//     }
// }
// var mydata = outerfunction("VIPS");
// console.log(mydata());

