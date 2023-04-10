import { useState } from 'react'
import Login from './login';
import Register from './register';

const Authen = (props) => {
    const [option, setOption] = useState(true);
    if (option)
        return <Login callback={setOption} {...props}/>;
    return <Register callback={setOption} {...props} />;
}

export default Authen