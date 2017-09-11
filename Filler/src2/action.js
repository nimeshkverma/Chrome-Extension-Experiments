// document.getElementById('fillForm').addEventListener('click', function(){
//   chrome.tabs.executeScript({
//     code: "alert(document.title)"
//   });
// });

document.addEventListener('DOMContentLoaded', function() {
  var fillFormButton = document.getElementById('fillForm');
  fillFormButton.addEventListener('click', function() {
  	chrome.tabs.executeScript({
    code: "alert(document.title)"
  });
 
  });
});