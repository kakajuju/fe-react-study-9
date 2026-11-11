# 포트폴리오 페이지 따라 만들기 (STEP 0 ~ 12)

`html_CSS_sample`과 같은 구조의 페이지를 **빈 파일부터 직접** 만들어 보는 실습입니다.
샘플은 옛날 방식(float)으로 배치했지만, 여기서는 요즘 실무에서 쓰는 **flex / grid**와 **모바일 우선 반응형**으로 만듭니다.

```
완성 구조
┌──────────────── header (고정 메뉴) ────────────────┐
│ ME                     About Skills Portfolio Contact │
├────────────────── hero (첫 화면) ──────────────────┤
│              Welcome / I'M A Developer▌             │
├────────────── section#about (2단) ─────────────────┤
├────────────── section#skills (카드 3개) ────────────┤
├────────────── section#portfolio (카드 6개) ─────────┤
├────────────── section#contact (정보 + 폼) ──────────┤
└──────────────────── footer ────────────────────────┘
```

> 막히면 [final/](final/) 폴더의 정답 파일과 비교하세요. CSS와 JS에는 `STEP 번호` 주석이 달려 있습니다.

---

## STEP 0. 준비

1. 이 폴더(`html_CSS_practice`) 안에 `work` 폴더를 만듭니다.
2. `work` 안에 빈 파일 3개를 만듭니다: `index.html`, `style.css`, `script.js`
3. VSCode 확장 **Live Server**를 설치한 뒤 `index.html`에서 우클릭 → **Open with Live Server**를 누릅니다. 저장할 때마다 브라우저가 자동으로 새로고침됩니다.

```
html_CSS_practice/
├─ README.md   ← 지금 읽는 파일
├─ final/      ← 정답
└─ work/       ← 여기서 직접 작성
   ├─ index.html
   ├─ style.css
   └─ script.js
```

> 이미지는 옆 폴더 `html_CSS_sample/images/`에 있는 것을 `../../html_CSS_sample/images/파일명` 경로로 가져다 씁니다.

---

## STEP 1. HTML 뼈대와 영역 나누기

**목표:** 내용을 채우기 전에 **페이지를 큰 영역으로 먼저 나눕니다.** 집을 지을 때 방부터 나누는 것과 같습니다.

`work/index.html`

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Portfolio</title>

  <!-- 웹 폰트: CSS의 @import보다 <link>가 더 빨리 내려받기 시작합니다 -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap">

  <!-- 아이콘 폰트 (integrity: 파일이 바뀌지 않았는지 브라우저가 검사) -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer">

  <link rel="stylesheet" href="style.css">

  <!-- defer: HTML을 다 읽은 뒤 실행 → head에 둬도 화면 표시를 막지 않음 -->
  <script src="script.js" defer></script>
</head>
<body>
  <a class="skip-link" href="#main">본문 바로가기</a>

  <header class="header">
    <!-- STEP 3 -->
  </header>

  <main id="main">
    <!-- STEP 4: 첫 화면 -->
    <!-- STEP 6 ~ 9: 섹션들 -->
  </main>

  <footer class="footer">
    <!-- STEP 10 -->
  </footer>
</body>
</html>
```

**왜 이렇게?**

| 태그 | 의미 | 샘플과의 차이 |
|---|---|---|
| `header` | 머리말 (로고 + 메뉴) | 같음 |
| `main` | **페이지의 핵심 내용 전체** | 샘플은 첫 화면만 `main`이었지만, 원래 `main`은 모든 본문 섹션을 감싸는 태그입니다 |
| `footer` | 꼬리말 (저작권 등) | 샘플에는 없음 |

- `lang="ko"`: 스크린리더가 한국어 발음으로 읽게 합니다.
- `meta viewport`: 이 줄이 없으면 모바일에서 화면이 작게 축소되어 보입니다.
- `skip-link`: 키보드 사용자가 Tab 한 번으로 메뉴를 건너뛰고 본문으로 갈 수 있게 합니다.

✅ **확인:** 화면에 "본문 바로가기" 글자 하나만 보이면 정상입니다.

---

## STEP 2. 디자인 토큰 + 초기화

**목표:** 색, 크기, 간격을 **변수(토큰)** 로 한곳에 정해 두고, 브라우저 기본 스타일을 지웁니다.

`work/style.css`

```css
:root {
  /* 색상 */
  --color-primary: #d63c3c;
  --color-on-primary: #fff;
  --color-text: #222;
  --color-text-muted: #555;
  --color-bg: #fff;
  --color-bg-alt: #f5f5f5;
  --color-border: #ddd;
  --color-input-border: #767676; /* 입력창 테두리는 배경과 3:1 이상 대비 필요 */
  --color-on-dark: #fff;
  --color-header-bg: rgb(0 0 0 / 0.85);
  --color-focus: #2563eb;

  /* 글자 크기 (1rem = 16px) */
  --fs-sm: 0.875rem;
  --fs-base: 1rem;
  --fs-lg: 1.25rem;
  --fs-xl: 1.75rem;
  --fs-2xl: 2.25rem;
  --fs-3xl: 3rem;
  --fs-icon: 2.5rem;
  --fs-hero: clamp(2rem, 6vw, 3.5rem); /* 최소 2rem ~ 최대 3.5rem 사이에서 화면에 맞게 */

  /* 간격 */
  --space-1: 0.5rem;
  --space-2: 1rem;
  --space-3: 1.5rem;
  --space-4: 2rem;
  --space-6: 3rem;
  --space-8: 5rem;

  /* 기타 */
  --font-base: 'Poppins', system-ui, sans-serif;
  --radius: 12px;
  --container: 1140px;
  --header-h: 4rem;
  --touch: 44px; /* 손가락으로 누르기 편한 최소 크기 */
  --shadow: 0 4px 16px rgb(0 0 0 / 0.08);
  --duration: 0.3s;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;              /* 메뉴 클릭 시 부드럽게 이동 (JS 불필요) */
  scroll-padding-top: var(--header-h);  /* 고정 헤더에 제목이 가려지지 않게 */
}

