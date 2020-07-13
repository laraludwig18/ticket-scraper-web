export default function base64encode(string: string): string {
  return Buffer.from(string).toString('base64');
}
