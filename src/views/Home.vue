<template>
  <div class="main" :class="{ smallMenu: ml60 }">
    <div class="heading">
      Chào mừng bạn đến với hướng dẫn sử dụng VSS Chatbot
    </div>
    <div class="table_of_contents">
      <h4>Hướng dẫn sử dụng sẽ bao gồm các mục dưới đây:</h4>
      <ul>
        <li>
          <router-link to="dang-ki">Hướng dẫn đăng kí tài khoản</router-link>
        </li>
        <li>
          Thiết lập trên VSS Chatbot
          <ul>
            <li><router-link to="them-agent">Thêm Agent</router-link></li>
            <li>
              <router-link to="tao-nhom">Tạo nhóm</router-link>
            </li>
            <li>
              <router-link to="tich-hop-kenh-tuong-tac"
                >Tích hợp kênh tương tác</router-link
              >
              <ul>
                <li>
                  <router-link to="tich-hop-kenh-tuong-tac/zalo"
                    >Tích hợp chatbot với Zalo</router-link
                  >
                </li>
                <li>
                  <router-link to="tich-hop-kenh-tuong-tac/web"
                    >Tích hợp chatbot với Web</router-link
                  >
                </li>
                <li>
                  <router-link to="tich-hop-kenh-tuong-tac/facebook"
                    >Tích hợp chatbot với Facebook</router-link
                  >
                </li>
              </ul>
            </li>
            <li>
              <router-link to="tao-nhan">Tạo nhãn</router-link>
            </li>
            <li>
              <router-link to="tao-tin-nhan-mau">Tạo tin nhắn mẫu</router-link>
            </li>
            <li>
              <router-link to="livestream">Livestream</router-link>
            </li>
            <li>
              <router-link to="thuoc-tinh-tuy-chinh"
                >Thuộc tính tùy chỉnh</router-link
              >
            </li>
            <li>
              <router-link to="cau-hinh-tu-dong">Cấu hình tự động</router-link>
            </li>
            <li>
              <router-link to="tich-hop-ung-dung"
                >Tích hợp ứng dụng</router-link
              >
            </li>
            <li>
              <router-link to="thiet-lap-sla">Thiết lập SLA</router-link>
            </li>
            <li>
              <router-link to="cai-dat">Cài đặt</router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link to="/bao-cao">Báo cáo</router-link>
        </li>
        <li>
          <router-link to="/them-lien-lac">Thêm liên lạc</router-link>
        </li>
        <li>
          <router-link to="/cuoc-hoi-thoai">Cuộc hội thoại</router-link>
        </li>
        <li><router-link to="/cuoc-hoi-thoai">Chiến dịch</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../assets/base.css";
.main {
  &.ml_60 {
    margin-left: 70px !important;
  }
  .table_of_contents {
    margin-top: 16px;
    margin-left: 32px;
    margin-bottom: 32px;
    h4 {
      font-weight: bold;
      font-size: 24px;
    }
    li {
      font-size: 18px;
      list-style-type: upper-roman;
      cursor: pointer;
      a {
        color: #000;
        &:hover {
          color: var(--vss-color);
          text-decoration: underline;
        }
      }
      ul {
        margin-left: 32px;
        li {
          list-style-type: decimal;
          a {
            color: #000;
            font-size: 18px;
            &:hover {
              color: var(--vss-color);
              text-decoration: underline;
            }
          }
          ul {
            li {
              list-style-type: lower-alpha;
            }
          }
        }
      }
    }
  }
}
</style>
