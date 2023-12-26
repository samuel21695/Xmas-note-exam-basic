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

