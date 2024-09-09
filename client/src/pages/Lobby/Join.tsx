import {useState} from 'react'

const Join = () => {

  const [docId, setDocId] = useState<string>('Document ID will be generated here');

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <form className="flex flex-col justify-center items-center h-[60vh]" onSubmit={handleSubmit}>
        <input type="text" className="border-[1px] border-primary mb-6 w-[90%] md:w-[50%] lg:w-[30%] py-4 px-3 text-center outline-none" placeholder="Enter Document ID" value={docId} onChange={(e) => {setDocId(e.target.value)}} />
        <button type="submit" className="font-bold px-20 py-2 text-lg shadow-md text-[white] bg-primary" >Join Document Room</button>
      </form>
    </>
  )
}

export default Join
