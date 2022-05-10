import './message.css';
import { format } from 'timeago.js';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { axiosInstance } from '../../config';

export default function Message({ message, own }) {
  const [sender, setSender] = useState(null);

  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const getSender = async () => {
      try {
        const res = await axiosInstance.get('/users?userId=' + message.sender);
        setSender(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getSender();
  }, [message, own]);

  return (
    <div className={own ? 'message own' : 'message'}>
      <div className='messageTop'>
        <img
          className='messageImg'
          src={own ? PF + user.profilePicture : PF + sender?.profilePicture}
          alt=''
        />
        <p className='messageText'>{message.text}</p>
      </div>
      <div className='messageBottom'>{format(message.createdAt)}</div>
    </div>
  );
}
