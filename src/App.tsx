import { defineComponent } from 'vue';

import '@/assets/stylus/index.scss'
export const App = defineComponent({
  name: 'App',
  props: {
    content: String,
  },
  setup: (props) => {

    return () => (
      <div>
        <div id="nav">
          <router-link to="/">login   </router-link> / 
          <router-link to="/weclome">   weclome</router-link>
        </div>
        <router-view />
      </div>
    )
  }
})

