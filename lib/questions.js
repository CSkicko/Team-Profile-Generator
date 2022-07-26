class QuestionSet {
    constructor (base, additional) {
        this.questions = [...base, ...additional];
    }

    getQuestions() {
        return this.questions;
    }
}

module.exports = QuestionSet;