function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")

  html.classList.toggle("light")
  html.classList.contains("light")
    ? img.setAttribute("src", "./assets/avatar.jpeg")
    : img.setAttribute("src", "./assets/avatar-bw.jpeg")
}
