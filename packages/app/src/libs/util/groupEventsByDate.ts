import type { Event } from '$types';

export function groupEventsByDate(events: Event[]): Record<string, Event[]> {
  console.log('🚀 | groupEventsByDate | events:', events);
  const groupedEvents: Record<string, Event[]> = {};

  events.forEach((event) => {
    const eventDate = new Date(event.startTime);
    console.log('🚀 | events.forEach | eventDate:', eventDate);

    const dateKey = eventDate.toISOString().split('T')[0];

    if (dateKey) {
      if (!(dateKey in groupedEvents)) {
        groupedEvents[dateKey] = [];
      }
      groupedEvents[dateKey]!.push(event);
    }
  });

  // Sort events within each day
  Object.entries(groupedEvents).forEach(([date, events]) => {
    events.sort((a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime());
  });

  console.log(groupedEvents);

  return groupedEvents;
}
