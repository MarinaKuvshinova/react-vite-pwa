import video from "/video1.mp4";

export default function Video1() {
    return (
        <div>
            <video width="750" height="500" controls>
                <source src={video} type="video/mp4" />
            </video>
        </div>
    );
}
