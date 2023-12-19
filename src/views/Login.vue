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
          baseURL: 'http://127.0.0.1:8000',
        });

        const response = await instanceUrl.post('/auth/login', {
          login: this.login,
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

.success-text {
  padding-top: 20px;
  padding-left: 10px;
  text-align: center;
  color: white;
  font-size: 21px;
}

.success {
  width: 200px;
  margin: 25px 175px 0px 285px;
}
.restore {
  margin: 15% auto auto auto;
  /* margin-top: 200px; */
  font-family: sans-serif;
  border-radius: 30px;
  /* margin: auto; */
  max-width: 750px;
  max-height: 560px;
  background-color: #171717;
  display: flex;  
  flex-direction: column;
}

.restore .header {
  color: white;
  font-size: 40px;
  text-align: center;
  margin-top: 7px;
  margin-bottom: 7px;
}
.empty-auth {
  height: 100px;
}

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
  /* margin-top: 200px; */
  font-family: sans-serif;
  border-radius: 30px;
  /* margin: auto; */
  margin: 15%  auto auto auto;
  width: 650px;
  height: 460px;
  background-color: #171717;
  display: flex;  
  flex-direction: column;
}

.authorize {
  color: white;
  font-size: 40px;
  text-align: center;
  margin-top: 22px;
  margin-bottom: 7px;
}

.line {
  width: 650px;
  border-top: 3px solid #444444;
  margin-bottom: 20px;
}

.login-data {
  position: relative;
  display: flex;
  flex-direction: row;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 4%;
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
  margin-right: 8%;
}

.login-input text {
  padding-left: 24px;
}

.login-input.redBorder {
  border: groove;
  border-color: red;
}

.incorrect-data {
  margin-top: 20px;
  margin-left: 40px;
  padding-right: 35px;
  color: #DA0038;
  font-size: 22px;
}

.incorrect-data2 {
  margin-left: 435px;
}

.check-login {
  display: flex;
  text-align: center;
}

.go-login {
  cursor: pointer;
  border: none;
  margin-top: 30px;
  border-radius: 30px;
  width: 167px;
  height: 50px;
  font-size: 25px;
  color: white;
  background-color: #444444;
}

.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

@media (max-width: 1440px){

  .login {
    height: 460px;
    margin: 15%  auto auto auto;
  }
  .authorize {
    margin-top: 20px;
  }
  .wrapper {
    padding-top: 220px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .login-input {
    padding: 0 36px;
  }
  .login-link {
    margin: 0px 10px 0px 10px;
    font-size: 20px;
  }

}

@media (max-width: 768px){
  
  
  .login-data{
    margin-left: 0%;
  }
  .line {
    width: 640px;
  }
  .incorrect-data {
    font-size: 25px;
    margin-top: 10px;
  }
  .login {
  /* margin-top: 200px; */
  font-family: sans-serif;
  border-radius: 30px;
  /* margin: auto; */
  margin: 50%  auto auto auto;
  width: 660px;
  height: 550px;
  background-color: #171717;
  display: flex;  
  flex-direction: column;
  }
  .check-login {
  display: block;
  text-align: center;
  }
  .img {
    display: none;
  }
  .login-input{
    margin-left: 70px;
    width: 520px;
    margin-top: 30px;
  }
  .eye {
    margin-top: 35px;
    margin-right: 15px;
  }
  .go-login {
    margin-top: 20px;
    margin-left: 0px;
    
  }
  .login-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
  }
  .login-link {
    margin: 10px 0;
    font-size: 24px;
  }
  .wrapper {
    padding-top: 413px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .restore {
    height: 460px;
  }
}
</style>