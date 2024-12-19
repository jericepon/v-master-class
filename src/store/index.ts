import { createPinia } from 'pinia';
import { useProjectStore } from './modules/project'; // Adjust the path as necessary

const pinia = createPinia();

export {
  pinia,
  useProjectStore,
};