body {
  font-family: var(--font-base);
  font-size: var(--fs-base);
  line-height: 1.6;
  color: var(--color-text);
  background-color: var(--color-bg);
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

button,
input,
textarea {
  font: inherit;
  color: inherit;
}

/* 키보드(Tab)로 이동할 때만 보이는 포커스 테두리 */
:focus-visible {
  outline: 3px solid var(--color-focus);
  outline-offset: 3px;
}

.container {
  width: 100%;
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 var(--space-2);
}

/* 평소엔 화면 위로 숨어 있다가 Tab을 누르면 나타남 */
.skip-link {
  position: absolute;
  top: var(--space-1);
  left: var(--space-1);
  z-index: 100;
  padding: var(--space-1) var(--space-2);
  background-color: var(--color-text);
  color: var(--color-bg);
  border-radius: var(--radius);
  transform: translateY(-200%);
}

.skip-link:focus {
  transform: translateY(0);
}
```

**핵심 개념**

- **CSS 변수:** `--이름: 값`으로 정의하고 `var(--이름)`으로 씁니다. 빨간색을 바꾸고 싶으면 `--color-primary` 한 줄만 고치면 됩니다. STEP 11의 다크 모드도 이 변수 덕분에 몇 줄로 끝납니다.
- **`box-sizing: border-box`:** `width`에 padding과 border를 포함시킵니다. 이게 없으면 `width:100%` + `padding`이 화면 밖으로 넘칩니다.
- **`.container`의 차이:** 샘플은 `width:1140px`(고정)이었고, 여기는 `width:100%` + `max-width:1140px`입니다. 그래서 화면이 좁아도 넘치지 않고, 넓으면 1140px에서 멈춥니다. 미디어쿼리로 매번 너비를 바꿀 필요가 없어집니다.

✅ **확인:** 글자 여백이 사라지고 글꼴이 Poppins로 바뀝니다. **Tab 키**를 누르면 왼쪽 위에 "본문 바로가기" 버튼이 나타나야 합니다.

---

## STEP 3. 헤더 (flex로 양쪽 끝 정렬)

`index.html`의 `<header class="header">` 안을 채웁니다.

```html
<header class="header">
  <div class="container header__inner">
    <a class="header__logo" href="#top">ME</a>
    <nav class="nav" aria-label="주요 메뉴">
      <ul class="nav__list">
        <li><a class="nav__link" href="#about">About</a></li>
        <li><a class="nav__link" href="#skills">Skills</a></li>
        <li><a class="nav__link" href="#portfolio">Portfolio</a></li>
        <li><a class="nav__link" href="#contact">Contact</a></li>
      </ul>
    </nav>
  </div>
</header>
```

`style.css` 맨 아래에 추가합니다.

```css
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: var(--header-h);
  color: var(--color-on-dark);
}

/* 배경을 가상 요소로 따로 두고 opacity만 바꾸면 애니메이션이 가볍습니다 */
.header::before {
  content: "";
  position: absolute;
  inset: 0;
  z-index: -1;
  background-color: var(--color-header-bg);
  opacity: 0;
  transition: opacity var(--duration);
}

.header.is-scrolled::before {
  opacity: 1;
}

.header__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-2);
  height: 100%;
}

.header__logo {
  display: flex;
  align-items: center;
  min-height: var(--touch);
  font-size: var(--fs-xl);
  font-weight: 700;
}

/* 좁은 화면에서 메뉴가 넘치면 페이지 전체가 아니라 메뉴만 가로 스크롤 */
.nav {
  min-width: 0;
  overflow-x: auto;
}

