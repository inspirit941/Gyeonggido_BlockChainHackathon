composer archive create -t dir -n ../

composer network install -a hlf_hackerton@0.0.1.bna -c PeerAdmin@hlfv1

composer network start -c PeerAdmin@hlfv1 -n hlf_hackerton -V 0.0.1  -A admin -S adminpw
## 네트워크 업로드 완료



###composer card import -f admin@hlf_hackerton.card

# 경기도청 participant 넣기
composer participant add -d '{
  "$class": "org.petition.prov.participants.headquarter",
  "Province": "64100000",
  "Name":"경기도"
  }' -c admin@hlf_hackerton

# card 발급. -x를 통해 네트워크 구성원을 집어넣을 권한을 준다.
composer identity issue -u province -a org.petition.prov.participants.headquarter#64100000 -c admin@hlf_hackerton -x

composer card import -f province@hlf_hackerton.card

# import를 마친 뒤 composer identity list를 입력하면 certificate를 볼 수 있다.


## 각 부서 담당자는 사실과 다를 수 있음. 부서 고유번호 출처는
## https://www.code.go.kr/stdcode/orgCodeL.do 에서 부서 기관코드를 조회한 값임.


# 성남시

composer participant add -d'{
  "$class": "org.petition.prov.participants.PetitionDepartment",
  "ParticipantKey": "3780251",
  "District":"성남시",
  "DepartmentName": "대중교통과",
  "headquarter": "resource:org.petition.prov.participants.headquarter#64100000"
}' -c province@hlf_hackerton 
## rule 설정이 되어 있지 않아서, province라고 해도 새 participant를 넣을 권한이 없다.

composer identity issue -u snBusdepartment -a org.petition.prov.participants.PetitionDepartment#3780251 -c admin@hlf_hackerton -x

composer participant add -d '{
  "$class": "org.petition.prov.participants.GovernEmployee",
  "EmployeeId": "031-729-3717",
  "Name": "박욱현",
  "Team": "버스행정팀",
  "PetitionDepartment": "resource:org.petition.prov.participants.PetitionDepartment#3780251"
}'

composer identity issue -u snBusOfficer -a org.petition.prov.participants.GovernEmployee#031-729-3717 -c admin@hlf_hackerton

##########################################################################
# 용인시
composer participant add -d '{
  "$class": "org.petition.prov.participants.PetitionDepartment",
  "ParticipantKey": "4050444",
  "District": "용인시",
  "DepartmentName": "민원여권과",
  "headquarter": "resource:org.petition.prov.participants.headquarter#64100000"
}' -c admin@hlf_hackerton 

composer identity issue -u yiBusdepartment -a org.petition.prov.participants.PetitionDepartment#4050444 -c admin@hlf_hackerton -x

composer participant add -d '{
  "$class": "org.petition.prov.participants.GovernEmployee",
  "EmployeeId": "031-324-2156",
  "Name": "이윤진",
  "Team": "민원여권과",
  "PetitionDepartment": "resource:org.petition.prov.participants.PetitionDepartment#4050444"
}'

composer identity issue -u yiBusOfficer -a org.petition.prov.participants.GovernEmployee#031-324-2156 -c admin@hlf_hackerton
##############################################################################
# 수원시
composer participant add -d '{
  "$class": "org.petition.prov.participants.PetitionDepartment",
  "ParticipantKey": "3740306",
  "District": "수원시",
  "DepartmentName": "시민봉사과",
  "headquarter": "resource:org.petition.prov.participants.headquarter#64100000"
}' -c admin@hlf_hackerton 

composer identity issue -u swBusdepartment -a org.petition.prov.participants.PetitionDepartment#3740306 -c admin@hlf_hackerton -x

composer participant add -d '{
  "$class": "org.petition.prov.participants.GovernEmployee",
  "EmployeeId": "031-228-2130",
  "Name": "구솔휘",
  "Team": "yes종합민원팀",
  "PetitionDepartment": "resource:org.petition.prov.participants.PetitionDepartment#4050444"
}'

composer identity issue -u swBusOfficer -a org.petition.prov.participants.GovernEmployee#031-228-2130 -c admin@hlf_hackerton

# 버스회사 dummy Data (실제 데이터이긴 함)

composer participant add -d '{
  "$class": "org.petition.prov.participants.BusCompany",
  "BusCompanyNumber": "031-747-3200",
  "BusCompanyName": "성남시내버스",
  "BusRouteNumber": ["15","15-1","33",
    "33-1",
    "50",
    "50-1",
    "51",
    "52",
    "55",
    "55-1",
    "60",
    "82",
    "88",
    "100",
    "100출",
    "200",
    "220",
    "250",
    "260",
    "330",
    "330출",
    "331",
    "340",
    "340-1",
    "370",
    "380",
    "4000",
    "9507",
    "9607"],
  "ServiceDistrict": ["수원시","성남시","강남구","송파구"]
}' -c admin@hlf_hackerton
