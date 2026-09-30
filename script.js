const APK_URL = "https://expo.dev/artifacts/eas/fOwdyrWOF5JVrSb5TqQ11lBmeY01Q9Mhs9gB6KeJCWM.apk";

const downloadButton = document.getElementById("downloadButton");

downloadButton.href = APK_URL;
downloadButton.setAttribute("download", "");

document.getElementById("year").textContent = new Date().getFullYear();
