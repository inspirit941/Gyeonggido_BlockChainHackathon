# Hyperledger Fabric

- Part of a course on Hyperledger Fabric by http://ACloudFan.com / raj@acloudfan.com

Fabric의 설치와 구동은 ACloudFan에서 제공한 방식을 따랐습니다.

하이퍼렛저 기반 버스민원 처리 시스템의 Proof of Concept 개념입니다.

## Asset

```
asset Petition identified by PetitionId{
  // 필수값
  o String PetitionId
  o String CivilId
  // --> Civil Civil // 민원 제기한 사람 정보를 입력하는 창.
  o String BusNumber // 버스번호. 100-1 같은 숫자가 있어 string으로 처리해야 함
  o DateTime Time // 민원 상황 발생 시간
  o String location // 발생 장소. 무슨 정류장이라던지, 어느 사거리라던지.
  o String Content // 구체적인 민원내용.

  // 민원 종류에 따라 필요한 값
  o String VehicleId optional // 자동차 고유넘버. 11나 0000 같은. 
  o String BusStopName optional // 버스정류장 이름. (알아서 적어넣는 거)
  o String BusCompany optional // 회사명을 알고 있다면 적을 수 있도록
  o String DriverName optional // 버스기사 이름을 알고 있다면 적을 수 있도록.
  o Boolean isCash optional  // 요금 민원에서 현금인지 카드인지
  o String Type optional
  // --> GovernEmployee GovernEmployee optional
  o String GovernEmployee optional

  o Boolean Accepted default = false
  o Boolean Resolved default = false
  o Integer Rating optional // 1,2,3,4,5 scale 5개.
  o DateTime timestamp // txn 시간


  o String Comments optional
  
  o DateTime Acceptedtimestamp optional
  o DateTime Resolvedtimestamp optional
  
  o String BusComments optional
  o String BusDriverName optional
}
```

## Participant

```
// 정부 측 정의
participant headquarter identified by Province{
  o String Province default = "64100000" // 경기도청.
  o String Name default = "경기도"
}

participant PetitionDepartment identified by ParticipantKey{
  o String ParticipantKey // https://www.code.go.kr/stdcode/orgCodeL.do 여기서 부서 코드 조회 가능. 예시로는 성남의 도로교통국 대중교통과 -> 3780251
  o String District // 무슨 시인지.
  o String DepartmentName// 구체적인 부서 이름 예시: 성남은 교통도로국 대중교통과 버스행정팀에서 민원 처리를 담당함. 위의 key에서 대중교통과까지 특정이 된다.
  --> headquarter headquarter // 경기도의 Relation으로 편입해야 할까?

}
participant GovernEmployee identified by Name {
  o String EmployeeId // 고유번호. 이름을 쓰려 했는데 동명이인이 있을 수 있다고 생각함. 또는 전화번호를 써도 괜찮다.
  o String Name //regex=/[가-힣][가-힣]([가-힣])?([가-힣])?/ 이름 두 글자, 세 글자 또는 네 글자.
  o String TeamName // 소속 팀 이름. 성남은 버스행정팀.
  --> PetitionDepartment PetitionDepartment
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 시민 정의

participant Civil identified by CivilId{
  o String CivilId
  o CivilDetail CivilDetail
}
concept CivilDetail {
  o String Name //regex=/[가-힣][가-힣][가-힣]([가-힣])?/ //이름은 세 글자 또는 네 글자로.
  o String email //regex=/\w+@\w+.\w+/
  o String PhoneNumber optional // 핸드폰 번호는 option.
}

transaction CreateCivil{
  o String CivilId
  o CivilDetail CivilDetail
}

/////////////////////////////////////////////////////////////////////////////////////////////////////
// 버스회사 정의
participant BusCompany identified by BusCompanyNumber {
  o String BusCompanyNumber //regex=/031-(\d{3}|\d{4})-\d{4}/
  // 사업자등록번호를 쓰려 했는데 경기도버스운송조합 홈페이지를 가보니 사업자번호가 없다. 대신 회사 전화번호를 사용함
  o String BusCompanyName // 버스회사 이름
  o String[] BusRouteNumber // 회사가 소유한 버스 노선번호
  o String[] ServiceDistrict // 버스가 서비스하는 지역
}

participant BusDriver identified by DriverId{
  o String DriverId
  o String DriverName
  --> BusCompany BusCompany
}

```
## Transaction

```

transaction CreateCivil{
  o String CivilId
  o CivilDetail CivilDetail
}

transaction NonstopCreate {
  // --> Civil Civil
  o String CivilId
  o String location // 발생 위치. 무슨 정류장이라던지, 어느 사거리라던지.
  o String BusStopName // 버스정류장 이름. (알아서 적어넣는 거)
  o String BusNumber // 버스번호. 100-1 같은 숫자가 있어 string으로 처리해야 함
  o String VehicleId
  o DateTime Time // 사건 발생 시간.
  o String Content // 구체적인 내용.
  o String Type default = '무정차'
}

transaction ImpoliteCreate{
    // --> Civil Civil
  o String CivilId
  o String location // 발생 위치. 무슨 정류장이라던지, 어느 사거리라던지.
  o String DriverName optional // 버스기사 이름을 알고 있다면 적을 수 있도록.
  o String BusNumber // 버스번호. 100-1 같은 숫자가 있어 string으로 처리해야 함
  o String VehicleId // 차량번호
  o DateTime Time // 사건 발생 시간.
  o String Content // 구체적인 내용.
  o String Type default = "불친절"
}
transaction IntervalCreate{
    // --> Civil Civil
  o String CivilId
  o String location // 발생 위치. 무슨 정류장이라던지, 어느 사거리라던지.
  o String BusNumber // 버스번호. 100-1 같은 숫자가 있어 string으로 처리해야 함
  o DateTime Time // 사건 발생 시간.
  o String Content // 구체적인 내용.
  o String Type default = "배차간격"
}
transaction FeeCreate{
    // --> Civil Civil
  o String CivilId
  o Boolean isCash
  o String location // 발생 위치. 무슨 정류장이라던지, 어느 사거리라던지.
  o String DriverName optional // 버스기사 이름을 알고 있다면 적을 수 있도록.
  o String BusNumber // 버스번호. 100-1 같은 숫자가 있어 string으로 처리해야 함
  o String VehicleId // 차량번호
  o DateTime Time // 사건 발생 시간.
  o String Content // 구체적인 내용.
  o String Type default = "요금"
}

event PetitionCreated{
  o String PetitionId
  o String CivilId
}

////////////////////////////////////////////////////////////////////////////////////////////
// 관할 공무원의 접수 완료
transaction AcceptPetition{
  // --> GovernEmployee GovernEmployee
  o String GovernEmployee
  --> Petition Petition
  o String Comments // 접수처리완료 등의 사항 전달.
}
// 접수 완료 시 발생되는 이벤트
// event PetitionAccepted{
//   o String FeedBackId
//   o String EmployeeId
// }

///////////////////////////////////////////////////////////////////////////////////////////////

// 민원이 해결되었다는 걸 알리는 transaction.
transaction ResolvePetition {
  --> Petition Petition

  // --> BusCompany BusCompany
  o String BusComments
  o String BusDriverName optional
  // o String BusDriverId optional
}

// event PetitionResolved{
//   o String FeedBackId
//   o String BusCompanyName
// }

```

ChainCode는 hlf_hackerton 폴더 안의 lib/logic.js에서 확인할 수 있습니다.

Composer-rest-server

![k-328](https://user-images.githubusercontent.com/26548454/44966163-8a877380-af74-11e8-8c1e-1ee0739af54b.jpg)
