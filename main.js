//1.抓元件 文字內容改掉
// let 宣告變數 可以變化
// const 宣告變數 不可以變化

// let resultP = document.getElementById("result");
// const resultP = document.getElementById("result");
// console.log(document);
const myForm = document.getElementById("myFrom");
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultP = document.getElementById("result");
//const 自己命名 = document.getElementByID("網頁值");

console.log(myForm);
console.log(num1Input);
console.log(num2Input);
console.log(resultP);

// num1Input.value = "55688111";
// num2Input.value = "55688222";

myForm.addEventListener('submit', function(e) {
    e.preventDefault();//submit不送出表單
    console.log(e);
    console.log(num1Input.value);
    console.log(num2Input.value);
    let num1 = parseInt(num1Input.value);
    let num2 = parseInt(num2Input.value);
    let sum = num1 + num2;
    console.log(`${num1} + ${num2} = ${sum}`);
    // `分號ese下面數字1左邊

    
})



//2.改元件 內容文字
resultP.innerText = "hello first friend";

// console.log(window);