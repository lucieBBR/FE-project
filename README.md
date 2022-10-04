# Getting Started 

## Install and run the dependencies


### `TERMINAL`

- Run `npm` in **Animal-Cards** .
- Type cd **user-side** and, again, run `npm`.

*(if you work with yarn, type yarn instead npm).


## Data Base

### `TERMINAL`

- Type `mysql -u root -p` for acces to MySQL.
- Create a data base with the name : `AniamlCards`.


### `PROYECT`

- Add and env. file with this information inside:

DB_HOST=localhost
DB_USER=YOURUSERNAME
DB_PASS=YOURPASSWORD
DB_NAME=AnimalCards

- change the user and pass for your username and password to SQL cli


### `TERMINAL`

- `npm`run migrate.
*(if you work with yarn, type yarn instead npm).

- The tables should look like this:
![data base](../public/images/DB%20design.png)


## Run start

### `TERMINAL`

- Type`npm` run start in **Animal-Cards** .
- Type cd **user-side** and, again, `npm` run start.

*(if you work with yarn, type yarn instead npm).


- Server directory: http://localhost:5000/
- Client directory: http://localhost:3000/


______________________________________________________________________________________________

# Briefing
The main **objective** of this project is to increase and complement the information of the animals and regions that appears in the Desnaturalitzats documentaries.

The app is divided in two parts: the **user** and the **admin** sides.

- `HOW THE USER SIDE LOOKS LIKE`
**missing** a view with the list of all the animals there are in each region.

![main view](../public/images/view_main_page.png)
![not found view](../public/images/view_notFound.png)
![animal card view](../public/images/view_animal_card.png)
![Api view](../public/images/view_api_RedList.png)




- `HOW THE ADMIN SIDE LOOKS LIKE`
![form_post](../public/images/view_form_post.png)
**missing**
![form_update](../public/images/view_form_update.png)
![form_error](../public/images/view_form_error.png)

- `FLOW DIAGRAM`
![flow diagram](../public/images/flow%20diagrama.pdf)

### Done

- Data Base.
- Main view.
- Animal Card.
- Search view.

### Feature extension project - Done

- Admin login + Login View - at http://localhost:5000/admin-login - admin created in init-db.sql
- Admin view with AddAnimalForm component (form to add new animal; region dropdown menu info from the form is not being posted yet).
- Image upload as part of the AddAnimalForm.
- Navbar with Home, AddContent, and Logout.
- Delete button in Animal Card to delete the animal.
- Animal Deleted View showing message when animal deleted.
- Clickable logo to homepage.


### To do

- Back end for the List view.
- The List View is not done (you have to change the information and work with the junction table).
- Api view and fetch.
- Page for admin to update the animal information.
- Carousel in Animal Card - need to update the function to switch between animals to change based on index instead of id.
- Add Animal fom - the info from the regions dropdown menu has to be posted to backend (junction table).



