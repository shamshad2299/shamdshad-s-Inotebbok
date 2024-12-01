const notes = require("../../Models/Notes");

const updateNote = async(req , res) =>{

  try {
    const user = req?.user?.id;
    const note = await notes.find({user})
    
  } catch (error) {

    res.json({
      message : error.message || error,
      success : false, 
      error : true,
    })
    
  }

}

module.exports = updateNote;