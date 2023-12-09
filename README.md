# Birthday-App-Page

## Getting Started

1. Clone the repository
2. Join to the correct path of the clone
3. Install node_modules with npm install
4. Use npm start to run the app page

## Description

I made a web application that allows you to see today's birthdays, and how old they are. There is also a button that allows you to clear the active birthdays.

## Technologies used

1. React JS
2. CSS3

## Video

https://user-images.githubusercontent.com/99032604/198900667-923911ef-2e5e-4cd8-ba0a-7d34dc907b19.mp4

## Documentation

From the `data.js` file found in helpers we are going to get all the information as if it were an API:

```
export default [
    {
      id: 1,
      name: 'Bertie Yates',
      age: 29,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
    },
    {
      id: 2,
      name: 'Hester Hogan',
      age: 32,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
    },
    {
      id: 3,
      name: 'Larry Little',
      age: 36,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    },
    {
      id: 4,
      name: 'Sean Walsh',
      age: 34,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    },
    {
      id: 5,
      name: 'Lola Gardner',
      age: 29,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    },
  ];
```

In the `App.js` file we are going to find all the logic of this application. Basically we have a state called `people` in which all the people will be saved and a function `handleClear()` that will be executed when the button is pressed to clean the birthdays that will modify the state `people` to an empty array:

```
const [people, setPeople] = useState(data)

const handleClear = () => {
  setPeople([])
}
```
