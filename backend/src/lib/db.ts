import { DataSource } from "typeorm";

export const database = new DataSource({
    type: "postgres",
    host: `${process.env.DB_HOSTNAME}`,
    port: 5432,
    username: `${process.env.DB_USERNAME}`,
    password: `${process.env.DB_PASSWORD}`,
    database: `${process.env.DB_DATABASE}`,
    synchronize: true,
    logging: true,
    entities: [],
    subscribers: [],
    migrations: []
})