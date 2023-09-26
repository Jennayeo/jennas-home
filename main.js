import "./scroll-timeline.js";
import "./airplane.js";
import "./hello.js";
import "./gallery.js";
import "./track.js";
import "./carrer.js";
import "./education.js";
import "./modal.js";

document.body.animate(
  [
    // { backgroundColor: "midnightblue" },
    // { backgroundColor: "dodgerblue" },
    { backgroundColor: "#304752" },
    // { backgroundColor: "#F05454" },

    { backgroundColor: "coral" },
  ],
  {
    fill: "both",
    timeline: new ScrollTimeline({
      scrollOffsets: [
        { target: document.body, edge: "start", threshold: 1 },
        { target: document.body, edge: "end", threshold: 1 },
      ],
    }),
  }
);
var copyText = document.getElementById("copyItem");

copyText.onclick = function () {
  navigator.clipboard
    .writeText("jenna.jiyoung.yeo@gmail.com")
    .then(() => {
      // Success callback
      alert("이메일이 복사되었습니다!");
    })
    .catch((error) => {
      // Error callback
      console.error("Error copying to clipboard:", error);
    });
};
//
