import { FormEvent, useRef } from "react"
import { CATEGORY_NAME } from "src/client/CATEGORY_NAME"

export const BookMarkEntry = () => {
  const urlRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLSelectElement>(null);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(
      urlRef.current?.value,
      titleRef.current?.value,
      categoryRef.current?.value,
    )
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>URL</label>
          <input ref={urlRef}></input>
        </div>
        <div>
          <label>Title</label>
          <input ref={titleRef}></input>
        </div>
        <div>
          <label>Category</label>
          <select ref={categoryRef}>
            <option hidden>選択してください</option>
            {CATEGORY_NAME.map(category => {
              return (
                <option key={category}>{category}</option>
              )
            })}
          </select>
        </div>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  )
}