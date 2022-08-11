import React from 'react';
import { Link } from 'react-router-dom';
import googleSvg from '../../../Assets/SignUp/google.svg';
import ChatIcon from '../../../Assets/Dashboard/Chat_solid.png';
import DevicesIcon from '../../../Assets/Dashboard/Devices_solid.png';
import emojiIcon from '../../../Assets/Dashboard/emoji_solid.png';
import FeedIcon from '../../../Assets/Dashboard/Feed_solid.png';
import GroupIcon from '../../../Assets/Dashboard/Group.png';
import MailIcon from '../../../Assets/Dashboard/Mail_solid.png';
import SwitchIcon from '../../../Assets/Dashboard/Switch_solid.png';

const DashboardLeftMenu = () => {
  return (
    <div className="mt-10">
      <div className="flex flex-col">
        <div className="flex flex-col text-center mb-10">
          {[
            ['Main Page', '/', FeedIcon],
            ['Teams', '/', DevicesIcon],
            ['Calendar', '/', emojiIcon],
            ['Project Board', '/', FeedIcon],
            ['Project Tasks', '/', SwitchIcon, 2, 'red'],
            ['Ratings', '/', GroupIcon],
            ['Inbox', '/', MailIcon, 5],
            ['Notifications', '/', ChatIcon, 10],
          ].map(([title, url, icon, notifications, color]) => (
            <div className="flex flex-row justify-between text-center">
              <div className="icons">
                <Link
                  className="hover:text-lightBlue mb-6 flex flex-row text-sm font-semibold text-lightgray"
                  key={title}
                  to={url}
                >
                  <img src={icon} alt="" className="mr-5 w-6 h-6" />

                  {title}
                </Link>
              </div>
              {notifications > 0 && (
                <div
                  style={{ background: color }}
                  className="bg-slate-500 h-6 w-6 rounded-full text-center items-center text-sm"
                >
                  <span style={{ color: 'black', opacity: 1 }}>
                    {notifications}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="menu__peers">
        <div className="peers">
          <div className="peer">Peter Taylor</div>
          <div className="peer">Peter Taylor</div>
          <div className="peer">Peter Taylor</div>
        </div>
      </div>
      <div className="dragFile"></div>
      <div className="theme"></div>
    </div>
  );
};

export default DashboardLeftMenu;
