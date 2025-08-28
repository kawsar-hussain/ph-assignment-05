// reuseable function
function getInnerText(id) {
  const text = document.getElementById(id).innerText;
  return text;
}

function getById(id) {
  const element = document.getElementById(id);
  return element;
}

function getElementsByClassName(cls) {
  const element = document.getElementsByClassName(cls);
  return element;
}

//get current time function
function getCurrentTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  hours = hours.toString().padStart(2, "0");
  return `${hours}:${minutes}:${seconds} ${ampm}`;
}

// clicked heart icon functionality
let hearts = document.getElementsByClassName("hearts");
let updatedHeart = parseInt(getInnerText("heart"));
for (const heart of hearts) {
  heart.addEventListener("click", function () {
    updatedHeart++;
    document.getElementById("heart").innerText = updatedHeart;
  });
}

//function for alertPopup
function alertPopUp(title, hotNo) {
  const subtitle = getInnerText(title);
  const hotNumber = getInnerText(hotNo);
  const alertTitle = subtitle + " " + hotNumber;
  const coinValue = parseInt(getInnerText("coin"));
  if (coinValue > 19) {
    alert(`📞 Calling ${alertTitle}`);
  }
}

function call(id, title, titleBangla, number) {
  const callBtn = getById(id);
  callBtn.addEventListener("click", function () {
    alertPopUp(title, number);
    history(titleBangla, number);
  });
}

// function for call history
function history(callTitle, callNumber) {
  const title = getInnerText(callTitle);
  const serviceHotNumber = getInnerText(callNumber);

  let history = getById("history");
  history.classList.add("history");
  let historyTitle = getById("history-title");
  historyTitle.innerText = title;
  historyTitle = historyTitle.innerText;
  const updatedHistory = document.createElement("div");
  const historyInfo = document.createElement("div");
  const time = document.createElement("p");

  //added style for created element
  updatedHistory.classList.add("history");
  historyInfo.classList.add("history__info");
  time.classList.add("history__time");
  //added style for created element

  updatedHistory.appendChild(historyInfo);
  updatedHistory.appendChild(time);

  const p1 = document.createElement("p");
  p1.classList.add("history__title");
  const p2 = document.createElement("p");
  p2.classList.add("history-number");
  historyInfo.appendChild(p1);
  historyInfo.appendChild(p2);
  // set value
  p1.innerText = historyTitle;
  p2.innerText = serviceHotNumber;
  time.innerText = getCurrentTime();

  const historyContainer = getById("history-container");
  const coinValue = parseInt(getInnerText("coin"));
  if (coinValue > 0) {
    historyContainer.appendChild(updatedHistory);
  }
}

function call(id, title, titleBangla, number) {
  const callBtn = getById(id);
  callBtn.addEventListener("click", function () {
    alertPopUp(title, number);
    history(titleBangla, number);
  });
}

// make call and get history by function
call("call-btn-emergency", "card__subtitle__emergency", "title__bangla__emergency", "hot_number_emergency");
call("call-btn-police", "card__subtitle__police", "title__bangla__police", "hot_number_police");
call("call-btn-fire", "card__subtitle__fire", "title__bangla__fire", "hot_number_fire");
call("call-btn-ambulance", "card__subtitle__ambulance", "title__bangla__ambulance", "hot_number_ambulance");
call("call-btn-child", "card__subtitle__child", "title__bangla__child", "hot_number_child");
call("call-btn-anti", "card__subtitle__anti", "title__bangla__anti", "hot_number_anti");
call("call-btn-electricity", "card__subtitle__electricity", "title__bangla__electricity", "hot_number_electricity");
call("call-btn-brac", "card__subtitle__brac", "title__bangla__brac", "hot_number_brac");
call("call-btn-railway", "card__subtitle__railway", "title__bangla__railway", "hot_number_railway");

// clicked call btn decrease coin
const calls = getElementsByClassName("call-btn");
let coin;
for (const call of calls) {
  call.addEventListener("click", function () {
    let updatedCoin = parseInt(getById("coin").innerText);
    if (updatedCoin < 20) {
      updatedCoin = 0;
      alert("❌ আপনার পর্যাপ্ত কয়েন নেই!  কল করতে কমপক্ষে ২০ কয়েন লাগবে। ");
      return;
    }
    updatedCoin = updatedCoin - 20;
    document.getElementById("coin").innerText = updatedCoin;
  });
}

//clear history
const clear = getById("clear");
clear.addEventListener("click", function () {
  const clearMe = document.getElementById("history-container");
  clearMe.style.display = "none";
});

//copy text
//function
function copy(id, copy) {
  const pressCopy = getById(id);
  pressCopy.addEventListener("click", function () {
    let text = document.getElementById(copy).innerText;
    let input = document.createElement("input");
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    alert("নম্বর কপি হয়েছে: " + text);

    //copy count
    let copyCount = getInnerText("copy");
    copyCount++;
    document.getElementById("copy").innerText = copyCount;
  });
}

// get copy by function
copy("copy-btn-emergency", "hot-number-emergency");
copy("copy-btn-police", "hot_number_police");
copy("copy-btn-fire", "hot_number_fire");
copy("copy-btn-ambulance", "hot_number_ambulance");
copy("copy-btn-child", "hot_number_child");
copy("copy-btn-anti", "hot_number_anti");
copy("copy-btn-electricity", "hot_number_electricity");
copy("copy-btn-brac", "hot_number_brac");
copy("copy-btn-railway", "hot_number_railway");
