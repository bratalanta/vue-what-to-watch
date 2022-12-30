<template>
  <div class="logo">
    <router-link
      :to="homeRoute"
      :class="['logo__link', isFooter && 'logo__link--light']"
    >
      <span class="logo__letter logo__letter--1">W</span>
      <span class="logo__letter logo__letter--2">T</span>
      <span class="logo__letter logo__letter--3">W</span>
    </router-link>
  </div>
</template>

<script>
import { AppRoute } from '../../const'

export default {
  props: {
    isFooter: {
      type: Boolean,
    },
  },
  data() {
    return {
      homeRoute: AppRoute.Home,
    }
  },
}
</script>
