import Vue from 'vue'
import App from './App.vue'
import VueViewports from 'vue-viewports'

Vue.config.productionTip = false
Vue.directive('focus', {
    // When the bound element is inserted into the DOM...
    inserted: function (el) {
        // Focus the element
        el.focus()
    }
})

Vue.directive('$model', {
    bind: function (el, binding, vnode) {
        el.oninput = () => (vnode.context[binding.expression] = el.value)
    }
})

const options = [
    {
        rule: '320px',
        label: 'mobile'
    },
    {
        rule: '768px',
        label: 'tablet'
    },
    {
        rule: '1024px',
        label: 'desktop'
    },
    {
        rule: '1920px',
        label: 'hd-desktop'
    },
    {
        rule: '2560px',
        label: 'qhd-desktop'
    },
    {
        rule: '3840px',
        label: 'uhd-desktop'
    }
]

Vue.use(VueViewports, options)

new Vue({
  render: h => h(App),
}).$mount('#app')


