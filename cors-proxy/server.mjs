import express from 'express';
import fetch from 'node-fetch'; // This is now the correct way to import
import cors from 'cors';


const app = express();
// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());


// Proxy endpoint that receives data and forwards it to Make.com
app.post('/proxy', async (req, res) => {
  const formData = req.body;
  try {
    // your server code
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).send('Something went wrong');
  }
  try {
    const response = await fetch('https://hook.eu2.make.com/pbgejc2dd2hab14ycidocxout3g78rba', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      res.status(200).json({ message: 'Data forwarded to Make.com successfully!' });
    } else {
      console.error('Error: Failed to forward data to Make.com', response.statusText);
      res.status(500).json({ message: 'Failed to forward data to Make.com' });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Server error while processing the request' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Proxy server running on http://localhost:3000');
});