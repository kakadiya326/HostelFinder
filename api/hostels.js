
//load all hostel
async function getHostel() {
    return await apiGet('hostels');
} 

async function getHostelLimit() {
    return await apiGet('hostels?_limit=15');
}

//get manager contact details
async function getManager(id) {
    return await apiGet(`manager/${id}`)
}

//display details
async function getDetails(id) {
    return  await apiDetails(`hostels/${id}`);
}

// Add New hostel
async function addHostel(roomData) {
    await apiPost("hostels", roomData);
    getHostel();
}

//Update hostel's data 
async function updateHostel(id,updatedData) {
    await apiPut(`hostels/${id}`,updatedData)
}


// Delete hostels
async function deleteHostel(id) {
    await apiDelete(`hostels/${id}`);
    getHostel();
}

getHostel();