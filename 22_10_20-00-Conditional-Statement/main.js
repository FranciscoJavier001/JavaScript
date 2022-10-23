// Switch Statement

const day = 'friday'

switch (day) {
    case 'monday':
        console.log(`Plan course structure`);
        console.log(`Go to coding meetup`);
        break;
    case 'tuesday':
        console.log(`Prepare theory videos`);
        break;
    case 'wednesday':
    case 'thursday':
        console.log(`Write code examples`);
        break
    case 'friday':
        console.log(`Record videos`);
        break;
    case 'saturday':
    case 'sunday':
        console.log(`Enjoy the weekend :D`);
        break;
    default:
        console.log(`Not a valid day!`);
}

if (day === 'monday') {
    console.log(`Plan course structure`);
    console.log(`Go to coding meetup`);
} else if (day === 'tuesday') {
    console.log(`Prepare theory videos`);
} else if (day === 'wednesday' || day === 'thursday') {
    console.log(`Write code examples`);
} else if (day === 'friday') {
    console.log(`Record videos`);
} else if (day === 'saturday' || day === 'sunday') {
    console.log(`Enjoy the weekend :D`);
} else {
    console.log(`Not a valid day!`);
}

const age = 9
age >= 18 ? console.log(`I like mangoose beer`) : console.log(`You're Underage`);

if (age >= 18) { //** That's the same statement */
    xD = `Major`;
} else {
    xD = `Underage`;
}
console.log(xD);

console.log(`I like to drinl ${age >= 18 ? `wine` : `water`}`); //** Interesting way to do */