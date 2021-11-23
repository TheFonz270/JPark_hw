const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinos = [];
}

Park.prototype.addDinos = function (dino) {
    this.dinos.push(dino);
};

Park.prototype.removeDino = function (dino){
    const indexOfDino = this.dinos.indexOf(dino);
    this.dinos.splice(indexOfDino, 1);
}

Park.prototype.findCelebDino = function () {
    let celeb = this.dinos[0];
    for (const dino of this.dinos){
        if(dino.guestsAttractedPerDay > celeb.guestsAttractedPerDay){
            celeb = dino
        }
    }
    // if dino.guestsAttractedPerDay > celeb then celeb = dino.guestsAttractedPerDay
    return celeb
}

Park.prototype.findSpecies = function (species){
    let result = [];
    for (const dino of this.dinos){
        if(dino.species == species){
            result.push(dino)
        }
    }
    return result;
}

Park.prototype.totalVisitorsPerDay = function () {
    let total = 0;
    for (const dino of this.dinos) {
        total += dino.guestsAttractedPerDay
    }
    return total

}

Park.prototype.totalVisitorsPerYear = function () {
    return this.totalVisitorsPerDay() * 365
}


module.exports = Park;