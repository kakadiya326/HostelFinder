// get details
async function getStdDetails(id) {
    return  await apiDetails(`students/${id}`);
}