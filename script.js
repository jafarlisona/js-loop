// 1.prompt ilə daxil olunan ədədin , 2-nin quvveti  olub olmadigini tapan alqoritm yazin????
// let root = +prompt("Enter the number");
// if (Math.log2(root) % 1 === 0) {
//   alert(`${root} - 2^${Math.log2(root)}.Duzdur`);
// } else {
//   alert(`${root} - 2nin quvveti deyil`);
// }
// 2.Göndərilmiş 2 ədəddən 1-cisini 2-cisinin qüvvətinə yüksəldən alqoritm yazin
// (example: 3 ve 5 ededleri gonderilir , 5 ustu 3 olur oda bize =>125 qayatarir.)
// let num1 = +prompt("Enter the first number");
// let num2 = +prompt("Enter the second number");
// let result= Math.pow(num2,num1);
// console.log(result);
//3.1- den 1000e qeder  ededler icerisinde  reqemleri eyni olan ededlerin cemin tapin. example(11 ,222,333 ve  s)
// let sum = 0;
// let sumTwoDigit = 0;
// let sumThreeDigit = 0;
// for (let i = 0; i < 1000; i++) {
//   if (i % 11 === 0 && i < 100) {
//     sumTwoDigit += i;
//   } else if (i % 111 === 0 && i > 100 && i < 1000) {
//     sumThreeDigit += i;
//   }
// }
// sum=sumThreeDigit+sumTwoDigit;
// console.log(sumTwoDigit);
// console.log(sumThreeDigit);
// console.log(sum);
// 4.Verilmis array-de cut ededlerin en boyuyunu tapan alqoritm yazin.
// const arr=[2,43,56,21,47,87,12,8,13,30];
// let largest=arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i]%2===0 && arr[i]>largest) {
//       largest=arr[i]
//   }
// }
// console.log(largest);
// 5.Verilmis array-de tek ededlerin en kiciyinin index-ni tapan alqoritm yazin.
// const arr = [7, 43, 56, 21, 47, 87, 12, 3, 13, 30];
// let smallest = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i]%2!==0 && arr[i] < smallest) {
//     smallest = arr[i];
//   }
// }
// console.log(arr.indexOf(smallest));
// 6.Verilmis array-de  sade ve murekkeb ededlerin sayini tapan alqoritm yazin.????yaza bilmedim(((
// 7.Verilmis array-de minimum ededle maksimum ededin cemini array-in ededi ortasindan boyuk olub olmadigini yoxlayin.
// let arr = [2, 45, 32, 38, 12, 34, 9, 35, 23, 4, 1, 14];
// let largest = arr[0];
// let lowest = arr[0];
// let sumArr = 0;
// let sum = 0;
// let count = arr.length;
// for (let i = 0; i < count; i++) {
//   sumArr += arr[i];
//   if (arr[i] > largest) {
//     largest = arr[i];
//   } else if (arr[i] < lowest) {
//     lowest = arr[i];
//   }
// }
// let mediumArr = sumArr / count;
// sum = largest + lowest;
// console.log(sum + "- sum of largest and lowest number of array");
// if (sum > mediumArr) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// 8.Verilmish ededin en boyuk reqemini tapan alqoritm yazin. example: 709 en boyuk 9-dir, 37 en boyuk 7-dir.
// let num = "2384571";
// let largest = num[0];
// for (let i = 0; i < num.length; i++) {
//   if (num[i] > largest) {
//     largest = num[i];
//   }
// }
// console.log(largest);
