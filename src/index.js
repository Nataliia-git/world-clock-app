function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesElementDate = losAngelesElement.querySelector(".date");
  let losAngelesElementTime = losAngelesElement.querySelector(".time");
  losAngelesTime = moment().tz("America/Los_Angeles");
  losAngelesElementDate.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesElementTime.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>] A [</small>]"
  );

  let parisElement = document.querySelector("#paris");
  let parisElementDate = parisElement.querySelector(".date");
  let parisElementTime = parisElement.querySelector(".time");
  parisTime = moment().tz("Europe/Paris");
  parisElementDate.innerHTML = parisTime.format("MMMM Do YYYY");
  parisElementTime.innerHTML = parisTime.format(
    "h:mm:ss [<small>] A [</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
