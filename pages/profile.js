import { useState, useRef, useEffect } from "react";
// avatars
import { createAvatar } from '@dicebear/core';
import { lorelei } from '@dicebear/collection';

const profile = () => {
    
    const avatar = createAvatar(lorelei, {
        seed: 'John Doe',
    });
    
    const svg = avatar.toString();

    const [profile, setProfile] = useState({

    })
    
    return (
        <>
            <div className="col-10-xs">
                <form action="">
                    <div className="row align-i-center h-screen">
                        <div className="col-2-xs">
                            <div className="avatar-xl">
                                <div dangerouslySetInnerHTML={{ __html: svg }} />;
                            </div>
                        </div>
                        <div className="col-4-xs">
                            <label htmlFor="username" className="custom-text">Username:</label>
                            <input type="text" className='mt-2 input-t' placeholder="Noah" />
                        </div>
                        <div className="col-4-xs ml-4">
                            <label htmlFor="username" className="custom-text">Email:</label>
                            <input type="email" className='mt-2 input-t' placeholder="broken.contact.1211@gmail.com" />
                        </div>
                        <div className="ml-3">
                            <button className='custom-btn br-full custom-text'>save changes</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
 
export default profile;