chrome.runtime.onMessage.addListener(msg => {
  const {
    command
  } = msg;
  console.log(command);
  switch (command) {
    case 'toggle-mute':
      const mute = document.getElementById('microphone-button');
      if (mute) mute.click();
      break;

    default:
      break;
  }
})