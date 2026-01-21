import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', {
  state: () => ({
    loading: false,
    toast: ''
  }),

  getters: {
    isLoading: s => s.loading,
    hasToast: s => !!s.toast
  },

  actions: {
    setLoading(val) {
      this.loading = val
    },
    showToast(msg) {
      this.toast = msg
    },
    clearToast() {
      this.toast = ''
    }
  }
})
