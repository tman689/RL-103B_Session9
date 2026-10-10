const bookingReservation = {
    bookingId: "BK-2024-8891",
    guestName: "Trần Minh Quang",
    roomType: "Deluxe Ocean View",
    roomPrice: 1500000,
    checkInHour: 9,
    discountCode: "SUMMER10"
};

const isVoucherValid = false;

const priceKey = "roomPrice";

// Lay gia phong bang Bracket Notation
const basePrice = bookingReservation[priceKey];

let earlySurcharge = 0;

// Neu nhan phong truoc 12 gio thi phu thu 30%
if (bookingReservation.checkInHour < 12) {
    earlySurcharge = basePrice * 0.3;
}

bookingReservation.earlySurcharge = earlySurcharge;

// Tinh tong tien
const totalAmount = basePrice + earlySurcharge;
bookingReservation.totalAmount = totalAmount;

// Xoa ma voucher neu voucher khong hop le
if (!isVoucherValid) {
    delete bookingReservation.discountCode;
}

// Kiem tra discountCode con ton tai hay khong
console.log("discountCode con ton tai:", 'discountCode' in bookingReservation);

console.log("--- CHI TIET PHIEU DAT PHONG ---");

// Duyet va hien thi tat ca thuoc tinh
for (const key in bookingReservation) {
    console.log(key + ": " + bookingReservation[key]);
}