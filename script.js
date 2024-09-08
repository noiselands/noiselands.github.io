document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const timeDisplay = document.getElementById("current-time");
    const amPmDisplay = document.getElementById("am-pm");

    updateTime();

    body.addEventListener("click", function () {
        toggleColors();
    });

    function toggleColors() {
        if (body.style.backgroundColor === "rgb(35, 109, 158)") {
            body.style.backgroundColor = "#cf8b1f";
        } else {
            body.style.backgroundColor = "#236d9e";
        }
    }

    function updateTime() {
        const currentTime = new Date();
        const day = currentTime.getDay();
        const hours = currentTime.getHours()
        const hours12 = hours % 12 || 12;
        const minutes = currentTime.getMinutes();
        const amPm = hours >= 12 ? 'pm' : 'am';
        const formattedTime = `${hours12}:${minutes < 10 ? '0' : ''}${minutes}`;

        if (day === 0 || day === 6) {
            if (hours === 7 && minutes === 30) {
                body.style.backgroundColor = "#cf8b1f";
            }
        }
        else if (hours === 7) {
            body.style.backgroundColor = "#cf8b1f";
        }

        timeDisplay.textContent = formattedTime;
        amPmDisplay.textContent = amPm;

        setTimeout(updateTime, 1000);
    }
});
