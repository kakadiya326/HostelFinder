//get Manager data
async function getManager(data) {
    return await apiDetails(`manager/?email=${data.email}&password=${data.password}`);
    console.log('new');
}
//add Manager data
async function postManager(data) {
    return await apiPost('manager', data);
}