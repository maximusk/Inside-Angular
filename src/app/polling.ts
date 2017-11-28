let old = null;

export function poll(cb) {
    setInterval(doPoll((value) => {
        cb(value);
    }), 1000);
}

function doPoll(cb) {
    return async () => {
        const r = await fetch('src/app/back-end/data.json');
        const data = await r.json();
        if (data.value !== old) {
            cb(data.value);
            old = data.value;
        }
    }
}