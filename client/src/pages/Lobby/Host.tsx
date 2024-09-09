import {useState} from 'react'
import { toast } from 'react-hot-toast';
import copy from 'copy-to-clipboard';

const Host = () => {

  const [docId, setDocId] = useState<string>('Document ID will be generated here');

  const copyID = (e) => {
    e.target.select();
    copy(docId);
    toast.success('Document ID Copied');
  }

  const createDocument = () => {
    const id = Math.random().toString(36).substr(2, 9);
    setDocId(id);
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center h-[60vh]">
        <button className="font-bold px-20 py-2 text-lg shadow-md text-[white] bg-primary" onClick={createDocument} >Create New Document</button>
        <input type="text" className="border-[1px] border-primary mt-4 w-[90%] md:w-[50%] lg:w-[30%] py-4 px-3 text-center outline-none" placeholder="Document ID will be generated here" value={docId} onClick={copyID} readOnly />
      </div>
    </>
  )
}

export default Host
