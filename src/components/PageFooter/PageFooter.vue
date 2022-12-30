<template>
  <footer class="page-footer">
    <LogoLink :is-footer="true" />
    <FooterCopyright />
  </footer>
</template>

<script>
import { AppRoute } from '../../const'
import LogoLink from '../LogoLink/LogoLink.vue'
import FooterCopyright from './FooterCopyright/FooterCopyright.vue'

export default {
  components: { FooterCopyright, LogoLink },
  data() {
    return {
      AppRoute,
    }
  },
}
</script>

<style lang="scss" scoped></style>
