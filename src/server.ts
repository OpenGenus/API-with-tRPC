import { createExpressMiddleware } from '@trpc/server/adapters/express'
import express from 'express';
import { appRouter } from './router'

const app = express();

app.use(express.json());

const apiEndpoint = "/trpc";

app.use(
    apiEndpoint,
    createExpressMiddleware({
        router: appRouter,
        createContext: () => ({})
    }),
)

app.listen(3000, () =>{
    console.log('Server is running')
})