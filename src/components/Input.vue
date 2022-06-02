<template>
  <input type="text" placeholder="Search" />
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

  $gray:#5f5f5f;

input {
  width: 95%;
  background: transparent;
  border: none;
  border-bottom: 1px solid $gray;
  margin: 20px 0;
  padding: 10px;
  font-size: 1rem;
  color: $gray;

  &:focus {
  outline: none;
  }
}
</style>