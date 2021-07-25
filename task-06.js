const numbers = [];
let total = 0;
let input = 1;

// for(let i = 1; input; i+=1){
while (true){
    input = prompt('Введи число'); 
    if(input===null){ 
        break;
    }
    input = Number(input);
    if (!isNaN(parseFloat(input)) && isFinite(input)){
        numbers.push(input);
        if(numbers.length>0){
            total +=input; 
        }     
    }
    else{
        alert('Было введено не число, попробуйте еще раз');
        // input = 1;
    }
}
console.log(`Общая сумма чисел равна ${total}`);
console.log(numbers);



// let input = prompt('Введи число');
// const numbers = [];
// let total = 0;

// for(let i = 0; input; i+=1){
//     numbers.push(input);
//     if(numbers.length>0){
//         total +=Number(input)
//         input = prompt('Введи число');  
//     }
// }
// console.log(`Общая сумма чисел равна ${total}`);
// console.log(numbers);