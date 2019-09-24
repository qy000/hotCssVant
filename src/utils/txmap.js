export function txmap() {
  return new Promise(resolve => {
    window.init = function() {
      resolve(qq); //注意这里
    };
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://map.qq.com/api/js?v=2.exp&callback=init&key=PTHBZ-ZYAKG-7IEQO-I5SJM-7QL2H-3AFDR";
    document.head.appendChild(script);
  });
}
