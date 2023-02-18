document.getElementById("sum").addEventListener("click", () => {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);
  const sum = num1 + num2;
  document.getElementById("answer").innerHTML =
    num1 + " + " + num2 + " = " + sum;
});

document.getElementById("changeColor").addEventListener("click", () => {
  //content script ekatayawddi tab ekath kiyala yawanna oni
  (async () => {
    const [tab] = await chrome.tabs.query({
      active: true,
      lastFocusedWindow: true,
    });
    const response = await chrome.tabs.sendMessage(tab.id, {
      task: "changeColor",
    });
    // do something with response here, not outside the function
    console.log(response);
  })();
});

//background ekata ehma yawaddi tab eka ooni naa
document.getElementById("setName").addEventListener("click", () => {
  const name = document.getElementById("myName").value;
  (async () => {
    const response = await chrome.runtime.sendMessage({ name: name });
    // do something with response here, not outside the function
    console.log(response);
  })();
});

document.getElementById("setAlarm").addEventListener("click", () => {
  const targetTime = document.getElementById("time").value;
  if (targetTime) {
    const alarmTime = targetTime.split(":"); //meken ena time eka 9:30 wage eka arrat ekkata kada gannwa
    const now = new Date();
    const delayMin =
      (alarmTime[0] - now.getHours()) * 60 + (alarmTime[1] - now.getMinutes());
    chrome.alarms.create("waterAlarm", {
      //delayInMinutes: 0.1, // meken mee function eka call wela mehchra kalyakadi meka runwenwa
      // periodInMinutes: 0.1, // meka damme natot eka parayi call wenne dammot ee dana interval ekata anuwa repeat wenawa
      // when: Date.now() + 2000, // mekata specific time ekak denna puluwn
      delayInMinutes: delayMin,
    });
    console.log(`Alarm Scheduled after ${delayMin} minutes`);
    document.getElementById("time").value = "";
  }
});
