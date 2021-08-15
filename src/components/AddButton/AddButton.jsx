import style from '../css/style.module.scss'
import {BsFillPlusCircleFill} from 'react-icons/bs';
import {Button} from 'react-bootstrap';
import { useState } from 'react';
import UserInput from '../UserInput/UserInput';

const AddButton = ()=>{

    const [modal, setModal] = useState(false);

    const modalOnClickHandler = ()=>{
        setModal(true);
    }

    return (
        <>
            <h1 className={`text-center ${style.orgText} pt-4`}>Note Taking App </h1>
                <center>
                <Button 
                    className={`${style.btnBtn} mb-5`}
                    onClick={modalOnClickHandler}
                    >
                    <BsFillPlusCircleFill /> Add Note 
                </Button>
                </center>

                {modal && (
                    <UserInput />
                )}
        </>
    )
}

export default AddButton;

