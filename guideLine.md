# Project GuideLine

## For Admin

- create Admin only once.
- update password.
- create a product.
- edit a product.
- delete a product.
- delete reviews of product.

## For User

- create an account
- update password
- login
- logout
- delete account
- leave rating on product
- leave review on product

---

## Admin

- email
- password
- Admin: true

## user

- email
- password
- Admin: false

## session

- userId
- valid

## product

- productId
- name
- description
- price
- image
- rate:[rates]
- category
- counts
- reviews :[reviewIds]

## review

- description
- userId
- productId
