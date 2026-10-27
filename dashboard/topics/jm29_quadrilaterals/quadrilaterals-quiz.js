/* JM29 Quadrilaterals - section quizzes */
SectionQuiz.init({
  quizId: "math-jm29",
  section: "JM29",
  sets: [
    {
      key: "l01",
      label: "L01 · Properties of a parallelogram",
      idPrefix: "jm29-",
      questions: [
        {
          id: 1,
          prompt: "Which of the following are properties of a parallelogram?",
          items: [
            { tag: "I.", text: "Opposite sides are equal." },
            { tag: "II.", text: "Opposite angles are equal." },
            { tag: "III.", text: "The diagonals are equal." },
          ],
          choices: [
            "I and II only",
            "I and III only",
            "II and III only",
            "I, II and III",
          ],
          answer: 0,
        },
        {
          id: 2,
          prompt: "The diagonals of a parallelogram",
          choices: [
            "are perpendicular.",
            "bisect the interior angles.",
            "bisect each other.",
            "are equal.",
          ],
          answer: 2,
        },
        {
          id: 3,
          prompt: "In parallelogram ABCD, ∠A = 70°. Then ∠B =",
          choices: [
            "70°",
            "90°",
            "110°",
            "140°",
          ],
          answer: 2,
        },
        {
          id: 4,
          prompt: "In parallelogram PQRS, PQ = 8 cm and QR = 5 cm. The perimeter is",
          choices: [
            "13 cm",
            "18 cm",
            "26 cm",
            "40 cm",
          ],
          answer: 2,
        },
        {
          id: 5,
          prompt: "Which is NOT always true for a parallelogram?",
          choices: [
            "Opposite sides are parallel.",
            "The diagonals bisect each other.",
            "The diagonals are equal.",
            "Opposite angles are equal.",
          ],
          answer: 2,
        },
      ],
    },
    {
      key: "l02",
      label: "L02 · Showing that a quadrilateral is a parallelogram",
      idPrefix: "jm29-",
      questions: [
        {
          id: 1,
          prompt: "Which is sufficient to show that ABCD is a parallelogram?",
          choices: [
            "AB = CD only.",
            "∠A = ∠C only.",
            "AB // CD and AD // BC.",
            "AC = BD.",
          ],
          answer: 2,
        },
        {
          id: 2,
          prompt: "ABCD has AB = CD, AD = BC and AB // CD. Then ABCD",
          choices: [
            "must be a rectangle.",
            "must be a parallelogram.",
            "must be a rhombus.",
            "need not be a parallelogram.",
          ],
          answer: 1,
        },
        {
          id: 3,
          prompt: "The diagonals of quadrilateral EFGH bisect each other. Then EFGH is",
          choices: [
            "a rectangle.",
            "a rhombus.",
            "a parallelogram.",
            "a square.",
          ],
          answer: 2,
        },
        {
          id: 4,
          prompt: "Which condition alone does NOT prove a parallelogram?",
          choices: [
            "Both pairs of opposite sides are equal.",
            "Both pairs of opposite angles are equal.",
            "The diagonals are equal.",
            "The diagonals bisect each other.",
          ],
          answer: 2,
        },
        {
          id: 5,
          prompt: "In ABCD, AB // CD, AB = CD and AD = BC. Then ABCD is",
          choices: [
            "a trapezium but not a parallelogram.",
            "a parallelogram.",
            "a kite.",
            "a square.",
          ],
          answer: 1,
        },
      ],
    },
    {
      key: "l03",
      label: "L03 · Trapeziums and rhombi",
      idPrefix: "jm29-",
      questions: [
        {
          id: 1,
          prompt: "A trapezium has",
          choices: [
            "two pairs of parallel sides.",
            "exactly one pair of parallel sides.",
            "all sides equal.",
            "equal diagonals always.",
          ],
          answer: 1,
        },
        {
          id: 2,
          prompt: "The area of a trapezium with parallel sides 8 cm and 12 cm and height 5 cm is",
          choices: [
            "40 cm²",
            "50 cm²",
            "60 cm²",
            "100 cm²",
          ],
          answer: 1,
        },
        {
          id: 3,
          prompt: "Which are properties of a rhombus?",
          items: [
            { tag: "I.", text: "All sides are equal." },
            { tag: "II.", text: "The diagonals are perpendicular." },
            { tag: "III.", text: "The diagonals are equal." },
          ],
          choices: [
            "I and II only",
            "I and III only",
            "II and III only",
            "I, II and III",
          ],
          answer: 0,
        },
        {
          id: 4,
          prompt: "The diagonals of a rhombus are 6 cm and 8 cm. Each side is",
          choices: [
            "5 cm",
            "7 cm",
            "10 cm",
            "14 cm",
          ],
          answer: 0,
        },
        {
          id: 5,
          prompt: "An isosceles trapezium has",
          choices: [
            "all angles equal.",
            "equal non-parallel sides and equal diagonals.",
            "perpendicular diagonals.",
            "four equal sides.",
          ],
          answer: 1,
        },
      ],
    },
    {
      key: "l04",
      label: "L04 · The mid-point theorem",
      idPrefix: "jm29-",
      questions: [
        {
          id: 1,
          prompt: "D and E are mid-points of AB and AC of △ABC. Then DE is",
          choices: [
            "equal to AC.",
            "parallel to BC and DE = \\(\\frac{1}{2}\\) BC.",
            "perpendicular to BC.",
            "equal to AB.",
          ],
          answer: 1,
        },
        {
          id: 2,
          prompt: "D, E and F are mid-points of the sides of △ABC. If the perimeter of △ABC is 28 cm, the perimeter of △DEF is",
          choices: [
            "14 cm",
            "7 cm",
            "21 cm",
            "28 cm",
          ],
          answer: 0,
        },
        {
          id: 3,
          prompt: "M and N are mid-points of AB and AC. If BC = 18 cm, then MN =",
          choices: [
            "6 cm",
            "12 cm",
            "9 cm",
            "18 cm",
          ],
          answer: 2,
        },
        {
          id: 4,
          prompt: "The line joining the mid-points of two sides of a triangle is",
          choices: [
            "an altitude.",
            "a perpendicular bisector.",
            "equal to the third side.",
            "parallel to the third side.",
          ],
          answer: 3,
        },
        {
          id: 5,
          prompt: "E and F are mid-points of AB and AC of △ABC. If BC = 22 cm, then EF =",
          choices: [
            "11 cm",
            "9 cm",
            "13 cm",
            "22 cm",
          ],
          answer: 0,
        },
      ],
    },
    {
      key: "l05",
      label: "L05 · Mixed properties of quadrilaterals",
      idPrefix: "jm29-",
      questions: [
        {
          id: 1,
          prompt: "Which is a property of a rectangle but not of every parallelogram?",
          choices: [
            "Opposite sides are equal.",
            "Opposite angles are equal.",
            "The diagonals are equal.",
            "The diagonals bisect each other.",
          ],
          answer: 2,
        },
        {
          id: 2,
          prompt: "A square has all the properties of",
          choices: [
            "a rhombus only.",
            "a rectangle only.",
            "both a rhombus and a rectangle.",
            "a trapezium only.",
          ],
          answer: 2,
        },
        {
          id: 3,
          prompt: "In parallelogram ABCD, ∠A : ∠B = 2 : 3. Then ∠A =",
          choices: [
            "36°",
            "72°",
            "108°",
            "120°",
          ],
          answer: 1,
        },
        {
          id: 4,
          prompt: "Which quadrilateral has perpendicular diagonals that need not be equal?",
          choices: [
            "rectangle",
            "a rhombus that is not a square",
            "square",
            "isosceles trapezium",
          ],
          answer: 1,
        },
        {
          id: 5,
          prompt: "The diagonals of a quadrilateral are equal and bisect each other. It is",
          choices: [
            "a rhombus.",
            "a rectangle.",
            "a kite.",
            "a trapezium.",
          ],
          answer: 1,
        },
      ],
    },
  ],
});
