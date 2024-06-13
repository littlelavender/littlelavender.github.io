import hljs from 'https://cdn.jsdelivr.net/npm/highlight.js@11.9.0/+esm';
import QRCode from 'https://cdn.jsdelivr.net/npm/qrcode@1.5.3/+esm';

document.addEventListener('astro:page-load', () => {
  console.log('highlightjs run');
  document.querySelectorAll("pre").forEach(preElement => {
    if (!preElement.classList.contains("highlight-wrap")) {
      const codeElement = preElement.querySelector("code");
      if (codeElement) {
        hljs.highlightElement(codeElement);

        preElement.classList.add("highlight-wrap");
        let languages = codeElement.className.split(' ')
          .filter(s => s.indexOf("language-") == 0)
          .map(s => s.replace("language-", ""))
          .map(s => s.toUpperCase());
        let language = languages.length > 0 ? languages[0] : "";
        codeElement.setAttribute("data-rel", language);
      }
    }
  });

  const shareWechatElement = document.getElementById("qrcode");
    if (shareWechatElement) {
      QRCode.toCanvas(shareWechatElement, shareWechatElement.getAttribute("data-url"), {
        width: 120,
        color: {
          dark: "#000000",
          light: "#ffffff",
        },
      });
    }
});