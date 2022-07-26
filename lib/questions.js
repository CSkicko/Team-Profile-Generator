class QuestionSet {
    constructor (base, type) {
        let additional;

        switch(type){
            case "Manager":
                additional = [
                    {
                        type: 'input',
                        message: 'Please insert the Managers office number:',
                        name: 'office',
                    }
                ];
                break;
            case "Engineer":
                additional = [
                    {
                        type: 'input',
                        message: 'Please insert the Engineers github username:',
                        name: 'ghUsername',
                    }
                ];
                break;
            case "Intern":
                additional = [
                    {
                        type: 'input',
                        message: 'Please insert the Interns school:',
                        name: 'school',
                    }
                ];
                break;
        }

        this.questions = [...base, ...additional];
    }

    getQuestions() {
        return this.questions;
    }
}

module.exports = QuestionSet;