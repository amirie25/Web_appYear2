import { defineStore } from 'pinia'

export const useServicesStore = defineStore('services', {
  state: () => ({
    services: [
      { id: 'centrala', name: 'Centrala', durationMin: 480 },
      { id: 'boiler', name: 'Boiler', durationMin: 200 },
      { id: 'tevi', name: 'Tevi', durationMin: 45 }
    ],
    selectedId: ''
  }),

  getters: {
    all: s => s.services,
    count: s => s.services.length,
    selected: s => s.services.find(x => x.id === s.selectedId) || null,
    selectedName: s => (s.services.find(x => x.id === s.selectedId)?.name ?? ''),
    selectedDuration: s => (s.services.find(x => x.id === s.selectedId)?.durationMin ?? 0),
    existsSelected: s => s.services.some(x => x.id === s.selectedId)
  },

  actions: {
    select(id) {
      this.selectedId = id
    },
    clear() {
      this.selectedId = ''
    },
    addService(service) {
      this.services.push(service)
    }
  }
})
