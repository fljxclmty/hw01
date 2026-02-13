import { Resolutions, Video } from '../videos/types/video';


export const db = {
    videos: <Video[]>[
        {
            id: 1,
            title: "TypeScript для начинающих",
            author: "Иван Петров",
            canBeDownloaded: true,
            minAgeRestriction: 12,
            createdAt: new Date().toISOString(),
            publicationDate: new Date(Date.now() + 86400000).toISOString(), // +1 день
            availableResolutions: [Resolutions.P720, Resolutions.P1080]
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
                Resolutions.P144,
                Resolutions.P240,
                Resolutions.P360,
                Resolutions.P480,
                Resolutions.P720,
                Resolutions.P1080
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
                Resolutions.P720,
                Resolutions.P1080,
                Resolutions.P1440,
                Resolutions.P2160
            ]
        }
    ]
};