const { events } = require('./data.json');

export default function handler(req, res) {
  // Precise which method will be use
  if (req.method === 'GET') {
    res.status(200).json(events);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
}
