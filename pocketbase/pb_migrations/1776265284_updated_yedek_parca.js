/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2640464045")

  // add field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "select3357413904",
    "maxSelect": 1,
    "name": "kategori",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "filitre",
      "motor",
      "genel",
      "şanzıman",
      "vida"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2640464045")

  // remove field
  collection.fields.removeById("select3357413904")

  return app.save(collection)
})
