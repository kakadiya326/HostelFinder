const BASE_URL = "https://hostelfinder-backend-1t13.onrender.com";

async function apiGet(url) {
    const res = await fetch(`${BASE_URL}/${url}`);
    return res.json();
}

async function apiDetails(url) {
    const res = await fetch(`${BASE_URL}/${url}`);
    return res.json();
}

async function apiPost(url, data) {
    const res = await fetch(`${BASE_URL}/${url}`, {
        method: "POST",
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(data)
    });
    return res;
}

async function apiPut(url, data) {
    const res = await fetch(`${BASE_URL}/${url}`, {
        method: "PUT",
        headers: {
            "Content-Type": "Application/json",
        },
        body: JSON.stringify(data)
    });
    return res;
}

async function apiPatch(url, data) {
  const res = await fetch(`${BASE_URL}/${url}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  return res.json();
}

async function apiDelete(url) {
    return fetch(`${BASE_URL}/${url}`, { method: "DELETE" });
}