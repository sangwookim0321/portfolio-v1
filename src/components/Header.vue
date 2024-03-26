<template>
  <header :class="{'active': isScrolled}">
    <ul class="header_left" :class="{'active': isScrolled}">
      <li @click="scrollMove('Home')">Home</li>
    </ul>
      <ul class="header_right" :class="{'active': isScrolled}">
        <li @click="scrollMove('About')">About</li>
        <li @click="scrollMove('Skill')">Skill</li>
        <li @click="scrollMove('Project')">Project</li>
      </ul>
  </header>
</template>

<script>

export default {
    name: "Header",
    data() {
        return {
            isScrolled: false,
            isMobile: false
        }
    },
    mounted() {
        this.checkWindowSize()
        window.addEventListener('scroll', this.handleScroll)
        window.addEventListener('resize', this.checkWindowSize)
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll)
        window.removeEventListener('resize', this.checkWindowSize)
    },
    methods: {
        handleScroll() {
            this.isScrolled = window.scrollY > 0
        },
        checkWindowSize() {
            this.isMobile = window.innerWidth <= 768
        },
        scrollMove(type) {
            let position
            // 모바일 일때 true, 데스크탑 일때 false

            switch (type) {
                case 'Home':
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                    break
                case 'About':
                    position = this.isMobile ? 300 : 400
                    window.scrollTo({ top: position, behavior: 'smooth' })
                    break
                case 'Skill':
                    position = this.isMobile ? 850 : 1100
                    window.scrollTo({ top: position, behavior: 'smooth' })
                    break
                case 'Project':
                    position = this.isMobile ? 1800 : 2200
                    window.scrollTo({ top: position, behavior: 'smooth' })
                    break
            }
        }
    }
}
</script>

<style scoped>
header {
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: background-color 0.5s ease;
    width: 100%;
    text-align: center;
    color: #fff;
    z-index: 9999;
    overflow-x: hidden;
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

@media (max-width: 768px) {
    header {
        width: 100%;
        color: #212121;
    }
    header.active {
        background-color: #212121;
    }
    ul.active {
        color: #fff;
    }
}

</style>