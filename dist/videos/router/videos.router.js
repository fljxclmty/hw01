"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videosRouter = void 0;
const express_1 = require("express");
const in_memory_db_1 = require("../../db/in-memory.db");
const http_statuses_1 = require("../../core/types/http-statuses");
const error_utils_1 = require("../../core/utils/error.utils");
const videoInputValidation_1 = require("../validation/videoInputValidation");
exports.videosRouter = (0, express_1.Router)();
exports.videosRouter
    .get('', (req, res) => {
    res.status(200).send(in_memory_db_1.db.videos);
})
    .get('/:id', (req, res) => {
    const id = +req.params.id;
    const video = in_memory_db_1.db.videos.find((d) => d.id === id);
    if (!video) {
        res
            .status(http_statuses_1.HttpStatus.NotFound)
            .send((0, error_utils_1.createErrorMessages)([{ field: 'id', message: 'Video not found' }]));
        return;
    }
    res.status(200).send(video);
})
    .post('', (req, res) => {
    const errors = (0, videoInputValidation_1.videoInputValidation)(req.body);
    if (errors.length > 0) {
        res.status(http_statuses_1.HttpStatus.BadRequest).send((0, error_utils_1.createErrorMessages)(errors));
        return;
    }
    const newVideo = {
        id: in_memory_db_1.db.videos.length ? in_memory_db_1.db.videos[in_memory_db_1.db.videos.length - 1].id + 1 : 1,
        title: req.body.title,
        author: req.body.author,
        canBeDownloaded: false,
        minAgeRestriction: null,
        createdAt: new Date().toISOString(),
        publicationDate: new Date(Date.now() + 86400000).toISOString(),
        availableResolutions: req.body.availableResolutions,
    };
    in_memory_db_1.db.videos.push(newVideo);
    res.status(http_statuses_1.HttpStatus.Created).send(newVideo);
})
    .put('/:id', (req, res) => {
    const id = +req.params.id; // ✅ ТОЛЬКО ЭТО ИСПРАВЛЕНО
    const index = in_memory_db_1.db.videos.findIndex((v) => v.id === id);
    if (index === -1) {
        res
            .status(http_statuses_1.HttpStatus.NotFound)
            .send((0, error_utils_1.createErrorMessages)([{ field: 'id', message: 'Video not found' }]));
        return;
    }
    const errors = (0, videoInputValidation_1.videoUpdateValidation)(req.body);
    if (errors.length > 0) {
        res.status(http_statuses_1.HttpStatus.BadRequest).send((0, error_utils_1.createErrorMessages)(errors));
        return;
    }
    const video = in_memory_db_1.db.videos[index];
    video.title = req.body.title;
    video.author = req.body.author;
    video.canBeDownloaded = req.body.canBeDownloaded;
    video.minAgeRestriction = req.body.minAgeRestriction;
    video.publicationDate = req.body.publicationDate;
    video.availableResolutions = req.body.availableResolutions;
    res.sendStatus(http_statuses_1.HttpStatus.NoContent);
})
    .delete('/:id', (req, res) => {
    const id = +req.params.id;
    const index = in_memory_db_1.db.videos.findIndex((v) => v.id === id);
    if (index === -1) {
        res
            .status(http_statuses_1.HttpStatus.NotFound)
            .send((0, error_utils_1.createErrorMessages)([{ field: 'id', message: 'Video not found' }]));
        return;
    }
    in_memory_db_1.db.videos.splice(index, 1);
    res.sendStatus(http_statuses_1.HttpStatus.NoContent);
});
//# sourceMappingURL=videos.router.js.map