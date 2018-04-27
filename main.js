// Exercise:
// 1 ---------------------. Create a variable to hold the value of the day of the week.
let dayOfWeek = ""

dayOfWeek = prompt("Enter the day")


// 2 ---------------------. Write a switch statement that will check the value of the variable. The switch statement will console log the following for each day of the week:

// const messageForTheDay = function (dayOfWeek) {
//     switch (dayOfWeek) {
//         case "Monday":
//             console.log("Happy Monday!");
//             break;
//         case "Tuesday":
//             console.log("It's Tuesday. You got this!");
//             break;
//         case "Wednesday":
//             console.log("Hump day already!");
//             break;
//         case "Thursday":
//             console.log("Just one more day 'til the weekend!");
//             break;
//         case "Friday":
//             console.log("Happy Friday!");
//             break;
//         case "Saturday":
//             console.log("Have a wonderful Saturday!");
//             break;
//         case "Sunday":
//             console.log("It's Sunday, time to relax!");
//             break;

// 3 --------------------- Challenge:
// Add a default case to the switch statement that console logs "Please specify a day of the week." Change the value of your variable to see your default case being executed.

//        default:
//             console.log("Please specify a day of the week.")
//     }
// }


// 4 --------------------- Advanced Challenge:
// Change the switch statement so that for all weekdays, it console logs "Weekday" and for Saturday and Sunday, it console.logs "Weekend"
const messageForTheDay = function (dayOfWeek) {
    switch (dayOfWeek) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            console.log("Weekday");
            break;
        case "Saturday":
        case "Sunday":
            console.log("It's the weekend");
            break;
       default:
            console.log("Please specify a day of the week.")
    }
}

messageForTheDay(dayOfWeek)