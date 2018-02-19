$(document).ready(function() {

	//crystals object for random values per crystal

	var total = 0
	var wins = 0
	var losses = 0
	var ranNo = Math.floor(Math.random() * 101) + 20

	$("#ranNo").text(ranNo)


	var crystals = {
	"yellow" : Math.floor(Math.random() * 12) + 1,
	"purple" : Math.floor(Math.random() * 12) + 1,
	"topaz" : Math.floor(Math.random() * 12) + 1,
	"red" : Math.floor(Math.random() * 12) + 1,
	}


	function resetGame() {
		total = 0
		ranNo = Math.floor(Math.random() * 101) + 20
		$("#ranNo").text(ranNo)
		$("#scoreBox").text(total)
		crystals = {
			"yellow" : Math.floor(Math.random() * 12) + 1,
			"purple" : Math.floor(Math.random() * 12) + 1,
			"topaz" : Math.floor(Math.random() * 12) + 1,
			"red" : Math.floor(Math.random() * 12) + 1,
		}

	}

	function checkTotal() {

		if (total < ranNo) {
			$("#scoreBox").text(total);
		}

		else if (total === ranNo) {
			wins ++;
			resetGame()
			$("#wins").text("Wins: " + wins)
		}

		else {
			losses ++
			resetGame()
			$("#losses").text("Losses: " + losses)
		}
	}
	


	$("#yellow").on("click", function() {
		total += crystals.yellow
		checkTotal();
		console.log(`total: ${total} \n ranNo: ${ranNo}`)
	})

	$("#red").on("click", function() {
		total += crystals.red
		checkTotal();
		console.log(`total: ${total} \n ranNo: ${ranNo}`)

	})

	$("#topaz").on("click", function() {
		total += crystals.topaz
		checkTotal();
		console.log(`total: ${total} \n ranNo: ${ranNo}`)
	})

	$("#purple").on("click", function() {
		total += crystals.purple
		checkTotal();
		console.log(`total: ${total} \n ranNo: ${ranNo}`)
	})

})


