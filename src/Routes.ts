import { PrismaClient } from "@prisma/client";
import { Express, Request, Response } from 'express';
import OTPController from "./controller/OTPController";


export default class Routes {
    databaseConnection: PrismaClient;

    constructor(readonly http: Express) {
        this.databaseConnection = new PrismaClient();
        this.configure();
    }

    configure() {
        this.http.get("/", async (req: Request, res: Response) => {
            res.json({ message: "I'm alive" });
        });

        this.http.post("/codes/:userId/validations", async (req: Request, res: Response) => {
            try {
                const controller = new OTPController(this.databaseConnection)
                const resultOrError = await controller.validateCode(req?.params?.userId, req?.body?.code)
                if (resultOrError.isFailure) return res.status(401).json({ message: resultOrError.error })
                return res.json({})
            } catch (error) {
                console.log(error)
                return res.status(500).json({ message: 'Ocorreu um erro inesperado.' })
            }
        });

        this.http.post("/codes", async (req: Request, res: Response) => {
            try {
                const controller = new OTPController(this.databaseConnection)
                const resultOrError = await controller.generateCode(
                    req?.body?.user_id,
                    req?.body?.user_phone,
                    new Date()
                )
                if (resultOrError.isFailure) return res.status(401).json({ message: resultOrError.error })
                return res.json({ message: 'Mensagem enviada com sucesso.' })
            } catch (error: any) {
                if (error?.status === 400) return res.status(400).json({ message: 'Número do celular inválido' })
                return res.status(500).json({ message: 'Ocorreu um erro inesperado.' })
            }
        });


    }
}
