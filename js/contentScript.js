const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
chrome.runtime.onMessage.addListener(async msg => {
  const {
    command
  } = msg;
  switch (command) {
    case 'toggle-mute': {
      const mute = document.getElementById('microphone-button');
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
    console.log(other);
    await _sleep(100);
    const device = document.getElementById('device-settings-button');
    console.log(device);
    if (device) device.click();
  }
  break;
  case 'show-chat': {
    const chat = document.getElementById('chat-button');
    if (chat) chat.click();
  }
  break;

  default:
    break;
  }
})