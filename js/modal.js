// import "./carousel.js";
// import "./carousel.js";

const btn1 = document.getElementById("project1");
const btn2 = document.getElementById("project2");
const btn3 = document.getElementById("project3");
const btn4 = document.getElementById("project4");
const btn5 = document.getElementById("project5");
const btn6 = document.getElementById("project6");

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
let currentIndex = 0;

btn1.onclick = function () {
  modal.style.display = "block";
  modal.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
  modalBody.style.display = "flex";

  window.scrollTo({ top: 30 * unit, left: 0, behavior: "smooth" });
  modalBody.innerHTML += `<div><h1>weShareTennis!</h1><p><img src="/images/projects/weShare.png"/></p></div><div><p><span style="background:#E74C3C">Next.js</span><span style="background:#F1C40F">Typescript</span><span style="background:#1ABC9C">SCSS</span><span style="background:#3498DB">ESLint, Prettier</span><span style="background:#9B59B6">SWR</span><span style="background:#2E4053">Lighthouse</span><span style="background:#A04000">Vercel</span><span style="background:#148F77">git</span></p><p><span>Naver Map Api를 사용하였고 서울시 공공API를 활용해 테니스 코트 데이터를 불러오고있습니다.
  현재는 공립 코트의 예약 가능, 불가능 여부만 확인이 가능하며
  추후 사립 코트와 무인 볼머신 코트 데이터 추가, 카테고리별 확인 기능 그리고 유저들 간의 소통이 가능하도록 디벨롭 예정입니다.</span></p><p><a href="https://wesharetennis.vercel.app/"><img src="./images/link.png"/>바로가기</a><a href="https://github.com/Jennayeo/weShare"><img src="./images/github.png"/>Github</a></p></div>`;
  document.getElementsByClassName("tag").style.background = random_color;
};

btn2.onclick = function () {
  modal.style.display = "block";
  modal.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
  modalBody.style.display = "flex";
  window.scrollTo({ top: 30 * unit, left: 0, behavior: "smooth" });

  modalBody.innerHTML += `<div><h1>🏔️ 등산은산타Santa</h1><p><img src="/images/projects/santa.png"/></p></div><div><p><span style="background:#E74C3C">React.js</span><span style="background:#F1C40F">Redux</span><span style="background:#1ABC9C">Styled-component</span><span style="background:#3498DB">ESLint, Prettier</span><span style="background:#9B59B6">Create React App</span><span style="background:#2E4053">AWS S3</span><span style="background:#A04000">Figma</span><span style="background:#148F77">git</span><span style="background:#FF9AFF">반응형</span></p><p><span>SANTA는 혼자서는 가기는 애매하고, 지인들은 바빠서 등산을 망설이시는 분들을 위한 등산메이트를 구할 수 있는 서비스입니다!
  </span></p><p><a href="https://github.com/Jennayeo/weShare"><img src="./images/link.png"/>바로가기</a><a href="https://github.com/Jennayeo/weShare"><img src="./images/github.png"/>Github</a></p></div>`;
};
btn3.onclick = function () {
  modal.style.display = "block";
  modal.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
  modalBody.style.display = "block";

  modalBody.innerHTML += `<div><h1>차량 관제 관리자 페이지-1</h1><div class="carousel-container">
  <button class="next-button"><img id="next" class="arrow-icon" src="./images/icons/arrow.png"/></button><div class="carousel"><img class="carousel-slide" src="/images/projects/fms-biz-staff2.png"/><img class="carousel-slide" src="/images/projects/fms-biz-staff3.png"/><img class="carousel-slide" src="/images/projects/fms-biz-staff1.png"/></div></div></div><div class="carousel-text"><p><span style="background:#E74C3C">React.js</span><span style="background:#F1C40F">Typescript</span><span style="background:#1ABC9C">React Hooks</span><span style="background:#3498DB">ESLint, Prettier</span><span style="background:#9B59B6">Create React App</span><span style="background:#A04000">Figma</span><span style="background:#148F77">git</span></p><span>법인 차량 관제 서비스 스태프 페이지로 회사에서 직원들이 빌린 법인 차량, 예약, 회원 관리 그리고
  차량 데이터를 확인 할 수있는 서비스입니다.

  </span></div>`;
  window.scrollTo({ top: 36 * unit, left: 0, behavior: "smooth" });

  if (modalBody.classList.contains("check")) {
    return;
  } else {
    modalBody.addEventListener("click", (e) => {
      // console.log("click", onClickNext);
      modalBody.classList.add("check");
      onClickNext(modalBody, e);
    });
  }
};
btn4.onclick = function () {
  modal.style.display = "block";
  modal.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
  modalBody.style.display = "block";

  modalBody.innerHTML += `<div><h1>차량 관제 관리자 페이지-2</h1><div class="carousel-container">
  <button class="next-button" ><img id="next" class="arrow-icon" src="./images/icons/arrow.png"/></button><div class="carousel"><img class="carousel-slide" src="/images/projects/fms-staff1.png"/><img class="carousel-slide" src="/images/projects/fms-staff2.png"/><img class="carousel-slide" src="/images/projects/fms-web2.png"/></div></div></div><div class="carousel-text"><p><span style="background:#E74C3C">React.js</span><span style="background:#F1C40F">Class Component</span><span style="background:#1ABC9C">CSS</span><span style="background:#3498DB">ESLint, Prettier</span><span style="background:#9B59B6">Chart.js</span><span style="background:#A04000">Figma</span><span style="background:#148F77">git</span></p><p><span>차량 관제 서비스 스태프 페이지로 주로 테이블 작업과, chart.js를 사용한 
  데쉬보드와 카카오 맵 api를 사용한 지도 작업을 진행하였습니다.
  </span></p></div>`;
  window.scrollTo({ top: 33 * unit, left: 0, behavior: "smooth" });

  if (modalBody.classList.contains("check")) {
    return;
  } else {
    modalBody.addEventListener("click", (e) => {
      modalBody.classList.add("check");
      onClickNext(modalBody, e);
    });
  }
};
btn5.onclick = function () {
  modal.style.display = "block";
  modal.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
  modalBody.style.display = "flex";

  modalBody.innerHTML += `<div><h1>차량 관제 웹앱</h1><p><img src="/images/projects/fms-business.png"/></p></div><div><p><span style="background:#E74C3C">React.js</span><span style="background:#F1C40F">Typescript</span><span style="background:#1ABC9C">React Hooks</span><span style="background:#3498DB">ESLint, Prettier</span><span style="background:#9B59B6">Create React App</span><span style="background:#A04000">Figma</span><span style="background:#148F77">git</span></p><span>법인 차량 렌탈 서비스로 회사 직원들이 차량을 쉽게 빌리고 반납 할 수있도록 그리고 회사 측에선
  회사의 자산인 차량을 관리 할 수있도록 만든 서비스입니다.<p>•프론트 개발 인원: 2</p> <p> •개발기간+QA, 보수기간: 3개월</p> <p>•주업무: 로그인, 마이페이지 등 코어파트 담당</p>

        </span></span></div>`;
  window.scrollTo({ top: 32 * unit, left: 0, behavior: "smooth" });
};

