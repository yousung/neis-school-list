const school = require("./api");

/**
 * 학교명을 입력하면 학교 리스트를 반환
 */
school("고기").then(list => console.log(list));
