const jenna = document.querySelector(".jenna-emoji");
const airplaneScrollTimeline = document.querySelector(
  ".airplane-scroll-timeline"
);
const career = document.querySelector(".text-block-career");

jenna.animate(
  [
    { offsetDistance: "100%", offset: 0 },
    { offsetDistance: "47%", offset: 0.4 },
    { offsetDistance: "47%", offset: 0.58 },
    { offsetDistance: "0%", offset: 1 },
  ],
  {
    fill: "both",
    timeline: new ScrollTimeline({
      scrollOffsets: [
        { target: airplaneScrollTimeline, edge: "start", threshold: 1 },
        { target: airplaneScrollTimeline, edge: "end", threshold: 1 },
      ],
    }),
  }
);

// 스크롤
let prevScrollY = -1; // 처음 스크롤 할 때 오락가락 방지
let scrollFlag;
window.addEventListener("scroll", (e) => {
  if (scrollFlag) return;

  scrollFlag = true;

  setTimeout(() => {
    scrollFlag = false;

    if (window.scrollY >= prevScrollY) {
      // console.log("down");
      //   console.log(career);
      jenna.dataset.direction = "down";
    } else {
      // console.log("up");
      jenna.dataset.direction = "up";
    }
    prevScrollY = window.scrollY;
  }, 100);
});
