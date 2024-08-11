export function getEventId(params: Record<string, string>): string {
  if (!params['id'] || isNaN(parseInt(params['id']))) {
    console.error('Invalid event ID');
    throw new Error('Invalid event ID');
  }
  return params['id'];
}