.nav__list {
  display: flex;
}

.nav__link {
  display: flex;
  align-items: center;
  min-height: var(--touch);
  padding: 0 var(--space-1);
  font-size: var(--fs-sm);
  white-space: nowrap;
}

.nav__link:hover {
  text-decoration: underline;
  text-underline-offset: 6px;
}

@media (min-width: 768px) {
  .nav__link {
    padding: 0 var(--space-2);
    font-size: var(--fs-base);
  }
}
```

**핵심 개념**

1. **class 이름 규칙 (BEM):** `블록__요소` 형태입니다. `header__logo`는 "header 안의 logo"라는 뜻이라 이름만 봐도 위치를 알 수 있습니다. 덕분에 `header nav ul li button`처럼 긴 선택자를 쓰지 않아도 됩니다.
2. **class 여러 개 붙이기:** `class="container header__inner"`에서 공통 스타일은 `.container`가, 헤더 전용 스타일은 `.header__inner`가 맡습니다.
3. **flex:** 부모(`.header__inner`)에 `display:flex`를 주면 자식(로고, nav)이 가로로 섭니다. `space-between`은 양쪽 끝으로 벌립니다.
4. **`<a href="#about">`:** 샘플은 `button` + JS로 스크롤했지만, 링크와 `id`만으로도 같은 위치로 이동합니다. STEP 2의 `scroll-behavior:smooth` 덕분에 부드럽게 움직입니다.
5. **모바일 우선:** 기본값은 작은 화면용으로 쓰고, `@media (min-width: 768px)`로 **커질 때** 값을 바꿉니다. 샘플(`max-width`로 줄여 나가는 방식)과 방향이 반대입니다.

✅ **확인:** 아직 배경이 흰색이라 흰 글자가 안 보이는 게 정상입니다. 다음 단계에서 어두운 배경이 생깁니다.

---

## STEP 4. 첫 화면 (Hero)

`<main id="main">` 안, 맨 위에 넣습니다.

```html
<section class="hero" id="top" aria-labelledby="hero-title">
  <div class="container">
    <p class="hero__eyebrow">Welcome</p>
    <h1 class="hero__title" id="hero-title">I'M A <span class="hero__typing">Front-End Developer</span></h1>
    <p class="hero__desc">사용자를 먼저 생각하는 웹을 만듭니다. HTML과 CSS로 시작해 한 걸음씩 성장하고 있어요.</p>
    <a class="btn btn--outline hero__cta" href="#contact">Contact Me</a>
    <a class="hero__scroll" href="#about" aria-label="아래로 이동">
      <i class="fa-solid fa-computer-mouse" aria-hidden="true"></i>
    </a>
  </div>
</section>
```

```css
.hero {
  position: relative; /* 안쪽 .hero__scroll(absolute)의 위치 기준 */
  display: flex;
  align-items: center;
  min-height: 100vh;
  padding: var(--header-h) 0 var(--space-6);
  color: var(--color-on-dark);
  text-align: center;
  /* 위층: 반투명 검은 막 / 아래층: 사진 */
  background:
    linear-gradient(rgb(0 0 0 / 0.75), rgb(0 0 0 / 0.75)),
    url('../../html_CSS_sample/images/me.jpg') center / cover no-repeat;
}

.hero__eyebrow {
  font-size: var(--fs-lg);
}

.hero__title {
  margin: var(--space-3) 0;
  font-size: var(--fs-hero);
  line-height: 1.2;
  letter-spacing: 2px;
}

/* 글자 뒤에 깜빡이는 커서 만들기 */
.hero__typing::after {
  content: "";
  display: inline-block;
  width: 3px;
  height: 1em;
  margin-left: 4px;
  vertical-align: -0.1em;
  background-color: currentColor;
  animation: blink 0.7s ease-in-out infinite alternate;
}

.hero__desc {
  max-width: 36ch; /* ch = 글자 1개 너비 → 한 줄 길이를 읽기 좋게 제한 */
  margin: 0 auto;
  font-size: var(--fs-lg);
}

.hero__cta {
  margin-top: var(--space-6);
}

.hero__scroll {
  position: absolute;
  bottom: var(--space-2);
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--touch);
  height: var(--touch);
  font-size: var(--fs-xl);
  transform: translateX(-50%);
  animation: up-down 1s ease-in-out infinite alternate;
}

@keyframes blink {
  from { opacity: 1; }
  to { opacity: 0; }
}

@keyframes up-down {
  from { transform: translate(-50%, 0); }
  to { transform: translate(-50%, -8px); }
}

/* 공통 버튼 */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: var(--touch);
  padding: 0 var(--space-4);
  border: 2px solid transparent; /* 투명 테두리: 윈도우 고대비 모드에서 버튼 윤곽이 보이게 */
  border-radius: 999px;
  font-weight: 700;
  cursor: pointer;
  transition: transform var(--duration);
}

