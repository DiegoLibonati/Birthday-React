# Birthday React

## Getting Started

1. Clone the repository
2. Join to the correct path of the clone
3. Install node_modules with `npm install` or `yarn install`
4. Use `npm start` or `yarn start` to run the app page

## Description

I made a web application that allows you to see today's birthdays, and how old they are. There is also a button that allows you to clear the active birthdays.

## Technologies used

1. React JS
2. Typescript
3. CSS3

## Libraries used

#### Dependencies

```
"@types/jest": "^29.5.13",
"@types/react": "^18.3.11",
"@types/react-dom": "^18.3.1",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-scripts": "5.0.1",
"web-vitals": "^2.1.4"
```

#### devDependencies

```
"@testing-library/dom": "^10.4.0",
"@testing-library/jest-dom": "^6.6.2",
"@testing-library/react": "^16.0.1",
"@testing-library/user-event": "^14.5.2",
"typescript": "^5.3.3"
```

## Portfolio Link

[`https://www.diegolibonati.com.ar/#/project/Birthday-React`](https://www.diegolibonati.com.ar/#/project/Birthday-React)

## Video

https://github.com/DiegoLibonati/Birthday-App-Page/assets/99032604/fbdd0fc6-3ee9-4624-9d71-9fc706e8042f

## Testing

1. Join to the correct path of the clone
2. Execute: `yarn install`
3. Execute: `yarn test`

## Documentation

From the `data.ts` file found in helpers we are going to get all the information as if it were an API:

```
import { Birthday } from "./entities/entities";

export const birthdays: Birthday[] = [
  {
    id: 1,
    name: "Bertie Yates",
    age: 29,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
  },
  {
    id: 2,
    name: "Hester Hogan",
    age: 32,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg",
  },
  {
    id: 3,
    name: "Larry Little",
    age: 36,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
  },
  {
    id: 4,
    name: "Sean Walsh",
    age: 34,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
  },
  {
    id: 5,
    name: "Lola Gardner",
    age: 29,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
  },
];
```

In the `App.tsx` file we are going to find all the logic of this application. Basically we have a state called `birthdays` in which all the people will be saved and a function `handleClear()` that will be executed when the button is pressed to clean the birthdays that will modify the state `birthday` to an empty array:

```
const [birthdays, setBirthdays] = useState<Birthday[]>(arrBirthdays);

const handleClear: React.MouseEventHandler<HTMLButtonElement> = () => {
  setBirthdays([]);
};
```
