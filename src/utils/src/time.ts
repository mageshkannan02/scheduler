export const formatTime = (
    date: string | number | Date,
    format: string = "HH:mm:ss"
  ): string => {
    const d = new Date(date);
    if (isNaN(d.getTime())) return "Invalid Time";
  
    const pad = (num: number) => num.toString().padStart(2, "0");
  
    const hours = pad(d.getHours());
    const minutes = pad(d.getMinutes());
    const seconds = pad(d.getSeconds());
    const ampm = d.getHours() >= 12 ? "PM" : "AM";
    const hours12 = pad(d.getHours() % 12 || 12); // Convert to 12-hour format
  
    return format
      .replace("HH", hours) // 24-hour format
      .replace("hh", hours12) // 12-hour format
      .replace("mm", minutes)
      .replace("ss", seconds)
      .replace("A", ampm);
  };
  