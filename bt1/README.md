# BÀI 1: DÒ VẾT VÀ SỬA LỖI TRUY CẬP THUỘC TÍNH ĐỘNG

## 1. Phân tích lỗi

Dòng code sai ban đầu:

```javascript
const basePrice = bookingReservation.priceKey;
```

Nguyên nhân:

- `priceKey` là biến chứa chuỗi `"roomPrice"`.
- Khi sử dụng `bookingReservation.priceKey`, JavaScript tìm thuộc tính có tên là `priceKey`.
- Đối tượng `bookingReservation` không có thuộc tính `priceKey`, vì vậy kết quả trả về là `undefined`.
- Khi tính phụ thu, `undefined * 0.3` cho kết quả `NaN`.
- Khi tính tổng tiền, `undefined + NaN` cũng cho kết quả `NaN`.

Cách sửa:

```javascript
const basePrice = bookingReservation[priceKey];
```

Dấu ngoặc vuông cho phép JavaScript sử dụng giá trị của biến `priceKey` để tìm thuộc tính `roomPrice`.

## 2. Bảng Test Cases

| Trường hợp kiểm thử | Dữ liệu đầu vào | Kết quả sai thực tế | Kết quả đúng mong đợi |
|---|---|---|---|
| TC01: Nhận phòng trước 12 giờ | roomPrice = 1500000, checkInHour = 9 | Giá phòng là undefined, phụ thu và tổng tiền là NaN | Giá phòng = 1500000, phụ thu = 450000, tổng tiền = 1950000 |
| TC02: Nhận phòng từ 12 giờ trở đi | roomPrice = 1500000, checkInHour = 14 | Giá phòng là undefined, tổng tiền là NaN | Giá phòng = 1500000, phụ thu = 0, tổng tiền = 1500000 |

Lưu ý: TC02 cần thay `checkInHour` thành `14` trong dữ liệu đầu vào để kiểm thử trường hợp nhận phòng không bị phụ thu.

## 3. Kết luận

Lỗi xuất phát từ việc sử dụng Dot Notation thay vì Bracket Notation khi tên thuộc tính được lưu trong một biến.

- Dot Notation: `bookingReservation.roomPrice` truy cập trực tiếp thuộc tính có tên `roomPrice`.
- Bracket Notation: `bookingReservation[priceKey]` truy cập thuộc tính dựa trên giá trị của biến `priceKey`.

Chương trình sau khi sửa sử dụng Object, biến, câu lệnh điều kiện `if` và các phép tính cơ bản. Chương trình tính đúng phụ thu 30% khi nhận phòng trước 12 giờ và tính tổng tiền chính xác.