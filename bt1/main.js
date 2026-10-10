const bookingReservation = {
    bookingId: "BK-2024-8891",
    guestName: "Trần Minh Quang",
    roomType: "Deluxe Ocean View",
    roomPrice: 1500000,
    checkInHour: 9
};

const priceKey = "roomPrice";

// Dung dau ngoac vuong de truy cap thuoc tinh bang bien
const basePrice = bookingReservation[priceKey];

let surcharge = 0;

// Neu nhan phong truoc 12 gio thi phu thu 30%
if (bookingReservation.checkInHour < 12) {
    surcharge = basePrice * 0.3;
}

bookingReservation.surcharge = surcharge;

const totalAmount = basePrice + surcharge;
bookingReservation.totalAmount = totalAmount;

console.log("Ma dat phong:", bookingReservation.bookingId);
console.log("Khach hang:", bookingReservation.guestName);
console.log("Loai phong:", bookingReservation.roomType);
console.log("Gia phong:", basePrice);
console.log("Phu thu nhan phong som:", bookingReservation.surcharge);
console.log("Tong so tien thanh toan:", bookingReservation.totalAmount);