interface ISampleData {
  quizTitle: string;
  quizDescription: string;
  questions: Array<IQuestionData>;
}

interface IQuestionData {
  question: string;
  options: Array<{ text: string; isCorrect: boolean }>;
}

export const quizSampleData: Array<ISampleData> = [
  {
    quizTitle: 'Laravel beginner level quiz',
    quizDescription:
      'In this quiz, you are going to be asked some basic questions which will target your knowledge of Laravel',
    questions: [
      {
        question: 'How to put Laravel applications in maintenance mode?',
        options: [
          { text: 'php artisan maintenance:on', isCorrect: false },
          { text: 'php artisan down', isCorrect: true },
          { text: 'php artisan maintenance:up', isCorrect: false },
          { text: 'php artisan maintenance:down', isCorrect: false },
        ],
      },
      {
        question: 'What is the role of Service provider in Laravel?',
        options: [
          {
            text: 'They allow Laravel to know about the packages which are present and how to bootstrap them',
            isCorrect: true,
          },
          {
            text: 'They allow Laravel to provide services for individual modules',
            isCorrect: false,
          },
        ],
      },
    ],
  },
  {
    quizTitle: 'React Js beginner level quiz',
    quizDescription:
      'In this quiz, you are going to be asked some basic questions which will target your knowledge of React Js',
    questions: [
      {
        question:
          'Which of the following is used in React.js to increase performance?',
        options: [
          { text: 'Original DOM', isCorrect: false },
          { text: 'Origin DOM', isCorrect: false },
          { text: 'Virtual DOM', isCorrect: true },
          { text: 'None of the above', isCorrect: false },
        ],
      },
      {
        question: 'What is ReactJS?',
        options: [
          { text: 'Server-side Framework', isCorrect: false },
          { text: 'user interface Framework', isCorrect: true },
          { text: 'Both', isCorrect: false },
          { text: 'None of the above', isCorrect: false },
        ],
      },
      {
        question: 'Who created React.js?',
        options: [
          { text: 'Jordan Mike', isCorrect: false },
          { text: 'Tim Lee', isCorrect: false },
          { text: 'Jordan Lee', isCorrect: false },
          { text: 'Jordan Walke', isCorrect: true },
        ],
      },
      {
        question: 'In Which language is React.js written?',
        options: [
          { text: 'Python', isCorrect: false },
          { text: 'PHP', isCorrect: false },
          { text: 'JavaScript', isCorrect: true },
          { text: 'Java', isCorrect: false },
        ],
      },
    ],
  },
];
