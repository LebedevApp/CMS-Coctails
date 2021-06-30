<template>
  <section class="empty-layout">
    <v-img class="bgImg" src="../assets/login/empty.jpg"></v-img>
    <div class="content">
      <router-view />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.empty-layout {
  position: relative;
}
.bgImg {
  width: 100%;
  height: 100vh;
  object-fit: contain;
}
.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 50;
}
</style>