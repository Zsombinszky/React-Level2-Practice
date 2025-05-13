import { useEffect, useState } from "react";

function App() {
  // useState hookok a változók tárolására és a komponens újrarenderelésére változás esetén
  // dogs: az összes kutya listáját tárolja
  // newDog: az új kutya adatait tárolja a form kitöltése közben
  // searchId: a keresendő kutya ID-ját tárolja
  // foundDog: az ID alapján megtalált kutyát tárolja

  // 🔄 Komponens mountolásakor (először megjelenéskor) lefutó useEffect
  // Fetch request a /api/dogs végpontra az összes kutya lekéréséhez
  // A választ elmenti a dogs állapotba
  // Hibakezelés: konzolra írja a hibát ha nem sikerül a fetch
  useEffect(() => {}, []);

  // ➕ Új kutya hozzáadása
  // 1. Megakadályozza az alapértelmezett form küldést (oldal újratöltés)
  // 2. POST request a /api/dogs végpontra
  //    - method: POST
  //    - headers: JSON adatot küldünk, ezt jelezzük
  //    - body: newDog objektum stringgé alakítva (az age szám típusú lesz)
  // 3. A válaszból kapott új kutyát hozzáadjuk a dogs listához
  // 4. Visszaállítjuk az űrlapot alapértelmezett értékekre
  const handleAddDog = async (e) => {
    e.preventDefault();
  };

  // 🔍 Kutya keresése ID alapján
  // 1. Ha nincs searchId, kilép a függvény (nincs mit keresni)
  // 2. GET request a /api/dogs/${searchId} végpontra
  // 3. Ha a válasz nem ok (pl. 404), hibát dob
  // 4. A választ elmenti a foundDog állapotba
  // 5. Hibakezelés: foundDog null-ra állítása (nem találtunk kutyát)
  const handleGetDog = async () => {};

  // 🗑️ Kutya törlése ID alapján - ÚJ FUNKCIÓ
  // 1. Küldj egy DELETE kérést a /api/dogs/:id végpontra
  // 2. Ha sikeres, frissítsd a kutyák listáját úgy, hogy kiszűröd a törölt kutyát
  // 3. Töröld a foundDog értékét is, ha épp az a kutya van megjelenítve
  // 4. A kutyák listájában (JSX-ben) hozz létre egy gombot minden kutyához,
  //    amelynek az onClick eseménye meghívja például ezt: onClick={() => handleDeleteDog(dog.id)}
  const handleDeleteDog = async (id) => {};

  // JSX - A komponens megjelenítése
  return (
    <div className="p-8 font-sans">
      <h1>Dogs</h1>
      {/* Kutyalista megjelenítése */}
      {/* A dogs állapotban lévő tömbön végigmegyünk map-pel */}
      {/* Minden kutyához egy li elem jön létre */}
      {/* key fontos a React számára a hatékony rendereléshez (mindig egyedi legyen) */}
      <ul></ul>

      <h2>Add New Dog</h2>
      {/* Új kutya hozzáadására szolgáló űrlap */}
      {/* onSubmit eseménykezelő: handleAddDog függvény hívódik meg */}
      {/* Minden mezőhöz tartozik egy input elem */}
      {/* A fontos mezők (név, fajta, életkor) kötelezőek (required) */}
      {/* Az inputokon kétirányú adatkötés van: */}
      {/* - value: a newDog megfelelő mezője */}
      {/* - onChange: a newDog állapot frissítése az új értékkel */}
      {/* – Az available és vaccinated mezők megadásához használj checkboxot, mivel ezek logikai (true/false) értéket képviselnek. A beállításukhoz használd az e.target.checked értéket. */}

      <h2>Find Dog By ID</h2>
      {/* Kutya keresése ID alapján */}
      {/* Input mező szám típusú érték fogadására */}
      {/* Kétirányú adatkötés: */}
      {/* - value: a searchId állapot */}
      {/* - onChange: a searchId frissítése az új értékkel */}

      {/* Keresés gomb */}
      {/* onClick eseménykezelő: meghívja a handleGetDog függvényt */}

      {/* Ha találtunk kutyát (foundDog nem null), megjelenítjük az adatait */}
    </div>
  );
}

export default App;