btn6.onclick = function () {
  modal.style.display = "block";
  modal.style.backgroundColor = "rgba(0, 0, 0, 0.4)";
  modalBody.style.display = "block";

  modalBody.innerHTML += `<div><h1>개인 포트폴리오 version 1.0</h1><div class="carousel-container">
  <button class="next-button" ><img id="next" class="arrow-icon" src="./images/icons/arrow.png"/></button><div class="carousel"><img class="carousel-slide" src="/images/projects/portfolio1.png"/><img class="carousel-slide" src="/images/projects/portfolio2.png"/><img class="carousel-slide" src="/images/projects/portfolio3.png"/></div></div></div><div class="carousel-text"><p><span style="background:#E74C3C">React.js</span><span style="background:#F1C40F">Typescript</span><span style="background:#1ABC9C">Next.js</span><span style="background:#3498DB">Tailwind CSS</span><span style="background:#9B59B6">ESLint, Prettier</span><span style="background:#A04000">Vercel</span><span style="background:#2E4053">Notion Api</span><span style="background:#148F77">git</span></p><p><span>next.js와 tailwind css를 사용해보고싶어 가볍게 만들어 본 포트폴리오 프로젝트입니다. 노션API를 활용하여 DB를 연동하였고, Vercel을 이용하여 배포하였습니다. 현재는 version2.0으로 리뉴얼되었습니다.
  </span></p></div>`;
  window.scrollTo({ top: 33 * unit, left: 0, behavior: "smooth" });

  if (modalBody.classList.contains("check")) {
    return;
  } else {
    modalBody.addEventListener("click", (e) => {
      modalBody.classList.add("check");
      onClickNext(modalBody, e);
    });
  }
};

closeBtn.onclick = function () {
  modal.style.display = "none";
  modalBody.innerHTML = ``;
  gallery.style.display = "block";
  modalBody.removeEventListener("click", clickHandler);
  currentIndex = 0;
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    modalBody.innerHTML = ``;
    gallery.style.display = "block";
    currentIndex = 0;
  }
};

function onClickNext(modalBody, e) {
  const carousel = document.querySelector(".carousel");
  const slides = document.querySelectorAll(".carousel-slide");
  function showSlide(index) {
    carousel.style.transform = `translateX(-${index * 100}%)`;
  }

  if (e.target.id == "next") {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }
  showSlide(currentIndex);
}
