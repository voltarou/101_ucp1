require('dotenv').config(); // Load .env

const express = require('express');
const app = express();
const db = require('./models');
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/kandang', async (req, res) => {
    const data = req.body;
    try {
    const newKandang = await db.kandang.create(data);
    res.status(201).json(newKandang);
  }
    catch (error) {
    res.status(500).json({ error: 'Failed to create kandang' });
  }
});


app.get('/kandang/:id', async (req, res) => {
  const kandangid = req.params.id;
    try {
    const kandang = await db.kandang.findByPk(kandangid);
    if (!kandang) {
      return res.status(404).json({ error: 'Kandang not found' });
    }
    res.status(200).json(kandang);
  }
    catch (error) {
    res.status(500).json({ error: 'Failed to retrieve kandang' });
  }
});

app.put('/kandang/:id', async (req, res) => {
    const kandangid = req.params.id;
    const data = req.body;
    try {
    const kandang = await db.kandang.findByPk(kandangid);
    if (!kandang) {
      return res.status(404).json({ error: 'Kandang not found' });
    }
    await kandang.update(data);
    res.status(200).json(kandang);
  }
    catch (error) {
    res.status(500).json({ error: 'Failed to update kandang' });
  }
});

app.delete('/kandang/:id', async (req, res) => {
    const kandangid = req.params.id;
    try {
    const kandang = await db.kandang.findByPk(kandangid);
    if (!kandang) {
      return res.status(404).json({ error: 'Kandang not found' });
    }
    await kandang.destroy();
    res.status(204).send();
  }
    catch (error) {
    res.status(500).json({ error: 'Failed to delete kandang' });
  }
});

db.sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Database connection error:', err);
  });