const GREETING = 'Hello Izza! 💗✨';

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING,
    });
};
