// setTimeout(function(){
//     alert("Ping...");
// }, 5000); // sẽ thực hiện sau 5000 miliseconds mục đích đặt hẹn công việc gì đấy bao gồm hàm và thời gian

// setInterval(function(){
//     alert("Pong...");
// }, 3000);// Hẹn giờ và có lặp lại
// var m=10;
// var s=0;
// var time = setInterval(function(){
//     console.log(m+":"+s);
//     s--;
//     if(s<0){
//         m--;
//         s=59;
//     }
//     if(m<0){
//         clearInterval(time);
//     }
// }, 10);
//Bất đồng bộ điểm khó nhất của JS, do đợi 5s nên Task 2 sẽ ở cuối cùng sau khi chạy task 1 và task 3
// alert("Task 1");
// setTimeout(function () {
//     alert("Task 2");
// }, 5000);
// alert("Task 3");
