<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String
  }
};
</script>

<style scoped>
header {
  background: #111;
}

h1 {
  color: #fff;
}
</style>
