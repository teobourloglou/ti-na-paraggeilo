const foodCategories = [
   ['Σουβλάκι', 'souvlaki' ,'', ''],
   ['Pizza', 'pizza' ,'', ''],
   ['Κρέπα', 'crepe' ,'', ''],
   ['Κινέζικο', 'chinese' ,'', ''],
   ['Burger', 'burgers' ,'', ''],
   ['Sushi', 'sushi' ,'', ''],
   ['Μαγειρευτό', 'cooked' ,'', ''],
   ['Ζυμαρικό', 'pasta' ,'', ''],
   ['Μεξικάνικο', 'mexican' ,'', ''],
   ['Βάφλα', 'waffle' ,'', ''],
   ['Ινδικό', 'indian' ,'', ''],
   ['Hot Dog', 'hotdog' ,'', ''],
   ['Σαλάτα', 'salad' ,'', ''],
   ['Σαντουιτς', 'sandwich' ,'', ''],
   ['Ψητά - Grill', 'grill' ,'', ''],
   ['Πεϊνιρλί', 'peinirli' ,'', ''],
   ['Brunch', 'brunch' ,'', ''],
   ['Vegetarian', 'vegetarian' ,'', ''],
   ['Vegan', 'vegan' ,'', ''],
   ['Θαλασσινό', 'seafood' ,'', ''],
   ['Ασιατικό', 'asian' ,'', ''],
   ['Ιταλικό', 'italian' ,'', ''],
   ['Λουκουμάδες', 'loukoumades' ,'', ''],
   ['Κοτόπουλο', 'chicken' ,'', ''],
];

function generateRandomCategory() {
   return Math.floor(Math.random() * foodCategories.length);
}


document.addEventListener('DOMContentLoaded', () => {
   let initial_click = true;
   const button = document.getElementById('button');
   const button_text = document.getElementById('button-text');
   const button_again = document.getElementById('button-again');
   const category_title = document.getElementById('category-title');
   const img = document.getElementById('category-img');
   const efood = document.getElementById('e-food');
   const wolt = document.getElementById('wolt');
   const efood_link = 'https://www.e-food.gr/shops?categories=';
   const wolt_link = 'https://wolt.com/el/grc/*/category/';

   button.addEventListener('click', () => {
      if (initial_click) {
         efood.classList.remove('hidden')
         wolt.classList.remove('hidden')
         button_again.classList.remove('hidden');
         button_text.innerHTML = 'Μήπως θέλεις';

         initial_click = false;
      }


      const index = generateRandomCategory();
      category_title.innerHTML = foodCategories[index][0] + ';';
      img.src = '../icons/' + foodCategories[index][1]  + '.webp';
      efood.href = efood_link + foodCategories[index][1];
      wolt.href = wolt_link + foodCategories[index][1];
   });
});