In this project let's build **Nxt Mart** by applying the concepts we have learned till now. This project allows you to practice the concepts and techniques learned till React Course and apply them in a concrete project.

You will demonstrate your skills by creating an app that will fetch data from an internal server using a component, displaying that data, routing concepts, authentication and authorization, and adding responsiveness to the website.

This is an individual assessment. All work must be your own. You can request for the feedback after your project submission in the discussions.

### Prerequisites

#### UI Prerequisites

<details>
<summary>Click to view</summary>

- What is Figma?
  - Figma is a vector graphics editor and prototyping tool which is primarily web-based. You can check more info on the <a href="https://www.figma.com/" target="_blank">Website</a>.
- Create a Free account in Figma
  - Kindly follow the instructions as shown in <a href="https://www.youtube.com/watch?v=hrHL2VLMl7g&t=37s" target="_blank">this</a> video to create a Free Figma account.
- How to Check CSS in Figma?
  - Kindly follow the instructions as shown in <a href="https://www.youtube.com/watch?v=B242nuM3y2s" target="_blank">this</a> video to check CSS in the Figma screen.
- Export Images in Figma screen
  - Kindly follow the instructions as shown in <a href="https://www.youtube.com/watch?v=NpzL1MONwaw" target="_blank">this</a> video to export images from the Figma screen.
  - Check <a href="https://help.designlab.com/hc/en-us/articles/360011111873-How-do-I-export-images-and-pdfs-from-Sketch-or-Figma-" target="_blank">this</a> reference docs to export images in Figma screen.

</details>

#### Design Files

<details>
<summary>Click to view</summary>

- You can check the **Design Files** for different devices <a href="https://www.figma.com/file/lCzPVizW4X1jLqM0niXYkp/Mini-Project---NxtMart" target="_blank">here</a>.

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>
The app must have the following functionalities

- **Login Route**

  - When an invalid credentials are provided and the **Login** button is clicked, then the respective error message received from the response should be displayed
  - When a valid credentials are provided and the **Login** button is clicked, then the page should be navigated to the Home Route
  - When an _unauthenticated_ user tries to access the Home Route and Cart Route, then the page should be navigated to Login Route
  - When an _authenticated_ user tries to access the Home Route and Cart Route, then the page should be navigated to the respective route
  - When an _authenticated_ user tries to access the Login Route, then the page should be navigated to the Home Route
  - When the **Show Password** checkbox is checked, then the password should be shown
  - When the **Show Password** checkbox is unchecked, then the password should be masked

- **Home Route**

  - When an authenticated user opens the Home Route,

    - An HTTP GET request should be made to **nxtMartApiUrl**

      - **_loader_** should be displayed while fetching the data
      - After the data is fetched successfully,
        - Users should be able to see product items list as product category wise as shown in the figma screens.
        - Users should be able to see the `Add` button in each product item.
        - If user clicked on the `Add` button in each product item then the users should be able to see the increase and decrease quantity count in each product item.
        - If user attempts to reduce the quantity count to "0" will revert the display to the `Add` button.
        - Users should be able to increase or decrease their each product item quantity.
        - Users should be able to see panel on the left side of the page that should display different product categories.
        - Users should be able to scroll the each category product items horizontally as shown in the figma screen.
        - If the user selected the product category item on the left side panel based on that the product items list will be visible at the top of the page.
      - If the HTTP GET request made is unsuccessful, then the failure view should be displayed as shown in the Figma
        - When the **Retry** button is clicked, an HTTP GET request should be made to **nxtMartApiUrl**.

- **Cart Route**

  - Users should be able to select the Cart link in the navbar and be able to view their selected product items, each product item quantity, and price of each product item in a separate page.
  - Users should be able to increase or decrease their each product item quantity and price should increase or decrease appropriately.
  - Users should be able to see their order total as shown in figma.
  - Users should be able to see the footer as shown in figma.
  - Users should be able to see Cart with highlighted text in Navbar.
  - Users should be able to see Cart Items even after the app is refreshed, store the data in **<u>Local Storage</u>**.

- **Not Found Route**

  - When a random path is provided as the URL, then the page should navigate to the Not Found Route.

- **Header**

  - When the **website logo** image in the Header is clicked, the page should be navigated to the Home Route.
  - When the **Logout** button in the Header is clicked in Home or Cart Route, then the page should be navigated to the Login Route.

- Users should be able to view the website responsively in mobile view, tablet view as well

  </details>

<details>
<summary>API Requests & Responses</summary>
<br/>

