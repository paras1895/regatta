export default function Spacer({ height = 0 }: { height?: number }) {
  return <div style={{ height: `${height}px` }} />;
}