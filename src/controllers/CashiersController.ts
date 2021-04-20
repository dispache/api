import db from '../db';
import { Cashier, Shop } from '../models';

class CashiersController {
	async getAllCashiers(req: any,res: any) {
		if (Object.keys(req.query).length > 0) {
			const filter = Object.entries(req.query)[0];
			const result = await getCashiers(filter);
			console.log(result);
			return res.send(result);
		}
		async function getCashiers(filter: [string, unknown | string]): Promise<object> {
				console.log(filter[0], filter[1]);
				const { rows: cashier } = await db.query(`SELECT * FROM cashier WHERE ${filter[0]}=
					${filter[1]}`);
				return cashier[0];
		}
		const { rows: cashiers } = await db.query('SELECT * FROM cashier');
		console.log(cashiers);
		return res.send(cashiers);
	}
	async getOneCashier(req: any,res: any) {
		async function getCashier(id: string | number): Promise<object> {
			const cashierId = id;
			const { rows: cashier } = await db.query('SELECT * FROM cashier WHERE id=$1', [cashierId])
			return cashier[0];
		}
		let result = await getCashier(req.params['id']);
		return res.send(result);
	} 
	async updateCashier(req: any,res: any) {
		async function updCashier(id: number|string, filter: [string, unknown|string]): Promise<void> {
			const { rows: updatedCashier } = await db.query(`update cashier set ${filter[0]}='${filter[1]}' 
				where id=${id} returning *`);
			console.log(updatedCashier);
		}
		updCashier(req.params['id'], ['sex', 'male']);
	} 
	async deleteCashier(req: any,res: any) {
		const id: number = req.params['id'];
		const { rows: deletedCashier } = await db.query(`delete from cashier 
			where id=$1 returning *`, [id]);
		console.log(deletedCashier[0]);
		return res.send(deletedCashier[0]);
	}
	async createCashier(req: any,res: any) {
		const { name, surname, age, sex, yearsOfExperience, shopId } = req.body;
		const newCashier = new Cashier(name,surname,age,sex,yearsOfExperience, shopId);
		async function addNewCashier(obj: Cashier): Promise<object> {
			const { rows: cashier } = await db.query(`INSERT INTO cashier (name,surname,age,sex,yearsOfExperience,
				shopId) values ($1,$2,$3,$4,$5,$6) returning *`, 
				[obj.name,obj.surname,obj.age,obj.sex,obj.yearsOfExperience,obj.shopId]);
			return cashier[0];
		}
		const result = await addNewCashier(newCashier);
		console.log(result);
		return res.send(result);
	}
	async getTargetCashiers1(req: any, res: any) {
		const { rows: cashiers } = await db.query(`select csh.*, s.address, ct.name from cashier csh 
			left join shop s on csh.shopId=s.id left join city ct on s.cityId=ct.id
			WHERE s.cityid=2 AND csh.yearsOfExperience>5`);
		console.log(cashiers);
		return res.send(cashiers);
	}
	async getTargetCashiers2(req: any, res: any) {
		const { rows: cashiers } = await db.query(`select * from cashier where cashboxnum%2=1 
			AND workday=1 AND workingshift=2;`);
		console.log(cashiers);
		return res.send(cashiers);
	}
}

export default new CashiersController();