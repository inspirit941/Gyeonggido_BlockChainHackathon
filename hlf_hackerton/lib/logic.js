/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
/**
 * Write your transction processor functions here
 */

/**
 * CreatePetition
 * @param {org.petition.prov.participants.CreateCivil} CivilData
 * @transaction
 */
function    CreateCivil(CivilData) {
    return getParticipantRegistry('org.petition.prov.participants.Civil')
        .then(function(CivilRegistry){
            var factory = getFactory();
            var NS =  'org.petition.prov.participants';

            
            var Civil = factory.newResource(NS,'Civil',CivilData.CivilId);
            
            Civil.CivilId = CivilData.CivilId;
            Civil.CivilDetail = CivilData.CivilDetail;

            // 이벤트 발생 필요함.
            // var event = factory.newEvent(NS, 'FlightCreated');
            // event.flightId = flightId;
            // emit(event);

            // 4. Add to registry
            return CivilRegistry.add(Civil);
        });
}

/**
 * NonstopCreate
 * @param {org.petition.prov.petition.NonstopCreate} PetitionData
 * @transaction
 */
function NonstopCreate(PetitionData){
    return getAssetRegistry('org.petition.prov.petition.Petition')
        
    .then(function(PetitionRegistry){
        var factory = getFactory();
        var NS =  'org.petition.prov.petition'; // Namespace
        var timeNow = PetitionData.timestamp;
        var PetitionId = "1-"+String(PetitionData.Civil.CivilId)+'-'+String(timeNow); 
        // 일단 민원 고유번호를 시민번호 + 시간으로 정함.
        var petition = factory.newResource(NS,'Petition',PetitionId);
        petition.PetitionId = PetitionId;
        petition.Civil = PetitionData.Civil;
        petition.location = PetitionData.location;
        petition.BusStopName = PetitionData.BusStopName;
        petition.BusNumber = PetitionData.BusNumber;
        petition.VehicleId = PetitionData.VehicleId;
        petition.Time = PetitionData.Time;

        petition.Content = PetitionData.Content;
        petition.timestamp = PetitionData.timestamp
        // 이벤트 발동
        var event = factory.newEvent(NS, "PetitionCreated");
        event.PetitionId = PetitionId;
        event.CivilId = PetitionData.Civil.CivilId;
        emit(event);
        /////////////////////////

        return PetitionRegistry.add(petition);
    });
    
}

/**
 * ImpoliteCreate
 * @param {org.petition.prov.petition.ImpoliteCreate} PetitionData
 * @transaction
 */
function ImpoliteCreate(PetitionData){
    return getAssetRegistry('org.petition.prov.petition.Petition')
    .then(function(PetitionRegistry){
        var factory = getFactory();
        var NS =  'org.petition.prov.petition'; // Namespace
        var timeNow = PetitionData.timestamp;
        // 자바스크립트의 new Date()함수는 endorsing peer 레벨에서 통일이 안 된다고 함.
        var PetitionId = "2-"+String(PetitionData.Civil.CivilId)+'-'+String(timeNow);
        // 일단 민원 고유번호를 시민번호 + 시간으로 정함.
        var petition = factory.newResource(NS,'Petition',PetitionId);

        petition.PetitionId = PetitionId;
        petition.Civil = PetitionData.Civil;
        petition.location = PetitionData.location;
        petition.DriverName = PetitionData.DriverName;
        petition.BusNumber = PetitionData.BusNumber;
        petition.VehicleId = PetitionData.VehicleId;
        petition.Time = PetitionData.Time;

        petition.Content = PetitionData.Content;
        petition.timestamp = PetitionData.timestamp
        // 이벤트 발동
        var event = factory.newEvent(NS, "PetitionCreated");
        event.PetitionId = PetitionId;
        event.CivilId = PetitionData.Civil.CivilId;
        emit(event);
        /////////////////////////
        return PetitionRegistry.add(petition);
    });
    
}
/**
 * ImpoliteCreate
 * @param {org.petition.prov.petition.IntervalCreate} PetitionData
 * @transaction
 */
