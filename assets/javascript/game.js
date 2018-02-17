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
function checkTotal(foo, bar, int) {

		if (foo < bar) {
			total += int
			$("#scoreBox").text(total);
		}

		else if (foo === bar) {
			wins += 1;
			ranNo = Math.floor(Math.random() * 101) + 20;
			total = 0;
			$("#ranNo").text(bar);
			$("#wins").text("Wins: " + wins);
			$("#scoreBox").text(foo);
		}

		else if (foo > bar) {
			ranNo = Math.floor(Math.random() * 101) + 20;
			total = 0;
			losses += 1;
			$("#ranNo").text(bar);
			$("#losses").text("Losses: " + losses);
			$("#scoreBox").text(foo);
			return foo
		}
	}
	


	$("#yellow").on("click", function() {
		checkTotal(total, ranNo, crystals.yellow)
		console.log(`total: ${total} \n ranNo: ${ranNo}`)
	})

	$("#red").on("click", function() {
		checkTotal(total, ranNo, crystals.red)
		console.log(`total: ${total} \n ranNo: ${ranNo}`)

	})

	$("#topaz").on("click", function() {
		checkTotal(total, ranNo, crystals.topaz)
		console.log(`total: ${total} \n ranNo: ${ranNo}`)
	})

	$("#purple").on("click", function() {
		checkTotal(total, ranNo, crystals.purple)
		console.log(`total: ${total} \n ranNo: ${ranNo}`)
	})

})


