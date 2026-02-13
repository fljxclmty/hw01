import express, { Express } from "express";
import {testingRouter} from "./testing/router/testing.router";
import {videosRouter} from "./videos/router/videos.router";

export const setupApp = (app: Express) => {
    app.use(express.json()); // middleware для парсинга JSON в теле запроса

    // основной роут
    app.get("/", (req, res) => {
        res.status(200).send("Hello world!");
    });


    // Подключаем роутеры
    app.use("/videos", videosRouter);
    app.use("/testing", testingRouter);


    return app;
};