function IntervalCreate(PetitionData){
    return getAssetRegistry('org.petition.prov.petition.Petition')
    .then(function(PetitionRegistry){
        var factory = getFactory();
        var NS =  'org.petition.prov.petition'; // Namespace
        var timeNow = PetitionData.timestamp;
        var PetitionId = "3-"+String(PetitionData.Civil.CivilId)+'-'+String(timeNow);
        // 일단 민원 고유번호를 시민번호 + 시간으로 정함.
        var petition = factory.newResource(NS,'Petition',PetitionId);

        petition.PetitionId = PetitionId;
        petition.Civil = PetitionData.Civil;
        petition.location = PetitionData.location;
        petition.BusNumber = PetitionData.BusNumber;
        petition.Time = PetitionData.Time;

        petition.Content = PetitionData.Content;
        petition.timestamp = PetitionData.timestamp
        // 이벤트 발동
        var event = factory.newEvent(NS, "PetitionCreated");
        event.PetitionId = PetitionId;
        event.CivilId = PetitionData.Civil.CivilId;
        emit(event);
        /////////////////////////
        return PetitionRegistry.add(petition);
    });
    
}

/**
 * ImpoliteCreate
 * @param {org.petition.prov.petition.FeeCreate} PetitionData
 * @transaction
 */
function FeeCreate(PetitionData){
    return getAssetRegistry('org.petition.prov.petition.Petition')
    .then(function(PetitionRegistry){
        var factory = getFactory();
        var NS =  'org.petition.prov.petition'; // Namespace
        var timeNow = PetitionData.timestamp;
        var PetitionId = "4-"+String(PetitionData.Civil.CivilId)+'-'+String(timeNow);
        // 일단 민원 고유번호를 시민번호 + 시간으로 정함.
        var petition = factory.newResource(NS,'Petition',PetitionId);

        petition.PetitionId = PetitionId;
        petition.isCash = PetitionData.isCash; // isCash는 true / false이다.
        petition.Civil = PetitionData.Civil;
        petition.location = PetitionData.location;
        petition.DriverName = PetitionData.DriverName;
        petition.BusNumber = PetitionData.BusNumber;
        petition.VehicleId = PetitionData.VehicleId;
        petition.Time = PetitionData.Time;
        
        petition.Content = PetitionData.Content;
        petition.timestamp = PetitionData.timestamp
        // 이벤트 발동
        var event = factory.newEvent(NS, "PetitionCreated");
        event.PetitionId = PetitionId;
        event.CivilId = PetitionData.Civil.CivilId;
        emit(event);
        /////////////////////////
        return PetitionRegistry.add(petition);
    });
    
}

/**
 * AcceptPetition
 * @param {org.petition.prov.petition.AcceptPetition} InputData
 * @transaction
 * // 이 함수는 정부 담당자만 불러올 수 있는 함수입니다.
 */
function AcceptPetition(InputData) {
    // 민원 전체 데이터를 불러온다
    var Data;
    
    return getAssetRegistry("org.petition.prov.petition.Petition")
        .then(function(PetitionRegistry){
            // 특정 민원id에 해당하는 값을 가져온다
            return PetitionRegistry.get(InputData.Petition.PetitionId)
                .then(function(PetitionData){
                    // TRUE값으로 변경한다
                    Data = PetitionData;
                    Data.Accepted = true;
                    // 변경한 값을 AssetRegistry에 다시 저장한다.
                    return getAssetRegistry("org.petition.prov.petition.Petition")
                    .then(function(UpDatedDataset){
                        
                        return UpDatedDataset.update(Data);
                        })

                    // 여기까지 해서 Petition 값 설정 완료. 이제는 Feedback asset 값을 설정한다.
                    .then(function(){

                        // GovernEmployee Participant 정보를 받아온다
                        return getParticipantRegistry("org.petition.prov.participants.GovernEmployee")
                        .then(function(ParticipantRegistry){

                            // input으로 받은 GovernEmployee의 EmployeeId를 빼낸다
                            return ParticipantRegistry.get(InputData.GovernEmployee.EmployeeId)
                                .then(function(GovernEmployee){

                                    // EmployeeId를 officerId에 저장한다.
                                    var officerId = GovernEmployee.EmployeeId;

                                    // 이제 FeedBack asset에 업데이트한다
                                    return getAssetRegistry("org.petition.prov.petition.FeedBack")
                                        .then(function(FeedbackRegistry){
                                            var factory = getFactory();
                                            var NS =  'org.petition.prov.petition'; // Namespace
                                            var timeNow = InputData.timestamp;
                                            var FeedBackId = String(officerId)+'-'+String(timeNow); 
                                            
                                            var FeedBack = factory.newResource(NS,'FeedBack',FeedBackId);
                                            
                                            FeedBack.FeedBackId = FeedBackId;
                                            FeedBack.Petition = InputData.Petition;
                                            FeedBack.GovernEmployee = InputData.GovernEmployee;
                                            FeedBack.Comments = InputData.Comments;
                                            FeedBack.Acceptedtimestamp = InputData.timestamp;

                                            // 이벤트 발생
                                            var event = factory.newEvent(NS, "PetitionAccepted");
                                            event.FeedBackId = FeedBackId;
                                            event.EmployeeId = officerId;
                                            emit(event);
                                            //////////////////
                                            return FeedbackRegistry.add(FeedBack);
                                            }) 
                                    })
                            })
                        })
                    });
            });
    };
