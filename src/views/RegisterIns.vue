<template>
  <div class="main">
    <h2 class="heading">Đăng kí tài khoản</h2>
    <div class="main__content">
      <li>
        <strong>Bước 1:</strong> Truy cập
        <a href="https://chatbot.viettel-softwareservices.vn/app/login"
          >VSSChat</a
        >
      </li>
      <li>
        <strong>Bước 2:</strong> Nếu chưa có tài khoản, chọn
        <strong>Tạo mới tài khoản</strong>
      </li>

      <img
        src="../assets/img/register.png"
        alt="Register Screen"
        class="center"
      />
      <li>
        <strong>Bước 3:</strong> Trong phần
        <strong>Đăng kí tài khoản</strong> điền đầy đủ thông tin được yêu cầu.
        Lưu ý, mật khẩu phải dài tối thiểu 6 ký tự và phải chứa:
        <ul>
          <li>Ít nhất 1 ký tự in hoa (A…Z)</li>
          <li>Ít nhất 1 ký tự số (0...9)</li>
          <li>
            <p>
              Ít nhất 1 ký tự đặc biệt (! @ # $% ^ & * () _ + - = [] {} | '"/
              ^.,` :;? ~)
            </p>
          </li>
        </ul>
        Sau khi đăng kí thành công màn sẽ như sau:
        <img src="../assets/img/reg_success.png" alt="" />
      </li>
      <li>
        <strong>Bước 4:</strong> Sau khi đăng kí tài khoản thành công, email
        được dùng để đăng kí sẽ nhận được thư
        <strong>Hướng Dẫn Xác Nhận</strong> tài khoản, người dùng nhấn chọn
        <strong>Confirm my account</strong> để hoàn tất việc đăng kí.
      </li>
      <li>
        Sau khi xác nhận, trở lại nền tảng và chọn
        <strong>Cài đặt (1)</strong> -> <strong>Agent (2)</strong> để thấy tài
        khoản đang đăng nhập trong vai trò là Quản trị viên và ở trạng thái
        <strong>Đã xác minh (3)</strong>.
      </li>
      <img src="../assets/img/authen.png" alt="" class="center" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.main {
  // margin-top: 32px;
  margin-left: 324px;
  font-weight: 600;
  text-decoration: none;
  &.small-menu {
    margin-left: 100px;
  }
  .main__content {
    margin-left: 32px;
    margin-right: 32px;
    // margin-top: 32px;
    li {
      margin-top: 32px;
      list-style: inside;
      li {
        list-style-type: circle;
        margin-top: 16px;
      }
    }
    strong {
      font-weight: bold;
    }
    img {
      // max-width: 100%;
      margin-top: 32px;
      margin-bottom: 32px;
      height: 400px;
      // width: 100%;
      &.center {
        margin-left: auto;
        margin-right: auto;
        display: block;
      }
    }
  }
  .heading {
    text-transform: uppercase;
    margin-top: 32px;
    margin-left: 32px;
    text-align: left;
    font-size: 36px;
    font-weight: bold;
  }
}
</style>
