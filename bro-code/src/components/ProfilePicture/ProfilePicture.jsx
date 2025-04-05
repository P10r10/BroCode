function ProfilePicture() {

    const imageUrl = "./src/assets/miley.jpg";

    const clickHandler = (e) => {
        e.target.style.display = "none";
    }

    return (
        <img alt="" src={imageUrl} onClick={(e) => {clickHandler(e)}}></img>
    );
}

export default ProfilePicture