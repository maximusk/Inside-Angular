interface Window {
    gapi: any;
}

window.gapi = {
    cb: null,
    async load(libraries, cb) {
        this.cb = cb;
        this.jsonp();

    },
    jsonp() {
        const script = document.createElement('script');
        script.src = 'src/app/back-end/data.js';
        document.head.appendChild(script);
    },
    whenLoaded(data) {
        window.gapi.cb(data);
    }
};