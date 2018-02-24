export class Robot {
	public type: string;
	public material: string;
	public planet: string;
	public intelligence: number;
	public happy: boolean
	
	constructor(data: any) {
		// TODO: To be replaced with fromJson or something equivalent
		this.type = data.type;
		this.material = data.material;
		this.planet = data.planet;
		this.intelligence = data.intelligence;
		this.happy = data.happy;
	}
	
	public static createNewRobot(data: any): void {
		let robot: Robot = new Robot(data);
		// robot might be set to do stuff now in the world or something
		
		console.log(robot);
		
		// TODO: emit a response to the user that made the call to this method
	}
}