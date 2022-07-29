const { events } = require('./data.json');

export default function handler(req, res) {
  // Limit slug to single event
  const djevents = events.filter((djevent) => djevent.slug === req.query.slug);
  // console.log(req.query);
  if (req.method === 'GET') {
    res.status(200).json(djevents);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
}
