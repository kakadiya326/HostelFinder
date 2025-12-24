// get details
async function getStdDetails(id) {
    return  await apiDetails(`students/${id}`);
}

async function deleteStudent(id) {
    await apiDelete(`students/${id}`);
}