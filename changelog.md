# Changes

All notable changes to the project will be documented in this file.

## [Task 1. Introduction] - 06.08.2023

### Added

- Created project Angular v16. Project has only one module: AppModule. All components are standalone
- Interaction with the service to get the list of products.
- Ability to view details of each product.
- Ability to add products to the shopping cart.
- Calculation of the total price in the cart.


## [Task 2. Components] - 23.08.2023

### Added

- Changed service communication strategy to Push (using Signals).
- Moved logic for changing data from child to parent component (CartItem --> CartList).
- Ability to change amount of each product in cart (increase/decrease). If product is only one, then button for decreasing is disabled.
- Ability to delete product from cart.
- Calculation of the total amount of products in the cart.
- OnPush Strategy in CartItemComponent.
- Created directive for changing background-color on product card. Added condition: if product isn't available, background-color won't change.
- Used ElementRef and ngAfterViewInit to inner text into title (ProductListComponent).
