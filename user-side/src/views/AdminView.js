import React, { useEffect, useState } from 'react';
import Api from '../helpers/Api';
import AddAnimalForm from '../components/AddAnimalForm';


function AdminView(props) {
    const [memberMsg, setMemberMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        fetchMemberMsg();
    }, []);

    async function fetchMemberMsg() {
        // Get "Members Only" message for authenticated users
        let myresponse = await Api.getContent('/admin-only');
        if (myresponse.ok) {
            setMemberMsg(myresponse.data.message);
            setErrorMsg('');
        } else {
            setMemberMsg('');
            let msg = `Error ${myresponse.status}: ${myresponse.error}`;
            setErrorMsg(msg);
        }
    }

    if (errorMsg) {
        return <h2 style={{ color: 'red' }}>{errorMsg}</h2>
    }

    if (!memberMsg) {
        return <h2>Loading...</h2>;
    }

    return (
        <div className="AdminView">
            <h1>Admins Only</h1>
            <p>{memberMsg}</p>
            <AddAnimalForm addAnimalCb={fd => props.addAnimalCb(fd)} />
        </div>
    );
}


export default AdminView;