import { Router, Request, Response } from "express";
import { db } from "../../db/in-memory.db";
import { HttpStatus } from '../../core/types/http-statuses';
import { createErrorMessages } from '../../core/utils/error.utils';
import { CreateVideoInputModel, Video } from "../types/video";
import { videoInputValidation, videoUpdateValidation } from "../validation/videoInputValidation";

export const videosRouter = Router();

videosRouter
    .get('', (req: Request, res: Response) => {
        res.status(200).send(db.videos);
    })

    .get('/:id', (req: Request, res: Response) => {
        const id = +req.params.id;
        const video = db.videos.find((d) => d.id === id);

        if (!video) {
            res
                .status(HttpStatus.NotFound)
                .send(
                    createErrorMessages([{ field: 'id', message: 'Video not found' }]),
                );
            return;
        }
        res.status(200).send(video);
    })

    .post('', (req: Request<{}, {}, CreateVideoInputModel>, res: Response) => {
        const errors = videoInputValidation(req.body);

        if (errors.length > 0) {
            res.status(HttpStatus.BadRequest).send(createErrorMessages(errors));
            return;
        }

        const newVideo: Video = {
            id: db.videos.length ? db.videos[db.videos.length - 1].id + 1 : 1,
            title: req.body.title,
            author: req.body.author,
            canBeDownloaded: false,
            minAgeRestriction: null,
            createdAt: new Date().toISOString(),
            publicationDate: new Date(Date.now() + 86400000).toISOString(),
            availableResolutions: req.body.availableResolutions,
        };
        db.videos.push(newVideo);
        res.status(HttpStatus.Created).send(newVideo);
    })

    .put('/:id', (req: Request, res: Response) => {
        const id = +req.params.id;  // ✅ ТОЛЬКО ЭТО ИСПРАВЛЕНО
        const index = db.videos.findIndex((v) => v.id === id);

        if (index === -1) {
            res
                .status(HttpStatus.NotFound)
                .send(
                    createErrorMessages([{ field: 'id', message: 'Video not found' }]),
                );
            return;
        }

        const errors = videoUpdateValidation(req.body);

        if (errors.length > 0) {
            res.status(HttpStatus.BadRequest).send(createErrorMessages(errors));
            return;
        }

        const video = db.videos[index];
        video.title = req.body.title;
        video.author = req.body.author;
        video.canBeDownloaded = req.body.canBeDownloaded;
        video.minAgeRestriction = req.body.minAgeRestriction;
        video.publicationDate = req.body.publicationDate;
        video.availableResolutions = req.body.availableResolutions;

        res.sendStatus(HttpStatus.NoContent);
    })

    .delete('/:id', (req: Request, res: Response) => {
        const id = +req.params.id;
        const index = db.videos.findIndex((v) => v.id === id);

        if (index === -1) {
            res
                .status(HttpStatus.NotFound)
                .send(
                    createErrorMessages([{ field: 'id', message: 'Video not found' }]),
                );
            return;
        }

        db.videos.splice(index, 1);
        res.sendStatus(HttpStatus.NoContent);
    });