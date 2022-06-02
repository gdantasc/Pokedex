<template>
  <div class="container">
    <Input @input="filter = $event.target.value" />
    <Card
      v-for="pokemon in filteredPokemons"
      :key="pokemon.id"
      :pokemon="pokemon"
    />
    <button @click="scrollToTop">↑</button>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import Input from "../components/Input.vue";
import { http } from "../services/config";
import { PAGINATION_MAX } from "../constants/axios";
import { IMAGE_URL } from "../constants/references";

export default {
  name: "App",
  components: {
    Card,
    Input,
  },
  data: () => ({
    pokemons: [],
    filter: "",
  }),
  async mounted() {
    const response = await http.get("pokemon/", {
      params: { limit: PAGINATION_MAX },
    });

    this.pokemons = response.data.results.map((pokemon, index) => ({
      ...pokemon,
      index: index + 1,
      name: `${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.slice(1)} `,
      image: `${IMAGE_URL}${index + 1}.png`,
    }));
  },
  computed: {
    filteredPokemons() {
      if (this.filter) {
        const pokemons = this.pokemons.filter((pokemon) => {
          return pokemon.name
            .toLowerCase()
            .startsWith(this.filter.toLowerCase());
        });
        return pokemons;
      }
      return this.pokemons;
    },
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;

  button {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 20px;
    bottom: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 3px solid #000;
    font-size: 45px;
    background-color: #ff1c1c;
    color: #fff;
    cursor: pointer;
    transition: filter 0.2s;


    &:hover {
      filter: brightness(0.7);
    }
  }
}
</style>
