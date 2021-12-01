/**
 * Bài tập 3
 * khối 1:
 * giá USD
 * số tiền
 * 
 * khối 2:
 * tiền quy đổi là 23.000đ
 *  TienVND = 23.000 * TienUSD
 * 
 * Khối 3:
 * TienVND
 */

const moneyUSD = 1000;
const  changeMoney = 23000;

const moneyVND = moneyUSD * changeMoney;
console.log("Tiền quy đổi sang VND là:" + new Intl.NumberFormat('en-VN', { maximumSignificantDigits: 3 }).format(moneyVND));


/**
 * Bài tập 4
 * khối 1:
 * chiều dài
 * chiều rộng
 *
 * khối 2:
 * diện tích = dài * rộng
 * chu vi = (dài + rộng) *2
 * 
 * Khối 3:
 * diện tích
 * chu vi
 */

const length = 10;
const width = 4;

const area = length * width;
const perimeter = (Number(length) + Number(width)) *2;

console.log("Diện tích hình chữ nhật là: " + area);
console.log("Chu vi hình chữ nhật là: " + perimeter);


/**
 * Bài tập 5
 * khối 1:
 * số có 2 chữ số
 *
 * khối 2:
 * hàng chục : so_hang_chuc = so / 10
 * hàng đơn vị : so_hang_don_vi = so % 10
 * tổng 2 chữ số = so_hang_chuc + so_hang_don_vi
 * 
 * Khối 3:
 * tổng của 2 chữ số
 */

const num = 28;
const tensUnit = num / 10; 
const units = num % 10;
const total = parseInt(tensUnit) + parseInt(units);
console.log("Tổng 2 kí số vừa nhập là: " + total);
