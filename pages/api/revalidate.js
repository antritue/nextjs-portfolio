const handler = async (req, res) => {
  if (req.query.secret !== process.env.NEXT_PUBLIC_REVALIDATE_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  // Home page
  try {
    await res.revalidate('/');
  } catch (err) {
    console.log(err);
    return res.status(500).send('Error revalidating homepage');
  }

  return res.json({ revalidated: true });
};

export default handler;