.btn:hover {
  transform: translateY(-2px);
}

.btn--outline {
  border-color: currentColor;
}

.btn--primary {
  width: 100%;
  background-color: var(--color-primary);
  color: var(--color-on-primary);
}
```

**핵심 개념**

- **relative + absolute 짝꿍:** `absolute`는 "position이 있는 가장 가까운 조상"을 기준으로 위치를 잡습니다. 샘플은 이 기준을 정하지 않았지만, 여기서는 `.hero`에 `relative`를 줘서 **기준을 명확히** 했습니다.
- **가운데 정렬 3종 세트:** 세로는 `display:flex` + `align-items:center`, 글자는 `text-align:center`, 블록은 `margin:0 auto`(`.hero__desc`)로 맞춥니다.
- **`left:50%` + `translateX(-50%)`:** 왼쪽 끝을 가운데로 옮긴 뒤 자기 너비의 절반만큼 되돌아오면 정확히 가운데에 섭니다.
- **애니메이션은 `transform`과 `opacity`로만:** 샘플은 `bottom` 값을 움직였는데, 위치 속성을 바꾸면 브라우저가 레이아웃을 매번 다시 계산합니다. `transform`은 그 계산을 건너뛰어 훨씬 부드럽습니다.
- **버튼 class 조합:** `btn`(공통 모양) + `btn--outline`(변형) + `hero__cta`(이 위치에서만 쓰는 여백). 모양과 위치를 분리했기 때문에 `.btn`은 어디서든 재사용할 수 있습니다.
- **`aria-hidden="true"`:** 꾸밈용 아이콘은 스크린리더가 읽지 않게 숨깁니다. 대신 링크에 `aria-label`로 이름을 붙였습니다.

✅ **확인:** 어두운 사진 배경 위에 흰 글자가 가운데 있고, 커서가 깜빡이고, 아래쪽 마우스 아이콘이 위아래로 움직입니다.

---

## STEP 5. 섹션 공통 뼈대

나머지 섹션 4개는 **모두 같은 틀**로 만듭니다. 먼저 틀과 공통 CSS를 익힙니다.

```html
<!-- 섹션 틀 (아직 붙여 넣지 말고 구조만 보세요) -->
<section class="section" id="이름" aria-labelledby="이름-title">
  <div class="container">
    <div class="section-title">
      <p class="section-title__sub">작은 부제</p>
      <h2 class="section-title__main" id="이름-title">큰 제목</h2>
    </div>
    <!-- 섹션마다 다른 본문 -->
  </div>
</section>
```

```css
.section {
  padding: var(--space-8) 0;
}

.section--alt {
  background-color: var(--color-bg-alt);
}

.section-title {
  margin-bottom: var(--space-6);
  text-align: center;
}

.section-title__sub {
  font-size: var(--fs-sm);
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--color-primary);
}

.section-title__main {
  font-size: var(--fs-2xl);
}

@media (min-width: 768px) {
  .section-title__main {
    font-size: var(--fs-3xl);
  }
}
```

**핵심 개념**

- **`section > .container` 두 겹:** 배경색은 화면 끝까지 칠하고(section), 내용은 가운데 1140px 안에 둡니다(container).
- **회색 배경은 `section--alt` class로:** 샘플은 `section:nth-child(2n)`을 썼습니다. 그런데 `nth-child`는 header, div 같은 다른 태그까지 세기 때문에 예상과 다른 섹션이 칠해졌습니다. class를 **직접 붙이면** 순서가 바뀌어도 깨지지 않습니다.
- **부제는 `p`, 제목은 `h2`:** 샘플은 `h4` → `h2` 순서였습니다. 제목 태그는 h1 → h2 → h3처럼 **단계를 지켜야** 스크린리더 사용자가 문서 구조를 파악할 수 있습니다.
- **`aria-labelledby`:** "이 section의 이름은 이 h2다"라고 연결해 줍니다.

---

## STEP 6. About (flex 2단)

hero 섹션 **아래에** 붙여 넣습니다.

```html
<section class="section" id="about" aria-labelledby="about-title">
  <div class="container">
    <div class="section-title">
      <p class="section-title__sub">Who Am I</p>
      <h2 class="section-title__main" id="about-title">About Me</h2>
    </div>

    <div class="about">
      <img class="about__img" src="../../html_CSS_sample/images/me_alone.jpg" alt="프로필 사진" width="640" height="426" loading="lazy">
      <div class="about__text">
        <h3 class="about__greeting">Hello, <strong>I'm 홍길동</strong></h3>
        <p>웹 퍼블리셔이자 프론트엔드 개발자를 꿈꾸고 있습니다.</p>
        <p>시맨틱 HTML과 반응형 CSS로 누구나 쓰기 편한 화면을 만드는 데 관심이 많아요.</p>
        <ul class="social" aria-label="SNS 링크">
          <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub (새 창)"><i class="fa-brands fa-github" aria-hidden="true"></i></a></li>
          <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram (새 창)"><i class="fa-brands fa-instagram" aria-hidden="true"></i></a></li>
          <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube (새 창)"><i class="fa-brands fa-youtube" aria-hidden="true"></i></a></li>
        </ul>
      </div>
    </div>
  </div>
