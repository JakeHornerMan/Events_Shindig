const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Handling GET for /performers"
    });
    console.log("Handling GET for /performers");
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: "Handling POST for /performers"
    });
    console.log("Handling POST for /performers");
});

router.get('/:performerId', (req, res, next) => {
    const id = req.params.performerId;
    res.status(200).json({
        message: "Handling GET for /performers/performerId, id is " + id
    });
    console.log("Handling GET for /performers/performerId, id is " + id);
});

router.patch('/:performerId', (req, res, next) => {
    const id = req.params.performerId;
    res.status(200).json({
        message: "Handling PATCH for /performers/performerId, id is " + id
    });
    console.log("Handling PATCH for /performers/performerId, id is " + id);
});

router.delete('/:performerId', (req, res, next) => {
    const performerId = req.params.performerId;
    res.status(200).json({
        message: "Handling PATCH for /performers/performerId, id is " + performerId
    });
    console.log("Handling PATCH for /performers/performerId, id is " + performerId);
});

router.get('/performanceType/:performanceType', (req, res, next) => {
    const performanceType = req.params.performanceType;
    res.status(200).json({
        message: "Handling GET for /performers/performanceType, id is " + performanceType
    });
    console.log("Handling GET for /performers/performanceType, id is " + performanceType);
});

router.get('/performanceType/:eventType', (req, res, next) => {
    const eventType = req.params.eventType;
    res.status(200).json({
        message: "Handling GET for /performers/eventType, id is " + eventType
    });
    console.log("Handling GET for /performers/eventType, id is " + eventType);
});

module.exports = router;