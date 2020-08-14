const dummy = {
  info: { size: { width: 199, height: 253 }, faceCount: 1 },
  faces: [
    {
      roi: { x: 69, y: 49, width: 58, height: 58 },
      landmark: {
        leftEye: { x: 85, y: 64 },
        rightEye: { x: 111, y: 67 },
        nose: { x: 96, y: 79 },
        leftMouth: { x: 85, y: 93 },
        rightMouth: { x: 105, y: 95 },
      },
      gender: { value: "female", confidence: 0.997197 },
      age: { value: "22~26", confidence: 1.0 },
      emotion: { value: "neutral", confidence: 1.0 },
      pose: { value: "frontal_face", confidence: 0.999952 },
    },
  ],
};

module.exports = dummy;

const dummy2 = [
  {
    info: { size: { width: 860, height: 642 }, faceCount: 4 },
    faces: [
      { celebrity: { value: "유재석", confidence: 1.0 } },
      { celebrity: { value: "윤종신", confidence: 0.59828 } },
      { celebrity: { value: "정채연", confidence: 0.109117 } },
      { celebrity: { value: "소유", confidence: 0.211539 } },
    ],
  },
];
