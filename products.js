// Product data and functionality

// Product database
const products = {
    amplifiers: [
        {
            id: 1,
            name: "Thesis TH Uno",
            series: "thesis",
            price: 2499.00,
            image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "Ultra-high performance mono amplifier with advanced thermal management and pristine sound quality.",
            specifications: {
                "Power Output": "1 x 1000W RMS @ 2Ω",
                "Frequency Response": "10Hz - 30kHz",
                "THD": "< 0.05%",
                "Signal-to-Noise Ratio": "> 100dB",
                "Dimensions": "320 x 240 x 65mm"
            }
        },
        {
            id: 2,
            name: "Thesis TH Due",
            series: "thesis",
            price: 1899.00,
            image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "High-performance 2-channel amplifier featuring Class D efficiency with audiophile sound quality.",
            specifications: {
                "Power Output": "2 x 500W RMS @ 2Ω",
                "Frequency Response": "10Hz - 30kHz",
                "THD": "< 0.05%",
                "Signal-to-Noise Ratio": "> 100dB",
                "Dimensions": "320 x 240 x 65mm"
            }
        },
        {
            id: 3,
            name: "Prima AP 4.9 bit",
            series: "prima",
            price: 899.00,
            image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "4-channel amplifier with integrated DSP and advanced tuning capabilities.",
            specifications: {
                "Power Output": "4 x 90W RMS @ 4Ω",
                "Frequency Response": "20Hz - 20kHz",
                "THD": "< 0.1%",
                "Signal-to-Noise Ratio": "> 95dB",
                "Dimensions": "280 x 200 x 55mm"
            }
        },
        {
            id: 4,
            name: "Prima AP 8.9 bit",
            series: "prima",
            price: 1299.00,
            image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "8-channel amplifier with built-in DSP for complete system control.",
            specifications: {
                "Power Output": "8 x 90W RMS @ 4Ω",
                "Frequency Response": "20Hz - 20kHz",
                "THD": "< 0.1%",
                "Signal-to-Noise Ratio": "> 95dB",
                "Dimensions": "320 x 240 x 55mm"
            }
        },
        {
            id: 5,
            name: "Forza AF M2",
            series: "forza",
            price: 599.00,
            image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "Compact mono amplifier perfect for subwoofer applications.",
            specifications: {
                "Power Output": "1 x 600W RMS @ 2Ω",
                "Frequency Response": "20Hz - 250Hz",
                "THD": "< 0.1%",
                "Signal-to-Noise Ratio": "> 90dB",
                "Dimensions": "240 x 180 x 50mm"
            }
        },
        {
            id: 6,
            name: "Forza AF M4",
            series: "forza",
            price: 799.00,
            image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "4-channel amplifier offering excellent value and performance.",
            specifications: {
                "Power Output": "4 x 150W RMS @ 4Ω",
                "Frequency Response": "20Hz - 20kHz",
                "THD": "< 0.1%",
                "Signal-to-Noise Ratio": "> 90dB",
                "Dimensions": "280 x 200 x 50mm"
            }
        }
    ],
    speakers: [
        {
            id: 7,
            name: "Prima AP 6.5",
            category: "component",
            price: 899.00,
            image: "https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "Premium 6.5-inch component speakers with silk dome tweeters.",
            specifications: {
                "Size": "6.5 inches (165mm)",
                "Power Handling": "120W RMS",
                "Frequency Response": "45Hz - 22kHz",
                "Sensitivity": "92dB",
                "Impedance": "4Ω"
            }
        },
        {
            id: 8,
            name: "Prima AP 5.25",
            category: "component",
            price: 699.00,
            image: "https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "5.25-inch component speakers with optimized crossover design.",
            specifications: {
                "Size": "5.25 inches (130mm)",
                "Power Handling": "100W RMS",
                "Frequency Response": "55Hz - 22kHz",
                "Sensitivity": "90dB",
                "Impedance": "4Ω"
            }
        },
        {
            id: 9,
            name: "Prima APX 6.5",
            category: "coaxial",
            price: 399.00,
            image: "https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "6.5-inch coaxial speakers with integrated tweeter.",
            specifications: {
                "Size": "6.5 inches (165mm)",
                "Power Handling": "80W RMS",
                "Frequency Response": "50Hz - 20kHz",
                "Sensitivity": "90dB",
                "Impedance": "4Ω"
            }
        },
        {
            id: 10,
            name: "Prima APX 5.25",
            category: "coaxial",
            price: 299.00,
            image: "https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "5.25-inch coaxial speakers for easy installation.",
            specifications: {
                "Size": "5.25 inches (130mm)",
                "Power Handling": "60W RMS",
                "Frequency Response": "60Hz - 20kHz",
                "Sensitivity": "88dB",
                "Impedance": "4Ω"
            }
        },
        {
            id: 11,
            name: "Prima AP 1",
            category: "tweeters",
            price: 199.00,
            image: "https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "High-quality silk dome tweeter for superior high-frequency reproduction.",
            specifications: {
                "Size": "1 inch (25mm)",
                "Power Handling": "50W RMS",
                "Frequency Response": "2kHz - 25kHz",
                "Sensitivity": "92dB",
                "Impedance": "4Ω"
            }
        },
        {
            id: 12,
            name: "Prima AP 0.75",
            category: "tweeters",
            price: 149.00,
            image: "https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "Compact tweeter perfect for tight installation spaces.",
            specifications: {
                "Size": "0.75 inch (19mm)",
                "Power Handling": "40W RMS",
                "Frequency Response": "2.5kHz - 23kHz",
                "Sensitivity": "90dB",
                "Impedance": "4Ω"
            }
        }
    ],
    processors: [
        {
            id: 13,
            name: "Bit Ten D",
            price: 1299.00,
            image: "https://images.pexels.com/photos/1644883/pexels-photo-1644883.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "Advanced digital signal processor with comprehensive tuning capabilities and OEM integration.",
            specifications: {
                "Channels": "8 Input / 8 Output",
                "Resolution": "24-bit / 96kHz",
                "Delay": "0-20ms per channel",
                "EQ Bands": "31-band per channel",
                "Crossover": "Full range, High-pass, Low-pass, Band-pass"
            }
        },
        {
            id: 14,
            name: "Bit Nine",
            price: 999.00,
            image: "https://images.pexels.com/photos/1644883/pexels-photo-1644883.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "9-channel DSP with advanced sound processing algorithms.",
            specifications: {
                "Channels": "6 Input / 9 Output",
                "Resolution": "24-bit / 48kHz",
                "Delay": "0-15ms per channel",
                "EQ Bands": "15-band per channel",
                "Crossover": "Full range, High-pass, Low-pass"
            }
        },
        {
            id: 15,
            name: "Bit Play HD",
            price: 799.00,
            image: "https://images.pexels.com/photos/1644883/pexels-photo-1644883.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "Digital media player with integrated DSP and high-resolution audio support.",
            specifications: {
                "Channels": "2 Input / 6 Output",
                "Resolution": "24-bit / 192kHz",
                "Formats": "FLAC, WAV, MP3, AAC",
                "Storage": "USB, SD Card",
                "Connectivity": "Bluetooth, Wi-Fi"
            }
        },
        {
            id: 16,
            name: "Bit DMI",
            price: 599.00,
            image: "https://images.pexels.com/photos/1644883/pexels-photo-1644883.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "Digital media interface for seamless OEM integration.",
            specifications: {
                "Channels": "2 Input / 2 Output",
                "Resolution": "24-bit / 48kHz",
                "Compatibility": "Most OEM systems",
                "Features": "Steering wheel control retention",
                "Installation": "Plug and play"
            }
        }
    ],
    subwoofers: [
        {
            id: 17,
            name: "Prima APBX 12 AS",
            price: 1199.00,
            image: "https://images.pexels.com/photos/1644883/pexels-photo-1644883.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "12-inch active subwoofer with built-in amplifier and advanced bass management.",
            specifications: {
                "Size": "12 inches (300mm)",
                "Power": "500W RMS",
                "Frequency Response": "20Hz - 200Hz",
                "Enclosure": "Sealed",
                "Dimensions": "350 x 350 x 400mm"
            }
        },
        {
            id: 18,
            name: "Prima APBX 10 AS",
            price: 899.00,
            image: "https://images.pexels.com/photos/1644883/pexels-photo-1644883.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "10-inch active subwoofer ideal for smaller vehicles.",
            specifications: {
                "Size": "10 inches (250mm)",
                "Power": "350W RMS",
                "Frequency Response": "25Hz - 200Hz",
                "Enclosure": "Sealed",
                "Dimensions": "300 x 300 x 350mm"
            }
        },
        {
            id: 19,
            name: "Prima APS 12",
            price: 699.00,
            image: "https://images.pexels.com/photos/1644883/pexels-photo-1644883.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "12-inch passive subwoofer with high power handling.",
            specifications: {
                "Size": "12 inches (300mm)",
                "Power Handling": "600W RMS",
                "Frequency Response": "20Hz - 500Hz",
                "Voice Coil": "Dual 4Ω",
                "Mounting Depth": "120mm"
            }
        },
        {
            id: 20,
            name: "Prima APS 10",
            price: 499.00,
            image: "https://images.pexels.com/photos/1644883/pexels-photo-1644883.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "10-inch passive subwoofer with excellent musicality.",
            specifications: {
                "Size": "10 inches (250mm)",
                "Power Handling": "400W RMS",
                "Frequency Response": "25Hz - 500Hz",
                "Voice Coil": "Dual 4Ω",
                "Mounting Depth": "100mm"
            }
        },
        {
            id: 21,
            name: "Prima APS 8",
            price: 349.00,
            image: "https://images.pexels.com/photos/1644883/pexels-photo-1644883.jpeg?auto=compress&cs=tinysrgb&w=400",
            description: "8-inch passive subwoofer perfect for tight spaces.",
            specifications: {
                "Size": "8 inches (200mm)",
                "Power Handling": "250W RMS",
                "Frequency Response": "30Hz - 500Hz",
                "Voice Coil": "Single 4Ω",
                "Mounting Depth": "80mm"
            }
        }
    ]
};

