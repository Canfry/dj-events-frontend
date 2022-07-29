import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';

export default function HomePage({ events }) {
  // console.log(events);
  return (
    <Layout>
      <h1>Upcoming events</h1>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: {
      events,
      revalidate: 1,
    },
  };
}

// *****************************************

/* // Will execute each time we come to the page
export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  // console.log(events)will show on the terminal(server) not on the client(browser)

  return {
    props: {
      events,
    },
  };
} */
