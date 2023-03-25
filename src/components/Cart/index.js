import { useState } from "react";
import "./Cart.scss";

function Cart() {
  const unitPrice = 120000;
  // const quantity = 1;
  const [quantity, setQuantity] = useState(1);

  const handleChange = (e) => {
    setQuantity(parseInt(e.target.value));
    console.log(parseInt(e.target.value));
  }

  return (
    <>
      <table className="cart">
        <thead>
          <tr>
            <th>Tên sản phẩm</th>
            <th>Số lượng</th>
            <th>Đơn giá</th>
            <th>Thành tiền</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Giày thể thao nam cao cấp</td>
            <td>
              <input defaultValue={quantity} onChange={handleChange} type="number" min={1} />
            </td>
            <td>{unitPrice}đ</td>
            <td>{unitPrice*quantity}đ</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
export default Cart;
