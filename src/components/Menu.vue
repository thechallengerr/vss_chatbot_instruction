<template>
  <div class="menu" :class="{ 'small-menu': smallMenu }" ref="menu">
    <div class="logo" @click="headHome()">
      <img src="../assets/logo.svg" alt="" class="logo-img" />
      <span class="logo-text">VSS Chatbot Instruction</span>
    </div>
    <menu-item
      v-for="(item, index) in menuTree"
      :key="index"
      :link="item.link"
      :data="item.children"
      :label="item.label"
      :icon="item.icon"
      :depth="0"
      :smallMenu="smallMenu"
    />
    <i @click="smallMenu = !smallMenu" class="material-icons"
      >keyboard_arrow_left</i
    >
  </div>
</template>

<script>
import MenuItem from "./MenuItem.vue";

export default {
  name: "recursive-menu",

  data: () => ({
    smallMenu: false,
    menuTree: [
      {
        label: "Đăng kí & Đăng nhập",
        link: "#",
        children: [
          {
            label: "Đăng kí",
            link: "dang-ki",
          },
        ],
      },
      {
        label: "Cài đặt",
        link: "#",
        children: [
          {
            label: "Thêm Agent",
            link: "them-agent",
          },
          {
            label: "Tạo Nhóm",
            link: "tao-nhom",
          },
          {
            label: "Tích hợp kênh tương tác",
            link: "tich-hop-kenh-tuong-tac",
            children: [
              {
                label: "Tích hợp chatbot với Zalo",
                link: "tich-hop-kenh-tuong-tac/zalo",
              },
              {
                label: "Tích hợp chatbot với Web",
                link: "tich-hop-kenh-tuong-tac/web",
              },
              {
                label: "Tích hợp chatbot với Facebook",
                link: "tich-hop-kenh-tuong-tac/facebook",
              },
            ],
          },
          {
            label: "Tạo nhãn",
            link: "tao-nhan",
          },
          {
            label: "Tạo tin nhắn mẫu",
            link: "tao-tin-nhan-mau",
          },
          {
            label: "Livestream",
            link: "livestream",
          },
          {
            label: "Thuộc tính tùy chỉnh",
            link: "thuoc-tinh-tuy-chinh",
          },
          {
            label: "Cấu hình tự động",
            link: "cau-hinh-tu-dong",
          },
          {
            label: "Tích hợp ứng dụng",
            link: "tich-hop-ung-dung",
          },
          {
            label: "Thiết lập SLA",
            link: "thiet-lap-sla",
          },
          {
            label: "Cài đặt tài khoản",
            link: "cai-dat",
          },
        ],
      },
      {
        label: "Báo cáo",
        link: "bao-cao",
      },
      {
        label: "Thêm liên lạc ",
        link: "them-lien-lac",
      },
      {
        label: "Cuộc hội thoại ",
        link: "cuoc-hoi-thoai",
      },
    ],
  }),
  methods: {
    headHome: () => {
      window.location.replace("/");
    },
    expandMenu() {
      smallMenu = !smallMenu;
    },
  },
  components: {
    MenuItem,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/base.css";
.menu {
  position: fixed;
  height: 100vh;
  width: 300px;
  left: 0;
  top: 0;
  background-color: var(--vss-color);
  border-right: 1px solid #ececec;
  transition: all 0.3s ease;
  overflow: auto;
  .logo {
    display: flex;
    align-items: center;
    cursor: pointer;
    .logo-text {
      color: aliceblue;
      font-weight: 600;
      margin-left: 16px;
    }
  }
  i {
    position: fixed;
    left: 260px;
    font-size: 20px;
    top: 8px;
    user-select: none;
    cursor: pointer;
    transition: all 0.3s ease;
    color: #fff;
  }
  &.small-menu {
    overflow: inherit;
    width: 60px;
    padding-top: 50px;
    i {
      left: 20px;
      transform: rotate(180deg);
    }
  }
}
</style>
