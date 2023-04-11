import { useState } from 'react';
import Login from './login';
import Register from './register';

const Authen = (props) => {
    const [option, setOption] = useState(true);
    return option ? (
        <Login callback={setOption} {...props} />
    ) : (
        <Register callback={setOption} {...props} />
    );
};

export default Authen;
