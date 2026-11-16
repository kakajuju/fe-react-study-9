import {shopName, shopAddress, shopPhone} from './shopData.js';
import {product1, product2, product3, price1, price2, price3} from './productData.js';
import totalPrice from './productData.js';
/* 조건
1) default import와 named import를 모두 사용하세요.
2) 상품명과 가격을 각각 출력하세요.
3) 세 상품의 총금액을 출력하세요.
4) 쇼핑몰 이름, 주소, 전화번호를 출력하세요.
5) ProductInfo 컴포넌트는 default export 하세요. */

function ProductInfo() {

    return(
        <div>
            <h1>온라인 쇼핑몰</h1>
            <br />
            <p>쇼핑몰명 : {shopName}</p>
            <p>주소 : {shopAddress}</p>
            <p>전화번호 : {shopPhone}</p>
            <br />
            <h2>상품 목록</h2>
            <br />
            <p>상품1 : {product1}</p>
            <p>가격 : {price1}원</p>
            <br />
            <p>상품2 : {product2}</p>
            <p>가격 : {price2}원</p>
            <br />
            <p>상품3 : {product3}</p>
            <p>가격 : {price3}원</p>
            <br />
            <p>--------------</p>
            <p>총 상품 금액 : {totalPrice}원</p>
        </div>
    )
}

export default ProductInfo;