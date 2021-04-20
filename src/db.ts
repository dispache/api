import dotenv from 'dotenv';
import { Pool } from 'pg';

const pg_port: number = parseInt(String(process.env.PG_PORT));

const pool = new Pool({
	user: process.env.PGUSER,
	password: process.env.PGPASSWORD,
	host: process.env.HOSTNAME,
	port:  pg_port,
	database: process.env.PG_DATABASE
});

export default pool;

