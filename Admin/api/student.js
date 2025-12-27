// get details
async function getStdDetails(id) {
    return  await apiDetails(`students/${id}`);
}

async function deleteStudent(id) {
    await apiDelete(`students/${id}`);
}

// Add New student
async function addStudent(stdData) {
    await apiPost("students/", stdData);
    
}

//Update student's data 
async function updateStudent(id,updatedData) {
    await apiPut(`students/${id}`, updatedData)
    
}