const Manager = require("../lib/manager");

describe("Manager Class", () => {
    describe("Initialisation", () => {
        it("should accept a name, id, email and office number and set these as the new manager attributes", () => {
            const newManager = new Manager("testName", "testId", "testEmail", 1234);

            expect(newManager.name).toEqual("testName");
            expect(newManager.id).toEqual("testId");
            expect(newManager.email).toEqual("testEmail");
            expect(newManager.officeNo).toEqual(1234);
        })
    })

    describe("Get Manager role", () => {
        it("should return the manager's role when the method is called", () => {
            const newManager = new Manager("testName", "testId", "testEmail", 1234);

            const returnedRole = newManager.getRole();

            expect(returnedRole).toEqual("Manager");
        })
    })
})