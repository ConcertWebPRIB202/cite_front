<script lang="ts">
import axios from 'axios';

export default {
  data() {
    return {
      login: "",
      password: "",
      isVisiblePassword: false,
      isVisibleIncorrectData: false,
      isSuccessAuthorize: false
    };
  },

  methods: {
    async authorize () {
      try{
        console.log("Button authorize clicked!");

        const instanceUrl = axios.create({
          baseURL: 'http://localhost:8000',
        });

        const response = await instanceUrl.post('/api/login', {
          email: this.login,
          password: this.password
        });

        if (response.data.token) {
          this.isVisibleIncorrectData = false;
          this.isSuccessAuthorize = true;
          this.saveTokenInCookies(response.data.token);
        }
        else {
          this.isVisibleIncorrectData = true;
        }
      }
      catch (error){
        this.isVisibleIncorrectData = true;
        console.log(error);
      }
    },
    saveTokenInCookies(token: string) {
      // Локал сторадж ? localStorage
      console.log(token);
    },
    toggleVisiblePassword(){
      this.isVisiblePassword = !this.isVisiblePassword;
    }
  },
};
</script>

<template>
    <div v-if="!isSuccessAuthorize" class="login">
    <div class="authorize">
      Авторизация
    </div>
    <div class="line"></div>
    <div class="login-data">
      <img alt="man img" class="img" src="@/assets/man.svg" />
      <input v-bind:class="!isVisibleIncorrectData ? 'login-input' : 'login-input redBorder'" v-model="login" placeholder="Логин">
    </div>
    <div class="login-data">
      <img alt="zamok img" class="img" src="@/assets/zamok.svg" />
      <input v-bind:class="!isVisibleIncorrectData ? 'login-input' : 'login-input redBorder'" v-model="password" placeholder="Пароль" :type="isVisiblePassword ? 'text' : 'password'">
      <img alt="man img" class="eye" :src="isVisiblePassword ? 'src/assets/hidePassword.svg' : 'src/assets/showPassword.svg'" v-on:click="toggleVisiblePassword"/>
    </div>
    <div class="check-login">
      <div class="incorrect-data" v-if="isVisibleIncorrectData">Неправильный логин и/или пароль</div>
      <div class="incorrect-data2" v-if="!isVisibleIncorrectData"></div>
      <button class="go-login" v-on:click="authorize">Войти</button>
    </div>
    <nav class="login-nav">
      <RouterLink to="/" class="login-link">Регистрация</RouterLink>
      <RouterLink to="/restorePassword" class="login-link">Забыли пароль?</RouterLink>
    </nav>
  </div>

  <div v-if="isSuccessAuthorize" class="restore">
    <img alt="zamok img" class="success" src="@/assets/success.svg" />
    <div class="success-text">Вы успешно авторизовались!</div>
    <nav class="login-nav">
      <RouterLink to="/mainpage" class="login-link">Вернуться на главный экран</RouterLink>
    </nav>
  </div>
</template>

<style scoped>

/* .main-background-color{
  background: #FFFFFF !important;
} */
/* .login-body{
  position: absolute;
  height: 100ch;
  width: 1920px;
  background: url(../assets/shaman-image.jpg) no-repeat;
  background-size: cover;
} */

.eye {
  cursor: pointer;
  margin-top: 12px;
  display: flex;
  position: absolute;
  align-items: center;
  right: 70px;
  width: 40px;
  height: 40px;
}
.login-nav {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 30px;
}

.login-link {
  color:#FFFFFF;
  margin: 0px 20px 0px 40px;
  font-size: 17px;
  text-decoration: none;
}

.login-link:hover {
  color:#444444;
}
.login {
  margin: 20% auto auto auto;
  font-family: sans-serif;
  border-radius: 30px;
  /* margin: auto; */
  max-width: 750px;
  max-height: 560px;
  background-color: #171717;
  display: flex;  
  flex-direction: column;
}

.authorize {
  color: white;
  font-size: 40px;
  text-align: center;
  margin-top: 7px;
  margin-bottom: 7px;
}

.line {
  width: 750px;
  border-top: 3px solid #444444;
  margin-bottom: 20px;
}

.login-data {
  position: relative;
  display: flex;
  flex-direction: row;
}

.login-data .img {
  width: 60px;
  height: 60px;
  margin: 5px 20px;
}

.login-input {
  border: none;
  color: #d0d0d0;
  font-size: 25px;
  width: 500px;
  height: 50px;
  margin-top: 7px;
  padding: 0 50px;
  border-radius: 30px;
  background-color: #444444;
}

.login-input text {
  padding-left: 24px;
}

.login-input.redBorder {
  border: groove;
  border-color: red;
}

.incorrect-data {
  margin-top: 25px;
  margin-left: 120px;
  color: #DA0038;
  font-size: 16px;
}

.incorrect-data2 {
  margin-left: 377px;
}

.check-login {
  display: flex;
  text-align: center;
}

.go-login {
  cursor: pointer;
  border: none;
  margin-left: 55px;
  margin-top: 10px;
  border-radius: 30px;
  width: 167px;
  height: 50px;
  font-size: 25px;
  color: white;
  background-color: #444444;
}
</style>