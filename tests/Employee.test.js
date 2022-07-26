const Employee = require('../lib/employee');

describe("Employee Class", () => {
    describe("Initialisation of employee object", () => {
        it("should return an object with a name, id and email", () => {
            const newEmployee = new Employee("testName", "testId", "testEmail");

            expect("name" in newEmployee).toEqual(true);
            expect("id" in newEmployee).toEqual(true);
            expect("email" in newEmployee).toEqual(true);
        })
    })
})