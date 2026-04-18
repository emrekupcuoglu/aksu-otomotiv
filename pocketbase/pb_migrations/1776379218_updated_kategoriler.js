/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1981917656")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_msq2JadjpP` ON `kategoriler` (`isim`)"
    ]
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1981917656")

  // update collection data
  unmarshal({
    "indexes": []
  }, collection)

  return app.save(collection)
})
