import { defineStore } from 'pinia'

export const useAppointmentStore = defineStore('appointment', {
  state: () => ({
    serviceId: '',
    county: '',
    city: '',
    address: '',
    date: '',
    hour: '',
    notes: ''
  }),

  getters: {
    hasService: s => !!s.serviceId,
    hasCounty: s => !!s.county,
    hasCity: s => !!s.city,
    hasAddress: s => !!s.address,
    hasDate: s => !!s.date,
    hasHour: s => !!s.hour,
    isLocationComplete: s => !!s.county && !!s.city && !!s.address,
    isDateTimeComplete: s => !!s.date && !!s.hour,
    isComplete: s =>
      !!s.serviceId && !!s.county && !!s.city && !!s.address && !!s.date && !!s.hour,
    summary: s =>
      `Service=${s.serviceId}, ${s.county}, ${s.city}, ${s.address}, ${s.date} ${s.hour}`
  },

  actions: {
    setService(id) {
      this.serviceId = id
    },
    setCounty(val) {
      this.county = val
    },
    setCity(val) {
      this.city = val
    },
    setAddress(val) {
      this.address = val
    },
    setDate(val) {
      this.date = val
    },
    setHour(val) {
      this.hour = val
    },
    setNotes(val) {
      this.notes = val
    },
    reset() {
      this.serviceId = ''
      this.county = ''
      this.city = ''
      this.address = ''
      this.date = ''
      this.hour = ''
      this.notes = ''
    }
  }
})
