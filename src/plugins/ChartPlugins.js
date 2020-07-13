import Chart from 'chart.js';

export default {
    /* eslint-disable */
    install(Vue) {
        Vue.prototype.$_Chart = Chart;
    }
}