// Load amplifiers
function loadAmplifiers(series = 'all') {
    const grid = document.getElementById('amplifierGrid');
    if (!grid) return;

    const filteredProducts = series === 'all' 
        ? products.amplifiers 
        : products.amplifiers.filter(product => product.series === series);

    grid.innerHTML = '';
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        grid.appendChild(productCard);
    });

    // Add tab functionality
    const tabButtons = document.querySelectorAll('#amplifierTabs button');
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const series = this.textContent.toLowerCase().replace(' series', '').replace(' amplifiers', '').replace('all ', '');
            loadAmplifiers(series === 'all' ? 'all' : series);
        });
    });
}

// Load speakers
function loadSpeakers(category = 'all') {
    const grid = document.getElementById('speakerGrid');
    if (!grid) return;

    const filteredProducts = category === 'all' 
        ? products.speakers 
        : products.speakers.filter(product => product.category === category);

    grid.innerHTML = '';
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        grid.appendChild(productCard);
    });

    // Add tab functionality
    const tabButtons = document.querySelectorAll('#speakerTabs button');
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.textContent.toLowerCase().replace(' speakers', '').replace('all ', '');
            loadSpeakers(category === 'all' ? 'all' : category);
        });
    });
}

// Load processors
function loadProcessors() {
    const grid = document.getElementById('processorGrid');
    if (!grid) return;

    grid.innerHTML = '';
    products.processors.forEach(product => {
        const productCard = createProductCard(product);
        grid.appendChild(productCard);
    });
}

