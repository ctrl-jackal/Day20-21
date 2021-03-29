// Every element with this class will use keyboard
const elementsForKeyboard = document.getElementsByClassName("use-keyboard-input");



const Keyboard = {
    
  eventHandlers: {
    oninput: "null",
    // onclose: "null",
  },

  properties: {
    value: "",
    capsLock: false,
  },

  triggerEvent(handler) {
    console.log("event triggered: event name " + handler);
  },

  toggleCapsLock() {
    console.log("Caps Lock Toggled!");
  },

  open(oninput, onclose) {},

  keyFunction() {
    const basic = document.querySelectorAll(".basic");
    const backSpace = document.getElementsByClassName("btn-special-back");
    const enter = document.getElementsByClassName("special-enter");
    const capsLock = document.getElementsByClassName("special-caps");
    const shift = document.getElementsByClassName("special-shift");
    const space = document.getElementsByClassName("special-space");
    const submit = document.getElementsByClassName("special-submit");
    const keys = [...basic, backSpace, enter, capsLock, shift, space, submit];
    console.log(keys);
    keys.forEach((key) => {
      if(key === enter) {
        console.log(key.innerHTML);
      }
      ;
        switch (key) {
          case "backSpace":
            backSpace.addEventListener("click", () => {
              this.properties.value = this.properties.value.substring(0, this.properties.value-1);
              this.triggerEvent("oninput");
            });
            break;
            case "caps":
            backSpace.addEventListener("click", () => {
              this.toggleCapsLock();

            });
            break;
        }
      
    });
  },
};
