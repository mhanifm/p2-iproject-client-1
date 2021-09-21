<template>
  <div id="login-page" class="page container col-12 col-sm-6 col-md-3 shadow">
    <form id="login-form" class="justify-content-center" @submit.prevent="loginHandler">
      <h1 class="text-center mt-10 mb-3"><b>Sign In</b></h1>
      <div class="mb-3">
        <label for="login-email" class="form-label d-flex">Email address</label>
        <input v-model="login.email" type="email" class="form-control" id="login-email" placeholder="Email">
      </div>
      <div class="mb-3">
        <label for="login-password" class="form-label d-flex">Password</label>
        <input v-model="login.password" type="password" class="form-control" id="login-password" placeholder="Password">
      </div><br>
      <button type="submit" class="btn grey mx-auto d-block w-100 text-white"><b>Sign In</b></button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      login: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    loginHandler () {
      const payload = {
        email: this.login.email,
        password: this.login.password
      }
      this.$store.dispatch('submitLogin', payload)
        .then((response) => {
          localStorage.setItem('access_token', response.data.access_token)
          this.$store.commit('SET_IS_LOGGED_IN', true)
          this.$router.push('/')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style scope>
#login-page {
  background-color: #f5f5f5;
  padding-top: 20px;
  padding-bottom: 40px;
  padding-left: 40px;
  padding-right: 40px;
  border-radius: 5%
}

.grey{
  background-color: rgb(78, 80, 80);
}
</style>
