import { defineStore } from 'pinia'

export const useLocationStore = defineStore('location', {
  state: () => ({
    counties: ['Cluj', 'Bihor', 'Timis', 'Iasi', 'Bucuresti'],
    citiesByCounty: {
      Cluj: ['Cluj-Napoca', 'Turda'],
      Bihor: ['Oradea', 'Beius'],
      Timis: ['Timisoara', 'Lugoj'],
      Iasi: ['Iasi', 'Pascani'],
      Bucuresti: ['Sector 1', 'Sector 2', 'Sector 3', 'Sector 4', 'Sector 5', 'Sector 6']
    },
    selectedCounty: '',
    selectedCity: '',
    address: ''
  }),

  getters: {
    allCounties: s => s.counties,
    countySelected: s => !!s.selectedCounty,
    citySelected: s => !!s.selectedCity,
    addressFilled: s => !!s.address,
    citiesForSelectedCounty: s => s.citiesByCounty[s.selectedCounty] ?? [],
    isComplete: s => !!s.selectedCounty && !!s.selectedCity && !!s.address
  },

  actions: {
    setCounty(val) {
      this.selectedCounty = val
      // reset dependent fields
      this.selectedCity = ''
      this.address = ''
    },
    setCity(val) {
      this.selectedCity = val
    },
    setAddress(val) {
      this.address = val
    },
    reset() {
      this.selectedCounty = ''
      this.selectedCity = ''
      this.address = ''
    }
  }
})
