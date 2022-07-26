const QuestionSet = require('../lib/questions');

describe('QuestionSet Class', () => {
    describe('Initialisation', () => {
        it("should accept an array of questions and a type of employee and provide one array of inquirer questions", () => {
            const inpt1 = [{type: "input", message: "test message", name: "testName"}, {type: "input", message: "test message 2", name: "testName2"}];
            const inpt2 = "Manager"

            const newQuestions = new QuestionSet(inpt1, inpt2);

            expect("type" in newQuestions.questions[0]).toEqual(true);
            expect("message" in newQuestions.questions[0]).toEqual(true);
            expect("name" in newQuestions.questions[0]).toEqual(true);
            expect("type" in newQuestions.questions[newQuestions.questions.length - 1]).toEqual(true);
            expect("message" in newQuestions.questions[newQuestions.questions.length - 1]).toEqual(true);
            expect("name" in newQuestions.questions[newQuestions.questions.length - 1]).toEqual(true);
        })
    })

    describe('Return correct question array', () => {
        it('should return the questions array with the extra manager question when the object method is called', () => {
            const inpt1 = [{type: "input", message: "test message", name: "testName"}, {type: "input", message: "test message 2", name: "testName2"}];
            const inpt2 = "Manager"

            const newQuestions = new QuestionSet(inpt1, inpt2);

            expect(newQuestions.questions[newQuestions.questions.length - 1].type).toEqual('input');
            expect(newQuestions.questions[newQuestions.questions.length - 1].message).toEqual('Please insert the Managers office number:');
            expect(newQuestions.questions[newQuestions.questions.length - 1].name).toEqual('office');
        })

        it('should return the questions array with the extra engineer question when the object method is called', () => {
            const inpt1 = [{type: "input", message: "test message", name: "testName"}, {type: "input", message: "test message 2", name: "testName2"}];
            const inpt2 = "Engineer"

            const newQuestions = new QuestionSet(inpt1, inpt2);

            expect(newQuestions.questions[newQuestions.questions.length - 1].type).toEqual('input');
            expect(newQuestions.questions[newQuestions.questions.length - 1].message).toEqual('Please insert the Engineers github username:');
            expect(newQuestions.questions[newQuestions.questions.length - 1].name).toEqual('ghUsername');
        })

        it('should return the questions array with the extra intern question when the object method is called', () => {
            const inpt1 = [{type: "input", message: "test message", name: "testName"}, {type: "input", message: "test message 2", name: "testName2"}];
            const inpt2 = "Intern"

            const newQuestions = new QuestionSet(inpt1, inpt2);

            expect(newQuestions.questions[newQuestions.questions.length - 1].type).toEqual('input');
            expect(newQuestions.questions[newQuestions.questions.length - 1].message).toEqual('Please insert the Interns school:');
            expect(newQuestions.questions[newQuestions.questions.length - 1].name).toEqual('school');
        })
    })
})