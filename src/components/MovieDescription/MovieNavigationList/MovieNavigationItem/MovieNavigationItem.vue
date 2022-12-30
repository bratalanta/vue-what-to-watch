<template>
  <li
    :class="[
      'film-nav__item',
      itemName.toLowerCase() === currentNavigationItemName
        ? 'film-nav__item--active'
        : null,
    ]"
  >
    <router-link
      :to="{
        name: movieRoute,
        hash: MovieNavigationHash[itemName],
      }"
      class="film-nav__link"
      >{{ itemName }}</router-link
    >
  </li>
</template>

<script lang="ts">
import { MovieNavigationHash, RouteName } from '../../../../const'
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      movieRoute: RouteName.Movie,
      MovieNavigationHash,
      currentNavigationItemName: this.$route.hash.slice(1),
    }
  },
  watch: {
    $route(newRoute) {
      this.currentNavigationItemName = newRoute.hash.slice(1)
    },
  },
  props: {
    itemName: {
      type: String,
      required: true,
    },
  },
})
</script>
