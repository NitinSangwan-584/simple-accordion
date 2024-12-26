document.addEventListener("DOMContentLoaded", () => {
    const accordionHeaders = document.querySelectorAll(".accordion-header");
  
    accordionHeaders.forEach(header => {
      header.addEventListener("click", () => {
        const currentContent = header.nextElementSibling;
  
        // Close all other accordion sections
        document.querySelectorAll(".accordion-content").forEach(content => {
          if (content !== currentContent) {
            content.style.display = "none";
          }
        });
  
        // Toggle the current accordion section
        currentContent.style.display =
          currentContent.style.display === "block" ? "none" : "block";
      });
    });
  });
  