/**
 * ResolvePetition
 * @param {org.petition.prov.petition.ResolvePetition} InputData
 * @transaction
 * // 이 함수는 버스운송조합만 불러올 수 있는 함수입니다.
 */
function ResolvePetition(InputData) {
    return getAssetRegistry("org.petition.prov.petition.Petition")
    .then(function(PetitionRegistry){
        // 특정 민원id에 해당하는 값을 가져온다
        return PetitionRegistry.get(InputData.Petition.PetitionId)
            .then(function(PetitionData){
                // TRUE값으로 변경한다
                Data = PetitionData;
                Data.Resolved = true;
                // 변경한 값을 AssetRegistry에 다시 저장한다.
                return getAssetRegistry("org.petition.prov.petition.Petition")
                .then(function(UpDatedDataset){
                    
                    return UpDatedDataset.update(Data);
                    })

                // 여기까지 해서 Petition 값 설정 완료. 이제는 Feedback asset 값을 설정한다.
                .then(function(){

                    // BusCompany 정보를 받아온다
                    return getParticipantRegistry("org.petition.prov.participants.BusCompany")
                    .then(function(ParticipantRegistry){

                        // input으로 받은 BusCompany의 Number를 빼낸다
                        return ParticipantRegistry.get(InputData.BusCompany.BusCompanyNumber)
                            .then(function(BusCompany){

                                // 필요한 값들을 저장한다.
                                var BusCompanyName = BusCompany.BusCompanyName;
                                // var BusDriverId = BusCompany.BusDriver.DriverId;
                                // var BusDriverName = BusCompany.BusDriver.DriverName;
                                // 이제 FeedBack asset에 업데이트한다
                                return getAssetRegistry("org.petition.prov.petition.FeedBack")
                                    .then(function(FeedbackRegistry){
                                        return FeedbackRegistry.get(InputData.FeedBack.FeedBackId)
                                            .then(function(FeedBackData){
                                                var factory = getFactory();
                                                var NS =  'org.petition.prov.petition'; // Namespace
                                                Data = FeedBackData;
                                                Data.BusComments = InputData.BusComments;
                                                Data.Resolvedtimestamp = InputData.timestamp;
                                                Data.BusCompany = InputData.BusCompany;
                                                
                                                // optional 값들. 버스회사의 피드백에 넣어도 되고 아니어도 되는 것들
                                                Data.BusDriverName = InputData.BusDriverName;
                                                Data.BusDriverId = InputData.BusDriverId;

                                                // 이벤트 발생
                                                var event = factory.newEvent(NS, "PetitionResolved");
                                                event.FeedBackId = Data.FeedBackId;
                                                event.BusCompanyName = BusCompanyName;
                                                emit(event);
                                                //////////////////
                                                return FeedbackRegistry.update(Data)
                                            });
                                        }) 
                                })
                        })
                    })
                });
        });
};