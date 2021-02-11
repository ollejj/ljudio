<template>
  <div class="register">
    <div>
      <form @submit.prevent="submit">
        <div>
          <label for="email">E-mail</label>
          <input type="text" name="email" v-model="form.email" />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="text" name="password" v-model="form.password" />
        </div>
        <div>
          <label for="firstName">First Name</label>
          <input type="text" name="first_name" v-model="form.first_name" />
        </div>
        <div>
          <label for="lastName">E-mail</label>
          <input type="text" name="last_name" v-model="form.last_name" />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
    <p v-if="showError" id="error">E-mail already in use</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Register",
  components: {},
  data() {
    return {
      form: {
        email: "",
        password: "",
        first_name: "",
        last_name: "",
      },
      showError: false,
    };
  },
  methods: {
    ...mapActions(["Register"]),
    async submit() {
      //console.log(this.form)
      try {
        await this.Register(this.form);
        this.$router.push("/");
        this.showError = false;
      } catch (error) {
        this.showError = true;
      }
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}
button[type="submit"] {
  background-color: #4caf50;
  color: white;
  padding: 12px 20px;
  cursor: pointer;
  border-radius: 30px;
}
button[type="submit"]:hover {
  background-color: #45a049;
}
input {
  margin: 5px;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  padding: 10px;
  border-radius: 30px;
}
#error {
  color: red;
}
</style>