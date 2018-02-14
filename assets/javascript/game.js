$(document).ready(function() {

	//crystals object for random values per crystal
	var crystals = {
	"yellow" : Math.floor(Math.random() * 12) + 1,
	"purple" : Math.floor(Math.random() * 12) + 1,
	"topaz" : Math.floor(Math.random() * 12) + 1,
	"red" : Math.floor(Math.random() * 12) + 1,
	}

	function checkTotal(total, ranNo) {

		if (total === ranNo) {
			wins += 1
			total = 0
			ranNo = Math.floor(Math.random() * 101) + 20
			$("#scoreBox").text(total);
			$("#wins").text("Wins: " + wins)
			alert("No one likes Scott");
		}

		else if (total > ranNo) {
			losses += 1
			total = 0
			ranNo = Math.floor(Math.random() * 101) + 20
			$("#losses").text("Losses: " + losses)
			$("#scoreBox").text(total);
		}
	}



	var ranNo = Math.floor(Math.random() * 101) + 20

	$("#ranNo").text(ranNo)

	var total = 0
	var wins = 0
	var losses = 0


	$("#yellow").on("click", function() {
		total += crystals.yellow
		$("#scoreBox").text(total);
		console.log(checkTotal(total, ranNo))
	})

	$("#red").on("click", function() {
		total += crystals.red
		$("#scoreBox").text(total);
		console.log(checkTotal(total, ranNo))
	})

	$("#topaz").on("click", function() {
		total += crystals.topaz
		$("#scoreBox").text(total);
		console.log(checkTotal(total, ranNo))
	})

	$("#purple").on("click", function() {
		total += crystals.purple
		$("#scoreBox").text(total);
		console.log(checkTotal(total, ranNo))
	})

})


