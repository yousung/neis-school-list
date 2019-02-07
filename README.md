# 나이스 학교 정보 API

### 학교정보 가져오기

# 사용법

```
const neisApi = require("neis-api");

/**
 * 학교명을 입력하면 학교 리스트를 반환
 */
neisApi("고기").then(list => console.log(list));

// 반환값
{
    DTLAD_BRKDN: '172-1',
    HMPG_ADRES: 'www.kogi.es.kr',
    PERC_FAXNO: '031-262-1478',
    FOND_SC_CODE: '2',
    ADRES_BRKDN: '경기도 용인시 수지구 고기동',
    LCTN_NM: '경기',
    SCHUL_CODE: 'J100003495',
    SCHUL_KND_SC_CODE: '02',
    SCHUL_RDNMA: '경기도 용인시 수지구 고기로 385',
    SCHUL_NM: '고기초등학교',
    JU_DSTRT_OFCDC_CODE: 'J100000364',
    USER_TELNO: '031-263-9775',
    JU_ATPT_OFCDC_CODE: 'J100000001',
    ZIP_CODE: '448110',
    ADRCD_ID: '4146510400'
}
```

# Sample Code

```
yarn sample
or
npm sample
```

# TEST

```
yarn test
or
npm test
```

# 라이센스

```
MIT
```