</section>
```

```css
.about {
  display: flex;
  flex-direction: column; /* 모바일: 위아래로 쌓기 */
  gap: var(--space-4);
}

.about__img {
  border-radius: var(--radius);
}

.about__greeting {
  margin-bottom: var(--space-2);
  font-size: var(--fs-xl);
}

/* 하위 선택자: .about__greeting 안의 strong */
.about__greeting strong {
  color: var(--color-primary);
}

/* 자식 선택자: .about__text 바로 아래의 p만 (ul 안의 내용에는 적용 안 됨) */
.about__text > p {
  margin-bottom: var(--space-2);
  color: var(--color-text-muted);
}

.social {
  display: flex;
  gap: var(--space-1);
}

.social a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--touch);
  height: var(--touch);
  font-size: var(--fs-xl);
  transition: transform var(--duration);
}

.social a:hover {
  transform: scale(1.15);
}

@media (min-width: 768px) {
  .about {
    flex-direction: row; /* 태블릿 이상: 좌우로 나란히 */
    align-items: center;
  }

  .about__img,
  .about__text {
    flex: 1;      /* 남는 공간을 1:1로 나눠 가짐 */
    min-width: 0; /* 이미지가 원래 크기 때문에 줄어들지 못하는 문제 방지 */
  }
}
```

**샘플과 비교: float vs flex**

| | 샘플 (float) | 지금 (flex) |
|---|---|---|
| 2단 만들기 | `.left`, `.right`에 각각 `width:50%; float:left` | 부모에 `display:flex` 한 줄 |
| 간격 | padding으로 직접 계산 | `gap` |
| 부모 높이 문제 | clearfix(`::after{clear:both}`) 필요 | 필요 없음 |
| 모바일 1단 | width를 100%로 다시 지정 | `flex-direction`만 바꿈 |

- **이미지 `width`/`height` 속성:** 이미지가 로딩되기 전에 자리를 미리 잡아 두어 화면이 덜컹거리지 않게 합니다(CLS 방지).
- **`loading="lazy"`:** 화면에 가까워질 때 이미지를 불러옵니다. 첫 화면에 바로 보이는 이미지에는 쓰지 않습니다.
- **`rel="noopener noreferrer"`:** `target="_blank"`로 새 창을 열 때 보안을 위해 함께 씁니다.

✅ **확인:** 브라우저 창을 줄였다 늘렸다 해 보세요. 768px을 기준으로 위아래 배치와 좌우 배치가 바뀌어야 합니다.

---

## STEP 7. Skills (grid 카드 + hover)

About 섹션 **아래에** 붙입니다. **카드 1개를 먼저 완성한 뒤 복사해서 내용만 바꾸세요.**

```html
<section class="section section--alt" id="skills" aria-labelledby="skills-title">
  <div class="container">
    <div class="section-title">
      <p class="section-title__sub">What I Do</p>
      <h2 class="section-title__main" id="skills-title">Skills</h2>
    </div>

    <ul class="skills">
      <li class="card">
        <i class="fa-brands fa-html5 card__icon" aria-hidden="true"></i>
        <h3 class="card__title">HTML5</h3>
        <p class="card__desc">의미에 맞는 태그로 문서 구조를 설계합니다.</p>
      </li>
      <!-- 복사해서 2개 더: fa-css3-alt / CSS3, fa-js / JavaScript -->
    </ul>
  </div>
</section>
```

```css
.skills {
  display: grid;
  gap: var(--space-3);
}

