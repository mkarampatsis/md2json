const mongoose = require('mongoose');

async function saveDoc(item) {
  try {
    const result = await item.save();
    return result
  } catch (error) {
     console.log(error);
     throw(error);
  }
}

module.exports = { saveDoc }