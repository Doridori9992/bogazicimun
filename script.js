(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "11/28/",
        birthday = dayMonth + yyyy;
    
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end
    
    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime(),
                distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
        }, 0)
    }());






    document.addEventListener('DOMContentLoaded', () => {
      var toDayFromNow = (new Date("Dec 31, 2024 23:59:59").getTime() / 1000) + (3600 / 60 / 60 / 24) - 1;
      var flipdown = new FlipDown(toDayFromNow)
  
      .start()
      .ifEnded(() => {
          document.querySelector(".flipdown").innerHTML = `<h2>Timer is ended</h2>`;
      });
  });