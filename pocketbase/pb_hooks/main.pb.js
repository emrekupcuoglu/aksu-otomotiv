// Helper function to handle Turkish slugification
function slugify(text) {
  const trMap = {
    ç: "c",
    Ç: "c",
    ğ: "g",
    Ğ: "g",
    ş: "s",
    Ş: "s",
    ü: "u",
    Ü: "u",
    ö: "o",
    Ö: "o",
    ı: "i",
    İ: "i",
    I: "i", // Handles the dotless uppercase I
  };

  console.log("out for");
  for (let key in trMap) {
    console.log("in for");
    text = text.replace(new RegExp(key, "g"), trMap[key]);
  }

  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

// 1. Hook for when a record is created
onRecordCreate((e) => {
  function slugify(text) {
    const trMap = {
      ç: "c",
      Ç: "c",
      ğ: "g",
      Ğ: "g",
      ş: "s",
      Ş: "s",
      ü: "u",
      Ü: "u",
      ö: "o",
      Ö: "o",
      ı: "i",
      İ: "i",
      I: "i", // Handles the dotless uppercase I
    };

    console.log("out for");
    for (let key in trMap) {
      console.log("in for");
      text = text.replace(new RegExp(key, "g"), trMap[key]);
    }

    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-") // Replace spaces with -
      .replace(/[^\w\-]+/g, "") // Remove all non-word chars
      .replace(/\-\-+/g, "-"); // Replace multiple - with single -
  }

  const name = e.record.get("isim");

  console.log("name", name);
  if (name) {
    e.record.set("slug", slugify(name));
  }
  e.next();
}, "kategoriler"); // Change "kategoriler" to your collection name

// 2. Hook for when a record is updated (optional but recommended)
onRecordUpdate((e) => {
  function slugify(text) {
    const trMap = {
      ç: "c",
      Ç: "c",
      ğ: "g",
      Ğ: "g",
      ş: "s",
      Ş: "s",
      ü: "u",
      Ü: "u",
      ö: "o",
      Ö: "o",
      ı: "i",
      İ: "i",
      I: "i", // Handles the dotless uppercase I
    };

    console.log("out for");
    for (let key in trMap) {
      console.log("in for");
      text = text.replace(new RegExp(key, "g"), trMap[key]);
    }

    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-") // Replace spaces with -
      .replace(/[^\w\-]+/g, "") // Remove all non-word chars
      .replace(/\-\-+/g, "-"); // Replace multiple - with single -
  }

  const name = e.record.get("isim");
  if (name) {
    e.record.set("slug", slugify(name));
  }
  e.next();
}, "kategoriler");
