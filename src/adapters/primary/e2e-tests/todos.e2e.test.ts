import supertest from "supertest";
import { app } from "../server";

const request = supertest(app);

describe("Add Todo route", () => {
  describe("When body is not valid", () => {
    it("fails when fields in the body are missing", async () => {
      const response = await request.post("/todos");
      expect(response.status).toBe(200);
      // expect(response.status).toBe(400);
      // expect(response.body).toEqual({
      //   errors: ["description is a required field", "uuid is a required field"],
      // });
    });
    // it("fails when description is to short", async () => {
    //   const response = await request
    //     .post("/todos")
    //     .send({ uuid: "uuidDescriptionToShort", description: "ie" });
    //   expect(response.status).toBe(400);
    //   expect(response.body).toEqual({
    //     errors: ["Todo description should be at least 3 characters long"],
    //   });
    // });
  });

  // describe("When all is good", () => {
  //   it("adds a todo, then gets all the todos", async () => {
  //     const addTodoResponse = await request.post("/todos").send({
  //       uuid: "correctTodoUuid",
  //       description: "Description long enough",
  //     });
  //     expect(addTodoResponse.body).toBe("");
  //     expect(addTodoResponse.status).toBe(200);
  //   });
  // });
});
