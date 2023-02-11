//   MASALALARNI YECHING
// Random a soni olinsin va quyidagi talablarni bajaring :

// 1) a soni agar 5 ga bo'linsa console da "A soni 5 ga bo'linadi ! " degan message chiqsin ;

let a = Math.random() * 100;
a = parseInt(a);
if (a % 5 == 0) {
  console.log(`${a} soni 5 ga bo'linadi ! `);
} else {
  console.log(`${a} soni 5ga bo'linmaydi`);
}

// 2) a soni agar 3 ga bo'linsa console da "A soni 3 ga bo'linadi !" degan message chiqsin ;

if (a % 3 == 0) {
  console.log(`${a} soni 3 ga bo'linadi !`);
} else {
  console.log(`${a} soni 3 ga bo'linmaydi !`);
}

// 3) a soni agar 3 va 5 ga bo'linsa console da "A soni 3 va 5 ga bo'linadi !" degan message chiqsin ;

if ((a % 3 == 0, a % 5 == 0)) {
  console.log(`${a} soni 3 va 5 ga bo'linadi !`);
} else {
  console.log(`${a} soni 3 va 5 ga bo'linmaydi !`);
}

// 4) ixtiyoriy b va c sonlaridan console ga 5 ga eng yaqini chiqarilsin ;
let c = Math.random() * 10;
c = parseInt(c);
let b = Math.random() * 10;
b = parseInt(b);
if (b < c < 5) {
  console.log(`${c} soni 5ga eng yaqin`);
} else if (5 < c < b) {
  console.log(`${c} soni 5ga eng yaqin`);
} else if (5 < b < c) {
  console.log(`${b} soni 5g eng yaqin`);
} else {
  console.log(`${b} soni 5ga eng yaqin`);
}

console.log(b);
console.log(c);
