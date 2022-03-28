# Software Requirements

Remove the _emphasized_ statements as they get completed, they are placeholders.
_all sections of this file were pulled from 'Common Curriculum/projects/SoftwareReqs'_  

## Vision

_(minimum 3-5 sentence)_  
_Product Vision statement_  
_Pain Point Solution statement_  
_Statement as to why would anyone should care?_  

### In Scope

_describe individual features product WILL do_  
_high level overview of each feature_  
_at least 4-5 features_  
_we do NOT need to do OUT OF SCOPE_  

### MVP Features

_what will the MVP features be?_  
_list any stretch goals there are_  

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
