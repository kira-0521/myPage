import Vue from 'vue'

import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.use(
  AOS.init({
    // Global settings:
    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,

    offset: 150, // 要素がどのくらい入ったか
    delay: 0,
    duration: 400,
    easing: 'linear',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom',
  })
)
