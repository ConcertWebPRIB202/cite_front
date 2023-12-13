// import './assets/main.css'
import './assets/base.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import 'virtual:uno.css'

const app = createApp(App)

router.beforeEach((to, from, next) => {

    if (to.path === '/login' || to.path === '/login') 
    {
        document.body.style.background = 'url(src/assets/shaman-image.jpg) no-repeat';
        document.body.style.position = 'static';
        document.body.style.zIndex = '1';
    } 
    else
    {
        document.body.style.background = 'none';
        document.body.style.backgroundColor = '#565656';
    }
    
    next();
  });

app.use(createPinia())
app.use(router)

app.mount('#app')