**loginApiUrl**

#### API: `https://apis.ccbp.in/login`

#### Method: `POST`

#### Request:

```json
{
  "username": "rahul",
  "password": "rahul@2021"
}
```

#### Description:

Returns a response based on the credentials provided

#### Sample Success Response

```json
{
  "jwt_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MTk2Mjg2MTN9. nZDlFsnSWArLKKeF0QbmdVfLgzUbx1BGJsqa2kc_21Y"
}
```

#### Sample Failure Response

```json
{
  "status_code": 404,
  "error_msg": "Username is not found"
}
```

**nxtMartApiUrl**

#### API: `https://run.mocky.io/v3/947e05e1-cd6a-4af9-93e7-0727fba9fec4`

#### Method: `GET`

#### Description:

Returns a response containing the list of all questions

#### Sample Response

```json
{
  "title": "E-Commerce",
  "categories": [
    {
      "name": "Fruits & Vegetables",
      "products": [
        {
          "id": 1,
          "name": "Orange",
          "weight": "1kg",
          "price": "₹100",
          "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_1.jpg"
        },
        "..."
      ]
    "..."
    }
  ]
}
```

</details>

### Quick Tips

<details>
<summary>Click to view</summary>

- Use **HTML Hyperlinks** To navigate to the respective product item lists at the top of the page.

- Use **CSS Stylings** To display each category's product items in a horizontal scroll format.

</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- **Note:**

  - Don't use any third-party packages other than packages mentioned in the **Quick Tips**
  - Use media queries for responsiveness. Instead of rendering the same elements twice for responsiveness.
  - For Mini Projects, You have to use HTML elements to style the React Components. Usage of `styled-components` (CSS in JS) to style React components are not supported in Mini Projects. Test cases won't be passed, if you use styled components.
  - Refer to the below Example for the usage of `data-testid` in the HTML elements
    - Example: `<div data-testid="questionItem" className="question-item"/>`

- **Routes**

  - `Login` Route should consist of `/login` in the URL path
  - `Home` Route should consist of `/` in the URL path
  - `Cart` Route should consist of `/cart` in the URL path

- **Header**

  - The Nxt Mart Logo image in Header should consist of alt attribute value as `website logo`

- **Login Route**

  - The Nxt Mart Logo image should consist of alt attribute value as `login website logo`
  - The Cookies should be set by using the key name `jwt_token`.

- **Home Route**

  - The Nxt Mart image in Navbar should consist of alt text as `website logo`.
  - The add button of the each product item should contain the data-testid with value as `add-button`.
  - Each product item in the product items list should contain the data-testid with value as `product`.
  - The Count of the each product item quantity should contain the data test id with value as `active-count`.
  - The Button which is used to decrement the product item count should contain the test id with value as `decrement-count`.
  - The Button which is used to increment the product item count should contain the test id with value as `increment-count`.
  - The Failure View image should consist of alt attribute value as `failure view`
  - Wrap the `Loader` component with an HTML container element and add the `data-testid` attribute value as **loader** to it

  ```jsx
  <div className="loader-container" data-testid="loader">
    <Loader type="ThreeDots" color="#263868" height={50} width={50} />
  </div>
  ```

- **Cart Route**

  - You have to store the cart data in **<u>Local Storage</u>** only.
  - Add items to Local Storage by using the key name `cartData`.
  - Each cart item in the Cart Route should contain the data-testid with value as `cartItem`.
  - The Button which is used to decrement the food item count should contain the test id with value as `decrement-quantity`.
  - The Button which is used to increment the food item count should contain the test id with value as `increment-quantity`.
  - The quantity of the food item in the Cart Should contain the test id with the value as `item-quantity`.
  - The Total price value should contain the test id with the value as `total-price`.
  - The image in the Empty Cart view should contain the alt text as `empty cart`.
  - Each cart item in the `cartData` should have the key names as mentioned in the given example format strictly.

    Example:

```json
{
  "id": 1,
  "name": "Orange",
  "weight": "1kg",
  "price": "₹100",
  "image": "https://new-assets.ccbp.in/frontend/react-js/nxt-mart-app/image_1.jpg",
  "count": 2
}
```

- **Not Found Route**
  - The Not Found image should consist of alt attribute value as `not found`

</details>

### Project Submission Instructions

- For Mini Projects, you can submit the test cases at your own pace. But we suggest you to submit the code to know the percentage of completion through test cases and that score will be considered for your interviews.

- Also it's important to publish your code frequently using `Step - 4` in the Instructions tab.

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
