function setup() {
    return {
        formattedDate: '',
        formattedTime: '',
        init() {
            this.updateTime();
            setInterval(() => {
                this.updateTime();
            }, 1000);
        },
        updateTime() {
            const now = new Date();
            this.formattedDate = now.toLocaleDateString('es-ES', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            this.formattedTime = now.toLocaleTimeString('es-ES');
        }
    };
}
