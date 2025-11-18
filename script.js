// Tabs

function showTab(e){
  document.querySelectorAll('.nav button').forEach(b=>b.classList.remove('active'));
  e.currentTarget.classList.add('active');

  const target = e.currentTarget.dataset.target;
  document.querySelectorAll('main section').forEach(s=>s.classList.remove('active'));
  document.getElementById(target).classList.add('active');

  window.scrollTo({top:0,behavior:'smooth'});
}

let currentImgs = [];
let currentIndex = 0;

const projects = [
  { 
    title:'Project One', 
    imgs:['project1.png'], 
    desc:'eコマース向けUI刷新プロジェクト'
  },
  { 
    title:'Brand Identity', 
    imgs:['menu/project2.jpg','menu/pro1.jpg'], 
    desc:'中小企業のCI/VI制作'
  },
  { 
    title:'Mobile App UX', 
    imgs:['youth/sticker.jpg', 'youth/mockup.jpg', 'youth/abc.jpg'], 
    desc:'予約アプリのUX改善'
  }
];

function openModal(i){
  const p = projects[i];

  currentImgs = p.imgs;
  currentIndex = 0;

  document.getElementById('modalImg').src = currentImgs[currentIndex];
  document.getElementById('modalTitle').textContent = p.title;
  document.getElementById('modalDesc').textContent = p.desc;

  document.getElementById('modal').classList.add('open');
}

function nextImg(){
  currentIndex = (currentIndex + 1) % currentImgs.length;
  document.getElementById('modalImg').src = currentImgs[currentIndex];
}

function prevImg(){
  currentIndex = (currentIndex - 1 + currentImgs.length) % currentImgs.length;
  document.getElementById('modalImg').src = currentImgs[currentIndex];
}

function closeModal(){
  document.getElementById('modal').classList.remove('open');
}


function sendForm(e){
  e.preventDefault();

  const form = e.target;

  alert(
    "デモ送信:\n" +
    form.name.value + "\n" +
    form.email.value + "\n" +
    form.message.value
  );

  form.reset();
}
