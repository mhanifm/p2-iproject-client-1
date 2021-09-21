<template>
  <div id="register-page" class="page container col-12 col-sm-6 col-md-3">
    <form id="register-form" class="justify-content-center mb-3" @submit.prevent="registerHandler">
    <h1 class="text-center mt-10"><b>Sign Up</b></h1>
      <div class="mb-3">
        <label for="register-name" class="form-label d-flex">Username</label>
        <input v-model="register.name" type="text" class="form-control" id="register-name" placeholder="Username">
      </div>
      <div class="mb-3">
        <label for="register-email" class="form-label d-flex">Email address</label>
        <input v-model="register.email" type="email" class="form-control" id="register-email" placeholder="Email">
      </div>
      <div class="mb-3">
        <label for="register-password" class="form-label d-flex">Password</label>
        <input v-model="register.password" type="password" class="form-control" id="register-password" placeholder="Password">
      </div><br>
      <button type="submit" class="btn grey mx-auto d-block w-100 text-white"><b>Sign Up</b></button>
    </form>
  </div>
</template>

<script>
import swal from 'sweetalert'

export default {
  name: 'Register',
  data () {
    return {
      register: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    registerHandler () {
      const payload = {
        name: this.register.name,
        email: this.register.email,
        password: this.register.password
      }
      this.$store.dispatch('submitRegister', payload)
        .then((response) => {
          swal('Successful Registration!', 'You are now registered', 'success')
          this.$router.push('/login')
        })
        .catch((err) => {
          console.log(err.response.data)
        })
    }
  }

}
</script>

<style>
#register-page {
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
