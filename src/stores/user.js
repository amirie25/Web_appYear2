import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    email: '',
    isAuthenticated: false
  }),

  getters: {
    hasEmail: s => !!s.email,
    emailDomain: s => (s.email.includes('@') ? s.email.split('@')[1] : '')
  },

  actions: {
    setEmail(val) {
      this.email = val
    },
    login() {
      this.isAuthenticated = true
    },
    logout() {
      this.isAuthenticated = false
    }
  }
})
