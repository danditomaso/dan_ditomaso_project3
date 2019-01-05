const triviaQuestions = {
  /// Simpsons gameQuestions
  data: [
    {
      question: "Who founded the Simpsons' town?",
      choices: [
        "Jebadiah Springfield",
        "Zachariah Springfield",
        "Springfield Manhattan"
      ],
      answer: "Jebadiah Springfield",
      difficulty: "medium"
    },
    // {
    //     "question": "What is the name of Lisa's jazz mentor?",
    //     "choices": [
    //         "Billy Jazzman",
    //         "Blind Willy Witherspoon",
    //         "Bleeding Gums Murphy"
    //     ],
    //     "answer": "2",
    //     "difficulty": "medium"
    // },
    {
      question: "Which one of these is not a catchphrase Bart uses?",
      choices: ["Aye Carumba!", "Don't have a cow, man!", "Woohoo!"],
      answer: "Woohoo!",
      difficulty: "easy"
    },
    {
      question: "What did the Simpsons get for their first Christmas?",
      choices: ["A dog", "A cat", "A hamster"],
      answer: "A dog",
      difficulty: "easy"
    },
    {
      question: "What does Bart do in the opening credits?",
      choices: [
        "Write on the blackboard",
        "Play a practical joke on Homer",
        "Drive Marge's car"
      ],
      answer: "Write on the blackboard",
      difficulty: "easy"
    },
    {
      question:
        "What is the name of the minister at the First Church of Springfield?",
      choices: ["Ned Flanders", "Timothy Lovejoy", "Carl Carlson"],
      answer: "Timothy Lovejoy",
      difficulty: "medium"
    },
    {
      question: "Where does Marge hide the Christmas money?",
      choices: [
        "In her hair",
        "In the glove compartment of her car",
        "In the attic"
      ],
      answer: "In her hair",
      difficulty: "medium"
    },
    {
      question:
        "What nationality were the people who bought the power plant from Mr. Burns?",
      choices: ["French", "German", "Swiss"],
      answer: "German",
      difficulty: "easy"
    },
    {
      question: "What is the name of Mr. Burns' teddy bear?",
      choices: ["Nono", "Gogo", "Bobo"],
      answer: "Bobo",
      difficulty: "easy"
    },
    {
      question: "What did Homer buy Marge for her 34th birthday?",
      choices: ["A bowling ball", "A tackle box", "Bobo"],
      answer: "A bowling ball",
      difficulty: "medium"
    },
    {
      question: "Which cast member performs the voice of Homer Simpson?",
      choices: ["Yeardley Smith", "Harry Shearer", "Dan Castellaneta"],
      answer: "Dan Castellaneta",
      difficulty: "hard"
    },
    {
      question: "Which cast memeber performs the voice of Marge Simpson?",
      choices: ["Nancy Cartwright", "Julie Kavner", "James L. Brooks"],
      answer: "Julie Kavner",
      difficulty: "hard"
    },
    {
      question:
        "The Simpsons Movie, a feature-length film, grossed over how much money?",
      choices: ["$527 Million", "$435 Million", "$720 Million"],
      answer: "$527 Million",
      difficulty: "hard"
    },
    {
      question: "The Simpsons has how many main cast members?",
      choices: ["Six", "Seven", "Eight"],
      answer: "Six",
      difficulty: "medium"
    },
    {
      question: "Why were the Simpsons characters drawn with yellow skin?",
      choices: [
        "Because yellow is very in style.",
        "Matt Groening figured they would be more noticable when channel surfing.",
        "The results of drug trials."
      ],
      answer:
        "Matt Groening figured they would be more noticable when channel surfing.",
      difficulty: "medium"
    },
    {
      question:
        "Who served as executive producers during the show's entire history?",
      choices: [
        "Matt Groening and James L. Brooks.",
        "Sam Simon and Tim Long.",
        "Al Jean and Bill Canterbury."
      ],
      answer: "Matt Groening and James L. Brooks.",
      difficulty: "medium"
    },
    {
      question: "Where did Homer get the idea for his new name, Max Power?",
      choices: [
        "From the nuclear reactor at work.",
        "From the Squishee machine at the Kwik-E-Mart.",
        "From a hairdryer."
      ],
      answer: "From a hairdryer.",
      difficulty: "easy"
    },
    {
      question: "Who said ''So I says to Mabel, I says...",
      choices: ["Carl", "Lenny", "Bart"],
      answer: "Bart",
      difficulty: "easy"
    },
    {
      question:
        "Who provided the voice for Poochie in the Itchy & Scratchy & Poochie show?",
      choices: ["Troy McClure", "Otto", "Homer"],
      answer: "Homer",
      difficulty: "easy"
    },
    {
      question: "What did Bart name his pet elephant?",
      choices: ["Noisy", "Smashy", "Stampy"],
      answer: "Stampy",
      difficulty: "easy"
    },
    {
      question:
        "How long was Marge in prison for when she was caught shoplifting?",
      choices: ["20 Days", "30 Days", "60 Days"],
      answer: "30 Days",
      difficulty: "hard"
    },
    {
      question: "What did Homer smuggle on board the space shuttle?",
      choices: [
        "A tub of gummi beers",
        "A bag of potato chips",
        "A huge pretzel"
      ],
      answer: "A bag of potato chips",
      difficulty: "medium"
    },
    {
      question: "Who did Barney replace in the Be Sharps?",
      choices: ["Skinner", "Chief Wiggum", "Moe Szyslak"],
      answer: "Chief Wiggum",
      difficulty: "medium"
    },
    // {
    //     "question": "What does Smithers collect?",
    //     "choices": [
    //         "Star Wars memorabilia",
    //         "Romance comics",
    //         "Malibu Stacey Dolls"
    //     ],
    //     "answer": "2",
    //     "difficulty": "medium"
    // },
    {
      question: "What is the name of Homer's brother?",
      choices: ["Hank Powell", "Hurbert Powell", "Handsome B. Wonderful"],
      answer: "Hank Powell",
      difficulty: "medium"
    },
    {
      question: "How long was Lisa banned from the Springfield History Museum?",
      choices: ["One week", "One month", "Three months"],
      answer: "Three months",
      difficulty: "medium"
    },
    {
      question: "What is Sideshow Bob's middle name?",
      choices: ["Terwilliger", "Robert", "Bruce"],
      answer: "Terwilliger",
      difficulty: "easy"
    },
    // {
    //     "question": "Which famous person does Marge love to paint?",
    //     "choices": [
    //         "Paul McCartney",
    //         "Ringo Starr",
    //         "George Harrison"
    //     ],
    //     "answer": 1,
    //     "difficulty": "medium"
    // },
    {
      question:
        "What is the name of the first Simpsons episode aired in the U.S.?",
      choices: ["Bart the Genius", "Meet The Simpsons", "An Enchanted Evening"],
      answer: "Bart the Genius",
      difficulty: "hard"
    },
    {
      question: "Who sold a defective monorail system to Springfield?",
      choices: ["Gil Gunderson", "Lionel Hutz", "Lyle Lanley"],
      answer: "Lyle Lanley",
      difficulty: "medium"
    },
    // {
    //     "question": "What insect stars on Channel Ocho?",
    //     "choices": [
    //         "Fly",
    //         "Bumblebee man",
    //         "Bluebottle"
    //     ],
    //     "answer": "1",
    //     "difficulty": "medium"
    // },
    {
      question:
        "What is the name of the realty firm Homer and Marge used to buy their house?",
      choices: [
        "Frozen Shrimp realty",
        "Blue Blazer realty",
        "Red Blazer realty"
      ],
      answer: "Red Blazer realty",
      difficulty: "medium"
    },
    {
      question: "What was the name of Laura Powers' mother?",
      choices: ["Ruth", "Mary", "Ashley"],
      answer: "Ruth",
      difficulty: "hard"
    },
    {
      question:
        "How long was Marge in prison for when she was caught shoplifting?",
      choices: ["20 Days", "30 Days", "60 Days"],
      answer: "30 Days",
      difficulty: "hard"
    },
    {
      question:
        "How long was Marge in prison for when she was caught shoplifting?",
      choices: ["20 Days", "30 Days", "60 Days"],
      answer: "30 Days",
      difficulty: "hard"
    },
    {
      question:
        "How long was Marge in prison for when she was caught shoplifting?",
      choices: ["20 Days", "30 Days", "60 Days"],
      answer: "30 Days",
      difficulty: "hard"
    },
    {
      question:
        "How long was Marge in prison for when she was caught shoplifting?",
      choices: ["20 Days", "30 Days", "60 Days"],
      answer: "30 Days",
      difficulty: "hard"
    },
    {
      question:
        "How long was Marge in prison for when she was caught shoplifting?",
      choices: ["20 Days", "30 Days", "60 Days"],
      answer: "30 Days",
      difficulty: "hard"
    }
  ]
};
