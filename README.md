# :shopping: E-Commerce Project

> This is my personel hobby project. I built this web app to improve my Next.js & TailwindCSS skills.

## :hammer_and_wrench: Tech Stack

* Next.js
* TailwindCSS
* MongoDB
* Redux Toolkit
* Next-Auth
* Formik
* Yup

## :video_camera: Project Video

https://user-images.githubusercontent.com/73464481/220875067-e7ee059d-e701-43b6-ae6d-6690b5a92334.mp4

## :mag: Features

* I created database with 50 products with random price and categories.
* Search and list products based on the filters.
* Add & remove product from cart.
* The total number of items added to the cart is shown in the navbar.
* The total price of the products in the cart is displayed on the order page.
* Register & login user.

## :floppy_disk: Database

Products Collection

```
{
    color: String,
    gender: String,
    imageUrl: String,
    name: String,
    price: String,
    productCode: String,
    type: String,
}
```

Users Collection

```
{
   email: String,
   password: String,
}
```
