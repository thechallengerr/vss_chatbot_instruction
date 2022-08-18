<script setup>
import { ref } from "vue";
const msg = ref("Creat Label Instruction: ");
</script>
<template>
  <div class="main">
    <h3 class="heading">Thêm nhãn</h3>
    <div class="main__content">
      <li>
        Trong phần <strong>Cài Đặt</strong>, chọn <strong>Nhãn</strong> sau đó
        click chọn <strong>Thêm nhãn</strong>
      </li>
      <img src="../assets/img/addLabel.png" alt="Thêm nhãn" class="center" />
      <li>
        Điền đầy đủ <strong>Tên nhãn</strong> và <strong>Mô tả</strong>, sao đó
        chọn <strong>Tạo</strong> để kết thúc việc thêm nhãn
      </li>
      <img src="../assets/img/addLabel1.png" alt="Thêm nhãn" class="center" />
      <li>
        Nhãn vừa được thêm sẽ xuất hiện, quản trị viên có thể sửa hoặc xóa nhãn.
        Khi muốn chỉnh sửa nhãn, click chọn biểu tượng
        <span class="material-icons-outlined">edit</span>
      </li>
      <img src="../assets/img/addLabel3.png" alt="Thêm nhãn" class="center" />
      <li>
        Chỉnh sửa <strong>Tên nhãn</strong> hoặc <strong>Mô tả</strong>, ngoài
        ra còn có thể chỉnh sửa màu sắc của nhãn. Sau khi chỉnh sửa xong, bạn
        chọn <strong>Chỉnh sửa</strong> để hoàn tất quá trình.
      </li>
      <img src="../assets/img/addLabel4.png" alt="Thêm nhãn" class="center" />
    </div>
  </div>
</template>
<style></style>
