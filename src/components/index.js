import Vue from 'vue';
import kProgress from './progress.vue';
import './index.scss';

const Components = {
  kProgress
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;