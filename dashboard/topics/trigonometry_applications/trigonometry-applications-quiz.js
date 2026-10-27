/* JM35 Application of Trigonometry - section quizzes */
SectionQuiz.init({
  quizId: "math-jm35",
  section: "JM35",
  sets: [
    {
      key: "l01",
      label: "L01 · Gradient of a road",
      idPrefix: "jm35-",
      questions: [
        {
          id: 1,
          prompt: "A road rises 12 m over a horizontal distance of 48 m. Its gradient is",
          choices: [
            "1 : 2",
            "1 : 4",
            "4 : 1",
            "12 : 36",
          ],
          answer: 1,
        },
        {
          id: 2,
          prompt: "A road has gradient 1 : 5. If the horizontal distance is 60 m, the vertical rise is",
          choices: [
            "10 m",
            "12 m",
            "15 m",
            "300 m",
          ],
          answer: 1,
        },
        {
          id: 3,
          prompt: "A road rises 21 m over a horizontal distance of 200 m. The gradient as a decimal, correct to 3 s.f., is",
          choices: [
            "0.0950",
            "0.105",
            "0.110",
            "0.210",
          ],
          answer: 1,
        },
        {
          id: 4,
          prompt: "Gradient 1 : n means",
          choices: [
            "vertical : horizontal = 1 : n",
            "horizontal : vertical = 1 : n",
            "the slope angle is n°.",
            "the road is n m long.",
          ],
          answer: 0,
        },
        {
          id: 5,
          prompt: "If the gradient is 1 : 8 and the horizontal distance is 160 m, the actual distance travelled is",
          choices: [
            "20 m",
            "160 m",
            "√(160² + 20²) m",
            "180 m",
          ],
          answer: 2,
        },
      ],
    },
    {
      key: "l02",
      label: "L02 · Angles of elevation and depression",
      idPrefix: "jm35-",
      questions: [
        {
          id: 1,
          prompt: "The angle of elevation of A from C is 35°. The angle of depression of C from A is",
          choices: [
            "55°",
            "35°",
            "145°",
            "70°",
          ],
          answer: 1,
        },
        {
          id: 2,
          prompt: "From a point 50 m from the foot of a tower, the angle of elevation of the top is 30°. The height of the tower is",
          choices: [
            "25 m",
            "25√3 m",
            "50/√3 m",
            "50√3 m",
          ],
          answer: 2,
        },
        {
          id: 3,
          prompt: "The angle of depression of a boat from a 40 m cliff is 25°. The distance from the foot of the cliff to the boat is",
          choices: [
            "40 tan 25° m",
            "40 / tan 25° m",
            "40 sin 25° m",
            "40 cos 25° m",
          ],
          answer: 1,
        },
        {
          id: 4,
          prompt: "If the angle of elevation of B from A is 41°, the angle of depression of A from B is",
          choices: [
            "49°",
            "41°",
            "139°",
            "82°",
          ],
          answer: 1,
        },
        {
          id: 5,
          prompt: "From the top of a 60 m building, the angle of depression of a car is 20°. The distance from the foot of the building to the car is",
          choices: [
            "60 tan 20° m",
            "60 / tan 20° m",
            "60 sin 20° m",
            "60 cos 20° m",
          ],
          answer: 1,
        },
      ],
    },
    {
      key: "l03",
      label: "L03 · Bearings",
      idPrefix: "jm35-",
      questions: [
        {
          id: 1,
          prompt: "The true bearing 025° is the same as the compass bearing",
          choices: [
            "N25°E",
            "N25°W",
            "S25°E",
            "E25°N",
          ],
          answer: 0,
        },
        {
          id: 2,
          prompt: "The compass bearing S40°W as a true bearing is",
          choices: [
            "040°",
            "140°",
            "220°",
            "320°",
          ],
          answer: 2,
        },
        {
          id: 3,
          prompt: "The true bearing 155° as a compass bearing is",
          choices: [
            "N25°E",
            "S25°E",
            "S35°E",
            "N25°W",
          ],
          answer: 1,
        },
        {
          id: 4,
          prompt: "The compass bearing N35°W as a true bearing is",
          choices: [
            "035°",
            "145°",
            "215°",
            "325°",
          ],
          answer: 3,
        },
        {
          id: 5,
          prompt: "The true bearing of B from A is 055°. The true bearing of A from B is",
          choices: [
            "055°",
            "125°",
            "235°",
            "305°",
          ],
          answer: 2,
        },
      ],
    },
    {
      key: "l04",
      label: "L04 · 2D problems in triangles and rectangles",
      idPrefix: "jm35-",
      questions: [
        {
          id: 1,
          prompt: "In rectangle PQRS, PQ = 6 cm and QR = 8 cm. tan∠RQS =",
          choices: [
            "\\(\\frac{3}{4}\\)",
            "\\(\\frac{4}{3}\\)",
            "\\(\\frac{6}{10}\\)",
            "1",
          ],
          answer: 0,
        },
        {
          id: 2,
          prompt: "△ABC is isosceles with AB = AC = 10 cm and BC = 12 cm. If θ is the base angle at B, then cos θ =",
          choices: [
            "\\(\\frac{3}{5}\\)",
            "\\(\\frac{5}{3}\\)",
            "\\(\\frac{6}{5}\\)",
            "\\(\\frac{2}{5}\\)",
          ],
          answer: 0,
        },
        {
          id: 3,
          prompt: "An equilateral triangle has side 10 cm. Its height is",
          choices: [
            "5 cm",
            "5√3 cm",
            "10√3 cm",
            "10 cm",
          ],
          answer: 1,
        },
        {
          id: 4,
          prompt: "In rectangle PQRS, PR is a diagonal. If PQ = 8 cm and QR = 15 cm, then sin∠QPR =",
          choices: [
            "\\(\\frac{8}{17}\\)",
            "\\(\\frac{15}{17}\\)",
            "\\(\\frac{8}{15}\\)",
            "\\(\\frac{15}{8}\\)",
          ],
          answer: 1,
        },
        {
          id: 5,
          prompt: "△PQR is isosceles with PQ = PR = 20 cm and ∠QPR = 50°. Then QR =",
          choices: [
            "20 sin 25°",
            "2 × 20 sin 25°",
            "20 cos 50°",
            "20 tan 50°",
          ],
          answer: 1,
        },
      ],
    },
    {
      key: "l05",
      label: "L05 · Further 2D applications",
      idPrefix: "jm35-",
      questions: [
        {
          id: 1,
          prompt: "A cable car travels along a wire of gradient 1 : 4. If it rises 16 m, the horizontal distance is",
          choices: [
            "4 m",
            "16 m",
            "64 m",
            "80 m",
          ],
          answer: 2,
        },
        {
          id: 2,
          prompt: "A path of gradient 5 : 12 has actual length 39 m. The vertical rise is",
          choices: [
            "12 m",
            "13 m",
            "15 m",
            "36 m",
          ],
          answer: 2,
        },
        {
          id: 3,
          prompt: "An 8 m flagpole stands on the ground. From a point the angle of elevation of the top is 35°. The distance from that point to the foot is",
          choices: [
            "8 tan 35° m",
            "8 / tan 35° m",
            "8 sin 35° m",
            "8 cos 35° m",
          ],
          answer: 1,
        },
        {
          id: 4,
          prompt: "A building is 24 m tall. From a point 32 m away, the angle of elevation of the top is",
          choices: [
            "tan⁻¹(24/32)",
            "sin⁻¹(24/32)",
            "24°",
            "32°",
          ],
          answer: 0,
        },
        {
          id: 5,
          prompt: "If a slope has gradient 1 : 5, then tan of the inclination is",
          choices: [
            "5",
            "\\(\\frac{1}{5}\\)",
            "√26",
            "1",
          ],
          answer: 1,
        },
      ],
    },
  ],
});
