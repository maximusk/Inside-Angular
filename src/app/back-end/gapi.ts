interface Window {
    gapi: any;
}

window.gapi = {
    async load(libraries, cb) {
        const r = await fetch('src/app/back-end/data.json');
        const data = await r.json();
        cb(data);
    }
};