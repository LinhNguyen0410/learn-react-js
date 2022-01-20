import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';


function PreviewAvatar() {

    const [avatar, setAvatar] = useState()

    useEffect(() => {
        // .....do sth...

        // clean up link when file change
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]
        //  because file above is an object then i can set new property (preview) for it.
        file.preview = URL.createObjectURL(file)
        setAvatar(file)

        // when case multiple image : => see below
        // e.target.value = null
        // assign value of src image = null after image chosen => make sure that you can choose same image again after that
    }
    return (
        <div>
            <input type="file" onChange={handlePreviewAvatar} />
            {/* if has state review then render */}
            {avatar && (
                <img src={avatar.preview} alt="" width='500px' />
            )}
        </div>
    );
}

export default PreviewAvatar;