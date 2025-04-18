const TimestampService = require('../services/timestampService');

class TimestampController {
  static getTimestamp(req, res) {
    try {
      const { date } = req.params;
      const result = TimestampService.parseDate(date);
      
      if (result.error) {
        return res.status(400).json({ error: "Invalid Date" });
      }
      
      return res.json(result);
    } catch (error) {
      return res.status(400).json({ error: "Invalid Date" });
    }
  }

  static getCurrentTimestamp(req, res) {
    try {
      const currentDate = new Date();
      return res.json({
        unix: Number(currentDate.getTime()),
        utc: currentDate.toUTCString()
      });
    } catch (error) {
      return res.status(400).json({ error: "Invalid Date" });
    }
  }
}

module.exports = TimestampController; 