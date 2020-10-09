import React from 'react';
import './css/MessageSender.css'
import {Avatar, Input} from "@material-ui/core";
import {Videocam, PhotoLibrary, InsertEmoticon} from "@material-ui/icons";

const MessageSender = () => {
    const [input, setInput] = React.useState('')
    const [image, setImage] = React.useState(null)

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.file[0])
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className={'messageSender'}>
            <div className="messageSender__top">
                <Avatar src={'https://scontent.fcai1-2.fna.fbcdn.net/v/t31.0-8/17212170_1888052098098740_325421327664936894_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_eui2=AeGeUOgSTEFIR1p2dMp-aaJohK0qxpe2jxeErSrGl7aPF0p7NwsOFglPHAglIQxbxqE0bFY6rMKK0am-rD9i9Kik&_nc_ohc=5l6MtJOtMP0AX_kOcZM&_nc_ht=scontent.fcai1-2.fna&oh=8054301ef7a895cac3ea905c82b33e08&oe=5FA5C353'} />
                <form action="">
                    <input type="text" className={'messageSender__input'} placeholder={"What's on your mind?"} value={input} onChange={(e) => setInput(e.target.value)}/>
                    <Input className={'messageSender__fileUploader'} type="file" />
                    <button onChange={handleChange} onClick={handleSubmit} type={'submit'}>Hidden</button>
                </form>
            </div>

            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <Videocam style={{color: 'red'}} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibrary style={{color: 'green'}} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticon style={{color: 'orange'}} />
                    <h3>Feeling/Activity</h3>
                </div>

            </div>
        </div>
    );
};

export default MessageSender;