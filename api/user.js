//get user data
async function getUsers(data) {
    return await apiDetails(`users/?email=${data.email}&password=${data.password}`);
}
