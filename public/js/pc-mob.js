const sendBtn = document.getElementById("sendBtn");
const locBtn = document.getElementById("locBtn");

document.addEventListener("DOMContentLoaded", () => {
  function isPc() {
    sendBtn.innerText = "Send Message"
    locBtn.innerText = "Send Location"
    sendBtn.style.marginLeft = "8px"
    locBtn.style.marginLeft = "12px"
  }

  function isMobile() {
    sendBtn.innerText = ""
    locBtn.innerText = ""
    sendBtn.style.marginLeft = ""
    locBtn.style.marginLeft = ""
  }

  const ua = navigator.userAgent.toLowerCase();
  const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua);

  if (isMobileDevice) {
    isMobile();
  } else {
    isPc();
  }
});
