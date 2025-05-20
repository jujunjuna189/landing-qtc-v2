<template>
    <div>
        <div :style='{ width: "100%", height: "500px" }'>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d126906.97520362909!2d106.89097593334279!3d-6.284362415605013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1734288428822!5m2!1sen!2sid"
                width="100%"
                height="100%"
                :style='{ border: 0 }'
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
            />
        </div>
    </div>
</template>