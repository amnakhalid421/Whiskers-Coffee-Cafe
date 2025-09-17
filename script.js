// Data
        const cats = [
            { 
                id: 1, 
                name: "Luna", 
                age: "2 years", 
                personality: "Playful & Curious", 
                color: "Gray & White", 
                available: true,
                likes: ["Feather toys", "Sunny windows", "Gentle pets"],
                story: "Luna was found as a kitten in a parking lot. She's now a confident, loving cat who adores interactive play and would thrive in an active household."
            },
            { 
                id: 2, 
                name: "Milo", 
                age: "3 years", 
                personality: "Calm & Cuddly", 
                color: "Orange Tabby", 
                available: true,
                likes: ["Lap sitting", "Soft blankets", "Quiet spaces"],
                story: "Milo is the perfect companion for someone looking for a gentle, affectionate cat. He loves to purr and will happily spend hours cuddling."
            },
            { 
                id: 3, 
                name: "Bella", 
                age: "1 year", 
                personality: "Energetic & Social", 
                color: "Black & White", 
                available: false,
                likes: ["Other cats", "Climbing", "Treats"],
                story: "Bella found her forever home! She was adopted by a lovely family with another cat and is living her best life."
            },
            { 
                id: 4, 
                name: "Oliver", 
                age: "4 years", 
                personality: "Gentle & Wise", 
                color: "Brown Tabby", 
                available: true,
                likes: ["Reading companions", "Gentle brushing", "Catnip"],
                story: "Oliver is a distinguished gentleman who would make an excellent reading companion. He's calm, well-mannered, and loves gentle attention."
            },
            { 
                id: 5, 
                name: "Whiskers", 
                age: "5 years", 
                personality: "Independent & Sweet", 
                color: "Calico", 
                available: true,
                likes: ["High perches", "Bird watching", "Slow blinks"],
                story: "Whiskers is a beautiful calico who enjoys her independence but also loves affection on her terms. Perfect for someone who appreciates a cat with personality."
            },
            { 
                id: 6, 
                name: "Shadow", 
                age: "2 years", 
                personality: "Mysterious & Loyal", 
                color: "All Black", 
                available: true,
                likes: ["Following humans", "Cozy corners", "Midnight snacks"],
                story: "Shadow is a sleek black cat who forms deep bonds with his humans. He's loyal, intelligent, and has the most beautiful golden eyes."
            }
        ];

        const menuItems = [
            { category: "Signature Coffees", items: [
                { name: "Purrfect Latte", price: "$4.50", description: "Smooth espresso with steamed milk and latte art", popular: true },
                { name: "Catnip Cappuccino", price: "$4.00", description: "Rich cappuccino with a hint of vanilla and cinnamon" },
                { name: "Whiskers Americano", price: "$3.50", description: "Bold and smooth black coffee, locally roasted" },
                { name: "Meow Mocha", price: "$5.00", description: "Decadent chocolate and espresso blend with whipped cream" }
            ]},
            { category: "Specialty Drinks", items: [
                { name: "Cat's Pajamas Chai", price: "$4.25", description: "Spiced chai latte with oat milk and honey" },
                { name: "Feline Fine Matcha", price: "$4.75", description: "Premium matcha latte with your choice of milk" },
                { name: "Purr-fect Hot Chocolate", price: "$3.75", description: "Rich hot chocolate with marshmallows" }
            ]},
            { category: "Treats & Pastries", items: [
                { name: "Kitty Cookies", price: "$3.00", description: "Homemade chocolate chip cookies baked fresh daily", popular: true },
                { name: "Paw Print Pastry", price: "$4.50", description: "Flaky croissant with seasonal filling" },
                { name: "Meow Muffin", price: "$3.50", description: "Blueberry muffin with streusel topping" },
                { name: "Cat Cake Slice", price: "$5.50", description: "Daily selection of homemade cakes" }
            ]},
            { category: "Light Meals", items: [
                { name: "Tuna Melt Panini", price: "$8.50", description: "Grilled sandwich with tuna salad and melted cheese" },
                { name: "Salmon Bagel", price: "$9.00", description: "Everything bagel with cream cheese, smoked salmon, and capers" },
                { name: "Cat-charcuterie Board", price: "$12.00", description: "Selection of cheeses, crackers, and seasonal fruits" }
            ]}
        ];

        const testimonials = [
            { name: "Sarah M.", text: "The most relaxing place in the city! I adopted my cat Mittens here and still come back for the amazing coffee.", rating: 5 },
            { name: "James L.", text: "Perfect date spot! The cats are so friendly and the atmosphere is incredibly cozy.", rating: 5 },
            { name: "Emily R.", text: "I work remotely from here sometimes. The cats are great company and the wifi is excellent!", rating: 5 },
            { name: "Michael K.", text: "Found my best friend here - a beautiful tabby named Ginger. The staff helped make the adoption process so smooth.", rating: 5 }
        ];

        const galleryItems = [
            { title: "Luna Playing", description: "Luna having fun with her favorite feather toy", emoji: "🐱", color: "from-purple-200 to-pink-200" },
            { title: "Milo Napping", description: "Milo enjoying a peaceful afternoon nap in the sun", emoji: "😴", color: "from-orange-200 to-yellow-200" },
            { title: "Coffee Art", description: "Beautiful latte art created by our talented baristas", emoji: "☕", color: "from-amber-200 to-orange-200" },
            { title: "Cozy Corner", description: "Our reading nook where cats and humans relax together", emoji: "📚", color: "from-green-200 to-emerald-200" },
            { title: "Adoption Day", description: "Happy moment when Shadow found his forever family", emoji: "❤️", color: "from-red-200 to-pink-200" },
            { title: "Playtime", description: "Multiple cats enjoying interactive play session", emoji: "🎾", color: "from-blue-200 to-cyan-200" },
            { title: "Whiskers Portrait", description: "Professional photo of our beautiful calico Whiskers", emoji: "📸", color: "from-indigo-200 to-purple-200" },
            { title: "Cafe Interior", description: "Overview of our welcoming and cat-friendly space", emoji: "🏠", color: "from-teal-200 to-green-200" }
        ];

        const catFacts = [
            "Cats have over 20 muscles that control their ears!",
            "A group of cats is called a 'clowder' and a group of kittens is called a 'kindle'.",
            "Cats can rotate their ears 180 degrees.",
            "A cat's purr vibrates at a frequency that promotes bone healing.",
            "Cats have a third eyelid called a 'nictitating membrane'.",
            "Cats can make over 100 different sounds, while dogs can only make about 10.",
            "A cat's nose print is unique, just like a human's fingerprint.",
            "Cats spend 70% of their lives sleeping - that's 13-16 hours a day!",
            "Cats have excellent night vision and can see at light levels six times lower than what humans need.",
            "The oldest known pet cat existed 9,500 years ago in Cyprus."
        ];

        let currentTestimonial = 0;
        let memoryGame = { cards: [], flippedCards: [], matchedPairs: 0, score: 0 };
        let clickerGame = { score: 0, multiplier: 1, autoClicker: false, autoCost: 50, multiplierCost: 100 };

        // Cat image URLs
        function getCatImage(catId) {
            const images = {
                1: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=300&fit=crop&crop=face",
                2: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=400&h=300&fit=crop&crop=face", 
                3: "https://images.unsplash.com/photo-1561948955-570b270e7c36?w=400&h=300&fit=crop&crop=face",
                4: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=400&h=300&fit=crop&crop=face",
                5: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=400&h=300&fit=crop&crop=face",
                6: "https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?w=400&h=300&fit=crop&crop=face"
            };
            return images[catId] || images[1];
        }

        // Navigation functions
        function showSection(sectionName) {
            // Hide all sections
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Show selected section
            document.getElementById(sectionName).classList.add('active');
            
            // Update themes
            updateThemes(sectionName);
        }

        function updateThemes(section) {
            const navbar = document.getElementById('navbar');
            const footer = document.getElementById('footer');
            
            const themes = {
                cats: {
                    navbar: 'bg-gradient-to-r from-purple-100 to-pink-100 backdrop-blur-md border-purple-200 shadow-lg',
                    footer: 'bg-gradient-to-r from-purple-800 to-pink-800',
                    activeBtn: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg',
                    inactiveBtn: 'text-purple-700 hover:bg-purple-50 hover:text-purple-800',
                    logoTitle: 'bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700 bg-clip-text text-transparent',
                    logoTagline: 'text-purple-600'
                },
                menu: {
                    navbar: 'bg-gradient-to-r from-green-100 to-emerald-100 backdrop-blur-md border-green-200 shadow-lg',
                    footer: 'bg-gradient-to-r from-green-800 to-emerald-800',
                    activeBtn: 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg',
                    inactiveBtn: 'text-green-700 hover:bg-green-50 hover:text-green-800',
                    logoTitle: 'bg-gradient-to-r from-green-600 via-emerald-500 to-green-700 bg-clip-text text-transparent',
                    logoTagline: 'text-green-600'
                },
                gallery: {
                    navbar: 'bg-gradient-to-r from-yellow-100 to-amber-100 backdrop-blur-md border-yellow-200 shadow-lg',
                    footer: 'bg-gradient-to-r from-yellow-800 to-amber-800',
                    activeBtn: 'bg-gradient-to-r from-yellow-500 to-amber-500 text-white shadow-lg',
                    inactiveBtn: 'text-yellow-700 hover:bg-yellow-50 hover:text-yellow-800',
                    logoTitle: 'bg-gradient-to-r from-yellow-600 via-amber-500 to-yellow-700 bg-clip-text text-transparent',
                    logoTagline: 'text-yellow-600'
                },
                games: {
                    navbar: 'bg-gradient-to-r from-cyan-100 to-blue-100 backdrop-blur-md border-cyan-200 shadow-lg',
                    footer: 'bg-gradient-to-r from-cyan-800 to-blue-800',
                    activeBtn: 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg',
                    inactiveBtn: 'text-cyan-700 hover:bg-cyan-50 hover:text-cyan-800',
                    logoTitle: 'bg-gradient-to-r from-cyan-600 via-blue-500 to-cyan-700 bg-clip-text text-transparent',
                    logoTagline: 'text-cyan-600'
                },
                booking: {
                    navbar: 'bg-gradient-to-r from-teal-100 to-green-100 backdrop-blur-md border-teal-200 shadow-lg',
                    footer: 'bg-gradient-to-r from-teal-800 to-green-800',
                    activeBtn: 'bg-gradient-to-r from-teal-500 to-green-500 text-white shadow-lg',
                    inactiveBtn: 'text-teal-700 hover:bg-teal-50 hover:text-teal-800',
                    logoTitle: 'bg-gradient-to-r from-teal-600 via-green-500 to-teal-700 bg-clip-text text-transparent',
                    logoTagline: 'text-teal-600'
                },
                visit: {
                    navbar: 'bg-gradient-to-r from-blue-100 to-indigo-100 backdrop-blur-md border-blue-200 shadow-lg',
                    footer: 'bg-gradient-to-r from-blue-800 to-indigo-800',
                    activeBtn: 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg',
                    inactiveBtn: 'text-blue-700 hover:bg-blue-50 hover:text-blue-800',
                    logoTitle: 'bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-700 bg-clip-text text-transparent',
                    logoTagline: 'text-blue-600'
                },
                contact: {
                    navbar: 'bg-gradient-to-r from-rose-100 to-pink-100 backdrop-blur-md border-rose-200 shadow-lg',
                    footer: 'bg-gradient-to-r from-rose-800 to-pink-800',
                    activeBtn: 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg',
                    inactiveBtn: 'text-rose-700 hover:bg-rose-50 hover:text-rose-800',
                    logoTitle: 'bg-gradient-to-r from-rose-600 via-pink-500 to-rose-700 bg-clip-text text-transparent',
                    logoTagline: 'text-rose-600'
                },
                home: {
                    navbar: 'bg-white/90 backdrop-blur-md border-amber-100 shadow-lg',
                    footer: 'bg-gradient-to-r from-amber-800 to-orange-800',
                    activeBtn: 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg glow',
                    inactiveBtn: 'text-amber-700 hover:bg-amber-50 hover:text-amber-800',
                    logoTitle: 'bg-gradient-to-r from-amber-600 via-orange-500 to-amber-700 bg-clip-text text-transparent',
                    logoTagline: 'text-amber-600'
                }
            };

            const theme = themes[section] || themes.home;
            
            // Update navbar
            if (navbar) {
                navbar.className = `${theme.navbar} sticky top-0 z-50 border-b transition-all duration-700 ease-in-out`;
            }
            
            // Update footer
            if (footer) {
                footer.className = `${theme.footer} text-white py-16 transition-all duration-700 ease-in-out`;
            }
            
            // Update logo colors
            const logoTitle = document.getElementById('logo-title');
            const logoTagline = document.getElementById('logo-tagline');
            
            if (logoTitle && theme.logoTitle) {
                logoTitle.className = `text-2xl font-bold ${theme.logoTitle} transition-all duration-700`;
            }
            
            if (logoTagline && theme.logoTagline) {
                logoTagline.className = `text-xs ${theme.logoTagline} font-medium transition-all duration-700`;
            }
            
            // Update nav buttons
            const buttons = document.querySelectorAll('.nav-btn');
            buttons.forEach((btn) => {
                const btnText = btn.textContent.trim().toLowerCase();
                btn.style.transition = 'all 0.3s ease-in-out';
                
                if (btnText === section || (btnText === 'book' && section === 'booking')) {
                    btn.className = `nav-btn px-4 py-3 rounded-full text-sm font-medium transition-all duration-300 ${theme.activeBtn}`;
                } else {
                    btn.className = `nav-btn px-4 py-3 rounded-full text-sm font-medium transition-all duration-300 ${theme.inactiveBtn}`;
                }
            });
        }

        // Cat modal functions
        function showCatModal(catId) {
            const cat = cats.find(c => c.id === catId);
            if (!cat) return;

            document.getElementById('modalCatName').textContent = cat.name;
            document.getElementById('modalCatImage').src = getCatImage(cat.id);
            document.getElementById('modalCatImage').alt = `${cat.name} - ${cat.color} cat`;
            
            const basicInfo = document.getElementById('modalBasicInfo');
            basicInfo.innerHTML = `
                <p><strong>Age:</strong> ${cat.age}</p>
                <p><strong>Color:</strong> ${cat.color}</p>
                <p><strong>Personality:</strong> ${cat.personality}</p>
            `;
            
            const likes = document.getElementById('modalLikes');
            likes.innerHTML = cat.likes.map(like => 
                `<li class="flex items-center"><span class="text-purple-500 mr-2">•</span>${like}</li>`
            ).join('');
            
            document.getElementById('modalStory').textContent = cat.story;
            document.getElementById('catModal').classList.add('active');
        }

        function closeCatModal() {
            document.getElementById('catModal').classList.remove('active');
        }

        // Gallery functions
        function showGalleryModal(index) {
            const item = galleryItems[index];
            if (!item) return;

            document.getElementById('modalGalleryTitle').textContent = item.title;
            document.getElementById('modalGalleryContent').innerHTML = `
                <div class="h-96 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-6">
                    <span class="text-9xl">${item.emoji}</span>
                </div>
                <p class="text-lg text-gray-700">${item.description}</p>
            `;
            document.getElementById('galleryModal').classList.add('active');
        }

        function closeGalleryModal() {
            document.getElementById('galleryModal').classList.remove('active');
        }

        // Game functions
        function startMemoryGame() {
            const gameEmojis = ['🐱', '🐾', '☕', '❤️', '🏠', '🎾', '🐟', '🧶'];
            const gameCards = [...gameEmojis, ...gameEmojis].sort(() => Math.random() - 0.5);
            
            memoryGame = { cards: gameCards, flippedCards: [], matchedPairs: 0, score: 0 };
            
            const gameGrid = document.getElementById('memory-game');
            gameGrid.innerHTML = gameCards.map((emoji, index) => 
                `<div class="memory-card" onclick="flipCard(${index})" data-index="${index}">
                    <span class="card-content" style="display: none;">${emoji}</span>
                </div>`
            ).join('');
            
            document.getElementById('memory-score').textContent = '0';
        }

        function flipCard(index) {
            if (memoryGame.flippedCards.length >= 2 || memoryGame.flippedCards.includes(index)) return;
            
            const card = document.querySelector(`[data-index="${index}"]`);
            const content = card.querySelector('.card-content');
            
            card.classList.add('flipped');
            content.style.display = 'block';
            memoryGame.flippedCards.push(index);
            
            if (memoryGame.flippedCards.length === 2) {
                setTimeout(checkMatch, 1000);
            }
        }

        function checkMatch() {
            const [first, second] = memoryGame.flippedCards;
            const firstCard = document.querySelector(`[data-index="${first}"]`);
            const secondCard = document.querySelector(`[data-index="${second}"]`);
            
            if (memoryGame.cards[first] === memoryGame.cards[second]) {
                firstCard.classList.add('matched');
                secondCard.classList.add('matched');
                memoryGame.matchedPairs++;
                memoryGame.score += 10;
                
                if (memoryGame.matchedPairs === 8) {
                    setTimeout(() => alert('Congratulations! You won! 🎉'), 500);
                }
            } else {
                firstCard.classList.remove('flipped');
                secondCard.classList.remove('flipped');
                firstCard.querySelector('.card-content').style.display = 'none';
                secondCard.querySelector('.card-content').style.display = 'none';
            }
            
            memoryGame.flippedCards = [];
            document.getElementById('memory-score').textContent = memoryGame.score;
        }

        function clickCat() {
            clickerGame.score += clickerGame.multiplier;
            document.getElementById('clicker-score').textContent = clickerGame.score;
            
            const catButton = document.getElementById('clicker-cat');
            catButton.classList.add('sparkle');
            setTimeout(() => catButton.classList.remove('sparkle'), 600);
            
            updateClickerButtons();
        }

        function buyUpgrade(type) {
            if (type === 'autoClicker' && clickerGame.score >= clickerGame.autoCost) {
                clickerGame.score -= clickerGame.autoCost;
                clickerGame.autoClicker = true;
                clickerGame.autoCost *= 2;
                
                setInterval(() => {
                    if (clickerGame.autoClicker) {
                        clickerGame.score += clickerGame.multiplier;
                        document.getElementById('clicker-score').textContent = clickerGame.score;
                    }
                }, 1000);
                
            } else if (type === 'multiplier' && clickerGame.score >= clickerGame.multiplierCost) {
                clickerGame.score -= clickerGame.multiplierCost;
                clickerGame.multiplier *= 2;
                clickerGame.multiplierCost *= 3;
            }
            
            document.getElementById('clicker-score').textContent = clickerGame.score;
            updateClickerButtons();
        }

        function updateClickerButtons() {
            const autoBtn = document.getElementById('auto-clicker-btn');
            const multBtn = document.getElementById('multiplier-btn');
            
            autoBtn.disabled = clickerGame.score < clickerGame.autoCost || clickerGame.autoClicker;
            multBtn.disabled = clickerGame.score < clickerGame.multiplierCost;
            
            document.getElementById('auto-cost').textContent = clickerGame.autoCost;
            document.getElementById('multiplier-cost').textContent = clickerGame.multiplierCost;
            
            if (clickerGame.autoClicker) {
                autoBtn.textContent = 'Auto Clicker Active! ✅';
            }
        }

        function showRandomFact() {
            const randomFact = catFacts[Math.floor(Math.random() * catFacts.length)];
            document.getElementById('cat-fact').textContent = randomFact;
        }

        // Generate content functions
        function generateCatsGrid() {
            const grid = document.getElementById('cats-grid');
            grid.innerHTML = cats.map((cat, index) => `
                <div class="bg-white rounded-2xl shadow-xl overflow-hidden card-hover fade-in" style="animation-delay: ${index * 0.1}s">
                    <div class="h-56 relative overflow-hidden">
                        <img src="${getCatImage(cat.id)}" alt="${cat.name} - ${cat.color} cat" class="w-full h-full object-cover transition-transform duration-300 hover:scale-110" onerror="this.src=''; this.alt='Photo of ${cat.name} failed to load'; this.style.display='none'; this.parentElement.innerHTML='<div class=\\'h-56 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center\\'>🐱</div>';">
                        ${!cat.available ? '<div class="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">ADOPTED ❤️</div>' : ''}
                    </div>
                    <div class="p-6">
                        <div class="flex justify-between items-start mb-3">
                            <h3 class="text-2xl font-bold text-gray-800">${cat.name}</h3>
                            <span class="px-3 py-1 rounded-full text-sm font-medium ${cat.available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}">
                                ${cat.available ? 'Available' : 'Adopted'}
                            </span>
                        </div>
                        <div class="space-y-2 mb-4">
                            <p class="text-gray-600"><strong>Age:</strong> ${cat.age}</p>
                            <p class="text-gray-600"><strong>Color:</strong> ${cat.color}</p>
                            <p class="text-gray-600"><strong>Personality:</strong> ${cat.personality}</p>
                        </div>
                        ${cat.available ? 
                            `<button onclick="showCatModal(${cat.id})" class="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                                Learn More About ${cat.name} 💕
                            </button>` :
                            `<div class="w-full bg-gray-100 text-gray-500 py-3 rounded-xl font-semibold text-center">
                                Happy in New Home! 🏠
                            </div>`
                        }
                    </div>
                </div>
            `).join('');
        }

        function generateMenuGrid() {
            const grid = document.getElementById('menu-grid');
            grid.innerHTML = menuItems.map((category, categoryIndex) => `
                <div class="bg-white rounded-2xl shadow-xl p-8 card-hover fade-in" style="animation-delay: ${categoryIndex * 0.2}s">
                    <h3 class="text-3xl font-bold text-green-800 mb-8 text-center border-b-2 border-green-200 pb-4">${category.category}</h3>
                    <div class="space-y-6">
                        ${category.items.map(item => `
                            <div class="border-b border-green-100 pb-4 last:border-b-0 relative">
                                ${item.popular ? '<span class="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs px-2 py-1 rounded-full font-bold">POPULAR ⭐</span>' : ''}
                                <div class="flex justify-between items-start mb-2">
                                    <h4 class="text-xl font-semibold text-gray-800">${item.name}</h4>
                                    <span class="text-xl font-bold text-green-600 ml-4">${item.price}</span>
                                </div>
                                <p class="text-gray-600">${item.description}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('');
        }

        function generateGalleryGrid() {
            const grid = document.getElementById('gallery-grid');
            grid.innerHTML = galleryItems.map((item, index) => `
                <div class="bg-white rounded-2xl shadow-xl overflow-hidden card-hover cursor-pointer fade-in" style="animation-delay: ${index * 0.1}s" onclick="showGalleryModal(${index})">
                    <div class="h-48 bg-gradient-to-br ${item.color} flex items-center justify-center">
                        <span class="text-6xl">${item.emoji}</span>
                    </div>
                    <div class="p-4">
                        <h3 class="text-lg font-bold text-gray-800 mb-2">${item.title}</h3>
                        <p class="text-sm text-gray-600">${item.description}</p>
                    </div>
                </div>
            `).join('');
        }

        // Testimonial rotation
        function rotateTestimonials() {
            const testimonialDiv = document.getElementById('testimonial');
            const testimonial = testimonials[currentTestimonial];
            
            testimonialDiv.innerHTML = `
                <div class="text-yellow-400 text-2xl mb-4">${'★'.repeat(testimonial.rating)}</div>
                <p class="text-lg text-gray-700 mb-4 italic">"${testimonial.text}"</p>
                <p class="font-semibold text-amber-800">- ${testimonial.name}</p>
            `;
            
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        }

        // Form submissions
        function handleFormSubmit(event) {
            event.preventDefault();
            alert('Thank you for your message! This is a demo form, so your message wasn\'t actually sent, but in a real website it would be processed.');
        }

        function handleBookingSubmit(event) {
            event.preventDefault();
            alert('Booking request received! This is a demo form, so your reservation wasn\'t actually made, but in a real website you would receive a confirmation email.');
        }

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            generateCatsGrid();
            generateMenuGrid();
            generateGalleryGrid();
            startMemoryGame();
            
            // Start testimonial rotation
            setInterval(rotateTestimonials, 4000);
            
            // Close modals when clicking outside
            document.getElementById('catModal').addEventListener('click', function(e) {
                if (e.target === this) closeCatModal();
            });
            
            document.getElementById('galleryModal').addEventListener('click', function(e) {
                if (e.target === this) closeGalleryModal();
            });
        });