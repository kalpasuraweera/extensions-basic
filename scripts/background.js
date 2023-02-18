//messeage ekak labagnna hati
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.name)
    chrome.action.setBadgeText({
      text: request.name,
    });
});

chrome.alarms.onAlarm.addListener(function (alarm) {
  //water alarm eka nm notification ekak yawamu
  if (alarm.name == "waterAlarm") {
    console.log("drink water");
    chrome.notifications.create({
      type: "basic",
      title: "Water Alarm",
      message: "Please drink water now or never",
      iconUrl: "../images/favicon.png",
    });
  }
  console.log("Got an alarm!", alarm);
});
