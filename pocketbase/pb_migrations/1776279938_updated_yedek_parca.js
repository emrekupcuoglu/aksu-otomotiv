/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2640464045")

  // update field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "number31757698",
    "max": null,
    "min": null,
    "name": "oem",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2640464045")

  // update field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "number31757698",
    "max": null,
    "min": null,
    "name": "OEM",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
})
