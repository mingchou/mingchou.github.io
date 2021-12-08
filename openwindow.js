document.querySelectorAll('.opener').forEach((btn => {
    btn.addEventListener('click', (evt) => {
      const targetId = `${evt.target.dataset.target}`;
      window.popupWindow = window.open('openwindow.html', targetId);
      window.popupWindow.postMessage("aaaaaaaaaaaaaaaaaaaaaaaaaaa", location.origin);
    });
  }));
  
  document.querySelectorAll('.noopener').forEach((btn => {
    btn.addEventListener('click', (evt) => {
      const targetId = `${evt.target.dataset.target}`;
      window.popupWindow = window.open('openwindow.html', targetId, 'noopener');
      window.popupWindow.postMessage("aaaaaaaaaaaaaaaaaaaaaaaaaaa", location.origin);
    });
  }));

  document.querySelectorAll('.noreferrer').forEach((btn => {
    btn.addEventListener('click', (evt) => {
      const targetId = `${evt.target.dataset.target}`;
      window.popupWindow = window.open('openwindow.html', targetId, 'noreferrer');
      window.popupWindow.postMessage("aaaaaaaaaaaaaaaaaaaaaaaaaaa", location.origin);
    });
  }));

  window.addEventListener('message', (event) => {
    console.log(`Received message: ${event.data}`);
  });
  