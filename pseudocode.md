# React Random Restaraunt #

## ABOUT ## 
- Dynamic restaraunt Menu with items fetched from an API using Axios calls
  <br>
- Using Bootstrap for mobile responsiveness
  <br>
- Dynamically renders at least 15 different menu items
  <br>
- Choose a specific menu section to display (appetizers, pasta, sandwiches, dessert, etc.)
  <br>
- Each menu section is an organism, and each menu item is a molecule (refer Atomic Design)
  <br>
- Uses JS React library to manage react component state

## Atomic Design 
- *ATOMS*
    - Main heading with restaraunt name
    - Menu name descriptions
    - Food Name
    - Food Description
    - Food price
    - Address
    - Hours of operation
- *MOLECULES*
    - Each menu item collectively put together containing the name, description, and price
    - Group of menu selections in navbar
- *ORGANISM*
    - Each specific menu with all the different menu items
    - Navbar with Restaraunt name and menu selection functionality
    - Footer at bottom showing address and hours of operation
 
## MoSCoW :
- *MUST HAVE*
    - Heading displaying restaraunt name
    - Address displayed somewhere on page
    - Hours of operation somewhere on page
    - Minimum of 15 different menu items
    - Mobile responsiveness
    - Style
- *SHOULD HAVE*
    - Be public so others can see it
    - Different containers or bootstrap cards for menu items showing food name, description, and price
    - Functionality to add items to cart
- *COULD HAVE*
    - Emojis for spicy level /favorite dish
    - Change menu display based on time of day
    - Use NPM to embed google map showing location of restaraunt
    - Display daily specials for current day, yesterday, and tomorrow
    - Some kind of online ordering system
- *WONT HAVE*

## VARIABLES / COMPONENTS : 
  1. **HEADING COMPONENT**
        * React component
        * Displayed at the top of the page, text is Restaraunt's name
        * No props or dynamic scripting needed, text stays the same
  2. **FOOTER COMPONENT**
        * React component
        * Display at the bottom of the page, text is restaraunt address and hours of operation
        * No props or dynamic scripting needed, text will stay the same everyday
  3. **NAVBAR COMPONENT**
        * React component
        * Displayed under heading component
        * Will have several buttons for menu selection (appetizers, burgers, pasta, etc.) <- ***Array***
        * Each button will have onClick functionality to display user selection in the main part of the menu ***useState and useEffect (API calls)***
  4. **MENU COMPONENT**
        * React component
        * Menu items dynamically change based on user selection and current state

### ALL OF THE ABOVE WILL BE INSERTED INTO APP.JS WHICH WILL USE REACT.DOM TO RENDER THE ELEMENTS TO INDEX.HTML DOM ###

## FUNCTIONS : 
  1. **handleClick()**
       - user CLICKS menu selection button
       - SET state
       - FETCH data based on current state
       - RETURN DATA
  2. **updateMenu()**
       - will be inserted into the handleClick function
       - once data is retrieved from the API, pass the data on to necessary menu items
       - these can be used a proprs?
