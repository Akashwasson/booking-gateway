
var form = document.getElementById("form1");
var myelement = document.getElementById("displayBooking");
var link = document.getElementById("displayForm")

ToggleFormDisplay=(j)=>{
    console.log('ye j hai',j);
    if(j%2==0){
        myelement.style.display = "block";
        link.style.display ="block"
        form.style.display = "none";
    }else{
        form.style.display = "block";
        myelement.style.display = "none";
        link.style.display ="none"
    }
   
}

var hoteldes = [
                {value:"loc1", hotelname:"Melia Nassau Beach Resort", place:"Nassau - The Bahamas", perday:395, airticket:600},
                {value:"loc2", hotelname:"Paradisus Cancun Resort and Spa", place:"Cancun - Mexico", perday:325, airticket:500},
                {value:"loc3", hotelname:"Dreams Palm Beach Punta Cana", place:"Punta Cana - Dominican Republic", perday:280, airticket:675},
                {value:"loc4", hotelname:"Round Hill Hotel and Villas Resort", place:"Montego Bay - Jamaica", perday:265, airticket:610},
                {value:"loc5", hotelname:"Hilton Hawaiian Village", place:"Waikiki - Oahu, Hawaii", perday:275, airticket:425},
                {value:"loc6", hotelname:"Grand Wailea Resort Hotel & Spa", place:"Wailea - Maui, Hawaii", perday:350, airticket:450},
            ];

var roomtype =[
                {value:"Queen bed room" , cost:0},
                {value:"King bed room" , cost:20},
                {value:"Two queen bed room" , cost:40},
                {value:"" , cost:0},
            ];

var roomloc = [
                {value:"Garden/hotel view" , cost:0},
                {value:"Ocean view" , cost:25},
                {value:"Oceanfron" , cost:50},
                {value:"" , cost:0}
            ];

var duration = [
                {value:"3 days" ,days:3, precent:5},
                {value:"5 days" ,days:5 , precent:7.5},
                {value:"7 days",days:7 , precent:10},
                {value:"" , precent:0}
]



ProcessBooking=()=>{
    console.log('ye process hai');
    // activities
    var selectedActivities = [];
    var selected= ``;
    var myActivities = ``;
    var totalActivitycost = 0;
    if(document.getElementById("pickup").checked){ selectedActivities.push({name:"Pickup",cost:125})};
    if(document.getElementById("dinner").checked){ selectedActivities.push({name:"Dinner",cost:150})};
    if(document.getElementById("photos").checked){ selectedActivities.push({name:"Photos",cost:550})};
    console.log(selectedActivities);
    for(var i=0; i<selectedActivities.length;i++){
        selected += selectedActivities[i].name + ' ';
        myActivities += `<tr><td> Activity `+selectedActivities[i].name+`:</td>
        <td>$ `+selectedActivities[i].cost+`</td> </tr>`;
        totalActivitycost+=selectedActivities[i].cost;
    }
// activities end 

// for name
    var name= document.getElementById("names").value
    var letters = /^[A-Za-z]+$/;
    if(name.match(letters)){}else{ name = 'Mr. & Mrs.'}
//name end 


// hotel name and designation
    var Hotel = "";
    for(var i = 0 ;i<hoteldes.length;i++){
        if(document.getElementById(hoteldes[i].value).checked){
            Hotel=hoteldes[i];
        }
    }
// hotel end

// room type
    var sroomtype = ""
    for(var i = 0 ;i<roomtype.length;i++){
            if(document.getElementById('roomType').value===roomtype[i].value){
                sroomtype=roomtype[i];
                console.log(sroomtype)
            }
        }

//end

//room location
    var sroomloc = ""
    for(var i = 0 ;i<roomloc.length;i++){
            if(document.getElementById('roomLoc').value===roomloc[i].value){
                sroomloc=roomloc[i];
                console.log(sroomloc)
            }
        }
//end

//duraation
    var sduration = ""
    for(var i = 0 ;i<duration.length;i++){
            if(document.getElementById('duration').value===duration[i].value){
                sduration=duration[i];
                console.log(sduration)
            }
        }
//end
    var AccommodationCost = (sroomloc.cost +sroomtype.cost +Hotel.perday)*sduration.days*2;
    var Discount = AccommodationCost*sduration.precent/100;
    AccommodationCost = AccommodationCost -Discount;
    var TotalCost = AccommodationCost + Hotel.airticket*2 +totalActivitycost;
    var html = `<tr>
                <th>Name </th>
                <th>Value</th>
                </tr>
                <tr>
                <td>The couple’s names:</td>
                <td>`+name+`</td>
                </tr>
                <tr>
                <td>Selected destination:</td>
                <td>`+Hotel.place+`</td>
                </tr>
                <tr>
                <td>Participating hotel/resort:</td>
                <td>`+Hotel.hotelname+`</td>
                </tr>
                <tr>
                <td>Duration of stay:</td>
                <td>`+sduration.value+`</td>
                </tr>
                <tr>
                <td>Room type:</td>
                <td>`+sroomtype.value+`</td>
                </tr>
                <tr>
                <td>Room location:</td>
                <td>`+sroomloc.value+`</td>
                </tr>
                <tr>
                <td>Accommodation cost:</td>
                <td>$ `+AccommodationCost+`</td>
                </tr><tr>
                <td>Fight cost:</td>
                <td>$ `+Hotel.airticket*2+`</td>
                </tr><tr>
                <td>Activities selected:</td>
                <td>`+selected+`</td>
                </tr>`+myActivities+`<tr>
                <td>Total activity cost:</td>
                <td>$ `+totalActivitycost+`</td>
                </tr><tr>
                <td>Total getaway cost:</td>
                <td>$ `+TotalCost+`</td>
                </tr>
                `
    var table = document.getElementById("bookingSummary");
    table.innerHTML= html;
}

document.getElementById("btnSubmit").addEventListener("click", ()=>{ToggleFormDisplay(2);ProcessBooking()} );
document.getElementById("displayForm").addEventListener("click",()=>{ToggleFormDisplay(3)} );