// Load subwoofers
function loadSubwoofers() {
    const grid = document.getElementById('subwooferGrid');
    if (!grid) return;

    grid.innerHTML = '';
    products.subwoofers.forEach(product => {
        const productCard = createProductCard(product);
        grid.appendChild(productCard);
    });
}

// Create product card
function createProductCard(product) {
    const col = document.createElement('div');
    col.className = 'col-lg-4 col-md-6 mb-4';
    
    col.innerHTML = `
        <div class="card product-card h-100">
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text text-muted flex-grow-1">${product.description.substring(0, 100)}...</p>
                <div class="price mb-3">$${product.price.toFixed(2)}</div>
                <div class="mt-auto">
                    <button class="btn btn-primary me-2" onclick="viewProduct(${product.id})">
                        <i class="fas fa-eye me-1"></i>View Details
                    </button>
                    <button class="btn btn-outline-primary" onclick="addToCart(${product.id})">
                        <i class="fas fa-cart-plus me-1"></i>Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;
    
    return col;
}

// View product details
function viewProduct(productId) {
    const product = findProductById(productId);
    if (!product) return;

    const modal = document.getElementById('productModal');
    const modalTitle = document.getElementById('productModalTitle');
    const modalBody = document.getElementById('productModalBody');
    const addToCartBtn = document.getElementById('addToCartBtn');

    modalTitle.textContent = product.name;
    
    modalBody.innerHTML = `
        <div class="row">
            <div class="col-md-6">
                <img src="${product.image}" class="img-fluid rounded" alt="${product.name}">
            </div>
            <div class="col-md-6">
                <h4 class="text-primary mb-3">$${product.price.toFixed(2)}</h4>
                <p class="mb-4">${product.description}</p>
                <h6>Specifications:</h6>
                <ul class="list-unstyled">
                    ${Object.entries(product.specifications).map(([key, value]) => 
                        `<li class="mb-1"><strong>${key}:</strong> ${value}</li>`
                    ).join('')}
                </ul>
            </div>
        </div>
    `;

    addToCartBtn.onclick = () => {
        addToCart(productId);
        bootstrap.Modal.getInstance(modal).hide();
    };

    const productModal = new bootstrap.Modal(modal);
    productModal.show();
}

// Add product to cart
function addToCart(productId) {
    const product = findProductById(productId);
    if (!product) return;

    if (!window.cart) window.cart = [];

    const existingItem = window.cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        window.cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();
    showNotification(`${product.name} added to cart!`, 'success');
}

// Find product by ID
function findProductById(productId) {
    const allProducts = [
        ...products.amplifiers,
        ...products.speakers,
        ...products.processors,
        ...products.subwoofers
    ];
    return allProducts.find(product => product.id === productId);
}