function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesElementDate = losAngelesElement.querySelector(".date");
    let losAngelesElementTime = losAngelesElement.querySelector(".time");
    losAngelesTime = moment().tz("America/Los_Angeles");
    losAngelesElementDate.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesElementTime.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>] A [</small>]"
    );
  }

  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisElementDate = parisElement.querySelector(".date");
    let parisElementTime = parisElement.querySelector(".time");
    parisTime = moment().tz("Europe/Paris");
    parisElementDate.innerHTML = parisTime.format("MMMM Do YYYY");
    parisElementTime.innerHTML = parisTime.format(
      "h:mm:ss [<small>] A [</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let cityInfo = document.querySelector("#cities");
  cityInfo.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}🇺🇸</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss [<small>] A [</small>]"
          )} </div>
        </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citySelect = document.querySelector("#query-city");
citySelect.addEventListener("change", updateCity);
