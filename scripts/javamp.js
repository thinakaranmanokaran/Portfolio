function displayTime() {
    const now = new Date();
     const hours = String(now.getHours()).padStart(2, '0');
     const minutes = String(now.getMinutes()).padStart(2, '0');
     const seconds = String(now.getSeconds()).padStart(2, '0');
     const timeString = hours + ':' + minutes + ':' + seconds;
     document.getElementById('time').textContent = timeString;
    }
setInterval(displayTime, 1000);





function blockScroll(element) {
var scrollLimitTop = 40; // Limit scroll from the top
var scrollLimitBottom = element.scrollHeight - element.clientHeight - 0; // Limit scroll from the bottom
if (element.scrollTop < scrollLimitTop) {
    element.scrollTop = scrollLimitTop;
}
if (element.scrollTop > scrollLimitBottom) {
    element.scrollTop = scrollLimitBottom;
}
}





var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;

  if(counter > 5){
  counter = 1;
  }
}, 5000);