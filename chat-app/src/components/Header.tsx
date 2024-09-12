
import '../app/style/header.css'
function Header() {
  return (
   <header className='mt-10 pl-40 w-11/12'>
       <div>
            <ul className='flex justify-between items-center'>
                <div className='image'>
                <li><a href="#"><img src="/icons/next.svg" alt="logo"  /></a></li>
                </div>
                 <div className='side-div flex justify-center items-center gap-10'> 
                      <li><a href="#">About</a></li>
                      <li><a href="#">Plans</a></li>
                      <div className="signup border-solid border-2 border-blue-700 rounded-md p-1">
                      <li><a href="#" className='p-3 text-blue-700'>Signup</a></li>
                      </div>
                    
                 </div>
            </ul>         
       </div>
   </header>
  )
}

export default Header