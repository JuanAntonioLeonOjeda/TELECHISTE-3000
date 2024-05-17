const ContactInfo = require('../models/contact.model')

const getAllContactInfo = async (req, res) => {
  try {
    const info = await ContactInfo.findAll()

        res.status(200).json({
          message: "Contact Info fetched",
          result: info,
        });
  } catch (error) {
        console.log(error);
        res.status(500).json({
          message: "Error getting all contact info",
          result: error,
        });
  }
}

const createContactInfo = async (req, res) => {
  try {
    const contact = await ContactInfo.create(req.body)

    res.status(200).json({
      message: "Contact Info created",
      result: contact,
    })
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error creating contact info",
      result: error,
    });
  }
}

module.exports = {
  getAllContactInfo,
  createContactInfo
}