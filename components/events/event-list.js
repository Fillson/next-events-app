import EventItem from "./event-item";

import classes from "./event-list.module.css";

function EventList(props) {
  const { items } = props;
  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem
          title={event.title}
          date={event.date}
          location={event.location}
          image={event.image}
          id={event.id}
          key={event.id}
        />
      ))}
    </ul>
  );
}

export default EventList;