@media (min-width: 768px) {
  .skills {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .skills {
    grid-template-columns: repeat(3, 1fr);
  }
}

.card {
  padding: var(--space-4);
  background-color: var(--color-bg);
  border: 1px solid transparent; /* 고대비 모드에서는 그림자가 사라지므로 윤곽 대체 */
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  transition: transform var(--duration);
}

.card:hover {
  transform: translateY(-6px);
}

.card__icon {
  font-size: var(--fs-icon);
  color: var(--color-primary);
  transition: transform var(--duration);
}

/* 부모(.card)에 마우스를 올리면 자식(.card__icon)이 바뀜 */
.card:hover .card__icon {
  transform: rotate(-10deg) scale(1.1);
}

.card__title {
  margin: var(--space-2) 0 var(--space-1);
  font-size: var(--fs-xl);
}

.card__desc {
  color: var(--color-text-muted);
}
```

**핵심 개념**

- **카드 목록은 `ul > li`:** 같은 종류가 여러 개 나열되므로 목록 태그를 씁니다. 스크린리더가 "목록, 항목 3개"라고 알려 줍니다.
- **grid:** `grid-template-columns: repeat(3, 1fr)`은 "같은 너비(1fr)의 칸 3개"라는 뜻입니다. 샘플의 `30% + 5% + 30% + 5% + 30%` 계산과 `:last-child{margin-right:0}`이 모두 필요 없어집니다.
- **`.card:hover .card__icon`:** "부모가 hover 상태일 때 그 안의 자식을 바꾸는" 패턴입니다. 샘플의 `.do-inner:hover i`와 같은 원리입니다.

✅ **확인:** 화면 너비에 따라 1열 → 2열 → 3열로 바뀌고, 카드에 마우스를 올리면 카드가 떠오르며 아이콘이 기울어집니다.

---

## STEP 8. Portfolio (미디어쿼리 없는 반응형 grid)

Skills 섹션 **아래에** 붙입니다. 이번에도 카드 1개를 먼저 완성하세요.

```html
<section class="section" id="portfolio" aria-labelledby="portfolio-title">
  <div class="container">
    <div class="section-title">
      <p class="section-title__sub">My Works</p>
      <h2 class="section-title__main" id="portfolio-title">Portfolio</h2>
    </div>

    <ul class="works">
      <li class="work">
        <img class="work__img" src="../../html_CSS_sample/images/mock1.png" alt="패키지 디자인 작업 화면" width="350" height="230" loading="lazy">
        <div class="work__body">
          <p class="work__category">Branding</p>
          <h3 class="work__title">Package Design</h3>
        </div>
      </li>
      <!-- 복사해서 mock2 ~ mock6까지 5개 더 (alt, 분류, 제목을 바꿔 보세요) -->
    </ul>
  </div>
</section>
```

```css
.works {
  display: grid;
  /* 칸 너비가 최소 280px이 되도록, 들어가는 만큼 자동으로 열을 만듦 */
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr));
  gap: var(--space-4);
}

.work {
  overflow: hidden; /* 확대된 이미지가 카드 밖으로 나가지 않게 */
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
}

.work__img {
  width: 100%;
  aspect-ratio: 3 / 2;
  object-fit: cover; /* 비율이 달라도 찌그러지지 않고 잘라서 채움 */
  transition: transform var(--duration);
}

.work:hover .work__img {
  transform: scale(1.05);
}

.work__body {
  padding: var(--space-2) var(--space-2) var(--space-3);
}

.work__category {
  font-size: var(--fs-sm);
  font-weight: 700;
  color: var(--color-primary);
}

.work__title {
  font-size: var(--fs-lg);
}
```

**핵심 개념**

- **`repeat(auto-fill, minmax(280px, 1fr))`:** "칸 하나는 최소 280px, 남는 공간은 똑같이 나눠서 들어가는 만큼 열을 만들어라"라는 뜻입니다. **미디어쿼리 없이도** 화면에 맞춰 열 개수가 저절로 바뀝니다. STEP 7(미디어쿼리 방식)과 비교해 보세요.
- **`min(100%, 280px)`:** 화면이 280px보다 좁은 아주 작은 기기에서 칸이 화면 밖으로 넘치지 않게 막아 줍니다.
- **`overflow: hidden` + `scale`:** 이미지는 커지지만 카드 테두리 밖은 잘려서 "줌인" 효과가 됩니다.
- **alt 텍스트:** 이미지가 **무엇을 보여 주는지** 적습니다. 샘플처럼 `alt=""`로 비우는 것은 꾸밈용 이미지일 때만 허용됩니다.

✅ **확인:** 창 너비를 천천히 바꿔 보면 1 → 2 → 3열이 자동으로 바뀝니다.

---

## STEP 9. Contact (정보 카드 + 폼)

Portfolio 섹션 **아래에** 붙입니다.

```html
<section class="section section--alt" id="contact" aria-labelledby="contact-title">
  <div class="container">
    <div class="section-title">
      <p class="section-title__sub">Contact</p>
      <h2 class="section-title__main" id="contact-title">Contact With Me</h2>
    </div>

    <div class="contact">
      <ul class="contact__info">
        <li class="info-card">
          <i class="fa-solid fa-phone info-card__icon" aria-hidden="true"></i>
          <div>
            <h3 class="info-card__title">Phone</h3>
            <a class="info-card__text" href="tel:01000000000">010-0000-0000</a>
          </div>
        </li>
        <li class="info-card">
          <i class="fa-solid fa-envelope info-card__icon" aria-hidden="true"></i>
          <div>
            <h3 class="info-card__title">Email</h3>
            <a class="info-card__text" href="mailto:hello@example.com">hello@example.com</a>
          </div>
        </li>
        <li class="info-card">
          <i class="fa-solid fa-location-dot info-card__icon" aria-hidden="true"></i>
          <div>
            <h3 class="info-card__title">Address</h3>
            <p class="info-card__text">Seoul, Republic of Korea</p>
          </div>
        </li>
      </ul>

      <form class="form" action="#">
        <div class="form__group">
          <label for="name">이름</label>
          <input type="text" id="name" name="name" autocomplete="name" required>
        </div>
        <div class="form__group">
          <label for="email">이메일</label>
          <input type="email" id="email" name="email" autocomplete="email" required>
        </div>
        <div class="form__group">
          <label for="message">메시지</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button class="btn btn--primary" type="submit">보내기</button>
        <!-- role="status": 내용이 바뀌면 스크린리더가 읽어 줌 (aria-live) -->
        <p class="form__status" role="status"></p>
      </form>
    </div>
  </div>
