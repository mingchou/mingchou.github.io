document.querySelectorAll('.opener').forEach((btn => {
    btn.addEventListener('click', (evt) => {
      const targetId = `${evt.target.dataset.target}`;
      if (targetId == '_self')
        window.popupWindow = window.open('openwindow_iframe.html', targetId);
      else
        window.popupWindow = window.open('openwindow.html', targetId);
      window.popupWindow.postMessage("aaaaaaaaaaaaaaaaaaaaaaaaaaa", location.origin);
    });
  }));
  
  document.querySelectorAll('.noopener').forEach((btn => {
    btn.addEventListener('click', (evt) => {
      const targetId = `${evt.target.dataset.target}`;
      if (targetId == '_self')
        window.popupWindow = window.open('openwindow_iframe.html', targetId, 'noopener');
      else
        window.popupWindow = window.open('openwindow.html', targetId, 'noopener');
      window.popupWindow.postMessage("aaaaaaaaaaaaaaaaaaaaaaaaaaa", location.origin);
    });
  }));

  document.querySelectorAll('.noreferrer').forEach((btn => {
    btn.addEventListener('click', (evt) => {
      const targetId = `${evt.target.dataset.target}`;
      if (targetId == '_self')
        window.popupWindow = window.open('openwindow_iframe.html', targetId, 'noreferrer');
      else
        window.popupWindow = window.open('openwindow.html', targetId, 'noreferrer');
      window.popupWindow.postMessage("aaaaaaaaaaaaaaaaaaaaaaaaaaa", location.origin);
    });
  }));

  window.addEventListener('message', (event) => {
    console.log(`Received message: ${event.data}`);
  });
  