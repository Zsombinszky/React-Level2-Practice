import express from "express";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3001;

// ⬇️ JSON body parsing (NÉLKÜLE req.body üres lenne!)
app.use(express.json());

// ⬇️ __dirname shim ES module-okhoz
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ⬇️ JSON fájl elérési útvonal egyszerűsítve
const dogsFilePath = path.join(__dirname, "dogs.json");

// GET /api/dogs - összes kutya lekérése
app.get("/api/dogs", async (req, res) => {
  try {
    const data = await fs.readFile(dogsFilePath, "utf-8");
    const dogs = JSON.parse(data);
    res.json(dogs);
  } catch (error) {
    console.error("Error reading file:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// POST /api/dogs - új kutya hozzáadása
app.post("/api/dogs", async (req, res) => {
  try {
    const data = await fs.readFile(dogsFilePath, "utf-8");
    const dogs = JSON.parse(data);

    const newDog = {
      id: dogs.length ? dogs[dogs.length - 1].id + 1 : 1,
      ...req.body,
    };

    dogs.push(newDog);

    await fs.writeFile(dogsFilePath, JSON.stringify(dogs, null, 2));
    res.status(201).json(newDog);
  } catch (error) {
    console.error("Error creating dog:", error);
    res.status(500).json({ error: "Could not create dog." });
  }
});

// GET /api/dogs/:id - egy kutya lekérése ID alapján
app.get("/api/dogs/:id", async (req, res) => {
  try {
    const data = await fs.readFile(dogsFilePath, "utf-8");
    const dogs = JSON.parse(data);

    const dog = dogs.find((d) => d.id === parseInt(req.params.id));

    if (!dog) {
      return res.status(404).json({ error: "Dog not found." });
    }

    res.json(dog);
  } catch (error) {
    console.error("Error reading dog:", error);
    res.status(500).json({ error: "Could not get dog." });
  }
});

// PUT /api/dogs/:id - kutya módosítása
app.put("/api/dogs/:id", async (req, res) => {
  try {
    const data = await fs.readFile(dogsFilePath, "utf-8");
    const dogs = JSON.parse(data);

    const index = dogs.findIndex((d) => d.id === parseInt(req.params.id));
    if (index === -1) {
      return res.status(404).json({ error: "Dog not found." });
    }

    const updatedDog = { id: dogs[index].id, ...req.body };
    dogs[index] = updatedDog;

    await fs.writeFile(dogsFilePath, JSON.stringify(dogs, null, 2));
    res.json(updatedDog);
  } catch (error) {
    console.error("Error updating dog:", error);
    res.status(500).json({ error: "Could not update dog." });
  }
});

// DELETE /api/dogs/:id - kutya törlése
app.delete("/api/dogs/:id", async (req, res) => {
  try {
    const data = await fs.readFile(dogsFilePath, "utf-8");
    const dogs = JSON.parse(data);

    const index = dogs.findIndex((d) => d.id === parseInt(req.params.id));
    if (index === -1) {
      return res.status(404).json({ error: "Dog not found." });
    }

    dogs.splice(index, 1);

    await fs.writeFile(dogsFilePath, JSON.stringify(dogs, null, 2));
    res.json({ message: "Dog deleted successfully." });
  } catch (error) {
    console.error("Error deleting dog:", error);
    res.status(500).json({ error: "Could not delete dog." });
  }
});

// Szerver indítása
app.listen(PORT, () => {
  console.log(`✅ Server listening at http://localhost:${PORT}`);
});
