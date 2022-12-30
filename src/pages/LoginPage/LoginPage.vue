<template>
  <div class="user-page">
    <UserHeader />
    <LoginForm />
    <PageFooter />
  </div>
</template>

<script>
import PageFooter from '../../components/PageFooter/PageFooter.vue'
import UserHeader from '../../components/UserHeader/UserHeader.vue'
import LoginForm from '../../components/LoginForm/LoginForm.vue'

export default {
  components: { LoginForm, UserHeader, PageFooter },
}
</script>

<style lang="scss" scoped></style>
