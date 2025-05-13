# 🐶 Kutya-CRUD React gyakorlófeladat

Ebben a projektben egy egyszerű kutya-nyilvántartó alkalmazást fogsz készíteni **React** segítségével. Az adatok egy szerverről jönnek (`/api/dogs`), és az alkalmazásod képes lesz:

- lekérni az összes kutyát,
- új kutyát hozzáadni egy űrlap segítségével,
- kutyát keresni azonosító (ID) alapján,
- kutyát törölni a listából.

---

## 🔧 Előkészületek

1. Nyisd meg a projektet terminálban, és futtasd a következő parancsokat a szükséges függőségek telepítéséhez:

```bash
cd backend && npm install
   cd ../frontend && npm install
```

2. Indítsd el a szervert (`npm run dev` vagy amit használtok a backendhez).
3. Indítsd el a frontendet (`npm run dev` Vite projektnél).
4. Nyisd meg a böngészőben a következő URL-t:
   http://localhost:3001/api/dogs végpontnak vissza kell adnia egy kutya listát.
5. Így néz ki egy kutya object :

```json
{
    "id": 8,
    "name": "Daisy",
    "breed": "Boxer",
    "age": 2,
    "gender": "female",
    "image": "https://images.unsplash.com/photo-1583511666445-775f1f2116f4",
    "description": "Always playful and full of energy.",
    "vaccinated": false,
    "available": false
  },
```

---

## ✅ 1. lépés – Kutyák listázása (fetch + lista)

📁 **Fájl:** `App.jsx` (vagy `App.tsx`)

- Hozz létre egy `useState`-et a kutyák (`dogs`) listájának tárolására.
- Használj `useEffect`-et, hogy lekérd a kutyákat a komponens betöltésekor a `/api/dogs` végpontról.
- Töltsd be őket egy `<ul>` elembe, minden kutyát egy `<li>`-be.

---

## ➕ 2. lépés – Új kutya hozzáadása (form + POST)

📄 **Feladat:**

- Hozz létre egy `newDog` állapotot a form adataihoz.
- Hozz létre egy űrlapot, ahol megadhatod: `name`, `breed`, `age`, `gender`, `image`, `description`, `vaccinated`, `available`.
- Ha rákattintasz a "Hozzáadás" gombra:
  - akadályozd meg az alapértelmezett űrlapküldést (`e.preventDefault()`),
  - küldd el `POST`-tal az adatokat a `/api/dogs` végpontra,
  - ha sikeres, add hozzá az új kutyát a listához (`setDogs([...dogs, newDog])`).

📝 **Tipp:** Ne felejtsd el konvertálni a `newDog.age` mezőt számmá: `parseInt(newDog.age)`.

---

## 🔍 3. lépés – Kutya keresése ID alapján

🧠 **Mit kell csinálnod?**

- Hozz létre egy `searchId` nevű állapotot (`useState`), ahová beírhatod a keresendő kutya ID-ját.
- Hozz létre egy input mezőt és egy gombot.
- A gombra kattintva:
  - futtasd le a `fetch('/api/dogs/' + searchId)` hívást,
  - ha van ilyen kutya, jelenítsd meg az adatait egy külön dobozban (`foundDog` state).

🛑 **Hiba esetén:** ne felejtsd el kezelni, ha nem létezik ilyen ID – írhatsz egy hibaüzenetet vagy csak ne jeleníts meg semmit.

---

## 🗑️ 4. lépés – Kutya törlése a listából (DELETE)

🗂️ **Feladat:**

- Minden listázott kutya mellé tegyél egy "Törlés" gombot.
- Ha megnyomod:
  - küldj egy `DELETE` kérést a `/api/dogs/:id` végpontra,
  - ha sikeres, frissítsd a `dogs` listát (szűrd ki a törölt kutyát),
  - ha a törölt kutya volt a `foundDog`, állítsd `null`-ra.

🚀 **Tipp:** `setDogs(prev => prev.filter(d => d.id !== id))`

---

## 📦 Összefoglalás

**A feladat során megtanulod:**

- hogyan használd a `useState` és `useEffect` hookokat,
- hogyan kommunikálj backend API-kkal (`fetch`, `GET`, `POST`, `DELETE`),
- hogyan kezeld a felhasználói interakciókat (`onChange`, `onSubmit`, `onClick`),
- hogyan jelenítsd meg feltételesen az adatokat (`foundDog`).

---

Ha bármiben elakadsz, kérdezz bátran! Jó gyakorlást! 🐕‍🦺🚀

---
