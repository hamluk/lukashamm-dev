function scrollToSection(section_id: string) {
  const section = document.getElementById(section_id);
  const header = document.getElementById("header");

  if (!section || !header) return;

  const headerHeight = header.clientHeight;

  const elementPosition = section.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({
    top: elementPosition - headerHeight,
    behavior: "smooth",
  });

  setTimeout(() => {
    const newElementPosition =
      section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: newElementPosition - headerHeight,
      behavior: "smooth",
    });
  }, 40);
}

export default scrollToSection;
