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

const dummy2 = [
  {
    x: 20,
    y: 20,
    width: 60,
    height: 60,
  },
  {
    x: 120,
    y: 120,
    width: 60,
    height: 60,
  },
];

export default dummy2;
