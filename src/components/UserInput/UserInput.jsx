import { useState } from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import {BsFillPlusCircleFill} from 'react-icons/bs';
import {AiFillCloseCircle} from 'react-icons/ai';
import style from '../css/style.module.scss'

const UserInput = (props) => {

    const [titleVal, setTitleVal] = useState('');
    const [textVal, setTextVal] = useState('');
    const [modal, setmodal] = useState(false);
    const [add, setAdd] = useState(true);

    const titleOnChangeHandler = (e)=>{
        setTitleVal(e.target.value);
    }

    const textAreaOnChangeHandler = (e)=>{
        setTextVal(e.target.value);
    }

    const addNoteClickHandler = ()=>{
        if(!(titleVal.trim() && textVal.trim())){
            alert('Please fill both inputs');
        }else if(titleVal.trim() && textVal.trim()){
            props.addNoteHandler(titleVal, textVal);
            setTextVal('');
            setTitleVal('');
            setmodal(false);
            setAdd(true);
        }
        
    }

    const modalClickHandler = ()=>{
        setmodal(true);
        setAdd(false);
    }

    const closeClickHandler = ()=>{
        setmodal(false);
        setAdd(true);
    }

    return (
        <>
            <h1 className={`text-center ${style.orgText}`}>Note Taking App</h1>

            <center>
                {add && (
                    <>
                        <Button 
                    className={`${style.btnBtn} my-3`}
                    onClick = {modalClickHandler}
                    ><BsFillPlusCircleFill /> Add </Button>
                    </>
                )}
            </center>


            {modal && (
                <>
                    <Row className={`pb-5 ${style.modal}`}>
                    <h4 className={`${style.orgText} mt-3 `}>Add A New Note</h4>
                    <Col md={10}>
                        <input 
                            type="text" 
                            className={`${style.titleInp}`}
                            placeholder="Title Of the note"
                            value={titleVal}
                            onChange={titleOnChangeHandler} />
                    </Col>
                    <Col md={10} className="mt-4">
                        <textarea 
                            className={`${style.textInp}`}
                            name="" id="" cols="150" rows="10"
                            placeholder="Write your note here...."
                            value={textVal}
                            onChange={textAreaOnChangeHandler}></textarea>
                    </Col>
                    <Row>
                        <Col md={2}>
                            <Button 
                                className={`${style.btnBtn} my-4`}
                                onClick={addNoteClickHandler}><BsFillPlusCircleFill /> Add Note </Button>
                        </Col>

                        <Col md={1}>
                            <Button 
                                className={`${style.btnBtn} my-4`}
                                onClick={closeClickHandler}><AiFillCloseCircle /> Close </Button>
                        </Col>
                        
                    </Row>
                    
                    
                </Row>
                
                    </>
            )}
        </>
    )
}

export default UserInput
