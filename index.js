document.addEventListener("DOMContentLoaded", () => {
  const accordionHeaders = document.querySelectorAll(".accordion-header");
  accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
      const currentContent = header.nextElementSibling;
      document.querySelectorAll(".accordion-content").forEach(content => {
        if (content !== currentContent) {
          content.style.display = "none";
        }
      });
      currentContent.style.display =
        currentContent.style.display === "block" ? "none" : "block";
    });
  });
});
