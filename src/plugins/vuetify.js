import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';


Vue.use(Vuetify);
/* -- Creación del tema con paleta de colores -- */
const theme = {
  primary: '#7900ff',
  secondary: '#9966ff',
  accent: '#1dc4cd',
  info: '#00CAE3',
  success: '#4CAF50',
  warning: '#FB8C00',
  error: '#FF5252',
}

export default new Vuetify({
    icons: {
        iconfont: 'fa' || 'md'
    },
    theme: {
        themes: {
            dark: {
                background: '#EEEEEE'
            },
            light: theme,
        }
    }
});
