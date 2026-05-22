
import {Bookmark} from 'lucide-react'


function App() {


  return (
    <>
      <div className='parent'>
      <div className="card">
        <div className="top">
          <img src="https://imgs.search.brave.com/65LyR07DQNDQcbr2dhhceuJPOLOWtKta2KqXNBtDiaQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDc3NzEy/MjQucG5n" alt="img" />
          <button>save <Bookmark size={12}/></button>
        </div>

        <div className="center">
          <h3>Amazon <span>5 days ago</span></h3>
          <h2>Senior UI/UX Designer</h2>
          <div className='tag'>
            <h4>Part-Time</h4>
            <h4>Senior Level</h4>
          </div>

        </div>

        <div className="bottom">
          <div>
            <div>$120/hr</div>
            <div><h5>Mumbai India</h5></div>
          </div>
          <button>Apply Now</button>
        </div>

      </div>
      </div>
    </>
  
  )
}

export default App
