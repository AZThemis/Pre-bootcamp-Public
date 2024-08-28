const Player = require('../models/Player');

// Get all players
exports.getAllPlayers = async (req, res) => {
  try {
    const players = await Player.find();
    res.json(players);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add a new player
exports.addPlayer = async (req, res) => {
  const { name, position } = req.body;
  try {
    const newPlayer = new Player({ name, position });
    const savedPlayer = await newPlayer.save();
    res.json(savedPlayer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a player by ID
exports.deletePlayer = async (req, res) => {
  try {
    const deletedPlayer = await Player.findByIdAndDelete(req.params.id);
    res.json(deletedPlayer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update player status
exports.updatePlayerStatus = async (req, res) => {
  const { game, status } = req.body;
  try {
    const updatedPlayer = await Player.findByIdAndUpdate(
      req.params.id,
      { [`status.${game}`]: status },
      { new: true }
    );
    res.json(updatedPlayer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
