const QuestionSet = require('../lib/questions');

describe('QuestionSet Class', () => {
    describe('Initialisation', () => {
        it("should accept two arrays of objects of any length and provide one array called questions", () => {
            const inpt1 = [{title: "one", type: "test"}, {title: "two", type: "test"}];
            const inpt2 = [{title: "three", type: "test"}, {title: "four", type: "test"}, {title: "five", type: "test"}]

            const newQuestions = new QuestionSet(inpt1, inpt2);

            expect(newQuestions.questions.length).toEqual(5);
            expect(newQuestions.questions[2].title).toEqual("three");
        })
    })
})