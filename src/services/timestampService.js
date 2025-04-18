class TimestampService {
  static parseDate(dateString) {
    if (!dateString) {
      return { error: "Invalid Date" };
    }

    let date;
    
    try {
      // Check if the input is a Unix timestamp
      if (/^\d+$/.test(dateString)) {
        date = new Date(parseInt(dateString));
      } else {
        date = new Date(dateString);
      }

      // Check if the date is valid
      if (isNaN(date.getTime())) {
        return { error: "Invalid Date" };
      }

      return {
        unix: Number(date.getTime()),
        utc: date.toUTCString()
      };
    } catch (error) {
      return { error: "Invalid Date" };
    }
  }
}

module.exports = TimestampService; 