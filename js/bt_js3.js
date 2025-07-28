//Bài 2: Số bí mật từ 1 đến 20 🔒
//Hệ thống chọn một số ngẫu nhiên từ 1 đến 20. Người chơi đoán đến khi đúng thì hiển thị số lần đoán.
//Yêu cầu:
//Dùng vòng lặp while
//Đếm số lần đoán
var r=(Math.random()*20);
r=parseInt(r);
console.log(r);
var sl_doan=0;
for (var i=1; i<20;i++){
    if(s!=r){
        var s=prompt("Người chơi nhập số dự đoán:");
        s=parseInt(s);
        sl_doan=i;
    }
}
alert("Số lần đoán là: " +sl_doan);

//Bài 3: Mở hòm kho báu 💰
//Có 3 hòm (1, 2, 3). Chỉ 1 hòm có vàng. Đoán đúng thì thưởng 500k.
//Yêu cầu:
//Người chơi chọn 1 trong 3 hòm
//Random 1 hòm chứa vàng
//So sánh và báo kết quả

var hv=(Math.random()*3)+1;
hv=parseInt(hv);
console.log(hv);
var c=prompt("Người dùng chọn 1 trong 3 hòm:");
c=parseInt(c);
if(c===hv){
    alert("Bạn đã chọn đúng hòm chứa vàng, thưởng bạn 500k");
}else{
    alert("Bạn chưa chọn đúng, hom chứa vàng là hòm số: " +hv);
}

//Bài 4: Trắc nghiệm nhân số học 📘
//Máy chọn 2 số ngẫu nhiên từ 1–9 và hỏi phép nhân. Người chơi nhập đáp án.
//Yêu cầu:
//Hiển thị câu hỏi
//Nhận đáp án
//Đúng thì báo “Đúng!”, sai thì báo kết quả đúng