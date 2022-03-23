import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
    state: () => {
        return {
            count: 0,
            isNavbarOpen: false
        }
    },
    actions: {
        openNavbar () {
            this.isNavbarOpen = !this.isNavbarOpen
        }
    }
})