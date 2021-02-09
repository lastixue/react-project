import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js", { scope: "../dist/" })
    .then((reg) => {
      console.log("service worker installed :", reg);
      if ("Notification" in window) {
        console.log(
          "Notification permission default status:",
          Notification.permission
        );
        // Notification.requestPermission(function (status) {
        //   console.log("Notification permission status:", status);
        //   displayNotification();
        // });
      }
    })
    .catch((err) => console.log("Error", err));
} //可能是檔案位置與scope導致錯誤
function displayNotification() {
  let test = 0;
  let n = 0;
  if (Notification.permission === "granted") {
    for (n = 0; n < 100; n++) {
      test += n;
      console.log(test);
    }
    navigator.serviceWorker.getRegistration("../dist/").then((reg) => {
      if (test === 4950) {
        reg.showNotification("test");
      }
    });
  }
}
// function displayNotification() {
//   if (Notification.permission == "granted") {
//     navigator.serviceWorker.getRegistration("/service-worker.js", { scope: "../dist/" }).then((reg) => {
//       var options = {
//         icon: "",
//         body: "歡迎加入 Angular 社群",
//         image:
//           "https://augt-forum-upload.s3-ap-southeast-1.amazonaws.com/original/1X/6b3cd55281b7bedea101dc36a6ef24034806390b.png",
//       };
//       reg.showNotification("Angular User Group Taiwan", options);
//       console.log("displayNotification");
//     });
//   }
// }
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
