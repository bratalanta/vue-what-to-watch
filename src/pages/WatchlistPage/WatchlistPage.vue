<template>
  <div class="user-page">
    <UserHeader />
    <MovieList />
    <PageFooter />
  </div>
</template>

<script>
import PageFooter from '../../components/PageFooter/PageFooter.vue'
import MovieList from '../../components/MovieList/MovieList.vue'
import UserHeader from '../../components/UserHeader/UserHeader.vue'

export default {
  components: { UserHeader, MovieList, PageFooter },
}
</script>

<style lang="scss" scoped></style>
