const getUsers =  "SELECT * FROM users";
const getUserById = "SELECT * FROM users WHERE id = $1";
const checkUserExists = "SELECT * FROM users u WHERE u.id = $1";
const addUser = "INSERT INTO users (id,fname,lname, club) VALUES ($1,$2,$3,$4)";
const deleteUser = "DELETE FROM users WHERE id = $1";
const udpdateUser = "UPDATE users SET lname=$1 WHERE id=$2";
module.exports = {
    getUsers,
    getUserById,
    checkUserExists,
    addUser,
    deleteUser,
    udpdateUser,
};