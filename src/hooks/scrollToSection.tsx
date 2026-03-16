function scrollToSection(section_id: string) {
  const section = document.getElementById(section_id);
  if (!section) return;

  setTimeout(() => {
    section.scrollIntoView({
      behavior: "smooth",
    });
  });
}

export default scrollToSection;
