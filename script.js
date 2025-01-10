let pop_msg = document.createElement("div");
let pop_btn = document.createElement("button");
const body = document.querySelector("body");

function close_pop() {
  close_btn.remove();
}
setTimeout(() => {
  body.prepend(pop_msg);
  pop_msg.innerHTML = `<div>
        <button onclick="close_pop()">X</button>
        <h2 style="color:darkgoldenrod;font-family:Great Vibes">Get Your's now !</h2>
        <p style="letter-spacing:0.1rem">You can just get your's portfolio in Hand.<br>
        Portfolio will be Ready ASAP.<br>
        We provide the Best of the market Services.<br>
        for </p><h3 style="color:blue;">FREE..!</h3>
        <button id="yes_btn">Try now</button>
        </div>
        <div>
        </div>`;
  pop_msg.classList.add("pop_msg");
}, 25000);

function close_pop() {
  pop_msg.remove();
}

const testimonials = document.querySelector("review_box_parent");
//testimonial
$(document).ready(function () {
  $(".carousel").carousel({
    padding: 500,
  });
  autoplay();
  function autoplay() {
    $(".carousel").carousel("next");
    setTimeout(autoplay, 4500);
  }
});
let prog_Bar = document.querySelector(".progress_bar");

function updateBar() {
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrollTop = document.documentElement.scrollTop;
  const scrollPercent = (scrollTop / scrollHeight) * 100;
  prog_Bar.style.width = scrollPercent + "%";
  if (scrollPercent >= 25) {
    pageTop.style.opacity = 1;
  } else {
    pageTop.style.opacity = 0;
  }
}
window.addEventListener("scroll", updateBar);

let flag = 0;
const menu = document.createElement("div");
function openMenu() {
  menu.innerHTML = `<div class="menuBar">
        <h2>
            Mithlesh Kumar
        </h2>
        <div>
            <a id="join_us_on" href="https://www.linkedin.com/in/mithlesh-kumar-8663b3300/">
                <i class="devicon-linkedin-plain" style="font-size: 2rem;color: #585c5e;"></i>
            </a>
            <a id="join_us_on" href="https://github.com/MithleshKr-Pro">
                <i class="devicon-github-original" style="font-size: 2rem;color: #585c5e;"></i>
            </a>
        </div>
        
        <p>
            Hi There!!
            Myself Mithlesh, I'm currently pursuing Bachelors of Engineering in Computer Science.
            <div class="menuNo">Contact No-9508846629</div>
            <div class="menuMail">E-mail- Coding4u2@gmail.com</div>
        </p>
        <button>
                        <i class="material-icons" style="font-size:24px;color:rgb(27, 76, 209);">cloud_download</i>
        Resume
        </button>
        
    </div>`;
  menu.classList.add("menuBar");
  document.body.append(menu);
  flag = 1;
}

function closeMenu() {
  flag = 0;
  if (menu.parentNode) {
    menu.remove();
  }
}

const btn = document.querySelector(".me1");
btn.addEventListener("click", function () {
  if (flag == 0) {
    btn.addEventListener("click", openMenu());
  } else {
    btn.addEventListener("click", closeMenu());
  }
});

//moving cursor to the top of page
let pageTop = document.querySelector(".pageTop");

pageTop.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
});
