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
 * Sample transaction
 * @param {org.petition.prov.participants.SampleTransaction} sampleTransaction
 * @transaction
 */
async function sampleTransaction(tx) {
    // Save the old value of the asset.
    const oldValue = tx.asset.value;

    // Update the asset with the new value.
    tx.asset.value = tx.newValue;

    // Get the asset registry for the asset.
    const assetRegistry = await getAssetRegistry('org.petition.prov.participants.SampleAsset');
    // Update the asset in the asset registry.
    await assetRegistry.update(tx.asset);

    // Emit an event for the modified asset.
    let event = getFactory().newEvent('org.petition.prov.participants', 'SampleEvent');
    event.asset = tx.asset;
    event.oldValue = oldValue;
    event.newValue = tx.newValue;
    emit(event);
}


/**
 * CreatePetition
 * @param {org.petition.prov.petition.CreatePetition} PetitionData
 * @transaction
 */
function    createPetition(PetitionData) {

    /**
     * 1. Validate the schedule data
     * If the date is a past date then throw an error
     */
    // var timeNow = new Date().getTime();
    // var schedTime = new Date(PetitionData.uploadDate).getTime();
    // if(schedTime < timeNow){
    //     throw new Error("Upload Datetime cannot be in the past!!!");
    // }

    // Get the Asset Registry

    // return getAssetRegistry('org.acme.airline.flight.Flight')
    return getAssetRegistry('org.petition.prov.petition.Petition')
        
        .then(function(PetitionRegistry){ //flightRegistry가 여깄었음
            // Now add the Flight - global function getFactory() called
            var  factory = getFactory();

            var  NS =  'org.petition.prov.petition'; // Namespace

            // Solution to exercise - Removed hardcoded value & invoked
            // generate the flight ID
            // 2.1 Set the flightNumber, flightId ... 
            // var  flightId = generateFlightId(flightData.flightNumber,flightData.schedule);
            // var  flight = factory.newResource(NS,'Flight',flightId);
            var PetitionId = '1'; // 민원 일련번호를 만드는 방법이 필요함. 그냥 +1만 주구장창 할 수도 있고, 랜덤값 넣을 수도 있고...
            var  petition = factory.newResource(NS,'Petition',PetitionId);
            
            petition.PetitionId = PetitionData.PetitionId;
            petition.CivilId = PetitionData.CivilId;
            petition.Content = PetitionData.Content;
            petition.title = PetitionData.title;
            

            // // Flight asset has an instance of the concept
            // // 2.2 Use the factory to create an instance of concept
            // var route = factory.newConcept(NS,"Route");

            // // 2.3 Set the data in the concept 'route'
            // route.origin = flightData.origin;
            // route.destination = flightData.destination;
            // route.schedule = flightData.schedule;

            // // 2.4 Set the route attribute on the asset
            // flight.route = route;
            

            // // 3 Emit the event FlightCreated
            // var event = factory.newEvent(NS, 'FlightCreated');
            // event.flightId = flightId;
            // emit(event);

            // 4. Add to registry
            return PetitionRegistry.add(petition);
        });
}