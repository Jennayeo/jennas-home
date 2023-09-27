const career = document.querySelector(".text-block-career");
const fadeOut = document.querySelector(".text-block-career-active");

const airplaneScrollTimeline = document.querySelector(
  ".airplane-scroll-timeline"
);

// Define the options for the Intersection Observer
const options = {
  root: null, // Use the viewport as the root
  rootMargin: "0px", // No margin
  threshold: 0.9, // Trigger when 20% of the element is visible
};

// Callback function to handle the intersection
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Check if the element is entering or leaving the viewport
      const isEnteringViewport = entry.boundingClientRect.top >= 0;
      // Add or remove the appropriate class based on scrolling direction
      if (isEnteringViewport) {
        entry.target.classList.add("text-block-career-active");
      } else {
        // entry.target.classList.remove("text-block-career-active");
      }

      // Once the animation is complete, remove the observer to save resources
      observer.unobserve(entry.target);
    }
  });
}
// Create an Intersection Observer
const observer = new IntersectionObserver(handleIntersection, options);

observer.observe(career);
