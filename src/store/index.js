import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
    state: () => {
        return {
            count: 0,
            isOpen: false
        }
    },
    actions: {
        openNavbar () {
            this.isOpen = !this.isOpen
        }
    }
})