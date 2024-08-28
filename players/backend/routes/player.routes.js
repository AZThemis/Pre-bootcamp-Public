const express = require('express');
const router = express.Router();
const playerController = require('../controllers/player.controller');

// Routes for CRUD operations
router.get('/', playerController.getAllPlayers);
router.post('/', playerController.addPlayer);
router.delete('/:id', playerController.deletePlayer);
router.put('/:id/status', playerController.updatePlayerStatus);

module.exports = router;
