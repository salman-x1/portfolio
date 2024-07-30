const darkMode = () => {
  const themeToggleBtns = document.querySelectorAll("#theme-toggle");
  //   State
  const theme = localStorage.getItem("theme");
  // On mount
  theme && document.body.classList.add(theme);

  // Handlers
  const handleThemeToggle = () => {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
      localStorage.setItem("Theme", "light-mode");
    } else {
      localStorage.removeItem("Theme");
      document.body.removeAttribute("class");
    }
  };

  themeToggleBtns.forEach((btn) => {
    btn.addEventListener("click", handleThemeToggle);
  });
};
export default darkMode;
