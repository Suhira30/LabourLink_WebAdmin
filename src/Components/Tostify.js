import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import BASE_URL from '../Pages/Service/baseUrl'; // Ensure this URL points to your backend
import 'react-toastify/dist/ReactToastify.css';

const Tostify = () => {
  const [notifications, setNotifications] = useState([]);
  const [lastCheckedId, setLastCheckedId] = useState(() => {
    const savedLastCheckedId = localStorage.getItem('lastCheckedId');
    return savedLastCheckedId ? parseInt(savedLastCheckedId, 10) : 0;
  });

  const [reports, setReports] = useState([]);
  const [lastCheckedReportedId, setLastCheckedReportedId] = useState(() => {
    const savedLastCheckedReportedId = localStorage.getItem('lastCheckedReportedId');
    return savedLastCheckedReportedId ? parseInt(savedLastCheckedReportedId, 10) : 0;
  });

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/adminnotification/poll?lastCheckedId=${lastCheckedId}`);
        const data = await response.json();

        if (data && data.length > 0) {
          data.forEach(notification => handleNotification(notification));
          const latestId = Math.max(...data.map(n => n.id));
          setLastCheckedId(latestId);
          console.log(latestId);
          localStorage.setItem('lastCheckedId', latestId);
        }
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    const intervalId = setInterval(fetchNotifications, 5000); // Poll every 5 seconds

    return () => clearInterval(intervalId);
  }, [lastCheckedId]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/v1/report/poll?lastCheckedReportedId=${lastCheckedReportedId}`);
        const responseText = await response.text(); // Get the raw response text
        // console.log('Response Status:', response.status); // Log the response status
        // console.log('Response Text:', responseText); // Log the raw response text

        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const data = JSON.parse(responseText); // Parse the response text as JSON

        if (data && data.length > 0) {
          data.forEach(report => handleReportNotification(report));
          const latestId = Math.max(...data.map(report => report.id));
          setLastCheckedReportedId(latestId);
          // console.log(latestId);
          localStorage.setItem('lastCheckedReportedId', latestId);
        }
      } catch (error) {
        console.error('Error fetching reports:', error);
      }
    };

    const intervalId = setInterval(fetchReports, 5000); // Poll every 5 seconds

    return () => clearInterval(intervalId);
  }, [lastCheckedReportedId]);

  const handleNotification = (notification) => {
    setNotifications((prevNotifications) => [...prevNotifications, notification]);
    triggerNotificationToast(notification);
  };

  const handleReportNotification = (report) => {
    setReports((prevReports) => [...prevReports, report]);
    triggerReportToast(report);
  };

  const triggerNotificationToast = (notification) => {
    const message = `<b>${notification.name}</b> (${notification.email}) Wants to join with us `;
    toast(<div dangerouslySetInnerHTML={{ __html: message }} />, {
      position: "bottom-right",
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        backgroundColor: '#0a0f69', // Blue background
        color: '#ffffff', // White text
      },
    });
  };

  const triggerReportToast = (report) => {
    const message = `Report: ${report.title}. ${report.reportedByName} reported to ${report.reportedToName}.`;
    toast(<div dangerouslySetInnerHTML={{ __html: message }} />, {
      position: "bottom-right",
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        backgroundColor: 'red', // Red background
        color: '#ffffff', // White text
      },
    });
  };

  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={false}
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        progress={undefined}
      />
    </>
  );
};

export default Tostify;
