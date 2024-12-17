import { acceptHMRUpdate, defineStore } from "pinia";

export const useProjectStore = defineStore('project', {
  state: () => ({
    loading: true,
  }),
  actions: {
    async getAllProjects() {
    },
  },
});

if (import.meta.hot)
{
  import.meta.hot.accept(acceptHMRUpdate(useProjectStore, import.meta.hot));
}