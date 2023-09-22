// import "./carousel.js";
import "./carousel.js";

const btn1 = document.getElementById("project1");
const btn2 = document.getElementById("project2");
const btn3 = document.getElementById("project3");
const btn4 = document.getElementById("project4");
const btn5 = document.getElementById("project5");

const modalOuter = document.querySelector(".modal");

const modal = document.getElementById("modalWrap");
const closeBtn = document.getElementById("closeBtn");
const body = document.getElementById("body");
const modalBody = document.getElementById("content");
const gallery = document.querySelector(".gallery");
const modalHeight = document.getElementById("modalBody");

const colors = ["#ff0000", "#E74C3C", "#1ABC9C"];
const random_color = colors[Math.floor(Math.random() * colors.length)];
let unit = document.documentElement.scrollHeight / 100;
let modalBodyHeight = modalHeight.offsetHeight;

// const wrap = document.getElementsById("wrap");

// const galleryTimelineElem = document.querySelector(".gallery-timeline");
// const gallery = document.querySelector(".gallery");

// modal.animate(
//   [
//     { opacity: 0, transform: "scale(0.5)", offset: 0 },
//     { opacity: 0, transform: "scale(0.5)", offset: 0.17 },
//     { opacity: 1, transform: "scale(1.2)", offset: 0.2 },
//     { transform: "scale(1)", offset: 0.3 },
//   ],
//   {
//     duration: 1,
//     fill: "both",
//     timeline: new ScrollTimeline({
//       scrollOffsets: [
//         { target: modalOuter, edge: "start", threshold: 1 },
//         { target: modalOuter, edge: "end", threshold: 1 },
//       ],
//     }),
//   }
// );

