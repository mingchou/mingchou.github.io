
self.addEventListener('fetch', event => {
  console.log(">>>>>>>>>>> fetch");
  return fetch(event.request).then(response => {
    return response;
  });
});
