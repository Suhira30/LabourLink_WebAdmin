import axios from 'axios';
const BASE_URL='http://localhost:8080';
const mailService=axios.create({
    baseURL:BASE_URL,});

    mailService.interceptors.request.use(
        (config)=>
            {
                const token = localStorage.getItem('token');
                if(token){
                    config.headers.Authorization=`Bearer ${token}`;
                }
                return config;
            },
            (error)=>{
                return Promise.reject(error)
            }
    );

//-------------------------------------Get vaccancy mails------------------
const fetchVaccancyMail = async () => {
    try {
    const response = await mailService.get('/api/admin_emails');
    console.log("mails :",response.data);
    return (response.data);
    }catch (error) {
       throw (error);
    }
    };
//-------------------------------------Get Warning mails------------------
const fetchWarningMail = async () => {
    try {
    const response = await mailService.get('/api/admin_emails/warning');
    console.log("warninig mails :",response.data);
    return (response.data);
    }catch (error) {
       throw (error);
    }
    };
//-------------------------------------Get Anniversary mails------------------
const fetchAnniversaryMail = async () => {
    try {
    const response = await mailService.get('/api/admin_emails/anniversary');
    console.log("Anniversary mails :",response.data);
    return (response.data);
    }catch (error) {
       throw (error);
    }
    };
//-------------------------------------Send vaccancy mails------------------
const sendVaccancyMail = async (body) => {
    try {
    const response = await mailService.post('/api/admin_emails',body);
    console.log("Vaccancy mails :",response);
    fetchVaccancyMail();
    return (response);
    }catch (error) {
       throw (error);
    }
    };
//-------------------------------------Send Warning mails------------------
const sendWarningMail = async (recipientEmail, body) => {
    try {
    const response = await mailService.post('/api/admin_emails/warning',recipientEmail, body);
    fetchWarningMail();
    console.log("Vaccancy mails :",response);
    return (response);
    }catch (error) {
       throw (error);
    }
    };    
export default{
    mailService,
    fetchVaccancyMail,
    fetchWarningMail,
    fetchAnniversaryMail,
    sendVaccancyMail,
    sendWarningMail,
}