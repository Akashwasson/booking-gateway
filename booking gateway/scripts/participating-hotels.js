//function to show participating hotels		
			function showParticipatingHotel(){
				var loc1 = document.getElementById("loc1");
				var loc2 = document.getElementById("loc2");
				var loc3 = document.getElementById("loc3");
				var loc4 = document.getElementById("loc4");
				var loc5 = document.getElementById("loc5");
				var loc6 = document.getElementById("loc6");
				
				loc1.onclick = function(){
					alert("The participating hotel for this destination is Melia Nassau Beach Resort. Its daily rate is $395.");
				}
				loc2.onclick = function(){
					alert("The participating hotel for this destination is Paradisus Cancun Resort and Spa. Its daily rate is $325.");
				}
				loc3.onclick = function(){
					alert("The participating hotel for this destination is Dreams Palm Beach Punta Cana. Its daily rate is $280.");
				}
				loc4.onclick = function(){
					alert("The participating hotel for this destination is Round Hill Hotel and Villas Resort. Its daily rate is $265.");
				}
				loc5.onclick = function(){
					alert("The participating hotel for this destination is Hilton Hawaiian Village. Its daily rate is $275.");
				}
				loc6.onclick = function(){
					alert("The participating hotel for this destination is Grand Wailea Resort Hotel & Spa. Its daily rate is $350.");
				}
				
			}
			
			//call/invoke the function
			showParticipatingHotel();