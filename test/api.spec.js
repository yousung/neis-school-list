const school = require("../api");

describe("API 통신 테스트", () => {
  var schoolName = "고기";
  it(`API 가져오기 EX> ${schoolName}`, () => {
    school(schoolName).then(item => {
      expect(item).toBe(schoolName);
    });
  });
});

describe("API 통신 실패", () => {
  var schoolName = "실존하지_않는_고등학교";
  it(`API 통신실패`, () => {
    school(schoolName).then(item => {
      expect(item).count(0);
    });
  });

  it(`API 필수항목 미입력`, () => {
    expect(school()).rejects.toEqual("필수 항목 누락");
  });
});
