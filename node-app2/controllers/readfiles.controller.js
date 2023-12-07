exports.readfile = async function(file) {
  try {
    const data = await fs.readFile(`../data/input/${file}`, { encoding: 'utf8' });
      console.log(data);
  } catch (err) {
      console.log(err);
  }
}