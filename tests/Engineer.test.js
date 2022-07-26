const Engineer = require('../lib/engineer');

describe('Engineer Class', () => {
    describe('Initialisation', () => {
        it("should accept a name, id, email and github username and set these as the new engineer attributes", () => {
            const newEngineer = new Engineer("testName", "testId", "testEmail", "testUsername");

            expect(newEngineer.name).toEqual("testName");
            expect(newEngineer.id).toEqual("testId");
            expect(newEngineer.email).toEqual("testEmail");
            expect(newEngineer.github).toEqual("testUsername");
        })
    })

    describe("Get github username", () => {
        it("should return the engineer's github username when the method is called", () => {
            const newEngineer = new Engineer("testName", "testId", "testEmail", "testUsername");

            const returnedUsername = newEngineer.getGithub();

            expect(returnedUsername).toEqual("testUsername");
        })
    })

    describe("Get Engineer role", () => {
        it("should return the engineer's role when the method is called", () => {
            const newEngineer = new Engineer("testName", "testId", "testEmail", "testUsername");

            const returnedRole = newEngineer.getRole();

            expect(returnedRole).toEqual("Engineer");
        })
    })
})