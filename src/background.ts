chrome.runtime.onInstalled.addListener(() => {
  console.log("installed");
});

chrome.action.onClicked.addListener((tab) => {
  if (tab.id === undefined) {
    return;
  }
  chrome.tabs.update(tab.id, {});
});
