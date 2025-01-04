export function Input({placeholder, reference}: {placeholder:string; reference: any}) {
    return <div>
        <input ref={reference} placeholder={placeholder} type={"text"} className="px-2 py-2 border rounded m-2"></input>
    </div>
}