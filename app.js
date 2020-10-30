// displaying products on the shopping page

const shop = [
    {
      image: 'img/cat-food1.jpeg',
      price: '0.56', 
      description: "Purina Friskies Classic Paté Cat Food 5.5oz"
    },

    {
      image: 'img/cat-food2.jpeg',
      price: '40.99', 
      description: "Hill's Science Diet Indoor Adult Cat Food - Chicken"
    },

    {
      image: 'img/dog-food1.jpeg',
      price: '13.97', 
      description: "Milk-Bone Original Large Biscuit Dog Treats"
    },

    {
      image: 'img/dog-food2.jpeg',
      price: '10.99', 
      description: "Purina Beggin' Strips Dog Treat - Bacon"
    },

    {
      image: 'img/dog-food3.jpeg',
      price: '41.99', 
      description: "Simply Nourish - Natural, Chicken & Brown Rice"
    },

    {
      image: 'img/dog-food4.jpeg',
      price: '17.97', 
      description: "Instinct Frozen Raw Dog Food - Natural, Grain Free, Raw"
    },

    {
      image: 'img/dog-house.jpeg',
      price: '178.99', 
      description: "Trixie Pet Products Dog's Inn Dog House"
    },

    {
      image: 'img/dog-house2.jpeg',
      price: '32.95', 
      description: "Petmate Top Load Pet Carrier"
    },

    {
      image: 'img/cat-litter1.jpeg',
      price: '17.99', 
      description: "Litter Genie™ Plus Cat Litter Disposal System"
    },

    {
      image: 'img/cat-litter2.jpeg',
      price: '8.99', 
      description: "Great Choice® Classic Clay Cat Litter - Non-Clumping"
    },

    {
      image: 'img/cat-play1.jpeg',
      price: '49.97', 
      description: "SmartCat Cat Scratcher"
    },

    {
      image: 'img/cat-bed1.jpeg',
      price: '33.99', 
      description: "PetPals Round Basket Cat Bed"
    }
  
    
]
    
    let postHTML = " ";
  
 
    for (let i = 0; i < shop.length; i++) {
        let heading = '<div class="product col-sm-6 col-md-4 col-lg-3">';
        let image = '<img class="img-fluid mb-4" src="' + shop[i].image + '"/';
        let price = '<div class=""><p> $' + shop[i].price + '</p>';
        let description = '<p>'+ shop[i].description + '</p><button type="button" class="btn btn-warning"> add to cart</button></div></div>';
        let concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis;
      }
    document.getElementById('market').innerHTML = postHTML;
  