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
        <img src="/assets/images/icon_link.svg" alt="link" />
        <span>ABOUT</span>
      </div>
    </div>
    <div class="about_box">
      <div class="row">
        <div class="item">
          <div class="item_img">
            <img src="/assets/images/icon_avatar.svg" alt="avatar" />
          </div>
          <div class="item_text">
            <span>이름</span>
            <span>김상우</span>
          </div>
        </div>
        <div class="item">
          <div class="item_img">
            <img src="/assets/images/icon_date.svg" alt="date" />
          </div>
          <div class="item_text">
            <span>생년월일</span>
            <span>1997.03.21</span>
          </div>
        </div>
        <div class="item">
          <div class="item_img">
            <img src="/assets/images/icon_location.svg" alt="location" />
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
            <img src="/assets/images/icon_phone.svg" alt="phone" />
          </div>
          <div class="item_text">
            <span>연락처</span>
            <span>010-7744-4982</span>
          </div>
        </div>
        <div class="item">
          <div class="item_img">
            <img src="/assets/images/icon_email.svg" alt="email" />
          </div>
          <div class="item_text">
            <span>이메일</span>
            <span>pointjumpit@gmail.com</span>
          </div>
        </div>
        <div class="item">
          <div class="item_img">
            <img src="/assets/images/icon_school.svg" alt="school" />
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
        <div @click="getItem('HTML')">
          <img src="/assets/images/icon_html.svg" alt="html" />
        </div>
        <div @click="getItem('CSS')">
          <img src="/assets/images/icon_css.svg" alt="css" />
        </div>
        <div @click="getItem('JAVASCRIPT')">
          <img src="/assets/images/icon_javascript.svg" alt="javascript" />
        </div>
      </div>
      <div class="item_skill">
        <div @click="getItem('REACT')">
          <img src="/assets/images/icon_react.svg" alt="react" />
        </div>
        <div @click="getItem('VUE')">
          <img src="/assets/images/icon_vue.svg" alt="vue" />
        </div>
        <div @click="getItem('SVELTE')">
          <img src="/assets/images/icon_svelte.svg" alt="svelte" />
        </div>
      </div>
      <div class="item_skill">
        <div @click="getItem('NODE')">
          <img src="/assets/images/icon_node.svg" alt="node" />
        </div>
        <div @click="getItem('EXPRESS')">
          <img src="/assets/images/icon_express.svg" alt="express" />
        </div>
      </div>
      <div class="item_skill">
        <div @click="getItem('GITHUB')">
          <img src="/assets/images/icon_github.svg" alt="github" />
        </div>
        <div @click="getItem('GITLAB')">
          <img src="/assets/images/icon_gitlab.svg" alt="gitlab" />
        </div>
        <div @click="getItem('POSTGRESQL')" title="실제 존재하지 않는 데이터 입니다. 예시 아이콘일 뿐입니다.">
          <img src="/assets/images/icon_postgresql.svg" alt="icon_postgresql" />
        </div>
      </div>
    </div>

    <div class="skill_content_box">
      <div style="position: relative" class="skill_content">
        <LoadingSpinner style="position: absolute; top: 0; left: 40%" :isLoading="isLoading"/>
        <div v-show="item.content" class="content_v_html" v-html="item.content"></div>
      </div>
      <div class="skill_message">
        <p :style="{ color: messageStatus === 404 ? '#dc3545' : '#fff'}">{{ message }}</p>
      </div>
    </div>

    <div class="skill_box_left">
      <div>
        <span>SKILL</span>
        <img src="/assets/images/icon_link.svg" alt="link" />
      </div>
    </div>
  </div>

  <div class="project_container">
    <div class="project_box">
      <div class="project_box_top">
        <img src="/assets/images/icon_link.svg" alt="link" />
        <span>PROJECT</span>
      </div>

      <div class="project_item_box">
        <div class="project_item_name">
          <span>Shotz</span>
        </div>
        <div class="project_item_img">
          <img src="/assets/images/shotz.png" alt="shotz" />
        </div>
        <div class="project_item_description">
          <p class="project_item_description_text">
            첫 프로젝트이자 대학교 졸업작품으로 제작한 쇼핑몰 컨셉의 웹 사이트
            입니다. <br />
            React 를 사용했으며, context api 를 사용하여 상태관리를 하였습니다.
            <br />
            서버리스로 FireBase 를 사용하여 회원가입 및 로그인 기능을 추가하였고
            <br />
            관리자 계정으로 로그인 시 상품 등록이 가능합니다. <br />
            반응형 웹으로 제작되었으며, 모바일 환경에서도 사용이 가능합니다.
          </p>
          <p class="project_item_description_text_bold">
            - 개발 인원 : 1인<br />
            - Frontend : React, styled-components<br />
            - Backend & DB : FireBase<br />
            - Github Link :
            <a href="https://github.com/sangwookim0321/shotz" target="_blank"
              >Github Link</a
            >
          </p>
        </div>
      </div>

      <div class="project_item_box">
        <div class="project_item_name">
          <span>Asobi</span>
        </div>
        <div class="project_item_img">
          <img src="/assets/images/asobi.png" alt="asobi" />
        </div>
        <div class="project_item_description">
          <p class="project_item_description_text">
            ChatGPT Assistants API 가 출시되고 빠르게 프로토타이핑한 웹 서비스
            입니다.<br />
            Vue, Express 를 사용하여 제작했습니다.
            <br />
            Axios 로 백엔드와 Restfull 통신을 하고 백엔드는 openai 쪽으로 요청을
            보내는 플로우를 가집니다.<br />
            파라미터의 타입에 따라서 4가지 GPT 서비스로 분기처리하며, 쓰레드ID
            를 생성하고, 고정 프롬포트를 설정하게 됩니다.<br />
            그리고 반응형 웹으로 제작되었으며, 모바일 환경에서도 사용이
            가능합니다.<br />
            * openai 크레딧을 충천해놔야만 작동이 가능합니다. *
          </p>
          <p class="project_item_description_text_bold">
            - 개발 인원 : 1인<br />
            - Frontend : Vue3<br />
            - Backend : Express<br />
            - Frontend Github Link :
            <a
              href="https://github.com/sangwookim0321/asobi_front"
              target="_blank"
              >Github Link</a
            ><br />
            - Backend Github Link :
            <a
              href="https://github.com/sangwookim0321/asobi_backend"
              target="_blank"
              >Github Link</a
            ><br />
            - Page Link :
            <a href="https://asobi-hardy.vercel.app/" target="_blank">Asobi</a>
          </p>
        </div>
      </div>

      <div class="project_item_box">
        <div class="project_item_name">
          <span>Admin Dashboard</span>
        </div>
        <div class="project_item_img">
          <img src="/assets/images/hardy-dashboard.png" alt="dashboard" />
        </div>
        <div class="project_item_description">
          <p class="project_item_description_text">
            SvleteKit 이 굉장히 유명하길래 마침 풀스택 프레임워크가 궁금하여
            만든 관리자 웹 사이트 입니다.<br />
            앞으로 만들게 될 사이드 프로젝트의 모든 관리를 이 관리자 웹에서 총괄
            할 계획이기도 합니다.<br />
            데이터베이스로 supabase 를 사용하였고 accounts 정보는 vercel db 에
            따로 테이블을 생성하여 인증 하게 되며<br />
            유저 로그인 인증 방식으로는 JWT 와 bcrypt 를 사용하였습니다.<br />
            아직은 진행한 사이드 프로젝트가 많지 않아 데이터가 모자라기에 메인
            대시보드 페이지와 설정 페이지의 경우 빈 페이지 입니다. 사실상
            완성이라는 단계가 없는 꾸준히 진행 되어야 하는 프로젝트 입니다.<br />
            개인적으로 모바일 에서도 사용 할 수 있었으면 해서 전체적으로
            반응형으로 제작 하였습니다.
          </p>
          <p class="project_item_description_text_bold">
            - 개발 인원 : 1인<br />
            - Frontend : SvelteKit<br />
            - Backend : SvelteKit<br />
            - DB : Supabase & vercel storage<br />
            - Github Link :
            <a
              href="https://github.com/sangwookim0321/hardy-dev-admin-dashboard"
              target="_blank"
              >Github Link</a
            ><br />
            - Page Link :
            <a
              href="https://hardy-dev-admin-dashboard.vercel.app"
              target="_blank"
              >Admin Dashboard</a
            ><br />
            - 테스트 계정 : ID tester@gmail.com / PW : !tester123!
          </p>
        </div>
      </div>

      <div class="project_item_box">
        <div class="project_item_name">
          <span>하디닷컴</span>
        </div>
        <div class="project_item_img">
          <img src="/assets/images/your-own-box.png" alt="your-own-box" />
        </div>
        <div class="project_item_description">
          <p class="project_item_description_text">
            관리자 웹에서 능력고사 테스트 API 와 페이지를 완성 후 진행 한 사용자
            웹 사이트 입니다.<br />
            흔히 보이는 일반인들이 심심풀이로 할 수있는 테스트 사이트와
            유사합니다.<br />
            관리자 웹에서 공개/비공개 여부에 따라서 사용자 웹에서 노출 여부를
            결정 할 수있으며<br />
            유저들의 테스트 결과를 관리자 웹에서 확인도 가능합니다.<br />
            따로 로그인/인증은 없으며 DB는 supabase 를 사용했습니다.<br />
            마찬가지로 미디어 쿼리를 적용하여 모바일 에서도 이용이 가능합니다.
          </p>
          <p class="project_item_description_text_bold">
            - 개발 인원 : 1인<br />
            - Frontend : SvelteKit<br />
            - Backend : SvelteKit<br />
            - DB : Supabase<br />
            - Github Link :
            <a
              href="https://github.com/sangwookim0321/your-own-box"
              target="_blank"
              >Github Link</a
            ><br />
            - Page Link :
            <a href="https://your-own-box.vercel.app" target="_blank"
              >Hardy.com</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import LoadingSpinner from "@/components/LoadingSpinner.vue"
export default {
    components: {
        LoadingSpinner
    },
  name: "Main",
  data() {
    return {
      item: {
          id: 0,
          created_at: '',
          content: '',
          type: '',
      },
        message: '스킬 아이콘을 클릭해 주세요.',
        messageStatus: 0,
      isLoading: false,
      exampleMessage: ''
    }
  },
  methods: {
      async getItem(type) {
          this.isLoading = true

          try {
              const response = await axios.get(`https://hardy-dev-admin-dashboard.vercel.app/api/portfolio/${type}`)
              this.item = response.data.data
              this.item.content = this.item.content.replace(/\n/g, '<br>')
              this.messageStatus = response.data.status
              this.message = response.data.message
          } catch (err) {
              console.error(err)
              this.message = err.response.data.message
              this.messageStatus = err.response.data.status
          } finally {
              this.isLoading = false
          }
      }
  },
}
</script>

<style scoped>
span {
  font-family: "Pretendard", sans-serif;
}
p {
  font-family: "Pretendard", sans-serif;
}
.main_container {
  position: relative;
  width: 100%;
}
.background_box {
  background-image: url("/assets/images/main_img.png");
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
.p3,
.p4 {
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.skill_content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  height: 600px;
  background-color: #fff;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  margin-bottom: 20px;
}
.skill_content span {
  font-size: 24px;
  font-weight: 700;
  text-align: center;
}
.skill_message {
    font-size: 20px;
}
.content_v_html {
  height: 100%;
  padding: 20px;
  font-size: 20px;
  line-height: 1.5;
  overflow-y: scroll;
  font-family: 'Pretendard', sans-serif;
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
  align-items: center;
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
.project_item_box {
  width: 50%;
  height: 100%;
  background-color: #fff;
  margin-top: 50px;
  border-radius: 20px;
}
.project_item_name {
  width: 100%;
  padding: 20px;
  font-size: 24px;
  font-weight: 700;
  border-bottom: 1px solid #6f5cdd;
}
.project_item_img {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.project_item_img img {
  width: 100%;
  height: 100%;
}
.project_item_description {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.project_item_description_text {
  font-size: 18px;
  line-height: 2;
  padding: 20px;
}
.project_item_description_text_bold {
  font-size: 20px;
  font-weight: 700;
  line-height: 2;
  padding: 20px;
}

/* 스크롤바 전체 스타일 */
.content_v_html::-webkit-scrollbar {
    width: 6px; /* 스크롤바의 너비 */
    height: 6px; /* 스크롤바의 높이 (가로 스크롤일 경우) */
}

/* 스크롤바 트랙 (바탕) 스타일 */
.content_v_html::-webkit-scrollbar-track {
    background: #f1f1f1; /* 스크롤바 트랙의 배경색 */
}

/* 스크롤바 핸들 (움직이는 부분) 스타일 */
.content_v_html::-webkit-scrollbar-thumb {
    background: #888; /* 스크롤바 핸들의 색상 */
}

/* 스크롤바 핸들을 호버할 때 스타일 */
.content_v_html::-webkit-scrollbar-thumb:hover {
    background: #555; /* 호버 시 핸들의 색상 */
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

@media (max-width: 768px) {
    .background_box {
        height: 50vh;
    }
    .p1 {
        font-size: 20px;
    }
    .p2 {
        font-size: 16px;
    }
    .p3,
    .p4 {
        font-size: 14px;
    }
    .intro_box {
        width: 100%;
        justify-content: center;
    }
    .about_container {
        flex-direction: column;
        padding: 20px 0 0 20px;
    }
    .about_box_left {
        justify-content: start;
        padding: 0;
        font-size: 30px;
    }
    .about_box {
        width: 100%;
        margin: 20px 0 70px 0;
    }
    .row {
        flex-direction: column;
    }
    .item_text span:nth-child(1) {
        font-size: 18px;
    }
    .item_text span:nth-child(2) {
        font-size: 16px;
    }
    .item {
        margin-top: 10px;
    }
    .skill_container {
        flex-direction: column-reverse;
        justify-content: unset;
        align-items: end;
        padding: 20px;
    }
    .skill_box {
        width: 100%;
        padding: 10px 0 0 0;
    }
    .item_skill {
        justify-content: center;
        height: 100px;
    }
    .item_skill div img {
        width: 80px;
    }
    .skill_box_left {
        padding: 0;
        font-size: 30px;
    }
    .skill_box_left div {
        display: flex;
    }
    .skill_content_box {
        padding-top: 20px;
    }
    .skill_content {
        width: 100%;
        height: 300px;
    }
    .skill_message {
        padding: 20px;
    }
    .skill_message {
        font-size: 16px;
    }
    .content_v_html {
        font-size: 16px;
    }
    .project_container {
        padding: 20px;
    }
    .project_item_box {
        width: 100%;
    }
}

</style>
