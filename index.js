const textSection = document.querySelector(".text2");
const domains = [
  "Student",
  "Computer Engineer",
  "Full Stack Developer",
  "Android Developer",
];

var domainCnt = 0;
var domainLengthCnt = 0;

const hideFromEnd = () => {
  var str = domains[domainCnt].substring(0, domainLengthCnt);
  str += "_";
  textSection.innerHTML = str;

  if (domainLengthCnt >= 0) {
    domainLengthCnt--;
    setTimeout("hideFromEnd()", 150);
  } else {
    if (domainCnt < domains.length - 1) domainCnt++;
    else domainCnt = 0;
    setTimeout("displayFromStart()", 150);
  }
};

const displayFromStart = () => {
  var str = domains[domainCnt].substring(0, domainLengthCnt);
  str += "_";
  textSection.innerHTML = str;
  if (domainLengthCnt < domains[domainCnt].length) {
    domainLengthCnt++;
    setTimeout("displayFromStart()", 150);
  } else if (domainLengthCnt >= 0) {
    hideFromEnd();
  }
};

window.addEventListener("load", (e) => {
  displayFromStart();
});

/*
const changeText = () => {
  textSection.innerText = domains[domainCnt];
  if (domainCnt < domains.length - 1) domainCnt++;
  else domainCnt = 0;
  setTimeout("changeText()", 1000);
};

*/
