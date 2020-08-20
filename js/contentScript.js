const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
chrome.runtime.onMessage.addListener(async msg => {
  const {
    command
  } = msg;
  switch (command) {
    case 'mute-on': {
      const icon = document.querySelector('#microphone-button ng-include svg').getAttribute('class');
      if (icon.search(/icons-call-microphone$/) === -1) return;
      const mute = document.getElementById('microphone-button');
      if (mute) mute.click();
    }
    break;
  case 'mute-off': {
    const icon = document.querySelector('#microphone-button ng-include svg').getAttribute('class');
    if (icon.search(/icons-call-microphone-off-filled$/) === -1) return;
    const mute = document.getElementById('microphone-button');
    console.log(mute);
    if (mute) mute.click();
  }
  break;
  case 'toggle-video': {
    const video = document.getElementById('video-button');
    if (video) video.click();
  }
  break;
  case 'show-device-setting': {
    const other = document.getElementById('callingButtons-showMoreBtn')
    if (other) other.click();
    await _sleep(100);
    const device = document.getElementById('device-settings-button');
    if (device) device.click();
  }
  break;

  default:
    break;
  }
})