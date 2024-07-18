import {fadeIn, createDiv, appendImage, appendText} from './domController.js'
import first_menu_banner from '../img/first-menu-banner.jpg';
import second_menu_banner from '../img/second-menu-banner.jpg';
import third_menu_banner from '../img/third-menu-banner.jpg';

function addSmoothScroll() {
    document.querySelectorAll('.menu-nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

function renderMenuPage() {
    
    const menuSections = [
        { name: "first", title: "SALADS", banner: first_menu_banner },
        { name: "second", title: "WARM BOWLS", banner: second_menu_banner },
        { name: "third", title: "SANDWICHES", banner: third_menu_banner }
    ];

    //Render Menu Navigation
    const nav = createDiv(content, "menu-nav");

    menuSections.forEach(section => {
        const link = document.createElement('a');
        link.href = `#${section.name}-section`;
        link.textContent = section.title;
        nav.appendChild(link);
    });

    //Render Menu Section
    menuSections.forEach(section => {

        const bannerDiv = createDiv(content, `${section.name}-menu-banner`);

        const sectionDiv = createDiv(content, `${section.name}-section`);
        sectionDiv.id = `${section.name}-section`; // Add id for scrolling
        
        const menuItemDiv = createDiv(content, `${section.name}-menu-item`);
        
        appendImage(bannerDiv, section.banner);
        appendText('h2', menuItemDiv, [section.title]);

        const menuItemList = createDiv(menuItemDiv, `menu-item-list-${section.name === "first" ? "1" : section.name === "second" ? "2" : "3"}`);
        
        getDishes(section.name).forEach(dish => {
            const menuItem = createDiv(menuItemList, "dish");
            appendText('h3', menuItem, [dish.name]);
            appendText('h4', menuItem, [`${dish.calories} CAL`]);
            appendText('p', menuItem, [dish.ingredients]);
        });
    });

    addSmoothScroll();
}

function getDishes(sectionName) {
    // You can move your dish data to a separate file and import it if it's large
    const dishData = {
        first: [
            {
                name: "BEETNIK",
                ingredients: "mixt greens, arugula, roasted golden beets, avocado, goat cheese, toasted walnuts, dried cranberries, shaved fennel, savory herbs, balsamic vinaigrette",
                calories: 620
              },
              {
                name: "FALAF 2.0",
                ingredients: "mixt greens, falafel, roasted cauliflower, avocado, grapes, cucumbers, chickpeas, fresh herbs, lemon tahini vinaigrette",
                calories: 430
              },
              {
                name: "ORCHARD",
                ingredients: "kale, mixt greens, grilled chicken, applewood smoked bacon, apples, sharp cheddar, avocado, toasted almonds, savory herbs, balsamic vinaigrette",
                calories: 905
              },
              {
                name: "COWBOY",
                ingredients: "romaine hearts, grilled chicken, fresh red peppers, black beans, sharp cheddar, scallions, point reyes blue cheese dressing with a chipotle honey drizzle",
                calories: 515
              },
              {
                name: "MIXT COBB",
                ingredients: "butter lettuce, grilled chicken, applewood smoked bacon, blue cheese, avocado, cherry tomatoes, egg, savory herbs, champagne vinaigrette",
                calories: 675
              },
              {
                name: "MIXT CAESAR",
                ingredients: "romaine hearts, shaved parmesan, avocado, radishes, garlic herb croutons, savory herbs, caesar dressing",
                calories: 450
              },
              {
                name: "BACHELOR",
                ingredients: "mixt greens, arugula, grilled flat iron steak, blue cheese, herb roasted potatoes, cherry tomatoes, savory herbs, balsamic vinaigrette, topped with caramelized onions and breadcrumbs",
                calories: 670
              },
              {
                name: "PUEBLA",
                ingredients: "romaine hearts, cabbage, grilled chicken, avocado, spiced honey roasted sweet potatoes, sharp cheddar, pumpkin seeds, jicama, scallions, roasted poblano dressing",
                calories: 660
              },
              {
                name: "MANDARIN",
                ingredients: "romaine hearts, kale, grilled chicken, cabbage, oranges, spiced candied almonds, snow peas, jicama, spicy sesame seeds, fresh herbs, miso ginger vinaigrette",
                calories: 390
              }
        ],
        second: [
            {
                "name": "DAVE'S TACO BOWL",
                "calories": 800,
                "ingredients": "cilantro lime brown rice, cabbage, grilled achiote chicken, avocado, cotija cheese, black beans, chipotle crema, salsa verde, lime squeeze"
            },
            {
                "name": "MEDITERRANEAN BOWL",
                "calories": 820,
                "ingredients": "rainbow quinoa, cabbage, grilled chicken, avocado, feta, zaatar pita crisps, walnuts, dried currants, pickled red onions, fresh herbs, red pepper walnut drizzle"
            },
            {
                "name": "BACHAN'S BOWL",
                "calories": 890,
                "ingredients": "cilantro lime brown rice, arugula, cabbage, grilled chicken, avocado, edamame, cucumbers, radishes, scallions, ginger sesame drizzle, Bachan’s Japanese Barbecue Sauce drizzle"
            },
            {
                "name": "SPICY FALAFEL BOWL",
                "calories": 805,
                "ingredients": "cilantro lime brown rice, cabbage, falafel, feta, cherry tomatoes, cucumbers, lentils, pickled red onions, lemon tahini drizzle, MIXT hot sauce"
            },
            {
                "name": "CURRY CHICKEN SALAD BOWL",
                "calories": 705,
                "ingredients": "cilantro lime brown rice, cabbage, curry chicken salad, carrots, cucumbers, radishes, savory herbs, mango drizzle"
            }
        ],
        third: [
            {
                "name": "NAPA",
                "calories": 650,
                "ingredients": "grilled chicken, sliced seasonal apple, sharp cheddar, basil pesto, arugula, aïoli, on a torpedo roll"
            },
            {
                "name": "PARK",
                "calories": 510,
                "ingredients": "marinated organic tofu, avocado, MIXT chipotle honey slaw, aïoli, on a torpedo roll"
            },
            {
                "name": "MADRAS",
                "calories": 460,
                "ingredients": "curry chicken salad, cabbage, cucumbers on a torpedo roll"
            }
        ]
    };

    return dishData[sectionName];
}

export default renderMenuPage