if (document.getElementById('my-work-link')) {
  document.getElementById('my-work-link').addEventListener('click', () => {
    document.getElementById('my-work-section').scrollIntoView({behavior: "smooth"})
  })
}
if (document.getElementById('my-publication-link')) {
  document.getElementById('my-publication-link').addEventListener('click', () => {
    document.getElementById('my-publication-section').scrollIntoView({behavior: "smooth"})
  })
}
if (document.getElementById('about-me-link')) {
  document.getElementById('about-me-link').addEventListener('click', () => {
    document.getElementById('about-me-section').scrollIntoView({behavior: "smooth"})
  })
}
