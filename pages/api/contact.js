module.exports = async (req, res) => {
    try {
      // Extract data from the request body
      const { name, email, message } = req.body;
      console.log(name, email, message);
  
      // Perform backend operations (e.g., store data in a database)
      // ...
  
      // Send a response back to the frontend
      res.status(200).json({ success: true, message: 'Data received and processed successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'An error occurred' });
    }
  };