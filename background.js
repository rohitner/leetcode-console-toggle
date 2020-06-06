'use strict';

document.addEventListener('keydown', function (event) {
  if (event.ctrlKey && event.key === 'c') {
    document.querySelector("#app > div > div.main__2_tD > div.content__3fR6 > div > div.editor-wrapper__1ru6 > div > div.container__2WTi > div.func__1DsC > button").click();
  }
});

document.addEventListener('keydown', function (event) {
  if (event.ctrlKey && event.key === '\\') {
    document.querySelector("#app > div > div.main__2_tD > div.content__3fR6 > div > div.editor-wrapper__1ru6 > div > div.content__Ztw- > div > div.container__2zYY > div.btns__1OeZ > div:nth-child(3) > button").click();
    document.querySelector("body > div:nth-child(23) > div > div.ant-modal-wrap.lc-modal__2lWv.typed__4Hf8 > div > div.ant-modal-content > div.ant-modal-body > div.lc-modal-footer__qHro.confirm-footer__1apg > button.btn__2FMG.fancy-btn__CYhs.primary__3S2m.light__3zR9.btn__1eiM.btn-md__3VAX.confirm-btn__2XK3").click();
  }
});

document.addEventListener('keydown', function (event) {
  if (event.ctrlKey && event.key === 'i') {
    if (document.querySelector("#app > div > div.main__2_tD > div.note__1Qo7").getAttribute("status") == "exited") {
      document.querySelector("#app > div > div.main__2_tD > div.note-btn__uLJR").click();
    }
    else if (document.querySelector("#app > div > div.main__2_tD > div.note__1Qo7").getAttribute("status") == "entered") {
      document.querySelector("#app > div > div.main__2_tD > div.note__1Qo7 > div > div.close__3tsT").click();
    }

  }
});