(function () {
  const img = document.createElement("img");
  img.src = "/images/minion.gif";  // 小黄人图片路径
  img.style.position = "fixed";
  img.style.bottom = "40px";
  img.style.right = "40px";
  img.style.width = "140px";
  img.style.zIndex = 999999;
  img.style.cursor = "pointer";
  img.style.transition = "transform 0.3s";

  document.body.appendChild(img);

  // 鼠标悬停，放大
  img.addEventListener("mouseover", () => {
    img.style.transform = "scale(1.2)";
  });

  // 恢复
  img.addEventListener("mouseout", () => {
    img.style.transform = "scale(1)";
  });

  // 点击让小黄人跳动一下
  img.addEventListener("click", () => {
    img.style.transform = "translateY(-50px) scale(1.2)";
    setTimeout(() => {
      img.style.transform = "translateY(0) scale(1)";
    }, 300);
  });

  // 自动左右浮动
  let dir = 1;
  setInterval(() => {
    img.style.right = parseInt(img.style.right) + dir * 4 + "px";
    const pos = parseInt(img.style.right);
    if (pos > 80) dir = -1;
    if (pos < 10) dir = 1;
  }, 100);
})();
