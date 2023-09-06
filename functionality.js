const foodCategories = {
   'Category01'   :   ['Σουβλάκι'     ,'souvlaki'      ,'souvlakia',     'souvlaki'    ],
   'Category02'   :   ['Pizza'        ,'pizza'         ,'pizza',         'pizza'       ],
   'Category03'   :   ['Κρέπα'        ,'crepe'         ,'crepes',        'crepe'       ],
   'Category04'   :   ['Κινέζικο'     ,'chinese'       ,'kineziko',      'chinese'     ],
   'Category05'   :   ['Burger'       ,'burgers'       ,'burger',        'burgers'     ],
   'Category06'   :   ['Sushi'        ,'sushi'         ,'sushi',         'sushi'       ],
   'Category07'   :   ['Μαγειρευτό'   ,'cooked'        ,'magireuta',     'greek'       ],
   'Category08'   :   ['Ζυμαρικό'     ,'pasta'         ,'makaronades',   'pasta'       ],
   'Category09'   :   ['Μεξικάνικο'   ,'mexican'       ,'mexikaniko',    'mexican'     ],
   'Category10'   :   ['Βάφλα'        ,'waffle'        ,'vafles',        'waffles'     ],
   'Category12'   :   ['Ινδικό'       ,'indian'        ,'indiko',        'indian'      ],
   'Category13'   :   ['Hot Dog'      ,'hotdog'        ,'hot_dog',       'street_food' ],
   'Category14'   :   ['Σαλάτα'       ,'salad'         ,'salates',       'salad'       ],
   'Category15'   :   ['Σαντουιτς'    ,'sandwich'      ,'sandwich',      'sandwich'    ],
   'Category16'   :   ['Ψητά - Grill' ,'grill'         ,'psita',         'steak'       ],
   'Category17'   :   ['Πεϊνιρλί'     ,'peinirli'      ,'peinirli',      'bakery'      ],
   'Category18'   :   ['Brunch'       ,'brunch'        ,'brunch',        'brunch'      ],
   'Category19'   :   ['Vegetarian'   ,'vegetarian'    ,'vegetarian',    'vegetarian'  ],
   'Category20'   :   ['Vegan'        ,'vegan'         ,'vegan',         'vegan'       ],
   'Category21'   :   ['Θαλασσινό'    ,'seafood'       ,'thalassina',    'fish'        ],
   'Category22'   :   ['Ασιατικό'     ,'asian'         ,'asiatiki',      'asian'       ],
   'Category23'   :   ['Ιταλικό'      ,'italian'       ,'italiki',       'italian'     ],
   'Category24'   :   ['Λουκουμάδες'  ,'loukoumades'   ,'loykoymades',   'dessert'     ],
   'Category25'   :   ['Κοτόπουλο'    ,'chicken'       ,'kotopoyla',     'chicken'     ],
   'Category26'   :   ['Falafel'      ,'falafel'       ,'falafel',       'falafel'     ],
};

function generateRandomCategory() {
   const categoryKeys = Object.keys(foodCategories);
   const randomKeyIndex = Math.floor(Math.random() * categoryKeys.length);
   const randomKey = categoryKeys[randomKeyIndex];
   return foodCategories[randomKey];
}


document.addEventListener('DOMContentLoaded', () => {
   let   initialClick = true;
   const orderButton = document.getElementById('orderButton');
   const buttonText = document.getElementById('buttonText');
   const buttonAgain = document.getElementById('buttonAgain');
   const categoryTitle = document.getElementById('categoryTitle');
   const img = document.getElementById('categoryImage');
   const efood = document.getElementById('efood');
   const wolt = document.getElementById('wolt');
   const efood_link = 'https://www.e-food.gr/shops?categories=';
   const wolt_link = 'https://wolt.com/el/grc/*/category/';

   orderButton.addEventListener('click', () => {
      if (initialClick) {
         efood.classList.remove('hidden')
         wolt.classList.remove('hidden')
         buttonAgain.classList.remove('hidden');
         buttonText.innerHTML = 'Μήπως θέλεις';
         initialClick = false;
      }

      const category = generateRandomCategory();
      img.classList.add('fade-out');

      setTimeout(() => {
          categoryTitle.innerHTML = category[0] + ';';
          img.src = './icons/' + category[1] + '.webp';
          efood.href = efood_link + category[2];
          wolt.href = wolt_link + category[3];
          img.classList.remove('fade-out');
      }, 500);
   });
});