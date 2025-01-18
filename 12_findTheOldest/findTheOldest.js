const findTheOldest = function (list) {
	if (!list.length) return null; // Handle empty array
	return list.reduce((oldest, currentPerson) => {
		const oldestAge = (oldest.yearOfDeath || new Date().getFullYear()) - oldest.yearOfBirth;
		const currentAge = (currentPerson.yearOfDeath || new Date().getFullYear()) - currentPerson.yearOfBirth;
		return currentAge > oldestAge ? currentPerson : oldest;
	}, list[0]); // Start with the first person as the initial value
};

// Do not edit below this line
module.exports = findTheOldest;
