// All the Keyboard Keys, Empty DIV, errorText and .jar (Spacebar)
const greenKeys = document.querySelectorAll(".dual-green");
const blueKeys = document.querySelectorAll(".dual-blue");
const pinkKeys = document.querySelectorAll(".dual-pink");
const orangeKeys = document.querySelectorAll(".dual-orange");
const yellowKeys = document.querySelectorAll(".dual-yellow");
const spaceBar = document.querySelectorAll(".dual-light-red");
const errorText = document.getElementById("error-text");
const jar = document.querySelectorAll(".jar");
const emptyDiv = document.getElementById("divEmpty");
let currentColor = "not";

// blueKeys function
for (let index = 0; index < blueKeys.length; index++) {
  const jarBlue = blueKeys[index];
  // Eventlistener click (function) for blueKeys
  jarBlue.addEventListener("click", function() {
    errorText.style.display = "none";
    divEmpty.style.display = "block";
    if (currentColor === "Blue-brush") {
      jarBlue.style.backgroundColor = "#64B1C2";
    } else {
      errorText.style.display = "block";
      divEmpty.style.display = "none";
    }
  });
}

// greenKeys function
for (let index = 0; index < greenKeys.length; index++) {
  const KeyGreen = greenKeys[index];
  // Eventlistener click (function) for greenKeys
  KeyGreen.addEventListener("click", function() {
    errorText.style.display = "none";
    divEmpty.style.display = "block";
    if (currentColor === "Green-brush") {
      KeyGreen.style.backgroundColor = "#98AF74";
    } else {
      errorText.style.display = "block";
      divEmpty.style.display = "none";
    }
  });
}

// pinkKeys function
for (let index = 0; index < pinkKeys.length; index++) {
  const keyPink = pinkKeys[index];
  // Eventlistener click (function) for pinkKeys
  keyPink.addEventListener("click", function() {
    errorText.style.display = "none";
    divEmpty.style.display = "block";
    if (currentColor === "Gray-brush") {
      keyPink.style.backgroundColor = "#C89A95";
    } else {
      errorText.style.display = "block";
      divEmpty.style.display = "none";
    }
  });
}

// orangeKeys function
for (let index = 0; index < orangeKeys.length; index++) {
  const keysOrange = orangeKeys[index];
  // Eventlistener click (function) for orangeKeys
  keysOrange.addEventListener("click", function() {
    errorText.style.display = "none";
    divEmpty.style.display = "block";
    if (currentColor === "Orange-brush") {
      keysOrange.style.backgroundColor = "#DA895A";
    } else {
      errorText.style.display = "block";
      divEmpty.style.display = "none";
    }
  });
}

// yellowKeys function
for (let index = 0; index < yellowKeys.length; index++) {
  const keysYellow = yellowKeys[index];
  // Eventlistener click (function) for yellowKeys
  keysYellow.addEventListener("click", function() {
    errorText.style.display = "none";
    divEmpty.style.display = "block";
    if (currentColor === "Yellow-brush") {
      keysYellow.style.backgroundColor = "#DDC174";
    } else {
      errorText.style.display = "block";
      divEmpty.style.display = "none";
    }
  });
}

// spaceBar function
for (let index = 0; index < spaceBar.length; index++) {
  const spacebarRed = spaceBar[index];
  // Eventlistener click (function) for spaceBar
  spacebarRed.addEventListener("click", function() {
    errorText.style.display = "none";
    divEmpty.style.display = "block";
    if (currentColor === "Red-brush") {
      spacebarRed.style.backgroundColor = "#FF5252";
    } else {
      errorText.style.display = "block";
      divEmpty.style.display = "none";
    }
  });
}

// Cursor function
for (let index = 0; index < jar.length; index++) {
  const jarKey = jar[index];
  // Eventlistener click (function) for changing brush cursor via (data-target)
  jarKey.addEventListener("click", function() {
    currentColor = jarKey.dataset.color;
    for (let index = 0; index < jar.length; index++) {
      const jarKey = jar[index];
      jarKey.style.boxShadow = "none";
    }
    this.style.boxShadow = "10px 20px 30px 20px yellow";
    document.body.style.cursor = cursorPointer;
  });
}
