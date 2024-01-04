const app = require("../app");
const mongoose = require("mongoose");
const request = require("supertest");
const state = require('./state'); // Adjust the path based on your project structure


test("POST /api/auth/signup", async () => {

    const res = await request(app).post("/api/auth/signup").send({
        name: "Alpesh Jamgade", email: generateRandomEmail(), password: "Abc@1234"
    })
    expect(res.statusCode).toBe(200)
});

test("POST /api/auth/login", async () => {

    const res = await request(app).post("/api/auth/login").send({
        email: "alpeshjamgade21@gmail.com", password: "Abc@1234"
    })
    expect(res.statusCode).toBe(200)
    expect(res.body.data.userName)
    expect(res.body.data.token)

    state.setUserAuthToken(res.body.data.token);

});

test("POST /api/notes", async () => {
    const token = state.getUserAuthToken();

    const res = await request(app).post("/api/notes").set('Authorization', token).send({
        title: "My Title", body: "Hello World!!"
    })

    expect(res.statusCode).toBe(200)

    state.setNoteId(res.body.data._id);

});

test("GET /api/notes", async () => {
    const token = state.getUserAuthToken();
    const res = await request(app).get("/api/notes").set('Authorization', token)

    expect(res.statusCode).toBe(200)

});

test("GET /api/notes/noteId", async () => {
    const token = state.getUserAuthToken();
    const noteId = state.getNoteId();

    const res = await request(app).get(`/api/notes/${noteId}`).set('Authorization', token)

    expect(res.statusCode).toBe(200)

});

test("PUT /api/notes/noteId", async () => {
    const token = state.getUserAuthToken();
    const noteId = state.getNoteId();

    const res = await request(app).put(`/api/notes/${noteId}`).set('Authorization', token).send({
        title: "My Updated Title", body: "Bye Bye World!!!"
    })

    expect(res.statusCode).toBe(200)

});

test("POST /api/notes/noteId/share", async () => {
    const token = state.getUserAuthToken();
    const noteId = state.getNoteId();

    const res = await request(app).post(`/api/notes/${noteId}/share?email=pravesh@gmail.com`).set('Authorization', token)
    expect(res.statusCode).toBe(200)

});

test("GET /api/notes/search", async () => {
    const token = state.getUserAuthToken();
    const noteId = state.getNoteId();

    const res = await request(app).get(`/api/notes/search?q=abcd`).set('Authorization', token)

    expect(res.statusCode).toBe(200)

});

test("DELETE /api/notes/noteId", async () => {
    const token = state.getUserAuthToken();
    const noteId = state.getNoteId();

    const res = await request(app).delete(`/api/notes/${noteId}`).set('Authorization', token)

    expect(res.statusCode).toBe(200)

});

function generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(2, 10);

    const email = `${randomString}@example.com`;

    return email;
}