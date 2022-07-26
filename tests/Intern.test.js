const Intern = require('../lib/intern');

describe('Intern Class', () => {
    describe('Initialisation', () => {
        it("should accept a name, id, email and school and set these as the new intern attributes", () => {
            const newIntern = new Intern("testName", "testId", "testEmail", "testSchool");

            expect(newIntern.name).toEqual("testName");
            expect(newIntern.id).toEqual("testId");
            expect(newIntern.email).toEqual("testEmail");
            expect(newIntern.school).toEqual("testSchool");
        })
    })

    describe("Get intern's school", () => {
        it("should return the intern's school name when the method is called", () => {
            const newIntern = new Intern("testName", "testId", "testEmail", "testSchool");

            const returnedSchool = newIntern.getSchool();

            expect(returnedSchool).toEqual("testSchool");
        })
    })

    describe("Get Intern role", () => {
        it("should return the intern's role when the method is called", () => {
            const newIntern = new Intern("testName", "testId", "testEmail", "testSchool");

            const returnedRole = newIntern.getRole();

            expect(returnedRole).toEqual("Intern");
        })
    })
})