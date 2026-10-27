/* JM31 Measures of Central Tendencies - section quizzes */
SectionQuiz.init({
  quizId: "math-jm31",
  section: "JM31",
  sets: [
    {
      key: "l01",
      label: "L01 · The mean",
      idPrefix: "jm31-",
      questions: [
        {
          id: 1,
          prompt: "The mean of 6, 9, 11, 14 and 20 is",
          choices: [
            "11",
            "12",
            "13",
            "14",
          ],
          answer: 1,
        },
        {
          id: 2,
          prompt: "The mean of 4 numbers is 15. After one number is deleted, the mean of the rest is 12. The deleted number is",
          choices: [
            "18",
            "21",
            "24",
            "27",
          ],
          answer: 2,
        },
        {
          id: 3,
          prompt: "The mean of n numbers increases by 3 when 10 is replaced by 34. Find n.",
          choices: [
            "6",
            "8",
            "10",
            "12",
          ],
          answer: 1,
        },
        {
          id: 4,
          prompt: "The mean of 50 integers is 36. The mean of 20 of them is 30. The mean of the remaining 30 is",
          choices: [
            "38",
            "40",
            "42",
            "44",
          ],
          answer: 1,
        },
        {
          id: 5,
          prompt: "The mean of 2, 5, −4, x, 0 and 9 is 3. Then x =",
          choices: [
            "3",
            "6",
            "8",
            "12",
          ],
          answer: 1,
        },
      ],
    },
    {
      key: "l02",
      label: "L02 · The median",
      idPrefix: "jm31-",
      questions: [
        {
          id: 1,
          prompt: "The median of 3, 8, 2, 9 and 5 is",
          choices: [
            "3",
            "5",
            "8",
            "9",
          ],
          answer: 1,
        },
        {
          id: 2,
          prompt: "The median of 4, 11, 7, 15, 9 and 2 is",
          choices: [
            "7",
            "8",
            "9",
            "11",
          ],
          answer: 1,
        },
        {
          id: 3,
          prompt: "The ages 8, 10, 10, 12, 14 have median",
          choices: [
            "8",
            "10",
            "12",
            "14",
          ],
          answer: 1,
        },
        {
          id: 4,
          prompt: "A stem-and-leaf diagram shows 21, 23, 25, 28, 32, 35, 39. The median is",
          choices: [
            "25",
            "28",
            "32",
            "35",
          ],
          answer: 1,
        },
        {
          id: 5,
          prompt: "If 18 is added to the data 4, 8, 13 and 15, the new median is",
          choices: [
            "8",
            "10.5",
            "13",
            "15",
          ],
          answer: 2,
        },
      ],
    },
    {
      key: "l03",
      label: "L03 · Mean, median and mode together",
      idPrefix: "jm31-",
      questions: [
        {
          id: 1,
          prompt: "The mode of 2, 5, 5, 7, 8, 8, 8, 9 is",
          choices: [
            "5",
            "7",
            "8",
            "9",
          ],
          answer: 2,
        },
        {
          id: 2,
          prompt: "For 3, 4, 4, 5, 9 the mean, median and mode are",
          choices: [
            "5, 4, 4",
            "4, 4, 4",
            "5, 5, 4",
            "4, 5, 4",
          ],
          answer: 0,
        },
        {
          id: 3,
          prompt: "The data 6, 7, 7, 8, 12 have mode 7. After 12 is replaced by 7, the new mode is",
          choices: [
            "6",
            "7",
            "8",
            "12",
          ],
          answer: 1,
        },
        {
          id: 4,
          prompt: "A new value 20 is added to 2, 4, 6, 8, 10. The median",
          choices: [
            "increases by 1",
            "increases by 2",
            "is unchanged",
            "decreases by 1",
          ],
          answer: 0,
        },
        {
          id: 5,
          prompt: "If the mode of 3, 5, x, 5 and 9 is 5, a possible value of x is",
          choices: [
            "3 only",
            "5",
            "9 only",
            "any number except 5",
          ],
          answer: 1,
        },
      ],
    },
    {
      key: "l04",
      label: "L04 · Choosing an appropriate average",
      idPrefix: "jm31-",
      questions: [
        {
          id: 1,
          prompt: "To find the most popular bread in a shop, we should use the",
          choices: [
            "mean",
            "median",
            "mode",
            "range",
          ],
          answer: 2,
        },
        {
          id: 2,
          prompt: "The data 2, 3, 3, 4, 4, 5, 31 are best summarized by the",
          choices: [
            "mean, because 31 should be included.",
            "median, because 31 is an extreme value.",
            "mode 31.",
            "range only.",
          ],
          answer: 1,
        },
        {
          id: 3,
          prompt: "Which average must be one of the data values?",
          choices: [
            "the mean only",
            "the median only",
            "the mode only",
            "the mean and the median",
          ],
          answer: 2,
        },
        {
          id: 4,
          prompt: "The mean of 4, 5, 6, 7 and 100 is 24.4. This mean",
          choices: [
            "well represents the typical value.",
            "is pulled up by the extreme value 100.",
            "equals the median.",
            "equals the mode.",
          ],
          answer: 1,
        },
        {
          id: 5,
          prompt: "For shoe sizes 6, 6, 7, 7, 7, 8, 8, the most suitable average for ordering stock is the",
          choices: [
            "mean",
            "median",
            "mode",
            "mid-range",
          ],
          answer: 2,
        },
      ],
    },
  ],
});
