// AI (DeepSeek) đôi khi trả lời kèm **chữ đậm** kiểu Markdown.
// Component này chỉ xử lý **...** thành <strong>, không dùng dangerouslySetInnerHTML.
export default function MarkdownLite({ text }) {
  const parts = String(text ?? '').split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? <strong key={i}>{part.slice(2, -2)}</strong> : part
  )
}
