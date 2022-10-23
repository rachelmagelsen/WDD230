const speed = parseInt(document.getElementById("speed").textContent);
const temp = parseInt(document.getElementById("temp").textContent);

if (temp <= 50 && speed > 3.0) {
  const windchill =
    35.74 +
    0.6215 * temp -
    35.75 * Math.pow(speed, 0.16) +
    0.42756 * temp * Math.pow(speed, 0.16);
    document.getElementById("windchill").innerHTML =
    Math.round(windchill);
} else {
  document.getElementById("windchill").innerHTML = "N/A";
}