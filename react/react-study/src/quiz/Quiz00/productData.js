let product1 = '노트북'
let product2 = '키보드'
let product3 = '마우스'
let price1 = 1200000;
let price2 = 80000;
let price3 = 35000;

let totalPrice = price1 + price2 + price3;
/* 조건
1) product1, product2, product3은 named export를 사용합니다.
2) price1, price2, price3도 named export를 사용합니다.
3) 세 상품의 가격을 더한 총금액을 별도의 변수에 저장합니다.
4) 총금액 변수는 default export를 사용합니다. */

export {product1, product2, product3, price1, price2, price3}
export default totalPrice;