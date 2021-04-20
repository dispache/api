import dotenv from 'dotenv';

dotenv.config();

const server_hostname = process.env.HOSTNAME;
const server_port = process.env.PORT;

const server = {
	server_port,
	server_hostname
};

const config = {
	server
};

export default config;