import "../index.css"

export function InputUpdate({label, placeholder, onChange, value, name}){
    return(
        <div className="flex flex-col gap-y-2">
            <label 
            className="text-[#C5C5C5] text-lg">{label}</label>
            <input className="bg-transparent border-b-2 w-60 placeholder-[#606060] border-table text-white" type="text" placeholder={placeholder} onChange={onChange} value={value} name={name}/>
        </div>
        )
}