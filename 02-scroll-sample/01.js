import "./scroll-timeline.js";

const airplane = document.querySelector(".airplane");
const airplaneScrollTimeline = document.querySelector(
  ".airplane-scroll-timeline"
);

airplane.animate([{ offsetDistance: "100%" }, { offsetDistance: "0%" }], {
  fill: "both", // 애니메이션 대기 시점에 offsetDistance 적용
  timeline: new ScrollTimeline({
    scrollOffsets: [
      { target: airplaneScrollTimeline, edge: "start", threshold: 1 },
      { target: airplaneScrollTimeline, edge: "end", threshold: 1 },
    ],
  }),
});
