import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        title="map.google"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178790.9560391617!2d-73.87038475532744!3d45.55819684515272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a541c64b70d%3A0x654e3138211fefef!2sMontreal%2C%20QC%2C%20Canada!5e0!3m2!1sen!2skr!4v1611060139459!5m2!1sen!2skr"
        width="100%"
        height="450"
        frameborder="0"
        style={{ border: 0 }}
        allowFullScreen={false}
      ></iframe>

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
