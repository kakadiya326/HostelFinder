BASE_URL = "http://localhost:3000";

async function getAPI(url) {
    const res = await fetch(`${BASE_URL} / ${url}`);
    return res.json();
}

async function postAPI(url, data) {
    const res = await fetch(`${BASE_URL}/${url}`, {
        method: "POST",
        headers: {
            'Content-Type': 'Application-json'
        },
        body: JSON.stringify(data)
    });
    return res;
}

async function putAPI(url, data) {
    const res = await fetch(`${BASE_URL}/${url}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    return res;
}

async function deleteAPI(url,id) {
    return fetch(`${BASE_URL}/${url}`, { method: "DELETE" });
}