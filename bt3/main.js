const rooms = [
    {
        roomId: "P101",
        roomType: "Deluxe",
        pricePerNight: 1500000,
        status: "VACANT"
    },
    {
        roomId: "P102",
        roomType: "Standard",
        pricePerNight: 800000,
        status: "VACANT"
    },
    {
        roomId: "P103",
        roomType: "Superior",
        pricePerNight: 1200000,
        status: "MAINTENANCE"
    }
];

// Hien thi danh sach phong ban dau
console.log("=== DANH SACH PHONG BAN DAU ===");

for (let i = 0; i < rooms.length; i++) {
    console.log(
        rooms[i].roomId + " | " +
        rooms[i].roomType + " | " +
        rooms[i].pricePerNight + " VND | " +
        rooms[i].status
    );
}

// CREATE: Them phong P104
const newRoom = {
    roomId: "P104",
    roomType: "VIP Suite",
    pricePerNight: 3500000,
    status: "VACANT"
};

rooms.push(newRoom);

console.log("=== SAU KHI THEM PHONG P104 ===");

for (let i = 0; i < rooms.length; i++) {
    console.log(
        rooms[i].roomId + " | " +
        rooms[i].roomType + " | " +
        rooms[i].pricePerNight + " VND | " +
        rooms[i].status
    );
}

// READ: Tim phong P102
console.log("=== TIM PHONG P102 ===");

let foundRoom = false;

for (let i = 0; i < rooms.length; i++) {
    if (rooms[i].roomId === "P102") {
        console.log("Ma phong:", rooms[i].roomId);
        console.log("Loai phong:", rooms[i].roomType);
        console.log("Gia moi dem:", rooms[i].pricePerNight, "VND");
        console.log("Trang thai:", rooms[i].status);
        foundRoom = true;
        break;
    }
}

if (foundRoom === false) {
    console.log("Khong tim thay phong P102");
}

// UPDATE: Khach check-in phong P101
for (let i = 0; i < rooms.length; i++) {
    if (rooms[i].roomId === "P101") {
        rooms[i].status = "OCCUPIED";
        break;
    }
}

console.log("=== SAU KHI CAP NHAT PHONG P101 ===");

for (let i = 0; i < rooms.length; i++) {
    console.log(
        rooms[i].roomId + " | " +
        rooms[i].roomType + " | " +
        rooms[i].pricePerNight + " VND | " +
        rooms[i].status
    );
}

// DELETE: Xoa phong P103 ngung phuc vu
for (let i = 0; i < rooms.length; i++) {
    if (rooms[i].roomId === "P103") {
        rooms.splice(i, 1);
        break;
    }
}

console.log("=== SAU KHI XOA PHONG P103 ===");

for (let i = 0; i < rooms.length; i++) {
    console.log(
        rooms[i].roomId + " | " +
        rooms[i].roomType + " | " +
        rooms[i].pricePerNight + " VND | " +
        rooms[i].status
    );
}