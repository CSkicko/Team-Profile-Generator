const Employee = require('../lib/employee');

describe("Employee Class", () => {
    describe("Initialisation of employee object", () => {
        it("should return an object with a name, id and email", () => {
            const newEmployee = new Employee();

            expect("name" in newEmployee).toEqual(true);
            expect("id" in newEmployee).toEqual(true);
            expect("email" in newEmployee).toEqual(true);
        })

        it("should accept a name, id and email and set these as the new employee attributes", () => {
            const newEmployee = new Employee("testName", "testId", "testEmail");

            expect(newEmployee.name).toEqual("testName");
            expect(newEmployee.id).toEqual("testId");
            expect(newEmployee.email).toEqual("testEmail");
        })
    })

    describe("Get Employee Name", () => {
        it("should return the employee name when the method is called", () => {
            const newEmployee = new Employee("testName", "testId", "testEmail");

            const returnedName = newEmployee.getName();

            expect(returnedName).toEqual("testName");
        })
    })

    describe("Get Employee Id", () => {
        it("should return the employee id when the method is called", () => {
            const newEmployee = new Employee("testName", "testId", "testEmail");

            const returnedId = newEmployee.getId();

            expect(returnedId).toEqual("testId");
        })
    })

    describe("Get Employee email", () => {
        it("should return the employee email when the method is called", () => {
            const newEmployee = new Employee("testName", "testId", "testEmail");

            const returnedEmail = newEmployee.getEmail();

            expect(returnedEmail).toEqual("testEmail");
        })
    })

    describe("Get Employee role", () => {
        it("should return the employee role when the method is called", () => {
            const newEmployee = new Employee("testName", "testId", "testEmail");

            const returnedRole = newEmployee.getRole();

            expect(returnedRole).toEqual("Employee");
        })
    })
})