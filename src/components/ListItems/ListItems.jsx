import { Col, Row, Button } from "react-bootstrap"
import { RiDeleteBin4Fill, RiDeleteBinFill } from "react-icons/ri"
import { BiMessageAltEdit } from "react-icons/bi";
import { useState } from "react";
import style from '../css/style.module.scss'

const ListItems = (props) => {

    const { listItems } = props;
    
    const [searchResult, setSearchResult] = useState('');

    const noteCard = listItems.filter((val)=>{
        if(searchResult === ''){
            return val;
        }else if(val.title.toLowerCase().includes(searchResult.toLowerCase())){
            return val;
        }
    }).map((list,index)=>(
        <>
            <Col key={index} md={{span:5, offset:1}} className="bg-white p-4 mt-4">
                {list.edit && (
                    <>
                        <h4><b>{list.title}</b></h4>
                        <p className="mt-3">{list.text}</p>
                    </>
                )}

                {!list.edit && (
                    <>
                        <input 
                            type="text"
                            defaultValue={list.title}
                            onChange={(e)=>{
                                const textVal = e.target.value;
                                list.title = textVal;
                            }} /> <br /><br />
                        <textarea name="" id="" cols="50" rows="3"
                         defaultValue={list.text}
                         onChange={(e)=>{
                            const textVal = e.target.value;
                            list.text = textVal;
                        }}></textarea>
                    </>
                )}

                <Row>
                    <Col><Button 
                    className={`${style.btnRem} mt-3`}
                    onClick={()=>props.removeClickHandler(index)}
                    ><RiDeleteBin4Fill />Remove</Button></Col>

                    <Col>
                        {list.edit && (
                            <Button 
                            className={`${style.btnRem} mt-3`}
                            onClick={()=>props.editClickHandler(index)}
                            ><BiMessageAltEdit />Edit</Button>
                        )}

                        {!list.edit && (
                            <Button 
                            className={`${style.btnRem} mt-3`}
                            onClick={()=>props.saveClickHandler(list.title,list.text,index)}
                            ><BiMessageAltEdit />Save</Button>
                        )}      
                        
                    </Col>
                </Row>
                
                
            </Col>
        </>
    )         
    )
    return (
        <>
                

            <Row className={`${style.orange} p-5`}>
                <Row>
                {listItems.length > 1 && (
                    <>
                        <input 
                        type="text"
                        placeholder="Search note"
                        className={style.searchInput}
                        style={{width:'300px', height:'50px'}}
                        onChange={(e)=>{
                            setSearchResult(e.target.value);
                        }}
                      />
                    </>
                )}
                </Row>
                
                <Row className={` ${style.fixWidth}`}>
                    {noteCard}
                </Row>
                
                
            </Row>
            <Button 
                className={`${style.btnBtn} my-5`}
                onClick={props.deleteAllClickHandler}><RiDeleteBinFill />Delete All </Button>
        </>
    )
}

export default ListItems
