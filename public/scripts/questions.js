const triviaQuestions = {
    /// Simpsons gameQuestions
    data: [
        {
            "question": "What is the name of the Simpsons' next door neighbor?",
            "options": [
                "Barney Gumble",
                "Ned Flanders",
                "Principal Skinner"
            ],
            "answer": "2",
            "difficulty": "easy"

        },
        {
            "question": "Who founded the Simpsons' town?",
            "options": [
                "Jebadiah Springfield",
                "Zachariah Springfield",
                "Springfield Manhattan"
            ],
            "answer": "1",
            "difficulty": "medium"
        },
        {
            "question": "What is the name of Lisa's jazz mentor?",
            "options": [
                "Billy Jazzman",
                "Blind Willy Witherspoon",
                "Bleeding Gums Murphy"
            ],
            "answer": "2",
            "difficulty": "medium"
        },
        {
            "question": "Which one of these is not a catchphrase Bart uses?",
            "options": [
                "Aye Carumba!",
                "Don't have a cow, man!",
                "Woohoo!"
            ],
            "answer": "2",
            "difficulty": "easy"

        },
        {
            "question": "What did the Simpsons get for their first Christmas?",
            "options": [
                "A dog",
                "A cat",
                "A hamster"
            ],
            "answer": "0",
            "difficulty": "easy"
        },
        {
            "question": "What does Bart do in the opening credits?",
            "options": [
                "Write on the blackboard",
                "Play a practical joke on Homer",
                "Drive Marge's car"
            ],
            "answer": "0",
            "difficulty": "easy"
        },
        {
            "question": "What is the name of the minister at the First Church of Springfield?",
            "options": [
                "Ned Flanders",
                "Timothy Lovejoy",
                "Carl Carlson"
            ],
            "answer": "1",
            "difficulty": "medium"
        },
        {
            "question": "Where does Marge hide the Christmas money?",
            "options": [
                "In her hair",
                "In the glove compartment of her car",
                "In the attic"
            ],
            "answer": "0",
            "difficulty": "medium"
        },
        {
            "question": "What nationality were the people who bought the power plant from Mr. Burns?",
            "options": [
                "French",
                "German",
                "Swiss"
            ],
            "answer": "1",
            "difficulty": "easy"
        },
        {
            "question": "What is the name of Mr. Burns' teddy bear?",
            "options": [
                "Nono",
                "Gogo",
                "Bobo"
            ],
            "answer": "2",
            "difficulty": "easy"

        },
        {
            "question": "What did Homer buy Marge for her 34th birthday?",
            "options": [
                "A bowling ball",
                "A tackle box",
                "Bobo"
            ],
            "answer": "0",
            "difficulty": "medium"
        },
        {
            "question": "Which cast member performs the voice of Homer Simpson?",
            "options": [
                "Yeardley Smith",
                "Harry Shearer",
                "Dan Castellaneta"
            ],
            "answer": "2",
            "difficulty": "hard"
        },
        {
            "question": "Which cast memeber performs the voice of Marge Simpson?",
            "options": [
                "Nancy Cartwright",
                "Julie Kavner",
                "James L. Brooks"
            ],
            "answer": "1",
            "difficulty": "hard"
        },
        {
            "question": "The Simpsons Movie, a feature-length film, grossed over how much money?",
            "options": [
                "$527 Million",
                "$435 Million",
                "$720 Million"
            ],
            "answer": "0",
            "difficulty": "hard"
        },
        {
            "question": "The Simpsons has how many main cast members?",
            "options": [
                "Six",
                "Seven",
                "Eight"
            ],
            "answer": "0",
            "difficulty": "medium"
        },
        {
            "question": "Why were the Simpsons characters drawn with yellow skin?",
            "options": [
                "Because yellow is very in style.",
                "Matt Groening figured they would be more noticable when channel surfing.",
                "The results of drug trials."
            ],
            "answer": "1",
            "difficulty": "medium"
        },
        {
            "question": "Who served as executive producers during the show's entire history?",
            "options": [
                "Matt Groening and James L. Brooks.",
                "Sam Simon and Tim Long.",
                "Al Jean and Bill Canterbury."
            ],
            "answer": "0",
            "difficulty": "medium"
        },
        {
            "question": "Where did Homer get the idea for his new name, Max Power?",
            "options": [
                "From the nuclear reactor at work",
                "From the Squishee machine at the Kwik-E-Mart",
                "From a hairdryer"
            ],
            "answer": "2",
            "difficulty": "easy"
        },
        {
            "question": "Who said ''So I says to Mabel, I says...",
            "options": [
                "Carl",
                "Lenny",
                "Bart"
            ],
            "answer": "2",
            "difficulty": "easy"
        },
        {
            "question": "Who provided the voice for Poochie in the Itchy & Scratchy & Poochie show?",
            "options": [
                "Troy McClure",
                "Otto",
                "Homer"
            ],
            "answer": "2",
            "difficulty": "easy"
        },
        {
            "question": "What did Bart name his pet elephant?",
            "options": [
                "Noisy",
                "Smashy",
                "Stampy"
            ],
            "answer": "2",
            "difficulty": "easy"
        },
        {
            "question": "What is Chief Wiggum's first name?",
            "options": [
                "Cletus",
                "Clancey",
                "Charlie"
            ],
            "answer": "1",
            "difficulty": "easy"
        },
        {
            "question": "What is Marge's maiden name?",
            "options": [
                "Bouvier",
                "Croupier",
                "Smith"
            ],
            "answer": "0",
            "difficulty": "easy"
        },
        {
            "question": "How long was Marge in prison for when she was caught shoplifting?",
            "options": [
                "20 Days",
                "30 Days",
                "60 Days"
            ],
            "answer": "1",
            "difficulty": "hard"
        },
        {
            "question": "What did Homer smuggle on board the space shuttle?",
            "options": [
                "A tub of gummi beers",
                "A bag of potato chips",
                "A huge pretzel"
            ],
            "answer": "1",
            "difficulty": "medium"
        },
        {
            "question": "Who did Barney replace in the Be Sharps?",
            "options": [
                "Skinner",
                "Chief Wiggum",
                "Moe Szyslak"
            ],
            "answer": "1",
            "difficulty": "medium"
        },
        {
            "question": "What does Smithers collect?",
            "options": [
                "Star Wars memorabilia",
                "Romance comics",
                "Malibu Stacey Dolls"
            ],
            "answer": "2",
            "difficulty": "medium"
        },
        {
            "question": "What is the name of Homer's brother?",
            "options": [
                "Hank Powell",
                "Romance comics",
                "Malibu Stacey Dolls"
            ],
            "answer": "2",
            "difficulty": "medium"
        },
        {
            "question": "How long was Lisa banned from the Springfield History Museum?",
            "options": [
                "One week",
                "One month",
                "Three months"
            ],
            "answer": "2",
            "difficulty": "medium"
        },
        {
            "question": "What is Sideshow Bob's middle name?",
            "options": [
                "Terwilliger",
                "Robert",
                "Bruce"
            ],
            "answer": "0",
            "difficulty": "easy"
        },
        {
            "question": "Which famous person does Marge love to paint?",
            "options": [
                "Paul McCartney",
                "Ringo Starr",
                "George Harrison"
            ],
            "answer": "1",
            "difficulty": "medium"
        },
        {
            "question": "What is the name of the first Simpsons episode aired in the U.S.?",
            "options": [
                "Bart the Genius",
                "Meet The Simpsons",
                "An Enchanted Evening"
            ],
            "answer": "0",
            "difficulty": "hard"
        },
        {
            "question": "Who sold a defective monorail system to Springfield?",
            "options": [
                "Gil Gunderson",
                "Lionel Hutz",
                "Lyle Lanley"
            ],
            "answer": "2",
            "difficulty": "medium"
        },
        {
            "question": "What insect stars on Channel Ocho?",
            "options": [
                "Fly",
                "Bumblebee man",
                "Bluebottle"
            ],
            "answer": "1",
            "difficulty": "medium"
        },
        {
            "question": "What is the name of the realty firm Homer and Marge used to buy their house?",
            "options": [
                "Frozen Shrimp realty",
                "Blue Blazer realty",
                "Red Blazer realty"
            ],
            "answer": "2",
            "difficulty": "medium"
        },
        {
            "question": "What was the name of Laura Powers' mother?",
            "options": [
                "Ruth",
                "Mary",
                "Ashley"
            ],
            "answer": "0",
            "difficulty": "hard"
        },


    ]
}