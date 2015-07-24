Meteor.startup(function(){
	if (Polls.find().count() === 0) {
		//Seed collection with sample polls
		var samplePolls = [
		{
			question: 'What is your favorite color',
			answers: [
				{text: 'Red', votes: 2},
				{text: 'Blue', votes: 1},
				{text: 'Green', votes: 5}
			]
		},

		{
			question: 'Do you like this app?',
			answers: [
				{text: 'Yes', votes: 942},
				{text: 'No', votes: 1}
			]

		}
		];

		_.each(samplePolls, function(poll){
			Polls.insert(poll);
		})
	}
});