# Requirements

## Software Requirements

- Git clone from repository.
- Use web server that's compatible with HTML, CSS, and JS if hosting is needed.

### To develop/contribute to this project

- git clone the repository.
- Use an IDE (i.e. VSCode).
- Install JS linter.
- Retain MIT license file with any changes that made.

## Vision

We want to make computer shopping easier for ALL users. We use visual aids to assist end-users to build a computer that meets their needs. Users may not know what the components are, and we take out the hassle of descriptors with visual aids and easy-to-understand language. It's a unique and effective way to help ANY computer user build and buy a custom computer.

### In Scope

- Create front page with the ability to choose a path.
- Allow the user to build a computer with visual aids.
- The user can customize which components they want with slideshow images.
- View the shopping cart with a list of selected components.

### MVP Features

The minimum functionality we want to present

1. Provide 3 paths to help users build a computer appropriate to their needs.
2. Able to build pc from listed components using visual aids and easy-to-understand terminology.
3. See chosen components in shopping cart as a list with total cost.
4. Have an about us page to describe the owners.

Stretch goals:

- User changes their mind about what needs they need and the site updates local storage with the newly selected path.
- Animations of buttons, tables, design elements.
- Buying multiple pc's, update the site's ability to buy more than one pc.

## Functional Requirements

1. A user can build a new computer and have it shipped, by selecting images of components.
2. A user can build a new computer following their specific desires, such as a gaming PC at a premium price with highest performance components.
3. A user can build a new computer appropriate for office or college use, at a standard price with capable components.
4. A user can build a new computer appropriate for casual computing, at a discounted price.

### Data Flow

1. User lands on the home page and the website shows a list of computer profiles that they are able to choose from to customize.
2. When the user clicks a build profile that matches their desire, that selection is stored in local storage. The website loads the ‘build area’ page based on their selection.
3. In the build area page the user will be presented with a baseline ‘recommended’ set of components:

- User can choose to go with the recommendations as they are on screen. The computer object is updated with the recommended parts on page load.
- User can choose selected components that meet their needs or desires from the components displayed on screen. The object is updated as the user chooses new components and replaces the current item(s).
- In either case the website will show the user the list of components they selected in a list below the categorical images of components.

4. When the user is done selecting components, they click a checkout button that stores their selections and loads the ‘shopping cart’ page with the object’s properties.

5. The shopping cart page loads locally stored data and shows the following in the shopping cart table:

- List containing each component selected and its cost properties.
- A grant total summing all components cost.
- A build-and-deliver estimate is presented to the user.
- The website thanks the user for their patronage and provides a link to the ‘about us’.
