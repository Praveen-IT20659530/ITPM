
import ReactQuill from "react-quill";

export default function Editor({ value, onChange }) {
  const modules = {
    
  return (
    <div className="content">
      <ReactQuill
        value={value}
        theme={"snow"}
        onChange={onChange}
        modules={modules}
      />
    </div>
  );
}