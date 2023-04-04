const { findAssets } = require("../models/AssetsManager.js")


const browseAssets = async (req, res) => {
  try {
    const assets = await findAssets();

    res.send(assets);
  } catch (e) {console.log(e,"🤡");
    res.status(500).json({error: "Une erreur est survenue "});
  }
};


module.exports = {
  
  browseAssets 
};