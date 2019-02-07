const rp = require("request-promise");
var Promise = require("Promise").default;

var options = {
  method: "POST",
  uri: "https://www.schoolinfo.go.kr/ei/ss/Pneiss_a01_l0.do",
  form: {
    HG_CD: "",
    SEARCH_KIND: "",
    HG_JONGRYU_GB: "",
    GS_HANGMOK_CD: "",
    GS_HANGMOK_NM: "",
    GU_GUN_CODE: "",
    SIDO_CODE: "",
    GUGUN_CODE: "",
    SRC_HG_NM: ""
  },
  headers: {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
  }
};

module.exports = function getSchool(name) {
  options.form.SRC_HG_NM = name;
  return new Promise((resolve, reject) => {
    if (!name) {
      reject("필수 항목 누락");
    }
    rp(options)
      .then(item => JSON.parse(item))
      .then(item => {
        let lists = [];
        Object.keys(item).forEach(key => {
          lists.push(item[key][0]);
        });
        resolve(lists.filter(item => item));
      })
      .catch(err => {
        reject(err);
      });
  });
};
