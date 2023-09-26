// const galleryTimelineElem = document.querySelector(".gallery-timeline");
const gallery = document.querySelector(".gallery");

// gallery.animate(
//   [
//     { opacity: 0, offset: 0 },
//     { opacity: 1, offset: 0.04 },
//     { transform: "translateX(0)", offset: 0.1 },
//     { transform: "translateX(calc(-100% + 100vw)", offset: 0.9 },
//     { opacity: 1, offset: 0.96 },
//     { opacity: 0, transform: "translateX(calc(-100% + 100vw)", offset: 1 },
//   ],
//   {
//     duration: 1,
//     fill: "both",
//     timeline: new ScrollTimeline({
//       scrollOffsets: [
//         { target: galleryTimelineElem, edge: "start", threshold: 1 },
//         { target: galleryTimelineElem, edge: "end", threshold: 1 },
//       ],
//     }),
//   }
// );

const airplaneScrollTimeline = document.querySelector(
  ".airplane-scroll-timeline"
);

// Define the options for the Intersection Observer
const options = {
  root: null, // Use the viewport as the root
  rootMargin: "0px", // No margin
  threshold: 0.6, // Trigger when 20% of the element is visible
};

// Callback function to handle the intersection
function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Check if the element is entering or leaving the viewport
      const isEnteringViewport = entry.boundingClientRect.top >= 0;
      console.log(isEnteringViewport);
      // Add or remove the appropriate class based on scrolling direction
      if (isEnteringViewport) {
        entry.target.classList.add("gallery-active");
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
observer.observe(gallery);
// });
