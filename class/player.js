class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
    }

    move(direction) {

        const nextRoom = this.currentRoom.getRoomInDirection(direction);

        // If the next room is valid, set the player to be in that room
        if (nextRoom) {
            this.currentRoom = nextRoom;

            nextRoom.printRoom(this);
        } else {
            console.log("You cannot move in that direction");
        }
    }

    printInventory() {
        if (this.items.length === 0) {
            console.log(`${this.name} is not carrying anything.`);
        } else {
            console.log(`${this.name} is carrying:`);
            for (let i = 0; i < this.items.length; i++) {
                console.log(`  ${this.items[i].name}`);
            }
        }
    }

    takeItem(itemName) {

        for (let i = 0; i < this.currentRoom.items.length; i++){
            if (this.currentRoom.items[i]["name"] === itemName) {
                // console.log(this.items);
                // console.log(this.currentRoom.items[i]["name"]);
                this.items.push(this.currentRoom.items[i]);
                this.currentRoom.items.pop();
                // console.log(this.items);
            }
        }

    }

    dropItem(itemName) {

        // Fill this in
        for (let i = 0; i < this.items.length; i++){
            if (this.items[i]["name"] === itemName) {
                this.currentRoom.items.push(this.items[i]);
                this.items.pop();
            }
        }

    }

    eatItem(itemName) {
        // Fill this in

    }

    getItemByName(name) {

        // Fill this in
        for (let i = 0; i < this.items.length; i++) {
            let itemName = this.items[i]["name"];
            if (itemName === name) {
                return this.items[i];
            }
        }
    }
}



module.exports = {
    Player,
};
