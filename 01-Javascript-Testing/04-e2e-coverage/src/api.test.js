const { describe, it, before, after } = require("mocha");
const supertest = require("supertest");
const assert = require("assert");

describe("API suite test", () => {
  let app;

  before((done) => {
    app = require("./api");
    app.once("listening", done);
  });

  after((done) => {
    app.close(done);
  });

  describe("/contact:get", () => {
    it("should request the contact page and return HTTP status 200", async () => {
      const response = await supertest(app).get("/contact").expect(200);

      assert.strictEqual(response.text, "contact us page");
    });
  });

  describe("/login:post", () => {
    it("should request login and return HTTP status 200", async () => {
      const response = await supertest(app)
        .post("/login")
        .send({ username: "cassio", password: 123 })
        .expect(200);

      assert.strictEqual(response.text, "ok");
    });

    it("should request login and return HTTP status 401", async () => {
      const response = await supertest(app)
        .post("/login")
        .send({ username: "xuxadasilva", password: 123 })
        .expect(401);

      assert.ok(response.unauthorized);
      assert.strictEqual(response.text, "Log in failed");
    });
  });

  describe("/hi:get - 404", () => {
    it("should request and existing page contact page and return HTTP status 404", async () => {
      const response = await supertest(app).get("/hi").expect(404);

      assert.ok(response.notFound);
      assert.strictEqual(response.text, "not found");
    });
  });
});
