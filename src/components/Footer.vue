<template>
  <div id="footer" ref="footer">
    <div class="line"></div>
    <div class="text">
      <span class="material-icons-outlined">copyright</span>
      <span> VSS Chatbot Instruction</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../assets/base.css";
#footer {
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .line {
    width: 1200px;
    margin-bottom: 32px;
    border-top: 1px solid var(--vt-c-indigo);
  }
  .text {
    display: flex;
    align-items: center;
    color: var(--vt-c-indigo);
    .material-icons-outlined {
      font-size: 24px;
      margin-right: 8px;
      color: var(--vt-c-indigo);
    }
  }
}
</style>
