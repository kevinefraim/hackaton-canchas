import "./MapFrame.css";

const MapFrame = () => {
  return (
    <div className="frame-container">
      <h4>¿Dónde Estamos?</h4>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.108082832451!2d-58.45868558544063!3d-34.62670886622067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca25d278f9ff%3A0xd4fab0f467f9685c!2sAv.%20Rivadavia%206400%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1642030981985!5m2!1ses-419!2sar"
        width="440"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MapFrame;
