const foodCategories = [
   ['Σουβλάκι', 'souvlakia'],
   ['Pizza', 'pizza'],
   ['Κρέπα', 'crepes'],
   ['Κινέζικο', 'chinese'],
   ['Burger', 'burgers'],
   ['Sushi', 'sushi'],
   ['Μαγειρευτό', 'cooked'],
   ['Ζυμαρικό', 'pasta'],
   ['Μεξικάνικο', 'mexican'],
   ['Βάφλα', 'waffle'],
   ['Ινδικό', 'indian'],
   ['Hot Dog', 'hot_dog'],
   ['Σαλάτα', 'salads'],
   ['Σαντουιτς', 'sandwich'],
   ['Ψητά - Grill', 'psita'],
   ['Πεϊνιρλί', 'peinirli'],
   ['Brunch', 'brunch'],
   ['Vegetarian', 'vegetarian'],
   ['Vegan', 'vegan'],
   ['Θαλασσινό', 'seafood'],
   ['Ασιατικό', 'asian'],
   ['Ιταλικό', 'italian'],
   ['Λουκουμάδες', 'loukoumades'],
   ['Κοτόπουλο', 'kotopoulo'],
];

function generateRandomCategory() {
   return Math.floor(Math.random() * foodCategories.length);
}


document.addEventListener('DOMContentLoaded', () => {
   const button = document.getElementById('button');
   const button_text = document.getElementById('button-text');
   const button_again = document.getElementById('button-again');
   const category_title = document.getElementById('category-title');
   const img = document.getElementById('category-img');
   const efood = document.getElementById('e-food');
   const wolt = document.getElementById('wolt');

   button.addEventListener('click', () => {
      if (efood.classList.contains('hidden') || wolt.classList.contains('hidden')) {
         efood.classList.remove('hidden')
         wolt.classList.remove('hidden')
         button_text.innerHTML = 'Μήπως θέλεις';
         button_again.classList.remove('hidden');
      }


      const index = generateRandomCategory()
      category_title.innerHTML = foodCategories[index][0] + ';';
      img.src = '../icons/' + foodCategories[index][1]  + '.png';
   });
});