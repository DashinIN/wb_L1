 import * as formatDateTime  from "./index.js"

const formattedDate = formatDateTime(new Date(), 'MMMM Do YYYY, h:mm:ss a');
console.log(formattedDate);