<template>
  <div class="main_container">
    <div class="background_box"></div>
    <div class="intro_box">
      <p class="p1">- 김상우 -</p>
      <p class="p2">프론트엔드 포트폴리오</p>
      <p class="p3">궁금하면 도전하고, 실패를 두려워 하지않고</p>
      <p class="p4">맡은 일에 책임을 다하는 개발자 입니다</p>
    </div>
  </div>

  <div class="about_container">
    <div class="about_box_left">
      <div>
        <img src="/assets/images/icon_link.svg" alt="link">
        <span>ABOUT</span>
      </div>
    </div>
    <div class="about_box">
      <div class="row">
        <div class="item">
          <div class="item_img">
            <img src="/assets/images/icon_avatar.svg" alt="avatar">
          </div>
          <div class="item_text">
            <span>이름</span>
            <span>김상우</span>
          </div>
        </div>
        <div class="item">
          <div class="item_img">
            <img src="/assets/images/icon_date.svg" alt="date">
          </div>
          <div class="item_text">
            <span>생년월일</span>
            <span>1997.03.21</span>
          </div>
        </div>
        <div class="item">
          <div class="item_img">
            <img src="/assets/images/icon_location.svg" alt="location">
          </div>
          <div class="item_text">
            <span>주소</span>
            <span>경산시 계양동</span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="item">
          <div class="item_img">
            <img src="/assets/images/icon_phone.svg" alt="phone">
          </div>
          <div class="item_text">
            <span>연락처</span>
            <span>010-7744-4982</span>
          </div>
        </div>
        <div class="item">
          <div class="item_img">
            <img src="/assets/images/icon_email.svg" alt="email">
          </div>
          <div class="item_text">
            <span>이메일</span>
            <span>pointjumpit@gmail.com</span>
          </div>
        </div>
        <div class="item">
          <div class="item_img">
            <img src="/assets/images/icon_school.svg" alt="school">
          </div>
          <div class="item_text">
            <span>학력</span>
            <span>한국폴리텍대학 IT융합과</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="skill_container">
    <div class="skill_box">
      <div class="item_skill">
        <div>
          <img src="/assets/images/icon_html.svg" alt="html">
        </div>
        <div>
          <img src="/assets/images/icon_css.svg" alt="css">
        </div>
        <div>
          <img src="/assets/images/icon_javascript.svg" alt="javascript">
        </div>
      </div>
      <div class="item_skill">
        <div>
          <img src="/assets/images/icon_react.svg" alt="react">
        </div>
        <div>
          <img src="/assets/images/icon_vue.svg" alt="vue">
        </div>
        <div>
          <img src="/assets/images/icon_svelte.svg" alt="svelte">
        </div>
      </div>
      <div class="item_skill">
        <div>
          <img src="/assets/images/icon_node.svg" alt="node">
        </div>
        <div>
          <img src="/assets/images/icon_express.svg" alt="express">
        </div>
      </div>
      <div class="item_skill">
        <div>
          <img src="/assets/images/icon_github.svg" alt="github">
        </div>
        <div>
          <img src="/assets/images/icon_gitlab.svg" alt="gitlab">
        </div>
      </div>
    </div>

    <div class="skill_content_box">
      <div class="skill_content">
        <span>좌측 스킬 아이콘을 클릭해 주세요.</span>
      </div>
    </div>

    <div class="skill_box_left">
      <div>
        <span>SKILL</span>
        <img src="/assets/images/icon_link.svg" alt="link">
      </div>
    </div>
  </div>

  <div class="project_container">
    <div class="project_box">
      <div class="project_box_top">
        <img src="/assets/images/icon_link.svg" alt="link">
        <span>PROJECT</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    name: "Main",
    data() {
        return {
            item: '',
        }
    },
    methods: {
        handleScroll() {
            window.scrollBy({
                top: 300,
                left: 0,
                behavior: 'smooth'
            })
        },
    }
}
</script>

<style scoped>
span {
    font-family: 'Pretendard', sans-serif;
}
p {
    font-family: 'Pretendard', sans-serif;
}
.main_container {
    position: relative;
    width: 100%;
}
.background_box {
    background-image: url('/assets/images/main_img.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 70vh;
    opacity: 1;
}
.intro_box {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    line-height: 2;
    color: #fff;
}

.p1 {
    font-size: 30px;
    font-weight: 700;
}
.p2 {
    font-size: 24px;
    font-weight: 700;
}
.p3, .p4 {
    font-size: 20px;
}

.about_container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: #ffc107;
}
.about_box_left {
    display: flex;
    align-items: center;
    padding: 0 0 0 100px;
    font-size: 50px;
    font-weight: 700;
}
.about_box_left div {
    display: flex;
    align-items: center;
}
.about_box_left img {
    width: 50px;
    margin-right: 16px;
}
.about_box {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 300px;
    margin: 100px 0 100px 100px;
}
.row {
    display: flex;
    height: 100%;
}
.item {
    display: flex;
    width: 100%;
    height: 100%;
}
.item_img {
    display: flex;
    align-items: center;
}
.item_img img {
    width: 30px;
    margin-right: 16px;
}
.item_text {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.item_text span:nth-child(1) {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 12px;
}
.item_text span:nth-child(2) {
    font-size: 20px;
    color: #fff;
}

.skill_container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: #17a2b8;
}
.skill_box {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 150px 0 150px 120px;
}
.item_skill {
    display: flex;
    align-items: center;
    width: 100%;
    height: 150px;
    border-radius: 20px;
    padding: 20px;
    margin-bottom: 20px;
    background-color: #fff;
}
.item_skill div {
    margin-right: 12px;
}
.item_skill div img {
    width: 120px;
    cursor: pointer;
    animation: moveBack 0.3s ease-out forwards;
}
.item_skill div img:hover {
    animation: move 0.3s ease-out forwards;
}
.skill_box_left {
    display: flex;
    align-items: center;
    padding: 0 100px 0 0;
    font-size: 50px;
    font-weight: 700;
}
.skill_box_left div {
    display: flex;
    align-items: center;
}
.skill_box_left img {
    width: 50px;
    margin-left: 16px;
}
.skill_content_box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.skill_content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    height: 50%;
    background-color: #fff;
    border-radius: 20px;
    padding: 20px;
    margin-bottom: 20px;
}
.skill_content span {
    font-size: 24px;
    font-weight: 700;
    text-align: center;
}

.project_container {
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #6f5cdd;
}
.project_box {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 150px 0;
}
.project_box_top {
    display: flex;
    justify-content: center;
    align-items: center;
}
.project_box_top span {
    font-size: 50px;
    font-weight: 700;
    text-align: center;
}
.project_box_top img {
    width: 50px;
    margin-right: 16px;
}

@keyframes slideInFromLeft {
    from {
        transform: translateX(-100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes move {
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(-5%);
    }
}

@keyframes moveBack {
    from {
        transform: translateY(-5%);
    }
    to {
        transform: translateY(0);
    }
}
</style>