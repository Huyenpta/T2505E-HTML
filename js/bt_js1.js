//Tạo một số ngẫu nhiên từ 0->99 (<100)
//Cho người chơi nhập số dự đoán của mình
//và nhập số tiền muốn đầu tư -> lợi nhuận x70
//đối chiếu và thông báo kết quả trúng thưởng hay không

var r= Math.random()*100;
r=parseInt(r);
console.log(r);

var n=prompt("Nhập số dự đoán:");
n=parseInt(n);
var t=prompt("Nhập số tiền muốn đầu tư:");
t=parseFloat(t);


if(n===r){
    t=t*70;
    alert("Chúc mừng bạn trúng thưởng, lợi nhuận của bạn là: " +t);
} else{
    alert("Rất tiếc, hẹn bạn lần sau!")
}
