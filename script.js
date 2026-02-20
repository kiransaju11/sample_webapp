let count = 0;

function increaseCount() {
    count++;
    document.getElementById("counter").innerText = count;

    document.body.style.backgroundColor =
        "hsl(" + (count * 30 % 360) + ", 70%, 20%)";
}
