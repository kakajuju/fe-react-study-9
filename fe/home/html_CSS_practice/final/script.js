/* =====================================================
   STEP 12-1. 스크롤하면 헤더 배경 보이기
   - JS는 class만 붙였다 뗐다 하고, 모양은 CSS(.is-scrolled)가 담당합니다.
   ===================================================== */
const SCROLL_THRESHOLD = 10;
const header = document.querySelector('.header');
let isTicking = false;

function updateHeader() {
  header.classList.toggle('is-scrolled', window.scrollY > SCROLL_THRESHOLD);
  isTicking = false;
}

// scroll 이벤트는 1초에 수십 번 발생 → 화면 그리는 주기(rAF)마다 한 번만 처리
function onScroll() {
  if (isTicking) return;
  isTicking = true;
  requestAnimationFrame(updateHeader);
}

if (header) {
  window.addEventListener('scroll', onScroll, { passive: true });
  updateHeader(); // 새로고침했을 때 이미 스크롤된 상태일 수도 있으므로 한 번 실행
}

/* =====================================================
   STEP 12-2. 타이핑 효과
   ===================================================== */
const WORDS = ['Front-End Developer', 'Web Publisher', 'UI Designer'];
const TYPE_DELAY = 100;   // 한 글자 쓰는 간격 (ms)
const DELETE_DELAY = 50;  // 한 글자 지우는 간격
const HOLD_DELAY = 2000;  // 다 쓴 뒤 멈춰 있는 시간

function startTyping(el, words) {
  let wordIndex = 0;
  let charCount = words[0].length; // HTML에 첫 단어가 이미 다 쓰여 있는 상태에서 시작
  let isDeleting = true;

  function tick() {
    const word = words[wordIndex];
    charCount += isDeleting ? -1 : 1;
    el.textContent = word.slice(0, charCount);

    let delay = isDeleting ? DELETE_DELAY : TYPE_DELAY;

    if (!isDeleting && charCount === word.length) {
      // 다 썼으면 잠시 멈췄다가 지우기 시작
      isDeleting = true;
      delay = HOLD_DELAY;
    } else if (isDeleting && charCount === 0) {
      // 다 지웠으면 다음 단어로 (마지막 단어 다음엔 처음으로)
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(tick, delay);
  }

  setTimeout(tick, HOLD_DELAY);
}

const typingEl = document.querySelector('.hero__typing');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (typingEl && !prefersReducedMotion) {
  startTyping(typingEl, WORDS);
}

/* =====================================================
   STEP 12-3. 폼 전송 안내 (연습용: 실제 전송은 하지 않음)
   ===================================================== */
const form = document.querySelector('.form');
const formStatus = document.querySelector('.form__status');

if (form && formStatus) {
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // 페이지 새로고침 막기
    formStatus.textContent = '메시지가 전송되었습니다. (연습용이라 실제로 보내지지는 않아요)';
    form.reset();
  });
}
