
/* Tin Can configuration */

//
// ActivityID that is sent for the statement's object
ANALYTICS_COURSE_ID = "https://app.authr.it/activities/course/112363";

//
// CourseName for the activity
//
ANALYTICS_COURSE_NAME = {
    "en-US": "Design Team"
};

//
// CourseDesc for the activity
//
ANALYTICS_COURSE_DESC = {
    "en-US": ""
};

//
// Pre-configured LRSes that should receive data, added to what is included
// in the URL and/or passed to the constructor function.
//
// An array of objects where each object may have the following properties:
//
//    endpoint: (including trailing slash '/')
//    auth:
//    allowFail: (boolean, default true)
//
ANALYTICS_RECORD_STORES = [
	
];

ANALYTICS_USE_QUERY_STRING_ENDPOINT = false;
