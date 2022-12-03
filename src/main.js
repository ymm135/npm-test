import { createApp } from 'vue'
import App from './App.vue'

import { create as ipfsHttpClient } from 'ipfs-http-client'

const client = ipfsHttpClient('http://localhost:5001')
console.log(client)

createApp(App).mount('#app')
