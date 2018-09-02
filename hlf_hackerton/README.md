# 경기도블록체인해커톤 'Hyperledger fabric 기반 버스 민원처리 시스템'





자산: 

1. 민원(Petition)
- 민원 고유번호 // 어떤 규칙으로?
- 민원인을 가리키는 Relation
- 버스 번호
- 민원 사유 발생 시각
- 민원 사유 발생 장소
- 민원 내용 // String으로 가능한가?

- 자동차 고유번호? //버스 번호랑 겹치지 않나? 아 위에건 노선을 가리키는 번호고 이건 자동차 판인듯..
- 버스 정류장 이름 // 장소랑 겹치지 않나?
- 버스 회사 이름 // 다른 성분에서 꺼낼 방법이 있을 것 같은데..
- 기사 이름
- 현금지불? Boolean
- 민원 접수 유무
- 민원 처리 유무
- 민원에 대한 평가 점수
- 타임스탬프 // 아마 민원 접수 시간에 대한 타임스탬프겠지?

2. 의견(Feedback)
- 의견 고유 번호 //민원 번호를 따라가도 되지 않을지?
- 정부 직원을 가리키는 Relation
- 민원을 가리키는 Relation
- 정부측 의견 내용 // String으로 가능한가?
- 버스측 의견 내용 // 마찬가지
- 민원 접수 시간
- 민원 처리 시간
- 버스 회사를 가리키는 Relation
- 버스 기사 이름 // 이건 중복
- 버스 기사 번호 // 마찬가지



참여자: 

1. 본부(Headquarter)
- 고유값 도번호를 갖고, 도이름을 가짐. '경기도청'의 개념

2. 민원부서(PetitionDepartment)
- 고유값 참여키를 가짐. 부서코드가 있다네
- 시 이름, 부서 이름을 가짐. //외부 DB(딕셔너리?)가 있다면, 고유값에서 다 유추할 수 있는 값이네.
- 부서가 속한 도를 가리키는 Relation 있음.

3. 정부 직원(GovernmentEmployee)
- 고유값 .. 동명이인에 대한 걱정. 담당 유선번호로 현재 쓰고 있음
- 직원 본명, 팀명
- 민원 부서를 가리키는 Relation 있음.

4. 시민(Civil)
- 고유값.. // 뭘로 할지? 주민번호?
- Civil Detail로 이어지는 Relation...
- Detail에는 이름, 이메일, 핸드폰번호(선택)이 있음.

5. 버스회사
- 버스회사번호 //이상적인건 사업자 등록번호. 근데 못구해서 일단 회사 전화번호로 씀
- 회사 이름
- 소유한 버스 번호 목록(노선?)
- 소유한 구역..? // 위와 겹치지 않는가?

6. 버스기사
- 고유 번호 // 직원번호가 있다면 그걸 써야할 듯.
- 기사 이름
- 소속 회사를 가리키는 Relation



트랜잭션:

1. 시민 생성(CreateCivil)
- 시민 고유값 필요
- Civil Detail 받음...

2. 무정차 민원 생성(NonstopCreate)
- 시민(민원인)을 가리키는 Relation
- 발생 위치
- 버스 정류장 이름
- 버스 번호(노선)
- 차량 번호(번호판)
- 민원 사유 발생 시간
- 민원 내용

3. 다른 민원 생성들 

transaction ImpoliteCreate{
  --> Civil Civil
  o String location // 발생 위치. 무슨 정류장이라던지, 어느 사거리라던지.
  o String DriverName optional // 버스기사 이름을 알고 있다면 적을 수 있도록.
  o String BusNumber // 버스번호. 100-1 같은 숫자가 있어 string으로 처리해야 함
  o String VehicleId // 차량번호
  o DateTime Time // 사건 발생 시간.
  o String Content // 구체적인 내용.
}
transaction IntervalCreate{
  --> Civil Civil
  o String location // 발생 위치. 무슨 정류장이라던지, 어느 사거리라던지.
  o String BusNumber // 버스번호. 100-1 같은 숫자가 있어 string으로 처리해야 함
  o DateTime Time // 사건 발생 시간.
  o String Content // 구체적인 내용.
}
transaction FeeCreate{
  --> Civil Civil
  o Boolean isCash
  o String location // 발생 위치. 무슨 정류장이라던지, 어느 사거리라던지.
  o String DriverName optional // 버스기사 이름을 알고 있다면 적을 수 있도록.
  o String BusNumber // 버스번호. 100-1 같은 숫자가 있어 string으로 처리해야 함
  o String VehicleId // 차량번호
  o DateTime Time // 사건 발생 시간.
  o String Content // 구체적인 내용.
} 

4. 민원 접수

transaction AcceptPetition{
  --> GovernEmployee GovernEmployee
  --> Petition Petition
  o String Comments // 접수처리완료 등의 사항 전달.
}

5. 민원 해결

transaction ResolvePetition {
  --> Petition Petition
  --> BusCompany BusCompany
  --> FeedBack FeedBack
  o String BusComments
  o String BusDriverName optional
  o String BusDriverId optional
}



이벤트:

1. 민원 생성

event PetitionCreated{
  o String PetitionId
  o String CivilId
}

2. 민원 접수

event PetitionAccepted{
  o String FeedBackId
  o String EmployeeId
}

3. 민원 해결

event PetitionResolved{
  o String FeedBackId
  o String BusCompanyName
}



쿼리:

1. 모든 민원 조회

2. 해결된 민원 조회

3. 시민 아이디로 민원 조회

4. 모든 버스 회사 조회

5. 이름으로 버스 회사 조회 (해당 회사의 보유 노선 확인?)