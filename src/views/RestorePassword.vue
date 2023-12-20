<script lang="ts">
export default {
	data() {
    return {
      	login: "",
		code: "",
		successCode: "00000",
		password1: "",
		password2: "",
		isVisibleIncorrectData: false,
		isVisibleIncorrectCode: false,
		isVisiblePassword1: false,
		isVisiblePassword2: false,
		isVisibleIncorrectPassword: false,
		step: 1,
    };
  },

	methods: {
		continues () {
			if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.login)) {
				this.step = 2;
				this.isVisibleIncorrectData = false;
			}
			else {
				this.isVisibleIncorrectData = true;
			}
    },
		newPasswords2 () {
			if (this.code != this.successCode) {
				this.isVisibleIncorrectCode = true;
			}
			else {
				this.isVisibleIncorrectCode = false;
				this.step = 3;
			}
		},
		updatePassword () {
			if (this.password1 != this.password2) {
				this.isVisibleIncorrectPassword = true;
			}
			else {
				this.isVisibleIncorrectPassword = false;
				this.step = 4;
			}
		},
    toggleVisiblePassword1(){
      this.isVisiblePassword1 = !this.isVisiblePassword1;
    }
		,
    toggleVisiblePassword2(){
      this.isVisiblePassword2 = !this.isVisiblePassword2;
    }
	}
}
</script>

<template>
    <div v-if="step == 1" class="restore">
        <div class="restore header">Восстановление пароля</div>
        <div class="line"></div>
				<div class="text">Введите почту, на которую был зарегистрирован ваш аккаунт</div>
				<div class="login-data">
					<img alt="man img" class="img" src="@/assets/man.svg" />
					<input v-bind:class="!isVisibleIncorrectData ? 'login-input' : 'login-input redBorder'" v-model="login" placeholder="E-mail">
				</div>
				<div class="check-login">
					<div class="incorrect-data" v-if="isVisibleIncorrectData">Неправильный e-mail</div>
					<div class="incorrect-data2" v-if="!isVisibleIncorrectData"></div>
					<button class="go-login" v-on:click="continues">Продолжить</button>
				</div>
				<nav class="login-nav">
					<RouterLink to="/login" class="login-link">Вернуться к авторизации</RouterLink>
				</nav>
    </div>

		<div v-if="step == 2" class="restore">
			<div class="restore header">Восстановление пароля</div>
			<div class="line"></div>
			<div class="text">Введите код подтверждения</div>
			<div class="login-data">
				<img alt="man img" class="img" src="@/assets/ok.svg" />
				<input v-bind:class="!isVisibleIncorrectCode ? 'login-input' : 'login-input redBorder'" v-model="code" placeholder="Код">
			</div>
			<div class="check-login">
				<div class="incorrect-code" v-if="isVisibleIncorrectCode">Неправильный код подтверждения</div>
				<div class="incorrect-data2" v-if="!isVisibleIncorrectCode"></div>
				<button class="go-login" v-on:click="newPasswords2">Сменить</button>
			</div>
			<nav class="login-nav">
				<RouterLink to="/login" class="login-link">Вернуться к авторизации</RouterLink>
			</nav>
		</div>

		<div v-if="step == 3" class="restore">
			<div class="restore header">Восстановление пароля</div>
			<div class="line"></div>
			<div class="text">Введите новый пароль</div>
			<div class="login-data">
				<img alt="zamok img" class="img" src="@/assets/zamok.svg" />
				<input v-bind:class="!isVisibleIncorrectPassword ? 'login-input' : 'login-input redBorder'" v-model="password1" placeholder="Пароль" :type="isVisiblePassword1 ? 'text' : 'password'">
				<img alt="man img" class="eye" :src="isVisiblePassword1 ? 'src/assets/hidePassword.svg' : 'src/assets/showPassword.svg'" v-on:click="toggleVisiblePassword1"/>
			</div>
			<div class="login-data">
				<img alt="zamok img" class="img" src="@/assets/zamok.svg" />
				<input v-bind:class="!isVisibleIncorrectPassword ? 'login-input' : 'login-input redBorder'" v-model="password2" placeholder="Повторите пароль" :type="isVisiblePassword2 ? 'text' : 'password'">
				<img alt="man img" class="eye" :src="isVisiblePassword2 ? 'src/assets/hidePassword.svg' : 'src/assets/showPassword.svg'" v-on:click="toggleVisiblePassword2"/>
			</div>
			<div class="check-login">
				<div class="incorrect-password" v-if="isVisibleIncorrectPassword">Пароли должны совпадать</div>
				<div class="incorrect-data2" v-if="!isVisibleIncorrectPassword"></div>
				<button class="go-login" v-on:click="updatePassword">Сохранить</button>
			</div>
			<nav class="login-nav">
				<RouterLink to="/login" class="login-link">Вернуться к авторизации</RouterLink>
			</nav>
		</div>

		<div v-if="step == 4" class="restore">
			<img alt="zamok img" class="success" src="@/assets/success.svg" />
			<div class="success-text">Вы успешно поменяли пароль!</div>
			<nav class="login-nav">
				<RouterLink to="/login" class="login-link">Вернуться на главный экран</RouterLink>
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
	margin: 25px 175px 0px 250px;
}

.incorrect-email {
  margin-top: 25px;
  margin-left: 225px;
  color: #DA0038;
  font-size: 16px;
}

.incorrect-code {
  margin-top: 25px;
  margin-left: 100px;
  margin-right: 150px;
  color: #DA0038;
  font-size: 16px;
}

.incorrect-password {
  margin-top: 25px;
  margin-left: 100px;
  margin-right: 190px;
  color: #DA0038;
  font-size: 16px;
}

.text {
	color: white;
	font-size: 25px;
	padding-left: 20px;
	padding-bottom: 15px;
	width: 400px;
	margin-left: 8%;
}

.restore {
	margin: 15% auto auto auto;
  /* margin-top: 200px; */
  font-family: sans-serif;
  border-radius: 30px;
  /* margin: auto; */
  width: 650px;
  height: 460px;
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
  height: 98px;
  justify-content: center;
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
  font-size: 20px;
  text-decoration: none;
}

.login-link:hover {
  color:#444444;
}
.login {
  margin: 12% auto auto auto;
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
  width: 650px;
  border-top: 3px solid #444444;
  margin-bottom: 20px;
}

.login-data {
  position: relative;
  display: flex;
  flex-direction: row;
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
  margin-top: 25px;
  margin-left: 10%;
  color: #DA0038;
  font-size: 22px;
  margin-right: 29%;
}

.incorrect-data2 {
  margin-left: 477px;
}

.check-login {
  display: flex;
  text-align: center;
}

.go-login {
  cursor: pointer;
  border: none;
  margin-left: -58px;
  margin-top: 10px;
  border-radius: 30px;
  /* width: 167px;
  height: 50px; */
  font-size: 25px;
  color: white;
  background-color: #444444;
  padding: 10px 20px;
}

@media (max-width: 768px){
 .restore{
	margin: 50%  auto auto auto;
 }
 

}
</style>