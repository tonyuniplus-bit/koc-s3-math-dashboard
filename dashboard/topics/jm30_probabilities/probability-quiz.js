/* JM30 Probabilities - section quizzes */
SectionQuiz.init({
  quizId: "math-jm30",
  section: "JM30",
  sets: [
    {
      key: "l01",
      label: "L01 · Basic concepts of probability",
      idPrefix: "jm30-",
      questions: [
        {
          id: 1,
          prompt: "A bag contains 3 red balls and 5 blue balls. A ball is drawn at random. P(red) =",
          choices: [
            "\\(\\frac{1}{3}\\)",
            "\\(\\frac{3}{5}\\)",
            "\\(\\frac{3}{8}\\)",
            "\\(\\frac{5}{8}\\)",
          ],
          answer: 2,
        },
        {
          id: 2,
          prompt: "A fair die is thrown. The probability of a number greater than 4 is",
          choices: [
            "\\(\\frac{1}{6}\\)",
            "\\(\\frac{1}{3}\\)",
            "\\(\\frac{1}{2}\\)",
            "\\(\\frac{2}{3}\\)",
          ],
          answer: 1,
        },
        {
          id: 3,
          prompt: "Which of the following is a certain event?",
          choices: [
            "Getting a 7 on a fair die.",
            "Getting a head on a fair coin.",
            "Drawing a king from a pack.",
            "The product of the numbers on two dice is at least 1.",
          ],
          answer: 3,
        },
        {
          id: 4,
          prompt: "Which of the following is an impossible event?",
          choices: [
            "A coin shows tails 6 times in a row.",
            "The sum of two dice is 1.",
            "A family has 4 sons.",
            "A card drawn is an ace.",
          ],
          answer: 1,
        },
        {
          id: 5,
          prompt: "A letter is chosen at random from LITTLE. P(choosing T) =",
          choices: [
            "\\(\\frac{1}{6}\\)",
            "\\(\\frac{1}{3}\\)",
            "\\(\\frac{1}{2}\\)",
            "\\(\\frac{2}{5}\\)",
          ],
          answer: 1,
        },
      ],
    },
    {
      key: "l02",
      label: "L02 · Tree diagrams and combined events",
      idPrefix: "jm30-",
      questions: [
        {
          id: 1,
          prompt: "A fair coin is tossed twice. P(two heads) =",
          choices: [
            "\\(\\frac{1}{4}\\)",
            "\\(\\frac{1}{3}\\)",
            "\\(\\frac{1}{2}\\)",
            "\\(\\frac{3}{4}\\)",
          ],
          answer: 0,
        },
        {
          id: 2,
          prompt: "A coin is tossed and then a die is thrown. The number of possible outcomes is",
          choices: [
            "6",
            "8",
            "12",
            "36",
          ],
          answer: 2,
        },
        {
          id: 3,
          prompt: "A bag has 2 red cards and 1 blue card. A fair coin is tossed and then a card is drawn. P(head and blue) =",
          choices: [
            "\\(\\frac{1}{6}\\)",
            "\\(\\frac{1}{3}\\)",
            "\\(\\frac{1}{2}\\)",
            "\\(\\frac{2}{3}\\)",
          ],
          answer: 0,
        },
        {
          id: 4,
          prompt: "Two cards are drawn together from the cards 1, 2, 3 and 4. The number of possible pairs is",
          choices: [
            "4",
            "6",
            "8",
            "12",
          ],
          answer: 1,
        },
        {
          id: 5,
          prompt: "A fair coin is tossed three times. P(exactly two heads) =",
          choices: [
            "\\(\\frac{1}{8}\\)",
            "\\(\\frac{1}{4}\\)",
            "\\(\\frac{3}{8}\\)",
            "\\(\\frac{1}{2}\\)",
          ],
          answer: 2,
        },
      ],
    },
    {
      key: "l03",
      label: "L03 · Expected value and further probability",
      idPrefix: "jm30-",
      questions: [
        {
          id: 1,
          prompt: "The probability that a train is late is 0.15. In 40 journeys, the expected number of late trains is",
          choices: [
            "4",
            "6",
            "8",
            "15",
          ],
          answer: 1,
        },
        {
          id: 2,
          prompt: "A 3-digit number is formed as 2□4, where □ is a digit from 0 to 9. The probability that the number is divisible by 3 is",
          choices: [
            "\\(\\frac{1}{5}\\)",
            "\\(\\frac{3}{10}\\)",
            "\\(\\frac{2}{5}\\)",
            "\\(\\frac{1}{3}\\)",
          ],
          answer: 2,
        },
        {
          id: 3,
          prompt: "The probability that a printer jams is 0.008. If 2500 pages are printed, the expected number of jams is",
          choices: [
            "16",
            "20",
            "24",
            "32",
          ],
          answer: 1,
        },
        {
          id: 4,
          prompt: "Two cards are drawn at the same time from 3, 5, 6 and 10. P(the product is even) =",
          choices: [
            "\\(\\frac{1}{2}\\)",
            "\\(\\frac{2}{3}\\)",
            "\\(\\frac{5}{6}\\)",
            "\\(\\frac{1}{3}\\)",
          ],
          answer: 2,
        },
        {
          id: 5,
          prompt: "A bag contains x red balls and 8 blue balls. If P(red) = \\(\\frac{1}{3}\\), then x =",
          choices: [
            "2",
            "4",
            "6",
            "8",
          ],
          answer: 1,
        },
      ],
    },
  ],
});
