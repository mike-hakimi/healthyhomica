import React from "react";
import '../cssComponents/GoogleMap.css';

function GoogleMap(){
    return (
<div>
   
<iframe    className="google-maps"
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1612512.0482442325!2d-123.73944242959529!3d37.87344788191634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6fdadd627fd42fd1%3A0x244c91c346c79ce1!2sWindows%209%20-%205!5e0!3m2!1sen!2sus!4v1695162095693!5m2!1sen!2sus" 
style={{ border:'0', 
allowfullscreen:"" ,loading:"lazy" ,
referrerpolicy:"no-referrer-when-downgrade"}}>

</iframe>
    
</div>
    )
};

export default GoogleMap;