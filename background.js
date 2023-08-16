chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
      text: "OFF",
    });
  });

function getTime () {
return $('video').prop('currentTime');
}

console.log(getTime());