</section>
```

```css
.contact {
  display: grid;
  gap: var(--space-4);
}

@media (min-width: 1024px) {
  .contact {
    grid-template-columns: 1fr 2fr; /* 왼쪽 1 : 오른쪽 2 */
    align-items: start;
  }
}

.contact__info {
  display: grid;
  gap: var(--space-2);
}

.info-card {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2);
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
}

.info-card__icon {
  font-size: var(--fs-xl);
  color: var(--color-primary);
}

.info-card__title {
  font-size: var(--fs-base);
}

.info-card__text {
  color: var(--color-text-muted);
  overflow-wrap: anywhere; /* 긴 이메일 주소가 카드를 뚫고 나가지 않게 */
}

a.info-card__text:hover {
  text-decoration: underline;
}

.form {
  padding: var(--space-4);
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
}

.form__group {
  margin-bottom: var(--space-3);
}

/* label은 인라인 요소라 아래 여백이 안 먹으므로 block으로 변경 */
.form__group label {
  display: block;
  margin-bottom: var(--space-1);
  font-weight: 700;
}

.form__group input,
.form__group textarea {
  width: 100%;
  min-height: var(--touch);
  padding: var(--space-1) var(--space-2);
  background-color: var(--color-bg);
  border: 1px solid var(--color-input-border);
  border-radius: var(--radius);
}

.form__group textarea {
  min-height: 12rem;
  resize: vertical;
}

.form__group input:focus,
.form__group textarea:focus {
  border-color: var(--color-focus);
}

.form__status {
  margin-top: var(--space-2);
  font-weight: 700;
}
```

**핵심 개념**

- **`label for` ↔ `input id`:** 라벨을 클릭하면 입력창이 선택되고, 스크린리더가 "이름, 입력창"이라고 읽습니다. 폼에서 **가장 중요한 연결**입니다.
- **`type="email"` + `required`:** 브라우저가 형식과 빈칸을 검사하고, 모바일에서는 이메일용 키보드가 뜹니다. 단, 실제 서비스에서는 **서버에서도 다시 검사**해야 합니다(브라우저 검사는 우회할 수 있습니다).
- **`tel:` / `mailto:`:** 모바일에서 누르면 바로 전화나 메일 앱이 열립니다.
- **복합 선택자 `a.info-card__text`:** class가 같아도 `a` 태그(전화, 이메일)에만 밑줄 hover를 줍니다. 주소는 `p`라서 적용되지 않습니다.
- **그룹 선택자 `,`:** input과 textarea에 같은 스타일을 한 번에 줍니다.

✅ **확인:** 빈칸으로 "보내기"를 누르면 브라우저가 경고를 띄웁니다. Tab으로 이동할 때 파란 포커스 테두리가 보여야 합니다.

---

## STEP 10. Footer

```html
<footer class="footer">
  <div class="container">
    <p>&copy; 2026 My Portfolio. All rights reserved.</p>
  </div>
</footer>
```

```css
.footer {
  padding: var(--space-4) 0;
  background-color: var(--color-text);
  color: var(--color-bg);
  font-size: var(--fs-sm);
  text-align: center;
}
```

> `&copy;`는 © 기호를 쓰는 HTML 문자 코드입니다.

---

## STEP 11. 다크 모드 + 움직임 줄이기

```css
/* 토큰 값만 바꾸면 페이지 전체 색이 바뀝니다 */
@media (prefers-color-scheme: dark) {
  :root {
    --color-primary: #ff6b6b;
    --color-on-primary: #111;
    --color-text: #eee;
    --color-text-muted: #bbb;
    --color-bg: #121212;
    --color-bg-alt: #1d1d1d;
    --color-border: #333;
    --color-input-border: #8a8a8a;
    --shadow: 0 4px 16px rgb(0 0 0 / 0.4);
  }
}

