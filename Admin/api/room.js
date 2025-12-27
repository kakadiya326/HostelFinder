//load all rooms
async function getRooms() {
    const rooms = await apiGet('rooms');
}

// Add New Room
async function addRoom(roomData) {
    await apiPost("rooms", roomData);
    getRooms();
}

// get details
async function getRoomDetails(id) {
    return await apiDetails(`rooms/${id}`);
}

//Update room's data
async function updateRoomOccupied(id, occupied ) {
    await apiPatch(`rooms/${id}`, {occupied })
    getRooms();
}

// Delete Room
async function deleteRoom(id) {
    await apiDelete(`rooms/${id}`);
    getRooms();
}

getRooms();