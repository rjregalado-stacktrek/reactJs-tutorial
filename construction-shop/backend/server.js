const express = require('express');
const app = express();

const PORT = 5000;

let products = [
    {
      id: 1,
      title: "Smart Compact-Fingerprint Keyless Entry Latch Lock",
      price: 520.0,
      quantity: 0,
    },
    {
      id: 2,
      title: "Smart Medium-Fingerprint and Keyless Entry Mortise Lock",
      price: 480.0,
      quantity: 0,
    },
    {
      id: 3,
      title: "Slim-Fingerprint Keyless Entry and Mortise Lock",
      price: 450.0,
      quantity: 0,
    },
    {
      id: 4,
      title: "Super Slim-Fingerprint Keyless Entry Smart Mortise Lock",
      price: 550.0,
      quantity: 0,
    },
  ];

// console.log(`id_${products[2].id}: ${products[2].id}`)
// console.log(`setup_${products[2].id}: ${products[2].setup}`)
// console.log(`punchline_${products[2].id}: ${products[2].punchline}`)

app.use(express.json()); // is a middleware used to parse JSON-encoded data in the request body.
app.use(express.urlencoded({ extended: true }));  // is a middleware used to parse URL-encoded data in the request body.

// responds to requests on root URL '/', e.g. localhost:3001/
app.get('/', (req,res) => {
    res.send('<h1>Welcome to RF1 Batch</h1>')
})

// get all the contents in database
app.get('/api/products', (req,res) => {
    res.json(products)
})

// get a single entry by id
app.get('/api/products/:id', (req,res) => {
	const id = Number(req.params.id)
    const product = products.find(product => product.id === id)
    res.json(product)
})

// delete an entry, returns status 204 with no response
app.delete('/api/products/:id', (req,res) => {
    const id  = Number(req.params.id)
    products = products.filter(product => product.id !== id)
    res.send('Deleted successfully').end();
})

// add a new entry
app.post('/api/products', (req, res) => {
    const maxId = products.length > 0
        ? Math.max(...products.map(n => n.id))
        : 0;
    const product = req.body;
    //product.id = maxId + 1; // Assign a new ID to the product

    products.push(product); // Add the product to the array

    res.json(product);
});

app.patch('/api/products/:id', (req, res) => {
    const id = Number(req.params.id);
    const updatedproduct = req.body;
    products = products.map(product => {
        if (product.id === id) {
            return { ...product, ...updatedproduct };
        }
        return product;
    });
    res.json(products.find(product => product.id === id));
});

app.put('/api/products/:id', (req, res) => {
  const id = Number(req.params.id);
  const updatedproduct = req.body;
  products = products.map((product) => {
    if (product.id === id) {
      return { ...product, ...updatedproduct };
    }
    return product;
  });
  res.json(products.find((product) => product.id === id));
});

// starts server on port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})