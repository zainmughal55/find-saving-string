// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let test = [
  'Get 25% Off Select Items plus 20% Off Sale! Offer Valid 3/28/2021 - 4/5/2021!',
  'Save $40 on JBL Tune 600 BT Headphones!',
  'Sign Up For SMS And Enjoy $10 Off Your Order Of $100 or more!',
  'Shop 250 or more New Spring Arrivals plus Free Shipping On Orders $50 or more With Code: FREESHIP',
  'Get Extra 8% discount for Video Games Products on Tomtop.com',
  'Save $50 off orders $500 or more at Dr. Fuhrman with code LS50OFF500! Shop now!',
  'Shop Gifts Under $200 plus Free Shipping On Orders $50 or more With Code: FREESHIP',
  'Cutters | Take an Extra 10% Off Outlet!',
  'K-Supreme Plus Brewer Now Only $189.99 at Keurig! Valid 3/28-4/4!',
  'Buy More Save More! Save $4 off 2 Boxes of with code TRYMORE28 at Keurig, Valid from 3/30-4/4!',
  'Get Hosting for $1.00*/mo with GoDaddy!',
  'Start the week with deals on games selected by the players!'
];

const savings = test.map(str => {
  const dollar = str.match(new RegExp(/\$+\d*/gi));
  if (dollar?.length > 1) {
    return dollar[0] > dollar[1] ? dollar[1] : dollar[0];
  }
  const percent = str.match(new RegExp(/\d+%/g))?.[0];
  if (!percent && dollar?.[0]) {
    return dollar[0];
  }
  return percent ?? 'BEST';
});
console.log(savings);
