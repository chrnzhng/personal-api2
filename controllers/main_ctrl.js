var user = require('../server/user');

module.exports = {
    getName: (req, res, next) => {
        res.status(200).send({
            name: user.name
        });
    },

    getLocation: (req, res, next) => {
        res.status(200).send({
            location: user.location
        });
    },

    getOccupations: (req, res, next) => {
        res.status(200).send({
            occupations: user.occupations
        })
    },

    getLatestOccupation: (req, res, next) => {
        res.status(200).send({
            latestOccupation: user.occupations[user.occupations.length - 1]
        })
    },

    getHobbies: (req, res, next) => {
        res.status(200).send({
            hobbies: user.hobbies
        })
    },

    getHobbiesType: (req, res, next) => {
        let hobbiesFilter = user.hobbies.filter((e) => {
            if (e.type === req.params.type) {
                return e.type
            }
        })
        res.status(200).send(hobbiesFilter);
    }


}