<template>
  <header :class="{'active': isActive}">
    <ul class="header_left" :class="{'active': isActive}">
      <li>Home</li>
    </ul>
      <ul class="header_right" :class="{'active': isActive}">
        <li>About</li>
        <li>Skill</li>
        <li>Project</li>
      </ul>
  </header>
</template>

<script>

export default {
    name: "Header",
    data() {
        return {
            isActive: false
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll() {
            this.isActive = window.scrollY > 0;
        }
    }
}
</script>

<style scoped>
header {
    position: fixed;
    display: flex;
    justify-content: space-between;
    transition: background-color 0.5s ease;
    width: 100%;
    text-align: center;
    color: #fff;
    z-index: 9999;
}
header.active {
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    opacity: 0.9;
}
.header_left {
    margin: 18px;
}
.header_right {
    display: flex;
    font-size: 20px;
    justify-content: right;
    margin: 24px;
    width: 90%;
}
.header_right li {
    margin: 0 10px;
}
ul li {
    font-size: 26px;

}
ul.active {
    color: #212121;
}
ul li:hover {
    color: #1b8888;
    cursor: pointer;
}
</style>