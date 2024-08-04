/**
 * Generates a random event name.
 * @returns {string} A randomly generated event name.
 */
export function randomEventName(): string {
  const adjectives = ['Exciting', 'Annual', 'Grand', 'Spectacular', 'Innovative'];
  const nouns = ['Conference', 'Festival', 'Workshop', 'Gala', 'Symposium'];
  return `${adjectives[Math.floor(Math.random() * adjectives.length)]} ${nouns[Math.floor(Math.random() * nouns.length)]}`;
}

/**
 * Generates a random event description.
 * @returns {string} A randomly generated event description.
 */
export function randomEventDescription(): string {
  const descriptions = [
    'Join us for an unforgettable experience!',
    'Discover new opportunities and connect with industry leaders.',
    'Expand your knowledge and skills in this interactive event.',
    'Celebrate innovation and creativity with like-minded individuals.',
    'Engage in thought-provoking discussions and hands-on activities.',
  ];
  return descriptions[Math.floor(Math.random() * descriptions.length)]!;
}

/**
 * Generates a random event location.
 * @returns {string} A randomly generated event location.
 */
export function randomEventLocation(): string {
  const cities = ['New York', 'London', 'Tokyo', 'Paris', 'Sydney'];
  const venues = ['Convention Center', 'Grand Hotel', 'City Hall', 'University Campus', 'Tech Hub'];
  return `${cities[Math.floor(Math.random() * cities.length)]} ${venues[Math.floor(Math.random() * venues.length)]}`;
}

/**
 * Generates a random event capacity.
 * @returns {number} A randomly generated event capacity between 50 and 1000.
 */
export function randomEventCapacity(): number {
  return Math.floor(Math.random() * (1000 - 50 + 1)) + 50;
}

/**
 * Generates a random event time.
 * @returns {string} A randomly generated event time in the format "HH:MM AM/PM".
 */
export function randomEventTime(): string {
  const hours = Math.floor(Math.random() * 12) + 1;
  const minutes = Math.floor(Math.random() * 4) * 15;
  const ampm = Math.random() < 0.5 ? 'AM' : 'PM';
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${ampm}`;
}

/**
 * Generates a random date and time for an event within the next year.
 * @returns {string} A randomly generated date and time in the format "YYYY-MM-DDTHH:mm:ss".
 */
export function randomDateTime(): string {
  const now = new Date();
  const futureDate = new Date(now.getTime() + Math.random() * 365 * 24 * 60 * 60 * 1000);

  const year = futureDate.getFullYear();
  const month = String(futureDate.getMonth() + 1).padStart(2, '0');
  const day = String(futureDate.getDate()).padStart(2, '0');
  const hours = String(futureDate.getHours()).padStart(2, '0');
  const minutes = String(futureDate.getMinutes()).padStart(2, '0');

  return `${year}-${month}-${day}T${hours}:${minutes}`;
}
