const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();

const PORT = 3000;

app.use(cors());
// Middleware to parse JSON requests
app.use(bodyParser.json());

// In-memory array to store products (for simplicity)
let products = [
    {
        "id": 2,
        "title": "abcd",
        "price": 1234,
        "description": "Elevate your casual wardrobe with our Classic Red Pullover Hoodie. Crafted with a soft cotton blend for ultimate comfort, this vibrant red hoodie features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs for a snug fit. The timeless design ensures easy pairing with jeans or joggers for a relaxed yet stylish look, making it a versatile addition to your everyday attire.",
        "images": [
            "https://i.imgur.com/1twoaDy.jpeg",
            "https://i.imgur.com/FDwQgLy.jpeg",
            "https://i.imgur.com/kg1ZhhH.jpeg"
        ],
        "creationAt": "2024-02-18T11:36:53.000Z",
        "updatedAt": "2024-02-18T12:27:37.000Z",
        "category": {
            "id": 1,
            "name": "Clothes",
            "image": "https://i.imgur.com/QkIa5tT.jpeg",
            "creationAt": "2024-02-18T11:36:53.000Z",
            "updatedAt": "2024-02-18T11:36:53.000Z"
        }
    },
    {
        "id": 3,
        "title": "Classic Heather Gray Hoodie",
        "price": 69,
        "description": "Stay cozy and stylish with our Classic Heather Gray Hoodie. Crafted from soft, durable fabric, it features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs. Perfect for a casual day out or a relaxing evening in, this hoodie is a versatile addition to any wardrobe.",
        "images": [
            "https://i.imgur.com/cHddUCu.jpeg",
            "https://i.imgur.com/CFOjAgK.jpeg",
            "https://i.imgur.com/wbIMMme.jpeg"
        ],
        "creationAt": "2024-02-18T11:36:53.000Z",
        "updatedAt": "2024-02-18T11:36:53.000Z",
        "category": {
            "id": 1,
            "name": "Clothes",
            "image": "https://i.imgur.com/QkIa5tT.jpeg",
            "creationAt": "2024-02-18T11:36:53.000Z",
            "updatedAt": "2024-02-18T11:36:53.000Z"
        }
    },
    {
        "id": 5,
        "title": "Classic Black Hooded Sweatshirt",
        "price": 79,
        "description": "Elevate your casual wardrobe with our Classic Black Hooded Sweatshirt. Made from high-quality, soft fabric that ensures comfort and durability, this hoodie features a spacious kangaroo pocket and an adjustable drawstring hood. Its versatile design makes it perfect for a relaxed day at home or a casual outing.",
        "images": [
            "https://i.imgur.com/cSytoSD.jpeg",
            "https://i.imgur.com/WwKucXb.jpeg",
            "https://i.imgur.com/cE2Dxh9.jpeg"
        ],
        "creationAt": "2024-02-18T11:36:53.000Z",
        "updatedAt": "2024-02-18T11:36:53.000Z",
        "category": {
            "id": 1,
            "name": "Clothes",
            "image": "https://i.imgur.com/QkIa5tT.jpeg",
            "creationAt": "2024-02-18T11:36:53.000Z",
            "updatedAt": "2024-02-18T11:36:53.000Z"
        }
    },
    {
        "id": 6,
        "title": "Classic Comfort Fit Joggers",
        "price": 25,
        "description": "Discover the perfect blend of style and comfort with our Classic Comfort Fit Joggers. These versatile black joggers feature a soft elastic waistband with an adjustable drawstring, two side pockets, and ribbed ankle cuffs for a secure fit. Made from a lightweight and durable fabric, they are ideal for both active days and relaxed lounging.",
        "images": [
            "https://i.imgur.com/ZKGofuB.jpeg",
            "https://i.imgur.com/GJi73H0.jpeg",
            "https://i.imgur.com/633Fqrz.jpeg"
        ],
        "creationAt": "2024-02-18T11:36:53.000Z",
        "updatedAt": "2024-02-18T11:36:53.000Z",
        "category": {
            "id": 1,
            "name": "Clothes",
            "image": "https://i.imgur.com/QkIa5tT.jpeg",
            "creationAt": "2024-02-18T11:36:53.000Z",
            "updatedAt": "2024-02-18T11:36:53.000Z"
        }
    },
    {
        "id": 7,
        "title": "Classic Comfort Drawstring Joggers",
        "price": 79,
        "description": "Experience the perfect blend of comfort and style with our Classic Comfort Drawstring Joggers. Designed for a relaxed fit, these joggers feature a soft, stretchable fabric, convenient side pockets, and an adjustable drawstring waist with elegant gold-tipped detailing. Ideal for lounging or running errands, these pants will quickly become your go-to for effortless, casual wear.",
        "images": [
            "https://i.imgur.com/mp3rUty.jpeg",
            "https://i.imgur.com/JQRGIc2.jpeg"
        ],
        "creationAt": "2024-02-18T11:36:53.000Z",
        "updatedAt": "2024-02-18T11:36:53.000Z",
        "category": {
            "id": 1,
            "name": "Clothes",
            "image": "https://i.imgur.com/QkIa5tT.jpeg",
            "creationAt": "2024-02-18T11:36:53.000Z",
            "updatedAt": "2024-02-18T11:36:53.000Z"
        }
    },
    {
        "id": 8,
        "title": "Classic Red Jogger Sweatpants",
        "price": 98,
        "description": "Experience ultimate comfort with our red jogger sweatpants, perfect for both workout sessions and lounging around the house. Made with soft, durable fabric, these joggers feature a snug waistband, adjustable drawstring, and practical side pockets for functionality. Their tapered design and elastic cuffs offer a modern fit that keeps you looking stylish on the go.",
        "images": [
            "https://i.imgur.com/9LFjwpI.jpeg",
            "https://i.imgur.com/vzrTgUR.jpeg",
            "https://i.imgur.com/p5NdI6n.jpeg"
        ],
        "creationAt": "2024-02-18T11:36:53.000Z",
        "updatedAt": "2024-02-18T11:36:53.000Z",
        "category": {
            "id": 1,
            "name": "Clothes",
            "image": "https://i.imgur.com/QkIa5tT.jpeg",
            "creationAt": "2024-02-18T11:36:53.000Z",
            "updatedAt": "2024-02-18T11:36:53.000Z"
        }
    },
    {
        "id": 9,
        "title": "Classic Navy Blue Baseball Cap",
        "price": 61,
        "description": "Step out in style with this sleek navy blue baseball cap. Crafted from durable material, it features a smooth, structured design and an adjustable strap for the perfect fit. Protect your eyes from the sun and complement your casual looks with this versatile and timeless accessory.",
        "images": [
            "https://i.imgur.com/R3iobJA.jpeg",
            "https://i.imgur.com/Wv2KTsf.jpeg",
            "https://i.imgur.com/76HAxcA.jpeg"
        ],
        "creationAt": "2024-02-18T11:36:53.000Z",
        "updatedAt": "2024-02-18T11:36:53.000Z",
        "category": {
            "id": 1,
            "name": "Clothes",
            "image": "https://i.imgur.com/QkIa5tT.jpeg",
            "creationAt": "2024-02-18T11:36:53.000Z",
            "updatedAt": "2024-02-18T11:36:53.000Z"
        }
    },
    {
        "id": 10,
        "title": "Classic Blue Baseball Cap",
        "price": 86,
        "description": "Top off your casual look with our Classic Blue Baseball Cap, made from high-quality materials for lasting comfort. Featuring a timeless six-panel design with a pre-curved visor, this adjustable cap offers both style and practicality for everyday wear.",
        "images": [
            "https://i.imgur.com/wXuQ7bm.jpeg",
            "https://i.imgur.com/BZrIEmb.jpeg",
            "https://i.imgur.com/KcT6BE0.jpeg"
        ],
        "creationAt": "2024-02-18T11:36:53.000Z",
        "updatedAt": "2024-02-18T11:36:53.000Z",
        "category": {
            "id": 1,
            "name": "Clothes",
            "image": "https://i.imgur.com/QkIa5tT.jpeg",
            "creationAt": "2024-02-18T11:36:53.000Z",
            "updatedAt": "2024-02-18T11:36:53.000Z"
        }
    },
    {
        "id": 11,
        "title": "Classic Red Baseball Cap",
        "price": 35,
        "description": "Elevate your casual wardrobe with this timeless red baseball cap. Crafted from durable fabric, it features a comfortable fit with an adjustable strap at the back, ensuring one size fits all. Perfect for sunny days or adding a sporty touch to your outfit.",
        "images": [
            "https://i.imgur.com/cBuLvBi.jpeg",
            "https://i.imgur.com/N1GkCIR.jpeg",
            "https://i.imgur.com/kKc9A5p.jpeg"
        ],
        "creationAt": "2024-02-18T11:36:53.000Z",
        "updatedAt": "2024-02-18T11:36:53.000Z",
        "category": {
            "id": 1,
            "name": "Clothes",
            "image": "https://i.imgur.com/QkIa5tT.jpeg",
            "creationAt": "2024-02-18T11:36:53.000Z",
            "updatedAt": "2024-02-18T11:36:53.000Z"
        }
    }
];

