$(() => {
	$("#connectionButton").on("click", () => {
		if ("Connect" == $("#connectionButton").val()) {
			socket.open();
		}
		if ("Disconnect" == $("#connectionButton").val()) {
			socket.close();
		}
	});
	socket.on('connect', (data) => {
		verifyConnectionStatus();
	});
	socket.on('disconnect', (data) => {
		verifyConnectionStatus();
	});
	
	$("#createRobot").on("click", () => {
		var newRobot = {
			"type": $("#type").val(),
			"material": $('input[name=material]:checked').val(),
			"planet": $('input[name=planet]:checked').val(),
			"intelligence": $("#intelligence").val(),
			"happy": $("#happy").val()
		};
		
		// TODO: Disable all these fields and the create button until the response comes back.
		//       At that time, clear all the fields.
		
		callRemoteMethod("Robot.createNewRobot", newRobot);
	});
});
