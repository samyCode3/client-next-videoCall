import '../app/style/main.css'
function Main() {
  return (
   <main className='mt-40 w-11/12'>
    <div className="video-dec flex items-center justify-evenly w-11/12">
       <div className="bring-people flex flex-col px-32 w-3/5 gap-10"> 
            <div className="h1-section w-7/12">
                <h1 className='text-5xl font-bold'>Bring people together to make tickcles happen</h1>
            </div>
            <div className="small w-7/12">
                 <p className='text-sm font-semibold'>Revolutionary video calling app for design and code reviews. With Tikcle, you ‘ll never to leave you house again.</p>
            </div>
            <div className="btn">
                 <button className='bg-blue-800 p-2 text-white border-solid border-2 border-blue-700 rounded-md'>Get Started</button>
            </div> 
       </div>

       <div className="img-section ">
            <img src="/images/amico.png" alt="" />
       </div>
       </div>

   </main>
  )
}

export default Main