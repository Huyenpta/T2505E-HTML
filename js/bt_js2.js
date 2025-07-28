//Người chơi đoán số xúc xắc từ 1 đến 6. Nếu đúng, họ được nhân đôi tiền. Sai thì mất hết.
//Yêu cầu:
//Nhập số dự đoán (từ 1–6)
//Nhập số tiền cược
//Random số từ 1–6
//Nếu đúng → tiền x2
//Nếu sai → thua
var r=Math.random()*6;
r=parseInt(r);
console.log("Số ngẫu nhiên là: ", r);
var so_dd=prompt("Nhập số dự đoán:");
so_dd=parseInt(so_dd);
var tien=prompt("Nhập số tiền cược");
tien=parseFloat(tien);
if(so_dd===r){
    tien=tien*2;
    alert("Chúc mừng bạn đã thắng, số tiền bạn nhận được là: " +tien);
}else{
    alert("Rất tiếc, bạn đã thua");
}