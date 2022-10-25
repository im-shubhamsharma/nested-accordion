const data = [
  {
    id: 1,
    level: 0,
    parentId: null,
    name: "John",
    message: "Hello there",
    child: [
      {
        id: 11,
        level: 1,
        parentId: null,
        name: "Kelly",
        message: "I passed my exam with A+",
        child: [
          {
            id: 111,
            level: 2,
            parentId: null,
            name: "Mark",
            message: "I won the contest",
            child: [
              {
                id: 1111,
                level: 3,
                parentId: null,
                name: "Fiona",
                message: "Anyone knows Elon Musk",
                child: [],
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 2,
    level: 0,
    parentId: null,
    name: "Adam",
    message: "Javascript is awesome",
    child: [
      {
        id: 22,
        level: 1,
        parentId: null,
        name: "Mark",
        message: "Javascript is better than python",
        child: [
          {
            id: 222,
            level: 2,
            parentId: null,
            name: "Bob",
            message: "React is the best JS Library",
            child: [
              {
                id: 2222,
                level: 3,
                parentId: null,
                name: "Julie",
                message: "Functional Component in react is future",
                child: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

export default data;
