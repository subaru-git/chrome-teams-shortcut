'use strict';

chrome.commands.onCommand.addListener(command => {
  console.log(command);
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, tabs => {
    chrome.tabs.sendMessage(tabs[0].id, {
      command
    });
  })
})