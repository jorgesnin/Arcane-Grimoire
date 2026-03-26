export default {
  mounted(el) {
    el.style.transition = "all 0.25s ease"

    el.addEventListener("mouseenter", () => {
      el.style.boxShadow = "0 0 12px rgba(251, 191, 36, 0.25)"
      el.style.transform = "translateY(-2px)"
    })

    el.addEventListener("mouseleave", () => {
      el.style.boxShadow = "0 0 0 rgba(0,0,0,0)"
      el.style.transform = "translateY(0)"
    })
  }
}