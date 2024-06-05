Building **Nxt Mart** an e-commerce shopping app with a tailored api.

react concepts used: component, displaying that data, routing concepts, authentication and authorization, and adding responsiveness to the website.

### Prerequisites


#### Design Files

<details>
<summary>Click to view</summary>

- The **Design Files** for different devices <a href="https://www.figma.com/file/lCzPVizW4X1jLqM0niXYkp/Mini-Project---NxtMart" target="_blank">here</a>.

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Some Instructions that I minded creating nxtmart.

<details>
<summary>Functionalities that are added</summary>
<br/>
The app must have the following functionalities

- **Login Route**

  - When an invalid credentials are provided and the **Login** button is clicked, then the respective error message received from the response is displayed
  - When a valid credentials are provided and the **Login** button is clicked,  the page should be navigated to the Home Route
  - When an _unauthenticated_ user tries to access the Home Route and Cart Route,  the page should be navigated to Login Route
  - When an _authenticated_ user tries to access the Home Route and Cart Route, the page should be navigated to the respective route
  - When an _authenticated_ user tries to access the Login Route, then the page is navigated to the Home Route
  - When the **Show Password** checkbox is checked, then the password should be shown
  - When the **Show Password** checkbox is unchecked, then the password should be masked

- **Home Route**

  - When an authenticated user opens the Home Route,

    - An HTTP GET request maded to **nxtMartApiUrl**

      - **_loader_** is displayed while fetching the data
      - After the data is fetched successfully,
        - Users should is able to see product items list as product category wise as shown in the figma screens.
        - Users should is able to see the `Add` button in each product item.
        - If user clicked on the `Add` button in each product item then the users is able to see the increase and decrease quantity count in each product item.
        - If user attempts to reduce the quantity count to "0" will revert the display to the `Add` button.
        - Users should is able to increase or decrease their each product item quantity.
        - Users should is able to see panel on the left side of the page that should display different product categories.
        - Users should  aisble to scroll the each category product items horizontally as shown in the figma screen.
        - If the user selected the product category item on the left side panel based on that the product items list will be visible at the top of the page.
        - When the **Retry** button is clicked, an HTTP GET request should be made to **nxtMartApiUrl**.

- **Cart Route**

  - Users is  able to select the Cart link in the navbar and be able to view their selected product items, each product item quantity, and price of each product item in a separate page.
  - Users should is able to increase or decrease their each product item quantity and price should increase or decrease appropriately.
  - Users should is able to see their order total as shown in figma.
  - Users should is able to see the footer as shown in figma.
  - Users should is able to see Cart with highlighted text in Navbar.
  - Users should is able to see Cart Items even after the app is refreshed, store the data in **<u>Local Storage</u>**.

- **Not Found Route**

  - When a random path is provided as the URL, then the page is navigated to the Not Found Route.

- **Header**

  - When the **website logo** image in the Header is clicked, the page is navigated to the Home Route.
  - When the **Logout** button in the Header is clicked in Home or Cart Route, then the page is navigated to the Login Route.

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


</details>