/* OS에서 '애니메이션 줄이기'를 켠 사용자에게는 움직임을 멈춤 */
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**핵심 개념:** STEP 2에서 색을 모두 변수로 만들어 둔 덕분에, 다크 모드는 **변수 값만 다시 정하면** 끝납니다. 색을 직접 써 놓았다면 수십 군데를 고쳐야 했을 겁니다.

✅ **확인:** 크롬 개발자도구(F12) → `Ctrl+Shift+P` → **"Emulate CSS prefers-color-scheme: dark"** 를 입력하면 다크 모드를 미리 볼 수 있습니다.

---

## STEP 12. JavaScript로 생동감 더하기

`work/script.js`

```js
/* 12-1. 스크롤하면 헤더 배경 보이기 */
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

/* 12-2. 타이핑 효과 */
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

/* 12-3. 폼 전송 안내 (연습용: 실제 전송은 하지 않음) */
const form = document.querySelector('.form');
const formStatus = document.querySelector('.form__status');

if (form && formStatus) {
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // 페이지 새로고침 막기
    formStatus.textContent = '메시지가 전송되었습니다. (연습용이라 실제로 보내지지는 않아요)';
    form.reset();
  });
}
```

**핵심 개념**

- **역할 분담:** JS는 `is-scrolled` class를 붙이고 떼기만 합니다. 모양(배경이 서서히 나타나는 효과)은 STEP 3의 CSS가 담당합니다.
- **requestAnimationFrame:** scroll 이벤트가 아무리 많이 발생해도 화면을 한 번 그릴 때 한 번만 처리하므로 버벅임이 없습니다.
- **`if (header)` 방어 코드:** 요소가 없을 때 에러로 전체 JS가 멈추는 것을 막습니다.
- **JS가 꺼져 있어도 안전:** HTML에 "Front-End Developer"가 미리 쓰여 있으므로, JS가 동작하지 않아도 문장이 완성된 채로 보입니다. 샘플은 `<span></span>`이 비어 있어서 JS 없이는 "I'M A"만 보였습니다.

✅ **확인:** 스크롤을 내리면 헤더에 검은 배경이 서서히 생기고, 제목의 직업명이 지워졌다 다시 써집니다. 폼을 채워서 보내면 아래에 안내 문구가 뜹니다.

---

## 마무리 체크리스트

- [ ] 창 너비 320px / 768px / 1280px에서 가로 스크롤 없이 잘 보인다 (F12 → 기기 툴바 `Ctrl+Shift+M`)
- [ ] 마우스 없이 **Tab / Enter**만으로 모든 메뉴, 링크, 폼을 쓸 수 있다
- [ ] 메뉴를 누르면 해당 섹션 제목이 헤더에 가려지지 않는다
- [ ] 모든 의미 있는 이미지에 alt가 있다
- [ ] 다크 모드에서도 글자가 잘 읽힌다
- [ ] F12 → **Lighthouse** → 접근성(Accessibility) 점수를 확인해 본다

## 샘플 vs 이번 실습: 한눈에 비교

| 주제 | html_CSS_sample | 이번 실습 |
|---|---|---|
| 다단 배치 | float + clearfix | flex / grid |
| 카드 간격 | `margin-right` + `:last-child`, `:nth-child` 계산 | `gap` |
| 반응형 방향 | 큰 화면 → 작게 (`max-width`) | 작은 화면 → 크게 (`min-width`) |
| container 너비 | 미디어쿼리마다 px 고정값 | `max-width` 하나로 끝 |
| 색·크기 | 값을 직접 입력 | CSS 변수(토큰) |
| 선택자 | `section .do-me .do-inner .content h3` (깊음) | `.card__title` (얕음, BEM) |
| 메뉴 이동 | button + JS | `<a href="#id">` + CSS smooth |
| 애니메이션 | `bottom` 값 변경 | `transform` / `opacity`만 |
| 접근성 | alt 비어 있음, 제목 순서 h4→h2 | skip link, alt, aria, 포커스 표시, 움직임 줄이기 |

## 도전 과제 (정답 없음)

1. **패럴랙스 띠:** 샘플의 `.bg`처럼 `background-attachment: fixed`를 쓰는 배경 띠를 Skills와 Portfolio 사이에 넣어 보세요. (`html_CSS_sample/images/background.jpg` 사용)
2. **모바일 햄버거 메뉴:** 768px 미만에서는 메뉴를 숨기고 ☰ 버튼으로 열고 닫아 보세요. 버튼에 `aria-expanded`를 함께 바꿔 줘야 합니다.
3. **현재 위치 표시:** 스크롤 위치에 맞는 메뉴에 `aria-current="true"`와 밑줄을 붙여 보세요. (힌트: `IntersectionObserver`)
4. **나만의 색:** `--color-primary` 하나만 바꿔서 페이지 분위기가 어떻게 달라지는지 보세요.
