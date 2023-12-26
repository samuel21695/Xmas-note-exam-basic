class ForExam {

  constructor() {
    this.initData();
  }

  initData() {

    const config = {
      baseArray: ['피카츄', '라이츄', '꼬부기'],
      specialProblems: [10, 16, 17, 18, 19, 20],
      htmlTagProblems: [22, 23, 25, 27, 29, 30],
      startProblemIndex: 1,
      endProblemIndex: 30
    };

    for (let i = config.startProblemIndex; i <= config.endProblemIndex; i++) {
      this['problem' + i] = this.generateProblemData(
        i,
        config.baseArray,
        config.specialProblems
      );
    }

    this.problem16 = [['피카츄', '라이츄'], ['꼬부기', '이브이']];

    this.assembleHTMLTags(config.htmlTagProblems);
  }

  generateProblemData(problemNumber, baseArray, specialProblems) {
    if (specialProblems.includes(problemNumber)) {
      return [...baseArray, '이브이'];
    }
    return baseArray.slice();
  }

  assembleHTMLTags(htmlTagProblems) {
    for (let problem of htmlTagProblems) {
      this['problem' + problem] = this['problem' + problem].map(item => {
        if (item.includes('<')) {
          return item;
        }
        return `<li>${item}</li>`;
      });
    }
  } 
}

let forExam = new ForExam();
// console.dir(forExam);
// console.log(forExam.problem15.length);

// ? 1. forExam.problem1의 배열의 모든 요소를 대문자로 변환하세요.
forExam.problem1.map(item => item.toUpperCase());
console.log(forExam.problem1);

// ? 2. forExam.problem2의 배열에서 '이'가 포함된 포켓몬만 필터링하세요.
const problem2 = forExam.problem2.filter( item => item.includes('이'));
console.log(problem2);

// ? 3. forExam.problem3의 배열의 모든 요소를 하나의 문자열로 합치세요.
const problem3 = forExam.problem3.join();
console.log(problem3);

// ? 4. forExam.problem4의 배열을 사용하여 각 포켓몬의 이름을 키로, 이름의 길이를 값으로 하는 객체를 생성하세요. 
const problem4 = forExam.problem4.map( (item) => {
  const [name, length] = item.split(",");
  return {
    name,
    length: name.length
  }
});

console.log(problem4);

// ? 5. forExam.problem5의 배열을 알파벳 순서로 정렬하세요.
const problem5= forExam.problem5.sort();
console.log(problem5);

// ? 6. forExam.problem6의 배열에서 첫번째로 '이'가 포함된 포켓몬을 찾으세요.
const problem6 = forExam.problem6.find(item => item.includes('이'));
console.log(problem6);

// ? 7. forExam.problem7의 배열에 모든 포켓몬 이름이 '이'를 포함하고 있는지 확인하세요.
const problem7 = forExam.problem7.every(item => item.includes('이'));
console.log(problem7);




