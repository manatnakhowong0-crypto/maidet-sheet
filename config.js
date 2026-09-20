// ไม้เด็ด: ไฟล์ตั้งค่า กรอกครั้งเดียว แล้วอัปโหลดไว้คู่กับ index.html
// เวลาอัปเดตแอปครั้งต่อไป อัปโหลดแค่ index.html ไฟล์นี้ไม่ต้องแก้หรืออัปโหลดใหม่

export default {
  // จาก Firebase console > Project settings > Your apps > Web app > Config
  firebase: {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  },

  // จาก Apps Script > Deploy > Web app URL (ลงท้ายด้วย /exec)
  sheetUrl: "https://script.google.com/macros/s/AKfycbzy1vQekAn7qzjMeuFI4q4LBbDmohQYgq3rKyqn4-XLjzDF0pnVWRH5FkxMGcXYWICtTw/exec",

  // รหัสเดียวกับ TOKEN ใน Code.gs
  sheetToken: "01201776"
};
