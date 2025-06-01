import { defineStore } from 'pinia';

export const useNotificationStore = defineStore('notification', {
    state: () => ({
        show: false,
        type: 'success' as 'info' | 'success' | 'warning' | 'error',
        title: '',
        message: '',
    }),
    actions: {
        notify(type: 'info' | 'success' | 'warning' | 'error', title: string, message: string) {
            this.type = type
            this.title = title
            this.message = message
            this.show = true

            setTimeout(() => {
                this.show = false
            }, 4000) // auto hide after 4s
        },
        close() {
            this.show = false
        }
    }
})
