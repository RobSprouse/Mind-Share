// COMMENT: Date formatting helper, formats the date to MM/DD/YYYY at HH:MMhrs  (e.g. 01/01/2024 at 0100hrs)
function formatDate(timestamp) {
     const dateObject = new Date(timestamp);
     return `${dateObject.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })} at ${dateObject.getHours().toString().padStart(2, "0")}${dateObject.getMinutes().toString().padStart(2, "0")}hrs`;
 }

// COMMENT: exports the formatDate helper
export default formatDate;
