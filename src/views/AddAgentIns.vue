<template>
  <div class="main">
    <h3 class="heading">Thêm Agent</h3>
    <div class="main__content">
      <li>
        Trong phần <strong>Cài đặt</strong>, chọn mục <strong>Agent</strong>,
        sau đó click chọn <strong>Thêm nhân viên / agent</strong>.
        <img
          src="../assets/img/addAgentScreen.png"
          alt="Register Screen"
          class="center"
        />
      </li>
      <li>
        Bạn có quyền lựa chọn 1 trong 3 vai trò cho nhân viên được thêm mới, bao
        gồm:
        <ul>
          <li><strong>Quản trị viên</strong></li>
          <li><strong>Giám sát viên</strong></li>
          <li><strong>Agent</strong></li>
        </ul>
      </li>
      <li>
        Sau khi điền đủ Tên nhân viên, Loại nhân viên và Email của agent mà bạn
        muốn thêm vào kênh chat, click chọn Thêm nhân viên
        <img
          src="../assets/img/addAgentScreen2.png"
          alt="Register Screen"
          class="center"
        />
        Sau đó, email xác nhận sẽ được gửi về hộp thư của agent đã được
        thêm.Agent vừa được thêm sẽ nhấn chọn Confirm my account để xác thực tài
        khoản. <br />
      </li>
      <li>
        Agent mới được thêm sẽ nhập và xác nhận mật khẩu mới để bắt đầu sử thực
        hiện công việc trong VSS Chat Platform.Khi agent thực hiện truy cập vào
        VSS Chat, tài khoản của agent đó sẽ ở chế độ online và Đã xác minh.
        <br />
        Bạn có thể click vào biểu tượng
        <span class="material-icons-outlined">edit</span> khi muốn chỉnh sửa
        thông tin nhân viên. Mặt khác, nếu bạn muốn xóa bỏ nhân viên nào đó, hãy
        click vào biểu tượng
        <span class="material-icons-outlined">cancel</span>.
      </li>
      <li>
        Trường hợp chỉnh sửa tên hoặc loại nhân viên, bạn chỉ cần đổi tên hoặc
        thay đổi loại nhân viên rồi chọn <strong>Chỉnh sửa nhân viên</strong> là
        hoàn tất.
        <img
          src="../assets/img/editAgent.png"
          alt="Edit Agent"
          class="center"
        />
      </li>
      <li>
        Trường hợp muốn đặt lại mặt khẩu tài khoản của nhân viên, click chọn
        <strong>Đặt lại mật khẩu</strong>, sau đó sẽ có 1 email gửi về hòm thư
        của nhân viên đó. Nhân viên nhận được email sẽ nhấn chọn
        <strong>Change my password</strong> để thay đổi mật khẩu. Nhập mật khẩu
        mới và xác nhận lại, sau đó click <strong>Gửi</strong> để hoàn thành
        việc thay đổi mật <br />
        <img
          src="../assets/img/editAgent1.png"
          alt="Edit Agent"
          class="center"
          style="margin-bottom: 16px"
        />
      </li>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
li .material-icons-outlined {
  font-size: 16px;
}
</style>
