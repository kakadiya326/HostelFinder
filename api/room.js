//load all rooms
async function getRooms() {
    const rooms = await getAPI('rooms');
    console.log(rooms);
}

// Add New Room
async function addRoom(roomData) {
    await apiPost("rooms", roomData);
    getRooms();
}

//Update room's data 


// Delete Room
async function deleteRoom(id) {
    await apiDelete(`rooms/${id}`);
    getRooms();
}

getRooms();