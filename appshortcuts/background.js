// Copyright (c) 2boom 2023 
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  console.log("Send");
});