// In-memory array to store user information (for simplicity)
let users = [
    { id: 1, username: 'admin', password: 'admin123' },
    { id: 2, username: 'user', password: '12345678' },
];

const SECRET_KEY = 'your_secret_key';

// Token validation middleware
const validateToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized - Token missing' });
    }
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded; // Attach decoded user information to the request
        next(); // Proceed to the next middleware or route
    } catch (error) {
        return res.status(401).json({ error: 'Unauthorized - Invalid token' });
    }
};

// Read (POST) to authenticate user and generate a token (login)
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Check if user exists and password is correct (for simplicity)
    const user = users.find((u) => u.username === username && u.password === password);
    if (!user) {
        return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user.id, username: user.username }, SECRET_KEY);

    res.json({ token });
});

// CRUD operations

// Read (GET) all products
app.get('/products', (req, res) => {
    res.json(products);
});

// Read (GET) a specific product by ID
app.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    console.log(productId)
    const product = products.find((p) => p.id === productId);

    if (!product) {
        return res.status(404).json({ error: 'Product not found' });
    }

    res.json(product);
});

// Create (POST) a new product
app.post('/products', (req, res) => {
    const id = Number(products[products.length - 1].id) + 1;

    console.log(products[products.length - 1].id);
    console.log('ID CREATED')
    console.log(req.body);

    const newProduct = req.body;
    newProduct.id = id;

    newProduct['images'] = [
        "https://i.imgur.com/1twoaDy.jpeg"
    ]
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// Update (PUT) an existing product by ID
app.put('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedProduct = req.body;

    products = products.map((product) =>
        product.id === id ? updatedProduct : product
    );

    res.json(updatedProduct);
});

// Delete (DELETE) a product by ID
app.delete('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);

    products = products.filter((product) => product.id !== productId);

    res.json({ message: 'Product deleted successfully' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});