/* JM32 Areas and Volumes III - section quizzes */
SectionQuiz.init({
  quizId: "math-jm32",
  section: "JM32",
  sets: [
    {
      key: "l01",
      label: "L01 · Pyramids",
      idPrefix: "jm32-",
      questions: [
        {
          id: 1,
          prompt: "The volume of a pyramid is",
          choices: [
            "base area × height",
            "\\(\\frac{1}{2}\\) × base area × height",
            "\\(\\frac{1}{3}\\) × base area × height",
            "4πr³",
          ],
          answer: 2,
        },
        {
          id: 2,
          prompt: "A pyramid has height 12 cm and hexagonal base area 90 cm². Its volume is",
          choices: [
            "360 cm³",
            "540 cm³",
            "720 cm³",
            "1 080 cm³",
          ],
          answer: 0,
        },
        {
          id: 3,
          prompt: "A right pyramid has volume 80 cm³ and base area 30 cm². Its height is",
          choices: [
            "6 cm",
            "8 cm",
            "10 cm",
            "16 cm",
          ],
          answer: 1,
        },
        {
          id: 4,
          prompt: "A square-based pyramid has volume 288 cm³ and height 6 cm. A side of the base is",
          choices: [
            "6 cm",
            "8 cm",
            "12 cm",
            "18 cm",
          ],
          answer: 2,
        },
        {
          id: 5,
          prompt: "If the height of a pyramid is doubled and the base area is unchanged, the volume is",
          choices: [
            "unchanged",
            "doubled",
            "tripled",
            "multiplied by 4",
          ],
          answer: 1,
        },
      ],
    },
    {
      key: "l02",
      label: "L02 · Cones and frustums",
      idPrefix: "jm32-",
      questions: [
        {
          id: 1,
          prompt: "The volume of a circular cone is",
          choices: [
            "πr²h",
            "\\(\\frac{1}{2}\\)πr²h",
            "\\(\\frac{1}{3}\\)πr²h",
            "\\(\\frac{4}{3}\\)πr³",
          ],
          answer: 2,
        },
        {
          id: 2,
          prompt: "The curved surface area of a cone is",
          choices: [
            "πr²",
            "πrl",
            "2πrh",
            "4πr²",
          ],
          answer: 1,
        },
        {
          id: 3,
          prompt: "A cone has radius 5 cm and height 12 cm. Its slant height is",
          choices: [
            "13 cm",
            "15 cm",
            "17 cm",
            "60 cm",
          ],
          answer: 0,
        },
        {
          id: 4,
          prompt: "A frustum is formed by cutting a small pyramid from a large similar pyramid. Its volume is",
          choices: [
            "the difference of the two pyramid volumes.",
            "half of the large pyramid.",
            "\\(\\frac{1}{3}\\) of the large pyramid.",
            "the sum of the two volumes.",
          ],
          answer: 0,
        },
        {
          id: 5,
          prompt: "A cone has radius 7 cm and slant height 8 cm. Its curved surface area is",
          choices: [
            "56π cm²",
            "64π cm²",
            "112π cm²",
            "196π cm²",
          ],
          answer: 0,
        },
      ],
    },
    {
      key: "l03",
      label: "L03 · Spheres and hemispheres",
      idPrefix: "jm32-",
      questions: [
        {
          id: 1,
          prompt: "The volume of a sphere of radius r is",
          choices: [
            "πr²",
            "\\(\\frac{4}{3}\\)πr³",
            "4πr²",
            "\\(\\frac{2}{3}\\)πr³",
          ],
          answer: 1,
        },
        {
          id: 2,
          prompt: "The surface area of a sphere of radius r is",
          choices: [
            "2πr²",
            "3πr²",
            "4πr²",
            "\\(\\frac{4}{3}\\)πr³",
          ],
          answer: 2,
        },
        {
          id: 3,
          prompt: "A sphere has diameter 12 cm. Its volume is",
          choices: [
            "144π cm³",
            "216π cm³",
            "288π cm³",
            "576π cm³",
          ],
          answer: 2,
        },
        {
          id: 4,
          prompt: "The curved surface area of a hemisphere is 72π cm². The radius is",
          choices: [
            "6 cm",
            "8 cm",
            "12 cm",
            "36 cm",
          ],
          answer: 0,
        },
        {
          id: 5,
          prompt: "A sphere just fits inside a cube of side 10 cm. The volume of the sphere is",
          choices: [
            "\\(\\frac{250}{3}\\)π cm³",
            "\\(\\frac{500}{3}\\)π cm³",
            "500π cm³",
            "\\(\\frac{1000}{3}\\)π cm³",
          ],
          answer: 1,
        },
      ],
    },
    {
      key: "l04",
      label: "L04 · Similar figures and solids",
      idPrefix: "jm32-",
      questions: [
        {
          id: 1,
          prompt: "If two similar solids have length ratio 2 : 3, the ratio of their surface areas is",
          choices: [
            "2 : 3",
            "4 : 9",
            "8 : 27",
            "2 : 9",
          ],
          answer: 1,
        },
        {
          id: 2,
          prompt: "If two similar solids have length ratio 2 : 3, the ratio of their volumes is",
          choices: [
            "2 : 3",
            "4 : 9",
            "8 : 27",
            "6 : 9",
          ],
          answer: 2,
        },
        {
          id: 3,
          prompt: "The areas of two similar plane figures are 16 cm² and 49 cm². If the larger perimeter is 84 cm, the smaller perimeter is",
          choices: [
            "16 cm",
            "28 cm",
            "48 cm",
            "56 cm",
          ],
          answer: 2,
        },
        {
          id: 4,
          prompt: "Two similar cones have radii 4 cm and 6 cm. The ratio of their volumes is",
          choices: [
            "2 : 3",
            "4 : 6",
            "8 : 27",
            "16 : 36",
          ],
          answer: 2,
        },
        {
          id: 5,
          prompt: "If the volume ratio of two similar solids is 8 : 125, the length ratio is",
          choices: [
            "2 : 5",
            "4 : 25",
            "8 : 25",
            "2 : 25",
          ],
          answer: 0,
        },
      ],
    },
    {
      key: "l05",
      label: "L05 · Area ratios in triangles",
      idPrefix: "jm32-",
      questions: [
        {
          id: 1,
          prompt: "Two triangles have the same base. If their heights are in the ratio 2 : 5, their areas are in the ratio",
          choices: [
            "2 : 5",
            "4 : 25",
            "1 : 2",
            "5 : 2",
          ],
          answer: 0,
        },
        {
          id: 2,
          prompt: "Two triangles have the same height. If their bases are 3 cm and 7 cm, the area ratio is",
          choices: [
            "9 : 49",
            "3 : 7",
            "1 : 1",
            "7 : 3",
          ],
          answer: 1,
        },
        {
          id: 3,
          prompt: "△ABC and △DBC have the same height from C to ABD. If AB = 4 cm and BD = 6 cm, then [ABC] : [DBC] =",
          choices: [
            "4 : 9",
            "2 : 5",
            "2 : 3",
            "4 : 6",
          ],
          answer: 2,
        },
        {
          id: 4,
          prompt: "A median of a triangle divides it into two triangles of",
          choices: [
            "areas in the ratio 2 : 1.",
            "equal perimeter.",
            "areas in the ratio 1 : 2 only if it is isosceles.",
            "equal area.",
          ],
          answer: 3,
        },
        {
          id: 5,
          prompt: "If two triangles have bases 8 cm and 12 cm and the same height, and the smaller area is 20 cm², the larger area is",
          choices: [
            "24 cm²",
            "30 cm²",
            "36 cm²",
            "40 cm²",
          ],
          answer: 1,
        },
      ],
    },
  ],
});
