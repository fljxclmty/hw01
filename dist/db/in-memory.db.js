"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const video_1 = require("../videos/types/video");
exports.db = {
    videos: [
        {
            id: 1,
            title: "TypeScript для начинающих",
            author: "Иван Петров",
            canBeDownloaded: true,
            minAgeRestriction: 12,
            createdAt: new Date().toISOString(),
            publicationDate: new Date(Date.now() + 86400000).toISOString(), // +1 день
            availableResolutions: [video_1.Resolutions.P720, video_1.Resolutions.P1080]
        },
        {
            id: 2,
            title: "Summer Hit 2024",
            author: "Music Channel",
            canBeDownloaded: true,
            minAgeRestriction: null,
            createdAt: new Date().toISOString(),
            publicationDate: new Date(Date.now() + 86400000).toISOString(),
            availableResolutions: [
                video_1.Resolutions.P144,
                video_1.Resolutions.P240,
                video_1.Resolutions.P360,
                video_1.Resolutions.P480,
                video_1.Resolutions.P720,
                video_1.Resolutions.P1080
            ]
        },
        {
            id: 3,
            title: "BBC: Дикая природа",
            author: "BBC Earth",
            canBeDownloaded: false,
            minAgeRestriction: 16,
            createdAt: new Date().toISOString(),
            publicationDate: new Date(Date.now() + 86400000).toISOString(),
            availableResolutions: [
                video_1.Resolutions.P720,
                video_1.Resolutions.P1080,
                video_1.Resolutions.P1440,
                video_1.Resolutions.P2160
            ]
        }
    ]
};
//# sourceMappingURL=in-memory.db.js.map