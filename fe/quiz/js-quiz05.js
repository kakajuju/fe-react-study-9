let emps = {
    "employees": [
        {
            "id": 1,
            "name": "홍길동",
            "position": "개발자",
            "salary": 50000,
            "skills": [ "Java", "Python", "SQL" ]
        },
        {
            "id": 2,
            "name": "김철수",
            "position": "디자이너",
            "salary": 40000,
            "skills": [ "Photoshop", "Illustrator" ]
        }
    ],
    "company": {
        "name": "주식회사 ABC",
        "address": "서울시 강남구",
        "established": "1990-01-01",
        "departments": [
            {
                "name": "개발부",
                "employees": [ 1, 3, 5 ]
            },
            {
                "name": "디자인부",
                "employees": [ 2, 4 ]
            }
        ]
    },
    "projects": [
        {
            "title": "사내 시스템 개발",
            "budget": 100000,
            "team": [ 1, 3 ]
        },
        {
            "title": "웹 디자인 프로젝트",
            "budget": 80000,
            "team": [ 2, 4 ]
        }
    ]
}

// 1. 두 번째 직원(김철수)의 직급(position)을 출력하세요.
console.log(emps.employees[1].position);
// 2. 첫 번째 직원(홍길동)의 세 번째 기술(SQL)을 출력하세요.
console.log(emps.employees[0].skills[2]);
// 3. 회사의 두 번째 부서(디자인부)에 소속된 직원 번호 중 두 번째 값을 출력하세요.
console.log(emps.company.departments[1].employees[1]);
// 4. 첫 번째 프로젝트(사내 시스템 개발)에 참여하는 팀원 번호 중 두 번째 값을 출력하세요.
console.log(emps.projects[0].team[1]);
// 5. 첫 번째 부서(개발부)의 이름과 해당 부서의 세 번째 직원 번호를 각각 출력하세요.
console.log(emps.company.departments[0].name);
console.log(emps.company.departments[0].employees[2]);
// 6. 두 번째 프로젝트(웹 디자인 프로젝트)의 제목과 예산,
// 그리고 해당 프로젝트의 첫 번째 팀원 번호를 각각 출력하세요.
console.log(emps.projects[1].title);
console.log(emps.projects[1].budget);
console.log(emps.projects[1].team[0]);
