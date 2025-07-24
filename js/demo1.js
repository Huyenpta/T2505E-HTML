// Một số kiểu cần quan tâm gồm: null, number, chuỗi (string), boolean (True/False), array, function
// Kiểu dữ liệu nguyên thuỷ: null, number, chuỗi (string), boolean (True/False)
var x = 10; // không quan tâm kiểu dữ liệu
x = "T2505E";
var a = 10;
var b = "20";// Nháy đơn hay nháy kép đều là chuỗi
var c = 'abcdef';

// n + n = n (n: số; s: chuỗi)
// n + s = s
// s + s = s
console.log(a+a); //20
console.log(a+b);//1020
console.log(b+a);//2010
console.log(b+c);//20abcdef
var t = false;

if (a>5){
    console.log("A");
} else if(a >= 10){
    console.log("B");
} else if(a > 15){
    console.log("C");
}else{
    console.log("D");
}

for(var i=0; i<10; i++){
    console.log("i="+i);
}

var arr = []; //Đây là một array, mảng rỗng, mảng trong js là một ô nhớ khi dùng bao nhiêu sẽ sử dụng bấy nhiêu rất linh động
//arr[0] = 9;
//arr[5] = 12;
//arr[2] = 182;
arr.push(9);//0 không cần quan tâm đến chỉ mục, sẽ lấy thằng cuối cùng + thêm 1
arr.push(12);//1
arr.push(182);//2
//arr.push("Hello");
//arr.push(true);
//arr.push([1,2,3,4,5]);//Khả năng của nó có thể ghi thế này, thích cho gì thì cho
for (var i=0;i<arr.length; i++){ //Duyệt từ 0 đến kích thước, duyệt một nửa thì dùng cái này
    console.log(arr[i]);
}
//Duyệt mảng --map
arr.map(e=>{//Lôi đến khi nào hết thôi không cần biết đến đó là phần tử thứ mấy, duyệt cho đến khi hết, ngôn ngữ linh động, cấp cao hơn
    console.log(e);
});//Ưu điểm gọn gàng, và return được, làm được nhiều việc hơn, chú ý ký hiệu phải rõ ràng

//Túm đầu và biết đó là phần tử thứ mấy
arr.map((e,i)=>{
    console.log(e);
});
//sắp xếp mảng dùng sắp xếp nổi bọt
arr.sort();
// tìm kiếm
arr.includes(9);// sẽ trả về True hoặc False
if(arr.includes(9)){ //tìm kiếm tuyến tính tìm kiếm thông thường tìm từng phần tử một, thấy thì thông báo

}//arr là tên biến do người dùng đặt
//
var pi = "3.14159";
pi = parseFloat(pi);//Chuyển thành số thực
pi = parseInt(pi);//Chuyển thành số nguyên
//Cách 1
function tinh_tong(a,b){//viết truyền thống
    var c=a+b;
    return c;
}
tinh_tong(5,4);
//Cách 2
const phep_tru=function(a,b){ //Viết theo cách mới var hay left; const không đổi giá trị được, nên sử dụng const do an toàn cho mình
    var c=a-b;
    return c;
}
var phep_tru1=function(a,b){ //Viết theo cách mới var hay left; const không đổi giá trị được
    var c=a-b;
    return c;
}
phep_tru1 = 10;
phep_tru(5,2);
//Cách 3
const phep_nhan = (a,b)=>{ // Cách viết mới theo phiên bản 5 hoặc 6, cả 3 cách đều như nhau
    var c= a *b;
    console.log(c);
}
phep_nhan(7,3);

//ES5, 6, 7 là các phiên bản của JS

//MỘT SỐ HÀM HAY DÙNG
//alert("Bạn chưa đủ 18 tuổi truy cập website");// hàm cảnh báo cho người dùng return void không trả về gì, chỉ để chạy
//confirm("Cam đoan rằng bạn đã trên 18 tuổi?"); // Return boolean
if(confirm("Cam đoan bạn đã đủ 18 tuổi?")){
    alert("Chào mừng bạn gia nhập cộng đồng.");
}else{
    alert("Vui lòng thoát khỏi website và chờ đủ tuổi.");
};

if(confirm("Cam đoan bạn đã đủ 18 tuổi?")){
    var s=prompt("Vui lòng nhập tên của bạn");//type là text
    alert("Xin chào" +s);
}else{
    alert("Vui lòng thoát khỏi website và chờ đủ tuổi.");
};

if(confirm("Cam đoan bạn đã đủ 18 tuổi?")){
    var s=prompt("Vui lòng nhập tên của bạn");//return string, type là text
    var t=prompt("Bạn bao nhiêu tuổi?");//string
    alert("Xin chào" +s);
}else{
    alert("Vui lòng thoát khỏi website và chờ đủ tuổi.");
}

var r = Math.random; //return number->double/loat 0->1: vd: 0.12729
r =r * 100;//12.7291
r=parseInt(r); //12
//Tạo một số ngẫu nhiên từ 0->99 (<100)
//tạo cho người chơi nhập số dự đoán của mình
//và nhập số tiền muốn đầu tư -> lợi nhuận x70
//đối chiếu và thông báo kết quả trúng thưởng hay không