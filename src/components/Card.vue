<template>
  <div class="card-container">
    <div class="img-container">
      <img :src="`${pokemon.image}`" :alt="pokemon.name" />
    </div>
    <div class="text-container">
      <p>{{ pokemon.name }}</p>
      <p>#{{ pokemon.index }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["pokemon"],
};
</script>

<style lang="scss" scoped>
.card-container {
  width: 250px;
  height: 150px;
  padding: 10px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
}
.text-container {
  display: flex;
  justify-content: space-between;
  width: 100%;

  p {
    font-size: 0.9rem;
    color: #2e2e2e;
  }
}
.img-container {
  display: flex;
  align-items: center;

  img {
    width: 110px;
  }
}
</style>