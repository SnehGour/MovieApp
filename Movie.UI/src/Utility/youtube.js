export const youtubeUrlEnabler = (url) => {
    if (url.includes("watch?v=")) {
        // Replace "watch?v=" with "embed/"
        return url.replace("watch?v=", "embed/");
    } else {
        // URL format is not recognized
        return null;
    }
}