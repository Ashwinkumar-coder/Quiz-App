 import Javascript from './Javascript';
import Html from './Html';
import CSS from './Css';
import Bootstrap from './Bootstrap';
import { Routes,Route } from 'react-router-dom';

export default function Routing()
{
    return <div>
        <Routes>
            <Route path="html" element={<Html></Html>  }></Route>
            <Route path="css" element={ <CSS /> }></Route>
            <Route path="bootstrap" element={ <Bootstrap></Bootstrap> }></Route>
            <Route path="javascript" element={ <Javascript></Javascript>}></Route>  
        </Routes>
    </div>
}