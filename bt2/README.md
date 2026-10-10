# BÀI 2: KHẮC PHỤC LỖI XỬ LÝ THUỘC TÍNH ĐỐI TƯỢNG

## 1. Phân tích lỗi

### Lỗi 1: Truy cập sai thuộc tính giá phòng

Code sai:

```javascript
const basePrice = bookingReservation.priceKey;
```

Nguyên nhân: JavaScript tìm thuộc tính có tên `priceKey`, trong khi tên thuộc tính cần tìm được lưu trong biến `priceKey` với giá trị `"roomPrice"`.

Cách sửa:

```javascript
const basePrice = bookingReservation[priceKey];
```

### Lỗi 2: Gán undefined thay vì xóa thuộc tính

Code sai:

```javascript
bookingReservation.discountCode = undefined;
```

Nguyên nhân: Thuộc tính `discountCode` vẫn tồn tại trong đối tượng, nhưng giá trị của nó là `undefined`.

Cách sửa:

```javascript
delete bookingReservation.discountCode;
```

Lệnh `delete` xóa thuộc tính khỏi đối tượng.

### Lỗi 3: Truy cập sai thuộc tính trong vòng lặp

Code sai:

```javascript
console.log(key + ": " + bookingReservation.key);
```

Nguyên nhân: `bookingReservation.key` tìm thuộc tính có tên cố định là `key`, không phải thuộc tính mà biến `key` đang đại diện.

Cách sửa:

```javascript
console.log(key + ": " + bookingReservation[key]);
```

Dấu ngoặc vuông giúp truy cập giá trị của từng thuộc tính trong vòng lặp `for...in`.

## 2. Bảng Test Cases

| Trường hợp kiểm thử | Dữ liệu đầu vào | Kết quả sai thực tế | Kết quả đúng mong đợi |
|---|---|---|---|
| TC01: Voucher không hợp lệ | `isVoucherValid = false`, `roomPrice = 1500000`, `checkInHour = 9` | Giá phòng bị `undefined`, tổng tiền là `NaN`, thuộc tính voucher vẫn tồn tại nếu chỉ gán `undefined`, vòng lặp không in đúng giá trị | Giá phòng = 1500000, phụ thu = 450000, tổng tiền = 1950000, `'discountCode' in bookingReservation` trả về `false` |
| TC02: Voucher hợp lệ | `isVoucherValid = true`, `roomPrice = 1500000`, `checkInHour = 14` | Nếu truy cập thuộc tính sai thì giá phòng bị `undefined`; vòng lặp không hiển thị đúng giá trị | Giá phòng = 1500000, phụ thu = 0, tổng tiền = 1500000, mã `SUMMER10` vẫn tồn tại và được hiển thị |

Lưu ý: TC02 cần đổi `isVoucherValid` thành `true` và `checkInHour` thành `14` để kiểm tra trường hợp voucher hợp lệ và không có phụ thu nhận phòng sớm.

## 3. Kết luận

Sau khi sửa, chương trình sử dụng đúng Bracket Notation để truy cập thuộc tính qua biến, sử dụng `delete` để xóa thuộc tính voucher không hợp lệ và sử dụng `for...in` kết hợp với Bracket Notation để hiển thị toàn bộ thuộc tính còn tồn tại.

Chương trình tính đúng phụ thu nhận phòng sớm 30% khi nhận phòng trước 12 giờ.

Với dữ liệu voucher không hợp lệ, biểu thức `'discountCode' in bookingReservation` trả về `false` theo đúng yêu cầu đề bài.