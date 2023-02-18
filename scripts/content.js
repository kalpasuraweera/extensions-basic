chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.task === "changeColor") {
    document.querySelector("body").style.backgroundColor = "red";
    document.querySelectorAll("h2").forEach((el) => {
      el.innerHTML = "You hacked this site";
    });
  }
});
