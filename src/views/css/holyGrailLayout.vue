<template>
  <div class="containe">
    <header></header>
    <main>
      <article></article>
      <nav></nav>
      <aside></aside>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.containe {
  width: 100vw;
  min-height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  main {
    flex: 1;
    min-height: 0;

    display: flex;
    align-items: stretch;
    width: 100%;
  }

  footer {
    margin-top: auto;
  }

  nav {
    width: 220px;
    order: -1;
  }

  article {
    flex: 1;
  }

  aside {
    width: 220px;
  }
}
</style>