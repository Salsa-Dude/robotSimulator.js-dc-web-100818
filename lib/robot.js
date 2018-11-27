class Robot {
	constructor(coordinates = [0,0], bearing = 'north') {
		this.coordinates = coordinates;
		this.bearing = bearing;	
	}

	setCoordinates(num1, num2) {
		this.coordinates = [num1, num2]
	}

	setBearing(direction) {
		const directions = ["north", "south", "east", "west"];
		if (directions.includes(direction)) {
			this.bearing = direction;
		} else {
			throw 'Invalid Robot Bearing';
		}
	}

	place(obj) {
		let x = obj.x
		let y = obj.y
		let direction = obj.direction;
		this.coordinates = [x, y]
		this.setBearing(direction);

	}

	turnRight() {
		switch (this.bearing) {
			case 'north':
				this.setBearing('east')
				// this.bearing = "east"
				break;
			case 'east':
				this.setBearing('south')
				// this.bearing = 'south'
				break
			case 'south':
				this.setBearing('west')
				// this.bearing = 'west'
				break
			case 'west':
				this.setBearing('north')
				// this.bearing = 'north'
				break
		}
	}

	turnLeft() {
		switch (this.bearing) {
			case 'north':
				this.setBearing('west')
				// this.bearing = "west"
				break;
			case 'east':
				this.setBearing('north')
				// this.bearing = 'north'
				break
			case 'south':
				this.setBearing('east')
				// this.bearing = 'east'
				break
			case 'west':
				this.setBearing('south')
				// this.bearing = 'south'
				break
		}
	}

	advance() {
		switch (this.bearing) {
			case 'north':
				this.coordinates[1]++
				// this.coordinates = [0, 1]
				break;
			case 'east':
				this.coordinates[0]++
				// this.coordinates = [1, 0]
				break
			case 'south':
				this.coordinates[1]--
				// this.coordinates = [0, -1]
				break
			case 'west':
				this.coordinates[0]--
				// this.coordinates = [-1, 0]
				break
		}
	}

	translateInstructions(letters) {
		let array = letters.split('').forEach(letter => {
			switch (letter) {
				case 'L':
					this.turnLeft()
					// this.bearing = 'west';
					break;
				case 'R':
					this.turnRight()
					// this.bearing = 'east';
					break
				case 'A':
					this.advance()
				break
			}
		})
	}
}
