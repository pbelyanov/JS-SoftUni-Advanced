class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }
    newAdditions(footballPlayers) {
        let exists = false;
        let playersAdded = []
        for (let row of footballPlayers) {
            let arrayInfo = row.split('/');
            let object = {};
            object.name = arrayInfo[0];
            object.age = arrayInfo[1];
            object.playerValue = arrayInfo[2];
            if (this.invitedPlayers === []) {
                this.invitedPlayers.push(object)
            } else {
                for (let index of this.invitedPlayers) {
                    if (index.name.includes(object.name)) {
                        exists = true;
                        if (index.playerValue < object.playerValue) {
                            index.playerValue = object.playerValue;

                        }
                    }
                }
                if (exists === false) {
                    this.invitedPlayers.push(object);
                    playersAdded.push(object.name);
                }
            }
        }
        return (`You successfully invite ${playersAdded.join(', ')}.`)


    }
    signContract(selectedPlayer) {
        let presentInList = false;
        let input = selectedPlayer.split('/');
        let currentPlayer = {};
        currentPlayer.name = input[0];
        currentPlayer.playerOffer = input[1];
        for (let row of this.invitedPlayers) {
            if (row.name === currentPlayer.name) {
                presentInList = true;
                if (Number(row.playerValue) > Number(currentPlayer.playerOffer)) {
                    throw new Error(`The manager's offer is not enough to sign a contract with ${currentPlayer.name}, ${Number(row.playerValue) - Number(currentPlayer.playerOffer)} million more are needed to sign the contract!`)
                } else {
                    row.playerValue = 'Bought';
                    return (`Congratulations! You sign a contract with ${currentPlayer.name} for ${currentPlayer.playerOffer} million dollars.`);
                }
            }
        }
        if (presentInList === false) {
            throw new Error(`${currentPlayer.name} is not invited to the selection list!`);

        }
    }
    ageLimit(name, age) {
        let exist = false
        for (let row of this.invitedPlayers) {
            if (row.name === name) {
                exist = true;
                if (Number(row.age) < age) {
                    let diff = age - Number(row.age);
                    if (diff < 5) {
                        return (`${name} will sign a contract for ${diff} years with ${this.clubName} in ${this.country}!`)
                    } else {
                        return (`${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`)
                    }
                } else {
                    return (`${name} is above age limit!`)
                }
            }
        }
        if (exist === false) {
            throw new Error(`${name} is not invited to the selection list!`)

        }
    }
    transferWindowResult() {
        let finalResultArray = [];
        for (let row of this.invitedPlayers) {
            finalResultArray.push(`Player ${row.name}-${row.playerValue}`)
        }
        return (`Players list:\n${finalResultArray.join('\n')}`)

    }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Lionel Messi/60"));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.signContract("Barbukov/10"));