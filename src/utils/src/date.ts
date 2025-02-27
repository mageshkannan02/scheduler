export const formatDate = (
    date: string | number | Date,
    format: string = "YYYY-MM-DD"
  ): string => {
    // Convert input to a Date object
    const d = new Date(date);
  
    // Return "Invalid Date" if the input is not a valid date
    if (isNaN(d.getTime())) return "Invalid Date";
  
    // Function to add leading zero for single-digit numbers
    const pad = (num: number) => num.toString().padStart(2, "0");
  
    // Get date components
    const year = d.getFullYear();
    const month = pad(d.getMonth() + 1); // Months are 0-based
    const day = pad(d.getDate());
    const hours = pad(d.getHours());
    const minutes = pad(d.getMinutes());
    const seconds = pad(d.getSeconds());
  
    // Replace format placeholders with actual values
    return format
      .replace("YYYY", year.toString())
      .replace("MM", month)
      .replace("DD", day)
      .replace("HH", hours)
      .replace("mm", minutes)
      .replace("ss", seconds);
  };
  