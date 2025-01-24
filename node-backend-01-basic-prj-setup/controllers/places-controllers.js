const HttpError = require("../models/http-error");
const getPlaceById = (req, res, next) => {
    const placeId = req.params.pid; // { pid: 'p1' }
    const place = DUMMY_PLACES.find(p => p.id === placeId);
    if (!place) {
        throw new HttpError('Could not find a place with the provided id', 404);
    }
    res.json({place}); // => { place } => { place: place }
}

const getPlaceByUserId = (req, res, next) => {
    const userId = req.params.uid; // { pid: 'p1' }
    const place = DUMMY_PLACES.find(p => p.creator === userId);
    if (!place) {
        throw new HttpError('Could not find a place with the provided user Id ', 404);
    }
    res.json({place}); // => { place } => { place: place }
}


exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId;