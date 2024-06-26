export function getInitials(name) {
  const parts = name.split(" ");
  let initials = "";
  for (let part of parts) {
    initials += part[0];
  }
  return initials;
}

export const formatDate = (dateString) => {
  const date = new Date(dateString); // Create a Date object
  const day = date.getDate().toString().padStart(2, "0"); // Get day (0-padded)
  const month = date.toLocaleString("en-US", { month: "short" }); // Get month name (short)
  const year = date.getFullYear(); // Get year

  return `${day} ${month} ${year}`;
};

// this function will return api errors

export const getErrorMessages = (data) => {
  const errorArray = Object.entries(data).map(([field, messages]) => ({
    field,
    messages,
  }));
  const field = errorArray[0].field;
  return `${field} : ${errorArray[0].messages}`;
};
