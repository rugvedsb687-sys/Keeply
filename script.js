// ============================================================
// KEEPly APK CONFIGURATION
// Replace the URL below with your actual APK link.
// Example:
// const APK_URL = "https://github.com/YOUR_USERNAME/YOUR_REPO/releases/download/v1.0.0/Keeply.apk";
// ============================================================
const APK_URL = "https://expo.dev/artifacts/eas/fOwdyrWOF5JVrSb5TqQ11lBmeY01Q9Mhs9gB6KeJCWM.apk";

const downloadButton = document.getElementById("downloadButton");

if (APK_URL && APK_URL !== "nothing") {
  downloadButton.href = APK_URL;
  downloadButton.setAttribute("download", "");
} else {
  downloadButton.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Add your Keeply APK link in script.js first.");
  });
}

document.getElementById("year").textContent = new Date().getFullYear();
