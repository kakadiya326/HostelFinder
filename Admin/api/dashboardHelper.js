async function refreshLocalStorageAndStats(managerId) {
    const container = document.querySelector(".dashboard");
    if (container) {
        container.innerHTML = `
                <div class="loader-overlay">
                    <div class="loader-box">
                        <div class="loader-spinner"></div>
                        Loading please wait...
                    </div>
                </div>
            `;
    }

    hostelsData = await getHostelDetails(`?managerId=${managerId}`);

    if (!hostelsData.length) {
        localStorage.setItem('totHostels', "[]");
        localStorage.setItem('totRooms', "[]");
        localStorage.setItem('totStudents', "[]");
        if (container) container.innerHTML = "No Hostels Found";
        return;
    }

    let hostelIDs = hostelsData.map(h => h.id);
    let query = hostelIDs.map(id => `hostelId=${id}`).join('&');

    const [roomsData, studentData] = await Promise.all([
        getRoomDetails(`?${query}`),
        getStdDetails(`?${query}`)
    ]);

    localStorage.setItem('totHostels', JSON.stringify(hostelsData));
    localStorage.setItem('totRooms', JSON.stringify(roomsData));
    localStorage.setItem('totStudents', JSON.stringify(studentData));

    if (container) {
        let availableRooms = roomsData.reduce(
            (acc, obj) => acc + (obj.capacity - obj.occupied),
            0
        );

        let fullRooms = roomsData.filter(obj => obj.capacity == obj.occupied);

        container.innerHTML = '';
        makeCards('Total Hostels', hostelsData.length);
        makeCards('Rooms Full', fullRooms.length);
        makeCards('Rooms Available', availableRooms);
        makeCards('Total Students', studentData.length);
    }
}
