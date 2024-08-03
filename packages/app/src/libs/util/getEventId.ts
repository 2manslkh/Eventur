export function getEventId(params: Record<string, string>): number {
  if (!params['id'] || isNaN(parseInt(params['id']))) {
    console.error('Invalid event ID');
    throw new Error('Invalid event ID');
  }
  return parseInt(params['id']);
}
