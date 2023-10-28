import { Button, ButtonGroup } from "@mui/material";
import { useState } from "react";

export function Modal({ addPost, close }) {
    const [ titlePost, setTitlePost ] = useState('');
    const [ descrPost, setDescrPost ] = useState('');


    return (
        <div className="background">
            <div className="modal">
                <form>
                    <label>
                        Заголовок поста
                        <input type="text" value={titlePost} onChange={e => setTitlePost(e.target.value)} />
                    </label>
                    <label>
                        Контент поста
                        <input type="text" value={descrPost} onChange={e => setDescrPost(e.target.value)} />
                    </label>
                    <ButtonGroup size="large" variant="outlined" aria-label="outlined button group">
                        <Button variant="contained" onClick={() => addPost(titlePost, descrPost)}>Отправить</Button>
                        <Button onClick={close}>Отмена</Button>
                    </ButtonGroup>
                </form>
            </div>
        </div>
    )
}