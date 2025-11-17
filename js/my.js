(function() {
  var a_idx = 0;
  var colors = ["#FF7F50", "#FF4500", "#1E90FF", "#32CD32", "#FF1493", "#FFD700"];
  document.body.addEventListener('click', function(e) {
    var span = document.createElement('span');
    span.textContent = "💩";
    //💩✨
    span.style.zIndex = 9999;
    span.style.position = "absolute";
    span.style.top = (e.pageY - 20) + "px";
    span.style.left = e.pageX + "px";
    span.style.fontSize = "20px";
    span.style.color = colors[a_idx];
    a_idx = (a_idx + 1) % colors.length;

    document.body.appendChild(span);
    setTimeout(function() {
      span.style.transition = "all 0.6s";
      span.style.opacity = 0;
      span.style.transform = "translateY(-30px)";
    }, 20);

    setTimeout(function() {
      span.remove();
    }, 800);
  });
})();
