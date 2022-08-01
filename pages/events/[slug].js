import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';

export default function EventPage({ evt }) {
  return (
    <Layout>
      <h1>{evt.name}</h1>
    </Layout>
  );
}

// export async function getServerSideProps({ query: { slug } }) {
//   console.log(slug);
//   const res = await fetch(`${API_URL}/api/events/${slug}`);
//   const events = await res.json();

//   return {
//     props: { evt: events[0] },
//   };
// }

export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  const paths = events.map((evt) => ({
    params: { slug: evt.slug },
  }));

  return {
    paths,
    fallback: true, // If false will return 404 if path is not found
  };
}

export async function getStaticProps({ params: { slug } }) {
  console.log(slug);
  const res = await fetch(`${API_URL}/api/events/${slug}`);
  const events = await res.json();

  return {
    props: { evt: events[0] },
    revalidate: 1,
  };
}
