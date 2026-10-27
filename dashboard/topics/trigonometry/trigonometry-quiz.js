/* JM34 Trigonometric Relations - section quizzes */
SectionQuiz.init({
  quizId: "math-jm34",
  section: "JM34",
  sets: [
    {
      key: "l01",
      label: "L01 · Trigonometric ratios of special angles",
      idPrefix: "jm34-",
      questions: [
        {
          id: 1,
          prompt: "√2 cos 45° =",
          choices: [
            "1",
            "√2",
            "\\(\\frac{1}{2}\\)",
            "2",
          ],
          answer: 0,
        },
        {
          id: 2,
          prompt: "cos 30° =",
          choices: [
            "\\(\\frac{1}{2}\\)",
            "\\(\\frac{√2}{2}\\)",
            "\\(\\frac{√3}{2}\\)",
            "√3",
          ],
          answer: 2,
        },
        {
          id: 3,
          prompt: "tan 45° =",
          choices: [
            "0",
            "\\(\\frac{1}{√3}\\)",
            "1",
            "√3",
          ],
          answer: 2,
        },
        {
          id: 4,
          prompt: "tan 30° =",
          choices: [
            "\\(\\frac{1}{√3}\\)",
            "1",
            "√3",
            "\\(\\frac{√3}{2}\\)",
          ],
          answer: 0,
        },
        {
          id: 5,
          prompt: "sin 60° + cos 30° =",
          choices: [
            "1",
            "√3",
            "\\(\\frac{√3}{2}\\)",
            "\\(\\frac{1}{2}\\)",
          ],
          answer: 1,
        },
      ],
    },
    {
      key: "l02",
      label: "L02 · Finding ratios in a right-angled triangle",
      idPrefix: "jm34-",
      questions: [
        {
          id: 1,
          prompt: "If cos θ = \\(\\frac{3}{5}\\) and θ is acute, then sin θ =",
          choices: [
            "\\(\\frac{3}{4}\\)",
            "\\(\\frac{4}{5}\\)",
            "\\(\\frac{3}{5}\\)",
            "\\(\\frac{5}{4}\\)",
          ],
          answer: 1,
        },
        {
          id: 2,
          prompt: "If tan θ = \\(\\frac{5}{12}\\) and θ is acute, then sin θ =",
          choices: [
            "\\(\\frac{5}{12}\\)",
            "\\(\\frac{5}{13}\\)",
            "\\(\\frac{12}{13}\\)",
            "\\(\\frac{13}{5}\\)",
          ],
          answer: 1,
        },
        {
          id: 3,
          prompt: "If sin θ = 0.6 and θ is acute, then cos θ =",
          choices: [
            "0.4",
            "0.8",
            "0.6",
            "1.2",
          ],
          answer: 1,
        },
        {
          id: 4,
          prompt: "If tan θ = 2 and θ is acute, then sin θ =",
          choices: [
            "\\(\\frac{1}{√5}\\)",
            "\\(\\frac{2}{√5}\\)",
            "\\(\\frac{2}{3}\\)",
            "√5",
          ],
          answer: 1,
        },
        {
          id: 5,
          prompt: "In a right-angled triangle, the side opposite 30° is 6 cm. The hypotenuse is",
          choices: [
            "3 cm",
            "6√3 cm",
            "12 cm",
            "12√3 cm",
          ],
          answer: 2,
        },
      ],
    },
    {
      key: "l03",
      label: "L03 · Complementary angles",
      idPrefix: "jm34-",
      questions: [
        {
          id: 1,
          prompt: "If sin θ = cos 50°, the acute angle θ is",
          choices: [
            "40°",
            "50°",
            "60°",
            "140°",
          ],
          answer: 0,
        },
        {
          id: 2,
          prompt: "If cos θ = sin 22°, the acute angle θ is",
          choices: [
            "22°",
            "68°",
            "78°",
            "112°",
          ],
          answer: 1,
        },
        {
          id: 3,
          prompt: "sin(90° − θ) =",
          choices: [
            "sin θ",
            "cos θ",
            "tan θ",
            "1 − sin θ",
          ],
          answer: 1,
        },
        {
          id: 4,
          prompt: "tan(90° − θ) =",
          choices: [
            "tan θ",
            "cot θ",
            "−tan θ",
            "1",
          ],
          answer: 1,
        },
        {
          id: 5,
          prompt: "cos 20° − sin 70° =",
          choices: [
            "0",
            "1",
            "sin 20°",
            "cos 70°",
          ],
          answer: 0,
        },
      ],
    },
    {
      key: "l04",
      label: "L04 · Trigonometric identities",
      idPrefix: "jm34-",
      questions: [
        {
          id: 1,
          prompt: "sin²θ + cos²θ =",
          choices: [
            "0",
            "1",
            "tan²θ",
            "2",
          ],
          answer: 1,
        },
        {
          id: 2,
          prompt: "\\(\\frac{1 − cos²θ}{sin θ}\\) =",
          choices: [
            "0",
            "1",
            "sin θ",
            "tan θ",
          ],
          answer: 2,
        },
        {
          id: 3,
          prompt: "1 − sin²θ =",
          choices: [
            "tan²θ",
            "cos²θ",
            "sin²θ",
            "1",
          ],
          answer: 1,
        },
        {
          id: 4,
          prompt: "(1 + cos θ)(1 − cos θ) =",
          choices: [
            "sin²θ",
            "cos²θ",
            "1",
            "tan²θ",
          ],
          answer: 0,
        },
        {
          id: 5,
          prompt: "Which is an identity?",
          choices: [
            "sin θ = cos θ",
            "tan θ = \\(\\frac{sin θ}{cos θ}\\)",
            "sin θ + cos θ = 1",
            "θ = 90°",
          ],
          answer: 1,
        },
      ],
    },
  ],
});
