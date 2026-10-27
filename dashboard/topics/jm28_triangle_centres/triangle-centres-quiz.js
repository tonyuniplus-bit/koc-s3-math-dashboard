/* JM28 Special Lines and Centres in Triangles - section quizzes */
SectionQuiz.init({
  quizId: "math-jm28",
  section: "JM28",
  sets: [
    {
      key: "l01",
      label: "L01 · Medians and the centroid",
      idPrefix: "jm28-",
      questions: [
        {
          id: 1,
          prompt: "In △PQR, S is the mid-point of QR. PS is",
          choices: [
            "an altitude of △PQR.",
            "an angle bisector of △PQR.",
            "a perpendicular bisector of QR.",
            "a median of △PQR.",
          ],
          answer: 3,
        },
        {
          id: 2,
          prompt: "G is the centroid of △ABC and D is the mid-point of BC. If AD = 18 cm, then AG =",
          choices: [
            "6 cm",
            "9 cm",
            "12 cm",
            "15 cm",
          ],
          answer: 2,
        },
        {
          id: 3,
          prompt: "Which of the following is always true?",
          choices: [
            "The three medians of a triangle are equal.",
            "The centroid of a triangle always lies inside the triangle.",
            "A median is always perpendicular to the opposite side.",
            "The centroid is the mid-point of each median.",
          ],
          answer: 1,
        },
        {
          id: 4,
          prompt: "The medians of △ABC meet at G. If BG = 8 cm, the median from B is",
          choices: [
            "10 cm",
            "12 cm",
            "16 cm",
            "24 cm",
          ],
          answer: 1,
        },
        {
          id: 5,
          prompt: "D, E and F are mid-points of BC, CA and AB. Then AD, BE and CF",
          choices: [
            "are altitudes.",
            "are perpendicular bisectors.",
            "are concurrent at the centroid.",
            "form the circumcircle.",
          ],
          answer: 2,
        },
      ],
    },
    {
      key: "l02",
      label: "L02 · Perpendicular bisectors and the circumcentre",
      idPrefix: "jm28-",
      questions: [
        {
          id: 1,
          prompt: "A point on the perpendicular bisector of AB is",
          choices: [
            "closer to A than to B.",
            "equidistant from A and B.",
            "always the mid-point of AB.",
            "the orthocentre of △ABC.",
          ],
          answer: 1,
        },
        {
          id: 2,
          prompt: "The circumcentre of a triangle is the intersection of",
          choices: [
            "the medians.",
            "the altitudes.",
            "the angle bisectors.",
            "the perpendicular bisectors of the sides.",
          ],
          answer: 3,
        },
        {
          id: 3,
          prompt: "In a right-angled triangle, the circumcentre is",
          choices: [
            "the right-angled vertex.",
            "the mid-point of the hypotenuse.",
            "inside the triangle but not on a side.",
            "outside the triangle.",
          ],
          answer: 1,
        },
        {
          id: 4,
          prompt: "If △ABC is obtuse-angled at B, the circumcentre",
          choices: [
            "lies inside △ABC.",
            "lies at B.",
            "lies on AC.",
            "lies outside △ABC.",
          ],
          answer: 3,
        },
        {
          id: 5,
          prompt: "In right-angled △XYZ, ∠Y = 90° and XZ = 16 cm. The circumradius is",
          choices: [
            "4 cm",
            "8 cm",
            "12 cm",
            "16 cm",
          ],
          answer: 1,
        },
      ],
    },
    {
      key: "l03",
      label: "L03 · Angle bisectors and the incentre",
      idPrefix: "jm28-",
      questions: [
        {
          id: 1,
          prompt: "The incentre of a triangle is the intersection of",
          choices: [
            "the medians.",
            "the altitudes.",
            "the angle bisectors.",
            "the perpendicular bisectors.",
          ],
          answer: 2,
        },
        {
          id: 2,
          prompt: "Which of the following is always true?",
          choices: [
            "The incentre always lies inside the triangle.",
            "The incentre of an obtuse triangle lies outside.",
            "The incentre of a right-angled triangle is the right-angled vertex.",
            "The incentre and circumcentre always coincide.",
          ],
          answer: 0,
        },
        {
          id: 3,
          prompt: "The incircle of △ABC touches the sides. If O is the incentre, a radius to a point of contact is",
          choices: [
            "a median.",
            "an altitude of △ABC.",
            "perpendicular to that side.",
            "equal to the circumradius.",
          ],
          answer: 2,
        },
        {
          id: 4,
          prompt: "If the three angle bisectors of △PQR meet at I, then I is",
          choices: [
            "the centroid.",
            "the orthocentre.",
            "the circumcentre.",
            "the incentre.",
          ],
          answer: 3,
        },
        {
          id: 5,
          prompt: "Which of the following centres always lie inside a triangle?",
          items: [
            { tag: "I.", text: "the incentre" },
            { tag: "II.", text: "the circumcentre" },
            { tag: "III.", text: "the centroid" },
          ],
          choices: [
            "I only",
            "I and II only",
            "I and III only",
            "I, II and III",
          ],
          answer: 2,
        },
      ],
    },
    {
      key: "l04",
      label: "L04 · Altitudes",
      idPrefix: "jm28-",
      questions: [
        {
          id: 1,
          prompt: "An altitude of a triangle is a line from a vertex that is",
          choices: [
            "half of the opposite side.",
            "perpendicular to the opposite side.",
            "an angle bisector.",
            "a median.",
          ],
          answer: 1,
        },
        {
          id: 2,
          prompt: "The three altitudes of a triangle are concurrent at",
          choices: [
            "the centroid.",
            "the incentre.",
            "the circumcentre.",
            "the orthocentre.",
          ],
          answer: 3,
        },
        {
          id: 3,
          prompt: "In △ABC, ∠C = 90°. The altitude from C to AB",
          choices: [
            "is also a median.",
            "meets AB at the circumcentre.",
            "lies inside △ABC.",
            "lies outside △ABC.",
          ],
          answer: 2,
        },
        {
          id: 4,
          prompt: "Which statement is true?",
          choices: [
            "Every altitude is a median.",
            "Every median is an altitude.",
            "In an equilateral triangle, each altitude is also a median.",
            "An altitude always lies inside the triangle.",
          ],
          answer: 2,
        },
        {
          id: 5,
          prompt: "D is on BC such that AD ⊥ BC. Then AD is",
          choices: [
            "a median of △ABC.",
            "an altitude of △ABC.",
            "an angle bisector of △ABC.",
            "the perpendicular bisector of BC.",
          ],
          answer: 1,
        },
      ],
    },
    {
      key: "l05",
      label: "L05 · The orthocentre",
      idPrefix: "jm28-",
      questions: [
        {
          id: 1,
          prompt: "The orthocentre of an acute-angled triangle",
          choices: [
            "lies inside the triangle.",
            "lies outside the triangle.",
            "is a vertex of the triangle.",
            "is the mid-point of a side.",
          ],
          answer: 0,
        },
        {
          id: 2,
          prompt: "In △XYZ, ∠XYZ = 90°. The orthocentre of △XYZ is",
          choices: [
            "X",
            "Y",
            "Z",
            "the mid-point of XZ",
          ],
          answer: 1,
        },
        {
          id: 3,
          prompt: "If △PQR is obtuse-angled at Q, the orthocentre",
          choices: [
            "lies inside △PQR.",
            "lies at Q.",
            "lies outside △PQR.",
            "coincides with the centroid.",
          ],
          answer: 2,
        },
        {
          id: 4,
          prompt: "H is the orthocentre of acute-angled △ABC. Then AH produced meets BC",
          choices: [
            "at right angles.",
            "at its mid-point.",
            "at the incentre.",
            "at the circumcentre.",
          ],
          answer: 0,
        },
        {
          id: 5,
          prompt: "In an equilateral triangle, the orthocentre",
          choices: [
            "lies outside the triangle.",
            "coincides with the centroid.",
            "is a vertex.",
            "does not exist.",
          ],
          answer: 1,
        },
      ],
    },
    {
      key: "l06",
      label: "L06 · Positions of the four centres",
      idPrefix: "jm28-",
      questions: [
        {
          id: 1,
          prompt: "In an equilateral triangle, which centres coincide?",
          choices: [
            "Only the centroid and the orthocentre.",
            "Only the incentre and the circumcentre.",
            "The centroid, orthocentre, incentre and circumcentre.",
            "None of them.",
          ],
          answer: 2,
        },
        {
          id: 2,
          prompt: "If △ABC is obtuse-angled, which lie outside △ABC?",
          items: [
            { tag: "I.", text: "the circumcentre" },
            { tag: "II.", text: "the orthocentre" },
            { tag: "III.", text: "the centroid" },
          ],
          choices: [
            "I only",
            "I and II only",
            "II and III only",
            "I, II and III",
          ],
          answer: 1,
        },
        {
          id: 3,
          prompt: "In a right-angled triangle, which is true?",
          choices: [
            "The circumcentre is the right-angled vertex.",
            "The orthocentre is the mid-point of the hypotenuse.",
            "The circumcentre is the mid-point of the hypotenuse and the orthocentre is the right-angled vertex.",
            "All four centres coincide.",
          ],
          answer: 2,
        },
        {
          id: 4,
          prompt: "Which two centres always lie inside every triangle?",
          choices: [
            "circumcentre and orthocentre",
            "incentre and centroid",
            "circumcentre and incentre",
            "orthocentre and centroid",
          ],
          answer: 1,
        },
        {
          id: 5,
          prompt: "In an isosceles triangle that is not equilateral, the four centres",
          choices: [
            "all coincide.",
            "all lie on the axis of symmetry.",
            "all lie outside the triangle.",
            "cannot be determined.",
          ],
          answer: 1,
        },
      ],
    },
  ],
});
