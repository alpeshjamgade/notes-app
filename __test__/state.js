let userAuthToken;
let noteId;

module.exports = {
    getUserAuthToken: () => userAuthToken,
    setUserAuthToken: (token) => {
        userAuthToken = token;
    },
    getNoteId: () => noteId,
    setNoteId: (id) => {
        noteId = id;
    }
};
