import Layout from '@/components/Layout';
import { API_URL } from '@/config/index';
import EventItem from 'components/EventItem';

export default function EventsPage({ events }) {
  console.log(events);
  return (
    <Layout>
      <h1>Events</h1>
      <hr />
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  return {
    props: {
      events,
      // Static props will render at build time add revalidate (1s) so it re-validates after 1s if data changes.
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
