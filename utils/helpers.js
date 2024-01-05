// COMMENT: Date formatting helper
function formatDate(timestamp) {
     const dateObject = new Date(timestamp);
     return `${
          dateObject.getMonth() + 1
     }/${dateObject.getDate()}/${dateObject.getFullYear()} at ${dateObject.getHours()}:${dateObject.getMinutes()}`;
}

export default formatDate;
