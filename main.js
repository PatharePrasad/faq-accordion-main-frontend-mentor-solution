(function () {
    "use strict";
    const faqAccordion = document.querySelectorAll(".faq-group-header h4");
    const faqAccordionIcon = document.querySelectorAll(".faq-group-header img");
    const faqAccordionContent = document.querySelectorAll(".faq-group-content");
  
    const toggleAccordion = (index) => {
      // Close all accordions
      faqAccordionContent.forEach((content, contentIndex) => {
        if (contentIndex !== index) {
          content.classList.remove("collapsing");
          faqAccordionIcon[contentIndex].classList.remove("collapsing-img");
        }
      });
  
      // Toggle the clicked accordion
      faqAccordionContent[index].classList.toggle("collapsing");
      faqAccordionIcon[index].classList.toggle("collapsing-img");
    };
  
    faqAccordion.forEach((item, index) => {
      item.addEventListener("click", () => toggleAccordion(index));
    });
  
    faqAccordionIcon.forEach((item, index) => {
      item.addEventListener("click", () => toggleAccordion(index));
    });
  })();