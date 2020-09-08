
// bai 1
// function findOppositeNumber (n,x){
//      n = Number(prompt('nhập vào số n'));
//     if(n%2 == 0 && n > 3 && n <= 20){
//          let spt = n/2;
//          x = Number(prompt('nhập vào số x'));
//          if (x > 0 && x < spt ){
//             console.log(x+n/2);
//          } else if ( x > spt && x <= n){
//              console.log(x - n/2);
//          } else if ( x == spt ) {
//              console.log(0);
//          } else if ( x == 0 ){
//              console.log(spt);
//          }
         
//     }
// }

// findOppositeNumber();

//bai 2


// function merge2String (a,b){
//      a = prompt('nhập vào chuỗi a');
//      b = prompt('nhập vào chuỗi b');
//      let finalArr = [];
//      let check = a.length - b.length;
//      let max = 0; 
//      if( check > 0 ){
//          max = a.length;
//      } else max = b.length;
//     for (let i = 0 ; i < max ; i++) {
//         finalArr.push(a[i]);
//         finalArr.push(b[i]);
//     }
//     console.log(finalArr.join(''));
// }
// merge2String();


let count = 0;
let check = false;
let ketqua = Math.floor(Math.random(0)*10)+1;
let kqArr = [];

let show = document.getElementById('show');
function quay(){
    let uNumb = document.getElementById("uNumb").value;
    if (uNumb < 1 && uNumb > 10){
        alert ('Nhập lại');
    } else if( uNumb == ketqua ) {
        show.innerText = `Bạn đã trúng giải ${ketqua}`
    }else {
        show.innerText = `Bạn đã dự đoán sai Số đánh:${uNumb}`
        kqArr.push(uNumb);
    }
    count = count+1;

    if (count == 3){
        for (let i = 0 ; i < kqArr.length ; i++){
            if (kqArr[i] == ketqua){
                check = true;
            }
        }
        if ( check == true) {
            show.innerText = `Bạn đã trúng giải ${ketqua}`;
        } else show.innerText = `Chúc bạn may mắn lần sau Giải là ${ketqua}`
        setTimeout( function(){
            window.location.reload();
        },3000); 
    }
}
console.log(ketqua);



