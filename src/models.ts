interface ICashier {
	name: string,
	surname: string,
	age: number,
	sex: string,
	yearsOfExperience: number,
	shopId: number
}

interface IShop {
	name: string,
	address: string,
	cityId: number
}

class Cashier implements ICashier {
	constructor(public name: string, public surname: string, public age: number, public sex: string,
		public yearsOfExperience: number, public shopId: number) {}
}

class Shop implements IShop {
	constructor(public name: string, public address: string, public cityId: number) {}
}

export { Cashier, Shop }