btn1.onclick = function () {
  modal.style.display = "block";
  //   gallery.style.display = "none";
  wrap.style.backgroundColor = "rgba(0, 0, 0, 0.4)";

  window.scrollTo({ top: 30 * unit, left: 0, behavior: "smooth" });
  console.log(document.documentElement.scrollHeight, modalBodyHeight);
  modalBody.innerHTML += `<div><h1>weShareTennis!</h1><p><img src="/images/projects/weShare.png"/></p></div><div><p><span style="background:#E74C3C">Next.js</span><span style="background:#F1C40F">Typescript</span><span style="background:#1ABC9C">SCSS</span><span style="background:#3498DB">ESLint, Prettier</span><span style="background:#9B59B6">SWR</span><span style="background:#2E4053">Lighthouse</span><span style="background:#A04000">Vercel</span><span style="background:#148F77">git</span></p><p><span>Naver Map Api를 사용하였고 서울시 공공API를 활용해 테니스 코트 데이터를 불러오고있습니다.
  현재는 공립 코트의 예약 가능, 불가능 여부만 확인이 가능하며
  추후 사립 코트와 무인 볼머신 코트 데이터 추가, 카테고리별 확인 기능 그리고 유저들 간의 소통이 가능하도록 디벨롭 예정입니다.</span></p><p><a href="https://github.com/Jennayeo/weShare"><img src="./images/link.png"/>바로가기</a><a href="https://github.com/Jennayeo/weShare"><img src="./images/github.png"/>Github</a></p></div>`;
  //   gallery.innerHTML += modalBody.innerHTML;
  document.getElementsByClassName("tag").style.background = random_color;
  //   gallery.style.display = "none";
};
btn2.onclick = function () {
  //   const carousel = document.querySelector(".carousel");
  //   console.log(carousel);
  modal.style.display = "block";
  wrap.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
  //   modalBody.innerHTML += `<div><h1>등산은산타!</h1><div class="carousel-container"><button class="prev-button">Previous</button>
  //   <button class="next-button">Next</button><p class="carousel"><img class="carousel-slide" src="/images/projects/santa1.png"/><img class="carousel-slide" src="/images/projects/santa2.png"/></p></div></div><div><p><span style="background:#E74C3C">React.js</span><span style="background:#F1C40F">Redux</span><span style="background:#1ABC9C">Styled-component</span><span style="background:#3498DB">ESLint, Prettier</span><span style="background:#9B59B6">Create React App</span><span style="background:#2E4053">AWS S3</span><span style="background:#A04000">Figma</span><span style="background:#148F77">git</span></p><p><span>SANTA는 혼자서는 가기는 애매하고, 지인들은 바빠서 등산을 망설이시는 분들을 위한 등산메이트를 구할 수 있는 서비스입니다!

  //   </span></p><p><a href="https://github.com/Seobe95/SANTA"><img src="./images/github.png"/>Github</a></p></</div>`;

  modalBody.innerHTML += `<div><h1>등산은산타!</h1><div class="carousel-container">
  <button class="next-button" id="next" ><img id="next" class="arrow-icon" src="./images/icons/arrow.png"/></button><div class="carousel"><img class="carousel-slide" src="/images/projects/santa1.png"/><img class="carousel-slide" src="/images/projects/santa2.png"/></div></div></div><div><p><span style="background:#E74C3C">React.js</span><span style="background:#F1C40F">Redux</span><span style="background:#1ABC9C">Styled-component</span><span style="background:#3498DB">ESLint, Prettier</span><span style="background:#9B59B6">Create React App</span><span style="background:#2E4053">AWS S3</span><span style="background:#A04000">Figma</span><span style="background:#148F77">git</span></p><p><span>SANTA는 혼자서는 가기는 애매하고, 지인들은 바빠서 등산을 망설이시는 분들을 위한 등산메이트를 구할 수 있는 서비스입니다!

  </span></p><p><a href="https://github.com/Seobe95/SANTA"><img src="./images/github.png"/>Github</a></p></div>`;
  modalBody.addEventListener("click", (e) => {
    onClickNext(modalBody, e);
  });

  document.getElementsByClassName("tag").style.background = random_color;
};
btn3.onclick = function () {
  modal.style.display = "block";
  wrap.style.backgroundColor = "rgba(0, 0, 0, 0.4)";

  modalBody.innerHTML += `<div><h1>차량 관제 관리자 페이지-1</h1><div class="carousel-container">
  <button class="next-button" id="next" ><img id="next" class="arrow-icon" src="./images/icons/arrow.png"/></button><div class="carousel"><img class="carousel-slide" src="/images/projects/fms-biz-staff2.png"/><img class="carousel-slide" src="/images/projects/fms-biz-staff3.png"/></div></div></div><div><p><span style="background:#E74C3C">React.js</span><span style="background:#F1C40F">Redux</span><span style="background:#1ABC9C">Styled-component</span><span style="background:#3498DB">ESLint, Prettier</span><span style="background:#9B59B6">Create React App</span><span style="background:#2E4053">AWS S3</span><span style="background:#A04000">Figma</span><span style="background:#148F77">git</span></p><p><span>SANTA는 혼자서는 가기는 애매하고, 지인들은 바빠서 등산을 망설이시는 분들을 위한 등산메이트를 구할 수 있는 서비스입니다!

  </span></p><p><a href="https://github.com/Seobe95/SANTA"><img src="./images/github.png"/>Github</a></p></div>`;

  modalBody.addEventListener("click", (e) => {
    onClickNext(modalBody, e);
  });

  // modalBody.innerHTML += `<div><h1>차량 관제 관리자 페이지-1</h1><p><img src="/images/projects/fms-biz-staff2.png"/></p></div><div><p><span style="background:#E74C3C">React.js</span><span style="background:#F1C40F">Typescript</span><span style="background:#1ABC9C">React Hooks</span><span style="background:#3498DB">ESLint, Prettier</span><span style="background:#9B59B6">Create React App</span><span style="background:#A04000">Figma</span><span style="background:#148F77">git</span></p><p><span>SANTA는 혼자서는 가기는 애매하고, 지인들은 바빠서 등산을 망설이시는 분들을 위한 등산메이트를 구할 수 있는 서비스입니다!

  //   </span></p><p><a href="https://github.com/Seobe95/SANTA"><img src="./images/github.png"/>Github</a></p></div>`;
  document.getElementsByClassName("tag").style.background = random_color;
};
btn4.onclick = function () {
  modal.style.display = "block";
  wrap.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
  modalBody.innerHTML += `<div><h1>차량 관제 관리자 페이지-2</h1><div class="carousel-container">
  <button class="next-button" id="next" ><img id="next" class="arrow-icon" src="./images/icons/arrow.png"/></button><div class="carousel"><img class="carousel-slide" src="/images/projects/fms-staff1.png"/><img class="carousel-slide" src="/images/projects/fms-staff2.png"/></div></div></div><div><p><span style="background:#E74C3C">React.js</span><span style="background:#F1C40F">Redux</span><span style="background:#1ABC9C">Styled-component</span><span style="background:#3498DB">ESLint, Prettier</span><span style="background:#9B59B6">Create React App</span><span style="background:#2E4053">AWS S3</span><span style="background:#A04000">Figma</span><span style="background:#148F77">git</span></p><p><span>SANTA는 혼자서는 가기는 애매하고, 지인들은 바빠서 등산을 망설이시는 분들을 위한 등산메이트를 구할 수 있는 서비스입니다!

  </span></p><p><a href="https://github.com/Seobe95/SANTA"><img src="./images/github.png"/>Github</a></p></div>`;

  modalBody.addEventListener("click", (e) => {
    onClickNext(modalBody, e);
  });

  // modalBody.innerHTML += `<div><h1>차량 관제 관리자 페이지-2</h1><p><img src="/images/projects/fms-staff1.png"/></p></div><div><p><span style="background:#E74C3C">React.js</span><span style="background:#F1C40F">Class Component</span><span style="background:#1ABC9C">Chart.js</span><span style="background:#3498DB">ESLint, Prettier</span><span style="background:#9B59B6">Semantic UI</span><span style="background:#A04000">Figma</span><span style="background:#148F77">git</span></p><p><span>SANTA는 혼자서는 가기는 애매하고, 지인들은 바빠서 등산을 망설이시는 분들을 위한 등산메이트를 구할 수 있는 서비스입니다!

  //     </span></p><p><a href="https://github.com/Seobe95/SANTA"><img src="./images/github.png"/>Github</a></p></div>`;
  document.getElementsByClassName("tag").style.background = random_color;
};
btn5.onclick = function () {
  modal.style.display = "block";
  wrap.style.backgroundColor = "rgba(0, 0, 0, 0.4)";

  modalBody.innerHTML += `<div><h1>차량 관제 웹앱</h1><p><img src="/images/projects/fms-business.png"/></p></div><div><p><span style="background:#E74C3C">React.js</span><span style="background:#F1C40F">Typescript</span><span style="background:#1ABC9C">React Hooks</span><span style="background:#3498DB">ESLint, Prettier</span><span style="background:#9B59B6">Create React App</span><span style="background:#A04000">Figma</span><span style="background:#148F77">git</span></p><p><span>SANTA는 혼자서는 가기는 애매하고, 지인들은 바빠서 등산을 망설이시는 분들을 위한 등산메이트를 구할 수 있는 서비스입니다!

        </span></p><p><a href="https://github.com/Seobe95/SANTA"><img src="./images/github.png"/>Github</a></p></div>`;
  document.getElementsByClassName("tag").style.background = random_color;
};
closeBtn.onclick = function () {
  modal.style.display = "none";
  modalBody.innerHTML = ``;
  gallery.style.display = "block";

  //   body.style.overflow = "auto";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    modalBody.innerHTML = ``;
    gallery.style.display = "block";
  }
};
let currentIndex = 0;

function onClickNext(modalBody, e) {
  const carousel = document.querySelector(".carousel");
  const slides = document.querySelectorAll(".carousel-slide");
  // const prevButton = document.querySelector(".prev-button");
  // const nextButton = document.querySelector(".next-button");

  function showSlide(index) {
    carousel.style.transform = `translateX(-${index * 100}%)`;
  }

  console.log(e.target);
  if (e.target.id == "next") {
    console.log(slides.length);
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
    console.log(currentIndex);
  } else if (e.target.textContent == "Previous") {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
    console.log(currentIndex);
  }
  showSlide(currentIndex);

  //   currentIndex = (currentIndex + 1) % slides.length;
  //   showSlide(currentIndex);
  //   document.getElementById("Test").removeChild(document.getElementById(tag.getAttribute("id")));
}
// switch(modalOuter.className) {
//     case ('modal project1') {
//         console.log('yes');
//     }
// }
