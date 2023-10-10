export const quiz = {
    topic: 'Javascript',
    level: 'Beginner',
    totalQuestions: 4,
    perQuestionScore: 5,
    questions: [
      {
        question: 'Which function is used to serialize an object into a JSON string in Javascript?',
        choices: ['stringify()', 'parse()', 'convert()', 'None of the above'],
        type: 'MCQs',
        correctAnswer: 'stringify()',
      },
      {
        question: 'Which of the following keywords is used to define a variable in Javascript?',
        choices: ['var', 'let', 'var and let', 'None of the above'],
        type: 'MCQs',
        correctAnswer: 'var and let',
      },
      {
        question:
          'Which of the following methods can be used to display data in some form using Javascript?',
        choices: ['document.write()', 'console.log()', 'window.alert', 'All of the above'],
        type: 'MCQs',
        correctAnswer: 'All of the above',
      },
      {
        question: 'How can a datatype be declared to be a constant type?',
        choices: ['const', 'var', 'let', 'constant'],
        type: 'MCQs',
        correctAnswer: 'const',
      },
      {
        question: 'Which of the following methods is used to access HTML elements using Javascript?',
        choices: ['getElementById()', 'getElementByClassName()', 'Both a nad b', 'None of the above'],
        type: 'MCQs',
        correctAnswer: 'Both a and b',
      },
      {
        question: 'Javascript is an _______ language?',
        choices: ['Object-Based', 'Object-Oriented', 'Procedural', 'None of the above'],
        type: 'MCQs',
        correctAnswer: 'Object-oriented',
      },
      {
        question: 'What keyword is used to check whether a given property is valid or not?',
        choices: ['is in', 'lies', 'in', 'exists'],
        type: 'MCQs',
        correctAnswer: 'in',
      },
      {
        question: 'When an operators value is NULL, the typeof returned by the unary operator is:',
        choices: ['Boolean', 'Integer', 'Undefined', 'Object'],
        type: 'MCQs',
        correctAnswer: 'Object',
      },
      {
        question: 'Which of the following is a Javascript framework?',
        choices: ['React', 'Django', 'Cassandra', 'Flask'],
        type: 'MCQs',
        correctAnswer: 'React',
      },
      {
        question: 'What keyword is used to declare an asynchronous function in Javascript?',
        choices: ['await', 'async', 'setTimeout', 'None of the above'],
        type: 'MCQs',
        correctAnswer: 'async',
      },
      
    ],
  }