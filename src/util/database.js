import { openDB, deleteDB, wrap, unwrap } from 'idb';

export async function initDB() {
    const dbPromise = await openDB("GeoData", 1, {
      upgrade(db) {
        // Create a store of objects
        db.createObjectStore("geo", {
          // The 'id' property of the object will be the key.
          keyPath: "id",
          // If it isn't explicitly set, create a value by auto incrementing.
          autoIncrement: true
        });
        // Create an index on the 'county' property of the objects.
        // store.createIndex("county", "county");
      }
    });
  
    const idbGeo = {
      async get(key) {
        return (await dbPromise).get("geo", key);
      },
      async set(key, val) {
        return (await dbPromise).put("geo", val, key);
      },
      async delete(key) {
        return (await dbPromise).delete("geo", key);
      },
      async clear() {
        return (await dbPromise).clear("geo");
      },
      async keys() {
        return (await dbPromise).getAllKeys("geo");
      }
    };
  
    return { dbPromise, idbGeo };
  }