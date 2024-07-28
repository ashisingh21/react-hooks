import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <Link style={{ borderRadius: "6px", background: 'blue', margin: '10px', padding: '10px', color: 'white', textDecoration: 'none' }} to="/useRef"> Use Ref Hook</Link>
            <Link style={{ borderRadius: "6px", background: 'blue', margin: '10px', padding: '10px', color: 'white', textDecoration: 'none' }} to="/useMemo"> Use Memo Hook</Link>
            <Link style={{ borderRadius: "6px", background: 'blue', margin: '10px', padding: '10px', color: 'white', textDecoration: 'none' }} to="/useReducer"> Use Reducer Hook</Link>
            <Link style={{ borderRadius: "6px", background: 'blue', margin: '10px', padding: '10px', color: 'white', textDecoration: 'none' }} to="/useContext"> Use Context Hook</Link>
            <Link style={{ borderRadius: "6px", background: 'blue', margin: '10px', padding: '10px', color: 'white', textDecoration: 'none' }} to="/useCallback"> Use Callback Hook</Link>
        </div>
    )
}

export default Home